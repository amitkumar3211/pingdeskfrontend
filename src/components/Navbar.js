import { useState, useEffect } from 'react';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-gray-200/30 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/25 group-hover:shadow-violet-500/40 transition-shadow">
            <span className="text-white font-black text-lg leading-none">P</span>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
          </div>
          <span className="text-xl font-extrabold text-gray-900 tracking-tight">Pingdesk</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {[['Features', '#features'], ['How it Works', '#how-it-works'], ['Pricing', '#pricing']].map(([label, href]) => (
            <a key={label} href={href} className="text-sm text-gray-500 hover:text-violet-600 transition-colors font-medium">{label}</a>
          ))}
          <a href="#cta" className="text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 px-6 py-2.5 rounded-full transition-all shadow-md shadow-violet-500/25 hover:shadow-lg hover:shadow-violet-500/30 hover:-translate-y-0.5">
            Add to Slack
          </a>
        </div>

        <button className="md:hidden p-2 text-gray-600" onClick={() => setMobileOpen(!mobileOpen)}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100/50 px-6 py-6 flex flex-col gap-5 shadow-xl">
          {[['Features', '#features'], ['How it Works', '#how-it-works'], ['Pricing', '#pricing']].map(([label, href]) => (
            <a key={label} href={href} className="text-sm text-gray-600 font-medium" onClick={() => setMobileOpen(false)}>{label}</a>
          ))}
          <a href="#cta" className="text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 rounded-full text-center shadow-lg shadow-violet-500/25" onClick={() => setMobileOpen(false)}>Add to Slack</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
