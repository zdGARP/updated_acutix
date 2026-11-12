'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';

interface BlogPost {
  id: string;
  image: string;
  title: string;
  category: 'Software Development' | 'AI & Emerging Tech' | 'Business Technology' | 'Digital Transformation' | 'Company Updates';
  summary: string;
  date: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 'ai-expert-system-2025',
    image: '/Blogs/blog_01.jpg',
    category: 'AI & Emerging Tech',
    title: 'Why Do We Need an AI Expert System in 2025?',
    summary:
      'In 2025, AI expert systems are essential for industries demanding transparency, reliability, and rule-based control. Unlike black-box AI models, expert systems offer explainability, making them ideal for regulated domains like healthcare, finance, and aviation. In areas with limited data but rich domain knowledge — such as civil engineering — expert systems leverage rule-based logic for real-time, auditable decision-making. Their predictable behavior suits safety-critical applications like robotics and aerospace. With the rise of neuro-symbolic AI, these systems blend the strengths of symbolic logic with neural networks, offering both accuracy and accountability.',
    date: 'February 2025',
  },
  {
    id: 'aiops-and-why-it-matters',
    image: '/Blogs/blog_02.jpg',
    category: 'Digital Transformation',
    title: 'What is AIOps and Why It Matters',
    summary:
      'AIOps (Artificial Intelligence for IT Operations) transforms how IT environments are managed. By leveraging machine learning on operational data, AIOps automates issue detection, improves monitoring, and enables predictive maintenance. With reduced downtime and enhanced efficiency, businesses benefit from proactive alerts and optimized workflows. To implement AIOps successfully, start with high-quality data, define goals, and promote collaboration between IT and data teams.',
    date: 'January 2025',
  },
  {
    id: 'sitemap-google-index-better',
    image: '/Blogs/blog_03.jpg',
    category: 'Software Development',
    title: 'How a Sitemap Helps Google Index Your Website Better',
    summary:
      'A sitemap is vital for ensuring your web pages are quickly and accurately indexed by search engines. It informs Google about the structure of your site, helping it discover even deeply nested or newly added pages. By generating and submitting an XML sitemap to Google Search Console, you enhance visibility, improve SEO rankings, and boost discoverability for your most important content.',
    date: 'January 2025',
  },
  {
    id: 'gen-ai-makes-debugging-easier',
    image: '/Blogs/blog_04.jpg',
    category: 'AI & Emerging Tech',
    title: 'How Generative AI Makes Debugging Easier',
    summary:
      'Generative AI is reshaping software debugging by simplifying complex error handling. It translates error messages into human-readable explanations, suggests code fixes, and even rewrites functions to handle edge cases. Integrated with IDEs, GenAI offers real-time suggestions, debugging scripts, and testing enhancements. This leads to faster development, cleaner code, and fewer production bugs.',
    date: 'December 2024',
  },
  {
    id: 'is-agentic-ai-killing-developer-jobs',
    image: '/Blogs/blog_05.jpg',
    category: 'Business Technology',
    title: 'Is Agentic AI Killing Developer Jobs?',
    summary:
      'Agentic AI systems automate repetitive tasks like boilerplate coding, test generation, and performance optimization. They now plan and execute complex development cycles, raising concerns about job security for low-skill roles. However, skilled developers remain crucial — not just as coders but as orchestrators, architects, and domain experts. Future roles will focus on AI-augmented workflows, system design, and cross-domain knowledge integration.',
    date: 'December 2024',
  },
  {
    id: '5-ai-tools-to-create-websites',
    image: '/Blogs/blog_06.jpg',
    category: 'Software Development',
    title: '5 AI Tools to Create Websites Effortlessly',
    summary:
      'AI is revolutionizing website creation. Tools like WIX ADI and Framer AI offer instant layout generation from prompts. Durable is ideal for small businesses, delivering websites in under 2 minutes. 10Web empowers WordPress users with AI-powered migration and building tools, while Bookmark’s AIDA allows full customization with AI assistance. These tools make web design faster, easier, and more intuitive.',
    date: 'November 2024',
  },
  {
    id: 'acutix-mentorship-program',
    image: '/Blogs/blog_07.jpg',
    category: 'Company Updates',
    title: 'Acutix Mentorship Program: Learn. Build. Grow.',
    summary:
      'Our mentorship program targets pre-final and final-year students with prior internship experience. Students gain hands-on exposure to real-world projects in domains like Web Development, AI Tools, and UI/UX. With personalized mentoring from Acutix experts, certifications, and career networking opportunities, the program enhances resumes and accelerates professional growth. Apply now and take your skills to the next level.',
    date: 'November 2024',
    featured: true,
  },
  {
    id: 'large-video-models-lvms',
    image: '/Blogs/blog_08.jpg',
    category: 'AI & Emerging Tech',
    title: 'What Are Large Video Models (LVMs)?',
    summary:
      'LVMs are powerful AI models built to process, understand, and generate video content. They handle multimodal inputs — video, audio, and text — enabling sophisticated applications in video summarization, surveillance, and sports analytics. Their temporal awareness allows them to track motion and events over time. Trained on massive datasets, LVMs are revolutionizing how machines understand dynamic visual content.',
    date: 'October 2024',
  },
  {
    id: 'why-choose-nodejs-over-springboot',
    image: '/Blogs/blog_09.jpg',
    category: 'Software Development',
    title: 'Why Choose Node.js Over Spring Boot?',
    summary:
      'Node.js excels in real-time, I/O-heavy applications thanks to its non-blocking, event-driven model. Its use of JavaScript across the stack allows rapid development and unified logic. However, Spring Boot is better suited for enterprise systems requiring transaction control, strong type safety, and robust security features. Choose based on your app’s performance, scale, and existing tech stack.',
    date: 'October 2024',
  },
];

