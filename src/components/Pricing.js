import { useEffect, useRef, useState } from 'react';
import { events } from '../lib/analytics';
import { detectCurrencySync, refreshCurrencyFromIp, setCurrencyChoice } from '../dashboard/lib/currency';

const API_URL = 'https://pindeskapi.himalayancoders.com';

const plans = [
  {
    key: 'free',
    name: 'Free',
    price: { USD: '$0', INR: '₹0' },
    period: 'forever',
    tagline: 'For small teams getting started',
    features: [
      'Up to 3 users',
      '50 requests/month',
      'Slack slash command + reminders',
      'Web dashboard',
    ],
    cta: 'Add to Slack — Free',
    href: `${API_URL}/slack/install`,
    featured: false,
  },
  {
    key: 'starter',
    name: 'Starter',
    price: { USD: '$12', INR: '₹999' },
    period: '/month',
    tagline: 'For growing teams that need analytics',
    features: [
      'Up to 15 users',
      'Unlimited requests',
      'Activity charts & analytics',
      'CSV export',
      'Custom reminder intervals',
    ],
    cta: 'Start with Starter',
    href: `${API_URL}/slack/install?plan=starter`,
    featured: false,
  },
  {
    key: 'growth',
    name: 'Growth',
    price: { USD: '$29', INR: '₹2,499' },
    period: '/month',
    tagline: 'For teams that need delegation',
    features: [
      'Up to 50 users',
      'Everything in Starter',
      'Multiple workspace admins',
      'Priority support',
      'Team performance reports',
    ],
    cta: 'Start with Growth',
    href: `${API_URL}/slack/install?plan=growth`,
    featured: true,
  },
  {
    key: 'business',
    name: 'Business',
    price: { USD: '$59', INR: '₹4,999' },
    period: '/month',
    tagline: 'For organizations',
    features: [
      'Up to 200 users',
      'Everything in Growth',
      'SSO (coming soon)',
      'Audit logs (coming soon)',
      'Dedicated onboarding',
    ],
    cta: 'Start with Business',
    href: `${API_URL}/slack/install?plan=business`,
    featured: false,
  },
];

const Pricing = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [currency, setCurrency] = useState(detectCurrencySync);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  // First-paint best guess (sync). Then async IP lookup confirms or corrects.
  // Skips if user already manually picked a currency.
  useEffect(() => {
    const userPicked = localStorage.getItem('pingdesk_currency');
    if (userPicked === 'INR' || userPicked === 'USD') return;
    let cancelled = false;
    refreshCurrencyFromIp().then((c) => {
      if (!cancelled && c && c !== currency) setCurrency(c);
    });
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="pricing" className="py-20 md:py-28 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-3">Pricing</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-500">Start free. Upgrade when your team grows.</p>

          {/* Currency toggle */}
          <div className="inline-flex items-center gap-0.5 bg-gray-100 rounded-full p-0.5 mt-6">
            {['USD', 'INR'].map((c) => (
              <button
                key={c}
                onClick={() => { setCurrency(c); setCurrencyChoice(c); }}
                className={`text-[11px] font-bold px-4 py-1.5 rounded-full transition-all ${
                  currency === c ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {c === 'USD' ? '$ USD' : '₹ INR'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <div
              key={plan.key}
              className={`relative rounded-3xl p-7 transition-all duration-700 hover:-translate-y-2 flex flex-col ${
                plan.featured
                  ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-violet-950 text-white shadow-2xl shadow-gray-900/30 ring-1 ring-white/10'
                  : 'bg-white border-2 border-gray-100 hover:border-violet-200 hover:shadow-xl'
              } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-bold px-4 py-1 rounded-full shadow-lg shadow-orange-500/30 uppercase tracking-wider whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className={`text-lg font-bold ${plan.featured ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
              <p className={`text-xs mt-1 mb-4 ${plan.featured ? 'text-gray-400' : 'text-gray-500'}`}>{plan.tagline}</p>

              <div className="flex items-baseline gap-1.5 mb-5">
                <span className={`text-4xl font-black ${plan.featured ? 'text-white' : 'text-gray-900'}`}>{plan.price[currency]}</span>
                <span className={`text-xs ${plan.featured ? 'text-gray-400' : 'text-gray-400'}`}>{plan.period}</span>
              </div>

              <ul className="space-y-2.5 mb-6 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.featured ? 'bg-violet-500/20' : 'bg-violet-50'}`}>
                      <svg className={`w-2.5 h-2.5 ${plan.featured ? 'text-violet-400' : 'text-violet-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className={`text-xs ${plan.featured ? 'text-gray-300' : 'text-gray-600'}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                onClick={() => {
                  events.pricingPlanClick(plan.key);
                  events.addToSlackClick('pricing', plan.key);
                }}
                className={`block w-full py-3 px-5 rounded-full font-bold text-xs text-center transition-all duration-300 hover:-translate-y-0.5 ${
                  plan.featured
                    ? 'bg-white text-gray-900 hover:bg-gray-50 shadow-lg hover:shadow-xl'
                    : 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:from-violet-700 hover:to-indigo-700 shadow-md hover:shadow-lg'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Enterprise strip */}
        <div className={`mt-10 max-w-3xl mx-auto bg-gray-50 border border-gray-100 rounded-2xl p-6 flex items-center justify-between flex-wrap gap-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '700ms' }}>
          <div>
            <p className="text-sm font-bold text-gray-900">Need more than 200 users?</p>
            <p className="text-xs text-gray-500 mt-1">Enterprise plans include custom seat counts, SSO, audit logs, and a dedicated CSM.</p>
          </div>
          <a
            href="mailto:amitkumar326310@gmail.com?subject=Pingdesk%20Enterprise%20Inquiry"
            className="bg-gray-900 text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-gray-800 transition-all whitespace-nowrap"
          >
            Contact Sales
          </a>
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          All paid plans renew automatically. Cancel anytime. Secured by Razorpay.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
