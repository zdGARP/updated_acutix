'use client';
import { FaRocket, FaWallet, FaLightbulb, FaThumbsUp, FaLayerGroup } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

const points = [
  {
    title: 'Empowering Small Businesses',
    description: 'Help small businesses thrive in the digital age.',
    icon: FaRocket,
    color: 'from-purple-500 to-blue-500'
  },
  {
    title: 'Affordable, Modern Solutions',
    description: 'Offer affordable, modern tech solutions tailored for startups.',
    icon: FaWallet,
    color: 'from-green-500 to-teal-500'
  },
  {
    title: 'Understanding Your Challenges',
    description: 'Understand the challenges of limited budgets and resources.',
    icon: FaLightbulb,
    color: 'from-amber-500 to-orange-500'
  },
  {
    title: 'Pocket-Friendly Quality',
    description: 'Deliver high-quality services at pocket-friendly prices.',
    icon: FaThumbsUp,
    color: 'from-rose-500 to-pink-500'
  },
  {
    title: 'Strong Digital Foundation',
    description: 'Create a strong digital foundation for entrepreneurs.',
    icon: FaLayerGroup,
    color: 'from-indigo-500 to-purple-500'
  }
];

export default function WhoWeAre() {
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
      className="w-full py-10 bg-gradient-to-br from-[#f8f9ff] via-[#eef1ff] to-[#e6ebff] dark:from-[#1a1f2e] dark:via-[#232837] dark:to-[#2a3045] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-white to-transparent dark:from-gray-900 opacity-50"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-purple-200 dark:bg-purple-900 rounded-full opacity-30 blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div
          className={`text-center mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-[#323b42] dark:text-white drop-shadow-lg">
            Who We Are
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {points.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col items-center bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className={`rounded-2xl p-3 mb-6 bg-gradient-to-r ${point.color} shadow-md`}>
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 text-center">{point.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">{point.description}</p>
              </div>
            );
          })}

          {/* Additional call-to-action card */}
          <div
            className={`flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl p-8 shadow-lg border border-blue-100 dark:border-blue-800/50 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${points.length * 100}ms` }}>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 text-center">Ready to Get Started?</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
              Let&apos;s work together to bring your vision to life
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 rounded-lg bg-blue-600 dark:bg-blue-500 text-white font-bold text-lg shadow-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition">
              Contact Us
            </a>
            {/* <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg">
              Contact Us
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
