import { motion } from 'motion/react';
import { ShieldCheck, Truck, Clock, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="text-accent-orange" size={24} />,
    title: 'Design Autoral',
    description: 'Cada peça é desenhada para refletir a autenticidade e a essência da cultura angolana.'
  },
  {
    icon: <ShieldCheck className="text-accent-orange" size={24} />,
    title: 'Qualidade Premium',
    description: 'Materiais selecionados e acabamento manual que garantem durabilidade e sofisticação.'
  },
  {
    icon: <Truck className="text-accent-orange" size={24} />,
    title: 'Entrega Segura',
    description: 'Enviamos para todo o país com embalagens cuidadosas para proteger sua nova peça favorita.'
  },
  {
    icon: <Clock className="text-accent-orange" size={24} />,
    title: 'Atendimento Ágil',
    description: 'Suporte personalizado via WhatsApp para tirar todas as suas dúvidas rapidamente.'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-primary/5 border-y border-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-4 p-4 rounded-full bg-secondary shadow-sm transition-transform group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-primary">{feature.title}</h3>
              <p className="text-sm text-primary/60 leading-relaxed font-sans">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
