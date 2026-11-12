'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendForm } from '../lib/sendForm';
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from 'lucide-react';

interface ContactSectionProps {
  productContext?: string;
}

const enquiryOptions = [
  'Software development project',
  'Product enquiry or demo',
  'Business partnership',
  'College or academic collaboration',
  'Careers or internship',
  'General enquiry',
];

const faqs = [
  {
    question: 'What should I include in a project enquiry?',
    answer:
      'Describe your business or project, the problem you want to solve, the type of solution you need, and any relevant timeline or requirements.',
  },
  {
    question: 'Can I enquire about an existing Acutix product?',
    answer:
      'Yes. Select "Product enquiry or demo" in the form and mention the product (FertiCare, GymPad, MotorConsult, BoxCare, Clinic CMS) you are interested in.',
  },
  {
    question: 'Can a college or organization discuss a collaboration?',
    answer:
      'Yes. Select the academic collaboration option and describe your proposed initiative, co-lab goals, or student training batch.',
  },
  {
    question: 'Where can I enquire about jobs or internships?',
    answer:
      'Visit the Careers page for current opportunities or select the "Careers or internship" enquiry option in the form below.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'We Receive Your Enquiry',
    description: "Delivered directly through the website's configured contact system.",
  },
  {
    step: '02',
    title: 'Your Enquiry is Reviewed',
    description: 'We identify the relevant product, service, or collaboration area.',
  },
  {
    step: '03',
    title: 'We Follow Up',
    description: 'A team member responds promptly with next steps and relevant information.',
  },
];

