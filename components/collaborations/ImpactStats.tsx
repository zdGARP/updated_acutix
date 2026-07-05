'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, School, Code, Briefcase } from 'lucide-react';

const CountUpNumber = ({ value, suffix, duration = 2 }: { value: number; suffix: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(elementRef, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const totalSteps = 60;
    const stepTime = (duration * 1000) / totalSteps;
    const increment = Math.ceil(end / totalSteps);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

export default function ImpactStats() {
  const stats = [
    {
      label: 'Students Mentored',
      value: 1500,
      suffix: '+',
      icon: <Users className="w-6 h-6 text-cyan-400" />,
      gradient: 'from-cyan-500/20 to-blue-500/20',
      glow: 'shadow-cyan-500/10',
      border: 'hover:border-cyan-500/30',
    },
    {
      label: 'Premier Academic Partners',
      value: 4,
      suffix: '',
      icon: <School className="w-6 h-6 text-purple-400" />,
      gradient: 'from-purple-500/20 to-pink-500/20',
      glow: 'shadow-purple-500/10',
      border: 'hover:border-purple-500/30',
    },
    {
      label: 'Live SaaS Sprints',
      value: 45,
      suffix: '+',
      icon: <Code className="w-6 h-6 text-emerald-400" />,
      gradient: 'from-emerald-500/20 to-teal-500/20',
      glow: 'shadow-emerald-500/10',
      border: 'hover:border-emerald-500/30',
    },
    {
      label: 'Graduate Placement Rate',
      value: 94,
      suffix: '%',
      icon: <Briefcase className="w-6 h-6 text-amber-400" />,
      gradient: 'from-amber-500/20 to-orange-500/20',
      glow: 'shadow-amber-500/10',
      border: 'hover:border-amber-500/30',
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  } as const;

  return (
    <section className="relative z-10 px-6 max-w-7xl mx-auto my-20">
      <div className="text-center mb-12">
        <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
          Cooperation Metrics
        </h2>
        <h3 className="text-3xl font-extrabold text-white">
          Our Shared Academic Impact
        </h3>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            className={`relative bg-gray-900/30 backdrop-blur-xl border border-white/5 ${stat.border} rounded-2xl p-6 transition-all duration-300 group shadow-lg ${stat.glow} flex items-center space-x-5 overflow-hidden`}
          >
            {/* Background glowing circle */}
            <div className={`absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-gradient-to-br ${stat.gradient} blur-2xl opacity-40 group-hover:scale-125 transition-transform duration-500`} />

            {/* Icon Box */}
            <div className="flex-shrink-0 p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">{stat.icon}</div>
            </div>

            {/* Content */}
            <div className="flex-grow">
              <p className="text-xs text-gray-500 font-mono tracking-wide">
                {stat.label.toUpperCase()}
              </p>
              <h4 className="text-3xl font-extrabold text-white mt-1">
                <CountUpNumber value={stat.value} suffix={stat.suffix} />
              </h4>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
