'use client';

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendForm } from '../lib/sendForm';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  Send,
  GraduationCap,
  Code,
  UserCheck,
  Plus,
  X,
  School
} from 'lucide-react';



// Academic Alliance Hub Data
const institutions = [
  {
    id: "saec",
    name: "SA Engineering College",
    location: "Chennai, TN",
    desc: "Industry internships, hands-on development workshops, project mentoring, and customized technology initiatives.",
    details: {
      framework: "Joint MoU signed in 2024. Focus areas include: \n- Semester-long student internship allocations.\n- Expert-led React and Next.js developer workshops.\n- Direct sponsorship of final year capstone projects.\n- Industry-guided tech guest lectures.",
      initiatives: ["React & Node Training", "Final Year Capstone Mentoring", "Intern Cohorts"]
    }
  },
  {
    id: "srmv",
    name: "SRM Valliammai Engineering College",
    location: "Kattankulathur, TN",
    desc: "Joint industrial training programs, technical webinars, live product demos, and emerging talent acceleration.",
    details: {
      framework: "Strategic talent alliance targeting modern web development. Focus areas:\n- Multi-week full stack developer crash courses.\n- Joint webinars on cloud computing and AWS deployment.\n- Evaluation of final year student research projects.\n- Fast-track incubation interview passes.",
      initiatives: ["Cloud Architecture Webinars", "Fast-track Placement Interviews", "Fullstack Bootcamps"]
    }
  },
  {
    id: "jit",
    name: "Jeppiaar Institute of Technology",
    location: "Sriperumbudur, TN",
    desc: "Live commercial-grade project immersion, interactive tech meetups, and specialized developer bootcamps.",
    details: {
      framework: "Joint innovation incubation pathway. Focus areas:\n- Immersion in live SaaS product development (GymPad, FertiCare).\n- Bi-monthly campus technology meetups and hackathons.\n- Specialized training in mobile app development (Flutter/React Native).\n- On-campus industrial visit training modules.",
      initiatives: ["Live SaaS Coding Immersion", "Flutter Bootcamps", "Bi-monthly Campus Meetups"]
    }
  },
  {
    id: "vistas",
    name: "Vels Institute of Science Technology & Advanced Studies (VISTAS)",
    location: "Pallavaram, TN",
    desc: "Co-hosts of national initiatives, advanced healthcare AI hackathons, and research mentorship.",
    details: {
      framework: "Advanced academic research and co-venturing alliance. Focus areas:\n- HackFusion and MedNexus healthcare AI hackathons.\n- Collaborative research on AI applications in clinical software.\n- Mentorship of post-graduate IT research projects.\n- Enterprise system design workshops for faculty members.",
      initiatives: ["MedNexus AI Hackathons", "Healthcare AI Research", "Faculty System Design Workshops"]
    }
  }
];





