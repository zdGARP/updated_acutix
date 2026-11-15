'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendForm } from '../lib/sendForm';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  School,
  CheckCircle2,
  Calendar,
  Layers,
  Award,
  ChevronRight,
  X,
  ExternalLink,
  Users,
  Code,
  Code2,
  Sparkles,
  FileText,
  ShieldCheck,
  Trophy
} from 'lucide-react';
import HeroVisual from '@/components/HeroVisual';

const institutions = [
  {
    id: "vistas",
    name: "Vels Institute of Science Technology & Advanced Studies (VISTAS)",
    shortName: "VISTAS",
    logo: "/Partnership/logo_vistas.png",
    category: "CO-ESTABLISHED INCUBATION LAB",
    location: "Pallavaram, Chennai, TN",
    desc: "SaaS development lab focused on full-stack web and mobile apps. Students work on production modules and healthcare AI hackathons.",
    badges: ["300+ Participants", "Joint Papers 5+", "Hackathons 3"],
    focusAreas: ["Healthcare AI", "Predictive Diagnostics", "Applied ML", "Data Ethics"],
    achievements: [
      "Best Healthtech Innovation Partner 2024",
      "Pilot AI diagnostics incubator nodes established",
      "Shared research database integration model"
    ],
    gallery: ["/Programs/gallery_02.jpg", "/Programs/gallery_03.jpg", "/Programs/gallery_04.jpg"]
  },
  {
    id: "srmv",
    name: "SRM Valliammai Engineering College",
    shortName: "SRM Valliammai",
    logo: "/Partnership/logo_srmv.png",
    category: "INDUSTRY ALLIANCE & CODING LAB",
    location: "Kattankulathur, TN",
    desc: "Joint laboratory training students in cloud architecture, DevOps, and backend microservices with fast-track placement interviews.",
    badges: ["500+ Trained", "Placements 15+", "Success Rate 95%"],
    focusAreas: ["AWS Cloud", "Docker Containerization", "CI/CD Pipelines", "Node REST APIs"],
    achievements: [
      "Established fast-track Cloud Developer recruitment pipeline",
      "Trained 500+ candidates in docker and AWS networks",
      "Accredited placement partner status"
    ],
    gallery: ["/Partnership/mou_srmv.jpg", "/Programs/gallery_02.jpg", "/Programs/gallery_06.jpg"]
  },
  {
    id: "saec",
    name: "SA Engineering College",
    shortName: "SA Engineering College",
    logo: "/Partnership/logo_saec.png",
    category: "SOFTWARE INCUBATION PARTNER",
    location: "Chennai, TN",
    desc: "Hands-on incubation program where student developers contributed to healthcare and ERP modules with semester-long internships.",
    badges: ["Intern Cohorts 12+", "React Bootcamps 3", "Grad Rate 100%"],
    focusAreas: ["React & Next.js", "State Management", "Tailwind styling", "Git Workflows"],
    achievements: [
      "Direct frontend developer internship pathways",
      "100% submission rating on commercial-grade capstones",
      "Direct student mentoring by SaaS engineering leads"
    ],
    gallery: ["/Partnership/mou_saec.png", "/Programs/gallery_05.jpg", "/Programs/gallery_03.jpg"]
  },
  {
    id: "jit",
    name: "Jeppiaar Institute of Technology",
    shortName: "Jeppiaar Institute of Technology",
    logo: "/Partnership/logo_jit.png",
    category: "APPLICATION INCUBATION CELL",
    location: "Sriperumbudur, TN",
    desc: "Specialized training cohorts building microservices, AI integrations, and mobile solutions for live commercial product lines.",
    badges: ["Bootcamp Grads 350+", "SaaS Sprints 8", "Campus Meetups 10+"],
    focusAreas: ["React Native", "Flutter Mobile SDKs", "SaaS Core Engineering", "UI/UX Prototyping"],
    achievements: [
      "First-ever campus mobile app developer lab node",
      "Active contributors to live FertiCare mobile assets",
      "3 innovation sponsorships awarded in campus sprints"
    ],
    gallery: ["/Partnership/mou_jit.png", "/Partnership/hackathon_jit.jpg", "/Partnership/seminar_jit.jpg"]
  }
];

