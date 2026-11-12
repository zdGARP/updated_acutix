'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: 'How long does development take?', a: 'Development timelines vary based on the complexity and scope of the project. A standard website might take 4-8 weeks, whereas a complex custom enterprise software solution could take 3-6 months. We provide detailed estimates during the planning phase.' },
  { q: 'Can existing software be integrated?', a: 'Absolutely. We specialize in legacy system modernization and API integrations. We can connect your new platform seamlessly with your existing CRMs, ERPs, and third-party tools.' },
  { q: 'Do you provide source code?', a: 'Yes. Once the project is completed and fully paid for, all intellectual property rights and the complete source code are transferred to you.' },
  { q: 'Do you offer maintenance?', a: 'We offer comprehensive post-launch support and maintenance packages to ensure your software remains secure, up-to-date, and optimized for performance.' },
  { q: 'How secure are your applications?', a: 'Security is a top priority. We follow industry best practices, conduct rigorous penetration testing, and implement robust encryption to ensure your data is always protected against vulnerabilities.' }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-950 relative border-t border-white/5">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400">Everything you need to know about our services and processes.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`overflow-hidden rounded-lg border bg-white transition-all duration-300 ${open === i ? 'border-[#FFAA55] shadow-md' : 'border-[#0A1230]/20 hover:border-[#FFAA55]/70'}`}
            >
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-[#F4F7FB] focus:outline-none"
              >
                <span className={`pr-4 font-semibold transition-colors ${open === i ? 'text-[#FFAA55]' : 'text-[#111111]'}`}>{faq.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-[#0A1230] transition-transform duration-300 ${open === i ? 'rotate-180 text-[#FFAA55]' : ''}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-sm leading-relaxed text-black/75">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
