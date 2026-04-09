const Support = () => {
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
        <h1 className="text-4xl font-black text-gray-900 mb-4">Support</h1>
        <p className="text-lg text-gray-500 mb-12">Need help? We're here for you.</p>

        <div className="space-y-6">
          {/* Contact */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Contact Us</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a href="mailto:amitkumar326310@gmail.com" className="text-violet-600 hover:underline">amitkumar326310@gmail.com</a>
                  <p className="text-sm text-gray-400 mt-0.5">We typically respond within 24 hours.</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: 'How do I install Pingdesk?',
                  a: 'Click "Add to Slack" on our homepage. You\'ll be redirected to Slack to authorize the app. Once authorized, Pingdesk is ready to use — just type /request in any channel.',
                },
                {
                  q: 'How do I create a request?',
                  a: 'Type /request followed by your request title in any Slack channel. Example: /request Review homepage design @sarah',
                },
                {
                  q: 'How do reminders work?',
                  a: 'When a request is created, Pingdesk automatically sends a reminder if no action is taken within the configured time (default 24 hours). The assigned person and creator get notified.',
                },
                {
                  q: 'What happens when I reach the free plan limit?',
                  a: 'On the free plan, you can have up to 3 users and 50 requests per month. When you reach either limit, you\'ll be prompted to upgrade to Pro for unlimited usage.',
                },
                {
                  q: 'How do I upgrade to Pro?',
                  a: 'Type /request dashboard in Slack to access your dashboard, then click "Upgrade Now". You can also upgrade directly from the pricing section on our website.',
                },
                {
                  q: 'Can I cancel my Pro subscription?',
                  a: 'Yes, you can cancel anytime. Your Pro features will remain active until the end of your billing period. Contact amitkumar326310@gmail.com to cancel.',
                },
                {
                  q: 'How do I uninstall Pingdesk?',
                  a: 'Go to your Slack workspace settings → Manage Apps → Find Pingdesk → Remove. You can also request complete data deletion by emailing us.',
                },
                {
                  q: 'Is my data secure?',
                  a: 'Yes. All data is transmitted over HTTPS. We don\'t store any payment information — that\'s handled securely by Razorpay. See our Privacy Policy for details.',
                },
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.q}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
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

export default Support;
