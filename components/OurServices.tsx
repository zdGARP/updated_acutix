'use client';

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendForm } from '../lib/sendForm';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Briefcase, Smartphone, Users, Award, Mic, Code } from 'lucide-react';

const services = [
  {
    image: '/01.jpg',
    icon: <Briefcase size={32} className="text-primary" />,
    title: 'Website Development',
    description: 'Responsive and interactive web solutions for modern businesses',
    details: ['Scalable enterprise websites', 'SEO-optimized and fast loading', 'CMS integration with admin dashboard'],
    link: '#',
    linkText: 'Learn More'
  },
  {
    image: '/02.jpg',
    icon: <Smartphone size={32} className="text-primary" />,
    title: 'Application Development',
    description: 'Building seamless mobile apps for Android and iOS platforms',
    details: [
      'Native apps with high performance and UX',
      'Cross-platform apps using latest frameworks',
      'PWA solutions for faster deployment and reach'
    ],
    link: '#',
    linkText: 'Learn More'
  },
  {
    image: '/03.jpg',
    icon: <Users size={32} className="text-primary" />,
    title: 'Industrial Visit for Students',
    description: 'Educational tours designed to expose students to real-world IT workflows',
    details: [
      'Guided walkthrough of our development process',
      'Interactive sessions with software engineers',
      'Insight into latest tools and technologies'
    ],
    link: '#',
    linkText: 'Learn More'
  },
  {
    image: '/01.jpg',
    icon: <Code size={32} className="text-primary" />,
    title: 'Custom Software Development',
    description: 'Tailored software solutions to meet your specific business needs',
    details: ['Enterprise software development', 'Cloud-based solutions', 'API development and integration'],
    link: '#',
    linkText: 'Learn More'
  },
  {
    image: '/04.jpg',
    icon: <Award size={32} className="text-primary" />,
    title: 'Internship Program',
    description: 'Practical learning experience for aspiring developers and designers',
    details: [
      'Hands-on training with live projects',
      'Mentorship from experienced professionals',
      'Certification and career guidance'
    ],
    link: '#',
    linkText: 'Apply Now'
  },
  {
    image: '/05.jpg',
    icon: <Mic size={32} className="text-primary" />,
    title: 'Tech Meetup',
    description: 'Regular community events to explore emerging tech trends',
    details: [
      'Sessions led by industry experts',
      'Networking with tech professionals',
      'Hackathons and coding challenges'
    ],
    link: '#',
    linkText: 'Schedule Now'
  }
];

// ...existing code...

const InternshipForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    department: '',
    year: '',
    domain: '',
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    toast.info('Submitting...', { autoClose: false, toastId: 'submitting' });
    const result = await sendForm({ ...form, to: process.env.EMAIL_RECEIVER, type: 'internship' });
    toast.dismiss('submitting');
    setSubmitting(false);
    if (result.success) {
      toast.success('Application submitted!');
      setTimeout(() => {
        onSuccess();
      }, 1200);
    } else {
      toast.error(result.error || 'Failed to send. Please try again.');
    }
  };
  // ...existing code...
  return (
    <>
      <form
        className="popup-form space-y-5 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg"
        onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Full Name
            <input
              required
              type="text"
              name="name"
              className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:outline-none transition"
              value={form.name}
              onChange={handleChange}
              disabled={submitting}
            />
          </label>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Email
            <input
              required
              type="email"
              name="email"
              className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:outline-none transition"
              value={form.email}
              onChange={handleChange}
              disabled={submitting}
            />
          </label>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Phone
            <input
              required
              type="tel"
              name="phone"
              className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:outline-none transition"
              value={form.phone}
              onChange={handleChange}
              disabled={submitting}
            />
          </label>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            College
            <input
              type="text"
              name="college"
              className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:outline-none transition"
              value={form.college}
              onChange={handleChange}
              disabled={submitting}
            />
          </label>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Department
            <input
              type="text"
              name="department"
              className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:outline-none transition"
              value={form.department}
              onChange={handleChange}
              disabled={submitting}
            />
          </label>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Year
            <input
              type="number"
              name="year"
              className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:outline-none transition"
              value={form.year}
              onChange={handleChange}
              disabled={submitting}
            />
          </label>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 col-span-2">
            Domain
            <select
              name="domain"
              required
              className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:outline-none transition"
              value={form.domain}
              onChange={handleChange}
              disabled={submitting}>
              <option value="">Select Domain</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Fullstack">Fullstack</option>
            </select>
          </label>
        </div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Why you want to join
          <textarea
            name="message"
            rows={4}
            className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:outline-none transition"
            value={form.message}
            onChange={handleChange}
            disabled={submitting}
          />
        </label>
        <button
          type="submit"
          className="w-full mt-4 bg-primary-button  text-white  dark:bg-gray-900 dark:text-gray-100 font-bold py-2 rounded-lg shadow hover:bg-primary-button/90 transition cursor-pointer"
          disabled={submitting}>
          {submitting ? 'Submitting...' : 'Apply Now'}
        </button>
      </form>
      <ToastContainer position="bottom-right" />
    </>
  );
};

const MeetupForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [form, setForm] = useState({ topic: '', date: '', time: '', host: '', mode: 'Online', description: '' });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    toast.info('Submitting...', { autoClose: false, toastId: 'submitting' });
    const result = await sendForm({ ...form, to: process.env.EMAIL_RECEIVER, type: 'meetup' });
    toast.dismiss('submitting');
    setSubmitting(false);
    if (result.success) {
      toast.success('Meetup scheduled!');
      setTimeout(() => {
        onSuccess();
      }, 1200);
    } else {
      toast.error(result.error || 'Failed to send. Please try again.');
    }
  };
  // ...existing code...
  <ToastContainer position="bottom-right" />;
  return (
    <>
      <form
        className="popup-form space-y-5 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg"
        onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Meetup Topic
            <input
              required
              type="text"
              name="topic"
              className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:outline-none transition"
              value={form.topic}
              onChange={handleChange}
              disabled={submitting}
            />
          </label>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Date
            <input
              required
              type="date"
              name="date"
              className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:outline-none transition"
              value={form.date}
              onChange={handleChange}
              disabled={submitting}
            />
          </label>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Time
            <input
              required
              type="time"
              name="time"
              className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:outline-none transition"
              value={form.time}
              onChange={handleChange}
              disabled={submitting}
            />
          </label>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Host Name
            <input
              type="text"
              name="host"
              className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:outline-none transition"
              value={form.host}
              onChange={handleChange}
              disabled={submitting}
            />
          </label>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 col-span-2">
            Mode
            <select
              name="mode"
              className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:outline-none transition"
              value={form.mode}
              onChange={handleChange}
              disabled={submitting}>
              <option>Online</option>
              <option>Offline</option>
            </select>
          </label>
        </div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Description
          <textarea
            name="description"
            rows={4}
            className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:outline-none transition"
            value={form.description}
            onChange={handleChange}
            disabled={submitting}
          />
        </label>
        <button
          type="submit"
          className="w-full mt-4 bg-primary-button  text-white  dark:bg-gray-900 dark:text-gray-100 font-bold py-2 rounded-lg shadow hover:bg-primary-button/90 transition cursor-pointer"
          disabled={submitting}>
          {submitting ? 'Submitting...' : 'Schedule Now'}
        </button>
      </form>
      <ToastContainer position="bottom-right" />
    </>
  );
};

