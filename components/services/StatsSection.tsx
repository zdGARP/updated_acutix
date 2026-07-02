'use client';
import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const stats = [
  { label: 'Projects Delivered', value: 250, suffix: '+' },
  { label: 'Happy Clients', value: 80, suffix: '+' },
  { label: 'Years Experience', value: 10, suffix: '+' },
  { label: 'Support Availability', value: 24, suffix: '/7' },
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
    <div ref={ref} className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 mb-2">
      {count}{suffix}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-gray-950 py-20 border-t border-white/5 relative z-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-gray-900/40 border border-white/5 backdrop-blur-sm"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <div className="text-gray-400 font-medium text-sm md:text-base uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
