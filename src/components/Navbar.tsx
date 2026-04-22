import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Facebook, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import { BRAND_INFO } from '../constants';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Catálogo', href: '#catalogo' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav 
      id="navbar" 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-secondary/95 backdrop-blur-md border-primary/10 py-3' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex flex-col group">
              <h1 className="text-xl md:text-2xl font-serif tracking-widest font-semibold text-primary transition-colors">
                MONA <span className="text-accent-orange italic">D’AMI</span>
              </h1>
              <span className="text-[8px] tracking-[0.3em] uppercase opacity-70 -mt-1 text-primary hidden sm:block">
                African contemporary elegance
              </span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[11px] uppercase font-bold tracking-widest text-primary/80 hover:text-accent-orange transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-6 border-l border-primary/10 pl-10">
              <ThemeToggle />
              <div className="flex space-x-4">
                <a href={BRAND_INFO.instagram} target="_blank" rel="noreferrer" className="text-primary/60 hover:text-accent-orange transition-colors">
                  <Instagram size={18} />
                </a>
                <a href={BRAND_INFO.facebook} target="_blank" rel="noreferrer" className="text-primary/60 hover:text-accent-orange transition-colors">
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              id="mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-accent-orange p-1"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-secondary border-b border-primary/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-4 text-xs font-bold uppercase tracking-[0.2em] text-primary hover:text-accent-orange border-b border-primary/5"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex justify-center pt-6 space-x-8">
                <a href={BRAND_INFO.instagram} target="_blank" rel="noreferrer" className="text-primary/60">
                  <Instagram size={20} />
                </a>
                <a href={BRAND_INFO.facebook} target="_blank" rel="noreferrer" className="text-primary/60">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
