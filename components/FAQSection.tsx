
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
    <section className="py-16 px-4 max-w-4xl mx-auto my-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-lg leading-7 text-gray-600 dark:text-gray-300">
          Everything you need to know about our company and services.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details 
            key={index} 
            className="group border border-blue-100 dark:border-[#23272b] rounded-xl bg-white dark:bg-gray-900 p-6 shadow-md cursor-pointer [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex items-center justify-between font-semibold text-black dark:text-white text-lg hover:text-blue-600 dark:hover:text-blue-400 transition cursor-pointer">
              {faq.question}
              <span className="transition duration-300 group-open:rotate-180">
                {/* A simple arrow icon */}
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="mt-4 text-gray-700 dark:text-white leading-relaxed">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}