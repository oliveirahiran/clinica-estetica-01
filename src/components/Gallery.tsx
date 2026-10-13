import React, { useState } from 'react';
import { X, ZoomIn, Sparkles } from 'lucide-react';
import { GalleryItem } from '../types/clinic';

interface GalleryProps {
  photos: GalleryItem[];
}

export const Gallery: React.FC<GalleryProps> = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  return (
    <section id="galeria" className="py-14 sm:py-20 bg-[#FAF7F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#5E7A6B] block mb-2">
            Ambiente & Estrutura
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2B2B] font-normal tracking-tight mb-3">
            O Espaço e o Atendimento
          </h2>
          <p className="text-sm sm:text-base text-[#2B2B2B]/70 font-light">
            Conheça cada ambiente projetado para oferecer privacidade, conforto e rigor técnico em biossegurança.
          </p>
        </div>

        {/* 8-Photo Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          {photos.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative cursor-pointer rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-200 border border-[#E8C9C0]/40 shadow-xs hover:shadow-md transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3 sm:p-4 text-white">
                <div className="self-end bg-white/20 backdrop-blur-md p-1.5 rounded-full">
                  <ZoomIn className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#E8C9C0] font-medium block">
                    {item.category}
                  </span>
                  <p className="text-xs sm:text-sm font-medium leading-tight">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ethical Transparency Note */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#2B2B2B]/60 text-center">
          <Sparkles className="w-3.5 h-3.5 text-[#5E7A6B]" />
          <span>Fotografias reais das instalações, salas privativas e protocolos de atendimento.</span>
        </div>

        {/* Image Preview Modal (Lightroom) */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#FAF7F4] rounded-2xl overflow-hidden shadow-2xl border border-[#E8C9C0]/40"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-3 right-3 z-10 bg-white/80 hover:bg-white text-[#2B2B2B] p-2 rounded-full shadow-md transition-colors"
                aria-label="Fechar ampliação"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[16/10] sm:aspect-[16/9] w-full bg-black/10 overflow-hidden">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 sm:p-6 bg-[#FAF7F4] flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-[#E8C9C0]/30">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#5E7A6B] font-semibold block mb-0.5">
                    {selectedPhoto.category}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#2B2B2B] font-medium">
                    {selectedPhoto.title}
                  </h3>
                  <p className="text-xs text-[#2B2B2B]/70 mt-1">
                    {selectedPhoto.alt}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
