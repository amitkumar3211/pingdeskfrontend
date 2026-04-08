import { useEffect, useRef, useState } from 'react';
import { events } from '../lib/analytics';

const API_URL = 'https://pindeskapi.himalayancoders.com';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'For small teams getting started.',
    features: ['Up to 3 users', '50 requests/month', 'Basic status tracking', 'Slack integration'],
    cta: 'Add to Slack — Free',
    href: `${API_URL}/slack/install`,
    featured: false,
  },
  {
    name: 'Pro',
    price: '$4',
    originalPrice: '$8',
    period: '/user/month',
    description: 'Full power and automation for growing teams.',
    features: ['Unlimited requests', 'Auto follow-ups & reminders', 'Dashboard & analytics', 'CSV export', 'Custom reminder intervals', 'Priority support'],
    cta: 'Add to Slack — Go Pro',
    href: `${API_URL}/slack/install?plan=pro`,
    featured: true,
    earlyBird: true,
  },
];

const Pricing = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="pricing" className="py-20 md:py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-3">Pricing</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-500">Start free. Upgrade when you're ready.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-3xl p-8 md:p-10 transition-all duration-700 hover:-translate-y-2 ${
                plan.featured
                  ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-violet-950 text-white shadow-2xl shadow-gray-900/30 ring-1 ring-white/10'
                  : 'bg-white border-2 border-gray-100 hover:border-violet-200 hover:shadow-xl'
              } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
            >
              {plan.earlyBird && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-lg shadow-orange-500/30">Early Bird — 50% off</span>
                </div>
              )}

              <h3 className={`text-lg font-bold ${plan.featured ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
              <div className="flex items-baseline gap-1.5 mt-3 mb-1">
                {plan.originalPrice && (
                  <span className={`text-2xl font-bold line-through ${plan.featured ? 'text-gray-500' : 'text-gray-400'} mr-1`}>{plan.originalPrice}</span>
                )}
                <span className={`text-5xl font-black ${plan.featured ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
                <span className="text-sm text-gray-400">{plan.period}</span>
              </div>
              <p className={`text-sm mb-2 ${plan.featured ? 'text-gray-400' : 'text-gray-500'}`}>{plan.description}</p>
              {plan.earlyBird && (
                <p className="text-xs text-amber-400 font-semibold mb-6">Limited to first 500 teams</p>
              )}
              {!plan.earlyBird && <div className="mb-6" />}

              <ul className="space-y-4 mb-10">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.featured ? 'bg-violet-500/20' : 'bg-violet-50'}`}>
                      <svg className={`w-3 h-3 ${plan.featured ? 'text-violet-400' : 'text-violet-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className={`text-sm ${plan.featured ? 'text-gray-300' : 'text-gray-600'}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                onClick={() => {
                  events.pricingPlanClick(plan.name.toLowerCase());
                  events.addToSlackClick('pricing', plan.name.toLowerCase());
                }}
                className={`block w-full py-3.5 px-6 rounded-full font-semibold text-sm text-center transition-all duration-300 hover:-translate-y-0.5 ${
                  plan.featured
                    ? 'bg-white text-gray-900 hover:bg-gray-100 shadow-lg hover:shadow-xl'
                    : 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:from-violet-700 hover:to-indigo-700 shadow-lg shadow-violet-500/25 hover:shadow-xl'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
