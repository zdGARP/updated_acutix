'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Award } from 'lucide-react';

interface Story {
  name: string;
  role: string;
  college: string;
  avatarText: string;
  quote: string;
  project: string;
  color: string;
}

export default function SuccessStories() {
  const [activeIdx, setActiveIdx] = useState(0);

  const stories: Story[] = [
    {
      name: 'Abishek R.',
      role: 'Full Stack Engineer at Acutix',
      college: 'Jeppiaar Institute of Technology',
      avatarText: 'AR',
      quote: "The live SaaS coding immersion bootcamp at Jeppiaar was my launchpad. Building real modules for FertiCare during my final year helped me develop commercial-grade React Native patterns. Now, I work full-time leading core mobile sprints.",
      project: 'FertiCare Clinic App Module',
      color: '#f59e0b', // Amber
    },
    {
      name: 'Priyanka S.',
      role: 'Data Analyst Associate',
      college: 'Vels University (VISTAS)',
      avatarText: 'PS',
      quote: "Co-venturing in the MedNexus AI Hackathon gave me access to real dataset outlines. Developing pilot IVF diagnostics models alongside senior specialists from Acutix helped me map clinical data rules effectively. It was hands-on research at its best.",
      project: 'IVF Predictive AI Model',
      color: '#06b6d4', // Cyan
    },
    {
      name: 'Sanjay Kumar',
      role: 'Cloud Operations Consultant',
      college: 'SRM Valliammai Engineering College',
      avatarText: 'SK',
      quote: "The AWS cloud integration webinars led by Acutix engineers introduced me to containerization and automated pipeline architectures. Applying these techniques on live sandboxes helped me complete my AWS Solutions Architect credential ahead of graduation.",
      project: 'AWS Container Pipeline Setup',
      color: '#8b5cf6', // Purple
    },
    {
      name: 'Meera N.',
      role: 'Frontend Developer',
      college: 'SA Engineering College',
      avatarText: 'MN',
      quote: "My semester-long internship on BoxCare's E-commerce framework was incredibly challenging. I learned professional responsive styling protocols, Git workflows, and API consumption. Having direct mentors from industry software labs made a massive difference.",
      project: 'BoxCare E-comm Dashboard',
      color: '#10b981', // Emerald
    },
  ];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % stories.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section className="relative z-10 px-6 max-w-7xl mx-auto my-24">
      <div className="text-center mb-16">
        <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
          Testimonials
        </h2>
        <h3 className="text-3xl font-extrabold text-white">
          Student Success Stories
        </h3>
        <p className="text-sm text-gray-400 max-w-2xl mx-auto mt-3">
          Hear from graduates who participated in our academic bootcamps and live SaaS training program.
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="relative bg-gray-900/30 border border-white/5 rounded-3xl p-6 sm:p-10 md:p-12 backdrop-blur-xl overflow-hidden min-h-[380px] flex flex-col justify-between shadow-2xl">
          {/* Quote mark backgrounds */}
          <div className="absolute top-6 right-8 text-white/5 pointer-events-none">
            <Quote className="w-36 h-36 rotate-180" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 space-y-6 flex-grow flex flex-col justify-between"
            >
              {/* Quote details */}
              <div className="space-y-6">
                <Quote className="w-10 h-10 text-cyan-400 opacity-60" style={{ color: stories[activeIdx].color }} />
                <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-medium italic">
                  &ldquo;{stories[activeIdx].quote}&rdquo;
                </p>
              </div>

              {/* Student info */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-white/5">
                <div className="flex items-center space-x-4">
                  {/* Initials avatar */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-mono font-bold text-white text-sm shadow-lg shadow-black/30 flex-shrink-0"
                    style={{
                      backgroundColor: stories[activeIdx].color,
                      boxShadow: `0 4px 15px ${stories[activeIdx].color}33`,
                    }}
                  >
                    {stories[activeIdx].avatarText}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{stories[activeIdx].name}</h4>
                    <p className="text-[11px] text-gray-500 font-mono mt-0.5">{stories[activeIdx].college}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg w-fit">
                  <Award className="w-4 h-4 text-cyan-400" style={{ color: stories[activeIdx].color }} />
                  <span className="text-[10px] font-mono text-gray-300 uppercase">
                    Role: {stories[activeIdx].role}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel buttons */}
        <div className="flex justify-center sm:justify-end items-center gap-4 mt-6 sm:absolute sm:-bottom-16 sm:right-6">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center cursor-pointer"
            aria-label="Previous story"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex gap-2">
            {stories.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeIdx === idx ? 'w-6 bg-cyan-400' : 'bg-white/20'
                }`}
                style={{
                  backgroundColor: activeIdx === idx ? stories[activeIdx].color : undefined,
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center cursor-pointer"
            aria-label="Next story"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
