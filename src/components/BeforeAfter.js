import { useEffect, useRef, useState } from 'react';

const BeforeAfter = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-28 px-6 bg-gray-50" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">The Difference</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Life before vs. after Pingdesk
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* BEFORE */}
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: '200ms' }}>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 h-full">
              <span className="inline-block text-xs font-bold text-red-500 uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full mb-6">Before</span>
              <h3 className="text-lg font-bold text-gray-900 mb-5">Without Pingdesk</h3>
              <div className="space-y-3">
                {[
                  { text: '"Hey can you review this?" — lost in #general', time: 'Mon 9:30 AM' },
                  { text: '"Did anyone see my message?" — no response', time: 'Tue 11:00 AM' },
                  { text: '"Following up again..." — awkward 3rd ping', time: 'Wed 2:15 PM' },
                  { text: '"Forget it, I\'ll do it myself"', time: 'Thu 4:00 PM' },
                ].map((m, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl px-4 py-3">
                    <p className="text-sm text-gray-600">{m.text}</p>
                    <p className="text-[11px] text-gray-300 mt-1">{m.time}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm font-semibold text-red-500 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                Task never got done
              </p>
            </div>
          </div>

          {/* AFTER */}
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '350ms' }}>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 h-full">
              <span className="inline-block text-xs font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full mb-6">After</span>
              <h3 className="text-lg font-bold text-gray-900 mb-5">With Pingdesk</h3>
              <div className="space-y-3">
                {[
                  { text: '/request "Review homepage design" → @sarah', status: 'Created', color: 'text-violet-600 bg-violet-50', time: 'Mon 9:30 AM' },
                  { text: 'Auto reminder sent to @sarah', status: 'Reminded', color: 'text-amber-600 bg-amber-50', time: 'Tue 9:30 AM' },
                  { text: '@sarah completed the review', status: 'Done', color: 'text-emerald-600 bg-emerald-50', time: 'Tue 3:00 PM' },
                ].map((m, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl px-4 py-3">
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-sm text-gray-600">{m.text}</p>
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${m.color}`}>{m.status}</span>
                    </div>
                    <p className="text-[11px] text-gray-300 mt-1">{m.time}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm font-semibold text-emerald-600 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Done in 1.5 days, zero chasing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
