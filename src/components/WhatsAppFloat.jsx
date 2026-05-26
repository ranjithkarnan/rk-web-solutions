import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../assets/whatsapp';

function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={getWhatsAppLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp with RK Web Solutions"
    >
      <span className="whatsapp-pulse" aria-hidden="true" />
      <MessageCircle size={24} />
      <span>Chat on WhatsApp</span>
    </a>
  );
}

export default WhatsAppFloat;
