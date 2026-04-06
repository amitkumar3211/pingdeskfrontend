import { useEffect, useRef, useState } from 'react';

const AnimatedNumber = ({ target, suffix = '', inView }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span>{count.toLocaleString()}{suffix}</span>;
};

const stats = [
  { number: 847, suffix: '+', label: 'Teams using Pingdesk', gradient: 'from-violet-600 to-indigo-600' },
  { number: 52, suffix: 'K+', label: 'Requests tracked', gradient: 'from-blue-600 to-cyan-600' },
  { number: 98, suffix: '%', label: 'Follow-up rate', gradient: 'from-emerald-600 to-teal-600' },
  { number: 5, suffix: 'hrs', label: 'Saved per team / week', gradient: 'from-amber-600 to-orange-600' },
];

const Stats = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-20 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`text-center bg-white rounded-2xl px-4 py-8 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${s.gradient} bg-clip-text text-transparent mb-2`}>
                <AnimatedNumber target={s.number} suffix={s.suffix} inView={inView} />
              </div>
              <p className="text-sm text-gray-400 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
