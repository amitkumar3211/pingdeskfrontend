const Footer = () => {
  return (
    <footer className="border-t border-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="relative w-8 h-8 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-md shadow-violet-500/20">
              <span className="text-white font-black text-sm leading-none">P</span>
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full border-[1.5px] border-white" />
            </div>
            <span className="text-base font-bold text-gray-900">Pingdesk</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#features" className="text-sm text-gray-400 hover:text-violet-600 transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm text-gray-400 hover:text-violet-600 transition-colors">How it Works</a>
            <a href="#pricing" className="text-sm text-gray-400 hover:text-violet-600 transition-colors">Pricing</a>
          </div>

          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Pingdesk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
