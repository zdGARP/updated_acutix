'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    Activity,
    Hospital,
    HeartPulse,
    CheckCircle2,
    ChevronRight,
    ShieldCheck,
    Zap,
    Users,
    LayoutDashboard,
    MessageSquare,
    Clock,
    FileText,
    BadgeCheck
} from 'lucide-react';

const products = [
    {
        id: 'gym-pad',
        name: 'Gym Pad',
        icon: <Activity className="w-10 h-10 text-blue-500" />,
        tagline: 'Operational Clarity & Control',
        summary: 'A revolutionary digital ecosystem streamlining gym operations through role-based clarity and automated workflows.',
        image: '/04.jpg',
        themeColor: 'blue',
        accentColor: '#3b82f6',
        features: [
            {
                title: 'Trainee Ecosystem',
                desc: 'Personalized weight loss, muscle gain plans & slot booking.',
                icon: <Users className="w-5 h-5" />
            },
            {
                title: 'Trainer Command',
                desc: 'Diet charts, metrics tracking & direct chat integration.',
                icon: <LayoutDashboard className="w-5 h-5" />
            },
            {
                title: 'Admin Intelligence',
                desc: 'Full oversight of trainers, memberships & attendance.',
                icon: <BadgeCheck className="w-5 h-5" />
            }
        ],
        highlights: ['Attendance CRM', 'Secure RBAC', 'Slot Management', 'Live Engagement']
    },
    {
        id: 'clinic-cms',
        name: 'Clinic CMS',
        icon: <Hospital className="w-10 h-10 text-emerald-500" />,
        tagline: 'Efficiency & Patient Care',
        summary: 'Consolidating records and automating routine tasks for hospitals to ensure professional excellence and client visibility.',
        image: '/01.jpg',
        themeColor: 'emerald',
        accentColor: '#10b981',
        features: [
            {
                title: 'Self-Service Portal',
                desc: 'Real-time scheduling & secure document verification.',
                icon: <Clock className="w-5 h-5" />
            },
            {
                title: 'Internal Ops Layer',
                desc: 'Record automation & responsive notify systems.',
                icon: <FileText className="w-5 h-5" />
            },
            {
                title: 'Governance Engine',
                desc: 'Configurable workflows & data security compliance.',
                icon: <ShieldCheck className="w-5 h-5" />
            }
        ],
        highlights: ['Onboarding Flow', 'Record Integrity', 'Auto-Notif', 'Workflow Logic']
    },
    {
        id: 'ascas-fertility',
        name: 'ASCAS System',
        icon: <HeartPulse className="w-10 h-10 text-rose-500" />,
        tagline: 'Specialized Fertility Care',
        summary: 'The ultimate patient handling system for clinics, featuring specialized treatment tracking and intelligent billing.',
        image: '/02.jpg',
        themeColor: 'rose',
        accentColor: '#f43f5e',
        techStack: ['React', 'Django', 'AWS', 'AiSensy'],
        features: [
            {
                title: 'Patient Journey',
                desc: 'WhatsApp-powered reminders & detailed medical history.',
                icon: <MessageSquare className="w-5 h-5" />
            },
            {
                title: 'Clinical Modules',
                desc: 'IUI, DFI, IVF templates & structured clinical notes.',
                icon: <Zap className="w-5 h-5" />
            },
            {
                title: 'Revenue Guard',
                desc: 'Integrated billing and error-free in-patient tracking.',
                icon: <BadgeCheck className="w-5 h-5" />
            }
        ],
        highlights: ['WhatsApp Integration', 'Treatment Logic', 'Ready Templates', 'AI-Powered Insights']
    }
];

