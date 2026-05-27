import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Layers3, TrendingUp } from 'lucide-react';
import { caseStudies } from '../assets/data';
import { brand } from '../assets/brand';
import { getWhatsAppLink } from '../assets/whatsapp';
import { fadeUp, staggerContainer } from '../animations/variants';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { BackToTop, CursorGlow, ScrollProgress } from '../components/UtilityEffects';
import SEO from '../components/SEO';
import FloatingContactBar from '../components/FloatingContactBar';

function CaseStudyPage({ slug }) {
  const study = caseStudies.find((item) => item.slug === slug) || caseStudies[0];
  const message = `Hi RK Web Solutions, I liked the ${study.title} case study and want something similar for my business.`;
  const path = `/case-studies/${study.slug}`;
  const title = `${study.title} Case Study | ${brand.name}`;
  const description = `${study.intro} Explore the challenge, solution, features, impact, and timeline for this ${study.category.toLowerCase()} project.`;
  const caseSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: study.title,
      headline: title,
      description,
      url: `${brand.website}${path}`,
      creator: {
        '@type': 'Organization',
        name: brand.name,
        url: brand.website,
      },
      about: study.category,
      keywords: [...study.tech, ...study.features].join(', '),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: brand.website,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Projects',
          item: `${brand.website}/#projects`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: study.title,
          item: `${brand.website}${path}`,
        },
      ],
    },
  ];

  return (
    <>
      <SEO title={title} description={description} path={path} type="article" jsonLd={caseSchema} />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main className="case-study-page">
        <section className="case-hero section-shell">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="case-hero-copy">
            <motion.a className="back-link" href="/#projects" variants={fadeUp}>
              <ArrowLeft size={18} /> Back to Projects
            </motion.a>
            <motion.span className="eyebrow" variants={fadeUp}>
              {study.category}
            </motion.span>
            <motion.h1 variants={fadeUp}>{study.title}</motion.h1>
            <motion.p variants={fadeUp}>{study.intro}</motion.p>
            <motion.div className="hero-actions" variants={fadeUp}>
              <a className="btn btn-primary" href={getWhatsAppLink(message)} target="_blank" rel="noreferrer">
                Discuss Similar Project <ArrowRight size={18} />
              </a>
              <Button href="/#contact" variant="ghost">
                Contact RK Web Solutions
              </Button>
            </motion.div>
          </motion.div>

          <motion.div className="case-visual" initial={{ opacity: 0, y: 34, rotateX: 8 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ duration: 0.75 }}>
            <div className="case-window">
              <div className="mock-browser">
                <div className="browser-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="browser-pill" />
              </div>
              <div className="case-dashboard-card">
                <span>{study.metric}</span>
                <p>{study.metricLabel}</p>
              </div>
              <div className="case-bars">
                {[38, 64, 48, 82, 70, 92].map((height, index) => (
                  <i key={index} style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section className="case-content section-shell">
          <article className="case-panel">
            <span className="case-icon">
              <Layers3 size={22} />
            </span>
            <h2>Challenge</h2>
            <p>{study.challenge}</p>
          </article>
          <article className="case-panel">
            <span className="case-icon">
              <CheckCircle2 size={22} />
            </span>
            <h2>Solution</h2>
            <p>{study.solution}</p>
          </article>
          <article className="case-panel case-impact">
            <span className="case-icon">
              <TrendingUp size={22} />
            </span>
            <h2>Business Impact</h2>
            <ul>
              {study.impact.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="case-details section-shell">
          <div>
            <span className="eyebrow">Project Scope</span>
            <h2>What this solution includes</h2>
            <div className="case-feature-grid">
              {study.features.map((feature) => (
                <div className="case-feature" key={feature}>
                  <CheckCircle2 size={18} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <aside className="case-summary">
            <div>
              <Clock size={20} />
              <span>Timeline</span>
              <strong>{study.timeline}</strong>
            </div>
            <div>
              <Layers3 size={20} />
              <span>Services</span>
              <strong>{study.tech.join(', ')}</strong>
            </div>
          </aside>
        </section>

        <section className="case-cta">
          <h2>Want a result like this for your business?</h2>
          <p>{brand.name} can plan, design, and build a modern website, dashboard, or automation system around your workflow.</p>
          <a className="btn btn-primary" href={getWhatsAppLink(message)} target="_blank" rel="noreferrer">
            Start on WhatsApp <ArrowRight size={18} />
          </a>
        </section>
      </main>
      <WhatsAppFloat />
      <FloatingContactBar />
      <BackToTop />
    </>
  );
}

export default CaseStudyPage;
