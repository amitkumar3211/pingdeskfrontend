import { useState, useEffect, useCallback } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { fetchDashboard, updateSettings, createOrder, verifyPayment, getExportUrl } from './api';
import { events } from '../lib/analytics';

/* ───── Animated Counter ───── */
const AnimCount = ({ to, duration = 1200 }) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = to / (duration / 16);
    const t = setInterval(() => {
      start += step;
      if (start >= to) { setVal(to); clearInterval(t); }
      else setVal(Math.floor(start));
    }, 16);
    return () => clearInterval(t);
  }, [to, duration]);
  return <>{typeof to === 'string' ? to : val.toLocaleString()}</>;
};

/* ───── Fade-in wrapper ───── */
const FadeIn = ({ children, delay = 0, className = '' }) => {
  const [show, setShow] = useState(false);
  useEffect(() => { const t = setTimeout(() => setShow(true), delay); return () => clearTimeout(t); }, [delay]);
  return (
    <div className={`transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${className}`}>
      {children}
    </div>
  );
};

/* ───── Components ───── */
const StatusDot = ({ status }) => {
  const c = { pending: 'bg-amber-400', in_progress: 'bg-blue-400', done: 'bg-emerald-400' };
  return <span className={`w-2 h-2 rounded-full ${c[status] || 'bg-gray-300'} inline-block`} />;
};

