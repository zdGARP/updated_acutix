'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HeartPulse,
  Activity,
  Car,
  Package,
  Hospital,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  X,
  ExternalLink
} from 'lucide-react';

interface ProductFeature {
  title: string;
  desc: string;
}

interface ProductItem {
  id: string;
  name: string;
  letter: string;
  letterBg: string;
  tagline: string;
  category: string;
  summary: string;
  status: 'Live' | 'In Development';
  action: string;
  request: string;
  techStack?: string[];
  image: string;
  imageAlt: string;
  imageCaption: string;
  sections: {
    heading: string;
    description: string;
  }[];
  highlights: string[];
}

const products: ProductItem[] = [
  {
    id: 'ferticare',
    name: 'FertiCare',
    letter: 'F',
    letterBg: 'bg-emerald-500',
    tagline: 'Fertility & Women\'s Health',
    category: 'FERTILITY & WOMEN\'S HEALTH',
    summary: 'Specialized fertility and women\'s healthcare workflows for OBGYNs, fertility specialists, IVF centres, and women\'s healthcare clinics.',
    status: 'Live',
    action: 'REQUEST A DEMO',
    request: 'Demo request',
    image: '/Products/ferticare-ascas-dashboard.png',
    imageAlt: 'ASCA fertility clinic dashboard showing billing totals and administrative controls',
    imageCaption: 'ASCA dashboard preview',
    techStack: ['Next.js', 'React', 'Node.js', 'AWS'],
    sections: [
      {
        heading: 'PATIENT MANAGEMENT',
        description: 'Digital registration, Couple-based records, EMR, Medical history, Document storage.'
      },
      {
        heading: 'FERTILITY TRACKING',
        description: 'OI, IUI, and IVF cycle tracking, Treatment history.'
      },
      {
        heading: 'LABORATORIES & BILLING',
        description: 'Investigations / Lab reports, Semen analysis / DFI reports, Packages / Payments.'
      }
    ],
    highlights: ['Couple-based EMR', 'IUI/IVF Tracking', 'Semen & DFI Reports', 'WhatsApp Reminders']
  },
  {
    id: 'gym-pad',
    name: 'GymPad',
    letter: 'G',
    letterBg: 'bg-orange-500',
    tagline: 'Smart Fitness Management',
    category: 'SMART FITNESS MANAGEMENT',
    summary: 'GymPad is tailored to heavy business operations by helping gym owners, trainers, and members coordinate memberships, schedules, attendance, and financial tracking.',
    status: 'In Development',
    action: 'DISCUSS DEVELOPMENT',
    request: 'Development discussion',
    image: '/Products/gympad-fitness-illustration.png',
    imageAlt: 'Fitness website artwork showing gym equipment and a training promotion',
    imageCaption: 'GymPad concept dashboard',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
    sections: [
      {
        heading: 'FOR GYM OWNERS',
        description: 'Membership management, Attendance, Trainer records, Daily operations.'
      },
      {
        heading: 'FOR TRAINERS',
        description: 'Schedules, Member attendance, Diet charts, Progress monitoring.'
      },
      {
        heading: 'FOR MEMBERS',
        description: 'Subscriptions, Slot booking, Attendance, Fitness progress.'
      }
    ],
    highlights: ['Goal-Aligned Subscriptions', 'Integrated Trainer Chat', 'Real-Time Slot Booking', 'Direct Trainer Guidance']
  },
  {
    id: 'motor-consult',
    name: 'MotorConsult',
    letter: 'M',
    letterBg: 'bg-blue-600',
    tagline: 'Motor Insurance Workflows',
    category: 'MOTOR INSURANCE WORKFLOWS',
    summary: 'MotorConsult streamlines insurance professionals to organize client records, policy activities, renewals, claims, commissions, and revenue operations.',
    status: 'In Development',
    action: 'DISCUSS DEVELOPMENT',
    request: 'Development discussion',
    image: '/Products/motorconsult-development-illustration.jpg',
    imageAlt: 'Motor insurance platform workspace preview',
    imageCaption: 'MotorConsult platform overview',
    techStack: ['Next.js', 'Python', 'FastAPI', 'PostgreSQL'],
    sections: [
      {
        heading: 'POLICIES & RENEWALS',
        description: 'Registration, Renewals tracker, Policy history, Customer alerts.'
      },
      {
        heading: 'CLAIMS TRACKING',
        description: 'Claim registration, Document uploads, Status tracking, Settlement records.'
      },
      {
        heading: 'COMMISSION TRACKER',
        description: 'Service charges, Commission, Payment monitoring, Revenue analytics.'
      }
    ],
    highlights: ['Automated Renewal Alerts', 'Claims Management', 'WhatsApp Notifications', 'Revenue & Commission Tracking']
  },
  {
    id: 'box-care',
    name: 'BoxCare',
    letter: 'B',
    letterBg: 'bg-purple-600',
    tagline: 'CRM & E-Commerce for Packaging',
    category: 'CRM & E-COMMERCE FOR PACKAGING',
    summary: 'BoxCare streamlines packaging operations by connecting customer enquiries to quotations, order confirmations, production delivery, and delivery tracking.',
    status: 'In Development',
    action: 'DISCUSS DEVELOPMENT',
    request: 'Development discussion',
    image: '/Products/boxcare-development-illustration.jpg',
    imageAlt: 'Packaging manufacturing management platform',
    imageCaption: 'BoxCare packaging management workflow',
    techStack: ['React', 'Express', 'MongoDB', 'AWS'],
    sections: [
      {
        heading: 'ENQUIRY & QUOTATION',
        description: 'Customer enquiry, Packaging requirements, Customize quotations.'
      },
      {
        heading: 'APPROVAL & ORDERS',
        description: 'Quotation approvals, Customer confirmation, Quotation-to-order workflow.'
      },
      {
        heading: 'PRODUCTION & DELIVERY',
        description: 'Production progress, Order tracking, Delivery updates.'
      }
    ],
    highlights: ['CRM + E-Commerce Portal', 'Quotation Automation', 'Raw Material Inventory', 'WhatsApp Order Updates']
  },
  {
    id: 'clinic-cms',
    name: 'Clinic CMS',
    letter: 'C',
    letterBg: 'bg-teal-500',
    tagline: 'General Clinic Administration',
    category: 'GENERAL CLINIC ADMINISTRATION',
    summary: 'Clinic CMS simplifies general clinic administration through client onboarding, appointment scheduling, staff workflows, document management, and client communication.',
    status: 'Live',
    action: 'DISCUSS YOUR REQUIREMENTS',
    request: 'Requirements discussion',
    image: '/Products/clinic-cms-development-illustration.jpg',
    imageAlt: 'Clinic CMS administration dashboard preview',
    imageCaption: 'Clinic CMS dashboard preview',
    techStack: ['Next.js', 'React', 'Node.js', 'PostgreSQL'],
    sections: [
      {
        heading: 'CLIENT SELF-SERVICE',
        description: 'Availability-based appointments, Shared documents, Request status.'
      },
      {
        heading: 'STAFF/USER PORTAL',
        description: 'Assigned clients, Electronic charts, Report uploads, Status notifications.'
      },
      {
        heading: 'ADMIN COMMAND LAYER',
        description: 'User management, Scheduling configuration, Workforce allocation, Monitoring.'
      }
    ],
    highlights: ['Clinic Onboarding', 'Document Access', 'Automated Notifications', 'Workflow Configuration']
  }
];

