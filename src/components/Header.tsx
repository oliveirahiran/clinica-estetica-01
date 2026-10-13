import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { ClinicConfig } from '../types/clinic';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface HeaderProps {
  config: ClinicConfig;
}

export const Header: React.FC<HeaderProps> = ({ config }) => {
  const whatsappUrl = getWhatsAppUrl(config.whatsappNumber, config.whatsappDefaultMessage);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F4]/95 backdrop-blur-md border-b border-[#E8C9C0]/40 transition-colors w-full">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4 min-w-0">
          {/* Zone 1: Wordmark */}
          <a 
            href="#topo" 
            className="flex flex-col group text-left min-w-0 shrink"
          >
            <span className="font-serif text-lg sm:text-2xl md:text-3xl font-medium tracking-tight text-[#2B2B2B] group-hover:text-[#5E7A6B] transition-colors truncate">
              {config.name}
            </span>
            <span className="text-[10px] sm:text-[11px] tracking-widest uppercase text-[#5E7A6B] font-medium hidden md:block">
              Estética & Bem-Estar
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#2B2B2B]/80">
            <a href="#servicos" className="hover:text-[#5E7A6B] transition-colors whitespace-nowrap">
              Serviços
            </a>
            <a href="#galeria" className="hover:text-[#5E7A6B] transition-colors whitespace-nowrap">
              O Espaço
            </a>
            <a href="#depoimentos" className="hover:text-[#5E7A6B] transition-colors whitespace-nowrap">
              Depoimentos
            </a>
            <a href="#sobre" className="hover:text-[#5E7A6B] transition-colors whitespace-nowrap">
              Sobre Nós
            </a>
            <a href="#contato" className="hover:text-[#5E7A6B] transition-colors whitespace-nowrap">
              Contato & Local
            </a>
          </nav>

          {/* Zone 3: Direct Action */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href={`tel:${config.phoneDisplay.replace(/\D/g, '')}`}
              className="hidden md:inline-flex items-center gap-1.5 text-xs text-[#2B2B2B]/70 hover:text-[#2B2B2B] font-medium px-2 py-1.5 transition-colors"
              title="Ligar para a clínica"
            >
              <Phone className="w-3.5 h-3.5 text-[#5E7A6B]" />
              <span>{config.phoneDisplay}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 sm:py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98] whitespace-nowrap shrink-0"
              title="Agendar pelo WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white shrink-0" />
              <span>
                <span className="hidden sm:inline">Agendar </span>WhatsApp
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
