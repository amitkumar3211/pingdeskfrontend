import { useCallback, useEffect, useState } from 'react';
import { cancelSubscription, fetchInvoices } from '../api';
import { EmptyState, FadeIn, SectionHeader } from '../components/shared';

const STATUS_BADGE = {
  captured: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  failed: 'bg-red-50 text-red-700 border-red-100',
  refunded: 'bg-gray-100 text-gray-600 border-gray-200',
  refunded_partial: 'bg-amber-50 text-amber-700 border-amber-100',
};

const Billing = ({ token, workspace, onGoToUpgrade, onChange }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cancelling, setCancelling] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const d = await fetchInvoices(token);
      setData(d);
    } catch {
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => { load(); }, [load]);

  const handleCancel = async () => {
    if (!window.confirm("Cancel your subscription?\n\nYou'll keep Pro features until the end of your current billing period, then downgrade to Free automatically. You can resubscribe anytime.")) return;
    setErrorMsg('');
    setSuccessMsg('');
    setCancelling(true);
    const res = await cancelSubscription(token);
    setCancelling(false);
    if (res.success) {
      setSuccessMsg(res.message || 'Subscription cancelled.');
      await load();
      onChange?.();
    } else {
      setErrorMsg(res.error || 'Could not cancel subscription.');
    }
  };

  if (loading) {
    return <div className="py-20 flex justify-center"><div className="w-8 h-8 rounded-full border-2 border-violet-100 border-t-violet-500 animate-spin" /></div>;
  }

  if (!data) {
    return <p className="text-sm text-gray-400">Could not load billing.</p>;
  }

  const sub = data.subscription;
  const hasSub = !!sub;
  const cancelled = sub?.cancel_at_period_end;

  return (
    <>
      <SectionHeader
        title="Billing"
        description="Subscription, payment history, and invoices."
      />

      {successMsg && (
        <FadeIn>
          <div className="mb-6 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm px-5 py-4 rounded-2xl">
            {successMsg}
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

      {/* Current subscription */}
      <FadeIn>
        <div className="mb-6 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Current Plan</p>
              <div className="flex items-center gap-3 mt-1">
                <h3 className="text-2xl font-black text-gray-900">{sub?.plan_name || workspace.plan_name || 'Free'}</h3>
                {hasSub && (
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                    cancelled ? 'bg-amber-50 text-amber-700' :
                    sub.status === 'active' ? 'bg-emerald-50 text-emerald-700' :
                    sub.status === 'pending' ? 'bg-blue-50 text-blue-700' :
                    sub.status === 'halted' ? 'bg-red-50 text-red-700' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {cancelled ? 'Ending Soon' : sub.status}
                  </span>
                )}
              </div>
              {hasSub && sub.current_period_end && (
                <p className="text-sm text-gray-500 mt-2">
                  {cancelled
                    ? <>Ends on <strong className="text-gray-900">{sub.current_period_end}</strong></>
                    : <>Next billing date: <strong className="text-gray-900">{sub.current_period_end}</strong></>}
                  {sub.currency && <span className="ml-2 text-xs text-gray-400">({sub.currency})</span>}
                </p>
              )}
              {!hasSub && (
                <p className="text-sm text-gray-500 mt-2">You're on the Free plan.</p>
              )}
            </div>

            <div className="flex gap-2 flex-wrap">
              {hasSub && !cancelled && (
                <>
                  <button
                    onClick={onGoToUpgrade}
                    className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-bold px-5 py-2.5 rounded-full hover:from-violet-700 hover:to-indigo-700 transition-all shadow-md"
                  >
                    Change Plan
                  </button>
                  <button
                    onClick={handleCancel}
                    disabled={cancelling}
                    className="bg-white border border-gray-200 text-gray-600 text-xs font-bold px-5 py-2.5 rounded-full hover:bg-gray-50 hover:border-red-200 hover:text-red-600 transition-all disabled:opacity-50"
                  >
                    {cancelling ? 'Cancelling...' : 'Cancel Subscription'}
                  </button>
                </>
              )}
              {!hasSub && (
                <button
                  onClick={onGoToUpgrade}
                  className="bg-gray-900 text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-gray-800 transition-all shadow-md"
                >
                  Upgrade Now
                </button>
              )}
              {hasSub && cancelled && (
                <button
                  onClick={onGoToUpgrade}
                  className="bg-gray-900 text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-gray-800 transition-all shadow-md"
                >
                  Resubscribe
                </button>
              )}
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Invoices */}
      <FadeIn delay={100}>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-gray-900">Payment History</h3>
              <p className="text-xs text-gray-400 mt-0.5">Your recent invoices and charges.</p>
            </div>
            <span className="text-xs text-gray-400">{data.payments.length} {data.payments.length === 1 ? 'invoice' : 'invoices'}</span>
          </div>

          {data.payments.length === 0 ? (
            <EmptyState
              icon={<svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg>}
              title="No invoices yet"
              description="Once you subscribe, your payment history will show up here."
            />
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-50">
                    <th className="text-left text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-6 py-3 bg-gray-50/50">Date</th>
                    <th className="text-left text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-6 py-3 bg-gray-50/50">Plan</th>
                    <th className="text-left text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-6 py-3 bg-gray-50/50">Period</th>
                    <th className="text-left text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-6 py-3 bg-gray-50/50">Amount</th>
                    <th className="text-left text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-6 py-3 bg-gray-50/50">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data.payments.map((p) => (
                    <tr key={p.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-700">{p.paid_at || '—'}</td>
                      <td className="px-6 py-4 text-sm text-gray-700 capitalize">{p.plan_key}</td>
                      <td className="px-6 py-4 text-xs text-gray-400">
                        {p.period_start && p.period_end ? `${p.period_start} – ${p.period_end}` : '—'}
                      </td>
                      <td className="px-6 py-4 text-sm font-bold text-gray-900">{p.amount}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${STATUS_BADGE[p.status] || 'bg-gray-100 text-gray-600 border-gray-200'}`}>
                          {p.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </FadeIn>

      <FadeIn delay={200}>
        <p className="text-center text-[11px] text-gray-400 mt-6">
          All payments are processed by Razorpay. For receipts or billing questions, contact{' '}
          <a href="mailto:amitkumar326310@gmail.com" className="text-violet-600 hover:underline">amitkumar326310@gmail.com</a>.
        </p>
      </FadeIn>
    </>
  );
};

export default Billing;
