import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    quote: "We used to lose 3-4 client requests every week. After Pingdesk, that number dropped to zero. It's like having a project manager that never sleeps.",
    name: 'James Whitfield',
    role: 'Founder, BrightEdge Agency',
    initials: 'JW',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    quote: "The auto follow-up feature alone saved our team 5+ hours per week. No more 'hey, did you see my message?' — Pingdesk handles it.",
    name: 'Sophie Turner',
    role: 'Engineering Lead, CloudStack',
    initials: 'ST',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    quote: "As a freelancer, chasing clients for feedback was my least favorite part. Now Pingdesk does it for me — politely and automatically.",
    name: "Liam O'Connor",
    role: 'Independent Developer, Melbourne',
    initials: 'LO',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    quote: "We integrated Pingdesk in 2 minutes. Within the first week, our team had tracked 47 requests that would've been lost. Absolute game changer.",
    name: 'Emily Chen',
    role: 'COO, LaunchPad SaaS',
    initials: 'EC',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    quote: "Our sprint reviews used to have 'forgot about that' moments every time. Not anymore. Pingdesk keeps everything visible and accountable.",
    name: 'Daniel Brooks',
    role: 'Product Manager, FinTrack',
    initials: 'DB',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    quote: "I was skeptical — another Slack app? But Pingdesk is different. It's invisible until you need it, and it just works. Our whole team adopted it day one.",
    name: 'Olivia Mitchell',
    role: 'CTO, DevFlow Sydney',
    initials: 'OM',
    gradient: 'from-indigo-500 to-violet-500',
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-28 px-6 bg-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Loved by teams everywhere
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 80 + 150}ms` }}
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed text-[15px] mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-5 border-t border-gray-50">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-xs font-bold shadow-sm`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
