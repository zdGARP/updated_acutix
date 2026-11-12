'use client';

import React from 'react';

const faqs = [
  {
    question: 'What software development services does Acutix offer?',
    answer: 'Acutix works on websites, web and mobile applications, custom software, and digital products. Contact the team to discuss the requirements and suitable scope for your project.',
  },
  {
    question: 'How does your development process work?',
    answer: 'Start with a conversation about your goals and workflows. The project scope, priorities, milestones, and delivery expectations can then be discussed with the Acutix team.',
  },
  {
    question: 'How can a college partner with Acutix?',
    answer: 'Colleges can contact Acutix to discuss academic collaboration, workshops, training, or other proposed initiatives. Visit the collaboration page to learn more.',
  },
  {
    question: 'Do you offer internships or industrial visits?',
    answer: 'Visit the Careers page for current opportunities and contact Acutix to ask about internship or industrial-visit availability.',
  },
  {
    question: 'How do I request a project estimate?',
    answer: 'Use the contact form to describe your goals, required features, and timeline. The team can follow up to clarify the scope and discuss an estimate.',
  },
  {
    question: 'What happens after a project launches?',
    answer: 'Post-launch support and ongoing improvements can be discussed as part of your project requirements. Contact Acutix to outline the support you need.',
  },
];

export default function FAQSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-extrabold uppercase tracking-tight text-[#111111] sm:text-4xl">
          Frequently <span className="text-[#FFAA55]">Asked Questions</span>
        </h2>
        <p className="mt-4 text-base font-medium text-black/75 sm:text-lg">
          Practical information for businesses, students and academic partners.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group cursor-pointer rounded-lg border border-[#0A1230]/20 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#FFAA55] [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer items-center justify-between text-base font-bold text-[#111111] transition-colors hover:text-[#FFAA55] sm:text-lg">
              {faq.question}
              <span className="text-[#0A1230] transition duration-300 group-open:rotate-180 group-hover:text-[#FFAA55]" aria-hidden="true">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </summary>
            <p className="mt-4 text-sm leading-relaxed text-black/75 sm:text-base">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
