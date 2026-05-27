import React from 'react';
import { CalendarCheck, FileText, MessageCircle, Phone } from 'lucide-react';
import { brand } from '../assets/brand';
import { getWhatsAppLink } from '../assets/whatsapp';

function FloatingContactBar() {
  return (
    <nav className="floating-contact-bar" aria-label="Quick contact actions">
      <a href={`tel:${brand.phoneHref}`}>
        <Phone size={18} />
        <span>Call Now</span>
      </a>
      <a href={getWhatsAppLink()} target="_blank" rel="noreferrer">
        <MessageCircle size={18} />
        <span>WhatsApp</span>
      </a>
      <a href="/#contact">
        <CalendarCheck size={18} />
        <span>Book Service</span>
      </a>
      <a href="/#pricing">
        <FileText size={18} />
        <span>Get Quote</span>
      </a>
    </nav>
  );
}

export default FloatingContactBar;
