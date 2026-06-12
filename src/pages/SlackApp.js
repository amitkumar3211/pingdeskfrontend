import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { events } from '../lib/analytics';

const SlackApp = () => (
  <div className="bg-white font-sans text-gray-900 antialiased overflow-x-hidden">
    <SEO title="Pingdesk Slack App — Request Tracking for Slack" description="Install Pingdesk to track requests, automate follow-ups, and manage tasks directly in Slack. Free for up to 3 users." canonical="https://www.getpingdesk.com/slack-app" />
    <Navbar />

    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* App header */}
        <div className="flex items-start gap-6 mb-10">
          <div className="w-20 h-20 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl shadow-violet-500/20 flex-shrink-0">
            <span className="text-white font-black text-3xl">P</span>
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
              Pingdesk for Slack
            </h1>
            <p className="text-lg text-gray-500 mt-2">
              Turn Slack messages into trackable requests with automatic follow-ups
            </p>
            <div className="flex items-center gap-4 mt-4 flex-wrap">
              <a
                href="https://pindeskapi.himalayancoders.com/slack/install"
                onClick={() => events.addToSlackClick('slack_app_page')}
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-semibold px-7 py-3 rounded-full text-sm transition-all shadow-lg shadow-violet-500/25 hover:shadow-xl hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.271 0a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.521V2.522A2.528 2.528 0 0 1 15.164 0a2.528 2.528 0 0 1 2.521 2.522v6.312zM15.164 18.956a2.528 2.528 0 0 1 2.521 2.522A2.528 2.528 0 0 1 15.164 24a2.528 2.528 0 0 1-2.521-2.522v-2.522h2.521zm0-1.271a2.528 2.528 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.521h6.314A2.528 2.528 0 0 1 24 15.164a2.528 2.528 0 0 1-2.522 2.521h-6.314z" />
                </svg>
                Add to Slack — Free
              </a>
              <span className="text-sm text-gray-400">Free plan available</span>
            </div>
          </div>
        </div>

        {/* Details grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">What Pingdesk Does</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Pingdesk adds a <code className="bg-violet-50 text-violet-700 px-1.5 py-0.5 rounded text-sm">/request</code> slash command to your Slack workspace. Use it to create, assign, and track requests directly in Slack — with automatic follow-up reminders.
              </p>
              <p className="text-gray-600 leading-relaxed">
                No more lost messages. No more forgotten tasks. No more awkward "hey, did you see my message?" follow-ups.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Key Features</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Create requests with /request',
                  'Assign to teammates with @mentions',
                  'Automatic follow-up reminders',
                  'Status tracking (Pending / In Progress / Done)',
                  'Web dashboard with analytics',
                  'CSV export for reporting',
                  'Custom reminder intervals',
                  'Multi-admin support',
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">How It Works</h2>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Install', desc: 'Click "Add to Slack" — takes 60 seconds, no configuration needed.' },
                  { step: '2', title: 'Create', desc: 'Type /request Review homepage design @sarah in any channel.' },
                  { step: '3', title: 'Track', desc: 'Pingdesk creates a card with status, assignee, and buttons for actions.' },
                  { step: '4', title: 'Follow up', desc: 'If no response after 24 hours, Pingdesk sends automatic reminders.' },
                ].map((s) => (
                  <div key={s.step} className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-violet-50 rounded-full flex items-center justify-center text-sm font-bold text-violet-600 flex-shrink-0">
                      {s.step}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{s.title}</p>
                      <p className="text-sm text-gray-500">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Slash Commands</h2>
              <div className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left px-5 py-3 text-gray-500 font-semibold">Command</th>
                      <th className="text-left px-5 py-3 text-gray-500 font-semibold">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['/request [title] @user', 'Create a new request and assign it'],
                      ['/request mine', 'View requests assigned to you'],
                      ['/request dashboard', 'Open your web dashboard'],
                      ['/request help', 'Show all available commands'],
                    ].map(([cmd, desc]) => (
                      <tr key={cmd} className="border-b border-gray-50 last:border-0">
                        <td className="px-5 py-3 font-mono text-violet-600 text-xs">{cmd}</td>
                        <td className="px-5 py-3 text-gray-600">{desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
              <h3 className="text-sm font-bold text-gray-900 mb-4">App Details</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-gray-400">Category</dt>
                  <dd className="text-gray-700 font-medium">Productivity, Project Management</dd>
                </div>
                <div>
                  <dt className="text-gray-400">Developer</dt>
                  <dd className="text-gray-700 font-medium">Pingdesk</dd>
                </div>
                <div>
                  <dt className="text-gray-400">Website</dt>
                  <dd><a href="https://www.getpingdesk.com" className="text-violet-600 font-medium hover:underline">getpingdesk.com</a></dd>
                </div>
                <div>
                  <dt className="text-gray-400">Support</dt>
                  <dd><a href="/contact" className="text-violet-600 font-medium hover:underline">Contact us</a></dd>
                </div>
                <div>
                  <dt className="text-gray-400">Privacy</dt>
                  <dd><a href="/privacy" className="text-violet-600 font-medium hover:underline">Privacy policy</a></dd>
                </div>
              </dl>
            </div>

            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
              <h3 className="text-sm font-bold text-gray-900 mb-4">Pricing</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Free</span>
                  <span className="font-bold text-gray-900">$0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Starter</span>
                  <span className="font-bold text-gray-900">$12/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Growth</span>
                  <span className="font-bold text-gray-900">$29/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Business</span>
                  <span className="font-bold text-gray-900">$59/mo</span>
                </div>
              </div>
              <a href="/#pricing" className="block mt-4 text-xs text-violet-600 font-semibold hover:underline">
                Compare plans
              </a>
            </div>

            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
              <h3 className="text-sm font-bold text-gray-900 mb-3">Permissions</h3>
              <ul className="space-y-2 text-xs text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-3.5 h-3.5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  Post messages to channels
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-3.5 h-3.5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  Respond to slash commands
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-3.5 h-3.5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  Access workspace user list
                </li>
              </ul>
              <p className="mt-3 text-[11px] text-gray-400">
                Pingdesk does not read your messages. It only processes /request commands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default SlackApp;