const StatusBadge = ({ status }) => {
  const config = {
    pending: 'bg-amber-50 text-amber-700 border-amber-100',
    in_progress: 'bg-blue-50 text-blue-700 border-blue-100',
    done: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  };
  const labels = { pending: 'Pending', in_progress: 'In Progress', done: 'Done' };
  return (
    <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full border ${config[status] || ''}`}>
      <StatusDot status={status} />
      {labels[status] || status}
    </span>
  );
};

const Avatar = ({ name, size = 'w-7 h-7', color }) => {
  const colors = ['bg-violet-100 text-violet-600', 'bg-blue-100 text-blue-600', 'bg-emerald-100 text-emerald-600', 'bg-amber-100 text-amber-600', 'bg-pink-100 text-pink-600', 'bg-indigo-100 text-indigo-600'];
  const c = color || colors[((name || '').charCodeAt(0) || 0) % colors.length];
  return (
    <div className={`${size} rounded-full ${c} flex items-center justify-center text-[10px] font-bold flex-shrink-0 ring-2 ring-white`}>
      {(name || '?').charAt(0).toUpperCase()}
    </div>
  );
};

const StatCard = ({ value, label, color, icon, delay = 0 }) => (
  <FadeIn delay={delay}>
    <div className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:shadow-gray-100/80 hover:-translate-y-0.5 transition-all duration-300 cursor-default">
      <div className="flex items-start justify-between">
        <div>
          <p className={`text-3xl font-black ${color || 'text-gray-900'} tracking-tight`}>
            {typeof value === 'number' ? <AnimCount to={value} /> : value}
          </p>
          <p className="text-[13px] text-gray-400 mt-1.5 font-medium">{label}</p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-gray-50 group-hover:bg-gray-100 transition-colors flex items-center justify-center text-gray-400">
          {icon}
        </div>
      </div>
    </div>
  </FadeIn>
);

/* ───── Main Dashboard ───── */
const Dashboard = () => {
  const { token } = useParams();
  const [searchParams] = useSearchParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');
  const [range, setRange] = useState('all');
  const [page, setPage] = useState(1);
  const [reminderHours, setReminderHours] = useState('');
  const [settingsMsg, setSettingsMsg] = useState('');
  const [upgradeMsg, setUpgradeMsg] = useState('');
  const [activeRow, setActiveRow] = useState(null);

  const load = useCallback(async () => {
    try {
      const d = await fetchDashboard(token, filter, page, range);
      setData(d);
      setReminderHours(d.workspace.reminder_hours);
      events.dashboardView();
    } catch { setData(null); }
    finally { setLoading(false); }
  }, [token, filter, page, range]);

  useEffect(() => { load(); }, [load]);

  useEffect(() => {
    if (searchParams.get('upgrade') === 'true' && data && !data.workspace.is_pro) {
      const t = setTimeout(() => handleUpgrade(), 1000);
      return () => clearTimeout(t);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (!document.querySelector('script[src*="razorpay"]')) {
      const s = document.createElement('script');
      s.src = 'https://checkout.razorpay.com/v1/checkout.js';
      document.body.appendChild(s);
    }
  }, []);

  const handleSaveSettings = async () => {
    const res = await updateSettings(token, parseInt(reminderHours));
    if (res.success) {
      setSettingsMsg('Saved!');
      events.settingsUpdate('reminder_interval_hours');
      setTimeout(() => setSettingsMsg(''), 2000);
    }
  };

  const handleUpgrade = async () => {
    try {
      events.checkoutStarted();
      const order = await createOrder(token);
      events.paymentInitiated();
      const rzp = new window.Razorpay({
        key: order.key, amount: order.amount, currency: order.currency,
        name: 'Pingdesk', description: 'Pro Plan — Monthly', order_id: order.order_id,
        handler: async (r) => {
          const res = await verifyPayment(token, { payment_id: r.razorpay_payment_id, order_id: r.razorpay_order_id, signature: r.razorpay_signature });
          if (res.success) {
            events.paymentSuccess(r.razorpay_payment_id);
            setUpgradeMsg('Welcome to Pro! Your workspace has been upgraded.');
            load();
          } else {
            events.paymentFailed('verification_failed');
          }
        },
        prefill: { name: order.workspace_name }, theme: { color: '#7C3AED' },
        modal: {
          ondismiss: () => events.paymentFailed('user_dismissed'),
        },
      });
      rzp.open();
    } catch {
      events.paymentFailed('order_creation_failed');
      alert('Something went wrong.');
    }
  };

  /* ── Loading ── */
  if (loading) return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-violet-50/30 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-[3px] border-violet-100" />
          <div className="absolute inset-0 rounded-full border-[3px] border-violet-500 border-t-transparent animate-spin" />
        </div>
        <p className="text-sm text-gray-400 font-medium">Loading dashboard...</p>
      </div>
    </div>
  );

  if (!data) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" /></svg>
        </div>
        <p className="text-gray-500 font-medium">Dashboard not found</p>
        <p className="text-gray-400 text-sm mt-1">This link may be invalid or expired.</p>
      </div>
    </div>
  );

  const { workspace, stats, requests, pro } = data;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-violet-50/20 font-sans antialiased">
      {/* ── Navbar ── */}
      <nav className="bg-white/80 backdrop-blur-xl border-b border-gray-200/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-8 h-8 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/30 transition-shadow">
                <span className="text-white font-black text-sm">P</span>
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
              </div>
              <span className="text-base font-extrabold text-gray-900 tracking-tight">Pingdesk</span>
            </a>
            <div className="hidden sm:flex items-center gap-2 ml-2">
              <svg className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              <span className="text-sm text-gray-500 font-medium">{workspace.name}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {workspace.is_pro && (
              <a href={getExportUrl(token, range)} onClick={() => events.csvExport()} className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-gray-700 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
                Export
              </a>
            )}
            <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full ${workspace.is_pro ? 'bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-md shadow-violet-500/20' : 'bg-gray-100 text-gray-500'}`}>
              {workspace.plan}
            </span>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* ── Success banner ── */}
        {upgradeMsg && (
          <FadeIn>
            <div className="mb-6 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm px-5 py-4 rounded-2xl flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              {upgradeMsg}
            </div>
          </FadeIn>
        )}

        {/* ── Free plan usage ── */}
        {!workspace.is_pro && (
          <FadeIn delay={50}>
            <div className="mb-8 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-violet-50 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Monthly Usage</p>
                    <p className="text-xs text-gray-400">{stats.monthly_count} of {stats.monthly_limit} requests</p>
                  </div>
                </div>
                <span className={`text-sm font-bold ${stats.monthly_count >= stats.monthly_limit ? 'text-red-500' : 'text-violet-600'}`}>
                  {Math.round((stats.monthly_count / stats.monthly_limit) * 100)}%
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                <div className={`h-2 rounded-full transition-all duration-1000 ease-out ${stats.monthly_count >= stats.monthly_limit ? 'bg-red-500' : 'bg-gradient-to-r from-violet-500 to-indigo-500'}`}
                  style={{ width: `${Math.min((stats.monthly_count / stats.monthly_limit) * 100, 100)}%` }} />
              </div>
            </div>
          </FadeIn>
        )}

        {/* ── Stats Grid ── */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <StatCard delay={100} value={stats.total} label="Total Requests" icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>} />
          <StatCard delay={200} value={stats.pending} label="Pending" color="text-amber-500" icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} />
          <StatCard delay={300} value={stats.in_progress} label="In Progress" color="text-blue-500" icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" /></svg>} />
          <StatCard delay={400} value={stats.done} label="Completed" color="text-emerald-500" icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} />
          <StatCard delay={500} value={`${stats.completion_rate}%`} label="Completion Rate" color="text-violet-600" icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>} />
        </div>

        {/* ── Avg time + quick stat ── */}
        {stats.avg_completion_hours != null && (
          <FadeIn delay={600}>
            <div className="mb-8 flex gap-4 flex-wrap">
              <div className="bg-white rounded-2xl border border-gray-100 px-6 py-5 shadow-sm">
                <p className="text-xs text-gray-400 font-medium">Avg. Completion</p>
                <p className="text-2xl font-black text-gray-900 mt-1">
                  {stats.avg_completion_hours < 1 ? '< 1h' : stats.avg_completion_hours < 24 ? `${stats.avg_completion_hours}h` : `${(stats.avg_completion_hours / 24).toFixed(1)}d`}
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 px-6 py-5 shadow-sm">
                <p className="text-xs text-gray-400 font-medium">Reminder Interval</p>
                <p className="text-2xl font-black text-gray-900 mt-1">{workspace.reminder_hours}h</p>
              </div>
            </div>
          </FadeIn>
        )}

        {/* ── Pro: Weekly Chart ── */}
        {workspace.is_pro && pro.weekly_chart.length > 0 && (
          <FadeIn delay={300}>
            <div className="mb-8 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-base font-bold text-gray-900">Weekly Activity</h3>
                  <p className="text-xs text-gray-400 mt-0.5">Requests created vs completed — last 8 weeks</p>
                </div>
                <div className="flex items-center gap-5 text-xs font-medium">
                  <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-violet-500/80" /> Created</span>
                  <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-emerald-500/80" /> Completed</span>
                </div>
              </div>
              <div className="flex items-end gap-2 sm:gap-4 h-48">
                {(() => {
                  const max = Math.max(1, ...pro.weekly_chart.map(w => Math.max(w.created, w.completed)));
                  return pro.weekly_chart.map((w, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                      <div className="w-full flex gap-1 items-end h-40">
                        <div className="flex-1 rounded-t-lg bg-violet-500/80 group-hover:bg-violet-500 transition-all duration-300 relative cursor-default"
                          style={{ height: `${Math.max(6, (w.created / max) * 100)}%` }}>
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-medium px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
                            {w.created} created
                          </div>
                        </div>
                        <div className="flex-1 rounded-t-lg bg-emerald-500/80 group-hover:bg-emerald-500 transition-all duration-300 relative cursor-default"
                          style={{ height: `${Math.max(6, (w.completed / max) * 100)}%` }}>
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-medium px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
                            {w.completed} done
                          </div>
                        </div>
                      </div>
                      <span className="text-[11px] text-gray-400 font-medium">{w.label}</span>
                    </div>
                  ));
                })()}
              </div>
            </div>
          </FadeIn>
        )}

        {/* ── Pro: Team Stats ── */}
        {workspace.is_pro && (pro.top_assignees.length > 0 || pro.top_creators.length > 0) && (
          <FadeIn delay={400}>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {pro.top_assignees.length > 0 && (
                <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-8 h-8 bg-violet-50 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900">Team Performance</h3>
                      <p className="text-xs text-gray-400">Completion rate by assignee</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {pro.top_assignees.map((m, i) => (
                      <div key={i} className="group">
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2.5">
                            <Avatar name={m.name} />
                            <span className="text-sm font-medium text-gray-900">{m.name}</span>
                          </div>
                          <div className="flex items-center gap-3 text-xs">
                            <span className="text-gray-400">{m.total} tasks</span>
                            <span className={`font-bold ${m.rate >= 70 ? 'text-emerald-600' : m.rate >= 40 ? 'text-amber-600' : 'text-red-500'}`}>{m.rate}%</span>
                          </div>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                          <div className={`h-2 rounded-full transition-all duration-1000 ease-out ${m.rate >= 70 ? 'bg-gradient-to-r from-emerald-400 to-emerald-500' : m.rate >= 40 ? 'bg-gradient-to-r from-amber-400 to-amber-500' : 'bg-gradient-to-r from-red-300 to-red-400'}`}
                            style={{ width: `${m.rate}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {pro.top_creators.length > 0 && (
                <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" /></svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900">Most Active</h3>
                      <p className="text-xs text-gray-400">Top request creators</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {pro.top_creators.map((c, i) => (
                      <div key={i} className="flex items-center justify-between py-1.5 group">
                        <div className="flex items-center gap-3">
                          <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black ${i === 0 ? 'bg-amber-100 text-amber-600' : i === 1 ? 'bg-gray-100 text-gray-500' : i === 2 ? 'bg-orange-50 text-orange-400' : 'bg-gray-50 text-gray-400'}`}>
                            {i + 1}
                          </span>
                          <Avatar name={c.name} />
                          <span className="text-sm font-medium text-gray-900">{c.name}</span>
                        </div>
                        <span className="text-sm font-bold text-gray-900">{c.total}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </FadeIn>
        )}

        {/* ── Filters ── */}
        <FadeIn delay={500}>
          <div className="flex flex-col gap-3 mb-5">
            {/* Date range tabs */}
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white rounded-xl border border-gray-100 p-1 shadow-sm">
                {[
                  { key: 'today', label: 'Today' },
                  { key: 'week', label: 'This Week' },
                  { key: 'month', label: 'This Month' },
                  { key: 'year', label: 'This Year' },
                  { key: 'all', label: 'All Time' },
                ].map((r) => (
                  <button
                    key={r.key}
                    onClick={() => { setRange(r.key); setPage(1); events.filterChange(`range:${r.key}`); }}
                    className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                      range === r.key ? 'bg-violet-600 text-white shadow-md' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Status tabs + mobile CSV */}
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white rounded-xl border border-gray-100 p-1 shadow-sm">
                {[
                  { key: '', label: 'All', count: stats.total },
                  { key: 'pending', label: 'Pending', count: stats.pending },
                  { key: 'in_progress', label: 'In Progress', count: stats.in_progress },
                  { key: 'done', label: 'Done', count: stats.done },
                ].map((f) => (
                  <button key={f.key} onClick={() => { setFilter(f.key); setPage(1); events.filterChange(f.key); }}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                      filter === f.key ? 'bg-gray-900 text-white shadow-md' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                    }`}>
                    {f.label} <span className="ml-1 opacity-60">{f.count}</span>
                  </button>
                ))}
              </div>
              {workspace.is_pro && (
                <a href={getExportUrl(token, range)} onClick={() => events.csvExport()} className="sm:hidden flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-white text-gray-600 border border-gray-100 hover:bg-gray-50 shadow-sm">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
                  CSV
                </a>
              )}
            </div>
          </div>
        </FadeIn>

        {/* ── Requests Table ── */}
        <FadeIn delay={600}>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            {requests.data.length === 0 ? (
              <div className="py-20 text-center">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
                </div>
                <p className="text-sm text-gray-500 font-medium">No requests yet</p>
                <p className="text-xs text-gray-400 mt-1">Use <code className="bg-gray-100 px-1.5 py-0.5 rounded text-violet-600 font-mono">/request</code> in Slack to create one</p>
              </div>
            ) : (
              <>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-100">
                        {['#', 'Title', 'Created By', 'Assigned To', 'Status', 'Created'].map((h) => (
                          <th key={h} className="text-left text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-5 py-3.5 bg-gray-50/50">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {requests.data.map((r, idx) => (
                        <tr key={r.id}
                          onMouseEnter={() => setActiveRow(r.id)} onMouseLeave={() => setActiveRow(null)}
                          className={`border-b border-gray-50 transition-colors duration-150 cursor-default ${activeRow === r.id ? 'bg-violet-50/30' : 'hover:bg-gray-50/50'}`}
                          style={{ animationDelay: `${idx * 30}ms` }}>
                          <td className="px-5 py-4 text-xs text-gray-400 font-mono">{String(r.id).padStart(3, '0')}</td>
                          <td className="px-5 py-4">
                            <span className="font-semibold text-gray-900 text-sm">{r.title}</span>
                          </td>
                          <td className="px-5 py-4">
                            <div className="flex items-center gap-2">
                              <Avatar name={r.created_by} size="w-6 h-6" />
                              <span className="text-sm text-gray-600">{r.created_by}</span>
                            </div>
                          </td>
                          <td className="px-5 py-4">
                            {r.assigned_to ? (
                              <div className="flex items-center gap-2">
                                <Avatar name={r.assigned_to} size="w-6 h-6" />
                                <span className="text-sm text-gray-600">{r.assigned_to}</span>
                              </div>
                            ) : <span className="text-gray-300 text-sm">—</span>}
                          </td>
                          <td className="px-5 py-4"><StatusBadge status={r.status} /></td>
                          <td className="px-5 py-4 text-xs text-gray-400">{r.created_at}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {requests.last_page > 1 && (
                  <div className="px-5 py-4 border-t border-gray-100 flex items-center justify-between">
                    <p className="text-xs text-gray-400">
                      Showing page <span className="font-semibold text-gray-600">{requests.current_page}</span> of {requests.last_page}
                      <span className="ml-1 text-gray-300">({requests.total} requests)</span>
                    </p>
                    <div className="flex gap-1">
                      <button onClick={() => setPage(Math.max(1, page - 1))} disabled={page === 1}
                        className="w-8 h-8 rounded-lg text-xs font-medium bg-white text-gray-500 border border-gray-200 hover:bg-gray-50 disabled:opacity-30">
                        &larr;
                      </button>
                      {Array.from({ length: Math.min(requests.last_page, 5) }, (_, i) => {
                        const p = i + 1;
                        return (
                          <button key={p} onClick={() => setPage(p)}
                            className={`w-8 h-8 rounded-lg text-xs font-semibold transition-all ${p === requests.current_page ? 'bg-gray-900 text-white shadow-md' : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-50'}`}>
                            {p}
                          </button>
                        );
                      })}
                      <button onClick={() => setPage(Math.min(requests.last_page, page + 1))} disabled={page === requests.last_page}
                        className="w-8 h-8 rounded-lg text-xs font-medium bg-white text-gray-500 border border-gray-200 hover:bg-gray-50 disabled:opacity-30">
                        &rarr;
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </FadeIn>

        {/* ── Settings / Upgrade ── */}
        <FadeIn delay={700}>
          {workspace.is_pro ? (
            <div className="mt-10 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Workspace Settings</h3>
                  <p className="text-xs text-gray-400">Configure your Pingdesk preferences</p>
                </div>
              </div>
              <div className="flex items-end gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">Reminder Interval</label>
                  <div className="flex items-center gap-2">
                    <input type="number" min="1" max="168" value={reminderHours}
                      onChange={(e) => setReminderHours(e.target.value)}
                      className="w-20 border border-gray-200 rounded-xl px-3 py-2 text-sm font-medium focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition-shadow" />
                    <span className="text-xs text-gray-400">hours</span>
                  </div>
                </div>
                <button onClick={handleSaveSettings}
                  className="bg-gray-900 text-white text-xs font-semibold px-5 py-2.5 rounded-xl hover:bg-gray-800 transition-colors shadow-sm">
                  Save
                </button>
                {settingsMsg && <span className="text-xs text-emerald-600 font-semibold animate-pulse">{settingsMsg}</span>}
              </div>
              <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400">Plan: <span className="font-bold text-violet-600">Pro</span></p>
                  {workspace.subscription_ends_at && <p className="text-xs text-gray-400 mt-0.5">Renews {workspace.subscription_ends_at}</p>}
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-[11px] font-bold text-emerald-600">Active</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-10 relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700" />
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="relative z-10 px-8 py-12 md:px-12 text-center">
                <div className="w-14 h-14 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>
                </div>
                <span className="inline-block bg-amber-500 text-white text-xs font-bold px-4 py-1 rounded-full mb-4">Early Bird — 50% off</span>
                <p className="text-white font-black text-2xl mb-2">Upgrade to Pro</p>
                <p className="text-white/60 text-sm mb-2 max-w-md mx-auto">Unlock weekly charts, team performance analytics, CSV export, custom reminders, and unlimited requests.</p>
                <p className="text-white/80 text-lg font-bold mb-1"><span className="line-through text-white/40 text-base mr-1">$8</span> $4/user/month</p>
                <p className="text-amber-300 text-xs font-semibold mb-6">Limited to first 500 teams</p>
                <button onClick={() => { events.upgradeClick('dashboard_cta'); handleUpgrade(); }}
                  className="bg-white text-violet-700 font-semibold text-sm px-10 py-3.5 rounded-full hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5">
                  Upgrade — Early Bird ₹1,650/month
                </button>
                <p className="mt-4 text-white/40 text-xs">Cancel anytime. Secured by Razorpay.</p>
              </div>
            </div>
          )}
        </FadeIn>
      </main>
    </div>
  );
};

export default Dashboard;
