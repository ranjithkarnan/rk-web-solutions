export const whatsappNumber = '919884497990';

export const defaultWhatsAppMessage = 'Hi RK Web Solutions, I need a business website.';

export function getWhatsAppLink(message = defaultWhatsAppMessage) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
