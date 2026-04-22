import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { WhatsAppLink } from '../utils/whatsapp';

export default function WhatsAppFAB() {
  return (
    <motion.a
      href={WhatsAppLink()}
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[70] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-all hover:scale-105 border-4 border-white"
      title="Fale Conosco no WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-accent-orange"></span>
      </span>
    </motion.a>
  );
}
