const Privacy = () => {
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
        <h1 className="text-4xl font-black text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-12">Last updated: April 6, 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-[15px] leading-relaxed text-gray-600">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
            <p>Pingdesk ("we", "our", "us") is a Slack-based request tracking tool. This Privacy Policy explains how we collect, use, and protect your information when you use our service.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
            <p className="mb-3">When you install and use Pingdesk, we collect:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Slack Workspace Information:</strong> Team ID, team name, and bot access token (required for the app to function).</li>
              <li><strong>User Information:</strong> Slack user IDs and display names of users who create or are assigned requests.</li>
              <li><strong>Request Data:</strong> Request titles, status, timestamps, and channel IDs created through the /request command.</li>
              <li><strong>Payment Information:</strong> Processed securely by Razorpay. We do not store credit card numbers or bank details.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To provide the core request tracking and reminder functionality.</li>
              <li>To send automated follow-up reminders in Slack channels.</li>
              <li>To display request analytics in your dashboard.</li>
              <li>To process payments for Pro plan subscriptions.</li>
              <li>To improve our service and fix bugs.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Data Storage & Security</h2>
            <p>Your data is stored on secure servers. We use encryption for data in transit (HTTPS/TLS). Slack access tokens are stored securely and never shared with third parties. We follow industry-standard security practices to protect your information.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Data Sharing</h2>
            <p>We do not sell, rent, or share your personal information with third parties, except:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Slack:</strong> We interact with Slack's API to provide the service.</li>
              <li><strong>Razorpay:</strong> Payment processing for Pro plan subscriptions.</li>
              <li><strong>Legal Requirements:</strong> If required by law or to protect our rights.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Data Retention</h2>
            <p>We retain your data for as long as your workspace has Pingdesk installed. If you uninstall the app, you can request complete data deletion by contacting us. We will delete all associated data within 30 days of such request.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Access your data through the Pingdesk dashboard.</li>
              <li>Export your data via CSV (Pro plan).</li>
              <li>Request deletion of your data by contacting us.</li>
              <li>Uninstall Pingdesk from your Slack workspace at any time.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Cookies</h2>
            <p>Our website uses minimal cookies for essential functionality only. We do not use tracking cookies or third-party analytics that collect personal data.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Children's Privacy</h2>
            <p>Pingdesk is not intended for use by individuals under the age of 16. We do not knowingly collect personal information from children.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify users of significant changes through Slack or email. Continued use of Pingdesk after changes constitutes acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">11. Contact Us</h2>
            <p>If you have questions about this Privacy Policy or your data, contact us at:</p>
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

export default Privacy;
