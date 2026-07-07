import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { events } from '../../lib/analytics';
import countries from '../../data/countries';

const CountryTemplate = () => {
  const { country } = useParams();
  const data = countries.find((c) => c.slug === country);

  if (!data) {
    return (
      <div className="bg-white font-sans text-gray-900 antialiased overflow-x-hidden">
        <Navbar />
        <div className="pt-32 pb-20 px-6 text-center">
          <h1 className="text-3xl font-bold mb-4">Page not found</h1>
          <a href="/" className="text-violet-600 hover:underline">Go home</a>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white font-sans text-gray-900 antialiased overflow-x-hidden">
      <SEO
        title={`${data.headline} | Pingdesk`}
        description={data.description}
        canonical={`https://www.getpingdesk.com/slack-ticketing-in/${country}`}
        breadcrumbs={[
          { name: 'Home', url: 'https://www.getpingdesk.com/' },
          { name: 'Countries', url: 'https://www.getpingdesk.com/' },
          { name: data.name, url: `https://www.getpingdesk.com/slack-ticketing-in/${country}` },
        ]}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-1/4 w-80 h-80 bg-violet-200/30 rounded-full blur-3xl" />
          <div className="absolute top-32 right-1/4 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-4">Slack Ticketing in {data.name}</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight leading-tight mb-6">
            {data.headline.split(' ').slice(0, -2).join(' ')}
            <br />
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              {data.headline.split(' ').slice(-2).join(' ')}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            {data.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="https://pindeskapi.himalayancoders.com/slack/install"
              onClick={() => events.addToSlackClick(`country_${country}`)}
              className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-semibold px-9 py-4 rounded-full text-base transition-all shadow-xl shadow-violet-500/25 hover:shadow-2xl hover:-translate-y-1"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.271 0a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.521V2.522A2.528 2.528 0 0 1 15.164 0a2.528 2.528 0 0 1 2.521 2.522v6.312zM15.164 18.956a2.528 2.528 0 0 1 2.521 2.522A2.528 2.528 0 0 1 15.164 24a2.528 2.528 0 0 1-2.521-2.522v-2.522h2.521zm0-1.271a2.528 2.528 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.521h6.314A2.528 2.528 0 0 1 24 15.164a2.528 2.528 0 0 1-2.522 2.521h-6.314z" /></svg>
              Add to Slack — Free
            </a>
            <a href="/#how-it-works" className="text-gray-500 hover:text-gray-900 font-medium text-base transition-colors">See how it works &darr;</a>
          </div>
          <div className="flex items-center justify-center gap-6">
            {['Free to start', 'No credit card', 'Setup in 60s'].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-sm text-gray-400">
                <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Local Context */}
      {data.localContext && (
        <section className="py-12 px-6 bg-violet-50">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">{data.localContext}</p>
          </div>
        </section>
      )}

      {/* Pain Points */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight text-center mb-6">
            Common challenges for teams in {data.name}
          </h2>
          <p className="text-lg text-gray-500 text-center max-w-2xl mx-auto mb-12">
            These problems cost your team hours every week. Pingdesk solves them in minutes.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {data.painPoints.map((pain, i) => (
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

      {/* Use Cases */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight text-center mb-12">
            How teams in {data.name} use Pingdesk
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {data.useCases.map((uc, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{uc.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stat */}
      <section className="py-20 px-6 bg-violet-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-6xl md:text-7xl font-black text-violet-600 mb-4">{data.stats.value}</p>
          <p className="text-xl font-bold text-gray-900 mb-2">{data.stats.metric}</p>
          <p className="text-gray-500">{data.stats.description}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-4">
            Start tracking requests in Slack today
          </h2>
          <p className="text-lg text-gray-500 mb-8">
            Free for up to 3 users. No credit card required. Setup in 60 seconds.
          </p>
          <a
            href="https://pindeskapi.himalayancoders.com/slack/install"
            onClick={() => events.addToSlackClick(`country_${country}_bottom`)}
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-semibold px-9 py-4 rounded-full text-base transition-all shadow-xl shadow-violet-500/25 hover:shadow-2xl hover:-translate-y-1"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.271 0a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.521V2.522A2.528 2.528 0 0 1 15.164 0a2.528 2.528 0 0 1 2.521 2.522v6.312zM15.164 18.956a2.528 2.528 0 0 1 2.521 2.522A2.528 2.528 0 0 1 15.164 24a2.528 2.528 0 0 1-2.521-2.522v-2.522h2.521zm0-1.271a2.528 2.528 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.521h6.314A2.528 2.528 0 0 1 24 15.164a2.528 2.528 0 0 1-2.522 2.521h-6.314z" /></svg>
            Add to Slack — Free
          </a>
        </div>
      </section>

      {/* Other countries */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 text-center mb-8">Pingdesk in other countries</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {countries.filter((c) => c.slug !== country).map((c) => (
              <a
                key={c.slug}
                href={`/slack-ticketing-in/${c.slug}`}
                className="text-sm text-gray-500 hover:text-violet-600 bg-white border border-gray-200 hover:border-violet-200 px-4 py-2 rounded-full transition-colors"
              >
                {c.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CountryTemplate;
