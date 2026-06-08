import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Download,
  FileText,
  Info,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { brand } from '../assets/brand';
import { getWhatsAppLink } from '../assets/whatsapp';
import { fadeUp, staggerContainer } from '../animations/variants';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import SEO from '../components/SEO';
import FloatingContactBar from '../components/FloatingContactBar';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { BackToTop, CursorGlow, ScrollProgress } from '../components/UtilityEffects';

const tocItems = [
  ['terms', 'Terms & Conditions'],
  ['privacy', 'Privacy Policy'],
  ['support', 'Support & Maintenance'],
  ['payment', 'Payment Terms'],
  ['revisions', 'Revision Policy'],
  ['refund', 'Refund Policy'],
  ['process', 'Project Process'],
  ['contact-info', 'Contact Information'],
];

const supportPlans = [
  ['Starter Support', '₹1,000/month'],
  ['Business Care', '₹2,500/month'],
  ['Enterprise Support', '₹5,000-₹10,000/month'],
];

const processSteps = [
  'Requirement Discussion',
  'Proposal & Quotation',
  'Advance Payment',
  'Design & Development',
  'Client Review',
  'Testing & QA',
  'Launch',
  'Support Period',
];

const scrollToGuideSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

function GuideCard({ id, eyebrow, title, children }) {
  return (
    <motion.article id={id} className="client-guide-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children}
    </motion.article>
  );
}

