import React from 'react';
import { ArrowLeft, Mail, ShieldCheck } from 'lucide-react';
import { brand } from '../assets/brand';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO';
import FloatingContactBar from '../components/FloatingContactBar';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { BackToTop, CursorGlow, ScrollProgress } from '../components/UtilityEffects';

const privacyCommitments = [
  'Secure Data Handling',
  'No Data Selling',
  'Transparent Communication',
  'User Privacy First',
];

const privacySections = [
  {
    title: '1. Introduction',
    text: 'RK Web Solutions respects visitor privacy and is committed to protecting personal information shared through our website, contact forms, WhatsApp conversations, email communication, and project discussions.',
  },
  {
    title: '2. Information We Collect',
    text: 'We may collect your name, email address, phone number, company or business information, project requirements submitted through forms, and website usage analytics that help us understand and improve the website experience.',
  },
  {
    title: '3. How We Use Information',
    text: 'We use collected information to respond to inquiries, provide project quotations, deliver services, improve website experience, communicate project updates, and provide customer support.',
  },
  {
    title: '4. Contact Forms',
    text: 'Information submitted through contact forms is used solely for communication, lead follow-up, requirement discussion, quotation preparation, and project-related conversations.',
  },
  {
    title: '5. Cookies & Analytics',
    text: 'Our website may use cookies, Google Analytics, or similar tools to understand visitor activity, improve website performance, and enhance user experience. Analytics data is generally collected in an aggregated or technical format.',
  },
  {
    title: '6. Data Protection',
    text: 'We implement reasonable security measures to protect personal information against unauthorized access, misuse, loss, or disclosure. However, no online transmission or storage system can be guaranteed as completely secure.',
  },
  {
    title: '7. Third-Party Services',
    text: 'We may use third-party services such as Google Analytics, Google Maps, WhatsApp, and email services. These services may collect data based on their own privacy policies and terms.',
  },
  {
    title: '8. Information Sharing',
    text: 'RK Web Solutions does not sell, rent, or trade personal information to third parties. Information may only be shared when required to deliver a requested service, comply with law, or support project communication.',
  },
  {
    title: '9. User Rights',
    text: 'Users may request access to their submitted personal data, request corrections, or request deletion of information shared with RK Web Solutions by contacting us directly.',
  },
  {
    title: '10. External Links',
    text: 'Our website may contain links to external websites or third-party platforms. RK Web Solutions is not responsible for the privacy practices, content, or policies of external websites.',
  },
  {
    title: '11. Policy Updates',
    text: 'This Privacy Policy may be updated periodically. Any changes will be reflected on this page with an updated revision date.',
  },
  {
    title: '12. Contact Information',
    text: `Company: ${brand.name}. Email: ${brand.email}. Website: ${brand.website}.`,
  },
  {
    title: '13. Last Updated',
    text: 'Last Updated: June 8, 2026',
  },
];

function PrivacyPolicyPage() {
  const title = `Privacy Policy | ${brand.name}`;
  const description = 'Learn how RK Web Solutions collects, uses, and protects your personal information.';

  return (
    <>
      <SEO title={title} description={description} path="/privacy-policy" />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main className="terms-page privacy-page">
        <section className="terms-hero section-shell privacy-hero">
          <a className="back-link" href="/">
            <ArrowLeft size={18} /> Back to Home
          </a>
          <span className="privacy-shield" aria-hidden="true">
            <ShieldCheck size={30} />
          </span>
          <span className="eyebrow">Privacy</span>
          <h1>Privacy Policy</h1>
          <p>Your privacy is important to us. This policy explains how RK Web Solutions collects, uses, and protects your information.</p>
          <small>Last updated: June 8, 2026</small>
        </section>

        <section className="privacy-trust section-shell">
          <div>
            <h2>Your information is used only for communication and project-related services.</h2>
            <p>We do not sell or share your personal data for unrelated marketing or third-party trading.</p>
          </div>
        </section>

        <section className="privacy-commitments section-shell" aria-label="Privacy commitments">
          {privacyCommitments.map((commitment) => (
            <article className="terms-card privacy-commitment-card" key={commitment}>
              <ShieldCheck size={22} />
              <h2>{commitment}</h2>
            </article>
          ))}
        </section>

        <section className="terms-content section-shell" aria-label="Privacy Policy content">
          {privacySections.map((section) => (
            <article className="terms-card" id={section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')} key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </article>
          ))}
        </section>

        <section className="terms-contact section-shell">
          <div>
            <span className="eyebrow">Contact</span>
            <h2>Privacy Questions?</h2>
            <p>Contact RK Web Solutions to access, correct, or request deletion of submitted personal information.</p>
          </div>
          <a className="btn btn-primary" href={`mailto:${brand.email}`}>
            <Mail size={18} /> {brand.email}
          </a>
        </section>
      </main>
      <WhatsAppFloat />
      <FloatingContactBar />
      <BackToTop />
    </>
  );
}

export default PrivacyPolicyPage;
