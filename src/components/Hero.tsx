import React from 'react';
import { MessageCircle, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { ClinicConfig } from '../types/clinic';
import { getWhatsAppUrl } from '../utils/whatsapp';
import heroImg from '../assets/images/hero_aurea_clinic_1791892905436.jpg';

interface HeroProps {
  config: ClinicConfig;
}

export const Hero: React.FC<HeroProps> = ({ config }) => {
  const whatsappUrl = getWhatsAppUrl(config.whatsappNumber, config.whatsappDefaultMessage);

  return (
    <section id="topo" className="relative pt-6 sm:pt-10 pb-12 sm:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Text & Conversion Column */}
          <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left">
            
            {/* Location & Specialty Kicker (Unboxed text with dots per anti-slop) */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm font-medium text-[#5E7A6B] mb-3">
              <MapPin className="w-4 h-4 text-[#5E7A6B] shrink-0" />
              <span>Clínica de estética em {config.city}</span>
              <span aria-hidden="true" className="text-[#E8C9C0]">·</span>
              <span className="hidden sm:inline">{config.specialty}</span>
            </div>

            {/* H1 Main Clinic Title */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.12] text-[#2B2B2B] font-normal tracking-tight mb-4 text-balance">
              {config.name}
            </h1>

            {/* Subtitle / Promise-free Value Statement */}
            <p className="text-base sm:text-lg text-[#2B2B2B]/75 leading-relaxed font-light mb-8 max-w-xl mx-auto lg:mx-0">
              Tratamentos estéticos faciais e corporais individualizados em um ambiente calmo, seguro e acolhedor. Agende sua conversa inicial e conheça nosso espaço.
            </p>

            {/* Primary Action Button: Big, High Contrast WhatsApp Green */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 justify-center lg:justify-start">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20be5b] active:scale-[0.98] text-white text-base sm:text-lg font-semibold px-7 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
              >
                <MessageCircle className="w-6 h-6 fill-white shrink-0" />
                <span>Agendar avaliação pelo WhatsApp</span>
              </a>
            </div>

            {/* Zero Friction Clarifications */}
            <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 text-xs text-[#2B2B2B]/60">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#5E7A6B]" />
                Resposta rápida no horário comercial
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#5E7A6B]" />
                Atendimento com horário exclusivo
              </span>
            </div>
          </div>

          {/* Ambience Photo Column */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-[#E8C9C0]/50 aspect-[4/3] sm:aspect-[16/10] bg-[#FAF7F4]">
              <img
                src={heroImg}
                alt={`Ambiente da recepção da ${config.name} em ${config.city}`}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Quiet Photo Caption Badge */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 right-3 sm:right-auto bg-[#FAF7F4]/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg text-xs font-medium text-[#2B2B2B]/90 shadow-sm border border-[#E8C9C0]/30">
                Nosso espaço de recepção e acolhimento
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
