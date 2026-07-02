'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface CountUpProps {
  end: string;
  duration?: number;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const cleanNumberStr = end.replace(/[^\d]/g, '');
  const target = parseInt(cleanNumberStr, 10) || 0;
  const suffix = end.includes('+') ? '+' : '';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const start = 0;
    const endValue = target;
    if (start === endValue) {
      setCount(endValue);
      return;
    }

    const totalFrames = Math.min(Math.ceil(duration / 16), 120);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeProgress = progress * (2 - progress);
      const currentCount = Math.floor(easeProgress * endValue);

      setCount(currentCount);

      if (frame >= totalFrames) {
        setCount(endValue);
        clearInterval(counter);
      }
    }, 16);

    return () => clearInterval(counter);
  }, [isVisible, target, duration]);

  const formattedCount = count.toLocaleString('en-US');

  return (
    <span ref={elementRef}>
      {formattedCount}
      {suffix}
    </span>
  );
};

// Impact numbers data
const stats = [
  { value: "3+", label: "Academic MoUs Signed", detail: "Formal active partnerships" },
  { value: "30+", label: "Internship Batches Completed", detail: "Continuous structured training" },
  { value: "100+", label: "Student Interns Trained & Shipped", detail: "Industry-ready developers" },
  { value: "1,500+", label: "Students Reached via Seminars", detail: "Webinars and coding workshops" },
  { value: "20+", label: "Projects Shipped for Startups", detail: "Live commercial deployment" }
];

export default function EcosystemSection() {
  return (
    <div className="relative overflow-hidden font-sans pb-24 bg-[#07090e] text-white">
      {/* Abstract Grid + Ambient Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0c_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0c_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-br from-cyan-500/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-gradient-to-tr from-amber-500/5 to-transparent blur-[120px] pointer-events-none" />

      {/* 1. PAGE HERO SECTION (Credibility First) */}
      <section className="relative pt-36 pb-20 z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* DPIIT Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider text-amber-400 bg-amber-500/5 border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.08)] mb-8 mx-auto uppercase">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
            🔒 RECOGNIZED DPIIT STARTUP // GOVERNMENT OF INDIA
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight max-w-5xl mx-auto mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FFD98A] via-[#F7B7A3] to-[#5EC6D9]">
            Forging Industry-Academia Ecosystems
          </h2>

          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
            Bridging the critical gap between commercial enterprise execution and hands-on developer training. We incubate elite academic talent on live product cycles.
          </p>

        </motion.div>
      </section>

      {/* 2. 'IMPACT BY THE NUMBERS' COUNTER GRID */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-28">
        <div className="border border-white/10 bg-gray-900/40 backdrop-blur-xl rounded-3xl p-12 md:p-16 shadow-[0_0_50px_rgba(6,182,212,0.08)]">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                className="text-center p-4 border-r last:border-r-0 border-white/5 flex flex-col justify-center h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <h3 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-3 tracking-tight ${
                  idx === 0 ? 'text-[#5EC6D9]' : // cyan
                  idx === 1 ? 'text-[#FFD98A]' : // yellow
                  idx === 2 ? 'text-[#F7B7A3]' : // peach
                  idx === 3 ? 'text-[#7B6FEA]' : // purple
                  'text-[#5EC6D9]' // cyan
                }`}>
                  <CountUp end={stat.value} />
                </h3>
                <h4 className="text-xs sm:text-sm font-mono font-bold tracking-widest text-slate-200 uppercase mb-2 leading-snug">
                  {stat.label}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-normal">
                  {stat.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Explore Academic Partners button moved below the stats counter bar with bigger font */}
        <div className="mt-16 flex justify-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/collaborations#alliance-hub"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-extrabold px-10 py-4.5 rounded-xl transition-all duration-300 text-base md:text-lg flex items-center gap-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 cursor-pointer"
          >
            Explore Academic Partners
          </motion.a>
        </div>
      </section>
    </div>
  );
}