const milestones = [
  {
    year: "2022",
    title: "MoU & Co-lab Foundation",
    category: "FOUNDATIONAL PHASE",
    desc: "First university alliance established, setting up dedicated developer workstations and developer curriculum."
  },
  {
    year: "2023",
    title: "SaaS Incubation Acceleration",
    category: "EXPANSION PHASE",
    desc: "Launch of real product development cohorts with students delivering production features into commercial products."
  },
  {
    year: "2023-2024",
    title: "Expanded Commercial Footprint",
    category: "SCALE & IMPACT",
    desc: "Over 1,000 students trained and 30+ production sprints completed across our partner institutions."
  },
  {
    year: "2024",
    title: "Next-Gen Talent Pipeline",
    category: "TALENT MOBILITY",
    desc: "Direct hiring pipeline established with partner tech firms and in-house SaaS engineering teams."
  },
  {
    year: "2025",
    title: "Regional Incubation Expansion",
    category: "REGIONAL REACH",
    desc: "Expanding to 10+ engineering campuses across southern tech corridors with dedicated co-labs."
  }
];

const engagementSteps = [
  {
    step: "01",
    title: "Consultation & Scope Mapping",
    desc: "Initial meetings with institutional leadership, defining goals, student cohorts, and infrastructure requirements.",
    icon: FileText
  },
  {
    step: "02",
    title: "MoU Formalization",
    desc: "Clear legal & academic agreement specifying lab facilities, mentoring schedules, and IP ownership.",
    icon: ShieldCheck
  },
  {
    step: "03",
    title: "Infrastructure & Cohort Setup",
    desc: "Deployment of development workstations, cloud accounts, and student selection tests.",
    icon: Layers
  },
  {
    step: "04",
    title: "Mentorship & Live SaaS Sprints",
    desc: "Weekly code reviews, daily standups, and production ticket assignments led by Acutix tech leads.",
    icon: Code2
  },
  {
    step: "05",
    title: "Showcase, Hiring and Patents",
    desc: "Final product showcases, placement interviews, certificates, and potential patent filings.",
    icon: Trophy
  }
];

