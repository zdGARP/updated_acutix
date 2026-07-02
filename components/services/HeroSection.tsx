'use client';
import { motion } from 'framer-motion';
import { Cloud, Smartphone, LayoutDashboard, Cpu, Shield, Network } from 'lucide-react';
import { useState } from 'react';

const options = [
  { label: 'Build a Website', id: 'website' },
  { label: 'Build Mobile App', id: 'mobile' },
  { label: 'Hospital Software', id: 'healthcare' },
  { label: 'Cloud Infrastructure', id: 'cloud' },
  { label: 'AI Automation', id: 'ai' },
  { label: 'Improve Security', id: 'security' },
  { label: 'Business Dashboard', id: 'analytics' },
  { label: 'API Integration', id: 'api' },
  { label: 'SaaS Platform', id: 'saas' }
];

export default function HeroSection() {
  const [selectedService, setSelectedService] = useState('');

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setSelectedService(val);
    if (val) {
      const el = document.getElementById(`service-${val}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('ring-4', 'ring-cyan-500', 'ring-opacity-50', 'transition-all', 'duration-500');
        setTimeout(() => {
          el.classList.remove('ring-4', 'ring-cyan-500', 'ring-opacity-50');
        }, 1500);
      }
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gray-950 pt-32 pb-16">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" style={{ backgroundSize: '30px 30px', backgroundImage: 'linear-gradient(to right, #ffffff10 1px, transparent 1px), linear-gradient(to bottom, #ffffff10 1px, transparent 1px)' }}></div>
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-pulse"></div>
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-emerald-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full flex-grow flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Copy */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Digital Solutions</span> That Power Modern Businesses
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              From scalable enterprise software and AI solutions to cloud infrastructure and stunning mobile apps, we engineer the future of your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all"
              >
                Get Free Consultation
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 text-white backdrop-blur-md border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all"
              >
                Explore Services
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side: Animated 3D Illustration */}
          <div className="relative h-[400px] w-full hidden lg:block">
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
            
            {/* Center node */}
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl"
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <Network className="w-12 h-12 text-cyan-400" />
            </motion.div>

            {/* Orbiting nodes */}
            {[
              { icon: Cloud, color: 'text-blue-400', delay: 0, pos: 'top-10 left-10' },
              { icon: Smartphone, color: 'text-purple-400', delay: 1, pos: 'top-20 right-10' },
              { icon: LayoutDashboard, color: 'text-emerald-400', delay: 2, pos: 'bottom-20 right-20' },
              { icon: Cpu, color: 'text-rose-400', delay: 3, pos: 'bottom-10 left-20' },
              { icon: Shield, color: 'text-amber-400', delay: 4, pos: 'top-1/2 -left-10' },
            ].map((node, i) => (
              <motion.div
                key={i}
                className={`absolute ${node.pos} bg-gray-800/80 backdrop-blur-lg border border-white/10 p-4 rounded-xl shadow-xl`}
                animate={{ 
                  y: [-15, 15, -15],
                  x: [-5, 5, -5]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 6, 
                  delay: node.delay,
                  ease: "easeInOut" 
                }}
              >
                <node.icon className={`w-8 h-8 ${node.color}`} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Service Finder */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 max-w-xl mx-auto bg-gray-900/60 backdrop-blur-xl border border-gray-800 p-6 rounded-2xl flex flex-col md:flex-row items-center gap-6"
        >
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-white">Not sure what service you need?</h3>
            <p className="text-gray-400 text-sm">Select your goal and we&apos;ll point you to the right solution.</p>
          </div>
          <div className="w-full md:w-auto relative">
            <select 
              className="w-full appearance-none bg-gray-800 border border-gray-700 text-white px-6 py-3 rounded-xl pr-12 focus:outline-none focus:ring-2 focus:ring-cyan-500 cursor-pointer"
              value={selectedService}
              onChange={handleSelect}
            >
              <option value="" disabled>I want to...</option>
              {options.map(opt => (
                <option key={opt.id} value={opt.id}>{opt.label}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