function ClientGuidePage() {
  const title = `Client Policies & Support Guide | ${brand.name}`;
  const description = 'Review RK Web Solutions terms, privacy policy, support plans, payment terms, and project process before starting your website or dashboard project.';

  return (
    <>
      <SEO title={title} description={description} path="/client-guide" />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main className="client-guide-page">
        <section className="client-guide-hero section-shell">
          <div className="support-hero-bg" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <a className="back-link" href="/">
            <ArrowLeft size={18} /> Back to Home
          </a>
          <motion.div className="client-guide-hero-card" variants={fadeUp} initial="hidden" animate="visible">
            <span className="privacy-shield" aria-hidden="true">
              <FileText size={30} />
            </span>
            <span className="eyebrow">Client resources</span>
            <h1>Client Policies & Support Guide</h1>
            <p>Everything you need to know before starting a project with RK Web Solutions.</p>
            <p>Learn about our project process, privacy practices, support plans, payment terms, and client policies.</p>
            <div className="hero-actions">
              <Button href="/#contact">Contact Us</Button>
              <a className="btn btn-ghost" href="#download-guide" onClick={(event) => { event.preventDefault(); scrollToGuideSection('download-guide'); }}>
                Download PDF <Download size={18} />
              </a>
            </div>
          </motion.div>
        </section>

        <section className="client-guide-layout section-shell">
          <aside className="client-guide-toc" aria-label="Client guide table of contents">
            <strong>Guide Contents</strong>
            {tocItems.map(([id, label]) => (
              <button type="button" key={id} onClick={() => scrollToGuideSection(id)}>
                {label}
              </button>
            ))}
          </aside>

          <div className="client-guide-content">
            <GuideCard id="terms" eyebrow="Section 1" title="Terms & Conditions">
              <div className="client-guide-list">
                {['Services Offered', 'Project Requirements', 'Client Responsibilities', 'Ownership & Rights', 'Communication Expectations'].map((item) => (
                  <span key={item}><CheckCircle2 size={17} /> {item}</span>
                ))}
              </div>
              <p>RK Web Solutions provides websites, dashboards, web applications, UI/UX design, automation, and support services based on agreed scope, timeline, and requirements.</p>
            </GuideCard>

            <GuideCard id="privacy" eyebrow="Section 2" title="Privacy Policy">
              <p>We collect only the information needed to communicate, understand requirements, provide quotations, and deliver services.</p>
              <div className="client-guide-list">
                {['Information Collection', 'Contact Form Data', 'Cookies & Analytics', 'Data Protection', 'Third-Party Services', 'User Rights'].map((item) => (
                  <span key={item}><ShieldCheck size={17} /> {item}</span>
                ))}
              </div>
              <div className="client-trust-grid">
                {['Secure Data Handling', 'No Data Selling', 'Transparent Communication'].map((item) => (
                  <strong key={item}>✔ {item}</strong>
                ))}
              </div>
            </GuideCard>

            <GuideCard id="support" eyebrow="Section 3" title="Support & Maintenance Plans">
              <div className="client-support-plans">
                {supportPlans.map(([name, price]) => (
                  <div key={name}>
                    <h3>{name}</h3>
                    <strong>{price}</strong>
                  </div>
                ))}
              </div>
              <div className="client-guide-list">
                {['Bug Fixes', 'Content Updates', 'Security Checks', 'Backups', 'Performance Monitoring'].map((item) => (
                  <span key={item}><CheckCircle2 size={17} /> {item}</span>
                ))}
              </div>
              <div className="client-guide-highlight">
                <Sparkles size={20} /> 30 Days Free Support Included
              </div>
            </GuideCard>

            <GuideCard id="payment" eyebrow="Section 4" title="Payment Terms">
              <div className="payment-timeline">
                <div><span>Standard Projects</span><strong>50% Advance</strong><strong>50% Before Launch</strong></div>
                <div><span>Large Projects</span><strong>40% Start</strong><strong>30% Development</strong><strong>30% Delivery</strong></div>
              </div>
            </GuideCard>

            <GuideCard id="revisions" eyebrow="Section 5" title="Revision Policy">
              <div className="payment-timeline">
                <div><span>Starter Website</span><strong>2 Revision Rounds</strong></div>
                <div><span>Business Pro</span><strong>4 Revision Rounds</strong></div>
                <div><span>Enterprise Dashboard</span><strong>As per project scope</strong></div>
              </div>
              <p>Additional revisions may incur additional charges if they go beyond the agreed project scope.</p>
            </GuideCard>

            <GuideCard id="refund" eyebrow="Section 6" title="Refund Policy">
              <div className="client-warning-grid">
                {[
                  'Advance payments are non-refundable once development begins.',
                  'Completed work will be billed accordingly.',
                  'Digital services are non-refundable after delivery.',
                ].map((item) => (
                  <span key={item}><Info size={17} /> {item}</span>
                ))}
              </div>
            </GuideCard>

            <GuideCard id="process" eyebrow="Section 7" title="Project Delivery Process">
              <div className="client-process-grid">
                {processSteps.map((step, index) => (
                  <div key={step}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <strong>{step}</strong>
                  </div>
                ))}
              </div>
            </GuideCard>

            <GuideCard id="contact-info" eyebrow="Section 8" title="Contact Information">
              <div className="client-contact-grid">
                <span><strong>Company</strong>{brand.name}</span>
                <span><strong>Website</strong>{brand.website}</span>
                <span><strong>Email</strong>{brand.email}</span>
                <span><strong>Location</strong>{brand.location}</span>
              </div>
              <div className="client-guide-list">
                {['Business Websites', 'Admin Dashboards', 'Web Applications', 'UI/UX Design', 'Business Automation'].map((item) => (
                  <span key={item}><CheckCircle2 size={17} /> {item}</span>
                ))}
              </div>
            </GuideCard>

            <motion.article id="download-guide" className="client-guide-download" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <Download size={28} />
              <div>
                <span className="eyebrow">Download</span>
                <h2>Download Client Policies & Support Guide</h2>
                <p>Download a complete copy of our policies, support plans, payment terms, and project process.</p>
              </div>
              <button className="btn btn-primary" type="button" disabled title="PDF coming soon">
                Download PDF <ArrowRight size={18} />
              </button>
            </motion.article>

            <section className="pricing-final-cta">
              <span className="eyebrow">Start with clarity</span>
              <h2>Ready to Discuss Your Project?</h2>
              <p>We will explain the scope, timeline, support terms, and pricing before work begins.</p>
              <div>
                <Button href="/#contact">Contact Us</Button>
                <a className="btn btn-ghost" href={getWhatsAppLink('Hi RK Web Solutions, I reviewed the client policies guide and want to discuss a project.')} target="_blank" rel="noreferrer">
                  Chat on WhatsApp <ArrowRight size={18} />
                </a>
              </div>
            </section>
          </div>
        </section>
      </main>
      <WhatsAppFloat />
      <FloatingContactBar />
      <BackToTop />
    </>
  );
}

export default ClientGuidePage;
