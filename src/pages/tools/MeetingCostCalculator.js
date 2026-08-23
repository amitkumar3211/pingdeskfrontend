import { useState, useEffect, useRef } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { events } from '../../lib/analytics';

const AnimatedNumber = ({ value, prefix = '$', duration = 600 }) => {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const start = display;
    const diff = value - start;
    const startTime = performance.now();
    const animate = (time) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(start + diff * eased));
      if (progress < 1) ref.current = requestAnimationFrame(animate);
    };
    ref.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(ref.current);
    // eslint-disable-next-line
  }, [value]);

  return <span>{prefix}{display.toLocaleString()}</span>;
};

const MeetingCostCalculator = () => {
  const [people, setPeople] = useState(6);
  const [duration, setDuration] = useState(30);
  const [salary, setSalary] = useState(80000);
  const [frequency, setFrequency] = useState(1); // times per week
  const [showResult, setShowResult] = useState(false);

  const hourlyRate = salary / 2080;
  const meetingCost = Math.round(people * (duration / 60) * hourlyRate);
  const weeklyCost = meetingCost * frequency;
  const monthlyCost = weeklyCost * 4.33;
  const yearlyCost = weeklyCost * 52;
  const hoursSavedYearly = Math.round((frequency * 52 * duration) / 60);

  useEffect(() => {
    if (meetingCost > 0) setShowResult(true);
  }, [meetingCost]);

  return (
    <div className="bg-white font-sans text-gray-900 antialiased overflow-x-hidden">
      <SEO
        title="Slack Meeting Cost Calculator — How Much Do Your Meetings Really Cost?"
        description="Calculate the true cost of meetings for your team. Find out how much time and money you could save by replacing meetings with async Slack communication."
        canonical="https://www.getpingdesk.com/tools/meeting-cost-calculator"
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-10 px-6 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-red-100/40 rounded-full blur-3xl" />
          <div className="absolute top-32 right-1/4 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 bg-red-50 px-4 py-1.5 rounded-full mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Free Tool
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight mb-4">
            Meeting Cost
            <br />
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Calculator</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Find out how much your meetings actually cost — and how much you could save by going async.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input side */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Configure your meeting</h2>

              {/* People */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-medium text-gray-700">Number of people</label>
                  <span className="text-sm font-bold text-violet-600 bg-violet-50 px-3 py-1 rounded-full">{people}</span>
                </div>
                <input
                  type="range"
                  min="2" max="50" value={people}
                  onChange={(e) => setPeople(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-violet-600"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>2</span><span>25</span><span>50</span>
                </div>
              </div>

              {/* Duration */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-medium text-gray-700">Duration (minutes)</label>
                  <span className="text-sm font-bold text-violet-600 bg-violet-50 px-3 py-1 rounded-full">{duration} min</span>
                </div>
                <input
                  type="range"
                  min="15" max="120" step="5" value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-violet-600"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>15m</span><span>60m</span><span>120m</span>
                </div>
              </div>

              {/* Salary */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-medium text-gray-700">Avg. annual salary</label>
                  <span className="text-sm font-bold text-violet-600 bg-violet-50 px-3 py-1 rounded-full">${(salary / 1000).toFixed(0)}K</span>
                </div>
                <input
                  type="range"
                  min="30000" max="300000" step="5000" value={salary}
                  onChange={(e) => setSalary(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-violet-600"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>$30K</span><span>$150K</span><span>$300K</span>
                </div>
              </div>

              {/* Frequency */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-3 block">How often per week?</label>
                <div className="grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5].map((f) => (
                    <button
                      key={f}
                      onClick={() => setFrequency(f)}
                      className={`py-2.5 rounded-xl text-sm font-semibold transition-all ${
                        frequency === f
                          ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/25'
                          : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                      }`}
                    >
                      {f}x
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Result side */}
            <div className="space-y-6">
              {/* Main cost card */}
              <div className={`bg-gradient-to-br from-gray-900 via-gray-900 to-violet-950 rounded-2xl p-8 text-center transition-all duration-500 ${showResult ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <p className="text-sm text-gray-400 mb-2">This meeting costs</p>
                <p className="text-5xl md:text-6xl font-black text-white mb-2">
                  <AnimatedNumber value={meetingCost} />
                </p>
                <p className="text-gray-400 text-sm">every time it happens</p>

                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="bg-white/5 rounded-xl p-3">
                    <p className="text-xs text-gray-500 mb-1">Weekly</p>
                    <p className="text-lg font-bold text-white"><AnimatedNumber value={weeklyCost} /></p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3">
                    <p className="text-xs text-gray-500 mb-1">Monthly</p>
                    <p className="text-lg font-bold text-white"><AnimatedNumber value={Math.round(monthlyCost)} /></p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3">
                    <p className="text-xs text-gray-500 mb-1">Yearly</p>
                    <p className="text-lg font-bold text-orange-400"><AnimatedNumber value={Math.round(yearlyCost)} /></p>
                  </div>
                </div>
              </div>

              {/* Impact card */}
              <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
                <h3 className="text-sm font-bold text-red-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.268 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
                  The real impact
                </h3>
                <div className="space-y-2">
                  <p className="text-sm text-red-800">
                    <strong className="text-red-900">{hoursSavedYearly} hours/year</strong> of combined team time spent in this meeting
                  </p>
                  <p className="text-sm text-red-800">
                    That's <strong className="text-red-900">{Math.round(hoursSavedYearly / 8)} full work days</strong> your team could spend building
                  </p>
                  <p className="text-sm text-red-800">
                    <strong className="text-red-900">${Math.round(yearlyCost).toLocaleString()}/year</strong> in salary costs for this one recurring meeting
                  </p>
                </div>
              </div>

              {/* Fix card */}
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6">
                <h3 className="text-sm font-bold text-emerald-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  The fix
                </h3>
                <p className="text-sm text-emerald-800 mb-4">
                  Replace status update meetings with a Slack <code className="bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded text-xs font-mono">/pingdesk-request</code> command. Track requests, get auto-reminders, and save <strong>${Math.round(yearlyCost * 0.6).toLocaleString()}/year</strong>.
                </p>
                <a
                  href="https://pindeskapi.himalayancoders.com/slack/install"
                  onClick={() => events.addToSlackClick('meeting_calculator')}
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.271 0a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.521V2.522A2.528 2.528 0 0 1 15.164 0a2.528 2.528 0 0 1 2.521 2.522v6.312zM15.164 18.956a2.528 2.528 0 0 1 2.521 2.522A2.528 2.528 0 0 1 15.164 24a2.528 2.528 0 0 1-2.521-2.522v-2.522h2.521zm0-1.271a2.528 2.528 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.521h6.314A2.528 2.528 0 0 1 24 15.164a2.528 2.528 0 0 1-2.522 2.521h-6.314z" /></svg>
                  Try Pingdesk Free — Replace This Meeting
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight text-center mb-12">How to cut meeting costs with Slack</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Audit your meetings', desc: 'Use this calculator to find your most expensive recurring meetings. Status updates and check-ins are usually the worst offenders.' },
              { step: '2', title: 'Replace with /pingdesk-request', desc: 'Instead of a meeting, use Pingdesk\'s /pingdesk-request command in Slack. Create trackable requests with auto follow-ups.' },
              { step: '3', title: 'Save 60% of meeting time', desc: 'Teams using async requests in Slack report cutting 60% of meetings while improving accountability.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-violet-100 text-violet-700 rounded-2xl flex items-center justify-center text-lg font-bold mx-auto mb-4">{item.step}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight text-center mb-12">The meeting problem in numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '31hrs', label: 'spent in meetings per month (avg employee)' },
              { value: '70%', label: 'of meetings could be replaced with async updates' },
              { value: '$25K', label: 'average yearly meeting cost per employee' },
              { value: '23min', label: 'to regain focus after a meeting interruption' },
            ].map((stat) => (
              <div key={stat.value} className="text-center bg-gray-50 rounded-2xl p-6">
                <p className="text-2xl md:text-3xl font-black text-violet-600 mb-2">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-4">
            Stop burning money on meetings
          </h2>
          <p className="text-lg text-gray-500 mb-8">
            Pingdesk replaces status update meetings with trackable Slack requests. Free for up to 3 users.
          </p>
          <a
            href="https://pindeskapi.himalayancoders.com/slack/install"
            onClick={() => events.addToSlackClick('meeting_calculator_bottom')}
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-semibold px-9 py-4 rounded-full text-base transition-all shadow-xl shadow-violet-500/25 hover:shadow-2xl hover:-translate-y-1"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.271 0a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.521V2.522A2.528 2.528 0 0 1 15.164 0a2.528 2.528 0 0 1 2.521 2.522v6.312zM15.164 18.956a2.528 2.528 0 0 1 2.521 2.522A2.528 2.528 0 0 1 15.164 24a2.528 2.528 0 0 1-2.521-2.522v-2.522h2.521zm0-1.271a2.528 2.528 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.521h6.314A2.528 2.528 0 0 1 24 15.164a2.528 2.528 0 0 1-2.522 2.521h-6.314z" /></svg>
            Add to Slack — Free
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MeetingCostCalculator;
