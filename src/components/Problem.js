import { useEffect, useRef, useState } from 'react';

const problems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: 'Requests get buried',
    description: 'Important asks disappear in fast-moving channels. Scroll back far enough and they\'re gone forever.',
    stat: '72%',
    statLabel: 'of messages never acted on',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
      </svg>
    ),
    title: 'No visibility or tracking',
    description: 'There\'s no way to see what\'s pending or done. It\'s all scattered across threads and DMs.',
    stat: '0',
    statLabel: 'visibility into status',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    title: 'Zero accountability',
    description: 'No one owns the request. No one follows up. Things fall through the cracks every day.',
    stat: '5hrs',
    statLabel: 'wasted chasing people weekly',
  },
];

const Problem = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-sm font-semibold text-red-500 uppercase tracking-wider mb-3">The Problem</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Slack wasn't built for requests
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-lg mx-auto">
            Your team sends dozens of requests daily. Most of them vanish into the chat void.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <div
              key={i}
              className={`group bg-white rounded-2xl p-8 border border-gray-100 hover:border-red-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 120 + 150}ms` }}
            >
              <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {p.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{p.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-6">{p.description}</p>
              <div className="pt-5 border-t border-gray-100">
                <span className="text-3xl font-extrabold text-red-500">{p.stat}</span>
                <p className="text-xs text-gray-400 mt-1">{p.statLabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
