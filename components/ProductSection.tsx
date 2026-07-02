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
    Users,
    LayoutDashboard,
    Clock,
    FileText,
    BadgeCheck,
    Car,
    Package
} from 'lucide-react';

const products = [
    {
        id: 'ferticare',
        name: 'FertiCare',
        icon: <HeartPulse className="w-10 h-10 text-rose-500" />,
        tagline: 'Fertility & Women\'s Health',
        summary: 'FertiCare is a comprehensive clinic management platform designed for Obstetricians & Gynecologists (OBG), Fertility Specialists, IVF Centres, and Women\'s Healthcare Clinics.',
        image: '/ascas.png',
        themeColor: 'rose',
        accentColor: '#f43f5e',
        techStack: ['Next.js', 'React', 'Node.js', 'AWS'],
        features: [
            {
                title: 'Patient Management',
                desc: 'Digital patient registration, couple-based records, Electronic Medical Records (EMR), medical history tracking, and document storage.',
                icon: <Users className="w-5 h-5" />
            },
            {
                title: 'Fertility Tracking',
                desc: 'Monitor Ovulation Induction (OI), Intrauterine Insemination (IUI), and In Vitro Fertilization (IVF) cycles with treatment history.',
                icon: <Activity className="w-5 h-5" />
            },
            {
                title: 'Lab & Billing',
                desc: 'Investigation tracking, lab report management, semen analysis, DFI reports, package tracking, and payment collection.',
                icon: <FileText className="w-5 h-5" />
            }
        ],
        highlights: ['Couple-Based EMR', 'IUI/IVF Tracking', 'Semen & DFI Reports', 'WhatsApp Reminders']
    },
    {
        id: 'gym-pad',
        name: 'GymPad',
        icon: <Activity className="w-10 h-10 text-blue-500" />,
        tagline: 'Smart Fitness Management',
        summary: 'GymPad is a comprehensive gym management platform designed to centralize gym operations, automate subscriptions, coordinate trainers, and deliver a better member experience.',
        image: '/fithub.png',
        themeColor: 'blue',
        accentColor: '#3b82f6',
        features: [
            {
                title: 'Trainee Portal',
                desc: 'Manage fitness journey, enroll in goal-aligned subscriptions, book training slots, track attendance, and monitor physical progress.',
                icon: <Users className="w-5 h-5" />
            },
            {
                title: 'Trainer Dashboard',
                desc: 'View assigned trainees and schedules, manage daily attendance, create/update diet charts, and monitor performance metrics.',
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
        id: 'motor-consult',
        name: 'MotorConsult',
        icon: <Car className="w-10 h-10 text-amber-500" />,
        tagline: 'Insurance & Vehicle Consulting',
        summary: 'MotorConsult is a comprehensive business management platform designed for motor insurance consultants, vehicle brokers, RTO agents, and automotive service professionals.',
        image: '/02.jpg',
        themeColor: 'amber',
        accentColor: '#f59e0b',
        features: [
            {
                title: 'Policy Management',
                desc: 'Track new policy registration, manage renewals, multiple providers, and policy history with automated alerts.',
                icon: <FileText className="w-5 h-5" />
            },
            {
                title: 'Claims Tracking',
                desc: 'Digital claim registration, documentation uploads, real-time status tracking, and claim settlement records.',
                icon: <Clock className="w-5 h-5" />
            },
            {
                title: 'Commission Tracker',
                desc: 'Monitor service charges, commission tracking, payment management, and comprehensive revenue analytics.',
                icon: <LayoutDashboard className="w-5 h-5" />
            }
        ],
        highlights: ['Automated Renewal Alerts', 'Claims Management', 'WhatsApp Notifications', 'Revenue & Commission']
    },
    {
        id: 'box-care',
        name: 'BoxCare',
        icon: <Package className="w-10 h-10 text-purple-500" />,
        tagline: 'CRM & E-Commerce for Packaging',
        summary: 'BoxCare is a specialized CRM and e-commerce platform designed for corrugated box manufacturers, carton box manufacturers, and custom box suppliers.',
        image: '/03.jpg',
        themeColor: 'purple',
        accentColor: '#a855f7',
        features: [
            {
                title: 'Quotation Engine',
                desc: 'Generate professional custom box quotations, support product-based pricing, and run quick approval workflows.',
                icon: <FileText className="w-5 h-5" />
            },
            {
                title: 'E-Commerce Portal',
                desc: 'Self-service portal with product catalogs, custom order requests, online enquiry submissions, and tracking.',
                icon: <LayoutDashboard className="w-5 h-5" />
            },
            {
                title: 'CRM & Order Pipeline',
                desc: 'Sales lead management, quotation-to-order conversion, production team access, and delivery status tracking.',
                icon: <Users className="w-5 h-5" />
            }
        ],
        highlights: ['CRM + E-Commerce Portal', 'Quotation Automation', 'Inventory Raw Materials', 'WhatsApp Order Updates']
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
    }
];

const ProductSection = () => {
    return (
        <div className="bg-gray-950 min-h-screen text-gray-100 selection:bg-cyan-500/30 selection:text-cyan-200 pt-32 pb-12 overflow-x-hidden relative">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5 pointer-events-none" style={{ backgroundSize: '30px 30px', backgroundImage: 'linear-gradient(to right, #ffffff10 1px, transparent 1px), linear-gradient(to bottom, #ffffff10 1px, transparent 1px)' }}></div>
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-pulse pointer-events-none"></div>
            <div className="absolute top-1/3 -right-32 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>

            {/* Centered Header (Matches Services Design) */}
            <section className="relative pt-0 pb-4">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h1 className="text-4xl font-extrabold text-white mb-2 tracking-tight animate-fadeUp drop-shadow-lg flex items-center justify-center gap-2 uppercase">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Product Suite</span>
                        </h1>
                        <p className="text-lg text-gray-400 max-w-4xl mx-auto animate-fadeIn font-medium">
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
                            <div className={`absolute -inset-10 bg-${product.themeColor}-500/10 rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />

                            <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start relative z-10">
                                {/* Visual Side */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className={`lg:col-span-6 ${pIdx % 2 === 1 ? 'lg:order-last' : ''}`}
                                >
                                    <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5 bg-gray-900/40 backdrop-blur-md hover:border-cyan-500/30 transition-all duration-300">
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
                                                    <div key={tech} className="px-3 py-1.5 bg-gray-900/80 backdrop-blur-md rounded-lg text-[10px] font-black uppercase tracking-widest text-white border border-white/10">
                                                        {tech}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Highlights Grid */}
                                    <div className="mt-8 grid grid-cols-2 gap-4">
                                        {product.highlights.map((h) => (
                                            <div key={h} className="flex items-center gap-3 p-4 bg-gray-900/40 backdrop-blur-md rounded-2xl border border-white/5 shadow-sm transition-all hover:translate-y-[-2px] hover:border-cyan-500/30 hover:bg-gray-800/50 duration-300">
                                                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                                                <span className="text-sm font-bold text-gray-300">{h}</span>
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
                                            <div className="p-3 bg-gray-900/80 border border-white/10 backdrop-blur-md rounded-2xl shadow-xl">
                                                {product.icon}
                                            </div>
                                            <div>
                                                <span className={`text-${product.themeColor}-400 text-xs font-black uppercase tracking-[0.2em] mb-1 block`}>
                                                    {product.tagline}
                                                </span>
                                                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
                                                    {product.name}
                                                </h2>
                                            </div>
                                        </div>
                                        <p className="text-xl text-gray-400 font-medium leading-relaxed">
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
                                                className="group/card flex gap-5 p-6 rounded-[2rem] bg-gray-900/40 backdrop-blur-md border border-white/5 shadow-sm hover:shadow-2xl hover:border-cyan-500/30 hover:bg-gray-800/50 transition-all duration-300 relative overflow-hidden text-white"
                                            >
                                                <div className={`absolute top-0 right-0 w-32 h-32 bg-${product.themeColor}-500/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover/card:bg-${product.themeColor}-500/20 transition-colors`} />
                                                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl bg-gray-800 text-gray-400 group-hover/card:bg-cyan-500/10 group-hover/card:text-cyan-400 transition-colors border border-gray-700">
                                                    {feature.icon}
                                                </div>
                                                <div className="space-y-1 relative z-10">
                                                    <h4 className="text-lg font-black text-white uppercase tracking-tight group-hover/card:text-cyan-300 transition-colors">{feature.title}</h4>
                                                    <p className="text-gray-400 text-sm leading-relaxed font-medium">{feature.desc}</p>
                                                </div>
                                                <div className="ml-auto opacity-0 group-hover/card:opacity-100 transition-opacity self-center">
                                                    <ChevronRight className="w-5 h-5 text-cyan-400" />
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
