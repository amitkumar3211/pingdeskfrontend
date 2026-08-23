import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { events } from '../../lib/analytics';
import SEO from '../../components/SEO';

const useCases = [
  { team: 'IT Teams', desc: 'Password resets, access requests, laptop issues — all tracked in #it-help without a separate tool.', emoji: '🖥️' },
  { team: 'HR Teams', desc: 'Onboarding tasks, PTO requests, policy questions — assign and track right where people ask.', emoji: '👥' },
  { team: 'Operations', desc: 'Vendor requests, office supplies, facility issues — no more spreadsheets or email chains.', emoji: '⚙️' },
  { team: 'Engineering', desc: 'Bug reports, code reviews, infrastructure requests — prioritize and track across sprints.', emoji: '🛠️' },
  { team: 'Design', desc: 'Design review requests, asset creation, feedback loops — never lose a creative request.', emoji: '🎨' },
  { team: 'Finance', desc: 'Expense approvals, invoice requests, budget queries — structured tracking, instant visibility.', emoji: '💰' },
];

const SlackHelpDesk = () => (
  <div className="bg-white font-sans text-gray-900 antialiased overflow-x-hidden">
    <SEO
      title="Slack Help Desk — Internal Help Desk for Slack | Pingdesk"
      description="Set up an internal help desk in Slack with Pingdesk. Track requests, automate follow-ups, and manage tickets without leaving Slack."
      canonical="https://www.getpingdesk.com/slack-help-desk"
    />
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/3 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl" />
      </div>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-4">Slack Help Desk</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight leading-tight mb-6">
          Your team's help desk,
          <br />
          <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">inside Slack</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Pingdesk turns any Slack channel into an internal help desk. Employees submit requests where they already work. IT, HR, and Ops track everything in one dashboard.
        </p>
        <a
          href="https://pindeskapi.himalayancoders.com/slack/install"
          onClick={() => events.addToSlackClick('seo_help_desk')}
          className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-semibold px-9 py-4 rounded-full text-base transition-all shadow-xl shadow-violet-500/25 hover:shadow-2xl hover:-translate-y-1"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.271 0a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.521V2.522A2.528 2.528 0 0 1 15.164 0a2.528 2.528 0 0 1 2.521 2.522v6.312zM15.164 18.956a2.528 2.528 0 0 1 2.521 2.522A2.528 2.528 0 0 1 15.164 24a2.528 2.528 0 0 1-2.521-2.522v-2.522h2.521zm0-1.271a2.528 2.528 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.521h6.314A2.528 2.528 0 0 1 24 15.164a2.528 2.528 0 0 1-2.522 2.521h-6.314z"/></svg>
          Add to Slack — Free
        </a>
        <div className="flex items-center justify-center gap-6 mt-6">
          {['No complex setup', 'No training needed', 'Free for 3 users'].map((t) => (
            <span key={t} className="flex items-center gap-1.5 text-sm text-gray-400">
              <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* Why not traditional help desks */}
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
          Why traditional help desks fail for internal teams
        </h2>
        <p className="text-lg text-gray-500 text-center max-w-2xl mx-auto mb-12">
          Zendesk and Freshdesk are built for customer support, not internal requests. Your team doesn't need a portal — they need Slack.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-red-100 p-6">
            <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              Traditional help desks
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li>Employees leave Slack to submit a ticket in a separate portal</li>
              <li>Complex forms with required fields slow people down</li>
              <li>$15-50/agent/month for features most teams don't need</li>
              <li>Weeks of setup, training, and configuration</li>
              <li>Low adoption — people just DM instead</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl border border-emerald-100 p-6">
            <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              Pingdesk (Slack-native)
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-700">
              <li>Submit requests right where you work — in Slack</li>
              <li>One command: <code className="bg-violet-50 text-violet-700 px-1 rounded text-xs">/pingdesk-request</code></li>
              <li>Free for small teams, $12/mo for unlimited</li>
              <li>60-second setup, zero training</li>
              <li>100% adoption — everyone already uses Slack</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Use cases by team */}
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          Built for every internal team
        </h2>
        <p className="text-lg text-gray-500 text-center max-w-2xl mx-auto mb-14">
          Any team that receives requests in Slack can use Pingdesk as their help desk.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc) => (
            <div key={uc.team} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <span className="text-3xl mb-4 block">{uc.emoji}</span>
              <h3 className="text-base font-bold text-gray-900 mb-2">{uc.team}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{uc.desc}</p>
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
              Your internal help desk is one click away
            </h2>
            <p className="text-lg text-gray-400 max-w-xl mx-auto mb-10">Free for up to 3 users. No credit card required.</p>
            <a
              href="https://pindeskapi.himalayancoders.com/slack/install"
              onClick={() => events.addToSlackClick('seo_help_desk_cta')}
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
            ['Slack Request Tracking', '/slack-request-tracking'],
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

export default SlackHelpDesk;
