import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../constants';

export default function Hero() {
  return (
    <section id="home" className="relative pt-20 overflow-hidden min-h-[90vh] flex flex-col md:flex-row">
      {/* Content Side - Brown Background like the design HTML */}
      <div className="w-full md:w-[40%] bg-primary text-secondary p-8 md:p-12 lg:p-24 flex flex-col justify-center relative">
        <div className="absolute inset-0 african-pattern pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <span className="text-orange-300 uppercase tracking-[0.4em] text-xs font-semibold mb-4 block">
            Lançamento 2024
          </span>
          <h2 className="text-5xl lg:text-7xl font-serif leading-tight mb-6">
            Elegância que carrega a sua essência.
          </h2>
          <p className="text-lg opacity-80 mb-8 max-w-sm italic font-serif">
            Descubra nossa coleção artesanal de pastas e acessórios inspirados na alma africana.
          </p>
          <div className="flex flex-col gap-4">
            <a
              href="#catalogo"
              className="inline-flex items-center justify-center bg-accent-orange text-white px-8 py-4 text-sm uppercase tracking-widest font-bold group rounded-none"
            >
              Ver Catálogo
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </a>
          </div>
        </motion.div>

        <div className="absolute bottom-12 left-12 flex gap-4 hidden md:flex">
          <div className="w-12 h-1 bg-accent-orange"></div>
          <div className="w-12 h-1 bg-white/20"></div>
          <div className="w-12 h-1 bg-white/20"></div>
        </div>
      </div>

      {/* Image Side - Beige Background */}
      <div className="w-full md:w-[60%] bg-secondary flex items-center justify-center p-8 md:p-12 lg:p-24 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full h-full max-h-[700px] aspect-[4/5]"
        >
          <img
            src="https://lh3.googleusercontent.com/u/0/d/1SFHm7pXbXDMfkODZmCwDgkOTtvsaklbJ"
            alt="Moça elegante com bolsa Mona D'Ami"
            className="w-full h-full object-cover shadow-2xl"
            referrerPolicy="no-referrer"
          />
          
          {/* Subtle pattern overlay or element if needed */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl hidden sm:block border-l-4 border-accent-orange">
            <p className="text-primary font-serif font-bold text-2xl">Artesanal</p>
            <p className="text-primary/60 text-[10px] uppercase tracking-widest font-bold">Inspirada na alma</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
