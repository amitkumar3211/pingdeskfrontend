import { useState, useEffect, useCallback } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { fetchDashboard, updateSettings, createOrder, verifyPayment, getExportUrl } from './api';

const StatusBadge = ({ status }) => {
  const config = {
    pending: 'bg-amber-50 text-amber-700 border-amber-200',
    in_progress: 'bg-blue-50 text-blue-700 border-blue-200',
    done: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  };
  const labels = { pending: 'Pending', in_progress: 'In Progress', done: 'Done' };
  return (
    <span className={`inline-block text-[11px] font-semibold px-2 py-0.5 rounded-md border ${config[status] || ''}`}>
      {labels[status] || status}
    </span>
  );
};

const Avatar = ({ name, color = 'bg-gray-200 text-gray-500' }) => (
  <div className={`w-6 h-6 rounded-full ${color} flex items-center justify-center text-[10px] font-bold flex-shrink-0`}>
    {(name || '?').charAt(0).toUpperCase()}
  </div>
);

const StatCard = ({ value, label, color = 'text-gray-900' }) => (
  <div className="bg-white rounded-xl border border-gray-200 p-5">
    <p className={`text-2xl font-extrabold ${color}`}>{value}</p>
    <p className="text-xs text-gray-400 mt-1">{label}</p>
  </div>
);

