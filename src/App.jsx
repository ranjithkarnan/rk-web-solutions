import React from 'react';
import Home from './pages/Home.jsx';
import CaseStudyPage from './pages/CaseStudyPage.jsx';
import LeadReplyPage from './pages/LeadReplyPage.jsx';
import TermsPage from './pages/TermsPage.jsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx';
import SupportPage from './pages/SupportPage.jsx';
import ClientGuidePage from './pages/ClientGuidePage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import BlogArticlePage from './pages/BlogArticlePage.jsx';
import WebsiteDevelopmentChennai from './pages/services/WebsiteDevelopmentChennai.jsx';
import WebDesignChennai from './pages/services/WebDesignChennai.jsx';
import LandingPageDevelopmentChennai from './pages/services/LandingPageDevelopmentChennai.jsx';
import DashboardDevelopmentChennai from './pages/services/DashboardDevelopmentChennai.jsx';
import { resetInitialScroll, scrollToStoredSection } from './utils/scrollToSection';

function App() {
  const path = window.location.pathname;

  React.useLayoutEffect(() => {
    const usedStoredTarget = scrollToStoredSection();
    if (!usedStoredTarget) {
      resetInitialScroll();
    }
  }, []);

  if (path.startsWith('/case-studies/')) {
    const slug = path.split('/case-studies/')[1]?.replace(/\/$/, '');
    return <CaseStudyPage slug={slug} />;
  }

  if (path === '/lead-reply') {
    return <LeadReplyPage />;
  }

  if (path === '/terms') {
    return <TermsPage />;
  }

  if (path === '/privacy-policy') {
    return <PrivacyPolicyPage />;
  }

  if (path === '/support' || path === '/maintenance') {
    return <SupportPage />;
  }

  if (path === '/client-guide' || path === '/policies') {
    return <ClientGuidePage />;
  }

  if (path === '/blog') {
    return <BlogPage />;
  }

  if (path === '/blog/website-developer-near-me-chennai') {
    return <BlogArticlePage />;
  }

  if (path === '/website-development-chennai') {
    return <WebsiteDevelopmentChennai />;
  }

  if (path === '/web-design-chennai') {
    return <WebDesignChennai />;
  }

  if (path === '/landing-page-development-chennai') {
    return <LandingPageDevelopmentChennai />;
  }

  if (path === '/dashboard-development-chennai') {
    return <DashboardDevelopmentChennai />;
  }

  return <Home />;
}

export default App;
