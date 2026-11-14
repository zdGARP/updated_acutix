import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  Cloud,
  CheckCircle2,
  Terminal,
  Code,
  Code2,
  Users,
  ChevronRight,
  Sparkles,
  Layers,
  Settings,
  GraduationCap,
  Award,
  Trophy
} from 'lucide-react';
import AcutixFAQSchema from '@/components/AcutixFAQSchema';
import AnimatedCounter from '@/components/AnimatedCounter';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Digital Solutions & Industry-Academia Engineering | Acutix Soft',
  description: 'Acutix Soft builds production-grade software for growing businesses while training and deploying high-caliber developer talent through real-world SaaS engineering programs.',
};

const products = [
  {
    id: 'ferticare',
    name: 'FertiCare',
    letter: 'F',
    letterBg: 'bg-emerald-500',
    category: "Fertility & Women's Health",
    audience: "Specialized fertility workflows, EMR, and clinic operations for IVF centers.",
    image: '/Products/ferticare-ascas-dashboard.png',
  },
  {
    id: 'gym-pad',
    name: 'GymPad',
    letter: 'G',
    letterBg: 'bg-orange-500',
    category: 'Smart Fitness Management',
    audience: 'Tailored fitness platform coordinating memberships, schedules, and trainer guidance.',
    image: '/Products/gympad-fitness-illustration.png',
  },
  {
    id: 'motor-consult',
    name: 'MotorConsult',
    letter: 'M',
    letterBg: 'bg-blue-600',
    category: 'Motor Insurance Workflows',
    audience: 'Organize client records, policy renewals, claims tracking, and commission analytics.',
    image: '/Products/motorconsult-development-illustration.jpg',
  },
  {
    id: 'box-care',
    name: 'BoxCare',
    letter: 'B',
    letterBg: 'bg-purple-600',
    category: 'Packaging CRM & E-Commerce',
    audience: 'Connect custom box enquiries to automated quotations, production, and delivery tracking.',
    image: '/Products/boxcare-development-illustration.jpg',
  },
  {
    id: 'clinic-cms',
    name: 'Clinic CMS',
    letter: 'C',
    letterBg: 'bg-teal-500',
    category: 'General Clinic Administration',
    audience: 'Client self-service, staff scheduling, electronic medical charts, and automated notices.',
    image: '/Products/clinic-cms-development-illustration.jpg',
  },
];

