import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { ClinicConfig } from '../types/clinic';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface FloatingWhatsAppProps {
  config: ClinicConfig;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ config }) => {
  const [showTooltip, setShowTooltip] = useState(true);
  const whatsappUrl = getWhatsAppUrl(config.whatsappNumber, config.whatsappDefaultMessage);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 flex items-center gap-3 max-w-[calc(100vw-2rem)]">
      {/* Speech bubble / Tooltip for fast context */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#FAF7F4] text-[#2B2B2B] text-xs font-medium py-2 px-3.5 rounded-full shadow-lg border border-[#E8C9C0] animate-in fade-in slide-in-from-right duration-300">
          <span>Agende sua avaliação</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowTooltip(false);
            }}
            className="text-[#2B2B2B]/40 hover:text-[#2B2B2B] p-0.5 rounded-full"
            aria-label="Fechar aviso"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir conversa no WhatsApp para agendar avaliação"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#20be5b] active:scale-95 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        {/* Subtle breathing ripple */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none group-hover:hidden" />
        
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white relative z-10" />
      </a>
    </div>
  );
};
