const Refund = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <nav className="border-b border-gray-100 py-4 px-6">
        <div className="max-w-3xl mx-auto flex items-center gap-2.5">
          <a href="/" className="flex items-center gap-2.5">
            <div className="relative w-8 h-8 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-sm">P</span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
            </div>
            <span className="text-lg font-extrabold text-gray-900">Pingdesk</span>
          </a>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-black text-gray-900 mb-2">Cancellation and Refund Policy</h1>
        <p className="text-sm text-gray-400 mb-12">Last updated: April 9, 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-[15px] leading-relaxed text-gray-600">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Subscription Cancellation</h2>
            <p>You can cancel your Pingdesk Pro subscription at any time from your workspace dashboard under <strong>Billing → Cancel Subscription</strong>, or by emailing us at <a href="mailto:amitkumar326310@gmail.com" className="text-violet-600 hover:underline">amitkumar326310@gmail.com</a>.</p>
            <p className="mt-3">When you cancel:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Your Pro features remain active until the end of your current billing period.</li>
              <li>You will not be charged again after cancellation.</li>
              <li>Your workspace automatically downgrades to the Free plan at the end of the billing period.</li>
              <li>Your data, requests, and history are retained — you can resubscribe anytime.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Refund Eligibility</h2>
            <p>Pingdesk offers a <strong>7-day money-back guarantee</strong> on first-time Pro subscriptions. If you are not satisfied within 7 days of your initial Pro upgrade, contact us and we will issue a full refund — no questions asked.</p>
            <p className="mt-3">After the 7-day window:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Subscription fees already paid for the current billing period are non-refundable.</li>
              <li>Cancellation will stop future charges, but you will retain Pro access until the period ends.</li>
              <li>Refunds for additional seats purchased mid-cycle are evaluated case by case. Contact us to discuss.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Reducing Seats Mid-Cycle</h2>
            <p>If you remove seats from your subscription:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>The change takes effect at the start of your next billing period.</li>
              <li>You will not be refunded for the unused portion of the current period.</li>
              <li>Your next invoice will reflect the reduced seat count and lower amount.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Adding Seats Mid-Cycle</h2>
            <p>When you add seats during an active billing period, you are charged a <strong>prorated amount</strong> for the remaining days of the current period. Your next regular invoice will then reflect the new total seat count.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Failed Payments</h2>
            <p>If a recurring payment fails, we will retry up to 3 times over the next several days. If all attempts fail, your workspace will be downgraded to the Free plan after a 7-day grace period. You can update your payment method anytime from <strong>Billing → Update Payment Method</strong>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Refund Processing Time</h2>
            <p>Approved refunds are processed back to the original payment method within <strong>5–10 business days</strong>. The exact timing depends on your bank or card issuer.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Contact Us</h2>
            <p>For any cancellation or refund questions, reach out:</p>
            <p className="mt-2"><strong>Email:</strong> <a href="mailto:amitkumar326310@gmail.com" className="text-violet-600 hover:underline">amitkumar326310@gmail.com</a></p>
            <p className="mt-1">We respond to all billing requests within 24 hours.</p>
          </section>
        </div>
      </main>

      <footer className="border-t border-gray-100 py-8 px-6">
        <div className="max-w-3xl mx-auto flex items-center justify-between text-sm text-gray-400 flex-wrap gap-3">
          <span>&copy; {new Date().getFullYear()} Pingdesk</span>
          <div className="flex gap-4 flex-wrap">
            <a href="/privacy" className="hover:text-gray-600">Privacy</a>
            <a href="/terms" className="hover:text-gray-600">Terms</a>
            <a href="/refund" className="hover:text-gray-600">Refund</a>
            <a href="/shipping" className="hover:text-gray-600">Shipping</a>
            <a href="/contact" className="hover:text-gray-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Refund;
