'use client';
import { FaRocket, FaWallet, FaLightbulb, FaThumbsUp, FaLayerGroup } from 'react-icons/fa';

const points = [
  {
    title: 'Empowering Small Businesses',
    description: 'Help small businesses thrive in the digital age.',
    icon: FaRocket
  },
  {
    title: 'Affordable, Modern Solutions',
    description: 'Offer affordable, modern tech solutions tailored for startups.',
    icon: FaWallet
  },
  {
    title: 'Understanding Your Challenges',
    description: 'Understand the challenges of limited budgets and resources.',
    icon: FaLightbulb
  },
  {
    title: 'Pocket-Friendly Quality',
    description: 'Deliver high-quality services at pocket-friendly prices.',
    icon: FaThumbsUp
  },
  {
    title: 'Strong Digital Foundation',
    description: 'Create a strong digital foundation for entrepreneurs.',
    icon: FaLayerGroup
  }
];

export default function WhoWeAre() {
  return (
    <section className="w-full py-10 bg-gradient-to-br from-[#F8F3ED] via-[#eaf0fa] to-[#e3e6f3] dark:from-[#23272b] dark:via-[#2d3440] dark:to-[#3a4152] border-t border-gray-100 dark:border-[#23272b]">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-[#323b42] dark:text-white drop-shadow-lg">
          Who We Are
        </h2>
        <ul className="flex flex-col sm:flex-row flex-wrap gap-8 justify-center">
          {points.map((point, idx) => {
            const Icon = point.icon;
            return (
              <li
                key={idx}
                className="flex flex-col items-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-3xl p-8 w-full max-w-xs sm:w-72 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-[#e3e6f3] dark:border-[#23272b]">
                <span className="bg-gray-600 dark:bg-blue-900 text-white rounded-full p-4 shadow-lg mb-2">
                  <Icon size={32} />
                </span>
                <h3 className="text-lg font-semibold text-[#323b42] dark:text-white mb-2 text-center">{point.title}</h3>
                <p className="text-gray-700 dark:text-white text-center text-base">{point.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
