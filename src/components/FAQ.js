import { useEffect, useRef, useState } from 'react';

const faqs = [
  {
    q: 'How do I install Pingdesk on Slack?',
    a: "Click 'Add to Slack' on this page. You'll authorize Pingdesk in your workspace, and it's ready in under 60 seconds. No configuration needed — just start using /pingdesk-request in any channel.",
  },
  {
    q: 'Is Pingdesk free?',
    a: 'Yes! The free plan supports up to 3 users and 50 requests per month. Paid plans start at $12/month for teams that need unlimited requests and analytics.',
  },
  {
    q: 'How does Pingdesk track requests in Slack?',
    a: 'Type /pingdesk-request in any Slack channel to create a trackable request. Assign it to a teammate, and Pingdesk tracks the status, sends reminders, and notifies you when it\'s done.',
  },
  {
    q: 'What happens if someone doesn\'t respond?',
    a: 'Pingdesk automatically sends polite follow-up reminders. You can customize how often reminders are sent. No more manually chasing people for updates.',
  },
  {
    q: 'Is my data secure?',
    a: 'Absolutely. Pingdesk uses encrypted connections, only stores what\'s needed for request tracking, and follows Slack\'s security best practices. We never read your other messages.',
  },
  {
    q: 'Can I use Pingdesk with multiple Slack channels?',
    a: 'Yes. Pingdesk works across all channels in your workspace. Create and track requests from any channel — they all appear in your centralized dashboard.',
  },
];

const FAQItem = ({ faq, isOpen, toggle }) => (
  <div className="border-b border-gray-100 last:border-0">
    <button
      onClick={toggle}
      className="w-full flex items-center justify-between py-5 px-1 text-left group"
    >
      <span className="text-base font-semibold text-gray-900 group-hover:text-violet-600 transition-colors pr-4">
        {faq.q}
      </span>
      <svg
        className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 pb-5' : 'max-h-0'}`}>
      <p className="text-gray-500 text-[15px] leading-relaxed px-1">{faq.a}</p>
    </div>
  </div>
);

const FAQ = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="faq" className="py-20 md:py-28 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-3">FAQ</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Your FAQs, answered
          </h2>
        </div>

        <div className={`bg-white rounded-2xl border border-gray-100 px-6 md:px-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '200ms' }}>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>

        <div className={`text-center mt-10 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '400ms' }}>
          <p className="text-gray-500 text-sm mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 font-semibold text-sm transition-colors"
          >
            Contact us
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