export default function CollaborationsSection() {
  const [selectedInst, setSelectedInst] = useState<typeof institutions[0] | null>(null);

  const [mouForm, setMouForm] = useState({
    collegeName: '',
    contactPerson: '',
    designation: '',
    email: '',
    phone: '',
    cityState: '',
    proposalType: 'Co-established Lab',
    details: ''
  });

  const [submittingMou, setSubmittingMou] = useState(false);

  const handleMouChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setMouForm({ ...mouForm, [e.target.name]: e.target.value });
  };

  const handleMouSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittingMou(true);
    toast.info('Submitting MoU request...', { autoClose: false, toastId: 'submittingMou' });

    const result = await sendForm({
      ...mouForm,
      type: 'Academic MoU Request',
      to: process.env.EMAIL_RECEIVER
    });

    toast.dismiss('submittingMou');
    setSubmittingMou(false);

    if (result.success) {
      toast.success('Thank you! Your Academic MoU request has been submitted. Our team will contact you shortly.');
      setMouForm({
        collegeName: '',
        contactPerson: '',
        designation: '',
        email: '',
        phone: '',
        cityState: '',
        proposalType: 'Co-established Lab',
        details: ''
      });
    } else {
      toast.error(result.error || 'Failed to submit request. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <ToastContainer position="bottom-right" theme="dark" />

      {/* 1. Dark Blue Hero Section (#0A1230) */}
      <section className="relative bg-[#0A1230] pt-32 pb-20 px-6 text-white border-b border-[#152352]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF7A1A] mb-3">
                ACADEMIC ALLIANCE &amp; SPRINT
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl leading-tight">
                Academic Alliance Hub
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Bridging the gap between academia and industry. We co-establish production labs with colleges, train students on commercial SaaS products, and groom future-ready software engineers.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#mou-form"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#FF7A1A] hover:bg-[#EA6608] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:scale-[1.02]"
                >
                  <span>INITIATE AN ALLIANCE</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#co-established-labs"
                  className="inline-flex items-center rounded-lg border border-[#18295E] bg-[#101D48]/50 hover:bg-[#101D48] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors"
                >
                  EXPLORE CASE STUDIES
                </a>
              </div>
            </div>
            <HeroVisual variant="partnerships" />
          </div>
        </div>
      </section>

      {/* 2. Impact Stats Bar (Light Background) */}
      <section className="py-12 px-6 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto max-w-6xl">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#FF7A1A] mb-1">
            SHARED REPUTATION
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-8">
            Our Shared Academic Impact
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-slate-900">1,500+</p>
              <p className="mt-1 text-xs text-slate-600 font-medium">Students Trained</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-slate-900">4</p>
              <p className="mt-1 text-xs text-slate-600 font-medium">Co-established Labs</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-slate-900">45+</p>
              <p className="mt-1 text-xs text-slate-600 font-medium">Live SaaS Sprints</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-slate-900">94%</p>
              <p className="mt-1 text-xs text-slate-600 font-medium">Placement Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Co-established Labs, Student Cohorts and Live SaaS Sprints (Dark Blue Background #0A1230) */}
      <section id="co-established-labs" className="bg-[#0A1230] py-16 px-6 text-white border-y border-[#152352]">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-10 text-left">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#FF7A1A] mb-1">
              INCUBATION HUBS &amp; LABS
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Co-established labs, student cohorts and live SaaS sprints
            </h2>
            <p className="mt-1 text-sm text-slate-400 max-w-xl">
              Discover our institutional partnerships and joint engineering hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {institutions.map((inst) => (
              <div
                key={inst.id}
                className="bg-[#101D48] rounded-2xl border border-[#18295E] p-6 flex flex-col justify-between hover:border-[#1E2E62] transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 rounded-xl bg-white p-1.5 flex items-center justify-center border border-[#18295E] shadow-sm">
                      <Image
                        src={inst.logo}
                        alt={`${inst.shortName} logo`}
                        width={40}
                        height={40}
                        className="object-contain max-h-full"
                      />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF7A1A] bg-[#152352] px-2.5 py-1 rounded-full border border-[#18295E]">
                      {inst.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#FF7A1A] transition-colors">
                    {inst.shortName}
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-0.5 font-medium">
                    {inst.location}
                  </p>

                  <p className="mt-3 text-xs leading-relaxed text-slate-300 min-h-[48px]">
                    {inst.desc}
                  </p>

                  {/* Badges */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {inst.badges.map((b, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-[#152352] px-2.5 py-1 text-[11px] font-medium text-slate-300 border border-[#18295E]"
                      >
                        {b}
                      </span>
                    ))}
                  </div>

                  {/* Focus Areas */}
                  <div className="mt-4 pt-3 border-t border-[#18295E]">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      FOCUS TRACKS
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {inst.focusAreas.map((fa, i) => (
                        <span key={i} className="text-[11px] text-slate-300 bg-[#0A1230] px-2 py-0.5 rounded border border-[#18295E]">
                          {fa}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#18295E]">
                  <button
                    onClick={() => setSelectedInst(inst)}
                    className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg border border-[#18295E] bg-[#152352] hover:bg-[#1E2E62] py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white transition-colors"
                  >
                    <span>VIEW LAB DETAILS &amp; MOU</span>
                    <ExternalLink className="h-3.5 w-3.5 text-[#FF7A1A]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Evolutionary Milestones (Light Background) */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto max-w-6xl text-left">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#FF7A1A] mb-1">
            PATHWAY &amp; GROWTH
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-10">
            Evolutionary Milestones
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-extrabold text-[#FF7A1A]">{m.year}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                      {m.category}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">{m.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Step-by-Step Engagement (Dark Blue Background #0A1230) */}
      <section className="bg-[#0A1230] py-20 px-6 text-white border-y border-[#152352]">
        <div className="container mx-auto max-w-7xl">
          {/* Top Row: Two-column layout matching design template */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pb-12 border-b border-[#18295E]/70">
            {/* Left Column: Eyebrow + Main Heading */}
            <div className="lg:col-span-7 text-left">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#FF7A1A] mb-3">
                ALLIANCE ROADMAP
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Step-by-Step Engagement
              </h2>
            </div>

            {/* Right Column: Paragraph + Action Link */}
            <div className="lg:col-span-5 text-left flex flex-col justify-between h-full pt-1">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                A structured pathway from institutional MoU to high-impact live student engineering. We formalize Bilateral agreements, install dedicated lab facilities, and deploy students into commercial product cohorts.
              </p>
              <div className="mt-4">
                <a
                  href="#mou-form"
                  className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF7A1A] hover:text-[#FFAA55] transition-colors"
                >
                  <span>INITIATE ACADEMIC MOU</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Row: Horizontal strip of 5 steps with vertical dividers (No Boxes!) */}
          <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-0 lg:divide-x lg:divide-[#18295E]">
            {engagementSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={step.step}
                  className={`flex flex-col items-start lg:px-5 text-left ${idx === 0 ? 'lg:pl-0' : ''} ${idx === engagementSteps.length - 1 ? 'lg:pr-0' : ''}`}
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <StepIcon className="h-6 w-6 text-[#FF7A1A] flex-shrink-0" />
                    <span className="text-xs font-mono font-bold text-[#FF7A1A]">STEP {step.step}</span>
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

      {/* 6. Initiate Academic MoU Form (Light Background) */}
      <section id="mou-form" className="py-16 px-6 bg-white border-b border-slate-200">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column */}
            <div className="lg:col-span-5 text-left">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#FF7A1A] mb-1">
                PARTNER WITH ACUTIX
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Initiate Academic MoU
              </h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Fill out the form to begin exploring a university partnership, co-established lab, student cohort training, or faculty development program.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase text-slate-800">MoU Backed &amp; Formalized</h4>
                    <p className="text-xs text-slate-500">Official bilateral institutional agreement with clear guidelines.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase text-slate-800">Commercial SaaS Sprints</h4>
                    <p className="text-xs text-slate-500">Students work directly with lead software engineers on live codebases.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase text-slate-800">Direct Placement Pathways</h4>
                    <p className="text-xs text-slate-500">Top performers are fast-tracked into software development positions.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <form onSubmit={handleMouSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Institution Name *
                  </label>
                  <input
                    type="text"
                    name="collegeName"
                    required
                    value={mouForm.collegeName}
                    onChange={handleMouChange}
                    placeholder="e.g. SRM Valliammai Engineering College"
                    className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#FF7A1A] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      required
                      value={mouForm.contactPerson}
                      onChange={handleMouChange}
                      placeholder="e.g. Dr. Rajesh Kumar"
                      className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#FF7A1A] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Designation / Role
                    </label>
                    <input
                      type="text"
                      name="designation"
                      value={mouForm.designation}
                      onChange={handleMouChange}
                      placeholder="e.g. Dean of Academics / HOD CSE"
                      className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#FF7A1A] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={mouForm.email}
                      onChange={handleMouChange}
                      placeholder="dean@institution.edu.in"
                      className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#FF7A1A] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={mouForm.phone}
                      onChange={handleMouChange}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#FF7A1A] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      City &amp; State
                    </label>
                    <input
                      type="text"
                      name="cityState"
                      value={mouForm.cityState}
                      onChange={handleMouChange}
                      placeholder="Chennai, Tamil Nadu"
                      className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#FF7A1A] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Engagement Type
                    </label>
                    <select
                      name="proposalType"
                      value={mouForm.proposalType}
                      onChange={handleMouChange}
                      className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#FF7A1A] focus:outline-none"
                    >
                      <option value="Co-established Lab">Co-established Incubation Lab</option>
                      <option value="Student Cohort Training">Student Cohort SaaS Training</option>
                      <option value="Faculty Development">Faculty Enablement &amp; FDP</option>
                      <option value="Industrial Visit">Industrial Visit &amp; Technical Talks</option>
                      <option value="Hackathon Sponsorship">Hackathon &amp; Coding Sprints</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Additional Details / Infrastructure Available
                  </label>
                  <textarea
                    rows={3}
                    name="details"
                    value={mouForm.details}
                    onChange={handleMouChange}
                    placeholder="Briefly describe target student departments, batch size, or existing lab setup..."
                    className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs text-slate-900 focus:border-[#FF7A1A] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submittingMou}
                  className="w-full rounded-lg bg-[#FF7A1A] hover:bg-[#EA6608] py-3 px-4 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:shadow disabled:opacity-50"
                >
                  {submittingMou ? 'SUBMITTING...' : 'SUBMIT MOU REQUEST'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Details Modal */}
      <AnimatePresence>
        {selectedInst && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedInst(null)}
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
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white p-1 border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-xs">
                    <Image src={selectedInst.logo} alt={selectedInst.shortName} width={36} height={36} className="object-contain max-h-full" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{selectedInst.name}</h3>
                    <p className="text-[11px] text-[#FF7A1A] font-semibold">{selectedInst.category} • {selectedInst.location}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedInst(null)}
                  className="rounded-full p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
                <p className="text-xs text-slate-600 leading-relaxed">
                  {selectedInst.desc}
                </p>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">Key Alliances &amp; Achievements</h4>
                  <ul className="space-y-1.5">
                    {selectedInst.achievements.map((ach, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Gallery Images */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">Alliance Moments</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {selectedInst.gallery.map((img, i) => (
                      <div key={i} className="relative aspect-[4/3] rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                        <Image src={img} alt="Collaboration event" fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">Interested in a similar partnership?</span>
                <a
                  href="#mou-form"
                  onClick={() => setSelectedInst(null)}
                  className="rounded-lg bg-[#FF7A1A] hover:bg-[#EA6608] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white"
                >
                  INITIATE MOU
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
