import { FaHandshake, FaCogs, FaBolt, FaUserCheck, FaMapMarkerAlt } from 'react-icons/fa';

const features = [
  {
    title: 'Transformative Solutions',
    description: 'Provide transformative software solutions with honest, transparent pricing.',
    icon: FaHandshake
  },
  {
    title: 'End-to-End Services',
    description: 'Offer complete, end-to-end development services under one roof.',
    icon: FaCogs
  },
  {
    title: 'Rapid Results',
    description: 'Deliver rapid results through agile development and expert execution.',
    icon: FaBolt
  },
  {
    title: 'Personalized Attention',
    description: 'Ensure personalized client attention with dedicated support and regular updates.',
    icon: FaUserCheck
  },
  {
    title: 'Empowering Local Talent',
    description: `Empower local talent and contribute to India's growing tech ecosystem.`,
    icon: FaMapMarkerAlt
  }
];

export default function WhyAcutix() {
  return (
    <section className="w-full py-10 bg-gradient-to-b from-white via-blue-50 to-blue-100 dark:from-[#23272b] dark:via-[#2d3440] dark:to-[#3a4152] border-t border-gray-100 dark:border-[#23272b]">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-[#323b42] dark:text-white drop-shadow-lg">
          Why Acutix
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <li
                key={idx}
                className="flex flex-col items-center bg-white/70 dark:bg-gray-900/80 backdrop-blur-xl border border-blue-100 dark:border-[#23272b] rounded-3xl p-8 shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200">
                <span className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300 dark:from-blue-700 dark:via-blue-800 dark:to-blue-900 shadow-lg">
                  <Icon size={32} className="text-white" />
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">{feature.title}</h3>
                <p className="text-gray-700 dark:text-white text-center text-base leading-relaxed">
                  {feature.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
