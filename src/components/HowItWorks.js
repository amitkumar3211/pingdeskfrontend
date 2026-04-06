import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    step: '01',
    title: 'Create a request in Slack',
    description: 'Use the /request command or convert any existing message. It takes 5 seconds.',
    color: 'violet',
    bgColor: 'bg-violet-50',
    borderColor: 'border-violet-100',
    textColor: 'text-violet-600',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Pingdesk tracks it',
    description: 'Every request gets a status, an owner, and a timeline. See everything in your dashboard.',
    color: 'indigo',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-100',
    textColor: 'text-indigo-600',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Auto reminders until done',
    description: 'If a request is ignored, Pingdesk follows up automatically. No more manual chasing.',
    color: 'blue',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-100',
    textColor: 'text-blue-600',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="py-20 md:py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-3">How It Works</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Three steps. That's it.
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-md mx-auto">
            Go from chaos to clarity in under a minute.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Connecting line */}
          <div className="hidden md:block absolute left-[47px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-violet-200 via-indigo-200 to-blue-200 rounded-full" />

          <div className="space-y-10">
            {steps.map((s, i) => (
              <div
                key={i}
                className={`relative flex gap-8 items-start transition-all duration-700 ${
                  inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${i * 200 + 200}ms` }}
              >
                <div className={`relative z-10 flex-shrink-0 w-24 h-24 rounded-3xl ${s.bgColor} border-2 ${s.borderColor} flex flex-col items-center justify-center shadow-sm`}>
                  <span className={`text-2xl font-black ${s.textColor}`}>{s.step}</span>
                </div>
                <div className="pt-3 flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-500 leading-relaxed max-w-lg text-base">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
