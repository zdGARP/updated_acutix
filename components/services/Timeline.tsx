'use client';
import { motion } from 'framer-motion';
import { Search, PenTool, LayoutTemplate, Code2, TestTube, Rocket, Settings } from 'lucide-react';
import { useState } from 'react';

const steps = [
  { id: 1, title: 'Requirement Analysis', icon: Search, desc: 'We gather all project requirements, scope, and objectives to form a solid foundation.' },
  { id: 2, title: 'Planning', icon: PenTool, desc: 'Creating a strategic roadmap, architecture design, and timeline.' },
  { id: 3, title: 'UI/UX Design', icon: LayoutTemplate, desc: 'Crafting user-centric wireframes and beautiful high-fidelity prototypes.' },
  { id: 4, title: 'Development', icon: Code2, desc: 'Agile coding process with regular sprints and client updates.' },
  { id: 5, title: 'Testing', icon: TestTube, desc: 'Rigorous QA testing, automated checks, and performance optimization.' },
  { id: 6, title: 'Deployment', icon: Rocket, desc: 'Seamless launch to production environments and app stores.' },
  { id: 7, title: 'Maintenance', icon: Settings, desc: 'Continuous monitoring, updates, and post-launch support.' }
];

export default function Timeline() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Development Process</h2>
          <p className="text-gray-400">A transparent and agile workflow ensuring project success.</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-800 -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  i % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Connector dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-gray-900 border-4 border-gray-800 -translate-x-1/2 flex items-center justify-center z-10 transition-colors duration-300">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                </div>

                {/* Content Box */}
                <div 
                  className={`w-full md:w-1/2 pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}
                >
                  <div 
                    onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                    className="p-6 bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-2xl cursor-pointer hover:border-cyan-500/30 hover:bg-gray-800/50 transition-all duration-300 group shadow-lg"
                  >
                    <div className={`flex items-center gap-4 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <div className="p-3 bg-gray-800 rounded-xl group-hover:bg-cyan-500/20 transition-colors">
                        <step.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">{step.title}</h4>
                    </div>
                    
                    <motion.div 
                      initial={false}
                      animate={{ height: activeStep === step.id ? 'auto' : 0, opacity: activeStep === step.id ? 1 : 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-400 mt-4 leading-relaxed">{step.desc}</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
