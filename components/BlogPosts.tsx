'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const blogPosts = [
  {
    image: '/blog_01.jpg',
    title: 'Why Do We Need an AI Expert System in 2025?',
    summary:
      'In 2025, AI expert systems are essential for industries demanding transparency, reliability, and rule-based control. Unlike black-box AI models, expert systems offer explainability, making them ideal for regulated domains like healthcare, finance, and aviation. In areas with limited data but rich domain knowledge — such as civil engineering — expert systems leverage rule-based logic for real-time, auditable decision-making. Their predictable behavior suits safety-critical applications like robotics and aerospace. With the rise of neuro-symbolic AI, these systems blend the strengths of symbolic logic with neural networks, offering both accuracy and accountability.'
  },
  {
    image: '/blog_02.jpg',
    title: 'What is AIOps and Why It Matters',
    summary:
      'AIOps (Artificial Intelligence for IT Operations) transforms how IT environments are managed. By leveraging machine learning on operational data, AIOps automates issue detection, improves monitoring, and enables predictive maintenance. With reduced downtime and enhanced efficiency, businesses benefit from proactive alerts and optimized workflows. To implement AIOps successfully, start with high-quality data, define goals, and promote collaboration between IT and data teams.'
  },
  {
    image: '/blog_03.jpg',
    title: 'How a Sitemap Helps Google Index Your Website Better',
    summary:
      'A sitemap is vital for ensuring your web pages are quickly and accurately indexed by search engines. It informs Google about the structure of your site, helping it discover even deeply nested or newly added pages. By generating and submitting an XML sitemap to Google Search Console, you enhance visibility, improve SEO rankings, and boost discoverability for your most important content.'
  },
  {
    image: '/blog_04.jpg',
    title: 'How Generative AI Makes Debugging Easier',
    summary:
      'Generative AI is reshaping software debugging by simplifying complex error handling. It translates error messages into human-readable explanations, suggests code fixes, and even rewrites functions to handle edge cases. Integrated with IDEs, GenAI offers real-time suggestions, debugging scripts, and testing enhancements. This leads to faster development, cleaner code, and fewer production bugs.'
  },
  {
    image: '/blog_05.jpg',
    title: 'Is Agentic AI Killing Developer Jobs?',
    summary:
      'Agentic AI systems automate repetitive tasks like boilerplate coding, test generation, and performance optimization. They now plan and execute complex development cycles, raising concerns about job security for low-skill roles. However, skilled developers remain crucial — not just as coders but as orchestrators, architects, and domain experts. Future roles will focus on AI-augmented workflows, system design, and cross-domain knowledge integration.'
  },
  {
    image: '/blog_06.jpg',
    title: '5 AI Tools to Create Websites Effortlessly',
    summary:
      'AI is revolutionizing website creation. Tools like WIX ADI and Framer AI offer instant layout generation from prompts. Durable is ideal for small businesses, delivering websites in under 2 minutes. 10Web empowers WordPress users with AI-powered migration and building tools, while Bookmark’s AIDA allows full customization with AI assistance. These tools make web design faster, easier, and more intuitive.'
  },
  {
    image: '/blog_07.jpg',
    title: 'Acutix Mentorship Program: Learn. Build. Grow.',
    summary:
      'Our mentorship program targets pre-final and final-year students with prior internship experience. Students gain hands-on exposure to real-world projects in domains like Web Development, AI Tools, and UI/UX. With personalized mentoring from Acutix experts, certifications, and career networking opportunities, the program enhances resumes and accelerates professional growth. Apply now and take your skills to the next level.'
  },
  {
    image: '/blog_08.jpg',
    title: 'What Are Large Video Models (LVMs)?',
    summary:
      'LVMs are powerful AI models built to process, understand, and generate video content. They handle multimodal inputs — video, audio, and text — enabling sophisticated applications in video summarization, surveillance, and sports analytics. Their temporal awareness allows them to track motion and events over time. Trained on massive datasets, LVMs are revolutionizing how machines understand dynamic visual content.'
  },
  {
    image: '/blog_09.jpg',
    title: 'Why Choose Node.js Over Spring Boot?',
    summary:
      'Node.js excels in real-time, I/O-heavy applications thanks to its non-blocking, event-driven model. Its use of JavaScript across the stack allows rapid development and unified logic. However, Spring Boot is better suited for enterprise systems requiring transaction control, strong type safety, and robust security features. Choose based on your app’s performance, scale, and existing tech stack.'
  }
];

const BlogPosts = () => {
  const [modalIdx, setModalIdx] = useState<number | null>(null);

  return (
    <section className="bg-gradient-to-br from-white via-gray-50 to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-secondary-900">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-[#323b42] dark:text-white mb-2 tracking-tight animate-fadeUp drop-shadow-lg flex items-center justify-center gap-2">
            Latest Insights
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fadeIn">
            Discover the latest trends, insights, and best practices in technology and digital transformation
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, idx) => (
            <div
              key={post.title}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100 dark:border-gray-800">
              <div className="relative w-full h-44 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={idx < 3}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-6">{post.summary}</p>
                <button
                  className="inline-flex items-center text-[#a52a2a] font-semibold hover:underline text-base transition-colors duration-200 focus:outline-none cursor-pointer"
                  onClick={() => setModalIdx(idx)}>
                  Read More
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        <AnimatePresence>
          {typeof modalIdx === 'number' && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}>
              <motion.div
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-xl w-full relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}>
                <button
                  className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-2xl text-gray-500 hover:bg-[#a52a2a] hover:text-white shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-secondary cursor-pointer"
                  onClick={() => setModalIdx(null)}
                  aria-label="Close">
                  <span className="pointer-events-none">✖</span>
                </button>
                <div className="mb-4">
                  <Image
                    src={blogPosts[modalIdx].image}
                    alt={blogPosts[modalIdx].title}
                    width={600}
                    height={260}
                    className="rounded-xl object-cover w-full h-56"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{blogPosts[modalIdx].title}</h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-2 whitespace-pre-line">
                  {blogPosts[modalIdx].summary}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BlogPosts;
