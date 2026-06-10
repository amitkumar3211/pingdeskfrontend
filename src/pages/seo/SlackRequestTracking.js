import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { events } from '../../lib/analytics';

const SlackRequestTracking = () => (
  <div className="bg-white font-sans text-gray-900 antialiased overflow-x-hidden">
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-1/4 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl" />
      </div>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-4">Slack Request Tracking</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight leading-tight mb-6">
          Track every request
          <br />
          <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">directly in Slack</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Stop losing requests in Slack channels. Pingdesk turns messages into trackable requests with automatic follow-ups — all without leaving Slack.
        </p>
        <a
          href="https://pindeskapi.himalayancoders.com/slack/install"
          onClick={() => events.addToSlackClick('seo_request_tracking')}
          className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-semibold px-9 py-4 rounded-full text-base transition-all shadow-xl shadow-violet-500/25 hover:shadow-2xl hover:-translate-y-1"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.271 0a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.521V2.522A2.528 2.528 0 0 1 15.164 0a2.528 2.528 0 0 1 2.521 2.522v6.312zM15.164 18.956a2.528 2.528 0 0 1 2.521 2.522A2.528 2.528 0 0 1 15.164 24a2.528 2.528 0 0 1-2.521-2.522v-2.522h2.521zm0-1.271a2.528 2.528 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.521h6.314A2.528 2.528 0 0 1 24 15.164a2.528 2.528 0 0 1-2.522 2.521h-6.314z"/></svg>
          Add to Slack — Free
        </a>
        <div className="flex items-center justify-center gap-6 mt-6">
          {['Free to start', 'No credit card', 'Setup in 60s'].map((t) => (
            <span key={t} className="flex items-center gap-1.5 text-sm text-gray-400">
              <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* The problem */}
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
          The average Slack message gets buried in 23 minutes
        </h2>
        <p className="text-lg text-gray-500 text-center max-w-2xl mx-auto mb-12">
          In active channels, your request competes with GIFs, threads, and lunch plans. Without tracking, requests simply disappear.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { stat: '3-4', label: 'requests lost per team per week', color: 'text-red-500' },
            { stat: '5+ hrs', label: 'wasted on manual follow-ups weekly', color: 'text-amber-500' },
            { stat: '70%', label: 'of employees prefer requesting via Slack', color: 'text-violet-600' },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl border border-gray-100 p-6 text-center">
              <p className={`text-4xl font-black ${s.color} mb-2`}>{s.stat}</p>
              <p className="text-sm text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* How Pingdesk tracks requests */}
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          How Pingdesk tracks requests in Slack
        </h2>
        <p className="text-lg text-gray-500 text-center max-w-2xl mx-auto mb-14">
          One slash command. Full visibility. Automatic accountability.
        </p>
        <div className="space-y-6">
          {[
            { title: 'Create with /request', desc: 'Type /request Review Q3 report @david in any channel. Pingdesk instantly creates a trackable request card with status, assignee, and timestamp.', highlight: '/request Review Q3 report @david' },
            { title: 'Track status in real-time', desc: 'Every request shows Pending, In Progress, or Done. The assignee updates status with one click — the whole channel sees it.' },
            { title: 'Automatic follow-up reminders', desc: 'If a request sits unanswered for 24 hours (configurable), Pingdesk sends a polite reminder to the assignee. No manual chasing.' },
            { title: 'Dashboard for full visibility', desc: 'See all requests across channels in one dashboard. Filter by status, date, or team member. Export to CSV for reporting.' },
            { title: 'View your tasks with /request mine', desc: 'Every team member can see what\'s assigned to them with a single command. No switching apps, no checking dashboards.' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-5 bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all">
              <span className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center text-sm font-black text-violet-600 flex-shrink-0">{i + 1}</span>
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Use cases */}
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Teams use Pingdesk to track
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            'Design review requests', 'Code review asks', 'Client feedback requests',
            'Approval workflows', 'IT support tickets', 'Onboarding tasks',
            'Content review requests', 'Bug reports from QA', 'Cross-team handoffs',
          ].map((uc) => (
            <div key={uc} className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 px-5 py-4">
              <svg className="w-4 h-4 text-violet-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span className="text-sm text-gray-700 font-medium">{uc}</span>
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
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">Stop losing requests in Slack</h2>
            <p className="text-lg text-gray-400 max-w-xl mx-auto mb-10">Start tracking in 60 seconds. Free for up to 3 users.</p>
            <a
              href="https://pindeskapi.himalayancoders.com/slack/install"
              onClick={() => events.addToSlackClick('seo_request_tracking_cta')}
              className="inline-flex items-center gap-2.5 bg-white hover:bg-gray-50 text-gray-900 font-semibold px-10 py-4 rounded-full text-base transition-all shadow-xl hover:-translate-y-1"
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
            ['Slack Ticketing System', '/slack-ticketing-system'],
            ['Slack Help Desk', '/slack-help-desk'],
            ['Halp Alternative', '/compare/halp-alternative'],
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

export default SlackRequestTracking;
