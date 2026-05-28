import React from 'react';
import Home from './pages/Home.jsx';
import CaseStudyPage from './pages/CaseStudyPage.jsx';
import LeadReplyPage from './pages/LeadReplyPage.jsx';
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

  return <Home />;
}

export default App;
