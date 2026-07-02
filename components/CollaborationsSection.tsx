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
  ArrowRight
} from 'lucide-react';

// Academic Alliance Hub Data in user-requested order:
// 1. VISTAS 2. SRM 3. SA Engineering 4. Jeppiaar
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
    logo: "/logo_vistas.png"
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
    logo: "/logo_srmv.png"
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
    logo: "/logo_saec.png"
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
    logo: "/logo_jit.png"
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
    <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-[#0d1117] dark:via-[#1a2333] dark:to-[#0d1117] text-[#323b42] dark:text-white min-h-screen relative overflow-hidden font-sans pb-24 pt-32">
      {/* Background Subtle Highlights */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[40vw] h-[40vw] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* College Showcases Grid */}
      <section className="relative z-10 px-6 max-w-7xl mx-auto mb-20 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {institutions.map((inst) => (
            <div
              key={inst.id}
              className="bg-white dark:bg-white/[0.02] backdrop-blur-xl border border-gray-200/80 dark:border-white/10 hover:border-cyan-500/40 dark:hover:border-cyan-500/40 rounded-2xl p-8 transition-all duration-500 shadow-lg dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] group flex flex-col justify-between"
            >
              <div>
                {/* Top Header: Logo & Title Layout */}
                <div className="flex items-center gap-4 mb-4">
                  {/* Round profile picture logo container */}
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-500/20 dark:border-white/10 bg-white relative flex-shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                    <Image
                      src={inst.logo}
                      alt={`${inst.name} Logo`}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] tracking-wider text-cyan-600 dark:text-cyan-400 uppercase bg-cyan-50 dark:bg-white/5 px-2.5 py-0.5 rounded border border-cyan-100 dark:border-white/5">
                      {inst.location}
                    </span>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300 mt-1 leading-snug">
                      {inst.name}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                  {inst.desc}
                </p>
                
                {/* Initiatives/Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {inst.details.initiatives.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[10px] font-mono bg-slate-100 dark:bg-white/[0.03] text-slate-700 dark:text-gray-300 px-2.5 py-1 rounded border border-slate-200/60 dark:border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom: View Gallery Button */}
              <button
                onClick={() => setSelectedInst(inst)}
                className="font-mono text-cyan-600 dark:text-cyan-400 text-xs tracking-wider flex items-center gap-2 mt-8 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors uppercase border border-cyan-200 dark:border-cyan-500/20 hover:border-cyan-400/50 dark:hover:border-cyan-500/40 bg-cyan-50/50 dark:bg-cyan-950/10 hover:bg-cyan-100/50 dark:hover:bg-cyan-950/30 px-4 py-2.5 rounded-lg w-fit cursor-pointer"
              >
                [ ⚡ VIEW MOU & EVENT GALLERY ]
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Onboarding CTA Section (Cleaned up, only Institutions) */}
      <section className="relative z-10 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 rounded-3xl p-8 sm:p-12 shadow-xl dark:shadow-2xl relative overflow-hidden">
          {/* Decorative backdrop gradients */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center space-y-6 max-w-2xl mx-auto">
            <div className="flex justify-center">
              <div className="p-4 bg-cyan-500/10 rounded-2xl text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                <School className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Partner With Acutix</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Connect your engineering department with our software labs. Establish a structured MoU for student internships, industrial visits, guest workshops, and curriculum alignment.
            </p>
            <div className="pt-4 flex justify-center">
              <button
                onClick={() => setActiveModal('mou')}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                Initiate Academic MoU <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Modal (Framer-motion powered) */}
      <AnimatePresence>
        {selectedInst && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop overlay */}
            <motion.div
              className="absolute inset-0 bg-black/75 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedInst(null)}
            />

            {/* Modal Box */}
            <motion.div
              className="bg-white dark:bg-[#0c0c0e]/95 border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative z-10 backdrop-blur-2xl text-[#323b42] dark:text-white"
              initial={{ scale: 0.92, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-6 pb-4 border-b border-gray-100 dark:border-white/5">
                <div>
                  <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest block mb-1">
                    Partnership Gallery & MoU details
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">
                    {selectedInst.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedInst(null)}
                  className="p-1.5 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Layout: Split Grid */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
                {/* Details Section (2 cols) */}
                <div className="md:col-span-2 space-y-4">
                  <div className="bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/5 rounded-xl p-5 font-mono text-xs text-gray-700 dark:text-slate-300 space-y-3 leading-relaxed h-full">
                    <div className="flex items-center gap-2 border-b border-gray-200 dark:border-white/5 pb-2 text-cyan-600 dark:text-cyan-400">
                      <Terminal className="w-4 h-4" />
                      <span>COOPERATION_MANIFEST // ACTIVE</span>
                    </div>
                    <p className="whitespace-pre-line leading-relaxed text-gray-600 dark:text-gray-300">
                      {selectedInst.details.framework}
                    </p>
                  </div>
                </div>

                {/* Images Section (3 cols) */}
                <div className="md:col-span-3 space-y-4">
                  {/* Left/Main Column: Official MoU Signing Moment */}
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 group bg-gray-50 dark:bg-white/5">
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
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 group bg-gray-50 dark:bg-white/5">
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
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 group bg-gray-50 dark:bg-white/5">
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
              <div className="flex justify-end gap-3 pt-4 border-t border-gray-100 dark:border-white/5">
                <button
                  onClick={() => setSelectedInst(null)}
                  className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-slate-300 font-semibold px-5 py-2.5 rounded-lg text-xs hover:bg-gray-200 dark:hover:bg-white/10 transition cursor-pointer font-mono"
                >
                  Close Document
                </button>
                <button
                  onClick={() => {
                    setSelectedInst(null);
                    setMouForm(prev => ({ ...prev, collegeName: selectedInst.name }));
                    setActiveModal('mou');
                  }}
                  className="bg-cyan-500 text-white dark:text-black font-extrabold px-5 py-2.5 rounded-lg text-xs hover:bg-cyan-600 dark:hover:bg-cyan-400 transition cursor-pointer font-mono flex items-center gap-1.5"
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
              className="absolute inset-0 bg-black/75 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
            />

            <motion.div
              className="bg-white dark:bg-[#0c0c0e]/95 border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 max-w-2xl w-full relative z-10 backdrop-blur-2xl text-[#323b42] dark:text-white"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-2 text-slate-800 dark:text-white">
                    <School className="text-cyan-500 dark:text-cyan-400 w-6 h-6" /> Initiate Academic MoU
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-slate-400 mt-1">
                    Connect your institution with our engineering training framework.
                  </p>
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  className="p-1.5 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleMouSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-gray-500 dark:text-slate-400 uppercase mb-1.5">
                      Institution Name *
                    </label>
                    <input
                      required
                      type="text"
                      name="collegeName"
                      value={mouForm.collegeName}
                      onChange={handleMouChange}
                      className="block w-full rounded bg-gray-50 dark:bg-black/60 border border-gray-200 dark:border-white/10 px-3 py-2.5 text-slate-800 dark:text-white text-xs focus:border-cyan-500 dark:focus:border-cyan-400 focus:outline-none transition font-sans"
                      placeholder="e.g. SRM Valliammai"
                      disabled={submittingMou}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-500 dark:text-slate-400 uppercase mb-1.5">
                      Contact Person Name *
                    </label>
                    <input
                      required
                      type="text"
                      name="contactPerson"
                      value={mouForm.contactPerson}
                      onChange={handleMouChange}
                      className="block w-full rounded bg-gray-50 dark:bg-black/60 border border-gray-200 dark:border-white/10 px-3 py-2.5 text-slate-800 dark:text-white text-xs focus:border-cyan-500 dark:focus:border-cyan-400 focus:outline-none transition font-sans"
                      placeholder="e.g. Dr. A. Kumar"
                      disabled={submittingMou}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-500 dark:text-slate-400 uppercase mb-1.5">
                      Designation *
                    </label>
                    <input
                      required
                      type="text"
                      name="designation"
                      value={mouForm.designation}
                      onChange={handleMouChange}
                      className="block w-full rounded bg-gray-50 dark:bg-black/60 border border-gray-200 dark:border-white/10 px-3 py-2.5 text-slate-800 dark:text-white text-xs focus:border-cyan-500 dark:focus:border-cyan-400 focus:outline-none transition font-sans"
                      placeholder="e.g. HOD / Placement Officer"
                      disabled={submittingMou}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-500 dark:text-slate-400 uppercase mb-1.5">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={mouForm.email}
                      onChange={handleMouChange}
                      className="block w-full rounded bg-gray-50 dark:bg-black/60 border border-gray-200 dark:border-white/10 px-3 py-2.5 text-slate-800 dark:text-white text-xs focus:border-cyan-500 dark:focus:border-cyan-400 focus:outline-none transition font-sans"
                      placeholder="hod.cse@college.edu"
                      disabled={submittingMou}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-gray-500 dark:text-slate-400 uppercase mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={mouForm.phone}
                      onChange={handleMouChange}
                      className="block w-full rounded bg-gray-50 dark:bg-black/60 border border-gray-200 dark:border-white/10 px-3 py-2.5 text-slate-800 dark:text-white text-xs focus:border-cyan-500 dark:focus:border-cyan-400 focus:outline-none transition font-sans"
                      placeholder="+91 98765 43210"
                      disabled={submittingMou}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-500 dark:text-slate-400 uppercase mb-1.5">
                      Cooperation Focus *
                    </label>
                    <select
                      name="proposalType"
                      value={mouForm.proposalType}
                      onChange={handleMouChange}
                      className="block w-full rounded bg-gray-50 dark:bg-black/60 border border-gray-200 dark:border-white/10 px-3 py-2.5 text-slate-800 dark:text-white text-xs focus:border-cyan-500 dark:focus:border-cyan-400 focus:outline-none transition font-sans"
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
                  <label className="block text-xs font-mono text-gray-500 dark:text-slate-400 uppercase mb-1.5">
                    Additional Details / Proposals
                  </label>
                  <textarea
                    name="details"
                    rows={4}
                    value={mouForm.details}
                    onChange={handleMouChange}
                    className="block w-full rounded bg-gray-50 dark:bg-black/60 border border-gray-200 dark:border-white/10 px-3 py-2.5 text-slate-800 dark:text-white text-xs focus:border-cyan-500 dark:focus:border-cyan-400 focus:outline-none transition font-sans"
                    placeholder="Provide details on target student departments, year, or custom ideas..."
                    disabled={submittingMou}
                  />
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-gray-100 dark:border-white/5">
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-slate-300 font-semibold px-5 py-2.5 rounded-lg text-xs hover:bg-gray-200 dark:hover:bg-white/10 transition cursor-pointer font-mono"
                    disabled={submittingMou}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-extrabold px-6 py-2.5 rounded-lg text-xs hover:from-cyan-400 hover:to-blue-400 transition flex items-center gap-1.5 cursor-pointer font-mono"
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
