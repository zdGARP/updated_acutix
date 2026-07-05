'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function MarqueeLogos() {
  const partners = [
    { name: 'VISTAS', logo: '/logo_vistas.png' },
    { name: 'SRM Valliammai', logo: '/logo_srmv.png' },
    { name: 'SAEC Chennai', logo: '/logo_saec.png' },
    { name: 'Jeppiaar IT', logo: '/logo_jit.png' },
    { name: 'FertiCare SaaS', isSaaS: true, text: '⚡ FertiCare' },
    { name: 'GymPad SaaS', isSaaS: true, text: '🏋️ GymPad' },
    { name: 'MotorConsult CRM', isSaaS: true, text: '🚗 MotorConsult' },
    { name: 'BoxCare E-comm', isSaaS: true, text: '📦 BoxCare' },
  ];

  // Duplicate the array to ensure seamless looping
  const marqueeItems = [...partners, ...partners, ...partners];

  return (
    <section className="relative z-10 py-12 bg-black/40 border-y border-white/5 overflow-hidden w-full">
      {/* Absolute overlay fade left & right for premium Stripe-like look */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-gray-950 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-gray-950 to-transparent z-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-6">
        <p className="text-[10px] font-mono tracking-widest text-center text-gray-500 uppercase">
          Ecosystem Integrations & SaaS Incubation Partners
        </p>
      </div>

      <div className="flex w-full overflow-hidden relative">
        <motion.div
          className="flex space-x-12 items-center whitespace-nowrap min-w-max px-6"
          animate={{ x: [0, -1000] }}
          transition={{
            ease: 'linear',
            duration: 35,
            repeat: Infinity,
          }}
        >
          {marqueeItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-4 bg-white/5 border border-white/10 hover:border-cyan-500/20 hover:bg-white/10 rounded-2xl px-6 py-3.5 backdrop-blur-md transition-all duration-300 group shadow-md"
            >
              {item.isSaaS ? (
                <span className="font-mono text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:scale-105 transition-transform duration-300">
                  {item.text}
                </span>
              ) : (
                <>
                  <div className="relative w-8 h-8 rounded-full overflow-hidden bg-white p-0.5 flex-shrink-0">
                    <Image
                      src={item.logo || ''}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                    {item.name}
                  </span>
                </>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
