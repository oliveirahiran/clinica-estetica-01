import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { ClinicConfig, ServiceItem } from '../types/clinic';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface ServicesProps {
  config: ClinicConfig;
  services: ServiceItem[];
}

export const Services: React.FC<ServicesProps> = ({ config, services }) => {
  return (
    <section id="servicos" className="py-14 sm:py-20 bg-white/70 border-y border-[#E8C9C0]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#5E7A6B] block mb-2">
            Procedimentos & Cuidado
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2B2B] font-normal tracking-tight mb-3">
            Nossos Serviços
          </h2>
          <p className="text-sm sm:text-base text-[#2B2B2B]/70 font-light">
            Protocolos planejados conforme a necessidade de cada paciente, executados com técnica e atenção integral.
          </p>
        </div>

        {/* 4 to 6 Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => {
            const serviceWhatsappUrl = getWhatsAppUrl(
              config.whatsappNumber,
              `Olá! Vi o site e gostaria de agendar uma avaliação para ${service.name}.`
            );

            return (
              <div
                key={service.id}
                className="group flex flex-col bg-[#FAF7F4] rounded-2xl overflow-hidden border border-[#E8C9C0]/40 hover:border-[#5E7A6B]/50 transition-all duration-300 hover:shadow-md"
              >
                {/* Photo */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF7F4]">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#FAF7F4]/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-medium text-[#5E7A6B] border border-[#E8C9C0]/40">
                    {service.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#2B2B2B] font-medium mb-2 group-hover:text-[#5E7A6B] transition-colors">
                      {service.name}
                    </h3>
                    {/* Exactly 1 line of explanation per requirement */}
                    <p className="text-xs sm:text-sm text-[#2B2B2B]/75 leading-relaxed font-light line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  {/* Single Action Button per Service */}
                  <div className="pt-5 mt-4 border-t border-[#E8C9C0]/30">
                    <a
                      href={serviceWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between w-full text-xs font-semibold text-[#5E7A6B] hover:text-[#25D366] transition-colors py-1 group/btn"
                    >
                      <span className="flex items-center gap-1.5">
                        <MessageCircle className="w-3.5 h-3.5" />
                        Agendar este procedimento
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 transform transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Evaluation CTA under services */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#2B2B2B]/60 mb-3">
            Em dúvida sobre o procedimento mais indicado para o seu objetivo?
          </p>
          <a
            href={getWhatsAppUrl(config.whatsappNumber, "Olá! Gostaria de conversar para entender qual procedimento é ideal para mim.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#2B2B2B] hover:text-[#5E7A6B] underline underline-offset-4 decoration-[#E8C9C0] hover:decoration-[#5E7A6B] transition-all"
          >
            Fale conosco e agende uma conversa de avaliação
          </a>
        </div>

      </div>
    </section>
  );
};
