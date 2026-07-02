'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Maximize, HeadphonesIcon, Users, Clock } from 'lucide-react';

const reasons = [
  { title: 'Secure Architecture', icon: ShieldCheck, desc: 'Enterprise-grade security built into every layer of your application.' },
  { title: 'Agile Development', icon: Zap, desc: 'Iterative approach ensuring flexibility and rapid delivery of features.' },
  { title: 'Scalable Solutions', icon: Maximize, desc: 'Cloud-native architectures that grow effortlessly with your business.' },
  { title: 'Dedicated Support', icon: HeadphonesIcon, desc: '24/7 technical support and maintenance to keep your systems running.' },
  { title: 'Experienced Engineers', icon: Users, desc: 'Top-tier talent with years of experience across multiple tech stacks.' },
  { title: 'Fast Delivery', icon: Clock, desc: 'Optimized workflows to ensure on-time delivery without compromising quality.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-950 relative border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-500/10 blur-[100px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why Choose Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">We don&apos;t just write code; we build digital assets that drive revenue and create lasting impact.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div 
              key={reason.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 bg-gray-900/40 backdrop-blur-md border border-white/5 rounded-3xl hover:border-cyan-500/30 hover:bg-gray-800/50 transition-all duration-300 group shadow-lg"
            >
              <div className="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300 shadow-xl border border-gray-700">
                <reason.icon className="w-7 h-7 text-cyan-400 group-hover:text-emerald-400 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{reason.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
