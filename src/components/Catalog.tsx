import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS, Product } from '../constants';
import ProductCard from './ProductCard';
import ProductDetailModal from './ProductDetailModal';

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = ['Todos', 'Pastas', 'Mochilas', 'Acessórios'];

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'Todos') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="catalogo" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-accent-orange font-bold mb-4 block">
            Seleção Exclusiva
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tighter">Nossa Coleção</h2>
          <div className="h-0.5 w-12 bg-accent-orange mx-auto mb-8" />
          <p className="text-primary/60 max-w-xl mx-auto italic transition-colors leading-relaxed">
            "Curadoria artesanal pensada para mulheres que não abrem mão da elegância e da personalidade."
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center mb-12 gap-8 text-xs uppercase tracking-widest font-bold">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`pb-1 transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'border-b-2 border-accent-orange text-accent-orange'
                  : 'text-primary/40 hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <ProductCard 
                  product={product} 
                  onViewDetails={setSelectedProduct} 
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProductDetailModal 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </section>
  );
}
