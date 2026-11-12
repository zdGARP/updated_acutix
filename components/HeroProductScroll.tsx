'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  Layers, 
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
  const scaleVal = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.05, 1]);

  // Distinct Color mapping based on scroll index (4 sections)
  const themeColors = [
    {
      accent: '#FFAA55',
      accentRgb: '255, 170, 85',
      glow: 'rgba(255, 170, 85, 0.15)',
      textColor: 'text-[#FFAA55]',
      label: 'BRAND MISSION'
    },
    {
      accent: '#0A1230',
      accentRgb: '27, 47, 97',
      glow: 'rgba(27, 47, 97, 0.15)',
      textColor: 'text-[#0A1230]',
      label: 'CORE STACK & SERVICES'
    },
    {
      accent: '#FFAA55',
      accentRgb: '255, 170, 85',
      glow: 'rgba(255, 170, 85, 0.15)',
      textColor: 'text-[#FFAA55]',
      label: 'PROPRIETARY SAAS SUITE'
    },
    {
      accent: '#0A1230',
      accentRgb: '27, 47, 97',
      glow: 'rgba(27, 47, 97, 0.15)',
      textColor: 'text-[#0A1230]',
      label: 'TALENT INCUBATOR'
    }
  ];

  const currentTheme = themeColors[activeIndex] || themeColors[0];

  return (
    <div 
      ref={containerRef} 
      className="relative z-10 flex min-h-[400vh] w-full flex-col items-stretch bg-white text-gray-950 lg:flex-row"
    >
      {/* Dynamic Ambient Background Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full blur-[100px] sm:blur-[150px] opacity-20 pointer-events-none transition-all duration-1000 ease-out transform-gpu z-0"
        style={{
          background: `radial-gradient(circle, ${currentTheme.accent} 0%, transparent 70%)`
        }}
      />

      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40 z-0" />

      {/* LEFT COLUMN: The Scrolling Story */}
      <div className="w-full lg:w-1/2 flex flex-col relative z-10">
        
        {/* Block 01: Brand Identity & Mission (Theme: Orange) */}
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
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FFAA55]/40 bg-white/60 px-3 py-1 text-xs font-semibold tracking-wider text-[#FFAA55]">
              <Sparkles className="w-3.5 h-3.5" />
              01 // ENTERPRISE SAAS & TECH INCUBATION
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Software for real business workflows. <br />
              <span className="text-[#FFAA55]">
                Practical learning for emerging talent.
              </span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Acutix Soft helps businesses plan and build websites, applications and custom software, while connecting students with practical, industry-oriented learning.
            </p>

            <div className="flex flex-wrap gap-4 items-center mt-8">
              <a 
                href="/contact?product=Custom%20Software&request=Project%20discussion"
                className="flex items-center gap-2 rounded-lg bg-[#FFAA55] px-6 py-3 text-sm font-bold text-black shadow-lg transition duration-200 hover:scale-105"
              >
                Discuss a Project <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Block 02: Services & Tech (Theme: Emerald Green) */}
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
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FFAA55]/40 bg-white/60 px-3 py-1 text-xs font-semibold tracking-wider text-[#FFAA55]">
              <Layers className="w-3.5 h-3.5" />
              02 // CORE TECHNOLOGY & SERVICES
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Engineered For <br />
              <span className="text-[#FFAA55]">
                Speed & Scale
              </span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              We construct lightweight, secure cloud-native platforms with built-in Answer Engine Optimization (AEO) compliance. This demands fast page loading, highly structured metadata, and clean semantic HTML markup.
            </p>

            {/* Sleek list highlighting tech stack */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#FFAA55]" />
                <div>
                  <h4 className="font-semibold text-white text-sm sm:text-base">Web & Digital Development</h4>
                  <p className="text-xs sm:text-sm text-gray-400 font-medium">Next.js, React, Node.js, Python.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#FFAA55]" />
                <div>
                  <h4 className="font-semibold text-white text-sm sm:text-base">Custom Business Solutions</h4>
                  <p className="text-xs sm:text-sm text-gray-400 font-medium">High-performance cross-platform apps via Flutter.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#FFAA55]" />
                <div>
                  <h4 className="font-semibold text-white text-sm sm:text-base">Cloud Infrastructure</h4>
                  <p className="text-xs sm:text-sm text-gray-400 font-medium">AWS hosting, built-in AEO compliance, strict SSL.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center mt-8">
              <a 
                href="/services" 
                className="inline-flex items-center gap-2 rounded-lg bg-[#FFAA55] px-6 py-3 text-sm font-bold text-black shadow-lg transition duration-200 hover:scale-105"
              >
                Our Services <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="/blogs" 
                className="inline-flex items-center gap-2 rounded-lg border border-[#FFAA55]/70 px-6 py-3 text-sm font-bold text-[#FFAA55] transition duration-200 hover:border-white hover:text-white"
              >
                Read Tech Blogs <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Block 03: The SaaS Suite (Theme: Blue) */}
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
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FFAA55]/40 bg-white/60 px-3 py-1 text-xs font-semibold tracking-wider text-[#FFAA55]">
              <Sparkles className="w-3.5 h-3.5" />
              03 // PROPRIETARY SAAS SUITE
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Industry-Specific <br />
              <span className="text-[#FFAA55]">
                Platforms
              </span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Discover our suite of proprietary enterprise engines designed to automate complex workflows across multiple sectors. We build custom-tailored B2B systems that eliminate manual inefficiencies, standardise operational data, and provide role-based access controls for optimal workflow coordination and long-term business growth.
            </p>

            {/* Sleek 2x2 grid displaying the 4 product names */}
            <div className="grid grid-cols-2 gap-4 my-6">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFAA55]"></span>
                <span className="font-semibold text-sm tracking-wide">FertiCare</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFAA55]"></span>
                <span className="font-semibold text-sm tracking-wide">GymPad</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFAA55]"></span>
                <span className="font-semibold text-sm tracking-wide">MotorConsult</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFAA55]"></span>
                <span className="font-semibold text-sm tracking-wide">BoxCare</span>
              </div>
            </div>

            <div className="pt-2">
              <a 
                href="/products" 
                className="inline-flex items-center gap-2 rounded-lg bg-[#FFAA55] px-6 py-3 text-sm font-bold text-[#111111] transition-all duration-200 hover:bg-white"
              >
                View All Products <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Block 04: Audiences & Value (Theme: Rose Pink) - Student focused */}
        <div 
          data-index={3}
          className="scroll-section-trigger min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:pl-20 lg:pr-10 py-24 sm:py-32"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FFAA55]/40 bg-white/60 px-3 py-1 text-xs font-semibold tracking-wider text-[#FFAA55]">
              <Sparkles className="w-3.5 h-3.5" />
              04 // STUDENT TECH INCUBATION & VALUE
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Cultivating Next-Gen <br />
              <span className="text-[#FFAA55]">
                Tech Talent
              </span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Our tech incubation program in Chennai provides final-year students and emerging tech professionals with a structured, high-intensity internship environment. Under the guidance of senior architects, interns work directly on live, commercial-grade enterprise applications, bridging the gap between academic theory and practical software engineering. We offer robust career placement assistance, mock interviews, and final-year thesis mentorship.
            </p>

            <div className="grid grid-cols-1 gap-4 pt-2">
              <div className="student-card flex items-start gap-4 rounded-lg border border-black/10 bg-white p-5 transition-colors hover:border-[#FFAA55]/60">
                <GraduationCap className="mt-1 h-8 w-8 flex-shrink-0 text-[#FFAA55]" />
                <div>
                  <h4 className="font-bold text-white mb-1.5 uppercase text-sm tracking-wider">FOR TECH STUDENTS</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Immerse yourself in live, production-grade applications under direct guidance. Master full-stack architectures (Next.js, Node, Flutter, AWS) and gain practical experience to secure placements at leading technology firms.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a 
                href="/careers" 
                className="inline-flex items-center gap-2 rounded-lg bg-[#FFAA55] px-6 py-3 text-sm font-bold text-[#111111] shadow-lg transition duration-200 hover:scale-105"
              >
                Apply for Internship <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Legacy Core values text row */}
            <div className="pt-8 border-t border-white/5">
              <p className="text-center font-mono text-[10px] uppercase leading-relaxed tracking-widest text-[#FFAA55] sm:text-left sm:text-xs">
                Transformative Solutions &bull; Rapid Results &bull; Empowering Local Talent
              </p>
            </div>
          </motion.div>
        </div>

      </div>

      {/* RIGHT COLUMN: Pinned Visual Graphic */}
      <div className="sticky top-[64px] z-20 flex h-[45vh] w-full flex-col items-center justify-center border-b border-gray-200 bg-white p-6 pointer-events-none lg:pointer-events-auto lg:top-0 lg:h-screen lg:w-1/2 lg:border-b-0">
        
        <div className="relative w-full max-w-[420px] aspect-[4/3] sm:aspect-square flex items-center justify-center">
          
          {/* Subtle Ambient Behind Graphic */}
          <div 
            className="absolute inset-0 rounded-full blur-3xl opacity-20 transition-all duration-1000"
            style={{
              background: `radial-gradient(circle, ${currentTheme.accent} 0%, transparent 60%)`
            }}
          />

          {/* Centered Acutix Core Sphere/Box - Scaled down slightly to prevent overlapping text */}
          <motion.div 
            style={{ scale: scaleVal }}
            className="relative w-64 h-64 flex items-center justify-center z-10"
          >
            {/* Concentric Circle 3 (Outer - Rotates clock-wise) */}
            <motion.div 
              style={{ rotate: rotateVal }}
              className="absolute w-60 h-60 rounded-full border border-dashed border-black/30 flex items-center justify-center"
            >
              <div 
                className="absolute top-0 w-2.5 h-2.5 rounded-full transition-all duration-1000 shadow-[0_0_10px_currentColor]"
                style={{ color: currentTheme.accent, backgroundColor: currentTheme.accent }}
              />
              <div 
                className="absolute bottom-0 w-2.5 h-2.5 rounded-full transition-all duration-1000 shadow-[0_0_10px_currentColor]"
                style={{ color: currentTheme.accent, backgroundColor: currentTheme.accent }}
              />
            </motion.div>

            {/* Concentric Circle 2 (Middle - Rotates counter clock-wise) */}
            <motion.div 
              style={{ rotate: counterRotateVal }}
              className="absolute w-44 h-44 rounded-full border border-double border-black/30 flex items-center justify-center"
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
              <g stroke="rgba(17,17,17,0.3)" strokeWidth="1" fill="none">
                <path d="M100,100 L50,50 L20,50" />
                <path d="M100,100 L150,50 L180,50" />
                <path d="M100,100 L50,150 L20,150" />
                <path d="M100,100 L150,150 L180,150" />
              </g>

              {/* Glowing Interactive Trails */}
              <g stroke="#111111" strokeWidth="2" fill="none" filter="url(#svg-glow)" className="transition-all duration-1000">
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
                  animate={activeIndex === 3 ? { pathLength: 1 } : { pathLength: 0.2 }}
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
              className="absolute w-24 h-24 rounded-full border border-white/20 flex flex-col items-center justify-center bg-[#0d1017] shadow-inner transition-all duration-1000"
              style={{
                boxShadow: `inset 0 0 15px ${currentTheme.glow}, 0 0 25px ${currentTheme.glow}`
              }}
            >
              {/* Inner Pulsing Element */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.08, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2.5, 
                  ease: "easeInOut" 
                }}
                className="w-14 h-14 rounded-full flex items-center justify-center font-black tracking-widest text-[10px] font-mono select-none"
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
                  className="absolute -top-16 rounded-lg border border-[#FFAA55]/50 bg-white px-3 py-1.5 font-mono text-[10px] font-bold tracking-wider text-[#111111] shadow-lg"
                >
                  ACUTIX CORE ENGINE
                </motion.div>
              )}
              {activeIndex === 1 && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute -top-16 rounded-lg border border-[#0A1230]/50 bg-white px-3 py-1.5 font-mono text-[10px] font-bold tracking-wider text-[#0A1230] shadow-lg"
                >
                  NEXT.JS // FLUTTER // AWS
                </motion.div>
              )}
              {activeIndex === 2 && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute -top-16 rounded-lg border border-[#FFAA55]/50 bg-white px-3 py-1.5 font-mono text-[10px] font-bold tracking-wider text-[#111111] shadow-lg"
                >
                  PROPRIETARY SAAS SUITE
                </motion.div>
              )}
              {activeIndex === 3 && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute -top-16 rounded-lg border border-[#0A1230]/50 bg-white px-3 py-1.5 font-mono text-[10px] font-bold tracking-wider text-[#0A1230] shadow-lg"
                >
                  TALENT INCUBATOR
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
          
          {/* Dynamic Info overlays */}
          <div className="absolute bottom-4 left-0 right-0 w-full flex flex-col sm:flex-row items-center sm:justify-between gap-2 px-6 font-mono text-[10px] sm:text-xs text-gray-500 tracking-widest select-none pointer-events-none">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full animate-ping" style={{ backgroundColor: currentTheme.accent }}></span>
              <span>
                SYSTEM STATE: <span className="transition-colors duration-500 font-bold" style={{ color: currentTheme.accent }}>{currentTheme.label}</span>
              </span>
            </div>
            <div className="text-gray-400 font-medium">
              INDEX: 0{activeIndex + 1} {"//"} 04
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
