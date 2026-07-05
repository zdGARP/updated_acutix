'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendForm } from '../lib/sendForm';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  Send,
  X,
  School,
  Terminal,
  ArrowRight,
  Sparkles
} from 'lucide-react';

// Subcomponents imports
import FloatingParticles from './collaborations/FloatingParticles';
import ImpactStats from './collaborations/ImpactStats';
import IndiaMap from './collaborations/IndiaMap';
import MarqueeLogos from './collaborations/MarqueeLogos';
import CollaborationCard from './collaborations/CollaborationCard';
import Timeline from './collaborations/Timeline';
import SuccessStories from './collaborations/SuccessStories';
import ProcessSection from './collaborations/ProcessSection';

// Upgrade data structure
const institutions = [
  {
    id: "vistas",
    name: "Vels Institute of Science Technology & Advanced Studies (VISTAS)",
    location: "Pallavaram, TN",
    desc: "Co-hosts of national initiatives, advanced healthcare AI hackathons, and research mentorship.",
    details: {
      framework: "Advanced academic research and co-venturing alliance. Main partnership items include:\n- Co-hosting of regional hackathons and technology incubation challenges.\n- Research collaboration in machine learning applications within women's health.\n- Development of pilot AI models alongside industry specialists.\n- Mentorship of graduate-level research designs and scientific projects.",
      initiatives: ["MedNexus AI Hackathons", "Healthcare AI Research", "Faculty System Design Workshops"]
    },
    images: {
      mou: "/gallery_02.jpg",
      event1: "/gallery_03.jpg",
      event2: "/gallery_04.jpg"
    },
    logo: "/logo_vistas.png",
    banner: "/gallery_02.jpg",
    stats: [
      { label: "Participants", value: "300+" },
      { label: "Joint Papers", value: "5+" },
      { label: "Hackathons", value: "3" }
    ],
    achievements: [
      "Best Healthtech Innovation Partner 2024",
      "Pilot AI diagnostics incubator nodes established",
      "Shared research database integration model"
    ],
    focusAreas: ["Healthcare AI", "Predictive Diagnostics", "Applied ML", "Data Ethics"]
  },
  {
    id: "srmv",
    name: "SRM Valliammai Engineering College",
    location: "Kattankulathur, TN",
    desc: "Joint industrial training programs, technical webinars, and emerging talent acceleration.",
    details: {
      framework: "Strategic talent alliance targeting modern web development. Collaborative tracks include:\n- Accelerated industrial full stack development courses.\n- Specialized webinars on AWS cloud integration and containerization.\n- Active faculty development programs on agile software execution.\n- Fast-track placement evaluation pathways for final-year candidates.",
      initiatives: ["Cloud Architecture Webinars", "Fast-track Placement Interviews", "Fullstack Bootcamps"]
    },
    images: {
      mou: "/mou_srmv.jpg",
      event1: "/gallery_05.jpg",
      event2: "/gallery_06.jpg"
    },
    logo: "/logo_srmv.png",
    banner: "/gallery_05.jpg",
    stats: [
      { label: "Trained", value: "500+" },
      { label: "Placements", value: "15+" },
      { label: "Success Rate", value: "95%" }
    ],
    achievements: [
      "Established fast-track Cloud Developer recruitment pipeline",
      "Trained 500+ candidates in docker and AWS networks",
      "Accredited placement partner status"
    ],
    focusAreas: ["AWS Cloud", "Docker Containerization", "CI/CD Pipelines", "Node REST APIs"]
  },
  {
    id: "saec",
    name: "SA Engineering College",
    location: "Chennai, TN",
    desc: "Industry internships, workshops, project mentoring, and technology initiatives.",
    details: {
      framework: "Established a strategic cooperation focused on frontend and fullstack developer preparation. Keys of alliance include:\n- Allocation of semester-long internships for core development teams.\n- Direct mentorship on real-world engineering project lifecycles.\n- On-campus web framework seminars and coding competitions.\n- Direct recruitment channels for outstanding final-year graduates.",
      initiatives: ["React & Node Training", "Final Year Capstone Mentoring", "Intern Cohorts"]
    },
    images: {
      mou: "/mou_saec.png",
      event1: "/gallery_02.jpg",
      event2: "/gallery_03.jpg"
    },
    logo: "/logo_saec.png",
    banner: "/mou_saec.png",
    stats: [
      { label: "Intern Cohorts", value: "12+" },
      { label: "React bootcamps", value: "3" },
      { label: "Grad Rate", value: "100%" }
    ],
    achievements: [
      "Direct frontend developer internship pathways",
      "100% submission rating on commercial-grade capstones",
      "Direct student mentoring by SaaS engineering leads"
    ],
    focusAreas: ["React & Next.js", "State Management", "Tailwind styling", "Git Workflows"]
  },
  {
    id: "jit",
    name: "Jeppiaar Institute of Technology",
    location: "Sriperumbudur, TN",
    desc: "Live commercial-grade project immersion, tech meetups, and specialized developer training.",
    details: {
      framework: "Joint innovation incubation pathway targeting mobile and web product engineering. Activities involve:\n- Active training bootcamps using React Native and Flutter environments.\n- Practical engineering sprints inside proprietary SaaS product lines.\n- Campus hackathons with technical evaluations and career fast-tracks.\n- Structured visits to the development head office for project reviews.",
      initiatives: ["Live SaaS Coding Immersion", "Flutter Bootcamps", "Bi-monthly Campus Meetups"]
    },
    images: {
      mou: "/mou_jit.png",
      event1: "/hackathon_jit.jpg",
      event2: "/seminar_jit.jpg"
    },
    logo: "/logo_jit.png",
    banner: "/seminar_jit.jpg",
    stats: [
      { label: "Bootcamp Grads", value: "350+" },
      { label: "SaaS Sprints", value: "8" },
      { label: "Campus Meetups", value: "10+" }
    ],
    achievements: [
      "First-ever campus mobile app developer lab node",
      "Active contributors to live FertiCare mobile assets",
      "3 innovation sponsorships awarded in campus sprints"
    ],
    focusAreas: ["React Native", "Flutter Mobile SDKs", "SaaS Core Engineering", "UI/UX Prototyping"]
  }
];

