import React, { lazy, Suspense } from 'react';
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
import SEO from './components/SEO';
import { useRouteTracker } from './lib/useRouteTracker';

// Lazy-load all non-landing pages
const Dashboard = lazy(() => import('./dashboard/Dashboard'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Support = lazy(() => import('./pages/Support'));
const Refund = lazy(() => import('./pages/Refund'));
const Shipping = lazy(() => import('./pages/Shipping'));
const Docs = lazy(() => import('./pages/Docs'));
const Admin = lazy(() => import('./pages/Admin'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPostPage = lazy(() => import('./pages/Blog').then(m => ({ default: m.BlogPost })));
const SlackApp = lazy(() => import('./pages/SlackApp'));
const SlackTicketingSystem = lazy(() => import('./pages/seo/SlackTicketingSystem'));
const SlackRequestTracking = lazy(() => import('./pages/seo/SlackRequestTracking'));
const SlackHelpDesk = lazy(() => import('./pages/seo/SlackHelpDesk'));
const HalpAlternative = lazy(() => import('./pages/compare/HalpAlternative'));
const PingdeskVsOthers = lazy(() => import('./pages/compare/PingdeskVsOthers'));
const CompareTemplate = lazy(() => import('./pages/compare/CompareTemplate'));
const IndustryTemplate = lazy(() => import('./pages/seo/IndustryTemplate'));
const IntegrationTemplate = lazy(() => import('./pages/seo/IntegrationTemplate'));
const AlternativeTemplate = lazy(() => import('./pages/seo/AlternativeTemplate'));
const UseCaseTemplate = lazy(() => import('./pages/seo/UseCaseTemplate'));
const MeetingCostCalculator = lazy(() => import('./pages/tools/MeetingCostCalculator'));
const CountryTemplate = lazy(() => import('./pages/seo/CountryTemplate'));
const GlossaryIndex = lazy(() => import('./pages/GlossaryIndex'));
const GlossaryTerm = lazy(() => import('./pages/GlossaryTerm'));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-violet-200 border-t-violet-600 rounded-full animate-spin" />
  </div>
);

const LandingPage = () => (
  <div className="bg-white font-sans text-gray-900 antialiased overflow-x-hidden">
    <SEO
      title="Pingdesk — Never Lose a Request in Slack Again"
      description="Pingdesk is a Slack app that turns messages into trackable requests with automatic follow-ups. Free for up to 3 users. Setup in 60 seconds."
      canonical="https://www.getpingdesk.com/"
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Pingdesk',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web, iOS, Android',
          description: 'Turn Slack messages into trackable requests with automatic follow-ups.',
          url: 'https://www.getpingdesk.com',
          browserRequirements: 'Requires Slack',
          softwareVersion: '1.0',
          aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', ratingCount: '50', bestRating: '5' },
          potentialAction: { '@type': 'ViewAction', target: 'https://www.getpingdesk.com/', name: 'Install Pingdesk' },
          offers: [
            { '@type': 'Offer', price: '0', priceCurrency: 'USD', name: 'Free Plan', description: 'Up to 3 users, 50 requests per month' },
            { '@type': 'Offer', price: '12', priceCurrency: 'USD', name: 'Starter Plan', description: 'Up to 15 users, unlimited requests with analytics.' },
            { '@type': 'Offer', price: '29', priceCurrency: 'USD', name: 'Growth Plan', description: 'Up to 50 users, multiple admins, priority support.' },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'How do I install Pingdesk on Slack?', acceptedAnswer: { '@type': 'Answer', text: "Click 'Add to Slack' on our website. You'll authorize Pingdesk in your Slack workspace, and it's ready to use in under 60 seconds." } },
            { '@type': 'Question', name: 'Is Pingdesk free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes! Pingdesk has a free plan for up to 3 users and 50 requests per month. Paid plans start at $12/month.' } },
            { '@type': 'Question', name: 'How does Pingdesk track requests in Slack?', acceptedAnswer: { '@type': 'Answer', text: 'Use the /request slash command in any Slack channel. Pingdesk automatically assigns it, tracks status, and sends follow-up reminders.' } },
            { '@type': 'Question', name: 'What happens if someone doesn\'t respond?', acceptedAnswer: { '@type': 'Answer', text: 'Pingdesk automatically sends polite follow-up reminders. You can customize reminder intervals.' } },
            { '@type': 'Question', name: 'Is my data secure?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Pingdesk uses encrypted connections and follows Slack\'s security best practices.' } },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Pingdesk',
          url: 'https://www.getpingdesk.com',
          logo: 'https://www.getpingdesk.com/logo512.png',
          sameAs: [],
          contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', url: 'https://www.getpingdesk.com/support' },
        },
      ]}
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
      <Suspense fallback={<PageLoader />}>
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
          <Route path="/blog/:slug" element={<BlogPostPage />} />
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
          <Route path="/slack-ticketing-in/:country" element={<CountryTemplate />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
