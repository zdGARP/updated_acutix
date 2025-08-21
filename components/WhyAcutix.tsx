'use client';
import { FaHandshake, FaCogs, FaBolt, FaUserCheck, FaMapMarkerAlt } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

const features = [
  {
    title: 'Transformative Solutions',
    description: 'Provide transformative software solutions with honest, transparent pricing.',
    icon: FaHandshake,
    color: 'from-blue-500 to-cyan-500',
    delay: 0
  },
  {
    title: 'End-to-End Services',
    description: 'Offer complete, end-to-end development services under one roof.',
    icon: FaCogs,
    color: 'from-purple-500 to-indigo-500',
    delay: 100
  },
  {
    title: 'Rapid Results',
    description: 'Deliver rapid results through agile development and expert execution.',
    icon: FaBolt,
    color: 'from-amber-500 to-orange-500',
    delay: 200
  },
  {
    title: 'Personalized Attention',
    description: 'Ensure personalized client attention with dedicated support and regular updates.',
    icon: FaUserCheck,
    color: 'from-emerald-500 to-green-500',
    delay: 300
  },
  {
    title: 'Empowering Local Talent',
    description: `Empower local talent and contribute to India's growing tech ecosystem.`,
    icon: FaMapMarkerAlt,
    color: 'from-rose-500 to-pink-500',
    delay: 400
  }
];

export default function WhyAcutix() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-10  bg-gradient-to-b from-white via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-white to-transparent dark:from-gray-900 opacity-50"></div>
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-200 dark:bg-blue-800 rounded-full opacity-40 blur-3xl"></div>
      <div className="absolute bottom-0 -left-24 w-80 h-80 bg-indigo-200 dark:bg-indigo-800 rounded-full opacity-30 blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div
          className={`text-center mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-[#323b42] dark:text-white drop-shadow-lg">
            Why Acutix
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col items-center bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100 dark:border-gray-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${feature.delay}ms` }}>
                <div
                  className={`relative mb-6 flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.color} shadow-lg`}>
                  <Icon size={28} className="text-white z-10" />
                  <div className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-sm"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">{feature.description}</p>
              </div>
            );
          })}

          {/* Additional CTA card */}
          <div
            className={`flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl p-8 shadow-lg border border-blue-200 dark:border-blue-800/50 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '500ms' }}>
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-2xl mb-6">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 text-center">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
              Let&apos;s discuss how our solutions can drive your success
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 rounded-lg bg-blue-600 dark:bg-blue-500 text-white font-bold text-lg shadow-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition">
              Get Started Today
            </a>
            {/* <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-medium rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg">
              Get Started Today
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
