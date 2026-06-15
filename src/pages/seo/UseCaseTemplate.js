import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { events } from '../../lib/analytics';
import useCases from '../../data/useCases';

const UseCaseTemplate = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const uc = useCases.find((u) => u.slug === slug);

  if (!uc) {
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

  const related = useCases.filter((u) => u.category === uc.category && u.slug !== slug).slice(0, 6);

  return (
    <div className="bg-white font-sans text-gray-900 antialiased overflow-x-hidden">
      <SEO
        title={`${uc.headline} | Pingdesk`}
        description={uc.description}
        canonical={`https://www.getpingdesk.com/use-cases/${slug}`}
      />
      <Navbar />

      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-1/4 w-80 h-80 bg-violet-200/30 rounded-full blur-3xl" />
          <div className="absolute top-32 right-1/4 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-semibold text-violet-600 bg-violet-50 px-4 py-1.5 rounded-full mb-6 inline-block">{uc.category}</span>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight mb-6">{uc.headline}</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">{uc.description}</p>
          <a href="https://pindeskapi.himalayancoders.com/slack/install" onClick={() => events.addToSlackClick(`usecase_${slug}`)}
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-semibold px-9 py-4 rounded-full text-base transition-all shadow-xl shadow-violet-500/25 hover:shadow-2xl hover:-translate-y-1">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.271 0a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.521V2.522A2.528 2.528 0 0 1 15.164 0a2.528 2.528 0 0 1 2.521 2.522v6.312zM15.164 18.956a2.528 2.528 0 0 1 2.521 2.522A2.528 2.528 0 0 1 15.164 24a2.528 2.528 0 0 1-2.521-2.522v-2.522h2.521zm0-1.271a2.528 2.528 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.521h6.314A2.528 2.528 0 0 1 24 15.164a2.528 2.528 0 0 1-2.522 2.521h-6.314z" /></svg>
            Add to Slack — Free
          </a>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">The problem</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {uc.painPoints.map((pain, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 flex items-start gap-4">
                <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.268 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
                </div>
                <p className="text-sm text-gray-600">{pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">The solution</h2>
          <p className="text-lg text-gray-500 text-center max-w-2xl mx-auto mb-12">{uc.solution}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {uc.steps.map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-10 h-10 bg-violet-100 text-violet-700 rounded-xl flex items-center justify-center text-sm font-bold mx-auto mb-3">{i + 1}</div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">{s.step}</h3>
                <p className="text-xs text-gray-500">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-violet-950">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-4">Start tracking requests today</h2>
          <p className="text-gray-400 mb-8">Free for up to 3 users. No credit card required.</p>
          <a href="https://pindeskapi.himalayancoders.com/slack/install" onClick={() => events.addToSlackClick(`usecase_${slug}_bottom`)}
            className="inline-flex items-center gap-2.5 bg-white hover:bg-gray-50 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.271 0a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.521V2.522A2.528 2.528 0 0 1 15.164 0a2.528 2.528 0 0 1 2.521 2.522v6.312zM15.164 18.956a2.528 2.528 0 0 1 2.521 2.522A2.528 2.528 0 0 1 15.164 24a2.528 2.528 0 0 1-2.521-2.522v-2.522h2.521zm0-1.271a2.528 2.528 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.521h6.314A2.528 2.528 0 0 1 24 15.164a2.528 2.528 0 0 1-2.522 2.521h-6.314z" /></svg>
            Add to Slack — Free
          </a>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 text-center mb-8">Related use cases</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {related.map((r) => (
                <a key={r.slug} href={`/use-cases/${r.slug}`} className="text-sm text-gray-500 hover:text-violet-600 bg-gray-50 border border-gray-200 hover:border-violet-200 px-4 py-2 rounded-full transition-colors">
                  {r.title}
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

export default UseCaseTemplate;
