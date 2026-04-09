import { useState } from 'react';
import { events } from '../../lib/analytics';
import { createOrder, verifyPayment } from '../api';
import { FadeIn, SectionHeader } from '../components/shared';

const PRICE_PER_SEAT_RUPEES = 330; // ₹330/seat early bird

const Upgrade = ({ token, workspace, onChange }) => {
  const isPro = workspace.is_pro;
  const minSeats = workspace.pro_min_seats || 3;
  const [seats, setSeats] = useState(isPro ? 1 : minSeats);
  const [busy, setBusy] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // For Pro: minimum is 1 (you're adding seats). For Free upgrade: minimum is the floor.
  const floor = isPro ? 1 : minSeats;

  const total = seats * PRICE_PER_SEAT_RUPEES;

  const dec = () => setSeats((s) => Math.max(floor, s - 1));
  const inc = () => setSeats((s) => Math.min(500, s + 1));

  const handlePay = async () => {
    setErrorMsg('');
    setBusy(true);
    try {
      events.checkoutStarted();
      const order = await createOrder(token, seats);
      events.paymentInitiated();
      const rzp = new window.Razorpay({
        key: order.key,
        amount: order.amount,
        currency: order.currency,
        name: 'Pingdesk',
        description: isPro ? `Add ${seats} seat${seats > 1 ? 's' : ''}` : `Pro Plan — ${seats} seats`,
        order_id: order.order_id,
        handler: async (r) => {
          const res = await verifyPayment(token, {
            payment_id: r.razorpay_payment_id,
            order_id: r.razorpay_order_id,
            signature: r.razorpay_signature,
            seats,
          });
          if (res.success) {
            events.paymentSuccess(r.razorpay_payment_id);
            setSuccessMsg(isPro
              ? `${seats} seat${seats > 1 ? 's' : ''} added. You now have ${res.seats_total} total.`
              : `Welcome to Pro! Your workspace has ${res.seats_total} seats.`
            );
            onChange?.();
          } else {
            events.paymentFailed('verification_failed');
            setErrorMsg('Payment verification failed. Please contact support if your card was charged.');
          }
        },
        prefill: { name: order.workspace_name },
        theme: { color: '#7C3AED' },
        modal: {
          ondismiss: () => {
            events.paymentFailed('user_dismissed');
            setBusy(false);
          },
        },
      });
      rzp.open();
    } catch (e) {
      events.paymentFailed('order_creation_failed');
      setErrorMsg('Could not start checkout. Please try again.');
      setBusy(false);
    }
  };

  return (
    <>
      <SectionHeader
        title={isPro ? 'Manage Plan' : 'Upgrade to Pro'}
        description={isPro
          ? `You're on the Pro plan with ${workspace.seats_total} seats. Buy more whenever your team grows.`
          : 'Pick how many seats you need. You can always add more later.'}
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

      <FadeIn>
        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-violet-950" />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
          <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 p-8 md:p-12">
            {!isPro && (
              <span className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[11px] font-bold px-4 py-1.5 rounded-full mb-5 shadow-lg shadow-orange-500/30">
                Early Bird — 50% off
              </span>
            )}

            <div className="grid lg:grid-cols-2 gap-10 items-start">
              {/* Left: features */}
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-3">
                  {isPro ? 'Add more seats' : 'Pingdesk Pro'}
                </h2>
                <p className="text-white/60 text-base mb-6">
                  {isPro
                    ? 'Need more people on the team? Buy seats à la carte and they activate instantly.'
                    : 'Everything in Free, plus the features your team will actually use.'}
                </p>
                {!isPro && (
                  <ul className="space-y-2.5">
                    {[
                      'Unlimited requests per month',
                      'Custom reminder intervals',
                      'CSV exports of all your data',
                      'Trend charts (today / week / month / year)',
                      'Team performance analytics',
                      'Multiple workspace admins',
                      'Priority support',
                    ].map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                        <span className="w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Right: seat picker */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7">
                <p className="text-xs text-white/40 font-bold uppercase tracking-wider mb-1">
                  {isPro ? 'Add seats' : 'How many seats?'}
                </p>
                <p className="text-white/80 text-xs mb-6">
                  {isPro
                    ? `Currently you have ${workspace.seats_total} seats.`
                    : `Minimum ${minSeats} seats — perfect for small teams.`}
                </p>

                <div className="flex items-center justify-between mb-8">
                  <button
                    onClick={dec}
                    disabled={seats <= floor}
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl font-bold flex items-center justify-center disabled:opacity-30 transition-all"
                  >
                    −
                  </button>
                  <div className="text-center">
                    <p className="text-6xl font-black text-white tracking-tight tabular-nums">{seats}</p>
                    <p className="text-xs text-white/40 font-medium uppercase tracking-wider mt-1">{seats === 1 ? 'seat' : 'seats'}</p>
                  </div>
                  <button
                    onClick={inc}
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl font-bold flex items-center justify-center transition-all"
                  >
                    +
                  </button>
                </div>

                {/* Quick presets */}
                {!isPro && (
                  <div className="flex items-center justify-center gap-2 mb-6">
                    {[3, 5, 10, 25].map((n) => (
                      <button
                        key={n}
                        onClick={() => setSeats(n)}
                        className={`text-[11px] font-bold px-3 py-1.5 rounded-full transition-all ${
                          seats === n ? 'bg-white text-gray-900' : 'bg-white/10 text-white/70 hover:bg-white/15'
                        }`}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                )}

                {/* Price */}
                <div className="bg-white/5 rounded-xl p-4 mb-5">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <p className="text-xs text-white/40 font-medium">{seats} × ₹{PRICE_PER_SEAT_RUPEES}/seat</p>
                      <p className="text-xs text-white/40 font-medium">per month</p>
                    </div>
                    <p className="text-3xl font-black text-white tabular-nums">₹{total.toLocaleString('en-IN')}</p>
                  </div>
                </div>

                <button
                  onClick={handlePay}
                  disabled={busy}
                  className="w-full bg-white hover:bg-gray-50 text-gray-900 font-bold text-sm px-6 py-3.5 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-50"
                >
                  {busy ? 'Opening checkout...' : isPro ? `Add ${seats} seat${seats > 1 ? 's' : ''} for ₹${total.toLocaleString('en-IN')}` : `Pay ₹${total.toLocaleString('en-IN')} / month`}
                </button>
                <p className="text-center text-[11px] text-white/40 mt-3">Secured by Razorpay · Cancel anytime</p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </>
  );
};

export default Upgrade;
