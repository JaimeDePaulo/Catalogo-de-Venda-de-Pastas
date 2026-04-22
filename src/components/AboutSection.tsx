import { motion } from 'motion/react';
import { BRAND_INFO } from '../constants';

export default function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-secondary overflow-hidden relative">
      {/* Decorative background Patterns */}
      <div className="absolute left-0 bottom-0 w-64 h-64 african-pattern opacity-10 rotate-45 -translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square relative overflow-hidden rounded-full border-8 border-white shadow-xl">
              <img
                src="https://lh3.googleusercontent.com/u/0/d/1YhpZsiMvHn8jQUhv5FneNGtDCF_aKhPk"
                alt="Retrato da essência Mona D'Ami"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent-orange text-white flex items-center justify-center rounded-sm rotate-12 shadow-lg p-4 text-center">
              <p className="font-serif text-sm font-bold leading-tight uppercase tracking-tighter">Essência Angolana e Africana</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="text-accent-orange text-xs font-bold uppercase tracking-widest mb-4 block">Sobre a Marca</span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 italic">Mona D’Ami</h2>
            <div className="space-y-6 text-primary/80 leading-relaxed">
              <p>{BRAND_INFO.about}</p>
              <p>
                Acreditamos que a beleza está na singularidade. Nossos padrões são inspirados em tecidos tradicionais e na geometrização da arte africana, criando uma ponte entre o legado cultural e o guarda-roupa da mulher urbana.
              </p>
              <p className="font-serif italic text-xl text-primary font-medium">
                "Carregamos não só os seus pertences, mas a força e a elegância da sua história."
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-primary/10 pt-8">
              <div>
                <p className="text-3xl font-bold text-accent-orange">01.</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-primary/60 mt-1">Exclusivo</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent-orange">02.</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-primary/60 mt-1">Manual</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent-orange">03.</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-primary/60 mt-1">Atemporal</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
