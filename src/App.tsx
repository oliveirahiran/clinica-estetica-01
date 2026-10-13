import React, { useState } from 'react';
import { initialClinicConfig, clinicServices, galleryPhotos, googleReviews } from './data/clinicData';
import { ClinicConfig } from './types/clinic';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { ClinicConfigModal } from './components/ClinicConfigModal';

export default function App() {
  const [config, setConfig] = useState<ClinicConfig>(initialClinicConfig);

  return (
    <div className="min-h-screen bg-[#FAF7F4] text-[#2B2B2B] flex flex-col font-sans selection:bg-[#E8C9C0] selection:text-[#2B2B2B]">
      {/* 0. Clean Top Bar Contract Navigation */}
      <Header config={config} />

      <main className="flex-1">
        {/* 1. Topo (Hero): Nome, Linha clara com Cidade e Especialidade, Botão WhatsApp verde, Foto de ambiente */}
        <Hero config={config} />

        {/* 2. Serviços: 4 a 6 blocos com foto, nome do serviço e uma linha de explicação */}
        <Services config={config} services={clinicServices} />

        {/* 3. Galeria do espaço e do atendimento: 6 a 8 fotos reais, sem antes e depois */}
        <Gallery photos={galleryPhotos} />

        {/* 4. Depoimentos: 3 avaliações formato Google Meu Negócio */}
        <Testimonials reviews={googleReviews} />

        {/* 5. Sobre: 2 frases sobre tempo de mercado, profissional responsável e abordagem */}
        <About config={config} />

        {/* 6. Contato: Mapa embutido, endereço, horários (com sábado), telefone clicável e WhatsApp */}
        <Contact config={config} />
      </main>

      {/* Rodapé com nome da clínica, CNPJ, responsável técnico, conselho e aviso regulatório */}
      <Footer config={config} />

      {/* 7. Botão flutuante fixo no canto inferior direito com mensagem pré-preenchida */}
      <FloatingWhatsApp config={config} />

      {/* Painel interativo discreto para testar/trocar dados para qualquer outra clínica */}
      <ClinicConfigModal config={config} onUpdateConfig={setConfig} />
    </div>
  );
}
