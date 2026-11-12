'use client';
import Link from 'next/link';
import {
  Search,
  PenTool,
  LayoutTemplate,
  Code2,
  TestTube,
  Rocket,
  Settings,
  ArrowRight
} from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Requirement Analysis',
    icon: Search,
    desc: 'We gather all project requirements, scope, and objectives to form a solid foundation.'
  },
  {
    step: '02',
    title: 'Sprint Planning',
    icon: PenTool,
    desc: 'Creating a strategic roadmap, architecture design, and timeline.'
  },
  {
    step: '03',
    title: 'UI/UX Design',
    icon: LayoutTemplate,
    desc: 'Crafting user-centric wireframes and beautiful high-fidelity prototypes.'
  },
  {
    step: '04',
    title: 'Agile Development',
    icon: Code2,
    desc: 'Agile coding process with regular sprints and client updates.'
  },
  {
    step: '05',
    title: 'QA & Testing',
    icon: TestTube,
    desc: 'Rigorous QA testing, automated checks, and performance optimization.'
  },
  {
    step: '06',
    title: 'Deployment',
    icon: Rocket,
    desc: 'Seamless launch to production environments and app stores.'
  },
  {
    step: '07',
    title: 'Maintenance',
    icon: Settings,
    desc: 'Continuous monitoring, updates, and post-launch support.'
  }
];

export default function Timeline() {
  return (
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
              A transparent and agile workflow ensuring project success. From discovery and sprint planning to continuous testing, deployment, and post-launch maintenance.
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
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className={`flex flex-col items-start lg:px-4 text-left ${idx === 0 ? 'lg:pl-0' : ''} ${idx === steps.length - 1 ? 'lg:pr-0' : ''}`}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <Icon className="h-6 w-6 text-[#FF7A1A] flex-shrink-0" />
                  <span className="text-xs font-mono font-bold text-[#FF7A1A]">{step.step}</span>
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
  );
}
