import React from 'react';
import Home from './pages/Home.jsx';
import CaseStudyPage from './pages/CaseStudyPage.jsx';

function App() {
  const path = window.location.pathname;

  if (path.startsWith('/case-studies/')) {
    const slug = path.split('/case-studies/')[1]?.replace(/\/$/, '');
    return <CaseStudyPage slug={slug} />;
  }

  return <Home />;
}

export default App;
