import React from 'react';
import { Award, UserCheck, Shield } from 'lucide-react';
import { ClinicConfig } from '../types/clinic';
import consultImg from '../assets/images/gallery_consult_desk_1791892998696.jpg';

interface AboutProps {
  config: ClinicConfig;
}

export const About: React.FC<AboutProps> = ({ config }) => {
  return (
    <section id="sobre" className="py-14 sm:py-20 bg-[#FAF7F4]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white/80 rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#E8C9C0]/50 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Consultation Desk Picture */}
            <div className="md:col-span-5">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-square border border-[#E8C9C0]/40 shadow-xs">
                <img
                  src={consultImg}
                  alt={`Consultório de atendimento com a responsável técnica ${config.practitionerName}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* About 2 Sentences & Credentials */}
            <div className="md:col-span-7 flex flex-col justify-center">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#5E7A6B] block mb-2">
                Responsabilidade & Propósito
              </span>
              
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2B2B2B] font-medium tracking-tight mb-4">
                Sobre a {config.name}
              </h2>

              {/* Exact 2 Sentences per Structure Specification */}
              <div className="space-y-3 text-sm sm:text-base text-[#2B2B2B]/80 font-light leading-relaxed mb-6">
                <p>
                  Com mais de 8 anos dedicados ao cuidado estético consciente e seguro em {config.city}, a clínica prioriza a individualidade biológica de cada paciente por meio de anamnese detalhada e tecnologia certificada.
                </p>
                <p>
                  O corpo clínico é liderado pela <strong className="font-semibold text-[#2B2B2B]">{config.practitionerName}</strong> ({config.practitionerTitle} · Registro {config.practitionerCouncil}), assegurando atendimento baseado na ética em saúde, conforto e naturalidade em cada procedimento.
                </p>
              </div>

              {/* Ethics and Professional Pillars */}
              <div className="pt-4 border-t border-[#E8C9C0]/30 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#2B2B2B]/75">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-[#5E7A6B] shrink-0" />
                  <span>Avaliação prévia individual</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#5E7A6B] shrink-0" />
                  <span>Biossegurança certificada</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#5E7A6B] shrink-0" />
                  <span>{config.practitionerCouncil}</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
