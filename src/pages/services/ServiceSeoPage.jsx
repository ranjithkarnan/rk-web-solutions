import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronDown, MapPin } from 'lucide-react';
import { brand } from '../../assets/brand';
import { getWhatsAppLink } from '../../assets/whatsapp';
import { fadeUp, staggerContainer } from '../../animations/variants';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import SEO from '../../components/SEO';
import FloatingContactBar from '../../components/FloatingContactBar';
import WhatsAppFloat from '../../components/WhatsAppFloat';
import { BackToTop, CursorGlow, ScrollProgress } from '../../components/UtilityEffects';
import { servicePageLinks } from './servicePageData';

function ServiceSeoPage({ page }) {
  const [openFaq, setOpenFaq] = useState(0);
  const Icon = page.icon;
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.h1,
    description: page.description,
    provider: {
      '@type': 'Organization',
      name: brand.name,
      url: brand.website,
      email: brand.email,
      telephone: brand.phoneHref,
    },
    areaServed: {
      '@type': 'City',
      name: 'Chennai',
    },
    serviceType: page.keyword,
    url: `${brand.website}${page.path}`,
  };

  return (
    <>
      <SEO title={page.title} description={page.description} path={page.path} jsonLd={[serviceSchema, faqSchema]} />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main className="local-service-page">
        <section className="local-service-hero section-shell">
          <div className="support-hero-bg" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <a className="back-link" href="/">
            <ArrowLeft size={18} /> Back to Home
          </a>
          <motion.div className="local-service-hero-card" variants={fadeUp} initial="hidden" animate="visible">
            <span className="local-service-icon">
              <Icon size={30} />
            </span>
            <span className="eyebrow">
              <MapPin size={14} /> Chennai service page
            </span>
            <h1>{page.h1}</h1>
            <p>{page.intro}</p>
            <div className="hero-actions">
              <Button href="/#contact">Get Free Consultation</Button>
              <a className="btn btn-ghost" href={getWhatsAppLink(`Hi RK Web Solutions, I want to discuss ${page.keyword}.`)} target="_blank" rel="noreferrer">
                Chat on WhatsApp <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </section>

        <section className="section-shell">
          <div className="pricing-subhead">
            <span className="eyebrow">Benefits</span>
            <h2>Why choose RK Web Solutions for {page.keyword}</h2>
            <p>Business-focused digital solutions for Chennai companies that need modern design, speed, trust, and lead generation.</p>
          </div>
          <motion.div className="local-service-grid" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
            {page.benefits.map((benefit) => (
              <motion.article className="local-service-card" variants={fadeUp} key={benefit}>
                <CheckCircle2 size={22} />
                <h3>{benefit}</h3>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section className="local-service-split section-shell">
          <article className="local-service-panel">
            <span className="eyebrow">What we offer</span>
            <h2>Service scope</h2>
            <div className="local-service-list">
              {page.offers.map((item) => (
                <span key={item}><CheckCircle2 size={17} /> {item}</span>
              ))}
            </div>
          </article>
          <article className="local-service-panel">
            <span className="eyebrow">Industries</span>
            <h2>Industries served</h2>
            <div className="local-service-tags">
              {page.industries.map((industry) => (
                <span key={industry}>{industry}</span>
              ))}
            </div>
          </article>
        </section>

        <section className="section-shell">
          <div className="pricing-subhead">
            <span className="eyebrow">Process</span>
            <h2>A clear project process from planning to launch</h2>
          </div>
          <div className="local-process-grid">
            {page.process.map((step, index) => (
              <div key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="section-shell">
          <div className="pricing-subhead">
            <span className="eyebrow">Examples</span>
            <h2>Relevant project examples</h2>
          </div>
          <div className="local-example-grid">
            {page.examples.map((example) => (
              <article className="local-example-card" key={example}>
                <strong>{example}</strong>
                <p>Example of the kind of business-focused website or dashboard experience RK Web Solutions can create.</p>
              </article>
            ))}
          </div>
        </section>

        <section className="local-internal-links section-shell">
          <div>
            <span className="eyebrow">Explore services</span>
            <h2>Related Chennai service pages</h2>
          </div>
          <div>
            {servicePageLinks.filter((link) => link.path !== page.path).map((link) => (
              <a href={link.path} key={link.path}>
                {link.label} <ArrowRight size={16} />
              </a>
            ))}
          </div>
        </section>

        <section className="section-shell">
          <div className="pricing-subhead">
            <span className="eyebrow">FAQ</span>
            <h2>{page.keyword} questions</h2>
          </div>
          <div className="support-faq-list">
            {page.faqs.map(([question, answer], index) => (
              <div className={`pricing-faq-item ${openFaq === index ? 'pricing-faq-open' : ''}`} key={question}>
                <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                  <span>{question}</span>
                  <ChevronDown size={20} />
                </button>
                <p>{answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pricing-final-cta section-shell">
          <span className="eyebrow">Start locally</span>
          <h2>Need {page.keyword}?</h2>
          <p>Tell us your business goal, services, pages, and timeline. RK Web Solutions will help you plan the right digital solution.</p>
          <div>
            <Button href="/#contact">Contact RK Web Solutions</Button>
            <a className="btn btn-ghost" href={getWhatsAppLink(`Hi RK Web Solutions, I need ${page.keyword} for my business.`)} target="_blank" rel="noreferrer">
              Discuss on WhatsApp <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>
      <WhatsAppFloat />
      <FloatingContactBar />
      <BackToTop />
    </>
  );
}

export default ServiceSeoPage;