export default function ContactSection({ productContext = '' }: ContactSectionProps) {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    enquiryType: productContext ? 'Product enquiry or demo' : 'Software development project',
    message: productContext ? `I would like to discuss ${productContext}.` : '',
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    toast.info('Submitting your enquiry...', { autoClose: false, toastId: 'submittingContact' });

    const names = form.fullName.trim().split(' ');
    const firstName = names[0] || '';
    const lastName = names.slice(1).join(' ') || '';

    const result = await sendForm({
      firstName,
      lastName,
      email: form.email,
      phone: form.phone,
      service: form.enquiryType,
      message: form.message,
      type: 'General Enquiry',
      to: process.env.EMAIL_RECEIVER,
    });

    toast.dismiss('submittingContact');
    setSubmitting(false);

    if (result.success) {
      toast.success('Thank you! Your enquiry has been received. Our team will contact you shortly.');
      setForm({
        fullName: '',
        email: '',
        phone: '',
        enquiryType: 'Software development project',
        message: '',
      });
    } else {
      toast.error(result.error || 'Failed to submit enquiry. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <ToastContainer position="bottom-right" theme="dark" />

      {/* 1. Dark Blue Hero Section (#0A1230) */}
      <section className="relative bg-[#0A1230] pt-32 pb-20 px-6 text-white border-b border-[#152352]">
        <div className="container mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF7A1A] mb-3">
            GET IN TOUCH
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl leading-tight">
            Let&apos;s Talk About Your Next Project
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Have software requirements, product questions, or collaboration ideas? Share a little about what you need, and our team can direct your enquiry to the appropriate contact.
          </p>

          <div className="mt-8">
            <a
              href="#enquiry-form"
              className="inline-flex items-center gap-2 rounded-lg bg-[#FF7A1A] hover:bg-[#EA6608] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:scale-[1.02]"
            >
              <span>SEND AN ENQUIRY</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. Get in touch (Light Background) */}
      <section className="py-14 px-6 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto max-w-6xl text-left">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
            <div>
              <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-[#FF7A1A]">
                GET IN TOUCH
              </p>
              <h2 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Let&apos;s talk about what you need.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Have a project, product question, or collaboration in mind? Reach us directly and we&apos;ll connect you with the right team.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 border-t border-slate-200 sm:grid-cols-3">
            <div className="flex items-start gap-4 border-b border-slate-200 py-6 sm:pr-6 sm:py-8 sm:border-b-0">
              <Mail className="mt-0.5 h-6 w-6 flex-shrink-0 text-[#FF7A1A]" aria-hidden="true" />
              <div>
                <h3 className="mb-1 text-base font-bold text-slate-900">Email</h3>
                <a href="mailto:contact@acutixsoft.com" className="text-sm text-slate-600 transition-colors hover:text-[#FF7A1A]">
                  contact@acutixsoft.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 border-b border-slate-200 py-6 sm:border-b-0 sm:border-l sm:px-6 sm:py-8">
              <Phone className="mt-0.5 h-6 w-6 flex-shrink-0 text-[#FF7A1A]" aria-hidden="true" />
              <div>
                <h3 className="mb-1 text-base font-bold text-slate-900">Phone</h3>
                <a href="tel:+916369936706" className="text-sm text-slate-600 transition-colors hover:text-[#FF7A1A]">
                  +91 6369936706
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 py-6 sm:border-l sm:px-6 sm:py-8">
              <MapPin className="mt-0.5 h-6 w-6 flex-shrink-0 text-[#FF7A1A]" aria-hidden="true" />
              <div>
                <h3 className="mb-1 text-base font-bold text-slate-900">Office</h3>
                <p className="text-sm leading-relaxed text-slate-600">Chennai, Tamil Nadu, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Send Us an Enquiry Form (Dark Blue Background #0A1230) */}
      <section id="enquiry-form" className="bg-[#0A1230] py-16 px-6 text-white border-y border-[#152352]">
        <div className="container mx-auto max-w-5xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-[#FF7A1A]">
                ENQUIRY FORM
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Send Us an Enquiry
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-300">
                Describe your requirements, project scope, or questions.
            </p>

            <div className="mt-8 grid grid-cols-1 border-y border-white/15 text-left sm:grid-cols-3 sm:divide-x sm:divide-white/15">
                <p className="py-4 text-sm leading-relaxed text-slate-200 sm:py-5 sm:pr-6">
                  Prompt response within 24 business hours.
                </p>
                <p className="border-t border-white/15 py-4 text-sm leading-relaxed text-slate-200 sm:border-t-0 sm:px-6 sm:py-5">
                  Direct architecture and scoping consultation.
                </p>
                <p className="border-t border-white/15 py-4 text-sm leading-relaxed text-slate-200 sm:border-t-0 sm:py-5 sm:pl-6">
                  Confidential, NDA-supported conversations.
                </p>
            </div>

            <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-[#18295E] bg-[#101D48] p-6 text-left shadow-xl sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full rounded-lg border border-[#18295E] bg-white px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#FF7A1A] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full rounded-lg border border-[#18295E] bg-white px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#FF7A1A] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-lg border border-[#18295E] bg-white px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#FF7A1A] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Enquiry Type
                  </label>
                  <select
                    name="enquiryType"
                    value={form.enquiryType}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-[#18295E] bg-white px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#FF7A1A] focus:outline-none"
                  >
                    {enquiryOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your project, question, or timeline..."
                    className="w-full rounded-lg border border-[#18295E] bg-white px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#FF7A1A] focus:outline-none"
                  />
                </div>
                <p className="text-[11px] text-slate-400">
                  Please do not include passwords, payment details, or other sensitive information.
                </p>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-lg bg-[#FF7A1A] hover:bg-[#EA6608] py-3 px-4 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:shadow disabled:opacity-50"
                >
                  {submitting ? 'SENDING...' : 'SEND ENQUIRY'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Three simple steps (Light Background) */}
      <section className="py-14 px-6 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto max-w-6xl text-left">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
            <div>
              <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-[#FF7A1A]">
                WHAT HAPPENS NEXT
              </p>
              <h2 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                A clear path from enquiry to next steps.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              We review your message, connect it with the right team, and follow up with relevant information.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 border-t border-slate-200 sm:grid-cols-3">
            {processSteps.map((p, index) => (
              <div
                key={p.step}
                className={`py-6 sm:py-8 ${index > 0 ? 'border-t border-slate-200 sm:border-l sm:border-t-0 sm:px-6' : 'sm:pr-6'} ${index === 2 ? 'sm:pl-6' : ''}`}
              >
                <span className="mb-3 block text-sm font-bold tracking-wider text-[#FF7A1A]">
                  STEP {p.step}
                </span>
                <h3 className="mb-2 text-base font-bold text-slate-900">{p.title}</h3>
                <p className="max-w-sm text-sm leading-relaxed text-slate-600">{p.description}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Frequently Asked Questions (Dark Blue Background #0A1230) */}
      <section className="bg-[#0A1230] py-16 px-6 text-white border-y border-[#152352]">
        <div className="container mx-auto max-w-6xl text-left">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#FF7A1A] mb-1">
            FAQ
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-8">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="rounded-xl border border-[#18295E] bg-[#101D48] p-6 hover:border-[#1E2E62] transition-colors"
              >
                <h3 className="text-sm font-bold text-white mb-2">{f.question}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. We're Ready to Hear From You (Light Background) */}
      <section className="py-14 px-6 bg-white border-b border-slate-200">
        <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              We&apos;re Ready to Hear From You
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Choose the appropriate enquiry type and share your requirements.
            </p>
          </div>
          <a
            href="#enquiry-form"
            className="whitespace-nowrap rounded-lg bg-[#FF7A1A] hover:bg-[#EA6608] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:scale-[1.02]"
          >
            SEND AN ENQUIRY
          </a>
        </div>
      </section>

    </div>
  );
}
