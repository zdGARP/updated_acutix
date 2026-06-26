'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  MapPin, 
  Layers, 
  Cpu, 
  Users, 
  Briefcase, 
  GraduationCap, 
  CheckCircle
} from 'lucide-react';

export default function HeroProductScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Set mounted state strictly post-hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Monitor scroll positioning to update active index via Intersection Observer (runs only post-mount)
  useEffect(() => {
    if (!mounted) return;

    const container = containerRef.current;
    if (!container) return;

    const sections = container.querySelectorAll('.scroll-section-trigger');
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Trigger when section is in the middle of the screen
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);
          setActiveIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, [mounted]);

  // continuous scroll transformations tracking global viewport scroll (safer and avoids ref conflicts during SSR)
  const { scrollYProgress } = useScroll();

  const rotateVal = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const counterRotateVal = useTransform(scrollYProgress, [0, 1], [0, -360]);
  const scaleVal = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.08, 1]);

  // Color mapping based on scroll index
  const themeColors = [
    {
      accent: '#f97316', // Orange
      accentRgb: '249, 115, 22',
      glow: 'rgba(249, 115, 22, 0.2)',
      bgClass: 'from-orange-500/20 to-amber-500/5',
      textColor: 'text-orange-400',
      label: 'BRAND MISSION'
    },
    {
      accent: '#06b6d4', // Cyan
      accentRgb: '6, 182, 212',
      glow: 'rgba(6, 182, 212, 0.2)',
      bgClass: 'from-cyan-500/20 to-blue-500/5',
      textColor: 'text-cyan-400',
      label: 'PRODUCTION TECH STACK'
    },
    {
      accent: '#8b5cf6', // Purple
      accentRgb: '139, 92, 246',
      glow: 'rgba(139, 92, 246, 0.2)',
      bgClass: 'from-purple-500/20 to-indigo-500/5',
      textColor: 'text-purple-400',
      label: 'TARGET AUDIENCES'
    }
  ];

  const currentTheme = themeColors[activeIndex] || themeColors[0];

  // Return a lightweight static skeleton placeholder during SSR and initial hydration phase
  if (!mounted) {
    return (
      <div className="w-full min-h-screen bg-[#07090e] flex items-center justify-center">
        <div className="text-orange-500/60 font-mono text-sm tracking-widest animate-pulse flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
          <span>LOADING ACUTIX ENGINE...</span>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef} 
      className="relative w-full bg-[#07090e] text-white flex flex-col lg:flex-row items-stretch min-h-[300vh] z-10"
    >
      {/* Dynamic Ambient Background Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full blur-[100px] sm:blur-[150px] opacity-25 pointer-events-none transition-all duration-1000 ease-out transform-gpu z-0"
        style={{
          background: `radial-gradient(circle, ${currentTheme.accent} 0%, transparent 70%)`
        }}
      />

      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40 z-0" />

      {/* LEFT COLUMN: The Scrolling Story */}
      <div className="w-full lg:w-1/2 flex flex-col relative z-10">
        
        {/* Block 1: Brand Identity & Mission */}
        <div 
          data-index={0}
          className="scroll-section-trigger min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:pl-20 lg:pr-10 py-24 sm:py-32"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-orange-400">
              <Sparkles className="w-3.5 h-3.5" />
              01 // BRAND IDENTITY & MISSION
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Digital Transformation <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">
                Redefined
              </span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Based in Chennai, India, Acutix Soft LLP is a digital transformation and custom software engineering firm. We specialize in delivering highly scalable, custom enterprise solutions while simultaneously cultivating emerging tech talent.
            </p>

            <p className="text-gray-400 text-base">
              By bridging the gap between high-end commercial delivery and hands-on training, we enable businesses to leverage cutting-edge platforms while providing vital industrial exposure to final-year students.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/5">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-orange-400 font-bold text-sm">
                  <MapPin className="w-4 h-4" /> CHENNAI, INDIA
                </div>
                <p className="text-xs text-gray-500">HQ & Incubation Facility</p>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-orange-400 font-bold text-sm">
                  <Cpu className="w-4 h-4" /> ENTERPRISE DEV
                </div>
                <p className="text-xs text-gray-500">High-Performance Platforms</p>
              </div>
            </div>

            <div className="pt-6">
              <a 
                href="/contact" 
                className="px-6 py-3 rounded-lg font-bold text-sm bg-gradient-to-r from-orange-500 to-amber-500 text-black shadow-lg hover:brightness-110 transition inline-flex items-center gap-2"
              >
                Work With Us <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Block 2: Core Technology Stack */}
        <div 
          data-index={1}
          className="scroll-section-trigger min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:pl-20 lg:pr-10 py-24 sm:py-32"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-cyan-400">
              <Layers className="w-3.5 h-3.5" />
              02 // CORE TECHNOLOGY STACK
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Engineered For <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Speed & Scale
              </span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              We construct lightweight, secure cloud-native platforms with built-in Answer Engine Optimization (AEO) compliance. This demands fast page loading, highly structured metadata, and clean semantic markup.
            </p>

            {/* Bullet list of tech stack components */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white text-sm sm:text-base">Web & Backend Architecture</h4>
                  <p className="text-xs sm:text-sm text-gray-400">Next.js (App Router), React, Node.js REST APIs, and Python engines.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white text-sm sm:text-base">Mobile App Ecosystem</h4>
                  <p className="text-xs sm:text-sm text-gray-400">High-performance cross-platform apps via Flutter and React Native.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white text-sm sm:text-base">Cloud Infrastructure</h4>
                  <p className="text-xs sm:text-sm text-gray-400">AWS hosting with multi-zone redundancy, CDN caching, and strict SSL policies.</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a 
                href="/services" 
                className="px-6 py-3 rounded-lg font-bold text-sm bg-gradient-to-r from-cyan-500 to-blue-500 text-black shadow-lg hover:brightness-110 transition inline-flex items-center gap-2"
              >
                Our Services <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Block 3: Target Audiences */}
        <div 
          data-index={2}
          className="scroll-section-trigger min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:pl-20 lg:pr-10 py-24 sm:py-32"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-purple-400">
              <Users className="w-3.5 h-3.5" />
              03 // TARGET AUDIENCES
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Bridging B2B & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
                Emerging Talent
              </span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              We operate as a dual-mission firm: delivering high-end digital infrastructure to businesses while incubating final-year students into industry-ready engineers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors">
                <Briefcase className="w-6 h-6 text-purple-400 mb-3" />
                <h4 className="font-bold text-white mb-1.5 uppercase text-sm tracking-wider">For B2B Clients</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Highly scalable, cost-effective SaaS products and custom systems designed to automate workflows and drive digital growth.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors">
                <GraduationCap className="w-6 h-6 text-purple-400 mb-3" />
                <h4 className="font-bold text-white mb-1.5 uppercase text-sm tracking-wider">For Tech Students</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  A high-intensity internship environment featuring live projects, placement coaching, and mentorship for final-year research.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <a 
                href="/careers" 
                className="px-6 py-3 rounded-lg font-bold text-sm bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg hover:brightness-110 transition inline-flex items-center gap-2"
              >
                Join the Talent Program <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

      </div>

      {/* RIGHT COLUMN: Pinned Visual Graphic */}
      <div className="w-full lg:w-1/2 h-[45vh] lg:h-screen sticky top-[64px] lg:top-0 flex items-center justify-center p-6 z-20 pointer-events-none lg:pointer-events-auto bg-[#07090e] lg:bg-transparent border-b lg:border-b-0 border-white/5">
        
        <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center">
          
          {/* Subtle Ambient Behind Graphic */}
          <div 
            className="absolute inset-0 rounded-full blur-3xl opacity-30 transition-all duration-1000"
            style={{
              background: `radial-gradient(circle, ${currentTheme.accent} 0%, transparent 60%)`
            }}
          />

          {/* Centered Acutix Core Sphere/Box - Scales on scroll */}
          <motion.div 
            style={{ scale: scaleVal }}
            className="relative w-72 h-72 flex items-center justify-center z-10"
          >
            {/* Concentric Circle 3 (Outer - Rotates clock-wise) */}
            <motion.div 
              style={{ rotate: rotateVal }}
              className="absolute w-72 h-72 rounded-full border border-dashed border-white/10 flex items-center justify-center"
            >
              <div 
                className="absolute top-0 w-3 h-3 rounded-full transition-all duration-1000 shadow-[0_0_12px_currentColor]"
                style={{ color: currentTheme.accent, backgroundColor: currentTheme.accent }}
              />
              <div 
                className="absolute bottom-0 w-3 h-3 rounded-full transition-all duration-1000 shadow-[0_0_12px_currentColor]"
                style={{ color: currentTheme.accent, backgroundColor: currentTheme.accent }}
              />
            </motion.div>

            {/* Concentric Circle 2 (Middle - Rotates counter clock-wise) */}
            <motion.div 
              style={{ rotate: counterRotateVal }}
              className="absolute w-52 h-52 rounded-full border border-double border-white/15 flex items-center justify-center"
            >
              <div 
                className="absolute left-0 w-2 h-2 rounded-full opacity-70 transition-all duration-1000"
                style={{ backgroundColor: currentTheme.accent }}
              />
              <div 
                className="absolute right-0 w-2 h-2 rounded-full opacity-70 transition-all duration-1000"
                style={{ backgroundColor: currentTheme.accent }}
              />
            </motion.div>

            {/* Pinned Circuit Pathways (Custom SVG) */}
            <svg 
              viewBox="0 0 200 200" 
              className="absolute w-full h-full p-2 z-0 pointer-events-none overflow-visible"
            >
              {/* Radial Glow Filter */}
              <defs>
                <filter id="svg-glow">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Dynamic Connecting Lines depending on ActiveIndex */}
              <g stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none">
                <path d="M100,100 L50,50 L20,50" />
                <path d="M100,100 L150,50 L180,50" />
                <path d="M100,100 L50,150 L20,150" />
                <path d="M100,100 L150,150 L180,150" />
              </g>

              {/* Glowing Interactive Trails */}
              <g stroke={currentTheme.accent} strokeWidth="2" fill="none" filter="url(#svg-glow)" className="transition-all duration-1000">
                <motion.path 
                  d="M100,100 L50,50 L20,50" 
                  initial={{ pathLength: 0 }}
                  animate={activeIndex === 0 ? { pathLength: 1 } : { pathLength: 0.2 }}
                  transition={{ duration: 0.8 }}
                />
                <motion.path 
                  d="M100,100 L150,50 L180,50" 
                  initial={{ pathLength: 0 }}
                  animate={activeIndex === 1 ? { pathLength: 1 } : { pathLength: 0.2 }}
                  transition={{ duration: 0.8 }}
                />
                <motion.path 
                  d="M100,100 L50,150 L20,150" 
                  initial={{ pathLength: 0 }}
                  animate={activeIndex === 2 ? { pathLength: 1 } : { pathLength: 0.2 }}
                  transition={{ duration: 0.8 }}
                />
                <motion.path 
                  d="M100,100 L150,150 L180,150" 
                  initial={{ pathLength: 0 }}
                  animate={activeIndex === 2 ? { pathLength: 1 } : { pathLength: 0.2 }}
                  transition={{ duration: 0.8 }}
                />
              </g>

              {/* Glowing Dots flowing on trails */}
              <g fill={currentTheme.accent} className="transition-all duration-1000">
                <circle cx="20" cy="50" r="3" className="shadow-lg" />
                <circle cx="180" cy="50" r="3" />
                <circle cx="20" cy="150" r="3" />
                <circle cx="180" cy="150" r="3" />
              </g>
            </svg>

            {/* Inner Core Sphere (Central glowing core) */}
            <div 
              className="absolute w-28 h-28 rounded-full border border-white/20 flex flex-col items-center justify-center bg-[#0d1017] shadow-inner transition-all duration-1000"
              style={{
                boxShadow: `inset 0 0 20px ${currentTheme.glow}, 0 0 35px ${currentTheme.glow}`
              }}
            >
              {/* Inner Pulsing Element */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2.5, 
                  ease: "easeInOut" 
                }}
                className="w-16 h-16 rounded-full flex items-center justify-center font-black tracking-widest text-[11px] font-mono select-none"
                style={{ 
                  color: currentTheme.accent,
                  background: `rgba(${currentTheme.accentRgb}, 0.05)`,
                  border: `1.5px solid ${currentTheme.accent}`
                }}
              >
                ACUTIX
              </motion.div>
            </div>

            {/* Floating Context-specific Badges / Labels around the Core */}
            <AnimatePresence mode="wait">
              {activeIndex === 0 && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute -top-16 bg-[#0c0f16]/95 border border-orange-500/30 px-3 py-1.5 rounded-lg text-[10px] font-bold font-mono tracking-wider shadow-lg text-orange-400"
                >
                  DIGITAL TRANSFORMATION
                </motion.div>
              )}
              {activeIndex === 1 && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute -top-16 bg-[#0c0f16]/95 border border-cyan-500/30 px-3 py-1.5 rounded-lg text-[10px] font-bold font-mono tracking-wider shadow-lg text-cyan-400"
                >
                  NEXT.JS // FLUTTER // AWS
                </motion.div>
              )}
              {activeIndex === 2 && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute -top-16 bg-[#0c0f16]/95 border border-purple-500/30 px-3 py-1.5 rounded-lg text-[10px] font-bold font-mono tracking-wider shadow-lg text-purple-400"
                >
                  B2B CLIENTS & STUDENT WORKSPACE
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
          
          {/* Dynamic Info overlays */}
          <div className="absolute bottom-4 left-4 font-mono text-[9px] text-gray-500 tracking-wider flex items-center gap-1.5 select-none pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full animate-ping" style={{ backgroundColor: currentTheme.accent }}></span>
            <span>SYSTEM STATE: {currentTheme.label}</span>
          </div>

          <div className="absolute bottom-4 right-4 font-mono text-[9px] text-gray-500 select-none pointer-events-none">
            INDEX: 0{activeIndex + 1} {"//"} 03
          </div>

        </div>

      </div>

    </div>
  );
}
