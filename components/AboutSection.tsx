import React from 'react';
import Image from 'next/image';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Prathab Singh',
    text: `I have worked as freelancer with Acutix soft LLP (formerly Digital Touch IT Solutions), and it has been a fantastic experience. It's a great place to work and make meaningful contributions. Their internship support for students is highly commendable. For small businesses, they are the ideal choice for software solutions.`,
    rating: 5
  },
  {
    name: 'Rishi Krishna',
    text: `We had the privilege of collaborating with an expert from Acutix soft LLP (formerly Digital Touch IT Solutions) for an event organized by CIT (HackFusion-24). The panel member carefully assessed all participants' projects and identified the best ones.`,
    rating: 5
  },
  {
    name: 'Dinesh Vasudevan',
    text: `I collaborated with Acutix soft LLP (formerly Digital Touch IT Solutions) to develop websites for my cricket coaching center. Their team delivered an impressive website at a reasonable cost. Definitely a reliable company for your software needs!`,
    rating: 5
  },
  {
    name: 'Suriyakumar CR',
    text: `Skilled software professionals, their expertise and dedication made a significant impact on clients' project. They get into the requirements well and delivering high-quality solutions.`,
    rating: 5
  },
  {
    name: 'Nithisha J',
    text: `I collaborated with experts from Acutix soft LLP (formerly Digital Touch IT Solutions) to conduct a knowledge-sharing session on IoT and Blockchain. They delivered an insightful and highly valuable session.`,
    rating: 5
  }
];

