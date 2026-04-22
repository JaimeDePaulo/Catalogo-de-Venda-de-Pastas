import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle as WhatsApp } from 'lucide-react';
import { Product } from '../constants';
import { WhatsAppLink } from '../utils/whatsapp';

import ImgWithFallback from './ImgWithFallback';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductDetailModal({ product, isOpen, onClose }: ProductDetailModalProps) {
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-secondary w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-sm shadow-2xl flex flex-col md:flex-row border border-primary/10"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-secondary/80 hover:bg-secondary rounded-full text-primary transition-colors border border-primary/10"
            >
              <X size={24} />
            </button>

            <div className="w-full md:w-1/2 h-[40vh] md:h-auto relative">
              <ImgWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto bg-secondary/30">
              <span className="text-xs font-bold tracking-widest uppercase text-accent-orange mb-2 block">
                {product.category}
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">{product.name}</h2>
              <p className="text-2xl font-bold text-primary mb-6">{product.price.toLocaleString('pt-AO')} AOA</p>
              
              <div className="h-px w-full bg-primary/10 mb-6" />
              
              <div className="prose prose-sm text-primary/70 mb-8">
                <p>{product.description}</p>
                <p className="mt-4">
                  Nossas peças são produzidas de forma artesanal, garantindo exclusividade e atenção aos mínimos detalhes. O material utilizado é selecionado rigorosamente para oferecer durabilidade e um toque premium.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href={WhatsAppLink(product.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-primary text-secondary font-bold tracking-wide hover:bg-primary/95 transition-all rounded-sm"
                >
                  Confirmar Interesse via WhatsApp
                </a>
                <p className="text-[10px] text-center text-primary/40 uppercase tracking-widest font-bold">
                  Frete sob consulta • Atendimento personalizado
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
