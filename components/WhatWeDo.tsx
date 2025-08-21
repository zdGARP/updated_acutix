import { FaLaptopCode, FaChartLine, FaUniversity } from 'react-icons/fa';

const services = [
  {
    title: 'Web & Digital Development',
    description: 'Design & develop websites and digital tools.',
    icon: FaLaptopCode,
    color: 'bg-blue-500' // Added color property
  },
  {
    title: 'Custom Business Solutions',
    description: 'Provide custom solutions for business efficiency.',
    icon: FaChartLine,
    color: 'bg-green-500' // Added color property
  },
  {
    title: 'Industrial-Academic Collaboration',
    description: (
      <>
        Support industrial-academic collaboration:
        <ul className="list-disc ml-6 mt-2 dark:text-white text-gray-700">
          <li>Internships for students</li>
          <li>Guest lectures by industry experts</li>
          <li>Tech meetups and sessions</li>
        </ul>
        Bridge the gap between industry and academia.
      </>
    ),
    icon: FaUniversity,
    color: 'bg-purple-500' // Added color property
  }
];

export default function WhatWeDo() {
  return (
    <section className="w-full py-16 bg-white dark:bg-[#23272b] border-t border-gray-100 dark:border-[#23272b]">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-[#323b42] dark:text-white drop-shadow-lg">
          What We Do
        </h2>
        <div className="relative">
          <div
            className="absolute left-1/2 top-0 h-full w-1 bg-gray-200 dark:bg-gray-700 rounded-full -translate-x-1/2"
            aria-hidden="true"></div>
          <ul className="space-y-12">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <li key={idx} className="relative flex items-center gap-8">
                  <div className="flex flex-col items-center z-10">
                    <span className={`${service.color} text-white rounded-full p-4 shadow-lg mb-2`}>
                      <Icon size={32} />
                    </span>
                    <span className={`w-3 h-3 ${service.color} rounded-full`}></span>
                  </div>
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-blue-100 dark:border-[#23272b] flex-1">
                    <h3 className="text-xl font-bold text-black dark:text-white mb-2">{service.title}</h3>
                    <div className="text-gray-700 dark:text-white text-base">{service.description}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
