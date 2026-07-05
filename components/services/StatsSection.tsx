'use client';
import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const stats = [
  { 
    label: 'PROPRIETARY SAAS ENGINES', 
    value: 4, 
    suffix: '', 
    subtext: 'Built for Healthcare, Fitness, and Logistics' 
  },
  { 
    label: 'INDUSTRY TECH MEETUPS', 
    value: 10, 
    suffix: '+', 
    subtext: 'Organized for enterprise knowledge-sharing' 
  },
  { 
    label: 'TECHNICAL PUBLICATIONS', 
    value: 100, 
    suffix: '+', 
    subtext: 'Articles, research, and educational content' 
  },
  { 
    label: 'MSME & STARTUP FOCUSED', 
    value: 100, 
    suffix: '%', 
    subtext: 'Recognized DPIIT Startup scaling local businesses' 
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000; 
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 mb-3">
      {count}{suffix}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-gray-950 py-20 border-t border-white/5 relative z-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-6 md:p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 backdrop-blur-sm flex flex-col justify-center min-h-[180px] hover:border-cyan-500/20 transition-all duration-300"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <div className="text-gray-400 font-bold text-xs md:text-sm uppercase tracking-wider mb-2 leading-snug">{stat.label}</div>
              <div className="text-gray-500 text-xs md:text-sm font-medium leading-relaxed">{stat.subtext}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
