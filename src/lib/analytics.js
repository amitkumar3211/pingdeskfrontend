/**
 * Google Analytics 4 event tracking utility.
 * Centralizes all event names so they're consistent and easy to audit.
 */

const isProduction = process.env.NODE_ENV === 'production';

const gtag = (...args) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag(...args);
  }
};

/**
 * Track a page view (called automatically on route change).
 */
export const trackPageView = (path, title) => {
  if (!isProduction) return;
  gtag('event', 'page_view', {
    page_path: path,
    page_title: title || document.title,
    page_location: window.location.href,
  });
};

/**
 * Track a custom event.
 */
export const trackEvent = (name, params = {}) => {
  if (!isProduction) return;
  gtag('event', name, params);
};

/* ─── Pre-defined events ─── */

export const events = {
  // Navigation
  navClick: (label) => trackEvent('nav_click', { label }),

  // CTA clicks
  addToSlackClick: (location, plan = 'free') =>
    trackEvent('add_to_slack_click', { location, plan }),

  seeHowItWorksClick: () => trackEvent('see_how_it_works_click'),

  // Pricing
  pricingPlanClick: (plan) =>
    trackEvent('pricing_plan_click', { plan }),

  upgradeClick: (location) =>
    trackEvent('upgrade_click', { location }),

  // Payment funnel
  checkoutStarted: () => trackEvent('begin_checkout', { currency: 'INR', value: 1650 }),

  paymentInitiated: () => trackEvent('payment_initiated', { currency: 'INR', value: 1650 }),

  paymentSuccess: (paymentId) =>
    trackEvent('purchase', {
      transaction_id: paymentId,
      currency: 'INR',
      value: 1650,
      items: [{ item_name: 'Pingdesk Pro', price: 1650, quantity: 1 }],
    }),

  paymentFailed: (reason) =>
    trackEvent('payment_failed', { reason }),

  // Dashboard
  dashboardView: () => trackEvent('dashboard_view'),

  filterChange: (status) => trackEvent('filter_change', { status: status || 'all' }),

  csvExport: () => trackEvent('csv_export'),

  settingsUpdate: (field) => trackEvent('settings_update', { field }),

  // Engagement
  testimonialView: () => trackEvent('testimonial_view'),

  featureCardClick: (feature) => trackEvent('feature_card_click', { feature }),

  // Error
  apiError: (endpoint, status) =>
    trackEvent('api_error', { endpoint, status }),
};
