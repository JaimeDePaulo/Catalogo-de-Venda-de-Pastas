import { motion } from 'motion/react';
import { Menu, X, ShoppingBag, Instagram } from 'lucide-react';
import { useState } from 'react';
import { BRAND_INFO } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Catálogo', href: '#catalogo' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 bg-secondary/80 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <div className="flex flex-col">
              <h1 className="text-2xl font-serif tracking-widest font-semibold text-primary">
                MONA D’AMI
              </h1>
              <span className="text-[9px] tracking-[0.3em] uppercase opacity-70 -mt-1 text-primary">
                African contemporary elegance
              </span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-primary/80 hover:text-accent-orange transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={BRAND_INFO.instagram} 
              target="_blank" 
              rel="noreferrer"
              className="text-primary/80 hover:text-accent-orange transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              id="mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-accent-orange"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-secondary border-b border-primary/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-primary hover:text-accent-orange border-b border-primary/5"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
