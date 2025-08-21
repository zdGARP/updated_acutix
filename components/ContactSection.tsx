'use client';

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendForm } from '../lib/sendForm';
import { FaCalendarAlt } from 'react-icons/fa';

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  helpType: '',
  additionalInfo: ''
};

const purposes = [
  { value: 'web', label: 'Website Development' },
  { value: 'software', label: 'Software Solutions' },
  { value: 'tech_meetup', label: 'Request a Tech Meetup' },
  { value: 'industrial_visit', label: 'Industrial Visit (for Students)' },
  { value: 'internship', label: 'Internship Opportunity' }
];

const ContactSection = () => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    toast.info('Submitting...', { autoClose: false, toastId: 'submitting' });
    const result = await sendForm({ ...form, to: process.env.EMAIL_RECEIVER });
    toast.dismiss('submitting');
    setSubmitting(false);
    if (result.success) {
      setForm(initialForm);
      toast.success('Thank you! Your message has been sent.');
    } else {
      toast.error(result.error || 'Failed to send. Please try again.');
    }
  };

  return (
    <section className="relative py-2">
      <div
        className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary-100 via-white to-primary-200 dark:from-primary-950 dark:via-gray-900 dark:to-primary-900 z-0"
        style={{ filter: 'blur(8px)', opacity: 0.5 }}></div>
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-[#323b42] dark:text-[#323b42] mb-2 tracking-tight animate-fadeUp drop-shadow-lg flex items-center justify-center gap-2">
            Contact Acutix
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto animate-fadeIn">
            Have a project idea, a partnership proposal, or just a few questions? We&apos;d love to hear from you!
            Whether you&apos;re a business seeking digital solutions or an individual looking for opportunities, our
            team is here to help. Fill out the form below, and we&apos;ll get back to you promptly.
          </p>
        </div>
        <div className="bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-2xl p-8 border border-red-200 dark:border-red-900 backdrop-blur-md">
          <h2 className="text-2xl font-bold text-red-700 dark:text-red-400 mb-6 flex items-center gap-2">
            <FaCalendarAlt className="text-red-400" /> Schedule a Call
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                First Name
                <input
                  required
                  type="text"
                  name="firstName"
                  className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-red-400 focus:outline-none transition"
                  value={form.firstName}
                  onChange={handleChange}
                />
              </label>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Last Name
                <input
                  required
                  type="text"
                  name="lastName"
                  className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-red-400 focus:outline-none transition"
                  value={form.lastName}
                  onChange={handleChange}
                />
              </label>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-red-400 focus:outline-none transition"
                  value={form.email}
                  onChange={handleChange}
                />
              </label>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Phone
                <input
                  required
                  type="tel"
                  name="phone"
                  className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-red-400 focus:outline-none transition"
                  value={form.phone}
                  onChange={handleChange}
                />
              </label>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 col-span-2">
                Purpose
                <select
                  name="helpType"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-red-400 focus:outline-none transition"
                  value={form.helpType}
                  onChange={handleChange}>
                  <option value="" disabled hidden>
                    Select your purpose
                  </option>
                  {purposes.map(p => (
                    <option key={p.value} value={p.value}>
                      {p.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Additional Information
              <textarea
                name="additionalInfo"
                placeholder="Additional message"
                rows={4}
                className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-red-400 focus:outline-none transition"
                value={form.additionalInfo}
                onChange={handleChange}
              />
            </label>
            <button
              type="submit"
              className="w-full mt-4 bg-red-700 text-white font-bold py-2 rounded-lg shadow hover:bg-red-600 transition cursor-pointer"
              disabled={submitting}>
              {submitting ? 'Submitting...' : 'Submit Form'}
            </button>
            <ToastContainer position="bottom-right" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