const CollaborationsSection = () => {
  // Modal states
  const [selectedInst, setSelectedInst] = useState<typeof institutions[0] | null>(null);
  const [activeModal, setActiveModal] = useState<'mou' | null>(null);

  // Form state
  const [mouForm, setMouForm] = useState({
    collegeName: '',
    contactPerson: '',
    designation: '',
    email: '',
    phone: '',
    proposalType: 'Workshop & Training',
    details: ''
  });

  const [submittingMou, setSubmittingMou] = useState(false);

  // Handle Form Inputs
  const handleMouChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setMouForm({ ...mouForm, [e.target.name]: e.target.value });
  };

  // Submit MoU Form
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
        proposalType: 'Workshop & Training',
        details: ''
      });
      setActiveModal(null);
    } else {
      toast.error(result.error || 'Failed to submit request. Please try again.');
    }
  };

  return (
    <div className="bg-black min-h-screen text-gray-100 selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-hidden font-sans pb-24 pt-32">
      {/* Canvas Particles & Backdrop Lights */}
      <FloatingParticles />
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative z-10 px-6 max-w-7xl mx-auto text-center pt-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-6"
        >
          {/* Tagline */}
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-400/20 px-3.5 py-1.5 rounded-full text-xs font-mono text-cyan-300">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
            <span>ACADEMIC CO-VENTURING & ALLIANCES</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight uppercase leading-none">
            Academic{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 drop-shadow-[0_0_30px_rgba(6,182,212,0.15)]">
              Alliance Hub
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Bridging the gap between commercial SaaS engineering and hands-on developer training. We partner with leading institutions to establish campus innovation centers, incubate talent, and deploy live production systems.
          </p>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveModal('mou')}
              className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-mono text-xs font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 flex items-center gap-2 cursor-pointer uppercase border border-cyan-400/20"
            >
              Initiate Academic MoU <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#alliance-cards"
              className="bg-white/5 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white font-mono text-xs font-bold px-8 py-4 rounded-xl transition-all duration-300 flex items-center gap-2 cursor-pointer uppercase"
            >
              Explore Partners
            </a>
          </div>
        </motion.div>
      </section>

      {/* Impact Stats Section */}
      <ImpactStats />

      {/* Interactive India Map */}
      <IndiaMap />

      {/* Auto-scrolling logo wall */}
      <MarqueeLogos />

      {/* College Showcase Cards Grid */}
      <section id="alliance-cards" className="relative z-10 px-6 max-w-7xl mx-auto my-24 scroll-mt-24">
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
            INCUBATION NODES
          </h2>
          <h3 className="text-3xl font-extrabold text-white">
            Active Academic Alliances
          </h3>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto mt-3">
            Explore our co-established labs, student cohorts, and live SaaS project sprint deliverables inside each university campus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {institutions.map((inst) => (
            <motion.div
              key={inst.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
            >
              <CollaborationCard
                institution={inst}
                onViewCollaboration={(i) => setSelectedInst(i)}
                onEventGallery={(i) => setSelectedInst(i)}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Partnership Timeline */}
      <Timeline />

      {/* Student Success Stories */}
      <SuccessStories />

      {/* Collaboration Process */}
      <ProcessSection />

      {/* Visual Final CTA */}
      <section className="relative z-10 px-6 max-w-7xl mx-auto my-24">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-950 via-gray-900/60 to-gray-950 border border-white/5 rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden text-center space-y-8">
          {/* Glow spots */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-48 h-48 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

          <div className="flex justify-center">
            <div className="p-4 bg-cyan-500/10 rounded-2xl text-cyan-400 border border-cyan-500/20 shadow-inner">
              <School className="w-8 h-8" />
            </div>
          </div>

          <h3 className="text-3xl font-extrabold text-white uppercase">
            Partner With{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Acutix Soft
            </span>
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto">
            Connect your engineering department with our software labs. Establish a structured MoU for student internships, industrial visits, guest workshops, and curriculum alignment to give your developers edge in commercial SaaS spaces.
          </p>

          <div className="flex justify-center pt-4">
            <button
              onClick={() => setActiveModal('mou')}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-extrabold px-10 py-4.5 rounded-xl shadow-lg shadow-cyan-500/15 hover:shadow-cyan-400/25 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-sm font-mono uppercase border border-cyan-400/30"
            >
              Initiate Academic MoU <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Modal (Framer-motion powered) */}
      <AnimatePresence>
        {selectedInst && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop overlay */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedInst(null)}
            />

            {/* Modal Box */}
            <motion.div
              className="bg-gray-950/95 border border-white/10 rounded-3xl shadow-2xl p-6 md:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative z-10 backdrop-blur-2xl text-white"
              initial={{ scale: 0.92, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-6 pb-4 border-b border-white/5">
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                    Partnership Gallery & MoU details
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {selectedInst.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedInst(null)}
                  className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Layout: Split Grid */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
                {/* Details Section (2 cols) */}
                <div className="md:col-span-2 space-y-4">
                  <div className="bg-black/50 border border-white/5 rounded-xl p-5 font-mono text-xs text-slate-300 space-y-3 leading-relaxed h-full">
                    <div className="flex items-center gap-2 border-b border-white/5 pb-2 text-cyan-400">
                      <Terminal className="w-4 h-4" />
                      <span>COOPERATION_MANIFEST // ACTIVE</span>
                    </div>
                    <p className="whitespace-pre-line leading-relaxed text-gray-300">
                      {selectedInst.details.framework}
                    </p>
                  </div>
                </div>

                {/* Images Section (3 cols) */}
                <div className="md:col-span-3 space-y-4">
                  {/* Left/Main Column: Official MoU Signing Moment */}
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/10 group bg-white/5">
                    <Image
                      src={selectedInst.images.mou}
                      alt="MoU Signing Moment"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                      <span className="font-mono text-[9px] text-cyan-400 bg-cyan-950/80 px-2 py-1 rounded border border-cyan-500/20 uppercase">
                        ⚡ MoU Signing Moment
                      </span>
                    </div>
                  </div>

                  {/* Two Smaller Live Campus Photos */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 group bg-white/5">
                      <Image
                        src={selectedInst.images.event1}
                        alt="Live campus technical seminar"
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                        <span className="font-mono text-[8px] text-cyan-300 uppercase">
                          🖥️ Live Seminars
                        </span>
                      </div>
                    </div>
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 group bg-white/5">
                      <Image
                        src={selectedInst.images.event2}
                        alt="Technical hackathon and workshop"
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                        <span className="font-mono text-[8px] text-cyan-300 uppercase">
                          ⚙️ Hackathons
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex justify-end gap-3 pt-4 border-t border-white/5">
                <button
                  onClick={() => setSelectedInst(null)}
                  className="bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 transition cursor-pointer font-mono px-5 py-2.5 rounded-lg text-xs"
                >
                  Close Document
                </button>
                <button
                  onClick={() => {
                    setSelectedInst(null);
                    setMouForm((prev) => ({ ...prev, collegeName: selectedInst.name }));
                    setActiveModal('mou');
                  }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-extrabold px-5 py-2.5 rounded-lg text-xs hover:from-cyan-400 hover:to-blue-500 transition cursor-pointer font-mono flex items-center gap-1.5"
                >
                  Expand Cooperation <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MODAL FORM: INITIATE MOU */}
      <AnimatePresence>
        {activeModal === 'mou' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
            />

            <motion.div
              className="bg-gray-950/95 border border-white/10 rounded-3xl shadow-2xl p-6 md:p-8 max-w-2xl w-full relative z-10 backdrop-blur-2xl text-white"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-2 text-white uppercase">
                    <School className="text-cyan-400 w-6 h-6" /> Initiate Academic MoU
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Connect your institution with our engineering training framework.
                  </p>
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleMouSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                      Institution Name *
                    </label>
                    <input
                      required
                      type="text"
                      name="collegeName"
                      value={mouForm.collegeName}
                      onChange={handleMouChange}
                      className="block w-full rounded bg-black/60 border border-white/10 px-3 py-2.5 text-white text-xs focus:border-cyan-400 focus:outline-none transition font-sans"
                      placeholder="e.g. SRM Valliammai"
                      disabled={submittingMou}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                      Contact Person Name *
                    </label>
                    <input
                      required
                      type="text"
                      name="contactPerson"
                      value={mouForm.contactPerson}
                      onChange={handleMouChange}
                      className="block w-full rounded bg-black/60 border border-white/10 px-3 py-2.5 text-white text-xs focus:border-cyan-400 focus:outline-none transition font-sans"
                      placeholder="e.g. Dr. A. Kumar"
                      disabled={submittingMou}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                      Designation *
                    </label>
                    <input
                      required
                      type="text"
                      name="designation"
                      value={mouForm.designation}
                      onChange={handleMouChange}
                      className="block w-full rounded bg-black/60 border border-white/10 px-3 py-2.5 text-white text-xs focus:border-cyan-400 focus:outline-none transition font-sans"
                      placeholder="e.g. HOD / Placement Officer"
                      disabled={submittingMou}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={mouForm.email}
                      onChange={handleMouChange}
                      className="block w-full rounded bg-black/60 border border-white/10 px-3 py-2.5 text-white text-xs focus:border-cyan-400 focus:outline-none transition font-sans"
                      placeholder="hod.cse@college.edu"
                      disabled={submittingMou}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={mouForm.phone}
                      onChange={handleMouChange}
                      className="block w-full rounded bg-black/60 border border-white/10 px-3 py-2.5 text-white text-xs focus:border-cyan-400 focus:outline-none transition font-sans"
                      placeholder="+91 98765 43210"
                      disabled={submittingMou}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                      Cooperation Focus *
                    </label>
                    <select
                      name="proposalType"
                      value={mouForm.proposalType}
                      onChange={handleMouChange}
                      className="block w-full rounded bg-black/60 border border-white/10 px-3 py-2.5 text-white text-xs focus:border-cyan-400 focus:outline-none transition font-sans"
                      disabled={submittingMou}
                    >
                      <option>Workshop & Technical Training</option>
                      <option>Semester Internships</option>
                      <option>Joint AI/SaaS Research</option>
                      <option>Comprehensive institutional MoU</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                    Additional Details / Proposals
                  </label>
                  <textarea
                    name="details"
                    rows={4}
                    value={mouForm.details}
                    onChange={handleMouChange}
                    className="block w-full rounded bg-black/60 border border-white/10 px-3 py-2.5 text-white text-xs focus:border-cyan-400 focus:outline-none transition font-sans"
                    placeholder="Provide details on target student departments, year, or custom ideas..."
                    disabled={submittingMou}
                  />
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-white/5">
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    className="bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 transition cursor-pointer font-mono px-5 py-2.5 rounded-lg text-xs"
                    disabled={submittingMou}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-extrabold px-6 py-2.5 rounded-lg text-xs hover:from-cyan-400 hover:to-blue-500 transition flex items-center gap-1.5 cursor-pointer font-mono"
                    disabled={submittingMou}
                  >
                    {submittingMou ? 'Sending...' : 'Send MoU Request'} <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default CollaborationsSection;
