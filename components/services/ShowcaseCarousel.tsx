'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const projects = [
  { id: 1, title: 'FertiCare', image: '/ascas.png', category: 'Fertility & Women\'s Health' },
  { id: 2, title: 'GymPad', image: '/fithub.png', category: 'Smart Fitness Management' },
  { id: 3, title: 'MotorConsult', image: '/02.jpg', category: 'Insurance & Vehicle Consulting' },
  { id: 4, title: 'BoxCare', image: '/03.jpg', category: 'CRM & E-Commerce for Packaging' },
  { id: 5, title: 'Clinic CMS', image: '/01.jpg', category: 'Efficiency & Patient Care' },
];

export default function ShowcaseCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % projects.length);
  const prev = () => setIndex((i) => (i - 1 + projects.length) % projects.length);

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-gray-950 relative border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Project Showcase</h2>
            <p className="text-gray-400 max-w-xl">A glimpse into the digital solutions we&apos;ve crafted for our enterprise clients.</p>
          </div>
          <div className="flex gap-4 mt-6 md:mt-0">
            <button onClick={prev} className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-white hover:bg-cyan-500 hover:border-cyan-500 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500">
              <ChevronLeft />
            </button>
            <button onClick={next} className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-white hover:bg-cyan-500 hover:border-cyan-500 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500">
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl aspect-[4/3] md:aspect-[21/9] bg-gray-900 border border-white/10 group shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex items-center justify-center bg-gray-800"
            >
              <Image
                src={projects[index].image}
                alt={projects[index].title}
                fill
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent z-10 opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 w-full flex flex-col md:flex-row md:items-end justify-between">
                <div>
                  <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase rounded-full mb-4 border border-cyan-500/30">
                    {projects[index].category}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">{projects[index].title}</h3>
                </div>
                <button className="mt-6 md:mt-0 px-6 py-3 bg-white text-gray-950 font-bold rounded-xl hover:bg-gray-200 transition-colors w-fit">
                  View Case Study
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Progress Indicators */}
          <div className="absolute bottom-6 right-12 z-30 flex gap-2 hidden md:flex">
            {projects.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setIndex(idx)}
                className={`w-12 h-1 rounded-full transition-all duration-300 ${idx === index ? 'bg-cyan-500' : 'bg-gray-600 hover:bg-gray-400'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
