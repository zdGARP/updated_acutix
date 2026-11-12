'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function EcosystemSection() {
  return (
    <div className="landing-hero relative overflow-hidden bg-black pb-8 text-white">
      <section className="landing-intro relative z-10 mx-auto max-w-7xl px-4 pt-36 pb-20 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mx-auto mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/40 bg-black/45 px-4 py-2 text-xs font-semibold tracking-wide text-[#FFAA55]">
            Acutix Soft LLP · Software and practical learning
          </p>

          <h1 className="mx-auto mb-6 max-w-5xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
            We Build Digital Products. We Develop Industry-Ready Talent.
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg">
            Acutix Soft helps businesses turn ideas into scalable websites, applications and custom software, while connecting students with practical, industry-oriented learning.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/contact?product=Custom%20Software&request=Project%20discussion"
              className="inline-flex items-center justify-center rounded-lg bg-[#FFAA55] px-6 py-3 text-sm font-bold text-[#111111] transition-colors hover:bg-[#0A1230] hover:text-white"
            >
              Discuss a Project
            </a>
            <a
              href="/collaborations"
              className="inline-flex items-center justify-center rounded-lg border border-[#0A1230] bg-black/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-[#FFAA55] hover:text-[#FFAA55]"
            >
              Explore Academic Collaboration
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
