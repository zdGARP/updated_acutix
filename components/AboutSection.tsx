'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Package,
  Code2,
  Cpu,
  GraduationCap,
  TrendingUp,
  Users,
  ShieldCheck,
  Quote
} from 'lucide-react';

const capabilities = [
  {
    title: 'Software Products',
    description: 'Develop and improve digital products designed for specific workflows and industry needs.',
    icon: Package,
  },
  {
    title: 'Web & Application Development',
    description: 'Create web-based and application solutions tailored to project requirements.',
    icon: Code2,
  },
  {
    title: 'Business Software & Automation',
    description: 'Explore opportunities to simplify repetitive processes and improve how information and workflows are managed.',
    icon: Cpu,
  },
  {
    title: 'Technology Collaboration',
    description: 'Engage with educational institutions and technology communities on relevant projects, learning activities, and collaboration initiatives.',
    icon: GraduationCap,
  },
];

const values = [
  {
    title: 'Practical Problem-Solving',
    description: 'Understand the problem before deciding on the technology.',
    icon: Code2,
  },
  {
    title: 'Continuous Improvement',
    description: 'Learn from feedback, testing, and real-world requirements.',
    icon: TrendingUp,
  },
  {
    title: 'Collaboration',
    description: 'Encourage clear communication, shared ideas, and constructive teamwork.',
    icon: Users,
  },
  {
    title: 'Responsible Development',
    description: 'Consider usability, maintainability, reliability, and the needs of the people using the solution.',
    icon: ShieldCheck,
  },
];

const testimonials = [
  {
    name: 'Prathab Singh',
    role: 'Freelance Collaborator',
    text: "I have worked as freelancer with Acutix soft LLP (formerly Digital Touch IT Solutions), and it has been a fantastic experience. It's a great place to work and make meaningful contributions. Their internship support for students is highly commendable. For small businesses, they are the ideal choice for software solutions.",
  },
  {
    name: 'Rishi Krishna',
    role: 'Event Organizer, CIT HackFusion-24',
    text: "We had the privilege of collaborating with an expert from Acutix soft LLP for an event organized by CIT (HackFusion-24). The panel member carefully assessed all participants' projects and identified the best ones.",
  },
  {
    name: 'Dinesh Vasudevan',
    role: 'Founder, Cricket Coaching Center',
    text: 'I collaborated with Acutix soft LLP to develop websites for my cricket coaching center. Their team delivered an impressive website at a reasonable cost. Definitely a reliable company for your software needs!',
  },
  {
    name: 'Suriyakumar CR',
    role: 'Software Project Partner',
    text: "Skilled software professionals, their expertise and dedication made a significant impact on clients' projects. They get into the requirements well and deliver high-quality solutions.",
  },
  {
    name: 'Nithisha J',
    role: 'Tech Workshop Coordinator',
    text: 'I collaborated with experts from Acutix soft LLP to conduct a knowledge-sharing session on IoT and Blockchain. They delivered an insightful and highly valuable session.',
  },
];

