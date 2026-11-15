'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  HeartPulse,
  Cpu,
  Globe,
  Smartphone,
  Cloud,
  LayoutDashboard,
  Server,
  BarChart,
  Layout,
  Shield,
  Settings,
  ArrowRight,
  CheckCircle2,
  X,
  Search,
  PenTool,
  LayoutTemplate,
  Code2,
  TestTube,
  Rocket,
  ShieldCheck,
  Zap,
  Users,
  Headphones
} from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';
import FAQ from '@/components/services/FAQ';
import HeroVisual from '@/components/HeroVisual';

interface ServiceItem {
  id: string;
  title: string;
  category: string;
  letter: string;
  letterBg: string;
  icon: any;
  image: string;
  description: string;
  features: string[];
  tech: string[];
  benefits: string;
  workflow: string;
  timeline: string;
  highlight: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    category: 'Bespoke Software',
    letter: 'C',
    letterBg: 'bg-emerald-500',
    icon: Code,
    image: '/Services/custom_software.png',
    description: 'Develop secure, scalable, and user-friendly software tailored to your business requirements. We build web applications, desktop applications, and enterprise solutions that streamline operations.',
    features: ['Custom Web Applications', 'Desktop Software', 'Enterprise Solutions', 'API Development', 'Third-Party Integrations'],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Next.js'],
    benefits: 'Increase efficiency and reduce operational costs.',
    workflow: 'Requirement Analysis ➔ Architecture Design ➔ Agile Development ➔ QA ➔ Deployment',
    timeline: '3-6 months',
    highlight: 'Built for enterprise reliability and seamless legacy integration.'
  },
  {
    id: 'healthcare',
    title: 'Healthcare Management Solutions',
    category: 'Web Applications',
    letter: 'H',
    letterBg: 'bg-rose-500',
    icon: HeartPulse,
    image: '/Services/healthcare.png',
    description: 'Comprehensive healthcare software solutions for hospitals, fertility centers, clinics, and diagnostic laboratories with complete patient lifecycle management and HIPAA compliance.',
    features: ['Hospital Management (HMS)', 'IVF & Fertility Management', 'Laboratory Info (LIS)', 'Electronic Medical Records (EMR)', 'Appointment & Billing'],
    tech: ['Next.js', 'Python', 'AWS Healthcare', 'HL7'],
    benefits: 'Streamline patient care, appointments, and clinical workflows.',
    workflow: 'Compliance Check ➔ UI/UX ➔ Secure Development ➔ HIPAA Audit ➔ Launch',
    timeline: '4-8 months',
    highlight: 'Specialized EMR & couple-based records for fertility & multi-specialty clinics.'
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation Solutions',
    category: 'Digital Advisory',
    letter: 'A',
    letterBg: 'bg-purple-600',
    icon: Cpu,
    image: '/Services/ai_automation.png',
    description: 'Improve operational efficiency using Artificial Intelligence and workflow automation tailored to your business data pipelines.',
    features: ['AI Chatbots', 'Document Automation', 'OCR Processing', 'Predictive Analytics', 'Workflow Automation'],
    tech: ['Python', 'TensorFlow', 'OpenAI API', 'LangChain'],
    benefits: 'Automate repetitive workflows and gain actionable intelligence.',
    workflow: 'Data Collection ➔ Model Training ➔ Integration ➔ Monitoring',
    timeline: '2-5 months',
    highlight: 'Context-aware intelligence with enterprise privacy safeguards.'
  },
  {
    id: 'website',
    title: 'Website Development',
    category: 'Web Websites',
    letter: 'W',
    letterBg: 'bg-blue-500',
    icon: Globe,
    image: '/Services/website_development.png',
    description: 'Build modern, responsive, and SEO-friendly websites designed to enhance your online presence and deliver exceptional user experiences.',
    features: ['Corporate Websites', 'Landing Pages', 'Responsive Design', 'CMS Integration', 'Performance Optimization'],
    tech: ['Next.js', 'Tailwind CSS', 'Vercel', 'TypeScript'],
    benefits: 'Enhance your brand visibility online with sub-second page loads.',
    workflow: 'Design ➔ Frontend ➔ CMS Setup ➔ SEO Audit ➔ Launch',
    timeline: '4-8 weeks',
    highlight: 'Optimized for Core Web Vitals, maximum conversions, and mobile speed.'
  },
  {
    id: 'mobile',
    title: 'Mobile Application Development',
    category: 'Mobile Apps',
    letter: 'M',
    letterBg: 'bg-orange-500',
    icon: Smartphone,
    image: '/Services/mobile_development.png',
    description: 'Create high-performance Android and iOS applications that help businesses stay connected with customers anytime, anywhere.',
    features: ['Android Apps', 'iOS Apps', 'Cross-platform Apps', 'Offline Mode', 'App Store Maintenance'],
    tech: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    benefits: 'Engage customers directly on their mobile devices.',
    workflow: 'Prototyping ➔ Native Development ➔ QA ➔ App Store Approval',
    timeline: '2-4 months',
    highlight: 'Native-feel user experience with synchronized cloud state.'
  },
  {
    id: 'cloud',
    title: 'Cloud Solutions',
    category: 'Cloud & DevOps',
    letter: 'C',
    letterBg: 'bg-sky-600',
    icon: Cloud,
    image: '/Services/cloud_solutions.png',
    description: 'Secure cloud infrastructure for hosting, storage, backup, and application deployment with high availability and automated autoscaling.',
    features: ['Cloud Migration', 'Server Management', 'Backup & Disaster Recovery', 'Cloud Security', 'DevOps CI/CD'],
    tech: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
    benefits: 'Reduce IT overhead with robust, high-uptime cloud architecture.',
    workflow: 'Assessment ➔ Migration Strategy ➔ Execution ➔ Optimization',
    timeline: '1-3 months',
    highlight: 'Zero-downtime deployments with containerized reliability.'
  },
  {
    id: 'saas',
    title: 'SaaS Product Development',
    category: 'Bespoke Software',
    letter: 'S',
    letterBg: 'bg-indigo-600',
    icon: LayoutDashboard,
    image: '/Services/saas_product.png',
    description: 'Transform your business idea into a scalable Software-as-a-Service platform with subscription billing, multi-tenancy, and cloud architecture.',
    features: ['Multi-Tenant Architecture', 'Subscription Billing', 'Role-Based Access', 'Secure Authentication', 'Analytics Dashboard'],
    tech: ['Next.js', 'Stripe', 'Supabase', 'Prisma', 'PostgreSQL'],
    benefits: 'Create recurring revenue streams with scalable software.',
    workflow: 'MVP Design ➔ Core Development ➔ Billing Integration ➔ Launch',
    timeline: '3-7 months',
    highlight: 'Engineered for multi-organization isolation and flexible pricing tiers.'
  },
  {
    id: 'api',
    title: 'API Integration Services',
    category: 'Web Applications',
    letter: 'A',
    letterBg: 'bg-teal-600',
    icon: Server,
    image: '/Services/api_integration.png',
    description: 'Connect your applications with third-party services and APIs for seamless data exchange, webhooks, and automation.',
    features: ['Payment Gateways', 'SMS & WhatsApp Gateways', 'Email Infrastructure', 'Government APIs', 'Legacy Sync'],
    tech: ['Node.js', 'Express', 'GraphQL', 'REST', 'Webhooks'],
    benefits: 'Connect your business tools into a unified operational hub.',
    workflow: 'API Doc Review ➔ Schema Design ➔ Development ➔ Sandbox Testing',
    timeline: '1-3 weeks',
    highlight: 'Resilient fault-tolerant retries and audited rate-limiting.'
  },
  {
    id: 'analytics',
    title: 'Data Analytics & Reporting',
    category: 'Data & Analytics',
    letter: 'D',
    letterBg: 'bg-emerald-600',
    icon: BarChart,
    image: '/Services/data_analytics.png',
    description: 'Convert raw business data into meaningful insights using interactive dashboards, custom KPIs, and automated executive reporting.',
    features: ['Real-time Dashboards', 'Business Reports', 'KPI Monitoring', 'Export to PDF/Excel', 'Custom BI Metrics'],
    tech: ['PowerBI', 'Tableau', 'Metabase', 'PostgreSQL', 'Python'],
    benefits: 'Empower executive teams to make confident, data-driven decisions.',
    workflow: 'Data Integration ➔ ETL Pipeline ➔ Dashboard Design ➔ Deployment',
    timeline: '1-2 months',
    highlight: 'Automated data hygiene and live multi-source aggregation.'
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    category: 'UI/UX Design',
    letter: 'U',
    letterBg: 'bg-pink-500',
    icon: Layout,
    image: '/Services/uiux_design.png',
    description: 'Design intuitive, engaging, and conversion-focused user interfaces that improve customer satisfaction and increase user adoption.',
    features: ['Wireframing & Prototyping', 'User Research & Personas', 'Design Systems', 'Dashboard UI Design', 'Mobile Experience'],
    tech: ['Figma', 'Framer', 'Adobe XD', 'Tailwind UI'],
    benefits: 'Boost user retention and clarify complex business workflows.',
    workflow: 'Research ➔ Wireframe ➔ Visual Design ➔ Usability Testing ➔ Handoff',
    timeline: '2-6 weeks',
    highlight: 'Accessible, modular component systems ready for developer implementation.'
  },
  {
    id: 'security',
    title: 'Cyber Security Solutions',
    category: 'Digital Advisory',
    letter: 'C',
    letterBg: 'bg-red-600',
    icon: Shield,
    image: '/Services/cyber_security.png',
    description: 'Protect your applications and sensitive business data with robust security assessments, encryption, and regulatory compliance standards.',
    features: ['Data Encryption at Rest/Transit', 'Role-Based Access Control', 'Vulnerability Assessments', 'Penetration Testing', 'Security Audits'],
    tech: ['OWASP', 'Kali Linux', 'Burp Suite', 'SSL/TLS', 'WAF'],
    benefits: 'Defend against modern threats and ensure data confidentiality.',
    workflow: 'Audit ➔ Threat Modeling ➔ Vulnerability Patching ➔ Certification',
    timeline: '2-4 weeks',
    highlight: 'Proactive defense with continuous vulnerability scanning.'
  },
  {
    id: 'maintenance',
    title: 'Software Maintenance & Support',
    category: 'Staff Augmentation',
    letter: 'S',
    letterBg: 'bg-amber-600',
    icon: Settings,
    image: '/Services/software_maintenance.png',
    description: 'Ensure your software runs smoothly with continuous performance monitoring, security patches, bug fixes, and feature enhancements.',
    features: ['24/7 Server Monitoring', 'Bug Fixing & Patches', 'Security Updates', 'Performance Optimization', 'Dedicated SLA Support'],
    tech: ['Datadog', 'Sentry', 'Docker', 'AWS CloudWatch'],
    benefits: 'Ensure maximum application uptime and reliable continuity.',
    workflow: 'SLA Agreement ➔ Monitoring Setup ➔ Patch Schedule ➔ Rapid Response',
    timeline: 'Ongoing SLA',
    highlight: 'Guaranteed rapid response times and proactive stability checks.'
  }
];

