'use client';

import { useId, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function FAQAccordion({
  items,
  eyebrow,
  title,
  description,
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const id = useId();

  return (
    <section className="border-b border-slate-200 bg-white px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-9">
          {eyebrow && (
            <p className="mb-1 text-[11px] font-bold uppercase tracking-widest text-[#FF7A1A]">
              {eyebrow}
            </p>
          )}
          <h2 className="text-2xl font-extrabold tracking-tight text-[#111111] sm:text-3xl">
            {title}
          </h2>
          {description && (
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              {description}
            </p>
          )}
        </div>

        <div className="space-y-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `${id}-answer-${index}`;

            return (
              <div
                key={item.question}
                onPointerEnter={(event) => {
                  if (event.pointerType !== 'touch') {
                    setOpenIndex(index);
                  }
                }}
                onPointerLeave={(event) => {
                  if (event.pointerType !== 'touch') {
                    setOpenIndex((current) => current === index ? null : current);
                  }
                }}
                className={`overflow-hidden rounded-xl border transition-colors duration-300 ${
                  isOpen
                    ? 'border-[#0A1230] bg-white shadow-sm'
                    : 'border-transparent bg-[#F4F4F4] hover:border-[#0A1230]/50'
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7 sm:py-6"
                >
                  <span
                    className={`text-base font-semibold transition-colors sm:text-lg ${
                      isOpen ? 'text-[#111111]' : 'text-[#4B5563]'
                    }`}
                  >
                    {item.question}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center text-[#111111]">
                    {isOpen ? (
                      <Minus aria-hidden="true" className="h-5 w-5" />
                    ) : (
                      <Plus aria-hidden="true" className="h-5 w-5" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={answerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.24, ease: 'easeInOut' }}
                    >
                      <p className="px-5 pb-6 text-sm leading-relaxed text-[#404040] sm:px-7 sm:text-base">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
