import React, { useState } from 'react';
import { MessageCircle, Send, Sparkles, X } from 'lucide-react';
import { brand } from '../assets/brand';
import { getWhatsAppLink } from '../assets/whatsapp';

const quickReplies = [
  {
    label: 'Business website',
    message: 'Hi RK Web Solutions, I need a business website for my company.',
  },
  {
    label: 'Admin dashboard',
    message: 'Hi RK Web Solutions, I need an admin dashboard or business portal.',
  },
  {
    label: 'Website redesign',
    message: 'Hi RK Web Solutions, I want to redesign my existing website.',
  },
  {
    label: 'Business automation',
    message: 'Hi RK Web Solutions, I need automation for my business workflow.',
  },
  {
    label: 'Pricing',
    message: 'Hi RK Web Solutions, I want to know pricing for a website or dashboard project.',
  },
];

function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`chat-widget ${isOpen ? 'chat-widget-open' : ''}`}>
      <div className="chat-panel" role="dialog" aria-label="RK Web Solutions chat widget">
        <div className="chat-panel-head">
          <div>
            <span className="chat-avatar">RK</span>
            <div>
              <strong>{brand.name}</strong>
              <small>
                <i className="status-dot" /> Usually replies on WhatsApp
              </small>
            </div>
          </div>
          <button type="button" aria-label="Close chat widget" onClick={() => setIsOpen(false)}>
            <X size={18} />
          </button>
        </div>

        <div className="chat-panel-body">
          <div className="chat-message">
            <Sparkles size={16} />
            <p>Hi, tell us what you want to build. Pick an option and we will continue on WhatsApp.</p>
          </div>
          <div className="chat-replies">
            {quickReplies.map((reply) => (
              <a key={reply.label} href={getWhatsAppLink(reply.message)} target="_blank" rel="noreferrer">
                {reply.label}
              </a>
            ))}
          </div>
        </div>

        <a className="chat-start" href={getWhatsAppLink()} target="_blank" rel="noreferrer">
          Start WhatsApp Chat <Send size={17} />
        </a>
      </div>

      <button
        className="whatsapp-float"
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-label={isOpen ? 'Close RK Web Solutions chat widget' : 'Open RK Web Solutions chat widget'}
      >
        <span className="whatsapp-pulse" aria-hidden="true" />
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}

export default WhatsAppFloat;
