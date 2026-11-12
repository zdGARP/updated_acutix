'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section id="contact" className="services-final-cta relative py-32 bg-gray-950 overflow-hidden border-t border-white/5">
      {/* Animated gradient waves background */}
      <div className="services-final-cta-glow absolute inset-0 w-full h-full" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-[#0A1230]/30 to-[#FFAA55]/30 blur-[100px] animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#FFAA55]/20 to-[#0A1230]/20 blur-[80px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="services-final-title mb-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            Ready to Build Your Next <span className="text-[#FFAA55]">Digital Product?</span>
          </h2>
          <p className="services-final-copy mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-white/85">
            Let&apos;s discuss your ideas and transform them into scalable, enterprise-grade solutions that drive growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="contents">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer rounded-lg bg-[#FFAA55] px-8 py-4 text-center font-bold text-[#111111] transition-colors hover:bg-white"
              >
                Get Free Consultation
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