export default function AboutSection() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* 1. Dark Blue Hero Section (#0A1230) */}
      <section className="relative bg-[#0A1230] pt-32 pb-20 px-6 text-white border-b border-[#152352]">
        <div className="container mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF7A1A] mb-3">
            ABOUT ACUTIX
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl leading-tight">
            About Acutix Soft LLP
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Acutix Soft LLP works in software development and digital solutions, with an interest in connecting technology development with practical learning to groom next-generation tech talent and build useful software.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#who-we-are"
              className="inline-flex items-center gap-2 rounded-lg bg-[#FF7A1A] hover:bg-[#EA6608] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:scale-[1.02]"
            >
              <span>WHO WE ARE</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#what-we-do"
              className="inline-flex items-center rounded-lg border border-[#18295E] bg-[#101D48]/50 hover:bg-[#101D48] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors"
            >
              WHAT WE DO
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg border border-[#18295E] bg-[#101D48]/50 hover:bg-[#101D48] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Vision and mission (Light Background) */}
      <section id="who-we-are" className="py-16 px-6 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto max-w-6xl text-left">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
            <div>
              <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-[#FF7A1A]">
                VISION &amp; MISSION
              </p>
              <h2 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Building useful software. Supporting practical learning.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Acutix Soft LLP brings software development and practical learning together to address real business needs and help emerging developers grow through real-world work.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 border-t border-slate-200 sm:grid-cols-2">
            <div className="py-6 sm:pr-8 sm:py-8">
              <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-[#FF7A1A]">
                OUR VISION
              </h3>
              <p className="max-w-xl text-sm leading-relaxed text-slate-700 sm:text-base">
                To build reliable software and foster an environment where practical learning and technology development support each other through real-world projects.
              </p>
            </div>
            <div className="border-t border-slate-200 py-6 sm:border-l sm:border-t-0 sm:pl-8 sm:py-8">
              <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-[#FF7A1A]">
                OUR MISSION
              </h3>
              <p className="max-w-xl text-sm leading-relaxed text-slate-700 sm:text-base">
                To create useful digital software solutions that help businesses operate more effectively and support learning opportunities for emerging developers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. A message from leadership (Dark Blue Background #0A1230) */}
      <section className="bg-[#0A1230] py-16 px-6 text-white border-y border-[#152352]">
        <div className="container mx-auto max-w-6xl text-left">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#FF7A1A] mb-1">
            LEADERSHIP VISION
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-8">
            A message from leadership
          </h2>

          <div className="rounded-2xl border border-[#18295E] bg-[#101D48] p-8 shadow-xl flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="flex-shrink-0 w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-[#FF7A1A]/40 relative bg-[#0A1230] shadow-md">
              <Image
                src="/About us/director.png"
                alt="Leadership Vision"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="flex-1">
              <Quote className="h-6 w-6 text-[#FF7A1A] mb-3 opacity-80" />
              <blockquote className="text-base sm:text-lg font-bold text-amber-200 italic mb-4">
                &ldquo;The best way to predict the future is to create it.&rdquo; <span className="text-xs font-normal text-slate-400 not-italic">&mdash; Abraham Lincoln</span>
              </blockquote>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                At Acutix Soft, we believe that real software engineering is learned by building, not just reading. We set out to build products that solve operational headaches for businesses while inviting passionate student developers to learn inside production codebases.
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                As our product ecosystem expands into healthcare, insurance, logistics, and enterprise workflows, we remain committed to engineering excellence, transparent collaboration, and grooming developers who can deliver on day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Turning Requirements Into Digital Solutions (Light Background) */}
      <section id="what-we-do" className="py-16 px-6 bg-white border-b border-slate-200">
        <div className="container mx-auto max-w-6xl text-left">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#FF7A1A] mb-1">
            WHAT WE DO
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Turning Requirements Into Digital Solutions
          </h2>
          <p className="mt-1 text-sm text-slate-600 max-w-xl">
            We help organizations design, engineer, and deploy reliable software products and bespoke digital platforms.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <Icon className="h-5 w-5 text-[#FF7A1A] mb-3" />
                    <h3 className="text-sm font-bold text-slate-900 mb-1.5">{cap.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{cap.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-lg bg-[#FF7A1A] hover:bg-[#EA6608] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all"
            >
              <span>EXPLORE OUR PRODUCTS</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-lg border border-slate-300 bg-white hover:bg-slate-50 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-700 transition-colors"
            >
              VIEW OUR SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Principles That Guide Our Work (Dark Blue Background #0A1230) */}
      <section className="bg-[#0A1230] py-16 px-6 text-white border-y border-[#152352]">
        <div className="container mx-auto max-w-6xl text-left">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
            <div>
              <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-[#FF7A1A]">
                OUR CORE VALUES
              </p>
              <h2 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Principles that guide our work
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Understand the problem first, work together, and build dependable solutions that improve with real-world use.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className={`flex gap-4 border-b border-white/15 py-6 sm:px-6 sm:py-8 lg:border-b-0 lg:border-l ${idx % 2 === 0 ? 'sm:border-r sm:border-r-white/15 lg:border-r-0' : 'sm:border-r-0'} ${idx === 0 ? 'sm:pl-0 lg:border-l-0' : ''} ${idx >= 2 ? 'sm:border-t' : ''} ${idx === 2 ? 'lg:border-t-0' : ''}`}
                >
                  <Icon className="mt-0.5 h-7 w-7 flex-shrink-0 text-[#FF7A1A]" aria-hidden="true" />
                  <div>
                    <h3 className="mb-2 text-base font-bold text-white">{val.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-300">{val.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Connecting Technology and Learning (Light Background) */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto max-w-6xl text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#FF7A1A] mb-1">
                INDUSTRY &amp; ACADEMIA BRIDGE
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Connecting Technology and Learning
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                We believe classroom education is strengthened when paired with real-world software development. Through our institutional alliances, students gain experience on live commercial SaaS products with direct mentorship from senior developers.
              </p>

              <div className="mt-6">
                <Link
                  href="/collaborations"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#FF7A1A] hover:bg-[#EA6608] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:scale-[1.02]"
                >
                  <span>EXPLORE COLLABORATION</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <Image
                  src="/About us/Together-with-us.jpg"
                  alt="Acutix Team and Student Engineers"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. What our collaborators say (Dark Blue Background #0A1230) */}
      <section className="bg-[#0A1230] py-16 px-6 text-white border-y border-[#152352]">
        <div className="container mx-auto max-w-6xl text-left">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#FF7A1A] mb-1">
            COMMUNITY &amp; CLIENT TESTIMONIALS
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-8">
            What our collaborators say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-[#18295E] bg-[#101D48] p-6 flex flex-col justify-between hover:border-[#1E2E62] transition-colors"
              >
                <div>
                  <Quote className="h-4 w-4 text-[#FF7A1A] mb-2 opacity-70" />
                  <p className="text-xs text-slate-300 leading-relaxed italic mb-4">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
                <div className="pt-3 border-t border-[#18295E]">
                  <h4 className="text-xs font-bold text-white">{t.name}</h4>
                  <p className="text-[11px] text-[#FF7A1A]">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Let's Start a Conversation (Light Background) */}
      <section className="py-14 px-6 bg-white border-b border-slate-200">
        <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Let&apos;s Start a Conversation
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Whether you have a software requirement, a collaboration proposal, or want to discuss an alliance, our team is ready to connect.
            </p>
          </div>
          <Link
            href="/contact"
            className="whitespace-nowrap rounded-lg bg-[#FF7A1A] hover:bg-[#EA6608] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:scale-[1.02]"
          >
            GET IN TOUCH &rarr;
          </Link>
        </div>
      </section>

    </div>
  );
}
