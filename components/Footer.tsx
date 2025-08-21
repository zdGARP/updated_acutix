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
  FaFacebook
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#323b42] text-gray-100 pt-12 pb-2">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 items-start mb-8">
          {/* Logo */}
          <div className="lg:col-span-1 flex flex-col items-center md:items-start">
            <div className="mb-4 p-2 bg-white rounded-lg">
              <Image src="/logo.png" alt="Acutix Logo" width={86} height={86} priority className="object-contain" />
            </div>
            <p className="text-sm text-gray-400 text-center md:text-left mt-2">
              Innovative tech solutions for your business growth
            </p>
          </div>

          {/* Pages */}
          <div className="lg:col-span-1">
            <h4 className="font-bold mb-4 text-lg flex items-center gap-2 border-b border-gray-600 pb-2">
              <FaHome className="text-blue-400" /> Pages
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/', icon: <FaHome />, text: 'Home' },
                { href: '/services', icon: <FaBriefcase />, text: 'Services' },
                { href: '/careers', icon: <FaUserTie />, text: 'Careers' },
                { href: '/blogs', icon: <FaBlog />, text: 'Blog' },
                { href: '/about', icon: <FaInfoCircle />, text: 'About us' },
                { href: '/contact', icon: <FaEnvelope />, text: 'Contact us' }
              ].map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="flex items-center gap-2 transition-colors hover:text-blue-400">
                    {item.icon} {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h4 className="font-bold mb-4 text-lg flex items-center gap-2 border-b border-gray-600 pb-2">
              <FaCode className="text-blue-400" /> Services
            </h4>
            <ul className="space-y-3">
              {[
                { icon: <FaCode />, text: 'Software development' },
                { icon: <FaMobileAlt />, text: 'Application development' },
                { icon: <FaUsers />, text: 'Tech meetup' },
                { icon: <FaUniversity />, text: 'Industrial visit for students' },
                { icon: <FaUserGraduate />, text: 'Internship training' }
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 transition-colors hover:text-blue-400">
                  {item.icon} {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-1">
            <h4 className="font-bold mb-4 text-lg flex items-center gap-2 border-b border-gray-600 pb-2">
              <FaEnvelope className="text-blue-400" /> Contact Us
            </h4>
            <address className="not-italic text-sm leading-relaxed mb-4">
              Acutix Soft LLP,
              <br />
              No: 4/110, 4th Cross,
              <br />
              Kalathumettu Street, Kottivakkam,
              <br />
              Chennai 600041
            </address>
            <p className="mb-3 text-sm flex items-center gap-2">
              <FaEnvelope className="text-blue-400" /> proprietor@digitaltouchcorp.com
            </p>
            <p className="mb-3 text-sm flex items-center gap-2">
              <FaMobileAlt className="text-blue-400" /> +91 6369936706
            </p>
          </div>

          {/* Social */}
          <div className="lg:col-span-1">
            <h4 className="font-bold mb-4 text-lg flex items-center gap-2 border-b border-gray-600 pb-2">
              <FaUsers className="text-blue-400" /> Follow Us
            </h4>
            <div className="flex space-x-4 mb-6 justify-center md:justify-start">
              {[
                {
                  href: 'https://www.linkedin.com/company/acutix-soft-llp/',
                  icon: <FaLinkedin size={22} />,
                  color: 'hover:text-blue-400',
                  label: 'LinkedIn'
                },
                {
                  href: 'https://www.instagram.com/acutixsoft?igsh=YXNxZ2I1aGR2Nm44',
                  icon: <FaInstagram size={22} />,
                  color: 'hover:text-pink-400',
                  label: 'Instagram'
                },
                {
                  href: 'https://facebook.com',
                  icon: <FaFacebook size={22} />,
                  color: 'hover:text-blue-600',
                  label: 'Facebook'
                }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`bg-gray-700 p-3 rounded-full transition-all ${social.color} hover:bg-gray-600`}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-3 flex flex-col md:flex-row justify-between items-center">
          <div className="text-xs text-gray-400  md:mb-0">&copy; 2025 Acutix Soft LLP. All rights reserved</div>
          {/* <div className="flex space-x-6 text-xs text-gray-400">
            <Link href="/privacy" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="hover:text-blue-400 transition-colors">
              Sitemap
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
