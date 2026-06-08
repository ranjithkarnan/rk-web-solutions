import React from 'react';
import Home from './pages/Home.jsx';
import CaseStudyPage from './pages/CaseStudyPage.jsx';
import LeadReplyPage from './pages/LeadReplyPage.jsx';
import TermsPage from './pages/TermsPage.jsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx';
import SupportPage from './pages/SupportPage.jsx';
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

  return <Home />;
}

export default App;
