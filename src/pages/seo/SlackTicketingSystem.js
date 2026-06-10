import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { events } from '../../lib/analytics';

const features = [
  { title: 'Create tickets with /request', desc: 'Turn any Slack message into a trackable ticket. Just type /request and assign it to a teammate.', icon: '🎫' },
  { title: 'Auto-assign & track status', desc: 'Every ticket has a clear owner and status — Pending, In Progress, or Done. No ambiguity.', icon: '📋' },
  { title: 'Automatic follow-up reminders', desc: 'If a ticket goes unanswered, Pingdesk sends polite reminders. No more manual chasing.', icon: '🔔' },
  { title: 'Web dashboard & analytics', desc: 'See all tickets in one place. Filter by status, team member, or date. Export to CSV.', icon: '📊' },
  { title: 'Works in any channel', desc: 'Create tickets from #support, #engineering, #design — anywhere your team works in Slack.', icon: '💬' },
  { title: 'Setup in 60 seconds', desc: 'Click Add to Slack, authorize, done. No configuration, no onboarding calls, no IT tickets.', icon: '⚡' },
];

const comparisons = [
  { tool: 'Jira Service Management', pain: 'Complex setup, expensive, takes people out of Slack', pingdesk: 'Works entirely inside Slack, free to start' },
  { tool: 'Email ticketing', pain: 'Slow, gets buried in inboxes, no real-time updates', pingdesk: 'Instant notifications in Slack where your team already works' },
  { tool: 'Spreadsheets', pain: 'Manual updates, outdated within hours, no automation', pingdesk: 'Auto-updated status, automatic reminders, real-time tracking' },
  { tool: 'Slack messages (no tool)', pain: 'Lost in channels, no accountability, no follow-up', pingdesk: 'Structured tickets with owners, status, and auto follow-up' },
];

const SlackTicketingSystem = () => (
  <div className="bg-white font-sans text-gray-900 antialiased overflow-x-hidden">
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 w-80 h-80 bg-violet-200/30 rounded-full blur-3xl" />
        <div className="absolute top-32 right-1/4 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl" />
      </div>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-4">Slack Ticketing System</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight leading-tight mb-6">
          Turn Slack into a
          <br />
          <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">ticketing system</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Pingdesk adds a simple <code className="bg-violet-50 text-violet-700 px-2 py-0.5 rounded text-base font-mono">/request</code> command to Slack. Create, assign, and track tickets without leaving your workspace. Free to start.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="https://pindeskapi.himalayancoders.com/slack/install"
            onClick={() => events.addToSlackClick('seo_ticketing')}
            className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-semibold px-9 py-4 rounded-full text-base transition-all shadow-xl shadow-violet-500/25 hover:shadow-2xl hover:-translate-y-1"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.271 0a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.521V2.522A2.528 2.528 0 0 1 15.164 0a2.528 2.528 0 0 1 2.521 2.522v6.312zM15.164 18.956a2.528 2.528 0 0 1 2.521 2.522A2.528 2.528 0 0 1 15.164 24a2.528 2.528 0 0 1-2.521-2.522v-2.522h2.521zm0-1.271a2.528 2.528 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.521h6.314A2.528 2.528 0 0 1 24 15.164a2.528 2.528 0 0 1-2.522 2.521h-6.314z"/></svg>
            Add to Slack — Free
          </a>
          <a href="/#how-it-works" className="text-gray-500 hover:text-gray-900 font-medium text-base transition-colors">See how it works &darr;</a>
        </div>
        <div className="flex items-center justify-center gap-6">
          {['Free to start', 'No credit card', 'Setup in 60s'].map((t) => (
            <span key={t} className="flex items-center gap-1.5 text-sm text-gray-400">
              <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* Problem */}
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight text-center mb-6">
          Slack wasn't built for ticketing. Until now.
        </h2>
        <p className="text-lg text-gray-500 text-center max-w-2xl mx-auto mb-12">
          70% of employees prefer submitting requests through Slack. But without structure, messages get buried in minutes. Pingdesk fixes this.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {comparisons.map((c) => (
            <div key={c.tool} className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="text-sm font-bold text-gray-900 mb-3">{c.tool}</h3>
              <div className="flex items-start gap-2 mb-3">
                <svg className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                <p className="text-sm text-gray-500">{c.pain}</p>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <p className="text-sm text-gray-700 font-medium">Pingdesk: {c.pingdesk}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight text-center mb-4">
          Everything you need in a Slack ticketing system
        </h2>
        <p className="text-lg text-gray-500 text-center max-w-2xl mx-auto mb-14">
          No complex setup. No separate app to manage. Just Slack + Pingdesk.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <span className="text-3xl mb-4 block">{f.icon}</span>
              <h3 className="text-base font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* How it works */}
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight text-center mb-14">
          Three steps. That's it.
        </h2>
        <div className="space-y-8">
          {[
            { step: '1', title: 'Install Pingdesk', desc: 'Click "Add to Slack" and authorize. Takes 60 seconds.' },
            { step: '2', title: 'Create a ticket', desc: 'Type /request Fix login bug @sarah in any Slack channel.' },
            { step: '3', title: 'Track & follow up', desc: 'Pingdesk tracks status and sends automatic reminders until it\'s resolved.' },
          ].map((s) => (
            <div key={s.step} className="flex items-start gap-5">
              <span className="w-12 h-12 bg-violet-100 rounded-2xl flex items-center justify-center text-lg font-black text-violet-600 flex-shrink-0">{s.step}</span>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-gray-500">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-violet-950 rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
              Ready to turn Slack into your ticketing system?
            </h2>
            <p className="text-lg text-gray-400 max-w-xl mx-auto mb-10">Free for up to 3 users. No credit card required.</p>
            <a
              href="https://pindeskapi.himalayancoders.com/slack/install"
              onClick={() => events.addToSlackClick('seo_ticketing_cta')}
              className="inline-flex items-center gap-2.5 bg-white hover:bg-gray-50 text-gray-900 font-semibold px-10 py-4 rounded-full text-base transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.271 0a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.521V2.522A2.528 2.528 0 0 1 15.164 0a2.528 2.528 0 0 1 2.521 2.522v6.312zM15.164 18.956a2.528 2.528 0 0 1 2.521 2.522A2.528 2.528 0 0 1 15.164 24a2.528 2.528 0 0 1-2.521-2.522v-2.522h2.521zm0-1.271a2.528 2.528 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.521h6.314A2.528 2.528 0 0 1 24 15.164a2.528 2.528 0 0 1-2.522 2.521h-6.314z"/></svg>
              Add to Slack — Free
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Internal links */}
    <section className="py-12 px-6 border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-semibold text-gray-400 mb-4">Related</p>
        <div className="flex flex-wrap gap-3">
          {[
            ['Slack Request Tracking', '/slack-request-tracking'],
            ['Slack Help Desk', '/slack-help-desk'],
            ['Halp Alternative', '/compare/halp-alternative'],
            ['Pingdesk vs Others', '/compare/pingdesk-vs-others'],
            ['Blog', '/blog'],
          ].map(([label, href]) => (
            <a key={href} href={href} className="text-sm text-violet-600 hover:text-violet-700 bg-violet-50 hover:bg-violet-100 px-4 py-2 rounded-full transition-colors font-medium">{label}</a>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default SlackTicketingSystem;
