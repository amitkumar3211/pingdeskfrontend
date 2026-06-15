import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import glossary from '../data/glossary';

const GlossaryTerm = () => {
  const { slug } = useParams();
  const entry = glossary.find((g) => g.slug === slug);

  if (!entry) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <SEO
          title="Term Not Found | Pingdesk Glossary"
          description="The glossary term you are looking for could not be found."
          canonical={`https://www.getpingdesk.com/glossary/${slug || ''}`}
        />
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <h1 className="text-6xl font-bold text-violet-600 mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-8">
              We couldn't find that glossary term.
            </p>
            <Link
              to="/glossary"
              className="inline-block px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition"
            >
              Browse All Terms
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedEntries = (entry.relatedTerms || [])
    .map((rs) => glossary.find((g) => g.slug === rs))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO
        title={`${entry.term} — Glossary | Pingdesk`}
        description={entry.shortDef}
        canonical={`https://www.getpingdesk.com/glossary/${entry.slug}`}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 py-20 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <Link
            to="/glossary"
            className="inline-flex items-center gap-1 text-violet-200 hover:text-white text-sm mb-6 transition"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Glossary
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {entry.term}
          </h1>
          <p className="text-lg text-violet-100 max-w-2xl mx-auto">
            {entry.shortDef}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-4 py-16 flex-1">
        {/* Definition */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Definition</h2>
          {entry.definition.split('\n\n').map((para, i) => (
            <p key={i} className="text-gray-700 leading-relaxed mb-4 last:mb-0">
              {para}
            </p>
          ))}
        </div>

        {/* How Pingdesk Helps */}
        {entry.howPingdeskHelps && (
          <div className="bg-gradient-to-br from-violet-50 to-indigo-50 rounded-2xl border border-violet-100 p-8 md:p-10 mb-10">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">How Pingdesk Helps</h2>
                <p className="text-gray-700 leading-relaxed">{entry.howPingdeskHelps}</p>
              </div>
            </div>
          </div>
        )}

        {/* Related Terms */}
        {relatedEntries.length > 0 && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Terms</h2>
            <div className="flex flex-wrap gap-3">
              {relatedEntries.map((r) => (
                <Link
                  key={r.slug}
                  to={`/glossary/${r.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-violet-50 text-violet-700 rounded-xl text-sm font-medium hover:bg-violet-100 transition border border-violet-100"
                >
                  {r.term}
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl p-8 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to simplify your internal support?
          </h2>
          <p className="text-violet-100 mb-6 max-w-lg mx-auto">
            Pingdesk brings service management into Slack — where your team already works. No portals, no context-switching.
          </p>
          <a
            href="https://www.getpingdesk.com/"
            className="inline-block px-8 py-3 bg-white text-violet-700 font-semibold rounded-xl hover:shadow-lg transition"
          >
            Get Started Free
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GlossaryTerm;
