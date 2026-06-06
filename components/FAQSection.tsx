'use client';
import React from 'react';

export default function FAQSection() {
  const faqs = [
    {
      question: "What services does Acutix Soft LLP provide?",
      answer: "Acutix Soft LLP provides end-to-end digital transformation services including Website Development, Mobile Application Development (Android/iOS), and Custom Software Solutions, alongside Industrial-Academic Collaboration and technical training."
    },
    {
      question: "Where is Acutix Soft LLP located?",
      answer: "Acutix Soft LLP is located in Chennai, India, at No: 4/110, 4th Cross Street, Kalathumettu Street, Kottivakkam, Chennai, Tamil Nadu 600041."
    },
    {
      question: "What are the core products in the Acutix Product Suite?",
      answer: "The suite includes Gym Pad (fitness management), Clinic CMS (medical practice onboarding), and the ASCAS System (fertility center management)."
    },
    {
      question: "How does the Acutix Gym Pad product work?",
      answer: "Gym Pad features three interconnected portals: a Trainee Portal for booking, a Trainer Dashboard for diet and attendance, and an Admin Control Center for oversight."
    },
    {
      question: "What is the Acutix Mentorship Program?",
      answer: "It is a structured training initiative for students offering hands-on experience with live projects in Web Development, AI Tools, and UI/UX."
    },
    {
      question: "Does Acutix Soft LLP offer custom software for startups?",
      answer: "Yes, they specialize in affordable, agile, and scalable tech solutions specifically tailored for startups and small businesses."
    },
    {
      question: "What technologies does Acutix use for development?",
      answer: "Acutix uses a modern stack including React, Django, SQLite, AWS, and WhatsApp API (AiSensy) integration."
    },
    {
      question: "What is the focus of the Acutix 'Latest Insights' blog?",
      answer: "The blog focuses on emerging technologies like Agentic AI, AIOps, AI Expert Systems, and technical guides on GenAI and SEO."
    },
    {
      question: "How can a business contact Acutix Soft LLP for a project?",
      answer: "Businesses can contact Acutix via email at contact@acutixsoft.com or by phone at +91 6369936706."
    },
    {
      question: "Why should small businesses choose Acutix Soft LLP?",
      answer: "Acutix offers 'Pocket-Friendly Quality,' transparent pricing, and scalable solutions designed to drive operational efficiency for entrepreneurs."
    }
  ];

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto my-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-lg leading-7 text-gray-600 dark:text-gray-300">
          Everything you need to know about Acutix Soft LLP and our services.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details 
            key={index} 
            className="group border border-gray-200 rounded-lg bg-white p-6 shadow-sm cursor-pointer [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex items-center justify-between font-semibold text-gray-900 text-lg">
              {faq.question}
              <span className="transition duration-300 group-open:rotate-180">
                {/* A simple arrow icon */}
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="mt-4 text-gray-600 leading-relaxed">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}