import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import glossary from '../data/glossary';

const GlossaryIndex = () => {
  const [search, setSearch] = useState('');

  const sorted = useMemo(
    () => [...glossary].sort((a, b) => a.term.localeCompare(b.term)),
    []
  );

  const filtered = useMemo(() => {
    if (!search.trim()) return sorted;
    const q = search.toLowerCase();
    return sorted.filter(
      (g) =>
        g.term.toLowerCase().includes(q) ||
        g.shortDef.toLowerCase().includes(q)
    );
  }, [search, sorted]);

  // Group by first letter
  const grouped = useMemo(() => {
    const map = {};
    filtered.forEach((g) => {
      const letter = g.term[0].toUpperCase().replace(/[^A-Z]/, '#');
      if (!map[letter]) map[letter] = [];
      map[letter].push(g);
    });
    return Object.entries(map).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  // All letters that exist
  const allLetters = useMemo(() => {
    const set = new Set();
    sorted.forEach((g) => set.add(g.term[0].toUpperCase().replace(/[^A-Z]/, '#')));
    return [...set].sort();
  }, [sorted]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO
        title="Glossary of IT, Slack & Workplace Terms | Pingdesk"
        description="Browse 100+ definitions covering ITSM, Slack, workplace productivity, support operations, project management, and more."
        canonical="https://www.getpingdesk.com/glossary"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 py-20 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Glossary
          </h1>
          <p className="text-lg text-violet-100 max-w-2xl mx-auto mb-8">
            Your go-to reference for IT, Slack, workplace, and support terms — explained in plain language.
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search terms..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border-0 shadow-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-violet-300 outline-none text-base"
            />
          </div>
        </div>
      </section>

      {/* Letter nav */}
      <div className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-gray-100 py-3 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-1 justify-center">
          {allLetters.map((letter) => {
            const active = grouped.some(([l]) => l === letter);
            return (
              <a
                key={letter}
                href={active ? `#letter-${letter}` : undefined}
                className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-semibold transition ${
                  active
                    ? 'text-violet-700 hover:bg-violet-50'
                    : 'text-gray-300 cursor-default'
                }`}
              >
                {letter}
              </a>
            );
          })}
        </div>
      </div>

      {/* Terms */}
      <section className="max-w-5xl mx-auto px-4 py-12 flex-1">
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No terms found matching "{search}"</p>
            <button
              onClick={() => setSearch('')}
              className="mt-4 text-violet-600 font-medium hover:underline"
            >
              Clear search
            </button>
          </div>
        )}

        {grouped.map(([letter, terms]) => (
          <div key={letter} id={`letter-${letter}`} className="mb-10">
            <h2 className="text-2xl font-bold text-violet-600 mb-4 sticky top-14 bg-gray-50 py-2 z-20">
              {letter}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {terms.map((g) => (
                <Link
                  key={g.slug}
                  to={`/glossary/${g.slug}`}
                  className="group bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md hover:border-violet-200 transition"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-violet-700 transition mb-1.5">
                    {g.term}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {g.shortDef}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <div className="bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl p-8 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Put these concepts into practice
          </h2>
          <p className="text-violet-100 mb-6 max-w-lg mx-auto">
            Pingdesk brings service management into Slack — incident tracking, SLA monitoring, and request automation where your team already works.
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

export default GlossaryIndex;
