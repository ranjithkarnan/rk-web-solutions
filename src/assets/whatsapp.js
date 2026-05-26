export const whatsappNumber = '917358680423';

export const defaultWhatsAppMessage = 'Hi RK Web Solutions, I need a business website.';

export function getWhatsAppLink(message = defaultWhatsAppMessage) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
