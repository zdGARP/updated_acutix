'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const projects = [
  { id: 1, productId: 'ferticare', title: 'FertiCare', image: '/Products/ferticare-ascas-dashboard.png', alt: 'ASCA fertility clinic dashboard showing billing totals and administrative controls', caption: 'ASCA dashboard preview', category: 'Fertility & Women\'s Health' },
  { id: 2, productId: 'gym-pad', title: 'GymPad', image: '/Products/gympad-fitness-illustration.png', alt: 'Fitness website artwork showing gym equipment and a training promotion', caption: 'Illustrative fitness artwork, not a product interface', category: 'Smart Fitness Management' },
  { id: 3, productId: 'motor-consult', title: 'MotorConsult', image: '/Products/motorconsult-development-illustration.jpg', alt: 'Illustrative photo of a laptop displaying software code in a work setting', caption: 'Illustrative software-development image, not a product interface', category: 'Motor Insurance Workflows' },
  { id: 4, productId: 'box-care', title: 'BoxCare', image: '/Products/boxcare-development-illustration.jpg', alt: 'Illustrative image of a software development workspace with code on multiple screens', caption: 'Illustrative software-development image, not a product interface', category: 'CRM & E-Commerce for Packaging' },
  { id: 5, productId: 'clinic-cms', title: 'Clinic CMS', image: '/Products/clinic-cms-development-illustration.jpg', alt: 'Illustrative photo of a person working at a desk with software on multiple screens', caption: 'Illustrative software-development image, not a product interface', category: 'General Clinic Administration' },
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Product Portfolio</h2>
            <p className="text-gray-400 max-w-xl">Explore the product categories and workflows Acutix lists for businesses.</p>
          </div>
          <div className="flex gap-4 mt-6 md:mt-0">
            <button onClick={prev} className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0A1230]/30 text-[#0A1230] transition-colors hover:border-[#FFAA55] hover:bg-[#FFAA55] focus:outline-none focus:ring-2 focus:ring-[#FFAA55]">
              <ChevronLeft />
            </button>
            <button onClick={next} className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0A1230]/30 text-[#0A1230] transition-colors hover:border-[#FFAA55] hover:bg-[#FFAA55] focus:outline-none focus:ring-2 focus:ring-[#FFAA55]">
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
                alt={projects[index].alt}
                fill
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />
              
              <div className="showcase-image-overlay absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent z-10 opacity-90"></div>
              
              <div className="showcase-copy absolute bottom-0 left-0 z-20 flex w-full flex-col justify-between p-8 md:flex-row md:items-end md:p-12">
                <div>
                  <span className="showcase-category mb-4 inline-block rounded-full border border-[#FFAA55]/60 bg-[#0A1230]/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#FFAA55]">
                    {projects[index].category}
                  </span>
                  <h3 className="showcase-title mb-2 text-2xl font-bold text-white md:text-4xl">{projects[index].title}</h3>
                  <p className="showcase-caption text-sm text-white/85">{projects[index].caption}</p>
                </div>
                <a href={`/products#${projects[index].productId}`} className="mt-6 w-fit rounded-lg bg-[#FFAA55] px-6 py-3 font-bold text-[#111111] transition-colors hover:bg-white md:mt-0">
                  Explore product
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Progress Indicators */}
          <div className="absolute bottom-6 right-12 z-30 flex gap-2 hidden md:flex">
            {projects.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setIndex(idx)}
                className={`h-1 w-12 rounded-full transition-all duration-300 ${idx === index ? 'bg-[#FFAA55]' : 'bg-white/55 hover:bg-white'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
