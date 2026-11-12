'use client';
import { motion } from 'framer-motion';
import { Stethoscope, GraduationCap, Building2, ShoppingBag, Factory, Truck, Home, Landmark } from 'lucide-react';

const industries = [
  { name: 'Healthcare', icon: Stethoscope, color: 'group-hover:text-[#FFAA55]', shadow: 'group-hover:shadow-[0_0_20px_rgba(255,170,85,0.2)]' },
  { name: 'Education', icon: GraduationCap, color: 'group-hover:text-[#FFAA55]', shadow: 'group-hover:shadow-[0_0_20px_rgba(255,170,85,0.2)]' },
  { name: 'Finance', icon: Building2, color: 'group-hover:text-[#FFAA55]', shadow: 'group-hover:shadow-[0_0_20px_rgba(255,170,85,0.2)]' },
  { name: 'Retail', icon: ShoppingBag, color: 'group-hover:text-[#FFAA55]', shadow: 'group-hover:shadow-[0_0_20px_rgba(255,170,85,0.2)]' },
  { name: 'Manufacturing', icon: Factory, color: 'group-hover:text-[#FFAA55]', shadow: 'group-hover:shadow-[0_0_20px_rgba(255,170,85,0.2)]' },
  { name: 'Logistics', icon: Truck, color: 'group-hover:text-[#FFAA55]', shadow: 'group-hover:shadow-[0_0_20px_rgba(255,170,85,0.2)]' },
  { name: 'Real Estate', icon: Home, color: 'group-hover:text-[#FFAA55]', shadow: 'group-hover:shadow-[0_0_20px_rgba(255,170,85,0.2)]' },
  { name: 'Government', icon: Landmark, color: 'group-hover:text-[#FFAA55]', shadow: 'group-hover:shadow-[0_0_20px_rgba(255,170,85,0.2)]' }
];

export default function IndustryExpertise() {
  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Industry Expertise</h2>
          <p className="text-gray-400 max-w-xl mx-auto">We provide specialized digital solutions tailored to the unique challenges of your industry.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {industries.map((ind, i) => (
            <motion.div 
              key={ind.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 md:p-8 bg-gray-900 border border-white/5 rounded-3xl flex flex-col items-center justify-center gap-4 hover:bg-gray-800 transition-all group cursor-pointer shadow-lg"
            >
              <div className={`w-16 h-16 rounded-full bg-gray-950 flex items-center justify-center border border-gray-800 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] ${ind.shadow}`}>
                <ind.icon className={`w-8 h-8 text-gray-500 transition-colors duration-300 ${ind.color}`} />
              </div>
              <h4 className="text-white font-semibold text-center group-hover:text-white transition-colors">{ind.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
