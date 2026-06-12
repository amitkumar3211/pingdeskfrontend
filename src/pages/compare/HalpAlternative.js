import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { events } from '../../lib/analytics';
import SEO from '../../components/SEO';

const alternatives = [
  {
    name: 'Pingdesk',
    tagline: 'Lightweight Slack request tracking',
    pricing: 'Free / $12-59/mo',
    pros: ['60-second setup', 'Free tier available', '/request slash command', 'Auto follow-up reminders', 'Web dashboard', 'No training needed'],
    cons: ['Newer product', 'No email channel (Slack-only)'],
    best: 'Teams that want simple, fast request tracking in Slack without complexity.',
    highlight: true,
  },
  {
    name: 'Jira Service Management',
    tagline: 'Atlassian\'s enterprise ITSM (Halp was merged here)',
    pricing: 'Free / $17.65-44.27/agent/mo',
    pros: ['Full ITSM capabilities', 'SLA management', 'Slack + email + portal', 'Atlassian ecosystem'],
    cons: ['Complex setup (weeks)', 'Expensive at scale', 'Overkill for simple requests', 'Steep learning curve'],
    best: 'Enterprise IT teams that need full ITSM with SLAs, CMDB, and compliance.',
    highlight: false,
  },
  {
    name: 'ClearFeed',
    tagline: 'Slack-first support platform',
    pricing: '$24/agent/mo',
    pros: ['Triage + routing', 'CSAT surveys', 'SLA tracking', 'Slack Connect support'],
    cons: ['No free tier', 'More complex setup', 'Higher price point', 'Built for customer support'],
    best: 'B2B companies using Slack Connect for external customer support.',
    highlight: false,
  },
  {
    name: 'Suptask',
    tagline: 'Slack ticketing system',
    pricing: 'Free / $7-15/agent/mo',
    pros: ['Slack-native tickets', 'Private tickets', 'SLA tracking', 'Custom forms'],
    cons: ['Agent-based pricing adds up', 'More setup than Pingdesk', 'Limited free tier'],
    best: 'IT/support teams that need formal ticketing with SLAs in Slack.',
    highlight: false,
  },
  {
    name: 'Wrangle',
    tagline: 'Request management for Slack',
    pricing: 'Contact for pricing',
    pros: ['Approval workflows', 'Custom request forms', 'Routing rules'],
    cons: ['No public pricing', 'Requires demo/sales call', 'More enterprise-focused'],
    best: 'Larger teams that need approval workflows and formal routing.',
    highlight: false,
  },
];

const HalpAlternative = () => (
  <div className="bg-white font-sans text-gray-900 antialiased overflow-x-hidden">
    <SEO
      title="Best Halp Alternatives for 2026 | Pingdesk"
      description="Halp was discontinued by Atlassian. Compare the best Halp alternatives for Slack ticketing including Pingdesk, Jira SM, ClearFeed, and more."
      canonical="https://www.getpingdesk.com/compare/halp-alternative"
    />
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-4">Halp Alternative</p>
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight mb-6">
          Best Halp alternatives
          <br />
          <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">for 2026</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-6 leading-relaxed">
          Atlassian discontinued Halp as a standalone product in 2024, merging it into Jira Service Management. If you're looking for a simpler, Slack-native replacement, here are your best options.
        </p>
      </div>
    </section>

    {/* Quick recommendation */}
    <section className="pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-violet-50 border border-violet-100 rounded-2xl p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-white font-black text-xl">P</span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-1">Our recommendation: Pingdesk</h2>
              <p className="text-sm text-gray-600 mb-4">
                If you loved Halp for its simplicity — one slash command, instant tracking, no complex setup — Pingdesk is the closest replacement. It's free to start, installs in 60 seconds, and does exactly what Halp did: turn Slack messages into trackable requests.
              </p>
              <a
                href="https://pindeskapi.himalayancoders.com/slack/install"
                onClick={() => events.addToSlackClick('halp_alternative_rec')}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.271 0a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.521V2.522A2.528 2.528 0 0 1 15.164 0a2.528 2.528 0 0 1 2.521 2.522v6.312zM15.164 18.956a2.528 2.528 0 0 1 2.521 2.522A2.528 2.528 0 0 1 15.164 24a2.528 2.528 0 0 1-2.521-2.522v-2.522h2.521zm0-1.271a2.528 2.528 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.521h6.314A2.528 2.528 0 0 1 24 15.164a2.528 2.528 0 0 1-2.522 2.521h-6.314z"/></svg>
                Try Pingdesk Free
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Comparison cards */}
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
          Detailed comparison
        </h2>
        <div className="space-y-6">
          {alternatives.map((alt) => (
            <div key={alt.name} className={`bg-white rounded-2xl p-6 md:p-8 border-2 transition-all ${alt.highlight ? 'border-violet-200 shadow-lg' : 'border-gray-100'}`}>
              <div className="flex items-start justify-between flex-wrap gap-4 mb-5">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-gray-900">{alt.name}</h3>
                    {alt.highlight && <span className="text-[10px] font-bold text-violet-600 bg-violet-50 px-2.5 py-1 rounded-full uppercase tracking-wider">Recommended</span>}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{alt.tagline}</p>
                </div>
                <span className="text-sm font-bold text-gray-900 bg-gray-50 px-4 py-2 rounded-full">{alt.pricing}</span>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-5">
                <div>
                  <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">Pros</p>
                  <ul className="space-y-1.5">
                    {alt.pros.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold text-red-500 uppercase tracking-wider mb-2">Cons</p>
                  <ul className="space-y-1.5">
                    {alt.cons.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl px-4 py-3">
                <p className="text-sm text-gray-600"><span className="font-semibold text-gray-900">Best for:</span> {alt.best}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* What happened to Halp */}
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What happened to Halp?</h2>
        <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
          <p>Halp was a popular Slack ticketing app acquired by Atlassian in 2020. It was simple, fast, and loved by teams for its ease of use — you could turn any Slack message into a ticket with a single emoji reaction.</p>
          <p>In 2024, Atlassian discontinued Halp as a standalone product and merged its functionality into <strong>Jira Service Management</strong>. While JSM is a powerful ITSM platform, many former Halp users found it overly complex for their needs.</p>
          <p>If you're a former Halp user looking for something that captures the same simplicity — a lightweight, Slack-native tool for tracking requests — <strong>Pingdesk is the closest alternative</strong>. Same philosophy: one slash command, instant tracking, no configuration.</p>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Missing Halp? Try Pingdesk.</h2>
        <p className="text-lg text-gray-500 mb-8">Same simplicity. Free to start. 60-second setup.</p>
        <a
          href="https://pindeskapi.himalayancoders.com/slack/install"
          onClick={() => events.addToSlackClick('halp_alternative_cta')}
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
            ['Slack Ticketing System', '/slack-ticketing-system'],
            ['Slack Request Tracking', '/slack-request-tracking'],
            ['Slack Help Desk', '/slack-help-desk'],
            ['Pingdesk vs Others', '/compare/pingdesk-vs-others'],
          ].map(([label, href]) => (
            <a key={href} href={href} className="text-sm text-violet-600 hover:text-violet-700 bg-violet-50 hover:bg-violet-100 px-4 py-2 rounded-full transition-colors font-medium">{label}</a>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default HalpAlternative;
