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
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Dashboard from './dashboard/Dashboard';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Support from './pages/Support';
import Refund from './pages/Refund';
import Shipping from './pages/Shipping';
import Docs from './pages/Docs';
import Admin from './pages/Admin';
import Blog from './pages/Blog';
import SlackApp from './pages/SlackApp';
import SlackTicketingSystem from './pages/seo/SlackTicketingSystem';
import SlackRequestTracking from './pages/seo/SlackRequestTracking';
import SlackHelpDesk from './pages/seo/SlackHelpDesk';
import HalpAlternative from './pages/compare/HalpAlternative';
import PingdeskVsOthers from './pages/compare/PingdeskVsOthers';
import CompareTemplate from './pages/compare/CompareTemplate';
import IndustryTemplate from './pages/seo/IndustryTemplate';
import IntegrationTemplate from './pages/seo/IntegrationTemplate';
import AlternativeTemplate from './pages/seo/AlternativeTemplate';
import UseCaseTemplate from './pages/seo/UseCaseTemplate';
import MeetingCostCalculator from './pages/tools/MeetingCostCalculator';
import GlossaryIndex from './pages/GlossaryIndex';
import GlossaryTerm from './pages/GlossaryTerm';
import SEO from './components/SEO';
import { useRouteTracker } from './lib/useRouteTracker';

const LandingPage = () => (
  <div className="bg-white font-sans text-gray-900 antialiased overflow-x-hidden">
    <SEO
      title="Pingdesk — Never Lose a Request in Slack Again"
      description="Pingdesk is a Slack app that turns messages into trackable requests with automatic follow-ups. Free for up to 3 users. Setup in 60 seconds."
      canonical="https://www.getpingdesk.com/"
    />
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
    <FAQ />
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
        <Route path="/blog" element={<Blog />} />
        <Route path="/slack-app" element={<SlackApp />} />
        <Route path="/slack-ticketing-system" element={<SlackTicketingSystem />} />
        <Route path="/slack-request-tracking" element={<SlackRequestTracking />} />
        <Route path="/slack-help-desk" element={<SlackHelpDesk />} />
        <Route path="/compare/halp-alternative" element={<HalpAlternative />} />
        <Route path="/compare/pingdesk-vs-others" element={<PingdeskVsOthers />} />
        <Route path="/compare/:slug" element={<CompareTemplate />} />
        <Route path="/slack-ticketing-for-:industry" element={<IndustryTemplate />} />
        <Route path="/tools/meeting-cost-calculator" element={<MeetingCostCalculator />} />
        <Route path="/glossary" element={<GlossaryIndex />} />
        <Route path="/glossary/:slug" element={<GlossaryTerm />} />
        <Route path="/integrations/:slug" element={<IntegrationTemplate />} />
        <Route path="/alternative-to/:slug" element={<AlternativeTemplate />} />
        <Route path="/use-cases/:slug" element={<UseCaseTemplate />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
