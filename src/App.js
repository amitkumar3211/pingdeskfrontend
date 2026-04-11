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
import Security from './components/Security';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Dashboard from './dashboard/Dashboard';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Support from './pages/Support';
import Refund from './pages/Refund';
import Shipping from './pages/Shipping';
import Docs from './pages/Docs';
import { useRouteTracker } from './lib/useRouteTracker';

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
    <Security />
    <Pricing />
    <FinalCTA />
    <Footer />
  </div>
);

const RouteTracker = () => {
  useRouteTracker();
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <RouteTracker />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard/:token" element={<Dashboard />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact" element={<Support />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/cancellation" element={<Refund />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