const categories = [
  'All Articles',
  'Software Development',
  'AI & Emerging Tech',
  'Business Technology',
  'Digital Transformation',
  'Company Updates',
];

export default function BlogPosts() {
  const [activeCategory, setActiveCategory] = useState('All Articles');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const filteredPosts = activeCategory === 'All Articles'
    ? blogPosts
    : blogPosts.filter((post) => post.category === activeCategory);

  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[6];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* 1. Dark Blue Hero Section (#0A1230) */}
      <section className="relative bg-[#0A1230] pt-32 pb-20 px-6 text-white border-b border-[#152352]">
        <div className="container mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF7A1A] mb-3">
            ACUTIX INSIGHTS
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl leading-tight">
            Insights, Ideas &amp; Technology
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Practical insights on software development, digital transformation, emerging technologies, and the ideas shaping the future of business. Our articles aim to make technology easier to understand.
          </p>

          <div className="mt-8">
            <a
              href="#articles-grid"
              className="inline-flex items-center gap-2 rounded-lg bg-[#FF7A1A] hover:bg-[#EA6608] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:scale-[1.02]"
            >
              <span>READ LATEST ARTICLES</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. Filter Articles by Domain & Featured Banner (Light Background) */}
      <section className="py-14 px-6 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto max-w-6xl text-left">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#FF7A1A] mb-1">
            EXPLORE TOPICS
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Filter Articles by Domain
          </h2>

          {/* Filter Pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all ${
                  activeCategory === cat
                    ? 'bg-[#FF7A1A] text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Article Card (#0A1230) */}
          <div className="mt-10 rounded-2xl bg-[#0A1230] border border-[#18295E] p-8 text-white shadow-xl relative overflow-hidden">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#FF7A1A] mb-2">
              FEATURED • TECHNOLOGY IN PRACTICE
            </p>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white max-w-2xl leading-tight">
              {featuredPost.title}
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              {featuredPost.summary}
            </p>
            <div className="mt-6">
              <button
                onClick={() => setSelectedPost(featuredPost)}
                className="inline-flex items-center gap-2 rounded-lg bg-[#FF7A1A] hover:bg-[#EA6608] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all"
              >
                <span>READ ARTICLE</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Tutorials, guides and perspectives (Dark Blue Background #0A1230) */}
      <section id="articles-grid" className="bg-[#0A1230] py-16 px-6 text-white border-y border-[#152352]">
        <div className="container mx-auto max-w-6xl text-left">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#FF7A1A] mb-1">
            RECENT PUBLICATIONS
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Tutorials, guides and perspectives
          </h2>
          <p className="mt-1 text-sm text-slate-400 max-w-xl">
            Practical guides and perspectives from the world of technology.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-[#101D48] rounded-xl border border-[#18295E] overflow-hidden flex flex-col justify-between hover:border-[#1E2E62] transition-colors group"
              >
                <div>
                  {/* Blog Thumbnail Image */}
                  <div className="relative aspect-[16/10] w-full bg-[#0A1230] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3 text-[10px]">
                      <span className="rounded bg-[#152352] px-2 py-0.5 text-slate-300 font-semibold border border-[#18295E]">
                        {post.category}
                      </span>
                      <span className="text-slate-400">{post.date}</span>
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-[#FF7A1A] transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="mt-2.5 text-xs text-slate-400 leading-relaxed line-clamp-3">
                      {post.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <div className="pt-4 border-t border-[#18295E]">
                    <button
                      onClick={() => setSelectedPost(post)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF7A1A] hover:underline"
                    >
                      <span>READ ARTICLE</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Have a Technology Topic in Mind? (Light Background) */}
      <section className="py-14 px-6 bg-white border-b border-slate-200">
        <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Have a Technology Topic in Mind?
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              We welcome questions, ideas, and suggestions for future articles. Share the topics you would like us to explain.
            </p>
          </div>
          <Link
            href="/contact"
            className="whitespace-nowrap rounded-lg bg-[#FF7A1A] hover:bg-[#EA6608] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:scale-[1.02]"
          >
            CONNECT OUR TEAM &rarr;
          </Link>
        </div>
      </section>

      {/* Article Reading Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPost(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
            >
              <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4 bg-slate-50">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF7A1A] block">
                    {selectedPost.category} • {selectedPost.date}
                  </span>
                  <h3 className="font-bold text-slate-900 text-lg">{selectedPost.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="rounded-full p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#0A1230]">
                  <Image
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                  {selectedPost.summary}
                </p>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600">
                  <p className="font-semibold text-slate-800 mb-1">Key Takeaway for Engineering Teams:</p>
                  <p>Adopting resilient architecture, automated pipelines, and continuous learning enables technology products to scale efficiently while sustaining high quality.</p>
                </div>
              </div>

              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">Have questions on this topic?</span>
                <Link
                  href="/contact"
                  className="rounded-lg bg-[#FF7A1A] hover:bg-[#EA6608] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white"
                >
                  DISCUSS WITH US
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
