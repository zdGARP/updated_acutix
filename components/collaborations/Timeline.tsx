'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, CheckCircle2, ChevronRight } from 'lucide-react';

interface Milestone {
  year: string;
  title: string;
  subtitle: string;
  desc: string;
  outcomes: string[];
  color: string;
}

export default function Timeline() {
  const [activeIdx, setActiveIdx] = useState(0);

  const milestones: Milestone[] = [
    {
      year: '2023',
      title: 'Fullstack Bootcamp Pipeline established',
      subtitle: 'SRM Valliammai Alliance',
      desc: 'Launched intensive AWS deployment and modern containerization webinars to ready final-year engineers. Created fast-track placement interviews directly into our development units.',
      outcomes: [
        'Over 180 students trained in AWS containerization pipelines.',
        '15 candidates fast-tracked into core development teams.',
        'Established direct campus recruitment placement channel.',
      ],
      color: '#8b5cf6', // Purple
    },
    {
      year: '2024',
      title: 'AI & Healthcare Hackathons Initiated',
      subtitle: 'VISTAS Academic Research Alliance',
      desc: 'Collaborated on the national MedNexus AI Hackathon. Began co-venturing on graduate-level research designs, utilizing machine learning algorithms for women\'s clinic management software.',
      outcomes: [
        'Co-hosted MedNexus AI challenge with 200+ local participants.',
        'Integrated student researchers into clinical software pilot programs.',
        'Shared joint publications in applied AI models for clinics.',
      ],
      color: '#06b6d4', // Cyan
    },
    {
      year: '2024 (Mid)',
      title: 'Frontend Developer Intern Cohorts',
      subtitle: 'SAEC Cooperation Launch',
      desc: 'Integrated semester-long internships focused on frontend architectures. Provided hands-on code reviews and mentorship on real-world engineering project workflows.',
      outcomes: [
        'Delivered 3 React/Node bootcamp tracks on-campus.',
        'Enabled 12 final-year students to submit commercial capstone projects.',
        '100% internship-to-grad placement rating for selected cohorts.',
      ],
      color: '#10b981', // Emerald
    },
    {
      year: '2025',
      title: 'Live SaaS Product Sprints',
      subtitle: 'Jeppiaar Institute Innovation Hub',
      desc: 'Established the Jeppiaar Mobile App Labs, launching React Native and Flutter bootcamps. Students contributed directly to module builds within our FertiCare and GymPad platforms.',
      outcomes: [
        'Launched dedicated mobile labs with bi-monthly campus meetups.',
        'Integrated 8 student developers directly into live SaaS code sprints.',
        'Awarded 3 student teams with innovation sponsorships.',
      ],
      color: '#f59e0b', // Amber
    },
    {
      year: '2026',
      title: 'Regional Incubator Expansion',
      subtitle: 'Acutix Next-Gen Alliances',
      desc: 'Broadening our footprint to encompass academic incubator hubs across South India, merging commercial SaaS engineering with hands-on research environments.',
      outcomes: [
        'Targeting 5 new academic MoUs across Southern India.',
        'Standardizing academic curriculum alignment with enterprise-grade tech.',
        'Expanding live SaaS training environments to 1000+ new developers.',
      ],
      color: '#ec4899', // Pink
    },
  ];

  return (
    <section className="relative z-10 px-6 max-w-7xl mx-auto my-24">
      <div className="text-center mb-16">
        <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
          Evolutionary Milestones
        </h2>
        <h3 className="text-3xl font-extrabold text-white">
          Partnership Growth Timeline
        </h3>
        <p className="text-sm text-gray-400 max-w-2xl mx-auto mt-3">
          Select a year below to view key project outcomes, co-hosted hackathons, and statistics of our alliance.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Timeline Slider Buttons (5 cols) */}
        <div className="lg:col-span-4 flex flex-row lg:flex-col justify-start lg:justify-center overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-3 lg:space-y-4 pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-white/5 scrollbar-thin">
          {milestones.map((milestone, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`flex-shrink-0 flex items-center space-x-4 px-5 py-4 rounded-xl border text-left transition-all duration-300 w-fit lg:w-full cursor-pointer ${
                activeIdx === idx
                  ? 'bg-white/5 border-cyan-500/30 text-white shadow-lg'
                  : 'bg-transparent border-transparent text-gray-500 hover:text-gray-300'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center font-mono font-bold text-sm transition-all duration-300 ${
                  activeIdx === idx
                    ? 'text-white'
                    : 'bg-white/5 text-gray-400'
                }`}
                style={{
                  backgroundColor: activeIdx === idx ? milestone.color : undefined,
                  boxShadow: activeIdx === idx ? `0 0 15px ${milestone.color}66` : undefined,
                }}
              >
                {milestone.year.split(' ')[0]}
              </div>
              <div className="hidden sm:block">
                <h4 className="text-xs font-bold font-sans tracking-wide uppercase">
                  {milestone.subtitle}
                </h4>
                <p className="text-[10px] text-gray-500 font-mono mt-0.5">
                  {milestone.title.slice(0, 24)}...
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Detailed Pane (8 cols) */}
        <div className="lg:col-span-8">
          <div className="bg-gray-900/30 border border-white/5 rounded-3xl p-6 sm:p-8 backdrop-blur-xl h-full flex flex-col justify-between relative overflow-hidden">
            {/* Glowing backdrop matching target milestone */}
            <div
              className="absolute -right-16 -top-16 w-48 h-48 rounded-full blur-3xl opacity-20 transition-all duration-500"
              style={{ backgroundColor: milestones[activeIdx].color }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-3 text-cyan-400">
                  <Calendar className="w-5 h-5" style={{ color: milestones[activeIdx].color }} />
                  <span className="font-mono text-sm tracking-wider" style={{ color: milestones[activeIdx].color }}>
                    COOPERATION YEAR: {milestones[activeIdx].year}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-white">
                    {milestones[activeIdx].title}
                  </h3>
                  <h4 className="text-sm font-semibold text-gray-400">
                    {milestones[activeIdx].subtitle}
                  </h4>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {milestones[activeIdx].desc}
                </p>

                <div className="space-y-3 pt-4 border-t border-white/5">
                  <h5 className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
                    Key Outcomes & Milestones
                  </h5>
                  <ul className="space-y-2.5">
                    {milestones[activeIdx].outcomes.map((out, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5 text-xs text-gray-400">
                        <CheckCircle2
                          className="w-4 h-4 mt-0.5 flex-shrink-0"
                          style={{ color: milestones[activeIdx].color }}
                        />
                        <span className="leading-relaxed">{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-500">
              <span>ALLIANCE HISTORICAL LOG</span>
              <span className="flex items-center gap-1">
                SELECT MILESTONE <ChevronRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
