import { useEffect, useState } from 'react';
import { events } from '../../lib/analytics';
import { getExportUrl } from '../api';

const NAV_ITEMS = [
  { key: 'overview', label: 'Overview', icon: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
  ) },
  { key: 'team', label: 'Team', icon: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-5.13a4 4 0 11-8 0 4 4 0 018 0zm6 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
  ) },
  { key: 'admins', label: 'Admins', icon: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
  ) },
  { key: 'settings', label: 'Settings', icon: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  ) },
  { key: 'upgrade', label: 'Upgrade', icon: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
  ) },
];

const DashboardLayout = ({ token, workspace, section, onSectionChange, range, children }) => {
  const [collapsed, setCollapsed] = useState(() => localStorage.getItem('pingdesk_sidebar_collapsed') === '1');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('pingdesk_sidebar_collapsed', collapsed ? '1' : '0');
  }, [collapsed]);

  // Lock body scroll when mobile drawer open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (key) => {
    onSectionChange(key);
    setMobileOpen(false);
  };

  const sidebarLabel = workspace?.is_pro ? 'Pro' : 'Free';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-violet-50/20 font-sans antialiased flex">
      {/* ─── Mobile drawer overlay ─── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-gray-900/40 lg:hidden" onClick={() => setMobileOpen(false)} />
      )}

      {/* ─── Sidebar ─── */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-50 h-screen bg-white border-r border-gray-100 flex flex-col transition-all duration-300 ${
          collapsed ? 'w-[72px]' : 'w-64'
        } ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        {/* Logo + workspace */}
        <div className={`flex items-center gap-2.5 px-4 h-16 border-b border-gray-100 flex-shrink-0 ${collapsed ? 'justify-center px-0' : ''}`}>
          <div className="relative w-9 h-9 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/20 flex-shrink-0">
            <span className="text-white font-black text-sm">P</span>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
          </div>
          {!collapsed && (
            <div className="min-w-0 flex-1">
              <p className="text-sm font-extrabold text-gray-900 truncate">Pingdesk</p>
              <p className="text-[11px] text-gray-400 truncate font-medium">{workspace?.name}</p>
            </div>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {NAV_ITEMS.map((item) => {
            const active = section === item.key;
            return (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key)}
                className={`w-full flex items-center gap-3 ${collapsed ? 'justify-center px-0' : 'px-3'} py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  active
                    ? 'bg-gradient-to-r from-violet-50 to-indigo-50 text-violet-700 shadow-sm'
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                }`}
                title={collapsed ? item.label : ''}
              >
                <span className={active ? 'text-violet-600' : ''}>{item.icon}</span>
                {!collapsed && <span>{item.label}</span>}
                {!collapsed && active && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-violet-500" />}
              </button>
            );
          })}
        </nav>

        {/* Bottom: plan badge + collapse toggle */}
        <div className="px-3 py-3 border-t border-gray-100 flex-shrink-0 space-y-2">
          {!collapsed && (
            <div className={`flex items-center justify-between px-3 py-2 rounded-xl ${workspace?.is_pro ? 'bg-gradient-to-r from-violet-50 to-indigo-50' : 'bg-gray-50'}`}>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Plan</p>
                <p className={`text-xs font-bold ${workspace?.is_pro ? 'text-violet-700' : 'text-gray-700'}`}>{sidebarLabel}</p>
              </div>
              {workspace?.is_pro && <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />}
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className={`hidden lg:flex items-center gap-2 w-full ${collapsed ? 'justify-center' : 'px-3'} py-2 rounded-xl text-xs font-semibold text-gray-400 hover:bg-gray-50 hover:text-gray-700 transition-colors`}
            title={collapsed ? 'Expand' : 'Collapse'}
          >
            <svg className={`w-4 h-4 transition-transform ${collapsed ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
            {!collapsed && <span>Collapse</span>}
          </button>
        </div>
      </aside>

      {/* ─── Main column ─── */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Top bar (mobile burger + workspace + actions) */}
        <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200/60 sticky top-0 z-30">
          <div className="px-4 sm:px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden text-gray-500 hover:text-gray-700 p-1"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-sm text-gray-400">Workspace</span>
                <svg className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                <span className="text-sm text-gray-700 font-semibold">{workspace?.name}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {workspace?.is_pro && (
                <a
                  href={getExportUrl(token, range)}
                  onClick={() => events.csvExport()}
                  className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-gray-700 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  Export CSV
                </a>
              )}
              <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full ${
                workspace?.is_pro
                  ? 'bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-md shadow-violet-500/20'
                  : 'bg-gray-100 text-gray-500'
              }`}>
                {workspace?.plan}
              </span>
            </div>
          </div>
        </header>

        {/* Section content */}
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
