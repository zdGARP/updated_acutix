
'use client';
import React from 'react';

export default function FAQSection() {
  const faqs = [
    {
      question: "What digital solutions help businesses improve efficiency and growth?",
      answer: "Custom software, web applications, mobile apps, SaaS platforms, and business automation solutions help organizations streamline operations, improve customer experiences, and support long-term growth through technology."
    },
    {
      question: "Why do businesses invest in custom software solutions?",
      answer: "Custom software is built around specific business needs, helping improve productivity, automate workflows, enhance data management, and provide greater flexibility than generic off-the-shelf solutions."
    },
    {
      question: "How can SaaS platforms support modern business operations?",
      answer: "Cloud-based SaaS platforms simplify business processes, improve accessibility, reduce infrastructure costs, and enable teams to manage operations, customers, and workflows more efficiently from anywhere."
    },
    {
      question: "What makes a successful website, application, or digital product?",
      answer: "Successful digital products combine clear business goals, user-focused design, reliable technology, scalability, security, and continuous optimization to deliver long-term value and performance."
    },
    {
      question: "What technologies are commonly used to build scalable software solutions?",
      answer: "Modern software solutions leverage cloud infrastructure, APIs, databases, web technologies, mobile frameworks, and secure architectures to deliver reliable, high-performance digital experiences."
    },
    {
      question: "Why are maintenance, support, and continuous improvements important?",
      answer: "Regular updates, security enhancements, performance monitoring, and feature improvements help software remain reliable, secure, and aligned with evolving business and customer requirements."
    },
    {
      question: "How do practical training programs and real-world projects benefit students?",
      answer: "Hands-on learning through live projects helps students develop technical skills, understand industry workflows, gain professional experience, and improve career readiness in the technology sector."
    }
  ];

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl uppercase text-white">
          Frequently <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD98A] via-[#F7B7A3] to-[#5EC6D9]">Asked Questions</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-400 font-medium">
          Everything you need to know about our digital systems and incubator workspace.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details 
            key={index} 
            className="group border border-white/5 rounded-2xl bg-[#090b10]/60 p-6 shadow-xl hover:border-cyan-500/20 transition-all duration-300 cursor-pointer [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex items-center justify-between font-bold text-gray-200 text-base sm:text-lg hover:text-cyan-400 transition-colors cursor-pointer">
              {faq.question}
              <span className="transition duration-300 group-open:rotate-180 text-gray-500 group-hover:text-cyan-400">
                {/* A simple arrow icon */}
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="mt-4 text-gray-400 leading-relaxed text-sm sm:text-base">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}