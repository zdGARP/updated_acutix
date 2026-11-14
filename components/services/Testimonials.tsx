'use client';
import { Star } from 'lucide-react';
import HorizontalMarquee from '@/components/HorizontalMarquee';

const testimonials = [
  { name: 'Sarah Jenkins', company: 'TechFlow Inc.', rating: 5, feedback: 'The level of professionalism and technical expertise is unmatched. They transformed our legacy systems into a modern cloud architecture flawlessly.' },
  { name: 'David Chen', company: 'HealthPlus Clinics', rating: 5, feedback: 'Our new hospital management software has reduced administrative overhead by 40%. The team was highly responsive and understood HIPAA compliance perfectly.' },
  { name: 'Elena Rodriguez', company: 'RetailEdge', rating: 5, feedback: 'The e-commerce app they built for us drove a 200% increase in mobile sales within the first quarter. Outstanding UI/UX design!' },
  { name: 'Michael Chang', company: 'FinServe Data', rating: 5, feedback: 'The AI analytics dashboard gives us real-time insights we never thought possible. A true game changer for our operations.' },
  { name: 'Rachel Smith', company: 'EduCore', rating: 5, feedback: 'Reliable, secure, and incredibly fast. The student portal they developed handles thousands of concurrent users without breaking a sweat.' }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden border-t border-white/5">
      <div className="testimonial-edge absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none"></div>
      <div className="testimonial-edge absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none"></div>

      <div className="text-center mb-16 relative z-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Client Testimonials</h2>
        <p className="text-gray-400">Hear from the enterprises that trust our solutions.</p>
      </div>

      <div className="relative flex w-full flex-col gap-5">
        {[testimonials.filter((_, index) => index % 2 === 0), testimonials.filter((_, index) => index % 2 === 1)].map((row, rowIndex) => (
          <HorizontalMarquee
            key={rowIndex}
            direction={rowIndex === 0 ? 'left' : 'right'}
            duration={rowIndex === 0 ? '54s' : '60s'}
            label={rowIndex === 0 ? 'Client testimonials, first row' : 'Client testimonials, second row'}
          >
            {row.map((t) => (
              <div key={t.name} className="w-80 shrink-0 rounded-2xl border border-white/10 bg-gray-900/60 p-8 shadow-lg backdrop-blur-xl transition-colors hover:border-[#FFAA55]/70 md:w-96">
                <div className="mb-4 flex text-[#FFAA55]">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mb-6 text-sm italic leading-relaxed text-gray-300">&quot;{t.feedback}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-700 bg-gray-800 text-lg font-bold text-white">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white">{t.name}</h5>
                    <span className="text-xs text-[#FFAA55]">{t.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </HorizontalMarquee>
        ))}
      </div>
    </section>
  );
}