const filterCategories = [
  'All',
  'Web Websites',
  'Web Applications',
  'Bespoke Software',
  'Cloud & DevOps',
  'UI/UX Design',
  'Digital Advisory',
  'Data & Analytics',
  'Mobile Apps',
  'Staff Augmentation'
];

const workflowSteps = [
  { id: '01', title: 'Requirement Analysis', icon: Search, desc: 'We capture your operational objectives, user stories, and technical requirements.' },
  { id: '02', title: 'Planning', icon: PenTool, desc: 'Creating architecture diagrams, database schemas, and a sprint-based delivery roadmap.' },
  { id: '03', title: 'UI/UX Design', icon: LayoutTemplate, desc: 'Interactive prototypes, component libraries, and intuitive user workflow validation.' },
  { id: '04', title: 'Development', icon: Code2, desc: 'Agile sprints with clean code, unit testing, Git version control, and weekly demos.' },
  { id: '05', title: 'Testing', icon: TestTube, desc: 'End-to-end QA, security compliance, load tests, and cross-browser regression.' },
  { id: '06', title: 'Deployment', icon: Rocket, desc: 'Automated CI/CD pipelines, cloud environment provisioning, and live launch.' },
  { id: '07', title: 'Maintenance', icon: Settings, desc: 'Continuous uptime monitoring, bug resolution, and SLA-backed ongoing evolution.' }
];

