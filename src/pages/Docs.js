const Docs = () => {
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
        <h1 className="text-4xl font-black text-gray-900 mb-2">Getting Started</h1>
        <p className="text-lg text-gray-500 mb-12">Everything you need to know to start using Pingdesk in 60 seconds.</p>

        <div className="prose prose-gray max-w-none space-y-10 text-[15px] leading-relaxed text-gray-600">

          {/* Install */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Install Pingdesk</h2>
            <p>Click <a href="https://pindeskapi.himalayancoders.com/slack/install" className="text-violet-600 hover:underline font-semibold">Add to Slack</a> and authorize Pingdesk for your workspace. That's it — no signup form, no account creation. You'll be redirected to your dashboard automatically.</p>
            <p className="mt-3">After installation, Pingdesk sends you a <strong>welcome DM</strong> in Slack with your dashboard link and a quick-start guide. <strong>Bookmark that message</strong> — it's your quick access to the dashboard anytime.</p>
          </section>

          {/* Create */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Create a Request</h2>
            <p>Go to any Slack channel and type:</p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 my-4 font-mono text-sm">
              <span className="text-violet-600 font-bold">/request</span> Review homepage design <span className="text-blue-600">@sarah</span>
            </div>
            <p>Pingdesk creates a trackable request card in the channel with:</p>
            <ul className="list-disc pl-5 space-y-1.5 mt-3">
              <li>The request title and assignee</li>
              <li><strong>Mark as Done</strong> and <strong>In Progress</strong> buttons</li>
              <li><strong>Edit</strong> and <strong>Delete</strong> buttons (creator has 3 minutes, admins anytime)</li>
              <li>Automatic reminder countdown</li>
            </ul>
          </section>

          {/* Custom reminders */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Set Custom Reminders</h2>
            <p>By default, Pingdesk reminds the assignee after 24 hours. On paid plans, you can set a custom interval per request:</p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 my-4 font-mono text-sm">
              <span className="text-violet-600 font-bold">/request</span> Fix the checkout bug <span className="text-blue-600">@james</span> <span className="text-amber-600 font-bold">in 2h</span>
            </div>
            <p>This request will send a reminder after 2 hours instead of 24. You can set any value from <code className="bg-gray-100 px-1.5 py-0.5 rounded text-violet-600 font-mono text-xs">1h</code> to <code className="bg-gray-100 px-1.5 py-0.5 rounded text-violet-600 font-mono text-xs">168h</code> (one week).</p>
          </section>

          {/* Status updates */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Update Request Status</h2>
            <p>Click the buttons directly on the Slack message:</p>
            <ul className="list-disc pl-5 space-y-1.5 mt-3">
              <li><strong>In Progress</strong> — the message updates in place with a blue sidebar. The "In Progress" button disappears (since it's already in progress). A new reminder is scheduled.</li>
              <li><strong>Mark as Done</strong> — the message turns green with a "Done" badge. All buttons are removed. Reminders are cancelled. The request stays in the channel as a record.</li>
            </ul>
            <p className="mt-3">No new messages are posted — the original request card updates itself. Your channel stays clean.</p>
          </section>

          {/* My work */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. See Your Requests</h2>
            <p>Two ways to see everything assigned to you:</p>
            <p className="mt-3"><strong>Option A: Slash command</strong></p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 my-3 font-mono text-sm">
              <span className="text-violet-600 font-bold">/request mine</span>
            </div>
            <p>Shows an ephemeral list of your open requests with edit/delete shortcuts.</p>
            <p className="mt-3"><strong>Option B: App Home tab</strong></p>
            <p>Click <strong>Pingdesk</strong> under "Apps" in your Slack sidebar. The App Home shows two sections:</p>
            <ul className="list-disc pl-5 space-y-1.5 mt-3">
              <li><strong>Assigned to you</strong> — requests you need to act on, with inline buttons</li>
              <li><strong>Created by you</strong> — requests you're waiting on others to complete</li>
            </ul>
          </section>

          {/* Dashboard */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Web Dashboard</h2>
            <p>Access your dashboard anytime:</p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 my-3 font-mono text-sm">
              <span className="text-violet-600 font-bold">/request dashboard</span>
            </div>
            <p>Or click "Open Dashboard" in your welcome DM or App Home tab.</p>
            <p className="mt-3">The dashboard gives you:</p>
            <ul className="list-disc pl-5 space-y-1.5 mt-3">
              <li><strong>Overview</strong> — stats, completion rate, request table with filters</li>
              <li><strong>Team</strong> — manage who has access (seat allocation)</li>
              <li><strong>Admins</strong> — add/remove workspace admins</li>
              <li><strong>Billing</strong> — subscription status, invoices, cancel/upgrade</li>
              <li><strong>Settings</strong> — workspace info, default reminder interval</li>
              <li><strong>Upgrade</strong> — pick a plan, see pricing</li>
            </ul>
          </section>

          {/* All commands */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. All Commands</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase">Command</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase">What it does</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['/request <title> @user', 'Create a new request'],
                    ['/request <title> @user in 2h', 'Create with custom reminder (Starter+)'],
                    ['/request mine', 'List your open assigned requests'],
                    ['/request edit <id> new title', 'Edit a request'],
                    ['/request delete <id>', 'Delete a request'],
                    ['/request dashboard', 'Open the web dashboard'],
                    ['/request admins', 'List workspace admins'],
                    ['/request admin add @user', 'Add an admin (Growth+)'],
                    ['/request admin remove @user', 'Remove an admin (Growth+)'],
                    ['/request help', 'Show all commands'],
                  ].map(([cmd, desc]) => (
                    <tr key={cmd}>
                      <td className="px-5 py-2.5 font-mono text-xs text-violet-600">{cmd}</td>
                      <td className="px-5 py-2.5 text-gray-600">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Permissions */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Permissions</h2>
            <p>Pingdesk requests only <strong>4 Slack permissions</strong>:</p>
            <ul className="list-disc pl-5 space-y-1.5 mt-3">
              <li><strong>commands</strong> — handle the /request slash command</li>
              <li><strong>chat:write</strong> — post request cards and reminders</li>
              <li><strong>chat:write.public</strong> — work in public channels without being invited first</li>
              <li><strong>users:read</strong> — show real names instead of user IDs</li>
            </ul>
            <p className="mt-3">We <strong>cannot</strong> read your messages, files, DMs, or channel history. We only see the text you type after <code className="bg-gray-100 px-1.5 py-0.5 rounded text-violet-600 font-mono text-xs">/request</code>.</p>
          </section>

          {/* Need help */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h2>
            <p>Email us at <a href="mailto:amitkumar326310@gmail.com" className="text-violet-600 hover:underline font-semibold">amitkumar326310@gmail.com</a>. We respond within 24 hours.</p>
            <p className="mt-2">Or visit the <a href="/contact" className="text-violet-600 hover:underline font-semibold">Contact & Support</a> page for FAQs.</p>
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
            <a href="/docs" className="hover:text-gray-600">Docs</a>
            <a href="/contact" className="hover:text-gray-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Docs;
