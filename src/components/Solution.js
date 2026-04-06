import { useEffect, useRef, useState } from 'react';

const solutions = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    title: 'Convert messages to requests',
    description: 'Turn any Slack message into a structured, trackable request with one command.',
    gradient: 'from-violet-500 to-indigo-500',
    lightGradient: 'from-violet-50 to-indigo-50',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Track every status',
    description: 'See what\'s pending, in progress, or done. No more guessing or asking around.',
    gradient: 'from-emerald-500 to-teal-500',
    lightGradient: 'from-emerald-50 to-teal-50',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
    title: 'Automatic reminders',
    description: 'Pingdesk follows up automatically so you don\'t have to chase people down.',
    gradient: 'from-amber-500 to-orange-500',
    lightGradient: 'from-amber-50 to-orange-50',
  },
];

const Solution = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-28 px-6 relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
            The Solution
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Pingdesk brings structure to Slack
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            A lightweight layer that makes every request visible, trackable, and impossible to ignore.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((item, i) => (
            <div
              key={i}
              className={`group relative bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className={`w-14 h-14 bg-gradient-to-br ${item.lightGradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <div className={`bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent`}>
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
