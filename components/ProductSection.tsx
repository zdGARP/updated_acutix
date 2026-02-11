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
        summary: 'A structured digital ecosystem that streamlines gym operations through interconnected portals, enhancing the overall fitness management experience.',
        image: '/fithub.png',
        themeColor: 'blue',
        accentColor: '#3b82f6',
        features: [
            {
                title: 'Trainee Portal',
                desc: 'Manage fitness journey, enroll in goal-aligned subscriptions (Weight Loss, Muscle Gain), book training slots, track attendance, and monitor physical progress.',
                icon: <Users className="w-5 h-5" />
            },
            {
                title: 'Trainer Dashboard',
                desc: 'View assigned trainees and schedules, manage daily attendance, create/update diet charts, and monitor performance metrics through a centralized view.',
                icon: <LayoutDashboard className="w-5 h-5" />
            },
            {
                title: 'Admin Control Center',
                desc: 'Full oversight of gym operations: add/update/remove trainers, manage memberships, monitor overall attendance, and maintain operational consistency.',
                icon: <BadgeCheck className="w-5 h-5" />
            }
        ],
        highlights: ['Goal-Aligned Subscriptions', 'Integrated Trainer Chat', 'Real-time Slot Booking', 'Direct Trainer Guidance']
    },
    {
        id: 'clinic-cms',
        name: 'Clinic CMS',
        icon: <Hospital className="w-10 h-10 text-emerald-500" />,
        tagline: 'Efficiency & Patient Care',
        summary: 'A comprehensive role-based digital platform designed to centralize client onboarding, scheduling, and communication while ensuring data integrity.',
        image: '/01.jpg',
        themeColor: 'emerald',
        accentColor: '#10b981',
        features: [
            {
                title: 'Client Self-Service',
                desc: 'Schedule appointments based on real-time availability, securely access shared documents through verification, and monitor request statuses.',
                icon: <Clock className="w-5 h-5" />
            },
            {
                title: 'Staff/User Portal',
                desc: 'Manage assigned clients, update records, upload reports, and maintain consistent communication with automated status notifications.',
                icon: <FileText className="w-5 h-5" />
            },
            {
                title: 'Admin Command Layer',
                desc: 'Manage users and roles, configure complex workflows, monitor system health, and enforce strict data security and compliance protocols.',
                icon: <ShieldCheck className="w-5 h-5" />
            }
        ],
        highlights: ['Secure Onboarding', 'Verified Doc Access', 'Automated Notifications', 'Workflow Configuration']
    },
    //re
    {
        id: 'ascas-fertility',
        name: 'ASCAS System',
        icon: <HeartPulse className="w-10 h-10 text-rose-500" />,
        tagline: 'Precision Fertility Management',
        summary: 'A specialized fertility center system optimizing patient activities from appointment booking to specialized treatment tracking and integrated billing.',
        image: '/ascas.png',
        themeColor: 'rose',
        accentColor: '#f43f5e',
        techStack: ['React', 'Django', 'SQLite', 'AWS', 'AiSensy'],
        features: [
            {
                title: 'Patient Journey',
                desc: 'Manage fertility journey from a single dashboard. Book/reschedule appointments with WhatsApp reminders and view complete medical history.',
                icon: <MessageSquare className="w-5 h-5" />
            },
            {
                title: 'Clinical Workspace',
                desc: 'Specialized modules for Pregnancy Care, IUI, DFI, IVF. Ready-made templates for documented consultations, procedures, and clinical notes.',
                icon: <Zap className="w-5 h-5" />
            },
            {
                title: 'Administrative Billing',
                desc: 'Oversee in-patient stays, capture every consultation/procedure investigation, and generate error-free invoices to reduce revenue leakage.',
                icon: <BadgeCheck className="w-5 h-5" />
            }
        ],
        highlights: ['WhatsApp Integration', 'IUI/IVF Templates', 'In-Patient Tracking', 'Automated Invoicing']
    }
];

const ProductSection = () => {
    return (
        <div className="bg-gradient-to-br from-white via-gray-50 to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900 py-12 overflow-x-hidden">

            {/* Centered Header (Matches Services Design) */}
            <section className="relative pt-0 pb-4">
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
            <section className="pb-12 container mx-auto px-6">
                <div className="space-y-16">
                    {products.map((product, pIdx) => (
                        <div key={product.id} className="relative group overflow-hidden">
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
                                            className="object-contain group-hover:scale-110 transition-transform duration-1000 ease-out"
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

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default ProductSection;