const ProductSection = () => {
    return (
        <div className="bg-gradient-to-br from-white via-gray-50 to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900 py-12">

            {/* Centered Header (Matches Services Design) */}
            <section className="relative py-12">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h1 className="text-4xl font-extrabold text-[#323b42] dark:text-white mb-2 tracking-tight animate-fadeUp drop-shadow-lg flex items-center justify-center gap-2 uppercase">
                            Our Product Suite
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto animate-fadeIn font-medium">
                            The Acutix Product Suite provides scalable, web-based solutions designed to optimize operational efficiency and standardize digital workflows. Built with secure role-based access and long-term adaptability in mind, each product is developed by Acutix interns under expert guidance.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Products Grid */}
            <section className="pb-32 container mx-auto px-6">
                <div className="space-y-48">
                    {products.map((product, pIdx) => (
                        <div key={product.id} className="relative group">
                            {/* Product Background Accents */}
                            <div className={`absolute -inset-10 bg-${product.themeColor}-500/5 rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />

                            <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start relative z-10">
                                {/* Visual Side */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className={`lg:col-span-6 ${pIdx % 2 === 1 ? 'lg:order-last' : ''}`}
                                >
                                    <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-200/50 dark:border-gray-800/50 group-hover:border-primary/30 transition-colors duration-500">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115]/80 via-transparent to-transparent opacity-60" />

                                        {/* Floating Tech Badges (Specialized for ASCAS) */}
                                        {product.techStack && (
                                            <div className="absolute bottom-8 left-8 flex gap-3">
                                                {product.techStack.map(tech => (
                                                    <div key={tech} className="px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-lg text-[10px] font-black uppercase tracking-widest text-white border border-white/20">
                                                        {tech}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Highlights Grid */}
                                    <div className="mt-8 grid grid-cols-2 gap-4">
                                        {product.highlights.map((h, i) => (
                                            <div key={h} className="flex items-center gap-3 p-4 bg-white dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm transition-all hover:translate-y-[-2px] hover:shadow-md">
                                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                                <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{h}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Content Side */}
                                <div className="lg:col-span-6 space-y-10 pt-4">
                                    <motion.div
                                        initial={{ opacity: 0, x: pIdx % 2 === 0 ? 30 : -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="space-y-6"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
                                                {product.icon}
                                            </div>
                                            <div>
                                                <span className={`text-${product.themeColor}-500 text-xs font-black uppercase tracking-[0.2em] mb-1 block`}>
                                                    {product.tagline}
                                                </span>
                                                <h2 className="text-4xl md:text-5xl font-black text-[#1a1f24] dark:text-white tracking-tight uppercase">
                                                    {product.name}
                                                </h2>
                                            </div>
                                        </div>
                                        <p className="text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                                            {product.summary}
                                        </p>
                                    </motion.div>

                                    {/* Bento Style Bento Grid for Features */}
                                    <div className="grid gap-4">
                                        {product.features.map((feature, i) => (
                                            <motion.div
                                                key={feature.title}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.1 }}
                                                className="group/card flex gap-5 p-6 rounded-[2rem] bg-white dark:bg-[#1a1c22] border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-300 relative overflow-hidden"
                                            >
                                                <div className={`absolute top-0 right-0 w-32 h-32 bg-${product.themeColor}-500/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover/card:bg-${product.themeColor}-500/10 transition-colors`} />
                                                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 group-hover/card:bg-primary/10 group-hover/card:text-primary transition-colors">
                                                    {feature.icon}
                                                </div>
                                                <div className="space-y-1 relative z-10">
                                                    <h4 className="text-lg font-black text-gray-900 dark:text-white uppercase tracking-tight">{feature.title}</h4>
                                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-medium">{feature.desc}</p>
                                                </div>
                                                <div className="ml-auto opacity-0 group-hover/card:opacity-100 transition-opacity self-center">
                                                    <ChevronRight className="w-5 h-5 text-primary" />
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        className="pt-6"
                                    >
                                        <button className="px-8 py-4 bg-[#1a1f24] dark:bg-white text-white dark:text-[#1a1f24] rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl dark:shadow-white/10 flex items-center gap-3">
                                            View Live Case Study
                                            <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-6 pb-40">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#1a1f24] dark:bg-white rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)]"
                >
                    {/* Decorative shapes */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -mr-48 -mt-48" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] -ml-32 -mb-32" />

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black text-white dark:text-[#1a1f24] mb-8 tracking-tighter uppercase italic">
                            Ready to <span className="text-primary italic">Digitalize</span> Your Brand?
                        </h2>
                        <p className="max-w-xl mx-auto text-gray-400 dark:text-gray-600 mb-12 text-lg font-medium">
                            Join the growing list of businesses transforming their operations with Acutix specialized ecosystems.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <a href="/contact" className="px-10 py-5 bg-primary text-white font-black uppercase text-sm tracking-widest rounded-2xl hover:bg-primary/90 transition-all shadow-[0_20px_40px_-10px_rgba(255,217,138,0.3)]">
                                Start a Conversation
                            </a>
                            <a href="/about" className="px-10 py-5 bg-white/10 dark:bg-black/5 text-white dark:text-[#1a1f24] font-black uppercase text-sm tracking-widest rounded-2xl backdrop-blur-md border border-white/10 dark:border-black/10 hover:bg-white/20 dark:hover:bg-black/10 transition-all uppercase">
                                Meet the Experts
                            </a>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default ProductSection;
