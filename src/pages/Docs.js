import { useEffect, useState } from 'react';

const sections = [
  { id: 'install', title: 'Install' },
  { id: 'create', title: 'Create Request' },
  { id: 'reminders', title: 'Custom Reminders' },
  { id: 'status', title: 'Status Updates' },
  { id: 'my-work', title: 'My Work' },
  { id: 'dashboard', title: 'Dashboard' },
  { id: 'commands', title: 'All Commands' },
  { id: 'permissions', title: 'Permissions' },
  { id: 'help', title: 'Need Help?' },
];

const CodeBlock = ({ children }) => (
  <div className="bg-gray-950 rounded-xl px-5 py-4 my-4 font-mono text-sm text-gray-200 overflow-x-auto border border-gray-800">
    {children}
  </div>
);

const InlineCode = ({ children }) => (
  <code className="bg-violet-50 text-violet-700 px-1.5 py-0.5 rounded text-[13px] font-mono font-semibold">{children}</code>
);

const Callout = ({ type = 'info', children }) => {
  const styles = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    tip: 'bg-emerald-50 border-emerald-200 text-emerald-800',
    warn: 'bg-amber-50 border-amber-200 text-amber-800',
  };
  const icons = {
    info: (
      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    tip: (
      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    warn: (
      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  };
  return (
    <div className={`flex gap-3 rounded-xl border px-5 py-4 my-5 text-sm leading-relaxed ${styles[type]}`}>
      {icons[type]}
      <div>{children}</div>
    </div>
  );
};

const Docs = () => {
  const [activeSection, setActiveSection] = useState('install');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -70% 0px' }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* Top nav */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-violet-500/20">
              <span className="text-white font-black text-sm">P</span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
            </div>
            <span className="text-base font-extrabold text-gray-900">Pingdesk</span>
          </a>
          <div className="flex items-center gap-4">
            <a href="/" className="text-sm text-gray-500 hover:text-gray-700 font-medium">Home</a>
            <a href="/contact" className="text-sm text-gray-500 hover:text-gray-700 font-medium">Support</a>
            <a href="https://pindeskapi.himalayancoders.com/slack/install" className="text-sm font-bold text-white bg-violet-600 hover:bg-violet-700 px-4 py-1.5 rounded-full transition-all">
              Add to Slack
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 flex">
        {/* Sidebar nav */}
        <aside className="hidden lg:block w-56 flex-shrink-0 py-10 pr-8">
          <div className="sticky top-24">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Documentation</p>
            <nav className="space-y-0.5">
              {sections.map(({ id, title }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeSection === id
                      ? 'bg-violet-50 text-violet-700 font-semibold'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0 py-10 lg:pl-8 lg:border-l border-gray-100">
          <div className="max-w-2xl">

            {/* Hero */}
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 bg-violet-50 border border-violet-100 rounded-full px-3 py-1 mb-4">
                <span className="w-2 h-2 bg-violet-500 rounded-full" />
                <span className="text-xs font-semibold text-violet-700">Getting Started</span>
              </div>
              <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-3">Documentation</h1>
              <p className="text-lg text-gray-500 leading-relaxed">
                Everything you need to start tracking Slack requests in 60 seconds.
              </p>
            </div>

            {/* ── Install ── */}
            <section id="install" className="mb-16 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center text-sm font-black">1</span>
                Install Pingdesk
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Click <a href="https://pindeskapi.himalayancoders.com/slack/install" className="text-violet-600 hover:underline font-semibold">Add to Slack</a> and authorize Pingdesk for your workspace. No signup form, no account creation — one click and you're done.
              </p>
              <Callout type="tip">
                <strong>Bookmark the welcome DM.</strong> After install, Pingdesk sends you a direct message with your dashboard link. Pin it so you can always find your dashboard.
              </Callout>
              <p className="text-gray-600 leading-relaxed mt-3">
                You'll be redirected to your web dashboard automatically. You're now the workspace admin — you can manage your team, billing, and settings from there.
              </p>
            </section>

            {/* ── Create ── */}
            <section id="create" className="mb-16 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center text-sm font-black">2</span>
                Create a Request
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">Go to any Slack channel and type:</p>
              <CodeBlock>
                <span className="text-violet-400">/request</span> Review homepage design <span className="text-blue-400">@sarah</span>
              </CodeBlock>
              <p className="text-gray-600 leading-relaxed">Pingdesk creates a trackable request card with:</p>
              <ul className="mt-3 space-y-2">
                {[
                  'Request title and assigned person',
                  'Mark as Done and In Progress buttons',
                  'Edit and Delete buttons (creator has 3 min, admins anytime)',
                  'Auto-reminder countdown',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-gray-600 text-sm">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Callout type="info">
                The <InlineCode>@user</InlineCode> mention is optional. If you skip it, the request is created as unassigned.
              </Callout>
            </section>

            {/* ── Reminders ── */}
            <section id="reminders" className="mb-16 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center text-sm font-black">3</span>
                Custom Reminders
              </h2>
              <p className="text-gray-600 leading-relaxed">
                By default, Pingdesk reminds the assignee after <strong>24 hours</strong>. On paid plans, set a custom interval per request:
              </p>
              <CodeBlock>
                <span className="text-violet-400">/request</span> Fix checkout bug <span className="text-blue-400">@james</span> <span className="text-amber-400">in 2h</span>
              </CodeBlock>
              <p className="text-gray-600 leading-relaxed">
                This request will send a reminder after 2 hours. Valid range: <InlineCode>1h</InlineCode> to <InlineCode>168h</InlineCode> (one week).
              </p>
              <Callout type="info">
                Custom per-request reminders require the <strong>Starter plan</strong> or higher. Free plan users always get the 24-hour default.
              </Callout>
            </section>

            {/* ── Status ── */}
            <section id="status" className="mb-16 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center text-sm font-black">4</span>
                Status Updates
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">Click the buttons directly on the Slack message. The original message updates in place — no new messages, no channel clutter.</p>

              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-3 h-3 bg-blue-400 rounded-full" />
                    <h3 className="text-sm font-bold text-gray-900">In Progress</h3>
                  </div>
                  <p className="text-sm text-gray-600">Message gets a blue sidebar. The "In Progress" button disappears. A new reminder is scheduled based on the request's interval.</p>
                </div>
                <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-3 h-3 bg-emerald-400 rounded-full" />
                    <h3 className="text-sm font-bold text-gray-900">Done</h3>
                  </div>
                  <p className="text-sm text-gray-600">Message turns green with a "Done" badge. All buttons are removed. Reminders are cancelled. The request stays in the channel as a permanent record.</p>
                </div>
              </div>

              <Callout type="tip">
                <strong>Who can update?</strong> The request creator, the assignee, or any workspace admin can change the status.
              </Callout>
            </section>

            {/* ── My Work ── */}
            <section id="my-work" className="mb-16 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center text-sm font-black">5</span>
                See Your Requests
              </h2>

              <h3 className="text-base font-bold text-gray-900 mt-6 mb-2">Slash command</h3>
              <CodeBlock>
                <span className="text-violet-400">/request mine</span>
              </CodeBlock>
              <p className="text-gray-600 text-sm">Shows an ephemeral list of your open requests with quick edit/delete shortcuts.</p>

              <h3 className="text-base font-bold text-gray-900 mt-8 mb-2">App Home tab</h3>
              <p className="text-gray-600 leading-relaxed">
                Click <strong>Pingdesk</strong> under "Apps" in your Slack sidebar. The home tab shows two personalized sections:
              </p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2.5 text-gray-600 text-sm">
                  <span className="w-5 h-5 rounded-full bg-violet-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span><strong>Assigned to you</strong> — requests you need to act on, with inline buttons</span>
                </li>
                <li className="flex items-start gap-2.5 text-gray-600 text-sm">
                  <span className="w-5 h-5 rounded-full bg-violet-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span><strong>Created by you</strong> — requests you're waiting on others to complete</span>
                </li>
              </ul>
            </section>

            {/* ── Dashboard ── */}
            <section id="dashboard" className="mb-16 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center text-sm font-black">6</span>
                Web Dashboard
              </h2>
              <p className="text-gray-600 leading-relaxed">Access your dashboard anytime:</p>
              <CodeBlock>
                <span className="text-violet-400">/request dashboard</span>
              </CodeBlock>
              <p className="text-gray-600 leading-relaxed mb-4">
                Or click "Open Dashboard" in your welcome DM or App Home tab.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { name: 'Overview', desc: 'Stats, completion rate, trend charts, request table with date + status filters' },
                  { name: 'Team', desc: 'Manage who has access — add/remove team members within your seat limit' },
                  { name: 'Admins', desc: 'Add/remove workspace admins (Growth+ plan)' },
                  { name: 'Billing', desc: 'Subscription status, invoices, cancel or change plan' },
                  { name: 'Settings', desc: 'Workspace info, default reminder interval' },
                  { name: 'Upgrade', desc: 'Compare plans, pick currency, subscribe' },
                ].map((s) => (
                  <div key={s.name} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <p className="text-sm font-bold text-gray-900">{s.name}</p>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Commands ── */}
            <section id="commands" className="mb-16 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center text-sm font-black">7</span>
                All Commands
              </h2>
              <div className="rounded-xl border border-gray-200 overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left px-5 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider">Command</th>
                      <th className="text-left px-5 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['/request <title> @user', 'Create a new request'],
                      ['/request <title> @user in 2h', 'Create with custom reminder (Starter+)'],
                      ['/request mine', 'List your open assigned requests'],
                      ['/request edit <id> new title', 'Edit a request (creator 3 min, admin anytime)'],
                      ['/request delete <id>', 'Delete a request'],
                      ['/request dashboard', 'Open the web dashboard'],
                      ['/request admins', 'List workspace admins'],
                      ['/request admin add @user', 'Add an admin (Growth+)'],
                      ['/request admin remove @user', 'Remove an admin (Growth+)'],
                      ['/request help', 'Show all commands'],
                    ].map(([cmd, desc]) => (
                      <tr key={cmd} className="hover:bg-gray-50/50">
                        <td className="px-5 py-3 font-mono text-xs text-violet-600 whitespace-nowrap">{cmd}</td>
                        <td className="px-5 py-3 text-gray-600">{desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── Permissions ── */}
            <section id="permissions" className="mb-16 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center text-sm font-black">8</span>
                Permissions
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Pingdesk requests only <strong>4 Slack permissions</strong> — the bare minimum to function:
              </p>

              <div className="space-y-3">
                {[
                  { scope: 'commands', why: 'Handle the /request slash command' },
                  { scope: 'chat:write', why: 'Post request cards and reminders in channels' },
                  { scope: 'chat:write.public', why: 'Work in public channels without being invited first' },
                  { scope: 'users:read', why: 'Show real names instead of user IDs in the dashboard' },
                ].map((p) => (
                  <div key={p.scope} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-bold text-gray-900 font-mono">{p.scope}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{p.why}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Callout type="warn">
                <strong>What we cannot access:</strong> Your messages, files, DMs, channel history, or conversations. We only see the text you type after <InlineCode>/request</InlineCode>.
              </Callout>
            </section>

            {/* ── Help ── */}
            <section id="help" className="mb-16 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center text-sm font-black">9</span>
                Need Help?
              </h2>
              <div className="bg-gradient-to-br from-violet-50 to-indigo-50 border border-violet-100 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed">
                  Email us at{' '}
                  <a href="mailto:amitkumar326310@gmail.com" className="text-violet-600 hover:underline font-semibold">
                    amitkumar326310@gmail.com
                  </a>
                  . We respond within 24 hours.
                </p>
                <p className="text-gray-500 text-sm mt-3">
                  Or visit the <a href="/contact" className="text-violet-600 hover:underline font-semibold">Contact & Support</a> page for FAQs.
                </p>
              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
};

export default Docs;
