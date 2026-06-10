import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { events } from '../../lib/analytics';

const tools = ['Pingdesk', 'ClearFeed', 'Suptask', 'Wrangle', 'Jira SM'];

const features = [
  { name: 'Free plan', values: ['Yes (3 users)', 'No', 'Yes (limited)', 'No', 'Yes (3 agents)'] },
  { name: 'Setup time', values: ['60 seconds', '~30 min', '~15 min', 'Demo required', '1-2 weeks'] },
  { name: 'Slack slash command', values: ['/request', 'No', '/suptask', 'No', '/jira'] },
  { name: 'Auto follow-up reminders', values: ['Yes', 'No', 'No', 'No', 'Via automation rules'] },
  { name: 'Status tracking', values: ['Yes', 'Yes', 'Yes', 'Yes', 'Yes'] },
  { name: 'Web dashboard', values: ['Yes', 'Yes', 'Yes', 'Yes', 'Yes (Jira)'] },
  { name: 'Analytics & charts', values: ['Yes (paid)', 'Yes', 'Yes (paid)', 'Yes', 'Yes'] },
  { name: 'SLA tracking', values: ['No', 'Yes', 'Yes (paid)', 'Yes', 'Yes'] },
  { name: 'Custom forms', values: ['No', 'Yes', 'Yes (paid)', 'Yes', 'Yes'] },
  { name: 'Slack Connect support', values: ['No', 'Yes', 'Yes', 'No', 'Yes'] },
  { name: 'Email channel', values: ['No (Slack-only)', 'Yes', 'No', 'No', 'Yes'] },
  { name: 'Starting price', values: ['Free', '$24/agent/mo', 'Free', 'Contact sales', 'Free'] },
  { name: 'Paid plans from', values: ['$12/mo flat', '$24/agent/mo', '$7/agent/mo', 'Custom', '$17.65/agent/mo'] },
  { name: 'Target user', values: ['Any Slack team', 'B2B support', 'IT/support teams', 'Enterprise ops', 'Enterprise IT'] },
];

const PingdeskVsOthers = () => (
  <div className="bg-white font-sans text-gray-900 antialiased overflow-x-hidden">
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-4">Comparison</p>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-6">
          Pingdesk vs ClearFeed vs Suptask vs Wrangle
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-4 leading-relaxed">
          Comparing the top Slack ticketing and request tracking tools in 2026. Find the right one for your team.
        </p>
      </div>
    </section>

    {/* Quick verdict */}
    <section className="pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
          <h2 className="text-base font-bold text-gray-900 mb-3">Quick verdict</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><strong className="text-gray-900">Choose Pingdesk</strong> if you want the simplest, fastest Slack request tracking with auto follow-ups. Best for teams that don't need formal SLAs.</li>
            <li><strong className="text-gray-900">Choose ClearFeed</strong> if you run B2B customer support over Slack Connect and need triage, SLAs, and CSAT.</li>
            <li><strong className="text-gray-900">Choose Suptask</strong> if your IT/support team needs formal ticketing with SLAs and custom forms in Slack.</li>
            <li><strong className="text-gray-900">Choose Wrangle</strong> if you need approval workflows and enterprise-grade routing rules.</li>
            <li><strong className="text-gray-900">Choose Jira SM</strong> if you're already in the Atlassian ecosystem and need full ITSM.</li>
          </ul>
        </div>
      </div>
    </section>

    {/* Feature comparison table */}
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
          Feature-by-feature comparison
        </h2>
        <div className="overflow-x-auto -mx-6 px-6">
          <table className="w-full bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm" style={{ minWidth: 800 }}>
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-5 py-4 text-sm font-bold text-gray-500 w-48">Feature</th>
                {tools.map((tool, i) => (
                  <th key={tool} className={`text-center px-4 py-4 text-sm font-bold ${i === 0 ? 'text-violet-600 bg-violet-50/50' : 'text-gray-700'}`}>
                    {tool}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((f, fi) => (
                <tr key={f.name} className={`border-t border-gray-50 ${fi % 2 === 0 ? '' : 'bg-gray-50/30'}`}>
                  <td className="px-5 py-3.5 text-sm font-medium text-gray-700">{f.name}</td>
                  {f.values.map((v, vi) => (
                    <td key={vi} className={`text-center px-4 py-3.5 text-sm ${vi === 0 ? 'font-semibold text-violet-700 bg-violet-50/30' : 'text-gray-600'}`}>
                      {v === 'Yes' ? (
                        <svg className="w-5 h-5 text-emerald-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      ) : v === 'No' ? (
                        <svg className="w-5 h-5 text-gray-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                      ) : v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    {/* Why Pingdesk */}
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Why teams choose Pingdesk
        </h2>
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p>Most Slack ticketing tools are built for support teams. They come with agent seats, SLA configurations, routing rules, and custom forms. That's great if you run a formal help desk.</p>
          <p>But most teams don't need all that. They just need a way to <strong>create a request in Slack, assign it to someone, and make sure it gets done</strong>. That's exactly what Pingdesk does.</p>
          <p>Pingdesk is the only tool in this comparison that includes <strong>automatic follow-up reminders</strong> out of the box. If a request goes unanswered, Pingdesk sends a polite nudge — no rules to configure, no automation to set up.</p>
          <p>It's also the fastest to set up (60 seconds) and the only one with <strong>flat monthly pricing</strong> instead of per-agent pricing that scales unpredictably.</p>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Try Pingdesk free</h2>
        <p className="text-lg text-gray-500 mb-8">Free for up to 3 users. Install in 60 seconds. No credit card.</p>
        <a
          href="https://pindeskapi.himalayancoders.com/slack/install"
          onClick={() => events.addToSlackClick('comparison_cta')}
          className="inline-flex items-center gap-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-semibold px-9 py-4 rounded-full text-base transition-all shadow-xl hover:-translate-y-1"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.271 0a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.521V2.522A2.528 2.528 0 0 1 15.164 0a2.528 2.528 0 0 1 2.521 2.522v6.312zM15.164 18.956a2.528 2.528 0 0 1 2.521 2.522A2.528 2.528 0 0 1 15.164 24a2.528 2.528 0 0 1-2.521-2.522v-2.522h2.521zm0-1.271a2.528 2.528 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.521h6.314A2.528 2.528 0 0 1 24 15.164a2.528 2.528 0 0 1-2.522 2.521h-6.314z"/></svg>
          Add to Slack — Free
        </a>
      </div>
    </section>

    {/* Internal links */}
    <section className="py-12 px-6 border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-semibold text-gray-400 mb-4">Related</p>
        <div className="flex flex-wrap gap-3">
          {[
            ['Halp Alternative', '/compare/halp-alternative'],
            ['Slack Ticketing System', '/slack-ticketing-system'],
            ['Slack Request Tracking', '/slack-request-tracking'],
            ['Slack Help Desk', '/slack-help-desk'],
          ].map(([label, href]) => (
            <a key={href} href={href} className="text-sm text-violet-600 hover:text-violet-700 bg-violet-50 hover:bg-violet-100 px-4 py-2 rounded-full transition-colors font-medium">{label}</a>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default PingdeskVsOthers;
