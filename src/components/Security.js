import { useEffect, useRef, useState } from 'react';

const pillars = [
  {
    title: 'We never read your messages',
    desc: 'Pingdesk only sees the exact text you type after /request. Your channel conversations, DMs, and files are completely off-limits — Slack does not give us access to them.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
      </svg>
    ),
  },
  {
    title: 'Encrypted in transit & at rest',
    desc: 'Every connection uses HTTPS/TLS 1.3. Your Slack tokens and request data are encrypted on our servers. Even our own engineers cannot read your stored tokens in plain text.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'Minimal Slack permissions',
    desc: 'We request only what we need: post messages, read user names, and respond to /request. No access to channels you haven\'t invited the bot to. Review every scope before you install.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Payments handled by Razorpay',
    desc: 'Card numbers, CVVs, and bank details never touch our servers. Razorpay (PCI-DSS Level 1 certified) processes everything. We only store your subscription status.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    title: 'You own your data',
    desc: 'Export everything to CSV anytime. Uninstall Pingdesk and we delete your data within 30 days, no questions asked. Email us and we wipe it sooner.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
  },
  {
    title: 'No data resale, ever',
    desc: 'We don\'t sell, rent, or share your data with advertisers, brokers, or AI training companies. Your team\'s requests stay between you and us.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
  },
];

const Security = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="security" className="py-20 md:py-28 px-6 bg-gradient-to-b from-white to-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 mb-5">
            <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Security & Privacy</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Your data stays{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              yours
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            We built Pingdesk to be the kind of tool we'd trust with our own team. Here's exactly what we do — and don't — with your data.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pillars.map((p, i) => (
            <div
              key={i}
              className={`group bg-white border border-gray-100 rounded-2xl p-7 hover:border-emerald-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${i * 80 + 150}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 text-emerald-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {p.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{p.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Slack permissions transparency */}
        <div className={`bg-white border border-gray-100 rounded-2xl p-6 md:p-8 mb-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '650ms' }}>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <p className="text-base font-bold text-gray-900">Only 4 Slack permissions. Nothing more.</p>
              <p className="text-xs text-gray-500 mt-0.5">We request the bare minimum to function. Here's exactly what and why.</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { scope: 'commands', why: 'Handle the /request slash command — this is how you create, edit, and manage requests.' },
              { scope: 'chat:write', why: 'Post request confirmations, status updates, and reminders in your channels.' },
              { scope: 'chat:write.public', why: 'Let you use /request in any public channel without needing to invite the bot first.' },
              { scope: 'users:read', why: 'Show real names in the dashboard instead of raw Slack user IDs like U0AQX3RV2N.' },
            ].map((p) => (
              <div key={p.scope} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-bold text-gray-900">{p.scope}</p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{p.why}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-start gap-3 bg-red-50/50 border border-red-100/50 rounded-xl p-4">
            <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-3 h-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
            <div>
              <p className="text-sm font-bold text-gray-900">What we don't request</p>
              <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">No access to your messages, files, DMs, channels, or conversations. We can't read anything in your workspace — only respond to /request and post messages as PingDesk.</p>
            </div>
          </div>
        </div>

        <div className={`bg-white border border-gray-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '750ms' }}>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">Want the full details?</p>
              <p className="text-sm text-gray-500">Read exactly what we collect, how we store it, and how to delete it.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <a href="/privacy" className="inline-flex items-center gap-1.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all">
              Privacy Policy
            </a>
            <a href="/terms" className="inline-flex items-center gap-1.5 bg-white border border-gray-200 hover:border-gray-300 text-gray-700 text-sm font-semibold px-5 py-2.5 rounded-full transition-all">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
