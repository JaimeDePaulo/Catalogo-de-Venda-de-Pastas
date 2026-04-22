import { WhatsAppLink } from '../utils/whatsapp';
import { Product } from '../constants';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export default function ProductCard({ product, onViewDetails }: ProductCardProps) {
  return (
    <div className="group bg-secondary/30 backdrop-blur-sm rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all border border-primary/10">
      <div 
        className="aspect-[4/5] overflow-hidden cursor-pointer relative"
        onClick={() => onViewDetails(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
        <div className="absolute bottom-4 left-4 bg-secondary/90 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          <p className="text-xs font-bold text-primary uppercase tracking-tighter">Espiar</p>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex flex-col mb-4">
          <h3 className="text-xl font-serif text-primary leading-tight mb-1">{product.name}</h3>
          <p className="text-xs text-primary/60 font-sans tracking-wide">{product.category} artesanal</p>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg text-primary">{product.price.toLocaleString('pt-AO')} Kzs</span>
          <a
            href={WhatsAppLink(product.name)}
            target="_blank"
            rel="noreferrer"
            className="text-[10px] uppercase font-bold text-accent-orange border border-accent-orange px-4 py-2 hover:bg-accent-orange hover:text-white transition-all rounded-none"
          >
            Comprar WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
