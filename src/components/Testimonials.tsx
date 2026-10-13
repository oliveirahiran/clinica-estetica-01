import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { TestimonialItem } from '../types/clinic';

interface TestimonialsProps {
  reviews: TestimonialItem[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ reviews }) => {
  return (
    <section id="depoimentos" className="py-14 sm:py-20 bg-white/70 border-y border-[#E8C9C0]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1 text-amber-500 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2B2B] font-normal tracking-tight mb-2">
            Avaliações de Clientes
          </h2>
          <p className="text-xs sm:text-sm text-[#2B2B2B]/65 font-light">
            Depoimentos verificados no formato de avaliações do Google Meu Negócio.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => {
            const initial = review.author.charAt(0).toUpperCase();

            return (
              <div
                key={review.id}
                className="bg-[#FAF7F4] p-6 rounded-2xl border border-[#E8C9C0]/50 shadow-xs flex flex-col justify-between"
              >
                <div>
                  {/* Google Review Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#E8C9C0] text-[#2B2B2B] font-serif font-bold flex items-center justify-center text-base shrink-0">
                      {initial}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-semibold text-[#2B2B2B]">
                          {review.author}
                        </span>
                        {review.verified && (
                          <span title="Cliente verificado" className="inline-flex">
                            <CheckCircle className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-[#2B2B2B]/50 block">
                        {review.timeAgo}
                      </span>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-0.5 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Review Short Text */}
                  <p className="text-xs sm:text-sm text-[#2B2B2B]/80 leading-relaxed font-light italic">
                    "{review.text}"
                  </p>
                </div>

                {/* Google Badge Footer */}
                <div className="mt-5 pt-3 border-t border-[#E8C9C0]/30 flex items-center justify-between text-[11px] text-[#2B2B2B]/50">
                  <span className="flex items-center gap-1">
                    <span className="font-semibold text-blue-600">G</span>oogle Review
                  </span>
                  <span>Experiência real</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer per Health Public Compliance */}
        <p className="mt-6 text-center text-[11px] text-[#2B2B2B]/50">
          * Avaliações espontâneas de pacientes. Cada organismo responde de forma única e tratamentos estéticos dependem de avaliação prévia individualizada.
        </p>

      </div>
    </section>
  );
};
