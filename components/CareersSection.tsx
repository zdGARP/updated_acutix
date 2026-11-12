'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Users,
  CheckCircle2,
  Code2,
  Workflow,
  Sparkles,
  BookOpen,
  Send,
  ChevronRight,
  Search,
  Cpu
} from 'lucide-react';

const whyAcutixPoints = [
  {
    title: 'Practical Experience',
    description:
      'Project-based tasks and practical software development, depending on your role.',
    icon: Code2,
  },
  {
    title: 'Collaborative Environment',
    description:
      'Share ideas, work with team mates, and approach technical challenges systematically.',
    icon: Users,
  },
  {
    title: 'Continuous Learning',
    description:
      'Build technical knowledge, problem solving, communication, and professional skills.',
    icon: BookOpen,
  },
  {
    title: 'Real-World Perspective',
    description:
      'See how requirements, development, testing, and delivery work in actual projects.',
    icon: Workflow,
  },
];

const opportunities = [
  {
    title: 'Full-Time Positions',
    description:
      'Software development and other technical operations positions become available.',
    icon: Briefcase,
    badge: 'Engineering Roles',
    image: '/Home/hero.jpg',
  },
  {
    title: 'Internship Opportunities',
    description:
      'Internships that match your technical skills, interests, and learning goals.',
    icon: GraduationCap,
    badge: 'Student Cohorts',
    image: '/04.jpg',
  },
  {
    title: 'Academic Collaboration',
    description:
      'Students and institutions can discuss technical projects, workshops, and industry-academia initiatives.',
    icon: Sparkles,
    badge: 'MoU & Labs',
    image: '/05.jpg',
  },
];

const galleryImages = [
  '/Programs/gallery_01.jpg',
  '/Programs/gallery_02.jpg',
  '/Programs/gallery_03.jpg',
  '/Programs/gallery_04.jpg',
  '/Programs/gallery_05.jpg',
  '/Programs/gallery_06.jpg',
  '/Programs/gallery_07.jpg',
  '/Programs/gallery_08.jpg',
];

const candidateQualities = [
  {
    title: 'Curiosity & Learning',
    desc: 'Curiosity and a genuine willingness to learn modern technologies.',
    icon: Sparkles
  },
  {
    title: 'Problem-Solving',
    desc: 'Logical thinking, analytical design, and systematic debugging.',
    icon: Cpu
  },
  {
    title: 'Clear Communication',
    desc: 'Open teamwork, constructive pull-request reviews, and syncs.',
    icon: Users
  },
  {
    title: 'Attention to Detail',
    desc: 'Responsibility, consistency, code quality, and testing discipline.',
    icon: CheckCircle2
  },
  {
    title: 'Software Passion',
    desc: 'An authentic interest in building and improving production software.',
    icon: Code2
  }
];

const applicationSteps = [
  {
    step: '01',
    title: 'Explore',
    description: 'Review available roles, internships, and their requirements.',
    icon: Search
  },
  {
    step: '02',
    title: 'Apply',
    description: 'Submit your résumé and the information the listing requests.',
    icon: Send
  },
  {
    step: '03',
    title: 'Review',
    description: 'Our team evaluates applications against the role requirements.',
    icon: CheckCircle2
  },
  {
    step: '04',
    title: 'Connect',
    description: 'Suitable candidates may be contacted about next steps.',
    icon: Users
  },
];

