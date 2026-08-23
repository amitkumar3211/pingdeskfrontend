import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { events } from '../../lib/analytics';
import integrations from '../../data/integrations';

const IntegrationTemplate = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const app = integrations.find((i) => i.slug === slug);

  if (!app) {
    return (
      <div className="bg-white font-sans text-gray-900 antialiased overflow-x-hidden">
        <Navbar />
        <div className="pt-32 pb-20 px-6 text-center">
          <h1 className="text-3xl font-bold mb-4">Integration not found</h1>
          <button onClick={() => navigate('/')} className="text-violet-600 hover:underline">Go home</button>
        </div>
        <Footer />
      </div>
    );
  }

  const related = integrations.filter((i) => i.category === app.category && i.slug !== slug).slice(0, 6);

  return (
    <div className="bg-white font-sans text-gray-900 antialiased overflow-x-hidden">
      <SEO
        title={`Pingdesk + ${app.name} for ${app.category} — Slack Integration`}
        description={`Use Pingdesk with ${app.name} in Slack. ${app.howItWorks}`}
        canonical={`https://www.getpingdesk.com/integrations/${slug}`}
        breadcrumbs={[
          { name: 'Home', url: 'https://www.getpingdesk.com/' },
          { name: 'Integrations', url: 'https://www.getpingdesk.com/' },
          { name: app.name, url: `https://www.getpingdesk.com/integrations/${slug}` },
        ]}
      />
      <Navbar />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-semibold text-violet-600 bg-violet-50 px-4 py-1.5 rounded-full mb-6 inline-block">{app.category}</span>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight mb-6">
            Pingdesk + {app.name}
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-4">{app.description}</p>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">{app.howItWorks}</p>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Benefits of using Pingdesk with {app.name}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {app.benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl p-5">
                <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span className="text-sm text-gray-700">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">How it works together</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: '1', title: `Use ${app.name}`, desc: `Your team uses ${app.name} for ${app.category.toLowerCase()} tasks.` },
              { step: '2', title: 'Track requests in Slack', desc: 'When someone needs action, use /pingdesk-request in Slack to create a trackable request.' },
              { step: '3', title: 'Auto follow-up', desc: 'Pingdesk sends reminders and tracks status — nothing falls through the cracks.' },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-2xl p-6 text-center border border-gray-100">
                <div className="w-10 h-10 bg-violet-100 text-violet-700 rounded-xl flex items-center justify-center text-sm font-bold mx-auto mb-3">{s.step}</div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-xs text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {app.overview && (
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why teams connect {app.name} with Slack</h2>
            {app.overview.map((para, i) => (
              <p key={i} className="text-base text-gray-600 leading-relaxed mb-5">{para}</p>
            ))}
          </div>
        </section>
      )}

      {app.workflows && (
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Common {app.name} workflows in Slack</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {app.workflows.map((w, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-base font-bold text-gray-900 mb-2">{w.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {app.setupSteps && (
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Setting up Pingdesk with {app.name}</h2>
            <ol className="space-y-5">
              {app.setupSteps.map((s, i) => (
                <li key={i} className="flex gap-4">
                  <span className="w-8 h-8 flex-shrink-0 bg-violet-100 text-violet-700 rounded-lg flex items-center justify-center text-sm font-bold">{i + 1}</span>
                  <p className="text-base text-gray-600 leading-relaxed pt-1">{s}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {app.faqs && (
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{app.name} + Pingdesk FAQ</h2>
            <div className="space-y-6">
              {app.faqs.map((f, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-base font-bold text-gray-900 mb-2">{f.q}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: app.faqs.map((f) => ({
                  '@type': 'Question',
                  name: f.q,
                  acceptedAnswer: { '@type': 'Answer', text: f.a },
                })),
              }),
            }}
          />
        </section>
      )}

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-4">Try Pingdesk free</h2>
          <p className="text-gray-500 mb-8">Works alongside {app.name} in your Slack workspace. Free for up to 3 users.</p>
          <a href="https://pindeskapi.himalayancoders.com/slack/install" onClick={() => events.addToSlackClick(`integration_${slug}`)}
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-semibold px-9 py-4 rounded-full text-base transition-all shadow-xl shadow-violet-500/25 hover:shadow-2xl hover:-translate-y-1">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.271 0a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.521V2.522A2.528 2.528 0 0 1 15.164 0a2.528 2.528 0 0 1 2.521 2.522v6.312zM15.164 18.956a2.528 2.528 0 0 1 2.521 2.522A2.528 2.528 0 0 1 15.164 24a2.528 2.528 0 0 1-2.521-2.522v-2.522h2.521zm0-1.271a2.528 2.528 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.521h6.314A2.528 2.528 0 0 1 24 15.164a2.528 2.528 0 0 1-2.522 2.521h-6.314z" /></svg>
            Add to Slack — Free
          </a>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 text-center mb-8">More {app.category} integrations</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {related.map((r) => (
                <a key={r.slug} href={`/integrations/${r.slug}`} className="text-sm text-gray-500 hover:text-violet-600 bg-white border border-gray-200 hover:border-violet-200 px-4 py-2 rounded-full transition-colors">
                  Pingdesk + {r.name}
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

export default IntegrationTemplate;