function getPopupContents(setPopupIdx: React.Dispatch<React.SetStateAction<number | null>>) {
  return [
    // Website Development
    <div className="popup-content" key="website-development">
      <h2 className="text-2xl font-bold mb-2">Website Development</h2>
      <p className="mb-4">We design and develop responsive, scalable websites using the latest web technologies...</p>
      <ul className="mb-4 space-y-2">
        <li>✔️ Modern frontend stacks: React, Vue, Angular</li>
        <li>✔️ Responsive design for all devices</li>
        <li>✔️ SEO-friendly and fast-loading</li>
      </ul>
    </div>,
    // Application Development
    <div className="popup-content" key={'application-development'}>
      <h2 className="text-2xl font-bold mb-2">Application Development</h2>
      <p className="mb-4">
        We create seamless, high-performance mobile applications tailored for Android and iOS users...
      </p>
      <ul className="mb-4 space-y-2">
        <li>✔️ UI/UX optimized mobile applications</li>
        <li>✔️ Real-time data sync with cloud backend</li>
        <li>✔️ Secure authentication and offline mode</li>
      </ul>
    </div>,
    // Industrial Visit for Students
    <div className="popup-content" key={'industrial-visit-for-students'}>
      <h2 className="text-2xl font-bold mb-2">Industrial Visit for Students</h2>
      <p className="mb-4">
        Our IV programs provide students a first-hand look into the software development lifecycle...
      </p>
      <ul className="mb-4 space-y-2">
        <li>✔️ Exposure to real-time projects</li>
        <li>✔️ Q&A with software professionals</li>
        <li>✔️ Hands-on activity sessions</li>
      </ul>
    </div>,
    // Custom Software Development
    <div className="popup-content" key={'custom-software-development'}>
      <h2 className="text-2xl font-bold mb-2">Custom Software Development</h2>
      <p className="mb-4">Tailored software solutions to meet your specific business needs.</p>
      <ul className="mb-4 space-y-2">
        <li>✔️ Enterprise software development</li>
        <li>✔️ Cloud-based solutions</li>
        <li>✔️ API development and integration</li>
      </ul>
    </div>,
    // Internship Program
    <div className="popup-content" key={'internship-program'}>
      <h2 className="text-2xl font-bold mb-2">Apply for Internship</h2>
      <InternshipForm onSuccess={() => setPopupIdx(null)} />
    </div>,
    // Tech Meetup
    <div className="popup-content" key={'tech-meetup'}>
      <h2 className="text-2xl font-bold mb-2">Schedule a Tech Meetup</h2>
      <MeetupForm onSuccess={() => setPopupIdx(null)} />
    </div>
  ];
}

const OurServices = () => {
  const [popupIdx, setPopupIdx] = useState<number | null>(null);

  const handleOpen = (idx: number) => setPopupIdx(idx);
  const handleClose = () => setPopupIdx(null);

  return (
    <section className="bg-gradient-to-br from-white via-gray-50 to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900 pt-32 pb-12">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-[#323b42] dark:text-white mb-2 tracking-tight animate-fadeUp drop-shadow-lg flex items-center justify-center gap-2">
            Our Services
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fadeIn">
            Unlock your business potential with our innovative technology solutions and expert guidance.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100 dark:border-gray-800">
              <div className="relative w-full h-44 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={idx < 3}
                />
                <div className="absolute top-4 left-4 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 shadow-lg">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                <ul className="mb-4 space-y-2">
                  {service.details.map(detail => (
                    <li key={detail} className="flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                      <span className="text-gray-500 dark:text-gray-400 text-base">{detail}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleOpen(idx)}
                  className="inline-flex items-center text-[#a52a2a] cursor-pointer font-semibold hover:underline text-base transition-colors duration-200 focus:outline-none">
                  {service.linkText}
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Popup Modal */}
        <AnimatePresence>
          {popupIdx !== null && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}>
              <motion.div
                className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-8 max-w-2xl w-full relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}>
                <button
                  // className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-primary focus:outline-none"
                  className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-2xl text-gray-500 hover:bg-[#a52a2a] hover:text-white shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-secondary cursor-pointer"
                  onClick={handleClose}
                  aria-label="Close">
                  ✖
                </button>
                {getPopupContents(setPopupIdx)[popupIdx]}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default OurServices;
