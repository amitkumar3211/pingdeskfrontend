import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Problem from './components/Problem';
import BeforeAfter from './components/BeforeAfter';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import WhoItsFor from './components/WhoItsFor';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white font-sans text-gray-900 antialiased overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Problem />
      <BeforeAfter />
      <Features />
      <HowItWorks />
      <WhoItsFor />
      <Testimonials />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
