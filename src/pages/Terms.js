const Terms = () => {
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
        <h1 className="text-4xl font-black text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-400 mb-12">Last updated: April 6, 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-[15px] leading-relaxed text-gray-600">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <p>By installing or using Pingdesk, you agree to these Terms of Service. If you do not agree, please do not use our service.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Description of Service</h2>
            <p>Pingdesk is a Slack application that enables teams to create, track, and follow up on requests within Slack. The service includes request creation via slash commands, status tracking, automatic reminders, and an analytics dashboard.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Account & Access</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>You must have a valid Slack workspace to use Pingdesk.</li>
              <li>You are responsible for all activity that occurs under your workspace.</li>
              <li>You must be authorized to install applications in your Slack workspace.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Free & Pro Plans</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Free Plan:</strong> Limited to 3 users and 50 requests per month. Basic features included.</li>
              <li><strong>Pro Plan:</strong> Unlimited users and requests. Includes advanced features like analytics, CSV export, and custom reminder intervals.</li>
              <li>We reserve the right to modify plan features and pricing with 30 days notice.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Payment & Billing</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Pro plan payments are processed securely through Razorpay.</li>
              <li>Subscriptions are billed monthly.</li>
              <li>You may cancel your subscription at any time. Access continues until the end of the billing period.</li>
              <li>Refunds are available within 7 days of payment if you are unsatisfied.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Use Pingdesk for any illegal or unauthorized purpose.</li>
              <li>Attempt to access other workspaces' data.</li>
              <li>Interfere with or disrupt the service.</li>
              <li>Reverse engineer or attempt to extract source code.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Service Availability</h2>
            <p>We strive for high availability but do not guarantee 100% uptime. Pingdesk depends on Slack's API availability. We are not responsible for outages caused by Slack or third-party services.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Limitation of Liability</h2>
            <p>Pingdesk is provided "as is" without warranties. We are not liable for any indirect, incidental, or consequential damages arising from your use of the service. Our total liability shall not exceed the amount paid by you in the last 12 months.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Termination</h2>
            <p>We may suspend or terminate your access if you violate these terms. You may stop using Pingdesk at any time by uninstalling it from your Slack workspace.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Changes to Terms</h2>
            <p>We may update these terms from time to time. Continued use of Pingdesk after changes constitutes acceptance. We will notify users of significant changes.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">11. Contact</h2>
            <p>For questions about these Terms, contact us at:</p>
            <p className="mt-2"><strong>Email:</strong> <a href="mailto:support@pingdesk.app" className="text-violet-600 hover:underline">support@pingdesk.app</a></p>
          </section>
        </div>
      </main>

      <footer className="border-t border-gray-100 py-8 px-6">
        <div className="max-w-3xl mx-auto flex items-center justify-between text-sm text-gray-400">
          <span>&copy; {new Date().getFullYear()} Pingdesk</span>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-gray-600">Privacy</a>
            <a href="/terms" className="hover:text-gray-600">Terms</a>
            <a href="/support" className="hover:text-gray-600">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Terms;
