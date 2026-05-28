import React, { useMemo, useState } from 'react';
import { ArrowLeft, Copy, MessageCircle, WandSparkles } from 'lucide-react';
import { brand } from '../assets/brand';
import { getWhatsAppLinkForNumber } from '../assets/whatsapp';
import Logo from '../components/Logo';

const sampleLead = `Hi RK Web Solutions, I need help with a project.

Lead ID: RK-682750
Name: Testing
Business: NewWorld
Email: info@rk-web-solutions.com
Phone: 7358680423
Requirement: Admin Dashboard
Interested Services: Website
Budget: Rs. 15,000 - Rs. 30,000
Timeline: Flexible
Source: Google/Search
Message: Testing`;

function getField(text, label) {
  const match = text.match(new RegExp(`${label}:\\s*(.+)`, 'i'));
  return match?.[1]?.trim() || '';
}

function parseLead(text) {
  return {
    leadId: getField(text, 'Lead ID'),
    name: getField(text, 'Name'),
    business: getField(text, 'Business'),
    email: getField(text, 'Email'),
    phone: getField(text, 'Phone'),
    requirement: getField(text, 'Requirement'),
    services: getField(text, 'Interested Services'),
    budget: getField(text, 'Budget'),
    timeline: getField(text, 'Timeline'),
    source: getField(text, 'Source'),
    message: getField(text, 'Message'),
  };
}

function createReply(lead) {
  const name = lead.name || 'there';
  const requirement = lead.requirement || lead.services || 'your project';
  const business = lead.business ? ` for ${lead.business}` : '';

  return `Hi ${name}, thank you for contacting RK Web Solutions.

We received your enquiry${business} regarding ${requirement}.

Our team will review your requirement and share the best solution, estimated timeline, and pricing details shortly.

To move faster, please share if you already have:
1. Existing website or reference design
2. Required pages/features
3. Preferred launch date

Regards,
RK Web Solutions
${brand.phone}
${brand.email}`;
}

function LeadReplyPage() {
  const [leadText, setLeadText] = useState(sampleLead);
  const [copied, setCopied] = useState(false);
  const lead = useMemo(() => parseLead(leadText), [leadText]);
  const reply = useMemo(() => createReply(lead), [lead]);
  const canOpenWhatsApp = lead.phone.replace(/\D/g, '').length >= 10;

  const copyReply = async () => {
    await navigator.clipboard.writeText(reply);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main className="lead-reply-page">
      <header className="lead-reply-header">
        <Logo href="/" />
        <a href="/" className="back-link">
          <ArrowLeft size={18} /> Back to Website
        </a>
      </header>

      <section className="lead-reply-shell">
        <div className="lead-reply-copy">
          <span className="eyebrow">WhatsApp reply assistant</span>
          <h1>Generate instant predefined replies for new business leads</h1>
          <p>
            Paste a WhatsApp lead message, review the auto-generated response, then open WhatsApp with a reply prepared for the client.
          </p>
        </div>

        <div className="lead-reply-grid">
          <label className="lead-reply-input">
            Client WhatsApp Lead Message
            <textarea value={leadText} onChange={(event) => setLeadText(event.target.value)} rows="15" />
          </label>

          <div className="lead-reply-output">
            <div className="lead-summary">
              <strong>Lead Summary</strong>
              <span>Lead ID: {lead.leadId || 'Not found'}</span>
              <span>Name: {lead.name || 'Not found'}</span>
              <span>Business: {lead.business || 'Not found'}</span>
              <span>Phone: {lead.phone || 'Not found'}</span>
              <span>Requirement: {lead.requirement || 'Not found'}</span>
            </div>

            <label>
              Predefined Reply
              <textarea value={reply} readOnly rows="12" />
            </label>

            <div className="lead-reply-actions">
              <button type="button" className="btn btn-ghost" onClick={copyReply}>
                <Copy size={17} /> {copied ? 'Copied' : 'Copy Reply'}
              </button>
              <a
                className={`btn btn-primary ${canOpenWhatsApp ? '' : 'btn-disabled'}`}
                href={canOpenWhatsApp ? getWhatsAppLinkForNumber(lead.phone, reply) : '#'}
                target="_blank"
                rel="noreferrer"
                aria-disabled={!canOpenWhatsApp}
              >
                <MessageCircle size={17} /> Reply on WhatsApp
              </a>
            </div>

            <p className="lead-reply-note">
              <WandSparkles size={16} /> For true automatic replies, connect WhatsApp Business Cloud API with a backend webhook.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LeadReplyPage;
