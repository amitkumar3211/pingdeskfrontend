import { useState } from 'react';
import { events } from '../../lib/analytics';
import { Avatar, FadeIn, StatCard, StatusBadge } from '../components/shared';
import { detectCurrencySync } from '../lib/currency';

const Overview = ({ data, range, setRange, filter, setFilter, page, setPage, onGoToUpgrade }) => {
  const { workspace, stats, requests, pro } = data;
  const [activeRow, setActiveRow] = useState(null);
  const startingPrice = detectCurrencySync() === 'INR' ? '₹999/mo' : '$12/mo';

  return (
    <>
      {/* ── Free plan small upgrade banner ── */}
      {!workspace.is_pro && (
        <FadeIn>
          <div className="mb-6 bg-gradient-to-r from-violet-50 to-indigo-50 border border-violet-100 rounded-2xl px-5 py-4 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white rounded-xl shadow-sm flex items-center justify-center">
                <svg className="w-4 h-4 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Unlock charts, exports, and unlimited requests</p>
                <p className="text-xs text-gray-500">Plans start at {startingPrice} for 15 users.</p>
              </div>
            </div>
            <button
              onClick={() => { events.upgradeClick('overview_banner'); onGoToUpgrade(); }}
              className="bg-gray-900 text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-gray-800 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Upgrade
            </button>
          </div>
        </FadeIn>
      )}

      {/* ── Free plan usage card ── */}
      {!workspace.is_pro && (
        <FadeIn delay={50}>
          <div className="mb-8 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-violet-50 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
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
              <div
                className={`h-2 rounded-full transition-all duration-1000 ease-out ${stats.monthly_count >= stats.monthly_limit ? 'bg-red-500' : 'bg-gradient-to-r from-violet-500 to-indigo-500'}`}
                style={{ width: `${Math.min((stats.monthly_count / stats.monthly_limit) * 100, 100)}%` }}
              />
            </div>
          </div>
        </FadeIn>
      )}

      {/* ── Stats Grid ── */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        <StatCard delay={100} value={stats.total} label="Total Requests" icon={
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
        } />
        <StatCard delay={200} value={stats.pending} label="Pending" color="text-amber-500" icon={
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        } />
        <StatCard delay={300} value={stats.in_progress} label="In Progress" color="text-blue-500" icon={
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" /></svg>
        } />
        <StatCard delay={400} value={stats.done} label="Completed" color="text-emerald-500" icon={
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        } />
        <StatCard delay={500} value={`${stats.completion_rate}%`} label="Completion Rate" color="text-violet-600" icon={
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>
        } />
      </div>

      {/* ── Avg time + reminder card ── */}
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

      {/* ── Pro: Trend chart ── */}
      {workspace.is_pro && pro.weekly_chart.length > 0 && (
        <FadeIn delay={300}>
          <div className="mb-8 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-base font-bold text-gray-900">Activity Trend</h3>
                <p className="text-xs text-gray-400 mt-0.5">Requests created vs completed</p>
              </div>
              <div className="flex items-center gap-5 text-xs font-medium">
                <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-violet-500/80" /> Created</span>
                <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-emerald-500/80" /> Completed</span>
              </div>
            </div>
            <div className="flex items-end gap-2 sm:gap-3 h-48">
              {(() => {
                const max = Math.max(1, ...pro.weekly_chart.map(w => Math.max(w.created, w.completed)));
                return pro.weekly_chart.map((w, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2 group min-w-0">
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
                    <span className="text-[10px] text-gray-400 font-medium truncate w-full text-center">{w.label}</span>
                  </div>
                ));
              })()}
            </div>
          </div>
        </FadeIn>
      )}

      {/* ── Pro: Top assignees / creators ── */}
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
                    <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" /></svg>
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
          {/* Date range */}
          <div className="flex items-center gap-2 bg-white rounded-xl border border-gray-100 p-1 shadow-sm w-fit overflow-x-auto">
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
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all duration-200 whitespace-nowrap ${
                  range === r.key ? 'bg-violet-600 text-white shadow-md' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 bg-white rounded-xl border border-gray-100 p-1 shadow-sm w-fit">
            {[
              { key: '', label: 'All', count: stats.total },
              { key: 'pending', label: 'Pending', count: stats.pending },
              { key: 'in_progress', label: 'In Progress', count: stats.in_progress },
              { key: 'done', label: 'Done', count: stats.done },
            ].map((f) => (
              <button
                key={f.key}
                onClick={() => { setFilter(f.key); setPage(1); events.filterChange(f.key); }}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  filter === f.key ? 'bg-gray-900 text-white shadow-md' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                {f.label} <span className="ml-1 opacity-60">{f.count}</span>
              </button>
            ))}
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
    </>
  );
};

export default Overview;