const Dashboard = () => {
  const { token } = useParams();
  const [searchParams] = useSearchParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(1);
  const [reminderHours, setReminderHours] = useState('');
  const [settingsMsg, setSettingsMsg] = useState('');
  const [upgradeMsg, setUpgradeMsg] = useState('');

  const load = useCallback(async () => {
    try {
      const d = await fetchDashboard(token, filter, page);
      setData(d);
      setReminderHours(d.workspace.reminder_hours);
    } catch {
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [token, filter, page]);

  useEffect(() => { load(); }, [load]);

  // Auto-open upgrade if redirected from install with ?upgrade=true
  useEffect(() => {
    if (searchParams.get('upgrade') === 'true' && data && !data.workspace.is_pro) {
      const timer = setTimeout(() => handleUpgrade(), 1000);
      return () => clearTimeout(timer);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  // Load Razorpay script
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
      setTimeout(() => setSettingsMsg(''), 2000);
    }
  };

  const handleUpgrade = async () => {
    try {
      const order = await createOrder(token);
      const options = {
        key: order.key,
        amount: order.amount,
        currency: order.currency,
        name: 'Pingdesk',
        description: 'Pro Plan — Monthly',
        order_id: order.order_id,
        handler: async (response) => {
          const res = await verifyPayment(token, {
            payment_id: response.razorpay_payment_id,
            order_id: response.razorpay_order_id,
            signature: response.razorpay_signature,
          });
          if (res.success) {
            setUpgradeMsg('Upgraded to Pro!');
            load();
          }
        },
        prefill: { name: order.workspace_name },
        theme: { color: '#7C3AED' },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch {
      alert('Something went wrong. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f8f9fb] flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-3 border-violet-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-[#f8f9fb] flex items-center justify-center">
        <p className="text-gray-400">Dashboard not found.</p>
      </div>
    );
  }

  const { workspace, stats, requests, pro } = data;

  return (
    <div className="min-h-screen bg-[#f8f9fb] font-sans antialiased">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-7 h-7 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-xs">P</span>
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full border border-white" />
            </div>
            <span className="text-sm font-bold text-gray-900">Pingdesk</span>
            <span className="text-gray-300">/</span>
            <span className="text-sm text-gray-500">{workspace.name}</span>
          </div>
          <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${workspace.is_pro ? 'bg-violet-100 text-violet-700' : 'bg-gray-100 text-gray-500'}`}>
            {workspace.plan}
          </span>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {upgradeMsg && (
          <div className="mb-4 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm px-4 py-3 rounded-xl">{upgradeMsg}</div>
        )}

        {/* Free plan usage */}
        {!workspace.is_pro && (
          <div className="mb-6 bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-semibold text-gray-700">Monthly Usage</p>
              <p className="text-xs text-gray-400">{stats.monthly_count} / {stats.monthly_limit}</p>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-1.5">
              <div
                className={`h-1.5 rounded-full transition-all ${stats.monthly_count >= stats.monthly_limit ? 'bg-red-500' : 'bg-violet-500'}`}
                style={{ width: `${Math.min((stats.monthly_count / stats.monthly_limit) * 100, 100)}%` }}
              />
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          <StatCard value={stats.total} label="Total" />
          <StatCard value={stats.pending} label="Pending" color="text-amber-500" />
          <StatCard value={stats.in_progress} label="In Progress" color="text-blue-500" />
          <StatCard value={stats.done} label="Completed" color="text-emerald-500" />
          <StatCard value={`${stats.completion_rate}%`} label="Completion Rate" color="text-violet-600" />
        </div>

        {/* Avg completion */}
        {stats.avg_completion_hours && (
          <div className="mb-6 bg-white rounded-xl border border-gray-200 p-5 inline-block">
            <p className="text-xs text-gray-400">Avg. Completion Time</p>
            <p className="text-lg font-bold text-gray-900 mt-0.5">
              {stats.avg_completion_hours < 1 ? '< 1 hour' : stats.avg_completion_hours < 24 ? `${stats.avg_completion_hours}h` : `${(stats.avg_completion_hours / 24).toFixed(1)} days`}
            </p>
          </div>
        )}

        {/* Pro: Weekly Chart */}
        {workspace.is_pro && pro.weekly_chart.length > 0 && (
          <div className="mb-6 bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-sm font-bold text-gray-900">Weekly Activity</h3>
                <p className="text-xs text-gray-400 mt-0.5">Last 8 weeks — created vs completed</p>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-violet-500" /> Created</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Completed</span>
              </div>
            </div>
            <div className="flex items-end gap-3 h-40">
              {(() => {
                const max = Math.max(1, ...pro.weekly_chart.map(w => Math.max(w.created, w.completed)));
                return pro.weekly_chart.map((w, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full flex gap-1 items-end h-32">
                      <div className="flex-1 bg-violet-500 rounded-t opacity-80" style={{ height: `${Math.max(4, (w.created / max) * 100)}%` }} title={`${w.created} created`} />
                      <div className="flex-1 bg-emerald-500 rounded-t opacity-80" style={{ height: `${Math.max(4, (w.completed / max) * 100)}%` }} title={`${w.completed} done`} />
                    </div>
                    <span className="text-[10px] text-gray-400">{w.label}</span>
                  </div>
                ));
              })()}
            </div>
          </div>
        )}

        {/* Pro: Team Stats */}
        {workspace.is_pro && (pro.top_assignees.length > 0 || pro.top_creators.length > 0) && (
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {pro.top_assignees.length > 0 && (
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-sm font-bold text-gray-900 mb-1">Team Performance</h3>
                <p className="text-xs text-gray-400 mb-4">Completion rate by assignee</p>
                <div className="space-y-3">
                  {pro.top_assignees.map((m, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <Avatar name={m.name} color="bg-violet-100 text-violet-600" />
                          <span className="text-sm font-medium text-gray-900">{m.name}</span>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-gray-400">
                          <span>{m.total} total</span>
                          <span className={`font-semibold ${m.rate >= 70 ? 'text-emerald-600' : m.rate >= 40 ? 'text-amber-600' : 'text-red-500'}`}>{m.rate}%</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-1.5">
                        <div className={`h-1.5 rounded-full ${m.rate >= 70 ? 'bg-emerald-500' : m.rate >= 40 ? 'bg-amber-500' : 'bg-red-400'}`} style={{ width: `${m.rate}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {pro.top_creators.length > 0 && (
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-sm font-bold text-gray-900 mb-1">Most Active</h3>
                <p className="text-xs text-gray-400 mb-4">Who creates the most requests</p>
                <div className="space-y-3">
                  {pro.top_creators.map((c, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-5 text-xs font-bold text-gray-300 text-right">{i + 1}</span>
                        <Avatar name={c.name} />
                        <span className="text-sm font-medium text-gray-900">{c.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">{c.total}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Filter + Export */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            {[
              { key: '', label: 'All', count: stats.total },
              { key: 'pending', label: 'Pending', count: stats.pending },
              { key: 'in_progress', label: 'In Progress', count: stats.in_progress },
              { key: 'done', label: 'Done', count: stats.done },
            ].map((f) => (
              <button
                key={f.key}
                onClick={() => { setFilter(f.key); setPage(1); }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  filter === f.key ? 'bg-gray-900 text-white' : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {f.label} ({f.count})
              </button>
            ))}
          </div>
          {workspace.is_pro && (
            <a
              href={getExportUrl(token)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Export CSV
            </a>
          )}
        </div>

        {/* Requests Table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          {requests.data.length === 0 ? (
            <div className="p-16 text-center">
              <p className="text-sm text-gray-400">No requests found.</p>
              <p className="text-xs text-gray-300 mt-1">Use <code className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-500">/request</code> in Slack to create one.</p>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100 bg-gray-50/50">
                      {['#', 'Title', 'Created By', 'Assigned To', 'Status', 'Created'].map((h) => (
                        <th key={h} className="text-left text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-5 py-3">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {requests.data.map((r) => (
                      <tr key={r.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                        <td className="px-5 py-3.5 text-xs text-gray-400 font-mono">{String(r.id).padStart(3, '0')}</td>
                        <td className="px-5 py-3.5 font-semibold text-gray-900">{r.title}</td>
                        <td className="px-5 py-3.5 text-gray-600">
                          <div className="flex items-center gap-2">
                            <Avatar name={r.created_by} />
                            {r.created_by}
                          </div>
                        </td>
                        <td className="px-5 py-3.5 text-gray-600">
                          {r.assigned_to ? (
                            <div className="flex items-center gap-2">
                              <Avatar name={r.assigned_to} color="bg-violet-100 text-violet-600" />
                              {r.assigned_to}
                            </div>
                          ) : <span className="text-gray-300">—</span>}
                        </td>
                        <td className="px-5 py-3.5"><StatusBadge status={r.status} /></td>
                        <td className="px-5 py-3.5 text-gray-400 text-xs">{r.created_at}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {requests.last_page > 1 && (
                <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between">
                  <p className="text-xs text-gray-400">Page {requests.current_page} of {requests.last_page} ({requests.total} total)</p>
                  <div className="flex gap-1">
                    {Array.from({ length: requests.last_page }, (_, i) => i + 1).map((p) => (
                      <button
                        key={p}
                        onClick={() => setPage(p)}
                        className={`w-8 h-8 rounded-lg text-xs font-semibold ${p === requests.current_page ? 'bg-gray-900 text-white' : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-50'}`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Settings / Upgrade */}
        {workspace.is_pro ? (
          <div className="mt-8 bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-sm font-bold text-gray-900 mb-1">Settings</h3>
            <p className="text-xs text-gray-400 mb-4">Configure reminder intervals for your workspace.</p>
            <div className="flex items-end gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Reminder Interval</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number" min="1" max="168"
                    value={reminderHours}
                    onChange={(e) => setReminderHours(e.target.value)}
                    className="w-20 border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none"
                  />
                  <span className="text-xs text-gray-400">hours</span>
                </div>
              </div>
              <button onClick={handleSaveSettings} className="bg-gray-900 text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-gray-800">
                Save
              </button>
              {settingsMsg && <span className="text-xs text-emerald-600 font-medium">{settingsMsg}</span>}
            </div>
            <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400">Plan: <span className="font-semibold text-violet-600">Pro</span></p>
                {workspace.subscription_ends_at && <p className="text-xs text-gray-400 mt-0.5">Renews: {workspace.subscription_ends_at}</p>}
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider bg-violet-100 text-violet-700 px-2.5 py-1 rounded-full">Active</span>
            </div>
          </div>
        ) : (
          <div className="mt-8 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
            <div className="relative z-10">
              <p className="text-white font-bold text-xl mb-2">Upgrade to Pro — ₹499/month</p>
              <p className="text-violet-200 text-sm mb-6 max-w-md mx-auto">Unlock weekly charts, team stats, CSV export, custom reminders, and unlimited requests.</p>
              <button
                onClick={handleUpgrade}
                className="inline-block bg-white text-violet-700 font-semibold text-sm px-8 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
              >
                Upgrade Now
              </button>
            </div>
          </div>
        )}
      </main>

    </div>
  );
};

export default Dashboard;