const faqs = [
  {
    question: 'What software development services does Acutix offer?',
    answer: 'We build custom web apps, mobile apps, SaaS products, APIs, and enterprise cloud solutions tailored to business requirements.'
  },
  {
    question: 'How does your development process operate?',
    answer: 'We employ an agile sprint methodology with continuous integration, weekly stakeholder demos, clear milestones, and complete codebase ownership.'
  },
  {
    question: 'How can a college partner with Acutix?',
    answer: 'Colleges can partner with us through MoU-backed academic labs, curriculum enrichment, live student project cohorts, and faculty enablement.'
  },
  {
    question: 'Do you offer post-launch support and maintenance?',
    answer: 'Yes, we provide comprehensive SLA-backed maintenance, server monitoring, bug fixes, performance optimization, and feature enhancements.'
  },
  {
    question: 'How do you quote project estimates?',
    answer: 'We provide transparent fixed-price or dedicated team sprint estimates based on detailed requirement discovery, architecture sizing, and milestone scoping.'
  },
  {
    question: 'What happens when a project launches?',
    answer: 'We manage production deployment, provide transition documentation, run knowledge transfer sessions, and transition into your preferred support tier.'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* 1. Dark Blue Hero Section (#0A1230) */}
      <section className="relative w-full min-h-screen min-h-[100dvh] bg-[#0A1230] pt-28 pb-16 sm:pt-32 sm:pb-20 px-6 text-white border-b border-[#152352] overflow-hidden flex items-center">
        {/* Landing Page Background Image (h1.png) - extended so top and bottom are fully visible without cropping */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/Home/h1.png"
            alt="Landing Hero Background"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Smooth blur mask over the left-side text area (up to 75%), fading to normal crisp image on the right */}
          <div
            className="absolute inset-0 backdrop-blur-md sm:backdrop-blur-lg"
            style={{
              maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 45%, rgba(0,0,0,0.4) 65%, rgba(0,0,0,0) 75%)',
              WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 45%, rgba(0,0,0,0.4) 65%, rgba(0,0,0,0) 75%)',
            }}
          />

          {/* Smooth dark gradient layer to ensure clear text contrast behind content */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#0A1230]/90 via-[#0A1230]/65 to-transparent"
            style={{
              maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 50%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 80%)',
              WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 50%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 80%)',
            }}
          />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF7A1A] mb-3">
            BUILD / SCALE / INNOVATE / NURTURE FUTURE
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-3xl leading-tight">
            Digital Solutions. Engineering Excellence. Future-Ready Talent.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Acutix Soft builds production-grade software for growing businesses while training and deploying high-caliber developer talent through real-world SaaS engineering programs.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#FF7A1A] hover:bg-[#EA6608] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:scale-[1.02]"
            >
              <span>GET STARTED</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/collaborations"
              className="inline-flex items-center rounded-lg border border-[#18295E] bg-[#101D48]/50 hover:bg-[#101D48] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors"
            >
              EXPLORE OUR ECOSYSTEM
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Software Shaped Around Industry Workflows (Light Background) */}
      <section id="products" className="py-16 px-6 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-10 text-left">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#FF7A1A] mb-1">
              PURPOSE-BUILT SOFTWARE
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Software Shaped Around Industry Workflows
            </h2>
            <p className="mt-1 text-sm text-slate-600 max-w-xl">
              Purpose-engineered digital products designed to eliminate operational friction and accelerate growth across critical industry verticals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {products.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full bg-[#0A1230] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className={`absolute top-2.5 left-2.5 w-7 h-7 rounded-lg ${p.letterBg} text-white font-bold flex items-center justify-center text-xs shadow-sm border border-white/20`}>
                      {p.letter}
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#FF7A1A] transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">
                      {p.category}
                    </p>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed min-h-[48px]">
                      {p.audience}
                    </p>
                  </div>
                </div>
                <div className="px-4 pb-4 pt-0">
                  <div className="pt-3 border-t border-slate-100">
                    <Link
                      href={`/products/${p.id}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#FF7A1A] hover:underline"
                    >
                      <span>Explore Product</span>
                      <ChevronRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/products"
              className="inline-flex items-center rounded-lg bg-[#FF7A1A] hover:bg-[#EA6608] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all"
            >
              VIEW ALL PRODUCTS
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Engineering Services / Competitive Advantage & Architecture (#0A1230) */}
      <section className="bg-[#0A1230] py-20 px-6 text-white border-y border-[#152352]">
        <div className="container mx-auto max-w-6xl">
          {/* Top Row: Two-column layout matching design template */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pb-12 border-b border-[#18295E]/70">
            {/* Left Column: Eyebrow + Main Heading */}
            <div className="lg:col-span-7 text-left">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#FF7A1A] mb-3">
                COMPETITIVE ADVANTAGE &amp; ARCHITECTURE
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Solving Complex Problems with Technology
              </h2>
            </div>

            {/* Right Column: Paragraph + Action Link */}
            <div className="lg:col-span-5 text-left flex flex-col justify-between h-full pt-1">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Modern software demands robust infrastructure, lightning performance, and rock-solid security. We partner with businesses to design, build, and scale custom software solutions that drive growth and efficiency.
              </p>
              <div className="mt-4">
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF7A1A] hover:text-[#FFAA55] transition-colors"
                >
                  <span>EXPLORE SERVICES</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Row: Horizontal strip with vertical dividers (No Boxes!) */}
          <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-0 lg:divide-x lg:divide-[#18295E]">
            {/* Item 1 */}
            <div className="flex items-center gap-3.5 lg:px-4 first:lg:pl-0">
              <Code2 className="h-8 w-8 text-[#FF7A1A] flex-shrink-0" />
              <span className="text-sm font-semibold text-white leading-snug">
                Custom Software<br className="hidden sm:inline" /> Development
              </span>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-3.5 lg:px-4">
              <Layers className="h-8 w-8 text-[#FF7A1A] flex-shrink-0" />
              <span className="text-sm font-semibold text-white leading-snug">
                Enterprise<br className="hidden sm:inline" /> Solutions
              </span>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-3.5 lg:px-4">
              <Cloud className="h-8 w-8 text-[#FF7A1A] flex-shrink-0" />
              <span className="text-sm font-semibold text-white leading-snug">
                Cloud &amp; DevOps<br className="hidden sm:inline" /> Engineering
              </span>
            </div>

            {/* Item 4 */}
            <div className="flex items-center gap-3.5 lg:px-4">
              <Settings className="h-8 w-8 text-[#FF7A1A] flex-shrink-0" />
              <span className="text-sm font-semibold text-white leading-snug">
                Product<br className="hidden sm:inline" /> Engineering
              </span>
            </div>

            {/* Item 5 */}
            <div className="flex items-center gap-3.5 lg:px-4 last:lg:pr-0">
              <ShieldCheck className="h-8 w-8 text-[#FF7A1A] flex-shrink-0" />
              <span className="text-sm font-semibold text-white leading-snug">
                Quality Assurance<br className="hidden sm:inline" /> &amp; Testing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Building Bridges to the Future (Light Background) */}
      <section className="py-16 px-6 bg-white border-b border-slate-200">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left side: copy */}
            <div className="lg:col-span-6 text-left">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#FF7A1A] mb-1">
                ACADEMIC ALLIANCE &amp; INCUBATION
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Building Bridges to the Future
              </h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-lg">
                We partner with leading academic institutions to create live software laboratories, empowering students to contribute to real-world commercial software while pursuing their degrees.
              </p>
              <div className="mt-6">
                <Link
                  href="/collaborations"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#FF7A1A] hover:bg-[#EA6608] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:scale-[1.02]"
                >
                  <span>EXPLORE ALLIANCES</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right side: Modern illustration box with h2.png as background and content overlaid */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#152352] shadow-xl p-6 sm:p-8 flex flex-col justify-between text-white">
                {/* Background image h2.png */}
                <Image
                  src="/Home/h2.png"
                  alt="Academic Alliance & Incubation"
                  fill
                  className="object-cover object-center z-0"
                />

                {/* Subtle soft gradient overlay so text is crisp and readable */}
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0A1230]/60 via-transparent to-[#0A1230]/20 pointer-events-none" />

                <div className="relative z-10">
                  <span className="inline-block rounded-full bg-white/10 backdrop-blur-md px-3 py-1 text-[11px] font-semibold tracking-wider text-amber-200 border border-white/20 shadow-sm">
                    Incubation Hub
                  </span>
                  <h3 className="mt-3 text-xl sm:text-2xl font-bold leading-snug drop-shadow-md">
                    <AnimatedCounter value={1500} suffix="+ Engineers Trained in Live SaaS Sprints" />
                  </h3>
                </div>

                <div className="relative z-10 flex items-center justify-between text-xs text-slate-200 border-t border-white/20 pt-4 backdrop-blur-xs">
                  <span>Co-established Labs: <AnimatedCounter value={4} /> Colleges</span>
                  <span>Placement Success: <AnimatedCounter value={94} suffix="%" /></span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Learn. Build. Get Hired. / Student Programs (#0A1230) */}
      <section className="bg-[#0A1230] py-20 px-6 text-white border-y border-[#152352]">
        <div className="container mx-auto max-w-6xl">
          {/* Top Row: 3-column layout matching design template */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start pb-12 border-b border-[#18295E]/70">
            {/* Column 1: Eyebrow + Heading */}
            <div className="lg:col-span-5 text-left">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#FF7A1A] mb-3">
                STUDENT &amp; DEVELOPER INCUBATION
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Learn. Build.<br />Get Hired.
              </h2>
            </div>

            {/* Column 2: Paragraph + Link */}
            <div className="lg:col-span-4 text-left flex flex-col justify-between h-full pt-1">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Industry-focused learning programs designed to transform students into skilled tech professionals. Bridging the gap between academic theory and production software engineering.
              </p>
              <div className="mt-4">
                <Link
                  href="/careers"
                  className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF7A1A] hover:text-[#FFAA55] transition-colors"
                >
                  <span>VIEW PROGRAMS</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Column 3: Stat counter with vertical divider */}
            <div className="lg:col-span-3 text-left lg:border-l lg:border-[#18295E]/80 lg:pl-8 flex flex-col justify-center h-full pt-2 lg:pt-0">
              <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#FF7A1A] tracking-tight">
                <AnimatedCounter value={5000} suffix="+" />
              </p>
              <p className="text-sm font-semibold text-slate-200 mt-1">
                Students Trained
              </p>
            </div>
          </div>

          {/* Bottom Row: Horizontal strip of 4 items with vertical dividers (No Boxes!) */}
          <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-[#18295E]">
            {/* Item 1 */}
            <div className="flex items-center gap-3.5 lg:px-5 first:lg:pl-0">
              <GraduationCap className="h-8 w-8 text-[#FF7A1A] flex-shrink-0" />
              <span className="text-sm font-semibold text-white leading-snug">
                Internships<br className="hidden sm:inline" /> &amp; Training
              </span>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-3.5 lg:px-5">
              <Award className="h-8 w-8 text-[#FF7A1A] flex-shrink-0" />
              <span className="text-sm font-semibold text-white leading-snug">
                Certification<br className="hidden sm:inline" /> Programs
              </span>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-3.5 lg:px-5">
              <Code2 className="h-8 w-8 text-[#FF7A1A] flex-shrink-0" />
              <span className="text-sm font-semibold text-white leading-snug">
                Live Projects<br className="hidden sm:inline" /> &amp; Hackathons
              </span>
            </div>

            {/* Item 4 */}
            <div className="flex items-center gap-3.5 lg:px-5 last:lg:pr-0">
              <Trophy className="h-8 w-8 text-[#FF7A1A] flex-shrink-0" />
              <span className="text-sm font-semibold text-white leading-snug">
                Placement<br className="hidden sm:inline" /> Assistance
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Frequently Asked Questions (Light Background) */}
      <FAQAccordion
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Find answers to common questions about our services, products, and academic partnerships."
        items={faqs}
      />

      <AcutixFAQSchema />
    </div>
  );
}
