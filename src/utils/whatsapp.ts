import { BRAND_INFO } from '../constants';

export function WhatsAppLink(productName?: string) {
  const phone = BRAND_INFO.whatsapp.replace(/\D/g, '');
  const message = productName 
    ? `Olá, tenho interesse neste produto: ${productName}`
    : 'Olá, gostaria de saber mais sobre os produtos Mona D’Ami.';
    
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