const AboutSection = () => {
  return (
    <section className="relative py-0">
      <div
        className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary-100 from-white via-gray-50 to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900 z-0"
        style={{ filter: 'blur(8px)', opacity: 0.5 }}></div>
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-[#323b42] dark:text-white mb-2 tracking-tight animate-fadeUp drop-shadow-lg flex items-center justify-center gap-2">
            About Us
          </h1>
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight animate-fadeUp"></h2>
          <p className="text-lg text-gray-700 dark:text-gray-200 max-w-6xl mx-auto animate-fadeIn">
            At Acutix Soft LLP, we are passionate about driving digital transformation for small businesses. Our expert
            team is dedicated to provide innovative, affordable, and customer-focused solutions that help businesses
            thrive in today&apos;s competitive world. Our journey is defined by a commitment to excellence, continuous
            learning, and the pursuit of impactful technology solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative bg-[#fff8dc] dark:bg-[#3a4152]  rounded-2xl shadow-2xl p-8 flex flex-col md:flex-row items-center border-l-8  border-red-700 dark:border-red-600">
            <div className="flex-shrink-0 mr-6">
              <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
                <circle cx="24" cy="24" r="22" fill="#ef4444" />
                <path d="M24 14v20M14 24h20" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-red-700 dark:text-red-400 mb-2">Our Vision</h2>
              <p className="text-gray-700 dark:text-gray-200 text-left md:text-center">
                To become the go-to partner for small businesses seeking digital transformation, known for our
                expertise, affordability, and customer-centric approach.
              </p>
            </div>
          </div>
          <div className="relative bg-[#fff8dc] dark:bg-[#3a4152] rounded-2xl shadow-2xl p-8 flex flex-col md:flex-row items-center border-l-8  border-red-700 dark:border-red-600">
            <div className="flex-shrink-0 mr-6">
              <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
                <circle cx="24" cy="24" r="22" fill="#ef4444" />
                <path d="M16 32l8-16 8 16" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-red-700 dark:text-red-400 mb-2">Our Mission</h2>
              <p className="text-gray-700 dark:text-gray-200 text-left md:text-center">
                To empower small businesses through affordable technology solutions, enhancing their operational
                efficiency and driving growth.
              </p>
            </div>
          </div>
        </div>
        {/* Our Values Section - highlighted and separated */}
        <section className="relative mb-16">
          {/* <div className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br from-red-50 via-white to-red-100 dark:from-red-950 dark:via-gray-900 dark:to-red-900 opacity-80">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 400 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ opacity: 0.08 }}>
              <circle cx="100" cy="100" r="80" fill="#ef4444" />
              <circle cx="300" cy="80" r="60" fill="#f87171" />
              <circle cx="200" cy="180" r="40" fill="#fca5a5" />
            </svg>
          </div> */}
          <div className="relative z-10 p-10 rounded-2xl shadow-2xl border border-red-200 dark:border-red-900 backdrop-blur-md">
            <h2 className="text-3xl font-bold text-red-700 dark:text-red-400 mb-6 text-center">Our Values</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
              <li className="bg-red-50/80 dark:bg-gray-900/80 rounded-xl p-6 shadow flex flex-col items-start border-l-4 border-red-700 dark:border-red-600 mb-2">
                <span className="font-semibold text-red-700 dark:text-red-400">Excellence</span>
                <span className="text-gray-700 dark:text-gray-200 mt-2">
                  We are committed to delivering top-tier quality in everything we do. Excellence is not just a
                  goal—it&apos;s a standard.
                </span>
              </li>
              <li className="bg-red-50/80 dark:bg-gray-900/80 rounded-xl p-6 shadow flex flex-col items-start border-l-4 border-red-700 dark:border-red-600 mb-2">
                <span className="font-semibold text-red-700 dark:text-red-400">Innovation</span>
                <span className="text-gray-700 dark:text-gray-200 mt-2">
                  We believe in pushing boundaries and thinking ahead. Our culture encourages creative problem-solving
                  and smart solutions.
                </span>
              </li>
              <li className="bg-red-50/80 dark:bg-gray-900/80 rounded-xl p-6 shadow flex flex-col items-start border-l-4 border-red-700 dark:border-red-600 mb-2">
                <span className="font-semibold text-red-700 dark:text-red-400">Education</span>
                <span className="text-gray-700 dark:text-gray-200 mt-2">
                  We value learning as a continuous journey. By fostering curiosity and growth, we invest in knowledge
                  and long-term success.
                </span>
              </li>
              <li className="bg-red-50/80 dark:bg-gray-900/80 rounded-xl p-6 shadow flex flex-col items-start border-l-4 border-red-700 dark:border-red-600 mb-2">
                <span className="font-semibold text-red-700 dark:text-red-400">Collaboration</span>
                <span className="text-gray-700 dark:text-gray-200 mt-2">
                  We grow stronger together. Open communication and teamwork are the foundation of our progress and
                  innovation.
                </span>
              </li>
            </ul>
          </div>
        </section>
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 mb-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <Image
              src="/director.png"
              alt="Director Photo"
              width={120}
              height={120}
              className="rounded-full object-cover border-4 border-red-700 dark:border-red-400 shadow-lg"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <FaQuoteLeft className="text-red-700 dark:text-red-400 text-2xl" />
              <span className="italic text-lg text-gray-700 dark:text-gray-200">
                &quot;The best way to predict the future is to create it.&quot; — Peter Drucker
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Director&apos;s Desk</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              At Acutix Soft LLP, we are more than just a technology solutions provider — we are passionate believers in
              the transformative power of digitalization.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              I&apos;ve witnessed firsthand how small businesses, with the right tools and support, can turn their
              dreams into thriving realities. Our mission is to empower entrepreneurs who often face the weight of
              limited resources and tight budgets, offering them the technology and expertise they need to succeed
              without compromise.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              We understand the hurdles small businesses face because we&apos;ve been there too. That&apos;s why
              we&apos;re dedicated to delivering cutting-edge solutions at prices that won&apos;t break the bank. Every
              service, every tool we offer is crafted with your growth in mind.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              But our vision extends beyond just providing technology. We are deeply committed to fostering partnerships
              between industry and academia because we believe the future of innovation lies in collaboration.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Through our internship programs, tech meetups, and guest lectures by seasoned experts, we aim to inspire
              and nurture the next generation of leaders.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Together, we can build a community where small businesses flourish, future talent thrives, and technology
              becomes the bridge to endless possibilities. Thank you for being part of this journey — we are here to
              help you every step of the way.
            </p>
            <p className="text-red-700 dark:text-red-400 font-bold mt-2">
              Regards,
              <br />
              Director, Acutix Soft LLP
            </p>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Testimonials</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="bg-red-700 text-white dark:bg-red-400 dark:text-gray-900 rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                    {t.name[0]}
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white">{t.name}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">{t.text}</p>
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, idx) => (
                    <FaStar key={idx} className="text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
