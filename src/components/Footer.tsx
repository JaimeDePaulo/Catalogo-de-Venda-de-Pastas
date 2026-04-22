import { Instagram, Facebook, Mail, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-primary text-secondary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">
              MONA <span className="text-accent-orange italic">D’AMI</span>
            </h2>
            <p className="text-secondary/70 max-w-md mb-8 italic">
              {BRAND_INFO.slogan}
            </p>
            <div className="flex space-x-6">
              <a href={BRAND_INFO.instagram} className="hover:text-accent-orange transition-colors" target="_blank" rel="noreferrer">
                <Instagram size={24} />
              </a>
              <a href={BRAND_INFO.facebook} className="hover:text-accent-orange transition-colors" target="_blank" rel="noreferrer">
                <Facebook size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-accent-orange mb-6">Navegação</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" className="hover:text-accent-orange transition-colors">Início</a></li>
              <li><a href="#catalogo" className="hover:text-accent-orange transition-colors">Catálogo</a></li>
              <li><a href="#sobre" className="hover:text-accent-orange transition-colors">Sobre</a></li>
              <li><a href="#contato" className="hover:text-accent-orange transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-accent-orange mb-6">Atendimento</h3>
            <ul className="space-y-4 text-sm text-secondary/80">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent-orange mt-1 flex-shrink-0" />
                <span>{BRAND_INFO.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent-orange" />
                <span>contato@monadami.com</span>
              </li>
              <li className="pt-2">
                <a 
                  href={BRAND_INFO.websiteAmi} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-xs uppercase font-bold tracking-widest text-accent-orange hover:underline"
                >
                  Visitar Site da AMI
                </a>
              </li>
              <li className="pt-4">
                <p className="text-xs uppercase font-bold tracking-tighter text-accent-orange mb-2">WhatsApp</p>
                <p className="text-lg font-bold">{BRAND_INFO.whatsapp}</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6 uppercase tracking-[0.2em] font-bold text-[10px] text-secondary/60">
            <a href="#" className="hover:text-accent-orange transition-colors">Instagram</a>
            <a href="#" className="hover:text-accent-orange transition-colors">Facebook</a>
            <a href="#" className="hover:text-accent-orange transition-colors">Pinterest</a>
          </div>
          <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-secondary/60">
            <span className="w-2 h-2 rounded-full bg-accent-orange animate-pulse"></span> 
            Atendimento Online
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-secondary/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] uppercase font-bold tracking-[0.3em] text-secondary/30">
          <div>
            <p>© {currentYear} Mona D’Ami Accessories. Todos os direitos reservados.</p>
            <p className="mt-2">Autor: Jaime de Paulo</p>
          </div>
          <p>Feito com ❤️ & Inspiração Africana</p>
        </div>
      </div>
    </footer>
  );
}
