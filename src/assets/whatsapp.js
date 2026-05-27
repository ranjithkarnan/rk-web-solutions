export const whatsappNumber = '919884497990';

export const defaultWhatsAppMessage = 'Hi RK Web Solutions, I need a business website.';

export function getWhatsAppLink(message = defaultWhatsAppMessage) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppLinkForNumber(phone, message) {
  const cleanedPhone = phone.replace(/\D/g, '');
  const normalizedPhone = cleanedPhone.length === 10 ? `91${cleanedPhone}` : cleanedPhone;

  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`;
}