export default function CareersSection() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* 1. Dark Blue Hero Section (#0A1230) */}
      <section className="relative bg-[#0A1230] pt-32 pb-20 px-6 text-white border-b border-[#152352]">
        <div className="container mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF7A1A] mb-3">
            CAREERS &amp; INTERNSHIPS
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl leading-tight">
            Build Your Future with Acutix
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Work on real-world technology, develop practical skills, and collaborate with people passionate about building useful software. We value curiosity, continuous learning, teamwork, and turning ideas into working solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#opportunities"
              className="inline-flex items-center gap-2 rounded-lg bg-[#FF7A1A] hover:bg-[#EA6608] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:scale-[1.02]"
            >
              <span>EXPLORE OPPORTUNITIES</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg border border-[#18295E] bg-[#101D48]/50 hover:bg-[#101D48] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Learn by Building. Grow by Doing. (Light Background) */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto max-w-7xl">
          {/* Top Row: Two-column layout matching design template */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pb-12 border-b border-slate-200">
            {/* Left Column: Eyebrow + Main Heading */}
            <div className="lg:col-span-7 text-left">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#FF7A1A] mb-3">
                WHY CHOOSE ACUTIX
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Learn by Building.<br />Grow by Doing.
              </h2>
            </div>

            {/* Right Column: Paragraph + Action Link */}
            <div className="lg:col-span-5 text-left flex flex-col justify-between h-full pt-1">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Production-grade development, hands-on technical tasks, and collaborative team growth. Work on real-world technology, develop practical skills, and collaborate with engineering leads.
              </p>
              <div className="mt-4">
                <a
                  href="#opportunities"
                  className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF7A1A] hover:text-[#EA6608] transition-colors"
                >
                  <span>EXPLORE OPPORTUNITIES</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Row: Horizontal strip of 4 items with vertical dividers (No Boxes!) */}
          <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-slate-200">
            {whyAcutixPoints.map((point, idx) => {
              const PointIcon = point.icon;
              return (
                <div
                  key={idx}
                  className={`flex flex-col items-start lg:px-6 text-left ${idx === 0 ? 'lg:pl-0' : ''} ${idx === whyAcutixPoints.length - 1 ? 'lg:pr-0' : ''}`}
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <PointIcon className="h-6 w-6 text-[#FF7A1A] flex-shrink-0" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    {point.title}
                  </h4>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Life at Acutix Gallery */}
          <div className="mt-14 pt-10 border-t border-slate-200">
            <div className="mb-6">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#FF7A1A] mb-1">
                LIFE AT ACUTIX
              </p>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Our Collaborative Culture &amp; Team Moments
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {galleryImages.map((src, idx) => (
                <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm group">
                  <Image
                    src={src}
                    alt={`Life at Acutix ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Find Your Opportunity (Dark Blue Background #0A1230) */}
      <section id="opportunities" className="bg-[#0A1230] py-16 px-6 text-white border-y border-[#152352]">
        <div className="container mx-auto max-w-6xl text-left">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#FF7A1A] mb-1">
            CAREER OPPORTUNITIES
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Find Your Opportunity
          </h2>
          <p className="mt-1 text-sm text-slate-400 max-w-2xl leading-relaxed">
            Open positions, internship programmes, and academic collaboration with our engineering team.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {opportunities.map((opp, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-[#18295E] bg-[#101D48] overflow-hidden flex flex-col justify-between hover:border-[#1E2E62] transition-colors"
              >
                <div className="relative aspect-[16/9] w-full bg-[#0A1230]">
                  <Image
                    src={opp.image}
                    alt={opp.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-[#0A1230]/80 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-white/20 text-[10px] font-bold uppercase tracking-wider text-[#FF7A1A]">
                    {opp.badge}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-white mb-2">{opp.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed min-h-[48px]">{opp.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/contact?service=Careers%20or%20internship"
              className="inline-flex items-center gap-2 rounded-lg bg-[#FF7A1A] hover:bg-[#EA6608] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:scale-[1.02]"
            >
              <span>ENQUIRE ABOUT OPPORTUNITIES</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Qualities we value in candidates (Light Background) */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto max-w-7xl">
          {/* Top Row: Two-column layout matching design template */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pb-12 border-b border-slate-200">
            {/* Left Column: Eyebrow + Main Heading */}
            <div className="lg:col-span-7 text-left">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#FF7A1A] mb-3">
                WHAT WE LOOK FOR
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Qualities We Value in Candidates
              </h2>
            </div>

            {/* Right Column: Paragraph + Action Link */}
            <div className="lg:col-span-5 text-left flex flex-col justify-between h-full pt-1">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We look for curious, committed learners ready to take ownership of real software challenges, communicate clearly, and build production-grade applications.
              </p>
              <div className="mt-4">
                <Link
                  href="/contact?service=Careers%20or%20internship"
                  className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF7A1A] hover:text-[#EA6608] transition-colors"
                >
                  <span>ENQUIRE ABOUT ROLES</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Row: Horizontal strip of 5 qualities with vertical dividers (No Boxes!) */}
          <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-0 lg:divide-x lg:divide-slate-200">
            {candidateQualities.map((quality, idx) => {
              const QualityIcon = quality.icon;
              return (
                <div
                  key={idx}
                  className={`flex flex-col items-start lg:px-5 text-left ${idx === 0 ? 'lg:pl-0' : ''} ${idx === candidateQualities.length - 1 ? 'lg:pr-0' : ''}`}
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <QualityIcon className="h-6 w-6 text-[#FF7A1A] flex-shrink-0" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    {quality.title}
                  </h4>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {quality.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. How to Apply (Dark Blue Background #0A1230) */}
      <section className="bg-[#0A1230] py-20 px-6 text-white border-y border-[#152352]">
        <div className="container mx-auto max-w-7xl">
          {/* Top Row: Two-column layout matching design template */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pb-12 border-b border-[#18295E]/70">
            {/* Left Column: Eyebrow + Main Heading */}
            <div className="lg:col-span-7 text-left">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#FF7A1A] mb-3">
                OUR APPLICATION PROCESS
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                How to Apply
              </h2>
            </div>

            {/* Right Column: Paragraph + Action Link */}
            <div className="lg:col-span-5 text-left flex flex-col justify-between h-full pt-1">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                A transparent process designed for fairness, clarity, and constructive feedback. From reviewing open listings to code evaluations and team syncs.
              </p>
              <div className="mt-4">
                <Link
                  href="/contact?service=Careers%20or%20internship"
                  className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF7A1A] hover:text-[#FFAA55] transition-colors"
                >
                  <span>APPLY NOW</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Row: Horizontal strip of 4 steps with vertical dividers (No Boxes!) */}
          <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#18295E]">
            {applicationSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={step.step}
                  className={`flex flex-col items-start lg:px-6 text-left ${idx === 0 ? 'lg:pl-0' : ''} ${idx === applicationSteps.length - 1 ? 'lg:pr-0' : ''}`}
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <StepIcon className="h-6 w-6 text-[#FF7A1A] flex-shrink-0" />
                    <span className="text-xs font-mono font-bold text-[#FF7A1A]">STEP {step.step}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white leading-snug">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Ready to Take the Next Step? (Light Background) */}
      <section className="py-14 px-6 bg-white border-b border-slate-200">
        <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Ready to Take the Next Step?
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Explore current opportunities or contact our team about future openings.
            </p>
          </div>
          <Link
            href="/contact?service=Careers%20or%20internship"
            className="whitespace-nowrap rounded-lg bg-[#FF7A1A] hover:bg-[#EA6608] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:scale-[1.02]"
          >
            VIEW OPEN POSITIONS &rarr;
          </Link>
        </div>
      </section>

    </div>
  );
}
