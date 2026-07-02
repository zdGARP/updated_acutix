'use client';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

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
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none"></div>

      <div className="text-center mb-16 relative z-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Client Testimonials</h2>
        <p className="text-gray-400">Hear from the enterprises that trust our solutions.</p>
      </div>

      <div className="flex relative w-full overflow-hidden">
        <motion.div 
          className="flex space-x-6 shrink-0 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 50 }}
        >
          {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="w-80 md:w-96 p-8 bg-gray-900/60 backdrop-blur-xl border border-white/5 rounded-3xl shrink-0 hover:border-cyan-500/30 transition-colors shadow-lg">
              <div className="flex text-yellow-500 mb-4">
                {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm italic">&quot;{t.feedback}&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h5 className="text-white font-semibold text-sm">{t.name}</h5>
                  <span className="text-cyan-500 text-xs">{t.company}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
