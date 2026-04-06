import { useState, useEffect, useCallback } from 'react';

const SlackDemo = () => {
  const [step, setStep] = useState(0);
  const [key, setKey] = useState(0);

  const startAnimation = useCallback(() => {
    setStep(0);
    setKey(k => k + 1);
  }, []);

  useEffect(() => {
    const timings = [1500, 3000, 4500, 6000, 7500, 9000];
    const timers = timings.map((delay, i) =>
      setTimeout(() => setStep(i + 1), delay)
    );
    const loopTimer = setTimeout(() => startAnimation(), 12000);
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(loopTimer);
    };
  }, [key, startAnimation]);

  return (
    <div className="rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-2xl shadow-gray-300/40">
      {/* macOS title bar */}
      <div className="bg-gray-100 border-b border-gray-200 px-4 py-2.5 flex items-center">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-white border border-gray-200 rounded-md px-4 py-0.5 text-[11px] text-gray-400 font-medium">
            slack.com — Pingdesk
          </div>
        </div>
        <div className="w-12" />
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:flex flex-col w-[220px] bg-[#3F0E40] flex-shrink-0">
          <div className="px-4 pt-4 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-[11px] font-black">P</span>
              </div>
              <div>
                <span className="text-white text-[14px] font-bold block">Pingdesk</span>
                <span className="text-white/40 text-[11px]">5 members</span>
              </div>
            </div>
          </div>
          <div className="px-3 py-4 space-y-0.5 text-[13px] flex-1">
            <div className="text-white/40 text-[11px] font-semibold uppercase tracking-wider px-2 mb-2">Channels</div>
            <div className="bg-[#1164A3] rounded-md px-2.5 py-[6px] text-white font-medium"># all-pingdesk</div>
            <div className="px-2.5 py-[6px] text-white/35"># general</div>
            <div className="px-2.5 py-[6px] text-white/35"># random</div>
            <div className="px-2.5 py-[6px] text-white/35"># design</div>
            <div className="text-white/40 text-[11px] font-semibold uppercase tracking-wider px-2 mt-6 mb-2">Direct Messages</div>
            <div className="flex items-center gap-2 px-2.5 py-[6px] text-white/35">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span> Sarah M.
            </div>
            <div className="flex items-center gap-2 px-2.5 py-[6px] text-white/35">
              <span className="w-2 h-2 bg-gray-500 rounded-full"></span> John D.
            </div>
            <div className="text-white/40 text-[11px] font-semibold uppercase tracking-wider px-2 mt-6 mb-2">Apps</div>
            <div className="flex items-center gap-2 px-2.5 py-[6px] text-white/45">
              <div className="relative w-5 h-5 bg-gradient-to-br from-violet-500 to-indigo-500 rounded flex items-center justify-center">
                <span className="text-white text-[8px] font-black">P</span>
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <span>PingDesk</span>
            </div>
          </div>
        </div>

        {/* Chat area */}
        <div className="flex-1 flex flex-col bg-white min-w-0">
          <div className="px-5 py-3 border-b border-gray-100 flex items-center gap-3">
            <span className="font-bold text-[15px] text-gray-900"># all-pingdesk</span>
            <span className="hidden md:inline text-[12px] text-gray-400 border-l border-gray-200 pl-3 ml-1">Track all team requests</span>
          </div>

          <div className="h-[420px] lg:h-[460px] px-4 md:px-6 py-4 overflow-hidden flex flex-col justify-end">
            <div className="space-y-0.5">

              {/* Step 1 */}
              <div className={`transition-all duration-500 ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
                <div className="flex items-start gap-3 py-2 px-2 rounded-lg hover:bg-gray-50/50">
                  <div className="w-9 h-9 rounded-lg bg-teal-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-[11px] font-bold">AK</span>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-2">
                      <span className="text-[14px] font-bold text-gray-900">Amit Kumar</span>
                      <span className="text-[11px] text-gray-400">10:30 AM</span>
                    </div>
                    <div className="mt-1 bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2 inline-block">
                      <span className="text-[13px] font-mono">
                        <span className="text-violet-600 font-bold">/request</span>{' '}
                        <span className="text-gray-700">Review homepage design</span>{' '}
                        <span className="text-blue-600">@sarah</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className={`transition-all duration-600 ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
                <div className="flex items-start gap-3 py-2 px-2 rounded-lg">
                  <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-[11px] font-black">P</span>
                    <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2">
                      <span className="text-[14px] font-bold text-gray-900">PingDesk</span>
                      <span className="text-[10px] bg-violet-100 text-violet-700 px-1.5 py-[2px] rounded font-semibold">APP</span>
                      <span className="text-[11px] text-gray-400">10:30 AM</span>
                    </div>
                    <div className="mt-1.5 border-l-[3px] border-violet-400 bg-violet-50/60 rounded-r-lg px-4 py-3">
                      <p className="text-[14px] text-gray-800 font-semibold">New Request Created</p>
                      <div className="mt-1.5 space-y-[3px] text-[13px] text-gray-600">
                        <p><span className="text-gray-500">Title:</span> Review homepage design</p>
                        <p><span className="text-gray-500">Assigned:</span> <span className="text-blue-600">@sarah</span></p>
                        <p className="flex items-center gap-1.5"><span className="text-gray-500">Status:</span> <span className="w-2 h-2 bg-amber-400 rounded-full inline-block"></span> Pending</p>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <span className="px-3.5 py-1.5 bg-[#007a5a] text-white text-[12px] font-bold rounded cursor-default">Mark as Done</span>
                      <span className="px-3.5 py-1.5 bg-white border border-gray-300 text-gray-700 text-[12px] font-bold rounded cursor-default">In Progress</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className={`transition-all duration-400 ${step >= 3 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex items-center gap-3 my-3">
                  <div className="flex-1 h-px bg-red-200/60" />
                  <span className="text-[11px] text-red-400 font-medium px-3 border border-red-200/60 rounded-full bg-white py-1">24 hours — no response</span>
                  <div className="flex-1 h-px bg-red-200/60" />
                </div>
              </div>

              {/* Step 4 */}
              <div className={`transition-all duration-600 ${step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
                <div className="flex items-start gap-3 py-2 px-2 rounded-lg">
                  <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-[11px] font-black">P</span>
                    <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2">
                      <span className="text-[14px] font-bold text-gray-900">PingDesk</span>
                      <span className="text-[10px] bg-violet-100 text-violet-700 px-1.5 py-[2px] rounded font-semibold">APP</span>
                      <span className="text-[11px] text-gray-400">10:30 AM</span>
                    </div>
                    <div className="mt-1.5 border-l-[3px] border-amber-400 bg-amber-50/60 rounded-r-lg px-4 py-3">
                      <p className="text-[13px] text-gray-800">
                        <span className="font-semibold">Reminder:</span>{' '}
                        <span className="text-blue-600">@sarah</span>, request{' '}
                        <span className="font-semibold">"Review homepage design"</span> is still pending.
                      </p>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <span className="px-3.5 py-1.5 bg-[#007a5a] text-white text-[12px] font-bold rounded cursor-default">Mark as Done</span>
                      <span className="px-3.5 py-1.5 bg-white border border-gray-300 text-gray-700 text-[12px] font-bold rounded cursor-default">In Progress</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className={`transition-all duration-600 ${step >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
                <div className="flex items-start gap-3 py-2 px-2 rounded-lg">
                  <div className="w-9 h-9 rounded-lg bg-pink-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-[11px] font-bold">SM</span>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-[14px] font-bold text-gray-900">Sarah Mitchell</span>
                      <span className="text-[11px] text-gray-400">11:15 AM</span>
                    </div>
                    <div className="mt-1 text-[13px] text-gray-500 italic">
                      clicked <span className="bg-emerald-100 text-emerald-700 text-[11px] font-bold px-2 py-0.5 rounded not-italic">Mark as Done</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div className={`transition-all duration-600 ${step >= 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
                <div className="flex items-start gap-3 py-2 px-2 rounded-lg">
                  <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-[11px] font-black">P</span>
                    <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2">
                      <span className="text-[14px] font-bold text-gray-900">PingDesk</span>
                      <span className="text-[10px] bg-violet-100 text-violet-700 px-1.5 py-[2px] rounded font-semibold">APP</span>
                      <span className="text-[11px] text-gray-400">11:15 AM</span>
                    </div>
                    <div className="mt-1.5 border-l-[3px] border-emerald-400 bg-emerald-50/60 rounded-r-lg px-4 py-3">
                      <p className="text-[13px] text-gray-800">
                        Request <span className="font-semibold">"Review homepage design"</span> marked as{' '}
                        <span className="font-bold text-emerald-600">Done</span> by <span className="text-blue-600">@sarah</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Input */}
          <div className="px-4 md:px-6 pb-4">
            <div className="border border-gray-300 rounded-lg px-4 py-2.5 flex items-center gap-3 bg-white">
              <svg className="w-5 h-5 text-gray-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <span className="text-[13px] text-gray-400 flex-1">Message #all-pingdesk</span>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                </svg>
                <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                </svg>
                <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-28 pb-0 md:pt-36 overflow-hidden">
      {/* Background blurs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 w-80 h-80 bg-violet-200/30 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute top-32 right-1/4 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl animate-pulse-glow delay-200" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Text content — centered */}
        <div className="text-center mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-violet-700 text-sm font-medium px-5 py-2 rounded-full mb-6 border border-violet-200/50 shadow-sm animate-fade-in-up">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-500" />
            </span>
            Now available for Slack workspaces
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-[1.05] tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Never lose a request
            <br />
            <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
              in Slack again
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Turn Slack messages into trackable requests with automatic follow-ups.
            No more lost messages. No more forgotten tasks.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="https://pindeskapi.himalayancoders.com/slack/install"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-semibold px-9 py-4 rounded-full text-base transition-all shadow-xl shadow-violet-500/25 hover:shadow-2xl hover:shadow-violet-500/30 hover:-translate-y-1"
            >
              <svg className="w-5 h-5 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.271 0a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.521V2.522A2.528 2.528 0 0 1 15.164 0a2.528 2.528 0 0 1 2.521 2.522v6.312zM15.164 18.956a2.528 2.528 0 0 1 2.521 2.522A2.528 2.528 0 0 1 15.164 24a2.528 2.528 0 0 1-2.521-2.522v-2.522h2.521zm0-1.271a2.528 2.528 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.521h6.314A2.528 2.528 0 0 1 24 15.164a2.528 2.528 0 0 1-2.522 2.521h-6.314z" />
              </svg>
              Add to Slack
            </a>
            <a
              href="#how-it-works"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 text-gray-600 hover:text-gray-900 font-medium px-9 py-4 rounded-full text-base transition-all border border-gray-200 hover:border-gray-300 hover:bg-gray-50 hover:-translate-y-0.5"
            >
              See how it works
              <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Full-width Slack demo — edge to edge, bottom-aligned, fades into next section */}
      <div className="relative animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <SlackDemo />
        </div>
        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default Hero;
