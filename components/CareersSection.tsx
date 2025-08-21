'use client';
import React from 'react';
import Image from 'next/image';
import {
  FaRocket,
  FaLaptopCode,
  FaPalette,
  FaCloudUploadAlt,
  FaCalendarCheck,
  FaHeartbeat,
  FaGraduationCap
} from 'react-icons/fa';
import Link from 'next/link';

const jobs = [
  {
    title: 'Senior Full stack Developer',
    experience: '5+ years experience, Full time work',
    description: 'Lead development of core products',
    button: 'APPLY NOW',
    icon: <FaLaptopCode className="text-blue-400 text-2xl" />
  },
  {
    title: 'UX/UI Designer',
    experience: '3+ years of experience, onsite, fulltime',
    description: 'Create engaging user experience and web interfaces',
    button: 'APPLY NOW',
    icon: <FaPalette className="text-pink-400 text-2xl" />
  },
  {
    title: 'Devops Engineer',
    experience: '4+ years experiences, full time',
    description: 'Implement CI/CD pipelines, containerization, cloud etc.',
    button: 'APPLY NOW',
    icon: <FaCloudUploadAlt className="text-cyan-400 text-2xl" />
  }
];

const perks = [
  {
    title: 'Flexible Work Schedule',
    description:
      'Empower employees with autonomy—choose working hours that suit their productivity, while ensuring team collaboration and deadlines are met.',
    icon: <FaCalendarCheck className="text-green-400 text-2xl" />
  },
  {
    title: 'Fast Career Growth Opportunities',
    description:
      'Startups offer rapid exposure to real projects, client interaction, and cross-functional roles, accelerating skill development and promotions.',
    icon: <FaRocket className="text-yellow-400 text-2xl" />
  },
  {
    title: 'Annual Learning Budget',
    description:
      'Allocate funds for online courses, certifications, tech conferences, or workshops, helping employees stay updated and advance their skills.',
    icon: <FaGraduationCap className="text-purple-400 text-2xl" />
  },
  {
    title: 'Employee Wellness Program',
    description:
      'Provide physical and mental health support through gym memberships, therapy sessions, health checkups, or meditation app subscriptions.',
    icon: <FaHeartbeat className="text-red-400 text-2xl" />
  }
];

const galleryImages = Array.from({ length: 8 }, (_, i) => `/gallery_0${i + 1}.jpg`);

const CareersSection = () => {
  return (
    <section className="relative py-12 bg-white dark:bg-[#23272b]">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-[#323b42] dark:text-white mb-2 tracking-tight animate-fadeUp drop-shadow-lg flex items-center justify-center gap-2">
            Join our Team
          </h1>
          <p className="text-lg text-gray-700 dark:text-white max-w-xl mx-auto animate-fadeIn">
            Build the future of technology with us
          </p>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#323b42] dark:text-white mb-6 text-center">Current Job Openings</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {jobs.map((job, idx) => (
              <div
                key={idx}
                className="bg-white/90 dark:bg-[#2d3440] rounded-2xl shadow-2xl p-8 border border-[#323b42]/30 dark:border-[#3a4152] flex flex-col items-center h-full min-h-[240px]">
                <div className="mb-3">{job.icon}</div>
                <h3 className="text-xl font-bold text-red-700 dark:text-white mb-1 text-center">{job.title}</h3>
                <p className="text-sm text-gray-700 dark:text-white mb-2 text-center">{job.experience}</p>
                <p className="text-base text-gray-600 dark:text-white mb-4 text-center">{job.description}</p>
                <div className="mt-auto w-full flex justify-center">
                  <Link
                    href="https://www.linkedin.com/company/acutix-soft-llp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-700 text-white text-center font-bold py-2 px-6 rounded-lg shadow hover:bg-red-600 transition w-full">
                    {job.button}
                  </Link>
                  {/* <button className="bg-red-700 text-white font-bold py-2 px-6 rounded-lg shadow hover:bg-red-600 transition w-full">
                    {job.button}
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#323b42] dark:text-white mb-6 text-center">
            Tech Meetups & Company Life
          </h2>
          <p className="text-base text-gray-700 dark:text-white mb-6 text-center max-w-2xl mx-auto">
            At Acutix Soft LLP, we believe that great tech is built by happy, connected teams. From engaging tech
            meetups to lively team activities, our culture thrives on collaboration, creativity, and continuous
            learning. Here’s a glimpse into life at Acutix!
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((src, idx) => (
              <div key={idx} className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={src}
                  alt={`Gallery ${idx + 1}`}
                  width={300}
                  height={200}
                  className="object-cover w-full h-40 hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#323b42] dark:text-white mb-6 text-center">Perks and Benefits</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {perks.map((perk, idx) => (
              <div
                key={idx}
                className="bg-[#fff8dc] dark:bg-[#3a4152] rounded-xl p-6 shadow flex flex-col items-start border-l-4 border-[#ffb58a] dark:border-[#FFD98A] mb-2">
                <div className="mb-2">{perk.icon}</div>
                <h3 className="font-semibold text-[#323b42] dark:text-white mb-2">{perk.title}</h3>
                <p className="text-gray-700 dark:text-white">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
