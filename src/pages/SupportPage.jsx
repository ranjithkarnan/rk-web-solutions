import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Bug,
  CheckCircle2,
  ChevronDown,
  DatabaseBackup,
  FilePenLine,
  Gauge,
  Headphones,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  X,
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

const maintenanceFeatures = [
  { icon: ShieldCheck, title: 'Security Updates', text: 'Keep your website safer with regular checks, updates, and basic protection guidance.' },
  { icon: Bug, title: 'Bug Fixes', text: 'Fix layout issues, form problems, broken links, and minor functionality errors after launch.' },
  { icon: Gauge, title: 'Performance Optimization', text: 'Improve load speed, reduce friction, and keep the website experience smooth for visitors.' },
  { icon: FilePenLine, title: 'Content Updates', text: 'Update text, images, contact details, sections, offers, and business information when needed.' },
  { icon: DatabaseBackup, title: 'Backups & Recovery', text: 'Protect important website data with backup support and recovery guidance.' },
  { icon: Headphones, title: 'Technical Support', text: 'Get help for website questions, small adjustments, and business website improvements.' },
];

const supportPlans = [
  {
    name: 'Starter Maintenance',
    price: 'Rs. 1,000/month',
    badge: 'Most Affordable',
    bestFor: 'Starter Websites',
    includes: ['Content updates', 'Image replacement', 'Contact information updates', 'Minor bug fixes', 'Email support'],
  },
  {
    name: 'Business Care',
    price: 'Rs. 2,500/month',
    badge: 'Most Popular',
    featured: true,
    bestFor: 'Growing Businesses',
    includes: ['Everything in Starter', 'Monthly backups', 'SEO adjustments', 'Performance improvements', 'Priority support', 'Landing page updates'],
  },
  {
    name: 'Enterprise Support',
    price: 'Rs. 5,000 - Rs. 10,000/month',
    badge: 'Premium Support',
    bestFor: 'Dashboards & Web Applications',
    includes: ['Everything in Business Care', 'Database support', 'User management support', 'Security monitoring', 'Feature enhancements', 'Technical consultation'],
  },
];

const annualPlans = [
  ['Starter Website', 'Rs. 6,000/year'],
  ['Business Website', 'Rs. 12,000/year'],
  ['Enterprise Dashboard', 'Rs. 25,000+/year'],
];

const includedItems = ['Bug Fixes', 'Content Changes', 'Image Updates', 'Security Checks', 'Website Monitoring', 'Backup Management'];
const excludedItems = ['Full Redesign', 'New Major Features', 'New Dashboard Modules', 'Third-Party Software Costs'];

const supportFaqs = [
  ['Why do websites need maintenance?', 'Websites need maintenance to stay secure, updated, fast, compatible with browsers, and reliable for customers who visit or submit inquiries.'],
  ['Is maintenance mandatory?', 'Maintenance is not mandatory, but it is recommended for businesses that depend on their website for leads, trust, and ongoing updates.'],
  ['What happens after free support ends?', 'After the free support period ends, fixes and updates can be handled as separate requests or through an active maintenance plan.'],
  ['Can I request new features?', 'Yes. New features can be discussed anytime. Major features, integrations, redesigns, or modules will be quoted separately.'],
  ['Do you provide emergency support?', 'Emergency support may be available based on the maintenance plan, urgency, and current availability.'],
  ['What is included in monthly support?', 'Monthly support can include minor bug fixes, content changes, image updates, backups, performance checks, SEO adjustments, and technical guidance based on your selected plan.'],
];

function SupportPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const title = `Support & Maintenance Plans | ${brand.name}`;
  const description = 'Website maintenance, support plans, security updates, content updates, bug fixes, backups, and ongoing support from RK Web Solutions.';

  return (
    <>
      <SEO title={title} description={description} path="/support" />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main className="support-page">
        <section className="support-hero section-shell">
          <div className="support-hero-bg" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <motion.a className="back-link" href="/" variants={fadeUp} initial="hidden" animate="visible">
            <ArrowLeft size={18} /> Back to Home
          </motion.a>
          <motion.span className="eyebrow" variants={fadeUp} initial="hidden" animate="visible">
            Post-launch care
          </motion.span>
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible">
            Support & Maintenance Plans
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="visible">
            Keep your website secure, updated, fast, and running smoothly after launch.
          </motion.p>
          <motion.p className="support-hero-description" variants={fadeUp} initial="hidden" animate="visible">
            Our support plans help businesses maintain their websites, fix issues quickly, improve performance, and keep content up to date.
          </motion.p>
          <motion.div className="hero-actions" variants={fadeUp} initial="hidden" animate="visible">
            <a className="btn btn-primary" href={getWhatsAppLink('Hi RK Web Solutions, I want to discuss support and maintenance plans.')} target="_blank" rel="noreferrer">
              Discuss Support Plans <ArrowRight size={18} />
            </a>
            <Button href="/#contact" variant="ghost">
              Contact Us
            </Button>
          </motion.div>
        </section>

        <section className="section-shell">
          <div className="pricing-subhead">
            <span className="eyebrow">Why it matters</span>
            <h2>Websites need care after launch</h2>
            <p>Maintenance keeps your business website trustworthy, stable, and ready for customers every day.</p>
          </div>
          <motion.div className="support-feature-grid" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
            {maintenanceFeatures.map(({ icon: Icon, title: itemTitle, text }) => (
              <motion.article className="support-glass-card" variants={fadeUp} key={itemTitle}>
                <Icon size={24} />
                <h3>{itemTitle}</h3>
                <p>{text}</p>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section className="section-shell">
          <div className="pricing-subhead">
            <span className="eyebrow">Plans</span>
            <h2>Choose the right support level</h2>
            <p>Simple monthly plans for website updates, fixes, monitoring, and technical support.</p>
          </div>
          <div className="support-plan-grid">
            {supportPlans.map((plan) => (
              <motion.article className={`support-plan-card ${plan.featured ? 'support-plan-featured' : ''}`} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} key={plan.name}>
                <span className="premium-badge">{plan.badge}</span>
                <h3>{plan.name}</h3>
                <strong>{plan.price}</strong>
                <p>Best for: {plan.bestFor}</p>
                <ul>
                  {plan.includes.map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={17} /> {item}
                    </li>
                  ))}
                </ul>
                <a className={plan.featured ? 'btn btn-primary' : 'btn btn-ghost'} href={getWhatsAppLink(`Hi RK Web Solutions, I want to discuss the ${plan.name} plan.`)} target="_blank" rel="noreferrer">
                  Get Support Plan <ArrowRight size={18} />
                </a>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="support-annual section-shell">
          <div>
            <span className="eyebrow">Annual plans</span>
            <h2>Save more with annual maintenance plans.</h2>
            <p>Annual care plans help businesses reduce support costs and keep improvements moving throughout the year.</p>
          </div>
          <div className="support-annual-table">
            {annualPlans.map(([plan, price]) => (
              <div key={plan}>
                <span>{plan}</span>
                <strong>{price}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="section-shell">
          <div className="pricing-subhead">
            <span className="eyebrow">Scope</span>
            <h2>What is included</h2>
          </div>
          <div className="support-scope-grid">
            <article className="support-scope-card">
              <h3>Included</h3>
              {includedItems.map((item) => (
                <span className="support-included" key={item}>
                  <CheckCircle2 size={17} /> {item}
                </span>
              ))}
            </article>
            <article className="support-scope-card">
              <h3>Not Included</h3>
              {excludedItems.map((item) => (
                <span className="support-excluded" key={item}>
                  <X size={17} /> {item}
                </span>
              ))}
            </article>
          </div>
        </section>

        <section className="support-free section-shell">
          <Sparkles size={28} />
          <div>
            <span className="eyebrow">Included with projects</span>
            <h2>30 Days Free Support Included</h2>
            <p>Every website project includes 30 days of complimentary support after launch.</p>
            <div>
              <span>Bug fixes</span>
              <span>Guidance</span>
              <span>Small adjustments</span>
            </div>
          </div>
        </section>

        <section className="support-policy section-shell">
          <h2>Important Support Policy</h2>
          <p>
            Post-launch support includes minor bug fixes and guidance for 30 days from the launch date. Any additional feature requests,
            redesign work, integrations, content creation, or major changes after project completion will be quoted separately or covered
            under an active maintenance plan.
          </p>
        </section>

        <section className="section-shell">
          <div className="pricing-subhead">
            <span className="eyebrow">FAQ</span>
            <h2>Support questions clients ask</h2>
          </div>
          <div className="support-faq-list">
            {supportFaqs.map(([question, answer], index) => (
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
          <span className="eyebrow">Ongoing care</span>
          <h2>Need Ongoing Website Support?</h2>
          <p>Choose a maintenance plan that keeps your business website running smoothly.</p>
          <div>
            <Button href="/#contact">Contact RK Web Solutions</Button>
            <a className="btn btn-ghost" href={getWhatsAppLink('Hi RK Web Solutions, I want to get a support plan.')} target="_blank" rel="noreferrer">
              Get Support Plan <ArrowRight size={18} />
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

export default SupportPage;
