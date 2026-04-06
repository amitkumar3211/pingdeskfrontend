import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import Dashboard from './dashboard/Dashboard';

const LandingPage = () => (
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard/:token" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
