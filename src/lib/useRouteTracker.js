import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from './analytics';

const pageTitles = {
  '/': 'Pingdesk — Never Lose a Request in Slack Again',
  '/privacy': 'Privacy Policy — Pingdesk',
  '/terms': 'Terms of Service — Pingdesk',
  '/docs': 'Documentation — Pingdesk',
  '/support': 'Support — Pingdesk',
  '/contact': 'Contact Us — Pingdesk',
  '/refund': 'Refund Policy — Pingdesk',
  '/shipping': 'Shipping Policy — Pingdesk',
  '/blog': 'Blog — Slack Productivity Tips & Guides | Pingdesk',
  '/slack-app': 'Pingdesk for Slack — Request Tracking App | Install Free',
  '/slack-ticketing-system': 'Slack Ticketing System — Turn Slack Into a Help Desk | Pingdesk',
  '/slack-request-tracking': 'Slack Request Tracking — Track Requests in Slack | Pingdesk',
  '/slack-help-desk': 'Slack Help Desk for Internal Teams — IT, HR, Ops | Pingdesk',
  '/compare/halp-alternative': 'Best Halp Alternatives for 2026 — Slack Ticketing | Pingdesk',
  '/compare/pingdesk-vs-others': 'Pingdesk vs ClearFeed vs Suptask vs Wrangle — Comparison 2026',
};

export const useRouteTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const title = pageTitles[location.pathname] || 'Pingdesk — Slack Request Tracking';
    document.title = title;
    trackPageView(location.pathname + location.search);
  }, [location]);
};
