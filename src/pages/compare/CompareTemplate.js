import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { events } from '../../lib/analytics';
import competitors from '../../data/competitors';

const CompareTemplate = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const competitor = competitors.find((c) => c.slug === slug);

  if (!competitor) {
    return (
      <div className="bg-white font-sans text-gray-900 antialiased overflow-x-hidden">
        <Navbar />
        <div className="pt-32 pb-20 px-6 text-center">
          <h1 className="text-3xl font-bold mb-4">Page not found</h1>
          <button onClick={() => navigate('/')} className="text-violet-600 hover:underline">Go home</button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white font-sans text-gray-900 antialiased overflow-x-hidden">
      <SEO
        title={`Pingdesk vs ${competitor.name} — Best Slack Ticketing Alternative | Pingdesk`}
        description={`Compare Pingdesk and ${competitor.name} for Slack request tracking. See pricing, features, pros & cons to pick the best ${competitor.name} alternative.`}
        canonical={`https://www.getpingdesk.com/compare/${slug}`}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-4">{competitor.name} Alternative</p>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight mb-6">
            Pingdesk vs {competitor.name}
            <br />
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">for 2026</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-6 leading-relaxed">
            {competitor.description}
          </p>
        </div>
      </section>

      {/* Quick recommendation */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-violet-50 border border-violet-100 rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-xl">P</span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-2">Our recommendation</h2>
                <p className="text-gray-600">
                  If you need simple, Slack-native request tracking with automatic follow-ups, <strong>Pingdesk</strong> is the faster, simpler alternative to {competitor.name}. Free to start, 60-second setup, no training needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight text-center mb-12">
            Feature comparison
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Pingdesk card */}
            <div className="bg-white rounded-2xl border-2 border-violet-200 p-6 relative">
              <div className="absolute -top-3 left-6 bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full">Recommended</div>
              <h3 className="text-xl font-bold text-gray-900 mt-2 mb-1">Pingdesk</h3>
              <p className="text-sm text-gray-500 mb-3">Lightweight Slack request tracking</p>
              <p className="text-sm font-semibold text-gray-900 mb-4">Free / $12-59/mo</p>
              <div className="space-y-2 mb-4">
                {['60-second setup', 'Free tier (up to 3 users)', '/request slash command', 'Auto follow-up reminders', 'Web dashboard with analytics', 'No training needed'].map((p) => (
                  <div key={p} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span className="text-sm text-gray-600">{p}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400"><strong>Best for:</strong> Teams that want simple, fast request tracking in Slack.</p>
            </div>

            {/* Competitor card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-1">{competitor.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{competitor.tagline}</p>
              <p className="text-sm font-semibold text-gray-900 mb-4">{competitor.pricing}</p>
              <div className="space-y-2 mb-2">
                {competitor.pros.map((p) => (
                  <div key={p} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span className="text-sm text-gray-600">{p}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-2 mb-4">
                {competitor.cons.map((c) => (
                  <div key={c} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                    <span className="text-sm text-gray-600">{c}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400"><strong>Best for:</strong> {competitor.bestFor}</p>
            </div>
          </div>
        </div>
      </section>

      {/* When to choose each */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight text-center mb-12">When to choose each</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-violet-600 mb-4">Choose Pingdesk if you...</h3>
              <ul className="space-y-3">
                {['Want to track requests inside Slack', 'Need automatic follow-up reminders', 'Want a free plan to start', 'Need 60-second setup with no training', 'Have a small to mid-size team'].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-violet-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Choose {competitor.name} if you...</h3>
              <ul className="space-y-3">
                {['Need enterprise-scale ITSM features', 'Require multi-channel support (email, chat, phone)', 'Need advanced SLA and compliance tools', 'Have a dedicated support team with agents', 'Need complex workflow automation'].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-4">
            Try Pingdesk free
          </h2>
          <p className="text-lg text-gray-500 mb-8">
            Free for up to 3 users. No credit card required. Setup in 60 seconds.
          </p>
          <a
            href="https://pindeskapi.himalayancoders.com/slack/install"
            onClick={() => events.addToSlackClick(`compare_${slug}`)}
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-semibold px-9 py-4 rounded-full text-base transition-all shadow-xl shadow-violet-500/25 hover:shadow-2xl hover:-translate-y-1"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.271 0a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.521V2.522A2.528 2.528 0 0 1 15.164 0a2.528 2.528 0 0 1 2.521 2.522v6.312zM15.164 18.956a2.528 2.528 0 0 1 2.521 2.522A2.528 2.528 0 0 1 15.164 24a2.528 2.528 0 0 1-2.521-2.522v-2.522h2.521zm0-1.271a2.528 2.528 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.521h6.314A2.528 2.528 0 0 1 24 15.164a2.528 2.528 0 0 1-2.522 2.521h-6.314z" /></svg>
            Add to Slack — Free
          </a>
        </div>
      </section>

      {/* Related comparisons */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 text-center mb-8">More comparisons</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {competitors.filter((c) => c.slug !== slug).slice(0, 8).map((c) => (
              <a
                key={c.slug}
                href={`/compare/${c.slug}`}
                className="text-sm text-gray-500 hover:text-violet-600 bg-white border border-gray-200 hover:border-violet-200 px-4 py-2 rounded-full transition-colors"
              >
                vs {c.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CompareTemplate;
