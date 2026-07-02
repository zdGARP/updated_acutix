'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Code, HeartPulse, Cpu, Globe, Smartphone, Cloud, Layout, Shield, BarChart, Server, X, Settings, LayoutDashboard } from 'lucide-react';
import Image from 'next/image';

const categories = ['All', 'Development', 'Healthcare', 'Cloud', 'AI', 'Security', 'Analytics', 'UI/UX'];

const servicesData = [
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    category: 'Development',
    size: 'large',
    icon: Code,
    image: '/images/services/custom_software.png',
    description: 'Develop secure, scalable, and user-friendly software tailored to your business requirements. We build web applications, desktop applications, and enterprise solutions that streamline operations and improve productivity.',
    features: ['Custom Web Applications', 'Desktop Software', 'Enterprise Solutions', 'API Development', 'Third-Party Integrations'],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Next.js'],
    benefits: 'Increase efficiency and reduce operational costs.',
    workflow: 'Requirement Analysis ➔ Architecture Design ➔ Agile Development ➔ QA ➔ Deployment',
    timeline: '3-6 months'
  },
  {
    id: 'healthcare',
    title: 'Healthcare Management Solutions',
    category: 'Healthcare',
    size: 'large',
    icon: HeartPulse,
    image: '/images/services/healthcare.png',
    description: 'We provide comprehensive healthcare software solutions for hospitals, fertility centers, clinics, and diagnostic laboratories with complete patient lifecycle management.',
    features: ['Hospital Management System (HMS)', 'IVF & Fertility Management', 'Laboratory Information System (LIS)', 'Electronic Medical Records (EMR)', 'Appointment & Billing Management'],
    tech: ['Next.js', 'Python', 'AWS Healthcare', 'HL7'],
    benefits: 'Streamline patient care and clinic operations.',
    workflow: 'Compliance Check ➔ UI/UX ➔ Secure Development ➔ HIPAA Audit ➔ Launch',
    timeline: '4-8 months'
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation Solutions',
    category: 'AI',
    size: 'large',
    icon: Cpu,
    image: '/images/services/ai_automation.png',
    description: 'Improve efficiency using Artificial Intelligence and workflow automation tailored to your business.',
    features: ['AI Chatbots', 'Document Automation', 'OCR Processing', 'Predictive Analytics', 'Workflow Automation'],
    tech: ['Python', 'TensorFlow', 'OpenAI API', 'LangChain'],
    benefits: 'Automate repetitive tasks and gain actionable insights.',
    workflow: 'Data Collection ➔ Model Training ➔ Integration ➔ Monitoring',
    timeline: '2-5 months'
  },
  {
    id: 'website',
    title: 'Website Development',
    category: 'Development',
    size: 'medium',
    icon: Globe,
    image: '/images/services/website_development.png',
    description: 'Build modern, responsive, and SEO-friendly websites designed to enhance your online presence and deliver exceptional user experiences.',
    features: ['Corporate Websites', 'Landing Pages', 'Responsive Design', 'CMS Integration', 'Performance Optimization'],
    tech: ['Next.js', 'Tailwind', 'Vercel'],
    benefits: 'Enhance your brand visibility online.',
    workflow: 'Design ➔ Frontend ➔ CMS Setup ➔ Launch',
    timeline: '4-8 weeks'
  },
  {
    id: 'mobile',
    title: 'Mobile Application Development',
    category: 'Development',
    size: 'medium',
    icon: Smartphone,
    image: '/images/services/mobile_development.png',
    description: 'Create high-performance Android and iOS applications that help businesses stay connected with customers anytime, anywhere.',
    features: ['Android Apps', 'iOS Apps', 'Cross-platform Apps', 'API Integration', 'App Maintenance'],
    tech: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    benefits: 'Engage customers directly on their phones.',
    workflow: 'Prototyping ➔ App Development ➔ App Store Approval',
    timeline: '2-4 months'
  },
  {
    id: 'cloud',
    title: 'Cloud Solutions',
    category: 'Cloud',
    size: 'medium',
    icon: Cloud,
    image: '/images/services/cloud_solutions.png',
    description: 'Secure cloud infrastructure for hosting, storage, backup, and application deployment with high availability and scalability.',
    features: ['Cloud Migration', 'Server Management', 'Backup & Recovery', 'Cloud Security', 'DevOps Deployment'],
    tech: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
    benefits: 'Reduce IT overhead with robust cloud architecture.',
    workflow: 'Assessment ➔ Migration Strategy ➔ Execution ➔ Optimization',
    timeline: '1-3 months'
  },
  {
    id: 'saas',
    title: 'SaaS Product Development',
    category: 'Development',
    size: 'medium',
    icon: LayoutDashboard,
    image: '/images/services/saas_product.png',
    description: 'Transform your business idea into a scalable Software-as-a-Service platform with subscription management and cloud deployment.',
    features: ['Multi-Tenant Architecture', 'Subscription Plans', 'Role-Based Access', 'Secure Authentication', 'Analytics Dashboard'],
    tech: ['Next.js', 'Stripe', 'Supabase', 'Prisma'],
    benefits: 'Create recurring revenue streams with scalable software.',
    workflow: 'MVP Design ➔ Core Development ➔ Billing Integration ➔ Launch',
    timeline: '3-7 months'
  },
  {
    id: 'api',
    title: 'API Integration Services',
    category: 'Development',
    size: 'small',
    icon: Server,
    image: '/images/services/api_integration.png',
    description: 'Connect your applications with third-party services for seamless data exchange and automation.',
    features: ['Payment Gateway', 'SMS Gateway', 'Email Services', 'WhatsApp Integration', 'Government APIs'],
    tech: ['Node.js', 'Express', 'GraphQL', 'REST'],
    benefits: 'Connect your business tools.',
    workflow: 'API Doc Review ➔ Development ➔ Testing',
    timeline: '1-3 weeks'
  },
  {
    id: 'analytics',
    title: 'Data Analytics & Reporting',
    category: 'Analytics',
    size: 'small',
    icon: BarChart,
    image: '/images/services/data_analytics.png',
    description: 'Convert business data into meaningful insights using powerful dashboards and interactive reports.',
    features: ['Real-time Dashboard', 'Business Reports', 'KPI Monitoring', 'Export to PDF & Excel', 'Custom Reports'],
    tech: ['PowerBI', 'Tableau', 'Metabase'],
    benefits: 'Make data-driven decisions.',
    workflow: 'Data Integration ➔ Dashboard Design ➔ Deployment',
    timeline: '1-2 months'
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    category: 'UI/UX',
    size: 'small',
    icon: Layout,
    image: '/images/services/uiux_design.png',
    description: 'Design intuitive and engaging user interfaces that improve customer satisfaction and increase productivity.',
    features: ['Wireframing', 'Prototyping', 'User Research', 'Dashboard Design', 'Mobile UI Design'],
    tech: ['Figma', 'Framer', 'Adobe XD'],
    benefits: 'Boost user engagement.',
    workflow: 'Research ➔ Wireframe ➔ Visual Design ➔ Handoff',
    timeline: '2-6 weeks'
  },
  {
    id: 'security',
    title: 'Cyber Security Solutions',
    category: 'Security',
    size: 'small',
    icon: Shield,
    image: '/images/services/cyber_security.png',
    description: 'Protect your applications and business data with advanced security measures and compliance standards.',
    features: ['Data Encryption', 'User Authentication', 'Access Control', 'Vulnerability Assessment', 'Security Audits'],
    tech: ['OWASP', 'Kali Linux', 'Burp Suite'],
    benefits: 'Protect your valuable data.',
    workflow: 'Audit ➔ Vulnerability Patching ➔ Reporting',
    timeline: '2-4 weeks'
  },
  {
    id: 'maintenance',
    title: 'Software Maintenance & Support',
    category: 'Development',
    size: 'small',
    icon: Settings,
    image: '/images/services/software_maintenance.png',
    description: 'Keep your software updated, secure, and running smoothly with continuous monitoring and technical support.',
    features: ['Bug Fixes', 'Performance Optimization', 'Security Updates', 'Version Upgrades', 'Technical Support'],
    tech: ['Datadog', 'Sentry', 'New Relic'],
    benefits: 'Ensure maximum uptime and reliability.',
    workflow: 'Monitoring ➔ Incident Response ➔ Patch Deployment ➔ Reporting',
    timeline: 'Ongoing'
  }
];

