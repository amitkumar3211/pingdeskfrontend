import { useEffect, useRef, useState } from 'react';

const UseCase = () => {
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
    <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-violet-100/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            In Action
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            See it in real life
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            Here's what a typical request lifecycle looks like inside Slack.
          </p>
        </div>

        <div className={`max-w-lg mx-auto transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`} style={{ transitionDelay: '200ms' }}>
          <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl shadow-gray-200/60 overflow-hidden hover:shadow-3xl transition-shadow duration-500">
            {/* Header */}
            <div className="px-6 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center gap-3">
              <div className="relative w-9 h-9 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-base leading-none">P</span>
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-400 rounded-full border-[1.5px] border-white/30" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Pingdesk</p>
                <p className="text-xs text-white/60">Request Tracker</p>
              </div>
              <div className="ml-auto flex gap-1">
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              </div>
            </div>

            {/* Request body */}
            <div className="px-6 py-7 space-y-6">
              {/* Command */}
              <div className="bg-gray-50 rounded-2xl px-5 py-4 border border-gray-100">
                <p className="text-sm font-mono text-gray-600">
                  <span className="text-violet-600 font-bold">/request</span>{' '}
                  <span className="text-gray-800 font-medium">"Review homepage design"</span>
                </p>
                <div className="flex items-center gap-3 mt-2.5">
                  <span className="text-xs text-gray-400">by @amit</span>
                  <span className="text-xs text-gray-300">·</span>
                  <span className="text-xs text-gray-400">assigned to @sarah</span>
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-0 pl-4 border-l-2 border-gray-100">
                <div className="relative pl-7 pb-6">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-amber-100 border-2 border-amber-400 shadow-sm shadow-amber-200" />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Request Created</p>
                      <p className="text-xs text-gray-400 mt-0.5">Status changed to <span className="text-amber-600 font-medium">Pending</span></p>
                    </div>
                    <span className="text-xs text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full">Just now</span>
                  </div>
                </div>

                <div className="relative pl-7 pb-6">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-blue-100 border-2 border-blue-400 shadow-sm shadow-blue-200" />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Reminder Sent</p>
                      <p className="text-xs text-gray-400 mt-0.5">Auto follow-up to <span className="text-blue-600 font-medium">@sarah</span></p>
                    </div>
                    <span className="text-xs text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full">24h later</span>
                  </div>
                </div>

                <div className="relative pl-7">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-emerald-100 border-2 border-emerald-400 shadow-sm shadow-emerald-200" />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Completed</p>
                      <p className="text-xs text-gray-400 mt-0.5">Marked as done by <span className="text-emerald-600 font-medium">@sarah</span></p>
                    </div>
                    <span className="text-xs text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full">Day 2</span>
                  </div>
                </div>
              </div>

              {/* Status badge */}
              <div className="flex items-center gap-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl px-5 py-4 border border-emerald-100">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-emerald-700">Request completed successfully</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCase;