export default function ProductSection() {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [filterId, setFilterId] = useState<string>('all');

  const filteredProducts = filterId === 'all'
    ? products
    : products.filter(p => p.id === filterId);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Dark Blue Hero Section (#0A1230) */}
      <section className="relative bg-[#0A1230] pt-32 pb-16 px-6 text-white border-b border-[#152352]">
        <div className="container mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF7A1A] mb-3">
            PRODUCTS
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl leading-tight">
            Software Built Around the Way Your Industry Works
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Purpose-built digital products designed for healthcare, fitness, motor insurance, packaging businesses, and general clinics.
          </p>

          {/* Filter / Jump Pills */}
          <div className="mt-8 flex flex-wrap gap-2.5">
            <button
              onClick={() => setFilterId('all')}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all ${
                filterId === 'all'
                  ? 'bg-[#FF7A1A] text-white'
                  : 'bg-[#101D48] text-slate-300 border border-[#18295E] hover:bg-[#152352] hover:text-white'
              }`}
            >
              All Products
            </button>
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setFilterId(product.id)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all ${
                  filterId === product.id
                    ? 'bg-[#FF7A1A] text-white'
                    : 'bg-[#101D48] text-slate-300 border border-[#18295E] hover:bg-[#152352] hover:text-white'
                }`}
              >
                {product.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section (Light background) */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="container mx-auto max-w-7xl">
          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                id={product.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-300 relative group"
              >
                <div>
                  {/* Product Card Image Banner */}
                  <div
                    onClick={() => setSelectedProduct(product)}
                    className="relative aspect-[16/10] w-full bg-[#0A1230] overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={product.image}
                      alt={product.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div
                      className={`absolute top-3 left-3 w-8 h-8 rounded-lg ${product.letterBg} text-white font-bold flex items-center justify-center text-xs shadow-sm border border-white/20`}
                    >
                      {product.letter}
                    </div>
                    <span
                      className={`absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border backdrop-blur-xs ${
                        product.status === 'Live'
                          ? 'bg-emerald-500/90 text-white border-emerald-400'
                          : 'bg-amber-500/90 text-white border-amber-400'
                      }`}
                    >
                      {product.status}
                    </span>
                  </div>

                  <div className="p-6">
                    {/* Header */}
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#FF7A1A] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mt-0.5">
                      {product.category}
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-slate-600 min-h-[48px]">
                      {product.summary}
                    </p>

                    {/* Visual Preview Button */}
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-[#FF7A1A] hover:underline"
                    >
                      <span>View interface preview</span>
                      <ExternalLink className="h-3 w-3" />
                    </button>

                    <div className="my-4 border-t border-slate-100" />

                    {/* Feature Breakdown Sections */}
                    <div className="space-y-3.5">
                      {product.sections.map((sec, idx) => (
                        <div key={idx}>
                          <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                            {sec.heading}
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {sec.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Highlight Pills */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {product.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700 border border-slate-200/60"
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    {product.techStack && (
                      <div className="mt-4 pt-3 border-t border-slate-100">
                        <p className="text-[11px] text-slate-500 font-medium">
                          <span className="font-bold text-slate-700">Stack:</span>{' '}
                          {product.techStack.join(' | ')}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="px-6 pb-6 pt-0">
                  <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                    <Link
                      href={`/contact?product=${encodeURIComponent(product.name)}&request=${encodeURIComponent(product.request)}`}
                      className="w-full rounded-lg bg-[#FF7A1A] hover:bg-[#EA6608] py-2.5 px-4 text-center text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:shadow"
                    >
                      {product.action}
                    </Link>
                    <Link
                      href={`/contact?product=${encodeURIComponent(product.name)}&request=General%20Enquiry`}
                      className="w-full rounded-lg border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 py-2 px-4 text-center text-xs font-bold uppercase tracking-wider text-slate-700 transition-colors"
                    >
                      ASK ABOUT {product.name.toUpperCase()}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Security, Privacy & Deployment Dark Blue Box (#0A1230) */}
          <div className="mt-12 rounded-xl bg-[#0A1230] border border-[#18295E] p-6 md:p-8 text-slate-300 shadow-md">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#FF7A1A] mb-2">
              SECURITY, PRIVACY &amp; DEPLOYMENT
            </p>
            <p className="text-sm leading-relaxed text-slate-300 max-w-4xl">
              Discuss data handling, access management, backups, integrations, onboarding, and support requirements with our team. Specific arrangements can be customized based on institutional requirements.
            </p>
          </div>

          {/* Not sure which product fits your workflow? */}
          <div className="mt-12 rounded-xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Not sure which product fits your workflow?
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Talk to our solution architects to design or customize a solution tailored to your operational model.
              </p>
            </div>
            <Link
              href="/contact"
              className="whitespace-nowrap rounded-lg bg-[#FF7A1A] hover:bg-[#EA6608] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:scale-[1.02]"
            >
              DISCUSS A PROJECT
            </Link>
          </div>
        </div>
      </section>

      {/* Product Image Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
            >
              <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4 bg-slate-50">
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">{selectedProduct.name} Interface</h3>
                  <p className="text-xs text-slate-500">{selectedProduct.imageCaption}</p>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="rounded-full p-1.5 text-slate-500 hover:bg-slate-200 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="relative aspect-[16/10] w-full bg-[#0A1230]">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.imageAlt}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-6 bg-white flex items-center justify-between">
                <p className="text-xs text-slate-600 max-w-md">{selectedProduct.summary}</p>
                <Link
                  href={`/contact?product=${encodeURIComponent(selectedProduct.name)}`}
                  className="rounded-lg bg-[#FF7A1A] hover:bg-[#EA6608] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white"
                >
                  {selectedProduct.action}
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
