import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { events } from '../../lib/analytics';
import alternatives from '../../data/alternatives';

const AlternativeTemplate = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const tool = alternatives.find((a) => a.slug === slug);

  if (!tool) {
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

  const related = alternatives.filter((a) => a.category === tool.category && a.slug !== slug).slice(0, 8);

  return (
    <div className="bg-white font-sans text-gray-900 antialiased overflow-x-hidden">
      <SEO
        title={`Best ${tool.name} Alternative for Slack Teams | Pingdesk`}
        description={`Looking for a ${tool.name} alternative? Pingdesk is a simpler, Slack-native option for request tracking. Free to start, 60-second setup.`}
        canonical={`https://www.getpingdesk.com/alternative-to/${slug}`}
      />
      <Navbar />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-4">{tool.name} Alternative</p>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight mb-6">
            Looking for a {tool.name}
            <br />
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">alternative?</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {tool.tagline}. {tool.pricing !== 'N/A' && `Starting at ${tool.pricing}.`} If you need something simpler for Slack, try Pingdesk.
          </p>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Common {tool.name} frustrations</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {tool.limitations.map((l, i) => (
              <div key={i} className="flex items-start gap-3 bg-red-50 rounded-xl p-5 border border-red-100">
                <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                <span className="text-sm text-red-800">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-violet-50 border border-violet-100 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-xl">P</span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-2">Why teams switch to Pingdesk</h2>
                <p className="text-gray-600 leading-relaxed">{tool.whyPingdesk}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Pingdesk vs {tool.name}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border-2 border-violet-200 p-6 relative">
              <div className="absolute -top-3 left-6 bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full">Recommended</div>
              <h3 className="text-lg font-bold text-gray-900 mt-2 mb-3">Pingdesk</h3>
              <div className="space-y-2">
                {['60-second setup', 'Free for up to 3 users', 'Works entirely in Slack', 'Auto follow-up reminders', 'Web dashboard + analytics', 'No training needed'].map((p) => (
                  <div key={p} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span className="text-sm text-gray-600">{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">{tool.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{tool.tagline}</p>
              <p className="text-sm font-semibold text-gray-900 mb-3">{tool.pricing}</p>
              <div className="space-y-2">
                {tool.limitations.map((l, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-red-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                    <span className="text-sm text-gray-600">{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-4">Try Pingdesk free</h2>
          <p className="text-gray-500 mb-8">Free for up to 3 users. No credit card. Setup in 60 seconds.</p>
          <a href="https://pindeskapi.himalayancoders.com/slack/install" onClick={() => events.addToSlackClick(`alt_${slug}`)}
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-semibold px-9 py-4 rounded-full text-base transition-all shadow-xl shadow-violet-500/25 hover:shadow-2xl hover:-translate-y-1">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.271 0a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.521V2.522A2.528 2.528 0 0 1 15.164 0a2.528 2.528 0 0 1 2.521 2.522v6.312zM15.164 18.956a2.528 2.528 0 0 1 2.521 2.522A2.528 2.528 0 0 1 15.164 24a2.528 2.528 0 0 1-2.521-2.522v-2.522h2.521zm0-1.271a2.528 2.528 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.521h6.314A2.528 2.528 0 0 1 24 15.164a2.528 2.528 0 0 1-2.522 2.521h-6.314z" /></svg>
            Add to Slack — Free
          </a>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 text-center mb-8">More {tool.category} alternatives</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {related.map((r) => (
                <a key={r.slug} href={`/alternative-to/${r.slug}`} className="text-sm text-gray-500 hover:text-violet-600 bg-white border border-gray-200 hover:border-violet-200 px-4 py-2 rounded-full transition-colors">
                  {r.name} alternative
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default AlternativeTemplate;
