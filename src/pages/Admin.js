import { useCallback, useEffect, useState } from 'react';

const API = 'https://pindeskapi.himalayancoders.com/api/admin';

const StatCard = ({ value, label, sub }) => (
  <div className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-shadow">
    <p className="text-3xl font-black text-gray-900 tracking-tight">{typeof value === 'number' ? value.toLocaleString() : value}</p>
    <p className="text-xs text-gray-400 font-medium mt-1">{label}</p>
    {sub && <p className="text-[11px] text-gray-300 mt-0.5">{sub}</p>}
  </div>
);

const Badge = ({ text, color }) => {
  const colors = {
    green: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    blue: 'bg-blue-50 text-blue-700 border-blue-100',
    amber: 'bg-amber-50 text-amber-700 border-amber-100',
    red: 'bg-red-50 text-red-700 border-red-100',
    gray: 'bg-gray-50 text-gray-600 border-gray-200',
    violet: 'bg-violet-50 text-violet-700 border-violet-100',
  };
  return (
    <span className={`inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${colors[color] || colors.gray}`}>
      {text}
    </span>
  );
};

const planColor = (plan) => {
  const map = { free: 'gray', starter: 'blue', growth: 'violet', business: 'amber' };
  return map[plan] || 'gray';
};

const statusColor = (status) => {
  const map = { active: 'green', authenticated: 'green', inactive: 'gray', cancelled: 'red', halted: 'red', pending: 'amber' };
  return map[status] || 'gray';
};

