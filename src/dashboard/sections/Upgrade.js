import { useEffect, useState } from 'react';
import { events } from '../../lib/analytics';
import { createSubscription, fetchPlans, verifySubscription } from '../api';
import { FadeIn, SectionHeader } from '../components/shared';
import { detectCurrencySync, refreshCurrencyFromIp, setCurrencyChoice } from '../lib/currency';

const FEATURE_LABELS = {
  dashboard_view: 'Dashboard',
  charts: 'Activity charts & analytics',
  csv_export: 'CSV export',
  custom_reminder_interval: 'Custom reminder intervals',
  multi_admin: 'Multiple workspace admins',
  priority_support: 'Priority support',
  sso: 'SSO (coming soon)',
  audit_logs: 'Audit logs (coming soon)',
};

const Upgrade = ({ token, workspace, onChange }) => {
  const [plans, setPlans] = useState(null);
  const [currency, setCurrency] = useState(detectCurrencySync);
  const [busyPlan, setBusyPlan] = useState(null);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // First-paint: best-effort sync detection. Then async IP lookup
  // confirms (or corrects) the choice. Only applies if the user hasn't
  // already manually picked a currency (locked in localStorage).
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

  useEffect(() => {
    fetchPlans(token).then((res) => setPlans(res.plans || [])).catch(() => setPlans([]));
  }, [token]);

  const currentPlan = workspace.plan || 'free';

  const handleSubscribe = async (planKey) => {
    setErrorMsg('');
    setSuccessMsg('');
    setBusyPlan(planKey);
    try {
      events.checkoutStarted();
      const sub = await createSubscription(token, planKey, currency);
      if (sub.error) {
        setErrorMsg(sub.error);
        setBusyPlan(null);
        return;
      }
      events.paymentInitiated();

      const rzp = new window.Razorpay({
        key: sub.key,
        subscription_id: sub.subscription_id,
        name: 'Pingdesk',
        description: `${sub.plan_name} plan — billed monthly`,
        prefill: { name: sub.workspace_name },
        theme: { color: '#7C3AED' },
        handler: async (r) => {
          const res = await verifySubscription(token, {
            payment_id: r.razorpay_payment_id,
            subscription_id: r.razorpay_subscription_id,
            signature: r.razorpay_signature,
          });
          if (res.success) {
            events.paymentSuccess(r.razorpay_payment_id);
            setSuccessMsg(res.message || 'Subscription active.');
            onChange?.();
          } else {
            events.paymentFailed('verification_failed');
            setErrorMsg(res.error || 'Payment verification failed.');
          }
          setBusyPlan(null);
        },
        modal: {
          ondismiss: () => {
            events.paymentFailed('user_dismissed');
            setBusyPlan(null);
          },
        },
      });
      rzp.open();
    } catch (e) {
      events.paymentFailed('order_creation_failed');
      setErrorMsg('Could not start checkout. Please try again.');
      setBusyPlan(null);
    }
  };

  if (plans === null) {
    return <div className="py-20 flex justify-center"><div className="w-8 h-8 rounded-full border-2 border-violet-100 border-t-violet-500 animate-spin" /></div>;
  }

  // Hide free from the upgrade picker — it's the default
  const paidPlans = plans.filter((p) => p.is_paid);

  return (
    <>
      <SectionHeader
        title={workspace.is_pro ? 'Manage Plan' : 'Upgrade to Pingdesk Pro'}
        description={workspace.is_pro
          ? `You're on the ${workspace.plan_name} plan. Switch any time.`
          : 'Pick the plan that fits your team. Cancel any time.'}
        action={
          <div className="flex items-center gap-0.5 bg-gray-100 rounded-full p-0.5">
            {['USD', 'INR'].map((c) => (
              <button
                key={c}
                onClick={() => { setCurrency(c); setCurrencyChoice(c); }}
                className={`text-[11px] font-bold px-3 py-1.5 rounded-full transition-all ${
                  currency === c ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {c === 'USD' ? '$ USD' : '₹ INR'}
              </button>
            ))}
          </div>
        }
      />

      {successMsg && (
        <FadeIn>
          <div className="mb-6 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm px-5 py-4 rounded-2xl flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            </div>
            <span className="font-semibold">{successMsg}</span>
          </div>
        </FadeIn>
      )}
      {errorMsg && (
        <FadeIn>
          <div className="mb-6 bg-red-50 border border-red-100 text-red-700 text-sm px-5 py-4 rounded-2xl">
            {errorMsg}
          </div>
        </FadeIn>
      )}

      {/* Plan grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {paidPlans.map((plan, idx) => {
          const isCurrent = currentPlan === plan.key;
          const isFeatured = plan.key === 'growth'; // middle tier highlighted
          const price = plan.price[currency];
          const isBusy = busyPlan === plan.key;

          return (
            <FadeIn key={plan.key} delay={100 * idx}>
              <div className={`relative rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1 h-full flex flex-col ${
                isFeatured
                  ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-violet-950 text-white shadow-2xl shadow-gray-900/30 ring-1 ring-white/10'
                  : 'bg-white border-2 border-gray-100 hover:border-violet-200 hover:shadow-xl'
              }`}>
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-bold px-4 py-1 rounded-full shadow-lg shadow-orange-500/30 uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className={`text-lg font-bold ${isFeatured ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                <p className={`text-xs mt-1 mb-5 ${isFeatured ? 'text-gray-400' : 'text-gray-500'}`}>{plan.tagline}</p>

                <div className="mb-5">
                  <div className="flex items-baseline gap-1.5">
                    <span className={`text-4xl font-black ${isFeatured ? 'text-white' : 'text-gray-900'}`}>{price.display}</span>
                    <span className={`text-xs ${isFeatured ? 'text-gray-400' : 'text-gray-400'}`}>/ month</span>
                  </div>
                  <p className={`text-xs mt-1 ${isFeatured ? 'text-gray-400' : 'text-gray-500'}`}>
                    Up to {plan.seats} users · unlimited requests
                  </p>
                </div>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {Object.entries(plan.features)
                    .filter(([, enabled]) => enabled)
                    .map(([feat]) => (
                      <li key={feat} className="flex items-center gap-2.5 text-xs">
                        <span className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${isFeatured ? 'bg-violet-500/20' : 'bg-violet-50'}`}>
                          <svg className={`w-2.5 h-2.5 ${isFeatured ? 'text-violet-400' : 'text-violet-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className={isFeatured ? 'text-gray-300' : 'text-gray-600'}>{FEATURE_LABELS[feat] || feat}</span>
                      </li>
                    ))}
                </ul>

                <button
                  onClick={() => handleSubscribe(plan.key)}
                  disabled={isCurrent || isBusy}
                  className={`w-full py-3 px-5 rounded-full text-sm font-bold transition-all ${
                    isCurrent
                      ? 'bg-emerald-50 text-emerald-700 cursor-default'
                      : isFeatured
                        ? 'bg-white text-gray-900 hover:bg-gray-50 shadow-lg hover:shadow-xl hover:-translate-y-0.5'
                        : 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:from-violet-700 hover:to-indigo-700 shadow-md hover:shadow-lg hover:-translate-y-0.5'
                  } ${isBusy ? 'opacity-50' : ''}`}
                >
                  {isBusy ? 'Opening checkout...' : isCurrent ? 'Current plan' : `Subscribe to ${plan.name}`}
                </button>
              </div>
            </FadeIn>
          );
        })}
      </div>

      {/* Enterprise card */}
      <FadeIn delay={400}>
        <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900">Enterprise</h3>
              <p className="text-xs text-gray-500 mt-1">Custom seat counts, SSO, audit logs, SLA, and dedicated support. For organizations with 200+ users.</p>
            </div>
          </div>
          <a
            href="mailto:amitkumar326310@gmail.com?subject=Pingdesk%20Enterprise%20Inquiry"
            className="bg-gray-900 text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-gray-800 transition-all shadow-sm"
          >
            Contact Sales
          </a>
        </div>
      </FadeIn>

      <FadeIn delay={500}>
        <p className="text-center text-[11px] text-gray-400 mt-8">
          All plans renew automatically. Secured by Razorpay. Cancel anytime from the Billing page.
        </p>
      </FadeIn>
    </>
  );
};

export default Upgrade;
