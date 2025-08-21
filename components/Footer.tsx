import Link from 'next/link';
import Image from 'next/image';
import {
  FaHome,
  FaBriefcase,
  FaUserTie,
  FaBlog,
  FaInfoCircle,
  FaEnvelope,
  FaCode,
  FaMobileAlt,
  FaUsers,
  FaUniversity,
  FaUserGraduate,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaMapMarkerAlt,
  FaPhone,
  FaRegCopyright
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-[#23272b] text-gray-100 pt-16 pb-4">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 text-center md:text-left">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-6 p-3 bg-white rounded-xl shadow-lg">
              <Image src="/logo.png" alt="Acutix Logo" width={100} height={100} priority className="object-contain" />
            </div>

            <p className="text-gray-400 mb-6 max-w-xs">Innovative tech solutions for your business growth</p>

            {/* Social Links */}
            <div className="flex space-x-4 mb-6 justify-center md:justify-start">
              {[
                {
                  href: 'https://www.linkedin.com/company/acutix-soft-llp/',
                  icon: <FaLinkedin size={20} />,
                  color: 'hover:bg-blue-600',
                  label: 'LinkedIn'
                },
                {
                  href: 'https://www.instagram.com/acutixsoft?igsh=YXNxZ2I1aGR2Nm44',
                  icon: <FaInstagram size={20} />,
                  color: 'hover:bg-pink-600',
                  label: 'Instagram'
                },
                {
                  href: 'https://facebook.com',
                  icon: <FaFacebook size={20} />,
                  color: 'hover:bg-blue-700',
                  label: 'Facebook'
                }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`bg-gray-700 p-3 rounded-full transition-all duration-300 ${social.color} hover:scale-110`}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold mb-6 text-xl flex items-center gap-3 justify-center md:justify-start">
              <div className="p-2 bg-blue-500 rounded-lg">
                <FaHome className="text-white" />
              </div>
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { href: '/', icon: <FaHome />, text: 'Home' },
                { href: '/services', icon: <FaBriefcase />, text: 'Services' },
                { href: '/careers', icon: <FaUserTie />, text: 'Careers' },
                { href: '/blogs', icon: <FaBlog />, text: 'Blog' },
                { href: '/about', icon: <FaInfoCircle />, text: 'About us' },
                { href: '/contact', icon: <FaEnvelope />, text: 'Contact us' }
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 justify-center md:justify-start">
                    {item.icon} {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold mb-6 text-xl flex items-center gap-3 justify-center md:justify-start">
              <div className="p-2 bg-green-500 rounded-lg">
                <FaCode className="text-white" />
              </div>
              Our Services
            </h4>
            <ul className="space-y-4">
              {[
                { icon: <FaCode />, text: 'Software development' },
                { icon: <FaMobileAlt />, text: 'Application development' },
                { icon: <FaUsers />, text: 'Tech meetup' },
                { icon: <FaUniversity />, text: 'Industrial visit for students' },
                { icon: <FaUserGraduate />, text: 'Internship training' }
              ].map((item, index) => (
                <li
                  key={index}
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 justify-center md:justify-start">
                  {/* <span className="w-2 h-2 bg-green-500 rounded-full"></span> */}
                  {item.icon} {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold mb-6 text-xl flex items-center gap-3 justify-center md:justify-start">
              <div className="p-2 bg-purple-500 rounded-lg">
                <FaEnvelope className="text-white" />
              </div>
              Contact Info
            </h4>
            <div className="space-y-5">
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-gray-700 rounded-full">
                    <FaMapMarkerAlt className="text-blue-400" />
                  </div>
                  <span className="font-medium">Address</span>
                </div>
                <address className="text-gray-400 text-sm not-italic text-center md:text-left">
                  Acutix Soft LLP,
                  <br />
                  No: 4/110, 4th Cross,
                  <br />
                  Kalathumettu Street, Kottivakkam,
                  <br />
                  Chennai 600041
                </address>
              </div>

              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-gray-700 rounded-full">
                    <FaEnvelope className="text-blue-400" />
                  </div>
                  <span className="font-medium">Email</span>
                </div>
                <a
                  href="mailto:contact@acutixsoft.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  contact@acutixsoft.com
                </a>
              </div>

              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-gray-700 rounded-full">
                    <FaPhone className="text-blue-400" />
                  </div>
                  <span className="font-medium">Phone</span>
                </div>
                <a href="tel:+916369936706" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  +91 6369936706
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-2 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 flex items-center gap-1 mb-2 md:mb-0">
            <FaRegCopyright className="mt-1" />
            <span>2025 Acutix Soft LLP. All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