const Admin = () => {
  const [password, setPassword] = useState(() => localStorage.getItem('pingdesk_admin_pw') || '');
  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState(null);
  const [workspaces, setWorkspaces] = useState([]);
  const [payments, setPayments] = useState([]);
  const [tab, setTab] = useState('overview');
  const [error, setError] = useState('');

  const headers = { 'X-Admin-Password': password };

  const load = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const [s, w, p] = await Promise.all([
        fetch(`${API}/stats`, { headers }).then(r => r.json()),
        fetch(`${API}/workspaces`, { headers }).then(r => r.json()),
        fetch(`${API}/payments`, { headers }).then(r => r.json()),
      ]);
      if (s.error) throw new Error(s.error);
      setStats(s.stats);
      setWorkspaces(w.workspaces || []);
      setPayments(p.payments || []);
      setAuthed(true);
      localStorage.setItem('pingdesk_admin_pw', password);
    } catch (e) {
      setError(e.message || 'Failed to load');
      setAuthed(false);
    } finally {
      setLoading(false);
    }
  }, [password]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (password) load();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleLogin = (e) => {
    e.preventDefault();
    load();
  };

  // ── Login screen ──
  if (!authed) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center px-6">
        <form onSubmit={handleLogin} className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-violet-500/20">
              <span className="text-white font-black text-xl">P</span>
            </div>
            <h1 className="text-2xl font-black text-white">Pingdesk Admin</h1>
            <p className="text-sm text-gray-500 mt-1">Enter the admin password to continue</p>
          </div>
          {error && (
            <div className="mb-4 bg-red-500/10 border border-red-500/20 text-red-400 text-xs px-4 py-3 rounded-xl text-center">
              {error}
            </div>
          )}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Admin password"
            autoFocus
            className="w-full bg-gray-900 border border-gray-800 text-white rounded-xl px-4 py-3 text-sm focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 outline-none transition placeholder-gray-600"
          />
          <button
            type="submit"
            disabled={loading || !password}
            className="w-full mt-3 bg-violet-600 hover:bg-violet-700 text-white font-bold text-sm py-3 rounded-xl transition-all disabled:opacity-50"
          >
            {loading ? 'Loading...' : 'Enter'}
          </button>
        </form>
      </div>
    );
  }

  // ── Admin dashboard ──
  const formatRevenue = (paise) => {
    if (!paise) return '₹0';
    return '₹' + (paise / 100).toLocaleString('en-IN');
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      {/* Nav */}
      <nav className="bg-gray-950 border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-sm">P</span>
            </div>
            <span className="text-white font-bold text-sm">Pingdesk Admin</span>
          </div>
          <div className="flex items-center gap-2">
            {['overview', 'workspaces', 'payments'].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all capitalize ${
                  tab === t ? 'bg-violet-600 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                {t}
              </button>
            ))}
            <button
              onClick={() => { setAuthed(false); localStorage.removeItem('pingdesk_admin_pw'); }}
              className="ml-4 text-xs text-gray-500 hover:text-red-400 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* ── Overview ── */}
        {tab === 'overview' && stats && (
          <>
            <h1 className="text-2xl font-black text-gray-900 mb-6">Overview</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <StatCard value={stats.total_workspaces} label="Total Workspaces" sub={`+${stats.new_workspaces_7d} this week`} />
              <StatCard value={stats.active_workspaces} label="Active Workspaces" sub="Created at least 1 request" />
              <StatCard value={stats.paid_workspaces} label="Paid Workspaces" sub={`${stats.active_subscriptions} active subs`} />
              <StatCard value={formatRevenue(stats.total_revenue_paise)} label="Total Revenue" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <StatCard value={stats.total_requests} label="Total Requests" />
              <StatCard value={stats.requests_24h} label="Requests (24h)" />
              <StatCard value={stats.requests_7d} label="Requests (7 days)" />
              <StatCard value={stats.requests_30d} label="Requests (30 days)" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <StatCard value={stats.pending_requests} label="Pending Now" />
              <StatCard value={stats.done_requests} label="Completed" />
              <StatCard value={stats.new_workspaces_30d} label="New Workspaces (30d)" />
            </div>
          </>
        )}

        {/* ── Workspaces ── */}
        {tab === 'workspaces' && (
          <>
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-black text-gray-900">Workspaces</h1>
              <span className="text-xs text-gray-400 font-medium">{workspaces.length} total</span>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100">
                      {['Workspace', 'Plan', 'Status', 'Users', 'Requests', 'Last Active', 'Installed'].map((h) => (
                        <th key={h} className="text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider px-5 py-3 bg-gray-50/50">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {workspaces.map((ws) => (
                      <tr key={ws.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                        <td className="px-5 py-4">
                          <p className="font-semibold text-gray-900">{ws.team_name}</p>
                          <p className="text-[11px] text-gray-400 font-mono mt-0.5">{ws.team_id}</p>
                        </td>
                        <td className="px-5 py-4">
                          <Badge text={ws.plan} color={planColor(ws.plan)} />
                        </td>
                        <td className="px-5 py-4">
                          <Badge text={ws.subscription_status} color={statusColor(ws.subscription_status)} />
                        </td>
                        <td className="px-5 py-4 text-gray-600">
                          <span className="font-semibold">{ws.seats_used}</span>
                          <span className="text-gray-300">/{ws.seats_total}</span>
                        </td>
                        <td className="px-5 py-4 font-semibold text-gray-900">{ws.requests_count}</td>
                        <td className="px-5 py-4 text-xs text-gray-400">{ws.last_request_at || 'Never'}</td>
                        <td className="px-5 py-4">
                          <p className="text-xs text-gray-600">{ws.created_at}</p>
                          <p className="text-[11px] text-gray-400">{ws.created_ago}</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {/* ── Payments ── */}
        {tab === 'payments' && (
          <>
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-black text-gray-900">Payments</h1>
              <span className="text-xs text-gray-400 font-medium">{payments.length} recent</span>
            </div>
            {payments.length === 0 ? (
              <div className="bg-white rounded-2xl border border-gray-100 py-16 text-center">
                <p className="text-gray-400 text-sm">No payments yet</p>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-100">
                        {['Workspace', 'Plan', 'Amount', 'Status', 'Razorpay ID', 'Date'].map((h) => (
                          <th key={h} className="text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider px-5 py-3 bg-gray-50/50">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {payments.map((p) => (
                        <tr key={p.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                          <td className="px-5 py-4 font-semibold text-gray-900">{p.workspace}</td>
                          <td className="px-5 py-4"><Badge text={p.plan_key} color={planColor(p.plan_key)} /></td>
                          <td className="px-5 py-4 font-bold text-gray-900">{p.amount}</td>
                          <td className="px-5 py-4">
                            <Badge text={p.status} color={p.status === 'captured' ? 'green' : p.status === 'failed' ? 'red' : 'gray'} />
                          </td>
                          <td className="px-5 py-4 text-[11px] text-gray-400 font-mono">{p.razorpay_payment_id}</td>
                          <td className="px-5 py-4">
                            <p className="text-xs text-gray-600">{p.paid_at}</p>
                            <p className="text-[11px] text-gray-400">{p.paid_ago}</p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}

        {/* Refresh button */}
        <div className="mt-8 text-center">
          <button
            onClick={load}
            disabled={loading}
            className="text-xs font-semibold text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50"
          >
            {loading ? 'Refreshing...' : 'Refresh data'}
          </button>
        </div>
      </main>
    </div>
  );
};

export default Admin;
