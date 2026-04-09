const Shipping = () => {
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
        <h1 className="text-4xl font-black text-gray-900 mb-2">Shipping and Exchange Policy</h1>
        <p className="text-sm text-gray-400 mb-12">Last updated: April 9, 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-[15px] leading-relaxed text-gray-600">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Digital Service — No Physical Shipping</h2>
            <p>Pingdesk is a <strong>cloud-based software service</strong> integrated with Slack. We do not sell, ship, or deliver any physical products. All features and functionality are delivered electronically through your Slack workspace and our web dashboard.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Service Activation</h2>
            <p>Service activation is <strong>instant</strong>. As soon as your subscription payment is confirmed by our payment processor (Razorpay), Pro features are unlocked for your workspace immediately. There is no waiting period and no shipment to track.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Access to the Service</h2>
            <p>You access Pingdesk through:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Slack slash commands (<code className="bg-gray-100 px-1.5 py-0.5 rounded text-violet-600 font-mono text-sm">/request</code>)</li>
              <li>Slack message buttons and modals</li>
              <li>The web dashboard at <a href="https://www.getpingdesk.com" className="text-violet-600 hover:underline">getpingdesk.com</a></li>
            </ul>
            <p className="mt-3">No installation, download, or shipment is required beyond installing the Pingdesk app in your Slack workspace.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Exchanges</h2>
            <p>Because Pingdesk is a digital service and not a physical product, the concept of "exchanges" does not apply in the traditional sense. However:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>You can change your seat count (add or remove seats) anytime from the dashboard.</li>
              <li>You can cancel your subscription anytime — see our <a href="/refund" className="text-violet-600 hover:underline">Cancellation and Refund Policy</a>.</li>
              <li>You can switch billing currencies (USD ↔ INR) by cancelling and resubscribing.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Service Availability</h2>
            <p>Pingdesk is delivered as a SaaS product and aims for 99.9% uptime. Planned maintenance is communicated in advance. Unplanned outages are addressed as quickly as possible. Service availability is global — there are no geographic delivery restrictions.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Contact Us</h2>
            <p>For any questions about service delivery or activation:</p>
            <p className="mt-2"><strong>Email:</strong> <a href="mailto:amitkumar326310@gmail.com" className="text-violet-600 hover:underline">amitkumar326310@gmail.com</a></p>
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

export default Shipping;