export default function ServicesBentoGrid() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const filteredServices = servicesData.filter(
    (s) => activeFilter === 'All' || s.category === activeFilter
  );

  return (
    <section className="py-24 bg-gray-950 relative" id="services-bento">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Services</h2>
          
          {/* Filter Chips */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === cat 
                    ? 'bg-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.5)]' 
                    : 'bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[280px]">
          <AnimatePresence>
            {filteredServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, type: "spring" }}
                  key={service.id}
                  id={`service-${service.id}`}
                  onClick={() => setExpandedCard(service.id)}
                  className={`group relative rounded-3xl p-8 bg-gray-900/50 backdrop-blur-md border border-white/5 cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:-translate-y-2 hover:border-cyan-500/30 ${
                    service.size === 'large' ? 'md:col-span-2 lg:col-span-2 row-span-2' :
                    service.size === 'medium' ? 'md:col-span-2 lg:col-span-2 row-span-1' :
                    'col-span-1 row-span-1'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  
                  {service.image && (
                    <div className="absolute inset-0 z-0 opacity-50 group-hover:opacity-80 transition-opacity duration-500">
                      <Image 
                        src={service.image} 
                        alt={service.title} 
                        fill 
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gray-950/50"></div>
                    </div>
                  )}
                  
                  <div className="relative z-20 flex flex-col h-full">
                    <div className="mb-auto">
                      <div className="w-14 h-14 rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                        <Icon className="w-7 h-7 text-cyan-400" />
                      </div>
                      <h3 className={`font-bold text-white mb-2 ${service.size === 'large' ? 'text-3xl' : 'text-xl'}`}>
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                        {service.description}
                      </p>
                    </div>

                    {service.size !== 'small' && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {service.features.map(f => (
                          <span key={f} className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700">
                            {f}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <div className="mt-6 flex items-center text-cyan-400 text-sm font-semibold group-hover:text-cyan-300">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* Modal / Expanded State */}
        <AnimatePresence>
          {expandedCard && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setExpandedCard(null)}
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gray-900 border border-gray-800 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
              >
                {servicesData.filter(s => s.id === expandedCard).map(s => (
                  <div key={s.id} className="p-8 md:p-12">
                    <button 
                      onClick={() => setExpandedCard(null)}
                      className="absolute top-6 right-6 p-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                    
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center">
                        <s.icon className="w-8 h-8 text-cyan-400" />
                      </div>
                      <div>
                        <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">{s.category}</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-1">{s.title}</h2>
                      </div>
                    </div>

                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">{s.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
                        <h4 className="text-white font-semibold mb-4">Technology Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {s.tech.map(t => (
                            <span key={t} className="px-3 py-1 bg-gray-950 text-gray-300 text-sm rounded-lg border border-gray-800">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
                        <h4 className="text-white font-semibold mb-4">Business Benefits</h4>
                        <p className="text-gray-300 text-sm">{s.benefits}</p>
                      </div>
                    </div>

                    <div className="mb-10">
                      <h4 className="text-white font-semibold mb-4">Development Workflow</h4>
                      <div className="p-4 bg-gray-950 rounded-xl border border-gray-800">
                        <p className="text-cyan-400 text-sm font-mono">{s.workflow}</p>
                      </div>
                      <p className="text-gray-400 text-sm mt-3">Estimated Timeline: <span className="text-white">{s.timeline}</span></p>
                    </div>

                    <div className="flex justify-end">
                      <button className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-semibold shadow-lg transition-colors">
                        Get Quote
                      </button>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
