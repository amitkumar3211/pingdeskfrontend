import { useEffect, useRef, useState } from 'react';

const audiences = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    title: 'Agencies',
    description: 'Track every client request, deliverable, and approval without anything slipping through.',
    example: '"Client asked for revisions 3 days ago — Pingdesk made sure it didn\'t get buried."',
    color: 'violet',
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-600',
    borderHover: 'hover:border-violet-200',
    tagBg: 'bg-violet-50',
    tagText: 'text-violet-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: 'SaaS Teams',
    description: 'Cross-functional requests between engineering, design, and product — all tracked in Slack.',
    example: '"Design review, QA sign-off, deploy approval — each one tracked with clear ownership."',
    color: 'blue',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderHover: 'hover:border-blue-200',
    tagBg: 'bg-blue-50',
    tagText: 'text-blue-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: 'Freelancers',
    description: 'Stop chasing clients for feedback. Pingdesk follows up so you can focus on the work.',
    example: '"Invoice follow-up auto-reminded the client twice. Got paid without asking."',
    color: 'emerald',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    borderHover: 'hover:border-emerald-200',
    tagBg: 'bg-emerald-50',
    tagText: 'text-emerald-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: 'Developers',
    description: 'Code reviews, bug reports, deploy requests — create and track them without leaving Slack.',
    example: '"PR review auto-reminded the reviewer after 24h. Merged same day."',
    color: 'amber',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    borderHover: 'hover:border-amber-200',
    tagBg: 'bg-amber-50',
    tagText: 'text-amber-600',
  },
];

const WhoItsFor = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-3">Built For Everyone</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Who needs Pingdesk?
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-lg mx-auto">
            If your team uses Slack, you're already losing requests.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {audiences.map((a, i) => (
            <div
              key={i}
              className={`group bg-white rounded-2xl p-8 border border-gray-100 ${a.borderHover} hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 100 + 150}ms` }}
            >
              <div className="flex items-start gap-5">
                <div className={`flex-shrink-0 w-14 h-14 ${a.iconBg} rounded-2xl flex items-center justify-center ${a.iconColor} group-hover:scale-110 transition-transform`}>
                  {a.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{a.title}</h3>
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${a.tagBg} ${a.tagText} px-2 py-0.5 rounded-full`}>Popular</span>
                  </div>
                  <p className="text-gray-500 leading-relaxed mb-4">{a.description}</p>
                  <div className="bg-gray-50 rounded-xl px-4 py-3 border border-gray-100 group-hover:bg-gray-100/50 transition-colors">
                    <p className="text-sm text-gray-400 italic leading-relaxed">{a.example}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
