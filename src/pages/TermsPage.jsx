import React from 'react';
import { ArrowLeft, Mail } from 'lucide-react';
import { brand } from '../assets/brand';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO';
import FloatingContactBar from '../components/FloatingContactBar';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { BackToTop, CursorGlow, ScrollProgress } from '../components/UtilityEffects';

const termsSections = [
  {
    title: '1. Introduction',
    text: 'These Terms and Conditions explain how RK Web Solutions works with clients for websites, dashboards, web applications, UI/UX redesigns, automation systems, and related digital services. By starting a project with us, you agree to these terms.',
  },
  {
    title: '2. Services Offered',
    text: 'RK Web Solutions provides business website development, admin dashboard development, web application development, UI/UX design, website redesign, business automation, CRM and employee portals, SEO-friendly websites, and mobile responsive digital solutions.',
  },
  {
    title: '3. Project Requirements',
    text: 'Clients are expected to share clear project requirements, business goals, required pages, features, reference designs, content, branding assets, and any technical details needed before or during project planning.',
  },
  {
    title: '4. Pricing & Payment Terms',
    text: 'Final pricing depends on project scope, design complexity, integrations, content requirements, timeline, and custom functionality. Payment terms, advance amount, milestones, and balance payment will be discussed and confirmed before project execution.',
  },
  {
    title: '5. Project Timeline',
    text: 'Estimated timelines are shared based on agreed requirements. Timelines may change if approvals, content, feedback, third-party access, or required materials are delayed by the client or external providers.',
  },
  {
    title: '6. Client Responsibilities',
    text: 'Clients must provide accurate information, timely feedback, necessary logins, content, images, business details, and approvals. Delays in providing these may affect project delivery dates.',
  },
  {
    title: '7. Revisions & Changes',
    text: 'Reasonable revisions may be included based on the agreed project scope. Major changes, new features, redesign requests, or scope changes after approval may require additional cost and timeline.',
  },
  {
    title: '8. Content & Materials',
    text: 'Clients are responsible for ensuring that all supplied text, images, logos, videos, documents, and other materials are accurate, legal, and owned by them or properly licensed for use.',
  },
  {
    title: '9. Hosting & Domain',
    text: 'Hosting, domain registration, email hosting, and third-party tools may be handled by the client or supported by RK Web Solutions based on the project agreement. Third-party charges are usually billed separately.',
  },
  {
    title: '10. Maintenance & Support',
    text: 'Post-launch support, bug fixes, content updates, security checks, backups, performance improvements, and maintenance plans can be provided based on the agreed support package.',
  },
  {
    title: '11. Refund Policy',
    text: 'Payments made for planning, design, development, or completed milestones are generally non-refundable. Refund eligibility, if any, depends on project status, work completed, and the agreed payment terms.',
  },
  {
    title: '12. Ownership & Rights',
    text: 'After full payment is received, agreed project deliverables may be handed over to the client. RK Web Solutions may retain rights to reusable code, frameworks, internal tools, and general development methods used across projects.',
  },
  {
    title: '13. Limitation of Liability',
    text: 'RK Web Solutions is not responsible for indirect losses, business interruption, third-party service failures, hosting issues, domain issues, plugin failures, cyber incidents, or changes made by others after delivery.',
  },
  {
    title: '14. Communication',
    text: 'Project communication may happen through WhatsApp, email, calls, or project discussions. Clients should respond on time to keep the project moving smoothly.',
  },
  {
    title: '15. Acceptance of Terms',
    text: 'By confirming a project, making a payment, or using our services, the client agrees to these Terms and Conditions and any project-specific agreement discussed before work begins.',
  },
  {
    title: '16. Contact Information',
    text: `For questions about these terms or RK Web Solutions services, contact us at ${brand.email}.`,
  },
];

function TermsPage() {
  const title = `Terms & Conditions | ${brand.name}`;
  const description = 'Terms and Conditions for RK Web Solutions website development, dashboard development, UI/UX design, automation, support, and related digital services.';

  return (
    <>
      <SEO title={title} description={description} path="/terms" />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main className="terms-page">
        <section className="terms-hero section-shell">
          <a className="back-link" href="/">
            <ArrowLeft size={18} /> Back to Home
          </a>
          <span className="eyebrow">Legal</span>
          <h1>Terms & Conditions</h1>
          <p>
            Professional terms for working with {brand.name} on websites, dashboards, web applications, automation systems, UI/UX redesigns,
            and support services.
          </p>
          <small>Last updated: June 8, 2026</small>
        </section>

        <section className="terms-content section-shell" aria-label="Terms and Conditions content">
          {termsSections.map((section) => (
            <article className="terms-card" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </article>
          ))}
        </section>

        <section className="terms-contact section-shell">
          <div>
            <span className="eyebrow">Contact</span>
            <h2>Questions About These Terms?</h2>
            <p>Reach out to RK Web Solutions before starting your project if you need clarification.</p>
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

export default TermsPage;
