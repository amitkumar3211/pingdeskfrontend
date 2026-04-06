import { useEffect, useRef, useState } from 'react';

const features = [
  {
    badge: 'Create',
    title: 'Create Requests from Slack',
    description: 'Use /request or convert any message into a trackable request with title, assignee, and timestamp — without leaving Slack.',
    gradient: 'from-blue-600 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
    borderHover: 'hover:border-blue-200',
    visual: (
      <div className="bg-white rounded-xl shadow-sm border border-blue-100/50 px-5 py-3">
        <span className="text-[13px] font-mono"><span className="text-blue-600 font-bold">/request</span> <span className="text-gray-500">"Review homepage"</span> <span className="text-blue-500">@sarah</span></span>
      </div>
    ),
  },
  {
    badge: 'Follow Up',
    title: 'Auto Follow-ups',
    description: 'Pingdesk sends smart reminders when requests go unanswered. No more awkward "just following up" messages.',
    gradient: 'from-violet-600 to-purple-500',
    bgGradient: 'from-violet-50 to-purple-50',
    borderHover: 'hover:border-violet-200',
    visual: (
      <div className="space-y-2">
        <div className="bg-white rounded-xl shadow-sm border border-violet-100/50 px-5 py-3 flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span></span>
          <span className="text-[13px] text-gray-700 font-medium">Reminder sent to @sarah</span>
        </div>
        <p className="text-[11px] text-gray-400 text-center">Auto-sent after 24h of no response</p>
      </div>
    ),
  },
  {
    badge: 'Track',
    title: 'Track Status in Real-time',
    description: 'Every request has a clear status — Pending, In Progress, or Done. Approve or reject directly from Slack.',
    gradient: 'from-emerald-600 to-teal-500',
    bgGradient: 'from-emerald-50 to-teal-50',
    borderHover: 'hover:border-emerald-200',
    visual: (
      <div className="space-y-1.5">
        {[
          { s: 'Pending', c: 'text-amber-600', d: 'bg-amber-400', n: '3' },
          { s: 'In Progress', c: 'text-blue-600', d: 'bg-blue-400', n: '2' },
          { s: 'Done', c: 'text-emerald-600', d: 'bg-emerald-400', n: '12' },
        ].map((item) => (
          <div key={item.s} className="bg-white rounded-xl shadow-sm border border-emerald-100/50 px-4 py-2.5 flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${item.d}`} />
            <span className={`text-[13px] font-medium ${item.c}`}>{item.s}</span>
            <span className="ml-auto text-[12px] text-gray-300">{item.n}</span>
          </div>
        ))}
      </div>
    ),
  },
];

const Features = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="features" className="py-20 md:py-28 px-6 bg-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-3">Features</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Everything you need, nothing you don't
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className={`group bg-white rounded-3xl p-8 border border-gray-100 ${f.borderHover} hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 120 + 150}ms` }}
            >
              <span className={`inline-block text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${f.gradient} bg-clip-text text-transparent mb-4`}>
                {f.badge}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-8">{f.description}</p>
              <div className={`rounded-2xl bg-gradient-to-br ${f.bgGradient} p-4 group-hover:scale-[1.02] transition-transform`}>
                {f.visual}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