export default function OurServices() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!selectedService) return;

    const previousFocus = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedService(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      previousFocus?.focus();
    };
  }, [selectedService]);

  const filteredServices = activeCategory === 'All'
    ? servicesData
    : servicesData.filter(s => s.category === activeCategory || activeCategory === 'All');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* 1. Dark Blue Hero Section (#0A1230) */}
      <section className="relative bg-[#0A1230] pt-32 pb-20 px-6 text-white border-b border-[#152352]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF7A1A] mb-3">
                SERVICES
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl leading-tight">
                We Build Digital Solutions That Power Modern Businesses
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                From idea to launch and beyond, we build modern websites, cloud software and mobile apps that power businesses and connect next-generation talent.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#FF7A1A] hover:bg-[#EA6608] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:scale-[1.02]"
                >
                  <span>START A PROJECT</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#services-grid"
                  className="inline-flex items-center rounded-lg border border-[#18295E] bg-[#101D48]/50 hover:bg-[#101D48] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors"
                >
                  EXPLORE OUR SERVICES
                </a>
              </div>
            </div>
            <HeroVisual variant="services" />
          </div>
        </div>
      </section>

      {/* 2. "Not Sure What Service You Need?" Filter Banner (Light Background) */}
      <section className="py-12 px-6 bg-slate-50 border-b border-slate-200/80">
        <div className="container mx-auto max-w-6xl">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#FF7A1A] mb-1">
            WHAT WE OFFER
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Not Sure What Service You Need?
          </h2>
          <p className="mt-1 text-sm text-slate-600 max-w-xl">
            Explore our core service offerings tailored for business scale and digital transformation.
          </p>

          {/* Interactive Category Pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {filterCategories.map((cat) => (
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
        </div>
      </section>

      {/* 3. Dark Blue Key Stats Banner (#0A1230) */}
      <section className="bg-[#0A1230] py-10 px-6 text-white border-y border-[#152352]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-white"><AnimatedCounter value={4} /></p>
              <p className="mt-1 text-xs text-slate-300 font-medium">Full-stack SaaS Deliveries</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-white"><AnimatedCounter value={10} suffix="+" /></p>
              <p className="mt-1 text-xs text-slate-300 font-medium">Heavy SaaS Features (Billing, Roles, EMR)</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-white"><AnimatedCounter value={100} suffix="+" /></p>
              <p className="mt-1 text-xs text-slate-300 font-medium">Years of Collective Team Experience</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-white"><AnimatedCounter value={100} suffix="%" /></p>
              <p className="mt-1 text-xs text-slate-300 font-medium">Production Deployed Applications</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Main Services Grid (Light Background) */}
      <section id="services-grid" className="py-16 px-6 bg-slate-50">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-10 text-left">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#FF7A1A] mb-1">
              OUR SERVICES
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              End-to-end engineering, from idea to scale
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => {
              return (
                <div
                  key={service.id}
                  id={`service-${service.id}`}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-300 group"
                >
                  <div>
                    {/* Service Card Image Banner */}
                    <div className="relative aspect-[16/10] w-full bg-[#0A1230] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className={`absolute top-3 left-3 w-8 h-8 rounded-lg ${service.letterBg} text-white font-bold flex items-center justify-center text-xs shadow-sm border border-white/20`}>
                        {service.letter}
                      </div>
                      <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border bg-emerald-500/90 text-white backdrop-blur-xs border-emerald-400">
                        AVAILABLE
                      </span>
                    </div>

                    <div className="p-6">
                      {/* Title */}
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#FF7A1A] transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-2 min-h-[48px] text-xs leading-relaxed text-slate-600">
                        {service.description.split('. ')[0].replace(/[.!?]+$/, '')}.
                      </p>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="px-6 pb-6 pt-0">
                    <div className="pt-4 border-t border-slate-100">
                      <button
                        onClick={() => setSelectedService(service)}
                        className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#FF7A1A] hover:bg-[#EA6608] py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:shadow"
                      >
                        <span>LEARN MORE</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Agile Workflow Section (Dark Blue Background #0A1230) */}
      <section className="bg-[#0A1230] py-20 px-6 text-white border-y border-[#152352]">
        <div className="container mx-auto max-w-7xl">
          {/* Top Row: Two-column layout matching design template */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pb-12 border-b border-[#18295E]/70">
            {/* Left Column: Eyebrow + Main Heading */}
            <div className="lg:col-span-7 text-left">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#FF7A1A] mb-3">
                OUR DELIVERY WORKFLOW
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                A Transparent, Agile Development Process
              </h2>
            </div>

            {/* Right Column: Paragraph + Action Link */}
            <div className="lg:col-span-5 text-left flex flex-col justify-between h-full pt-1">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                From requirements capture to deployment and ongoing maintenance, our process ensures precision. A transparent, agile workflow ensuring project success.
              </p>
              <div className="mt-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF7A1A] hover:text-[#FFAA55] transition-colors"
                >
                  <span>START A PROJECT</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Row: Horizontal strip of 7 steps with vertical dividers (No Boxes!) */}
          <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 lg:gap-0 lg:divide-x lg:divide-[#18295E]">
            {workflowSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={step.id}
                  className={`flex flex-col items-start lg:px-4 text-left ${idx === 0 ? 'lg:pl-0' : ''} ${idx === workflowSteps.length - 1 ? 'lg:pr-0' : ''}`}
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <StepIcon className="h-6 w-6 text-[#FF7A1A] flex-shrink-0" />
                    <span className="text-xs font-mono font-bold text-[#FF7A1A]">STEP {step.id}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white leading-snug">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Why Acutix for Services (Light Background) */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto max-w-6xl text-left">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#FF7A1A] mb-1">
            WHY ACUTIX FOR SERVICES
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight max-w-2xl">
            We don&apos;t just write code; we build digital assets that drive revenue.
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <Zap className="h-5 w-5 text-[#FF7A1A] mb-2" />
              <h3 className="text-sm font-bold text-slate-900 mb-1">Scalable Architecture</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clean microservices, optimized SQL/NoSQL schemas, and modular codebases designed to handle growing traffic.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <Code2 className="h-5 w-5 text-[#FF7A1A] mb-2" />
              <h3 className="text-sm font-bold text-slate-900 mb-1">Agile Development</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bi-weekly sprint iterations, transparent task boards, and test-driven development methodologies.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <ShieldCheck className="h-5 w-5 text-[#FF7A1A] mb-2" />
              <h3 className="text-sm font-bold text-slate-900 mb-1">Complete Security</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                End-to-end data encryption, role-based authorization guards, and strict compliance with global privacy regulations.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <Headphones className="h-5 w-5 text-[#FF7A1A] mb-2" />
              <h3 className="text-sm font-bold text-slate-900 mb-1">Dedicated Support</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Post-launch SLA coverage, direct communication lines with senior engineering leads, and fast turnaround fixes.
              </p>
            </div>
          </div>

          {/* Tech stack row */}
          <div className="mt-8 flex flex-wrap items-center gap-2 pt-4 border-t border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-2">TECH STACK:</span>
            {['Next.js', 'React', 'Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'Docker', 'AWS Cloud'].map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-slate-200/80 px-3 py-1 text-xs font-semibold text-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <FAQ />

      {/* 7. Ready to Build Banner (Light Background) */}
      <section className="py-14 px-6 bg-white border-b border-slate-200">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Ready to Build Your Next Digital Product?
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Let&apos;s discuss how Acutix can build, scale, and maintain your technology infrastructure.
            </p>
            <div className="mt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-700">
              <a href="tel:+916369936706" className="hover:text-[#FF7A1A] transition-colors">+91 6369936706</a>
              <span>•</span>
              <a href="mailto:contact@acutixsoft.com" className="hover:text-[#FF7A1A] transition-colors">contact@acutixsoft.com</a>
            </div>
          </div>
          <Link
            href="/contact"
            className="whitespace-nowrap rounded-lg bg-[#FF7A1A] hover:bg-[#EA6608] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:scale-[1.02]"
          >
            DISCUSS YOUR PROJECT &rarr;
          </Link>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            role="presentation"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="service-modal-title"
              className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
            >
              <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4 bg-slate-50">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg ${selectedService.letterBg} text-white font-bold flex items-center justify-center text-xs`}>
                    {selectedService.letter}
                  </div>
                  <div>
                    <h3 id="service-modal-title" className="font-bold text-slate-900 text-base">{selectedService.title}</h3>
                    <p className="text-[11px] text-slate-500">{selectedService.category}</p>
                  </div>
                </div>
                <button
                  ref={closeButtonRef}
                  type="button"
                  aria-label="Close service details"
                  onClick={() => setSelectedService(null)}
                  className="rounded-full p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
                {/* Service Visual Preview */}
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#0A1230] border border-slate-200 shadow-sm">
                  <Image
                    src={selectedService.image}
                    alt={selectedService.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {selectedService.description}
                </p>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">Key Capabilities</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedService.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs space-y-1.5">
                  <p><span className="font-bold text-slate-800">Technologies:</span> {selectedService.tech.join(', ')}</p>
                  <p><span className="font-bold text-slate-800">Estimated Timeline:</span> {selectedService.timeline}</p>
                  <p><span className="font-bold text-slate-800">Delivery Workflow:</span> {selectedService.workflow}</p>
                </div>
              </div>

              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">Ready to discuss scope?</span>
                <Link
                  href={`/contact?service=${encodeURIComponent(selectedService.title)}`}
                  className="rounded-lg bg-[#FF7A1A] hover:bg-[#EA6608] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white"
                >
                  REQUEST CONSULTATION
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
