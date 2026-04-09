import { useCallback, useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { events } from '../lib/analytics';
import { fetchDashboard } from './api';
import DashboardLayout from './components/DashboardLayout';
import Admins from './sections/Admins';
import Billing from './sections/Billing';
import Overview from './sections/Overview';
import Settings from './sections/Settings';
import Team from './sections/Team';
import Upgrade from './sections/Upgrade';

const VALID_SECTIONS = ['overview', 'team', 'admins', 'billing', 'settings', 'upgrade'];

const getInitialSection = () => {
  const hash = window.location.hash.replace('#', '');
  return VALID_SECTIONS.includes(hash) ? hash : 'overview';
};

const Dashboard = () => {
  const { token } = useParams();
  const [searchParams] = useSearchParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [section, setSection] = useState(getInitialSection);

  // Overview-specific state (lifted so it persists across navigation)
  const [filter, setFilter] = useState('');
  const [range, setRange] = useState('all');
  const [page, setPage] = useState(1);

  const load = useCallback(async () => {
    try {
      const d = await fetchDashboard(token, filter, page, range);
      setData(d);
      events.dashboardView();
    } catch {
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [token, filter, page, range]);

  useEffect(() => { load(); }, [load]);

  // Razorpay script
  useEffect(() => {
    if (!document.querySelector('script[src*="razorpay"]')) {
      const s = document.createElement('script');
      s.src = 'https://checkout.razorpay.com/v1/checkout.js';
      document.body.appendChild(s);
    }
  }, []);

  // OAuth ?upgrade=true → jump to upgrade section
  useEffect(() => {
    if (searchParams.get('upgrade') === 'true') {
      handleSectionChange('upgrade');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  // Sync section to URL hash so back/forward buttons work
  const handleSectionChange = (next) => {
    setSection(next);
    window.location.hash = next;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Listen for browser back/forward
  useEffect(() => {
    const onHashChange = () => setSection(getInitialSection());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  /* ── Loading ── */
  if (loading) {
    return (
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
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
          </div>
          <p className="text-gray-500 font-medium">Dashboard not found</p>
          <p className="text-gray-400 text-sm mt-1">This link may be invalid or expired.</p>
        </div>
      </div>
    );
  }

  const goToUpgrade = () => handleSectionChange('upgrade');

  return (
    <DashboardLayout
      token={token}
      workspace={data.workspace}
      section={section}
      onSectionChange={handleSectionChange}
      range={range}
    >
      {section === 'overview' && (
        <Overview
          data={data}
          range={range}
          setRange={setRange}
          filter={filter}
          setFilter={setFilter}
          page={page}
          setPage={setPage}
          onGoToUpgrade={goToUpgrade}
        />
      )}
      {section === 'team' && (
        <Team
          token={token}
          workspace={data.workspace}
          onGoToUpgrade={goToUpgrade}
          onChange={load}
        />
      )}
      {section === 'admins' && (
        <Admins
          token={token}
          workspace={data.workspace}
          onGoToUpgrade={goToUpgrade}
        />
      )}
      {section === 'billing' && (
        <Billing
          token={token}
          workspace={data.workspace}
          onGoToUpgrade={goToUpgrade}
          onChange={load}
        />
      )}
      {section === 'settings' && (
        <Settings
          token={token}
          workspace={data.workspace}
          onGoToUpgrade={goToUpgrade}
          onChange={load}
        />
      )}
      {section === 'upgrade' && (
        <Upgrade
          token={token}
          workspace={data.workspace}
          onChange={load}
        />
      )}
    </DashboardLayout>
  );
};

export default Dashboard;