const CollaborationsSection = () => {
  // Modal states
  const [selectedInst, setSelectedInst] = useState<typeof institutions[0] | null>(null);
  const [activeModal, setActiveModal] = useState<'mou' | 'mentor' | null>(null);

  // Form states
  const [mouForm, setMouForm] = useState({
    collegeName: '',
    contactPerson: '',
    designation: '',
    email: '',
    phone: '',
    proposalType: 'Workshop & Training',
    details: ''
  });

  const [mentorForm, setMentorForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    expertise: 'Frontend Development',
    linkedin: '',
    motivation: ''
  });

  const [submittingMou, setSubmittingMou] = useState(false);
  const [submittingMentor, setSubmittingMentor] = useState(false);

  // Handle Form Inputs
  const handleMouChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setMouForm({ ...mouForm, [e.target.name]: e.target.value });
  };

  const handleMentorChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setMentorForm({ ...mentorForm, [e.target.name]: e.target.value });
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

  // Submit Mentor Form
  const handleMentorSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittingMentor(true);
    toast.info('Submitting onboarding request...', { autoClose: false, toastId: 'submittingMentor' });

    const result = await sendForm({
      ...mentorForm,
      type: 'Mentor Network Onboarding',
      to: process.env.EMAIL_RECEIVER
    });

    toast.dismiss('submittingMentor');
    setSubmittingMentor(false);

    if (result.success) {
      toast.success('Success! Your application to join our Mentor Network has been sent.');
      setMentorForm({
        fullName: '',
        email: '',
        phone: '',
        experience: '',
        expertise: 'Frontend Development',
        linkedin: '',
        motivation: ''
      });
      setActiveModal(null);
    } else {
      toast.error(result.error || 'Failed to submit application. Please try again.');
    }
  };

  return (
    <div className="bg-[#07090e] text-white min-h-screen relative overflow-hidden font-sans pb-24">
      {/* Abstract Grid + Ambient Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0c_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0c_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-br from-cyan-500/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-gradient-to-tr from-amber-500/5 to-transparent blur-[120px] pointer-events-none" />

      {/* 3. ACADEMIC ALLIANCE HUB */}
      <section id="alliance-hub" className="relative z-10 pt-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-32">
        <div className="text-center mb-16">
          <span className="text-[10px] font-mono tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded border border-cyan-500/20 uppercase">
            Incubation Partners
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 tracking-tight">Our Academic Collaborations</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mt-2 text-sm">
            We partner with premier engineering colleges to incubate talent via active industry training frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {institutions.map((inst, idx) => (
            <motion.div
              key={inst.id}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col justify-between hover:border-cyan-500/30 hover:bg-white/[0.07] transition-all duration-300 group shadow-lg"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 group-hover:bg-cyan-500/20 transition-all duration-300">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono bg-white/5 px-2.5 py-1 rounded text-slate-400">
                    {inst.location}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-3">
                  {inst.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {inst.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {inst.details.initiatives.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono bg-black/40 text-slate-300 px-2 py-1 rounded border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedInst(inst)}
                className="w-fit text-xs font-mono font-bold text-cyan-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5 cursor-pointer uppercase"
              >
                📄 View Partnership Framework <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>


      {/* 6. DUAL-TRACK CALL TO ACTION (MoU or Mentor) */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-lg overflow-hidden shadow-2xl relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Highlights */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 divide-y md:divide-y-0 md:divide-x divide-white/10">
            
            {/* Left Track (Academic) */}
            <div className="space-y-6 pb-8 md:pb-0">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
                  <School className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">For Institutions</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Connect your engineering department with our software labs. Establish a structured MoU for student internships, industrial visits, guest workshops, and curriculum alignment.
              </p>
              <button
                onClick={() => setActiveModal('mou')}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold px-6 py-3.5 rounded-lg shadow transition-all duration-300 w-full flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                Initiate Academic MoU <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Track (Mentors) */}
            <div className="space-y-6 pt-8 md:pt-0 md:pl-12">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">For Industry Experts</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Empower emerging engineers with your practical expertise. Review code, advise on final-year research designs, and guide students through live tech cohorts.
              </p>
              <button
                onClick={() => setActiveModal('mentor')}
                className="bg-transparent border border-white/20 hover:border-amber-400 hover:bg-amber-500/5 text-slate-300 hover:text-amber-400 font-bold px-6 py-3.5 rounded-lg transition-all duration-300 w-full flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                Join Our Mentor Network <Plus className="w-4 h-4" />
              </button>
            </div>

          </div>
        </motion.div>
      </section>

      {/* DETAIL MODAL: ACADEMIC PARTNERSHIP FRAMEWORK */}
      <AnimatePresence>
        {selectedInst && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#0b0f19] border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 max-w-2xl w-full relative overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                    Partnership Framework Details
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {selectedInst.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedInst(null)}
                  className="p-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Terminal Style Content */}
              <div className="bg-black/50 border border-white/5 rounded-xl p-5 font-mono text-xs text-slate-300 space-y-4 max-h-[350px] overflow-y-auto mb-6 leading-relaxed">
                <div className="flex items-center gap-2 border-b border-white/5 pb-2 text-cyan-400">
                  <Code className="w-4 h-4" />
                  <span>MEMORANDUM_OF_UNDERSTANDING // ACTIVE</span>
                </div>
                <div className="whitespace-pre-line">
                  {selectedInst.details.framework}
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setSelectedInst(null)}
                  className="bg-white/5 border border-white/10 text-slate-300 font-semibold px-5 py-2.5 rounded-lg text-xs hover:bg-white/10 transition cursor-pointer"
                >
                  Close Document
                </button>
                <button
                  onClick={() => {
                    setSelectedInst(null);
                    setMouForm(prev => ({ ...prev, collegeName: selectedInst.name }));
                    setActiveModal('mou');
                  }}
                  className="bg-cyan-500 text-white font-semibold px-5 py-2.5 rounded-lg text-xs hover:bg-cyan-400 transition cursor-pointer"
                >
                  Expand Cooperation
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL FORM: INITIATE MOU */}
      <AnimatePresence>
        {activeModal === 'mou' && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#0b0f19] border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 max-w-2xl w-full relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
                    <School className="text-cyan-400 w-6 h-6" /> Initiate Academic MoU
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Connect your institution with our engineering training framework.
                  </p>
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  className="p-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleMouSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="block text-xs font-mono text-slate-400 uppercase">
                    Institution Name *
                    <input
                      required
                      type="text"
                      name="collegeName"
                      value={mouForm.collegeName}
                      onChange={handleMouChange}
                      className="mt-1.5 block w-full rounded bg-black/40 border border-white/10 px-3 py-2 text-white text-xs focus:border-cyan-400 focus:outline-none transition"
                      placeholder="e.g. SRM Valliammai"
                      disabled={submittingMou}
                    />
                  </label>

                  <label className="block text-xs font-mono text-slate-400 uppercase">
                    Contact Person Name *
                    <input
                      required
                      type="text"
                      name="contactPerson"
                      value={mouForm.contactPerson}
                      onChange={handleMouChange}
                      className="mt-1.5 block w-full rounded bg-black/40 border border-white/10 px-3 py-2 text-white text-xs focus:border-cyan-400 focus:outline-none transition"
                      placeholder="e.g. Dr. A. Kumar"
                      disabled={submittingMou}
                    />
                  </label>

                  <label className="block text-xs font-mono text-slate-400 uppercase">
                    Designation *
                    <input
                      required
                      type="text"
                      name="designation"
                      value={mouForm.designation}
                      onChange={handleMouChange}
                      className="mt-1.5 block w-full rounded bg-black/40 border border-white/10 px-3 py-2 text-white text-xs focus:border-cyan-400 focus:outline-none transition"
                      placeholder="e.g. HOD / Placement Officer"
                      disabled={submittingMou}
                    />
                  </label>

                  <label className="block text-xs font-mono text-slate-400 uppercase">
                    Email Address *
                    <input
                      required
                      type="email"
                      name="email"
                      value={mouForm.email}
                      onChange={handleMouChange}
                      className="mt-1.5 block w-full rounded bg-black/40 border border-white/10 px-3 py-2 text-white text-xs focus:border-cyan-400 focus:outline-none transition"
                      placeholder="hod.cse@college.edu"
                      disabled={submittingMou}
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="block text-xs font-mono text-slate-400 uppercase">
                    Phone Number *
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={mouForm.phone}
                      onChange={handleMouChange}
                      className="mt-1.5 block w-full rounded bg-black/40 border border-white/10 px-3 py-2 text-white text-xs focus:border-cyan-400 focus:outline-none transition"
                      placeholder="+91 98765 43210"
                      disabled={submittingMou}
                    />
                  </label>

                  <label className="block text-xs font-mono text-slate-400 uppercase">
                    Cooperation Focus *
                    <select
                      name="proposalType"
                      value={mouForm.proposalType}
                      onChange={handleMouChange}
                      className="mt-1.5 block w-full rounded bg-black/40 border border-white/10 px-3 py-2 text-white text-xs focus:border-cyan-400 focus:outline-none transition"
                      disabled={submittingMou}
                    >
                      <option>Workshop & Technical Training</option>
                      <option>Semester Internships</option>
                      <option>Joint AI/SaaS Research</option>
                      <option>Comprehensive institutional MoU</option>
                    </select>
                  </label>
                </div>

                <label className="block text-xs font-mono text-slate-400 uppercase">
                  Additional Details / Proposals
                  <textarea
                    name="details"
                    rows={4}
                    value={mouForm.details}
                    onChange={handleMouChange}
                    className="mt-1.5 block w-full rounded bg-black/40 border border-white/10 px-3 py-2 text-white text-xs focus:border-cyan-400 focus:outline-none transition"
                    placeholder="Provide details on target student departments, year, or custom ideas..."
                    disabled={submittingMou}
                  />
                </label>

                <div className="flex justify-end gap-3 pt-4 border-t border-white/5">
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    className="bg-white/5 border border-white/10 text-slate-300 font-semibold px-5 py-2.5 rounded-lg text-xs hover:bg-white/10 transition cursor-pointer"
                    disabled={submittingMou}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold px-6 py-2.5 rounded-lg text-xs hover:from-cyan-400 hover:to-blue-400 transition flex items-center gap-1.5 cursor-pointer"
                    disabled={submittingMou}
                  >
                    {submittingMou ? 'Sending...' : 'Send MoU Request'} <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL FORM: JOIN MENTOR NETWORK */}
      <AnimatePresence>
        {activeModal === 'mentor' && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#0b0f19] border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 max-w-2xl w-full relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
                    <UserCheck className="text-amber-400 w-6 h-6" /> Join Our Mentor Network
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Help guide next-gen developers and review live codebase designs.
                  </p>
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  className="p-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleMentorSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="block text-xs font-mono text-slate-400 uppercase">
                    Full Name *
                    <input
                      required
                      type="text"
                      name="fullName"
                      value={mentorForm.fullName}
                      onChange={handleMentorChange}
                      className="mt-1.5 block w-full rounded bg-black/40 border border-white/10 px-3 py-2 text-white text-xs focus:border-amber-400 focus:outline-none transition"
                      placeholder="e.g. Rajesh Kumar"
                      disabled={submittingMentor}
                    />
                  </label>

                  <label className="block text-xs font-mono text-slate-400 uppercase">
                    Email Address *
                    <input
                      required
                      type="email"
                      name="email"
                      value={mentorForm.email}
                      onChange={handleMentorChange}
                      className="mt-1.5 block w-full rounded bg-black/40 border border-white/10 px-3 py-2 text-white text-xs focus:border-amber-400 focus:outline-none transition"
                      placeholder="rajesh@company.com"
                      disabled={submittingMentor}
                    />
                  </label>

                  <label className="block text-xs font-mono text-slate-400 uppercase">
                    Phone Number *
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={mentorForm.phone}
                      onChange={handleMentorChange}
                      className="mt-1.5 block w-full rounded bg-black/40 border border-white/10 px-3 py-2 text-white text-xs focus:border-amber-400 focus:outline-none transition"
                      placeholder="+91 99999 88888"
                      disabled={submittingMentor}
                    />
                  </label>

                  <label className="block text-xs font-mono text-slate-400 uppercase">
                    Years of Experience *
                    <input
                      required
                      type="text"
                      name="experience"
                      value={mentorForm.experience}
                      onChange={handleMentorChange}
                      className="mt-1.5 block w-full rounded bg-black/40 border border-white/10 px-3 py-2 text-white text-xs focus:border-amber-400 focus:outline-none transition"
                      placeholder="e.g. 5+ years"
                      disabled={submittingMentor}
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="block text-xs font-mono text-slate-400 uppercase">
                    Domain Expertise *
                    <select
                      name="expertise"
                      value={mentorForm.expertise}
                      onChange={handleMentorChange}
                      className="mt-1.5 block w-full rounded bg-black/40 border border-white/10 px-3 py-2 text-white text-xs focus:border-amber-400 focus:outline-none transition"
                      disabled={submittingMentor}
                    >
                      <option>Frontend Development (React/Next.js)</option>
                      <option>Backend & DB (Node/Go/PostgreSQL)</option>
                      <option>DevOps & Cloud (AWS/CI/CD/Docker)</option>
                      <option>AI & Data Engineering (Python/ML)</option>
                      <option>Product Management & UI/UX</option>
                    </select>
                  </label>

                  <label className="block text-xs font-mono text-slate-400 uppercase">
                    LinkedIn URL *
                    <input
                      required
                      type="url"
                      name="linkedin"
                      value={mentorForm.linkedin}
                      onChange={handleMentorChange}
                      className="mt-1.5 block w-full rounded bg-black/40 border border-white/10 px-3 py-2 text-white text-xs focus:border-amber-400 focus:outline-none transition"
                      placeholder="https://linkedin.com/in/username"
                      disabled={submittingMentor}
                    />
                  </label>
                </div>

                <label className="block text-xs font-mono text-slate-400 uppercase">
                  Why do you want to join our Incubation wing? *
                  <textarea
                    required
                    name="motivation"
                    rows={4}
                    value={mentorForm.motivation}
                    onChange={handleMentorChange}
                    className="mt-1.5 block w-full rounded bg-black/40 border border-white/10 px-3 py-2 text-white text-xs focus:border-amber-400 focus:outline-none transition"
                    placeholder="Share how you wish to collaborate, offer reviews, or hold technical sessions..."
                    disabled={submittingMentor}
                  />
                </label>

                <div className="flex justify-end gap-3 pt-4 border-t border-white/5">
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    className="bg-white/5 border border-white/10 text-slate-300 font-semibold px-5 py-2.5 rounded-lg text-xs hover:bg-white/10 transition cursor-pointer"
                    disabled={submittingMentor}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#FFD98A] text-[#171717] font-bold px-6 py-2.5 rounded-lg text-xs hover:bg-[#ffe1a6] transition flex items-center gap-1.5 cursor-pointer"
                    disabled={submittingMentor}
                  >
                    {submittingMentor ? 'Sending...' : 'Join Mentor Network'} <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default CollaborationsSection;
