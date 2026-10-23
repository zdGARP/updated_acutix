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
    <div className="relative overflow-hidden font-sans pb-8 bg-[#07090e] text-white">
      {/* Abstract Grid + Ambient Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0c_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0c_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-br from-cyan-500/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-gradient-to-tr from-amber-500/5 to-transparent blur-[120px] pointer-events-none" />

      {/* 1. PAGE HERO SECTION (Credibility First) */}
      <section className="landing-intro relative pt-36 pb-20 z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-mono font-semibold tracking-wide text-amber-300 bg-white/[0.04] border border-white/10 mb-7 mx-auto uppercase">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            DPIIT-recognized startup · Government of India
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight max-w-5xl mx-auto mb-6 text-[#f1f0ed]">
            Digital products built for real-world growth.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Acutix helps businesses build dependable software and gives emerging developers hands-on experience through real product work.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-xl bg-[#d8955d] px-6 py-3 text-sm font-bold text-[#201810] transition-colors hover:bg-[#e6a873]"
            >
              Explore our services
            </a>
            <a
              href="/careers"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-white/30 hover:bg-white/[0.08]"
            >
              Discover internships
            </a>
          </div>

        </motion.div>
      </section>

      {/* 2. 'IMPACT BY THE NUMBERS' COUNTER GRID */}
      <section className="landing-stats relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-10">
        <div className="border border-white/10 bg-gray-900/40 backdrop-blur-xl rounded-3xl py-10 px-8 md:py-12 md:px-16 shadow-[0_0_50px_rgba(6,182,212,0.08)]">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                className="text-center p-2 border-r last:border-r-0 border-white/5 flex flex-col justify-center h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <h3 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2 tracking-tight ${
                  idx === 0 ? 'text-[#5EC6D9]' : // cyan
                  idx === 1 ? 'text-[#FFD98A]' : // yellow
                  idx === 2 ? 'text-[#F7B7A3]' : // peach
                  idx === 3 ? 'text-[#7B6FEA]' : // purple
                  'text-[#5EC6D9]' // cyan
                }`}>
                  <CountUp end={stat.value} />
                </h3>
                <h4 className="text-[10px] sm:text-[11px] font-mono font-bold tracking-wider text-slate-200 uppercase mb-1.5 leading-snug">
                  {stat.label}
                </h4>
                <p className="text-[10px] sm:text-[11px] text-slate-400 leading-normal">
                  {stat.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Explore Academic Partners button placed below the stats counter bar with balanced font sizing */}
        <div className="mt-16 flex justify-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/collaborations#alliance-hub"
            className="bg-[#d8955d] hover:bg-[#e6a873] text-[#201810] font-bold px-8 py-3.5 rounded-xl transition-all duration-300 text-sm md:text-base flex items-center gap-2 shadow-none cursor-pointer"
          >
            Explore Academic Partners
          </motion.a>
        </div>
      </section>
    </div>
  );
}
