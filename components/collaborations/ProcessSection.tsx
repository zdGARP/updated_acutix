'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Settings, FileText, Play, Rocket } from 'lucide-react';

interface Step {
  number: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  duration: string;
  deliverable: string;
  color: string;
}

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps: Step[] = [
    {
      number: '01',
      title: 'Consultation & Gaps Mapping',
      desc: 'Engage with department heads and placement coordinates to review curriculum outlines and isolate emerging tech focus areas.',
      icon: <MessageSquare className="w-5 h-5" />,
      duration: '1-2 Weeks',
      deliverable: 'Initial Engagement Roadmap Proposal',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      number: '02',
      title: 'Focus Area Alignment',
      desc: 'Determine whether bootcamps will target cloud containerization (AWS), mobile (React Native/Flutter), or artificial intelligence.',
      icon: <Settings className="w-5 h-5" />,
      duration: '1 Week',
      deliverable: 'Bootcamp & Tech Lab Syllabus Outline',
      color: 'from-blue-500 to-purple-500',
    },
    {
      number: '03',
      title: 'Formal MoU Setup & Lab Launch',
      desc: 'Formulate legal MoU covenants, establish the on-campus innovation tech lab nodes, and coordinate calendar schedules.',
      icon: <FileText className="w-5 h-5" />,
      duration: '2-3 Weeks',
      deliverable: 'Signed Academic MoU & Cohort Enrolments',
      color: 'from-purple-500 to-pink-500',
    },
    {
      number: '04',
      title: 'Bootcamp & Webinar Sprints',
      desc: 'Deploy senior engineering mentors to run technical bootcamps, code evaluations, and cloud deployment challenges.',
      icon: <Play className="w-5 h-5" />,
      duration: '4-6 Weeks',
      deliverable: 'Student Assessments & Certificate Distribution',
      color: 'from-pink-500 to-rose-500',
    },
    {
      number: '05',
      title: 'Live SaaS Project Sprints',
      desc: 'Selected candidates join our core development pipelines as semester interns, contributing live components to FertiCare, GymPad, etc.',
      icon: <Rocket className="w-5 h-5" />,
      duration: '3-6 Months',
      deliverable: 'Live Code Commits & Graduate Placement Offers',
      color: 'from-rose-500 to-orange-500',
    },
  ];

  return (
    <section className="relative z-10 px-6 max-w-7xl mx-auto my-24">
      <div className="text-center mb-16">
        <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
          Step-by-step Engagement
        </h2>
        <h3 className="text-3xl font-extrabold text-white">
          Our Collaboration Process
        </h3>
        <p className="text-sm text-gray-400 max-w-2xl mx-auto mt-3">
          A structured, phased onboarding approach to align institutional goals with actual commercial-grade engineering practices.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gray-900/10 border border-white/5 rounded-3xl p-6 sm:p-10 backdrop-blur-md relative overflow-hidden">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

        {/* Stepper Timeline (6 cols) */}
        <div className="lg:col-span-6 space-y-4 relative z-10">
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`w-full text-left flex items-center gap-5 p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                activeStep === idx
                  ? 'bg-white/5 border-cyan-500/25 shadow-lg shadow-cyan-500/5'
                  : 'bg-transparent border-transparent opacity-50 hover:opacity-85'
              }`}
            >
              {/* Step indicator node */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center font-mono font-bold text-sm bg-gradient-to-br ${
                  activeStep === idx
                    ? step.color + ' text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                    : 'from-white/10 to-white/5 text-gray-400'
                }`}
              >
                {step.number}
              </div>

              <div>
                <h4 className="text-sm font-bold text-white transition-colors duration-300">
                  {step.title}
                </h4>
                <p className="text-xs text-gray-500 font-mono mt-0.5">
                  Phase Duration: {step.duration}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Step details container (6 cols) */}
        <div className="lg:col-span-6 relative z-10">
          <div className="bg-black/40 border border-white/5 rounded-2xl p-6 sm:p-8 min-h-[280px] flex flex-col justify-between relative overflow-hidden">
            {/* Soft backdrop glow */}
            <div
              className={`absolute -right-16 -top-16 w-36 h-36 rounded-full blur-3xl opacity-15 bg-gradient-to-br ${steps[activeStep].color}`}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {/* Step icon highlight */}
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center text-white bg-gradient-to-br ${steps[activeStep].color}`}
                >
                  {steps[activeStep].icon}
                </div>

                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-white leading-snug">
                    {steps[activeStep].title}
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {steps[activeStep].desc}
                  </p>
                </div>

                {/* Outputs & Deliverables */}
                <div className="space-y-3 pt-4 border-t border-white/5 font-mono text-xs">
                  <div>
                    <span className="text-gray-500 block uppercase tracking-wider text-[10px]">
                      ⏱️ Duration
                    </span>
                    <span className="text-gray-300 font-bold block mt-0.5">
                      {steps[activeStep].duration}
                    </span>
                  </div>

                  <div>
                    <span className="text-gray-500 block uppercase tracking-wider text-[10px]">
                      🎯 Key Deliverable / Outcome
                    </span>
                    <span className="text-cyan-400 font-bold block mt-0.5">
                      {steps[activeStep].deliverable}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
