import React from 'react';
import { ClinicConfig } from '../types/clinic';
import { ShieldCheck } from 'lucide-react';

interface FooterProps {
  config: ClinicConfig;
}

export const Footer: React.FC<FooterProps> = ({ config }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2B2B2B] text-[#FAF7F4] pt-12 pb-10 border-t border-[#E8C9C0]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer: Clinic Wordmark, Responsible Practitioner & Contact Recap */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          
          <div className="md:col-span-5 space-y-3">
            <span className="font-serif text-2xl font-medium tracking-tight text-[#FAF7F4] block">
              {config.name}
            </span>
            <p className="text-xs text-[#FAF7F4]/70 leading-relaxed font-light max-w-sm">
              Cuidado estético com foco em segurança, naturalidade e respeito à individualidade biológica em {config.city}.
            </p>
          </div>

          <div className="md:col-span-4 space-y-2 text-xs text-[#FAF7F4]/80">
            <span className="font-semibold text-[#FAF7F4] uppercase tracking-wider text-[11px] block">
              Responsabilidade Técnica
            </span>
            <p className="font-medium text-[#FAF7F4]">
              {config.practitionerName}
            </p>
            <p className="text-[#FAF7F4]/60">
              {config.practitionerTitle} · {config.practitionerCouncil}
            </p>
            <p className="text-[#FAF7F4]/60">
              CNPJ: {config.cnpj}
            </p>
          </div>

          <div className="md:col-span-3 space-y-2 text-xs text-[#FAF7F4]/80">
            <span className="font-semibold text-[#FAF7F4] uppercase tracking-wider text-[11px] block">
              Localização
            </span>
            <p className="text-[#FAF7F4]/70">
              {config.addressShort}
            </p>
            <p className="text-[#FAF7F4]/70">
              Telefone: {config.phoneDisplay}
            </p>
          </div>

        </div>

        {/* Health Advertising Regulatory Notice */}
        <div className="py-6 border-b border-white/10 text-[11px] text-[#FAF7F4]/60 leading-relaxed space-y-2">
          <div className="flex items-center gap-2 text-[#E8C9C0]">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span className="font-semibold uppercase tracking-wider text-[10px]">Aviso Regulatório de Saúde</span>
          </div>
          <p>
            Este conteúdo possui finalidade exclusivamente informativa e educacional. Em cumprimento às normas dos conselhos profissionais de saúde e da legislação brasileira (Código de Ética Profissional e CDC), informamos que procedimentos estéticos não configuram promessa ou garantia de resultados definitivos, sendo indispensável a realização prévia de avaliação e anamnese clínica individualizada.
          </p>
        </div>

        {/* Bottom Copyright & Zero-slop legal mirror */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F4]/50">
          <div>
            © {currentYear} {config.name}. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Atendimento com horário marcado</span>
            <span aria-hidden="true">·</span>
            <span>Biossegurança e Ética Médica</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
