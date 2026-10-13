import React from 'react';
import { MapPin, Clock, Phone, MessageCircle, Navigation, ExternalLink } from 'lucide-react';
import { ClinicConfig } from '../types/clinic';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface ContactProps {
  config: ClinicConfig;
}

export const Contact: React.FC<ContactProps> = ({ config }) => {
  const whatsappUrl = getWhatsAppUrl(config.whatsappNumber, config.whatsappDefaultMessage);
  const cleanPhone = config.phoneDisplay.replace(/\D/g, '');

  return (
    <section id="contato" className="py-14 sm:py-20 bg-white/70 border-t border-[#E8C9C0]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#5E7A6B] block mb-2">
            Localização & Agendamento
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2B2B] font-normal tracking-tight mb-3">
            Onde Estamos & Horários
          </h2>
          <p className="text-sm sm:text-base text-[#2B2B2B]/70 font-light">
            Fácil acesso em {config.neighborhood}, com estacionamento e ambiente reservado para sua tranquilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Information & Action Cards (Left column on desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address Card */}
            <div className="bg-[#FAF7F4] p-6 rounded-2xl border border-[#E8C9C0]/50 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#5E7A6B]/15 text-[#5E7A6B] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#2B2B2B] mb-1">
                    Endereço
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2B2B2B]/75 leading-relaxed font-light mb-3">
                    {config.addressFull}
                  </p>
                  <a
                    href={config.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5E7A6B] hover:text-[#25D366] transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Como chegar (Abrir no GPS / Maps)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-[#FAF7F4] p-6 rounded-2xl border border-[#E8C9C0]/50 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#5E7A6B]/15 text-[#5E7A6B] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-[#2B2B2B] mb-2">
                    Horário de Atendimento
                  </h3>
                  <div className="space-y-1.5 text-xs sm:text-sm text-[#2B2B2B]/75 font-light">
                    <div className="flex justify-between items-center py-0.5 border-b border-[#E8C9C0]/20">
                      <span>Segunda a Sexta</span>
                      <span className="font-medium text-[#2B2B2B]">09h às 19h</span>
                    </div>
                    <div className="flex justify-between items-center py-0.5 border-b border-[#E8C9C0]/20">
                      <span className="font-medium text-[#5E7A6B]">Sábado</span>
                      <span className="font-medium text-[#2B2B2B]">09h às 14h</span>
                    </div>
                    <div className="flex justify-between items-center py-0.5 text-[#2B2B2B]/50">
                      <span>Domingo e Feriados</span>
                      <span>Fechado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Actions: Phone and WhatsApp */}
            <div className="bg-[#FAF7F4] p-6 rounded-2xl border border-[#E8C9C0]/50 shadow-xs space-y-4">
              {/* Clickable Phone */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#5E7A6B]/15 text-[#5E7A6B] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#2B2B2B]/60 block">Telefone direto</span>
                    <a
                      href={`tel:${cleanPhone}`}
                      className="text-sm font-semibold text-[#2B2B2B] hover:text-[#5E7A6B] transition-colors"
                    >
                      {config.phoneDisplay}
                    </a>
                  </div>
                </div>
                <a
                  href={`tel:${cleanPhone}`}
                  className="text-xs text-[#5E7A6B] font-medium hover:underline"
                >
                  Ligar agora
                </a>
              </div>

              {/* Primary WhatsApp Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-sm sm:text-base py-3.5 px-6 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.99]"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Embedded Google Map */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="w-full h-full min-h-[360px] lg:min-h-[460px] rounded-2xl overflow-hidden border border-[#E8C9C0]/50 shadow-xs bg-neutral-100 relative">
              <iframe
                title={`Mapa de localização da ${config.name}`}
                src={config.googleMapsEmbedUrl}
                className="w-full h-full border-0 absolute inset-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Overlay pin link for fallback/quick navigation */}
              <div className="absolute bottom-3 left-3 right-3 sm:right-auto bg-[#FAF7F4]/95 backdrop-blur-md px-3.5 py-2 rounded-xl text-xs text-[#2B2B2B] border border-[#E8C9C0]/50 shadow-md flex items-center justify-between gap-3">
                <span className="truncate max-w-[240px] font-medium">{config.addressShort}</span>
                <a
                  href={config.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5E7A6B] font-semibold flex items-center gap-1 shrink-0 hover:underline"
                >
                  Rotas <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
