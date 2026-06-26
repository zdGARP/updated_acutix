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
    <footer className="bg-gradient-to-b from-[#0b0f19] via-[#080a12] to-[#040508] border-t border-white/5 text-gray-200 pt-20 pb-8 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-80 h-80 rounded-full bg-teal-500/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center md:text-left">
          
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <div className="p-4 bg-white/[0.02] border border-white/10 rounded-2xl shadow-2xl backdrop-blur-md hover:border-cyan-500/20 transition-colors duration-500">
              <Image src="/logo.png" alt="Acutix Logo" width={90} height={90} priority className="object-contain" />
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Innovative tech solutions for your business growth. We build scalable digital products and cultivate next-generation development talent.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 justify-center md:justify-start pt-2">
              {[
                {
                  href: 'https://www.linkedin.com/company/acutix-soft-llp/',
                  icon: <FaLinkedin size={18} />,
                  color: 'hover:text-[#0a66c2] hover:border-[#0a66c2]/40 hover:bg-[#0a66c2]/10',
                  label: 'LinkedIn'
                },
                {
                  href: 'https://www.instagram.com/acutixsoft?igsh=YXNxZ2I1aGR2Nm44',
                  icon: <FaInstagram size={18} />,
                  color: 'hover:text-[#e1306c] hover:border-[#e1306c]/40 hover:bg-[#e1306c]/10',
                  label: 'Instagram'
                },
                {
                  href: 'https://facebook.com',
                  icon: <FaFacebook size={18} />,
                  color: 'hover:text-[#1877f2] hover:border-[#1877f2]/40 hover:bg-[#1877f2]/10',
                  label: 'Facebook'
                }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`bg-white/[0.02] border border-white/10 text-gray-400 p-3 rounded-full transition-all duration-300 hover:scale-110 ${social.color}`}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-mono text-sm tracking-widest uppercase mb-8 flex items-center gap-3 justify-center md:justify-start text-blue-400">
              <div className="p-2 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <FaHome className="w-4 h-4" />
              </div>
              Quick Links
            </h4>
            <ul className="space-y-4 w-full">
              {[
                { href: '/', icon: <FaHome className="w-3.5 h-3.5" />, text: 'Home' },
                { href: '/services', icon: <FaBriefcase className="w-3.5 h-3.5" />, text: 'Services' },
                { href: '/careers', icon: <FaUserTie className="w-3.5 h-3.5" />, text: 'Careers' },
                { href: '/blogs', icon: <FaBlog className="w-3.5 h-3.5" />, text: 'Blog' },
                { href: '/about', icon: <FaInfoCircle className="w-3.5 h-3.5" />, text: 'About us' },
                { href: '/contact', icon: <FaEnvelope className="w-3.5 h-3.5" />, text: 'Contact us' }
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-blue-400 transition-all duration-300 flex items-center gap-2.5 justify-center md:justify-start hover:translate-x-1.5 group w-fit">
                    <span className="text-gray-500 group-hover:text-blue-400 transition-colors duration-300">{item.icon}</span>
                    <span className="text-sm font-medium">{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-mono text-sm tracking-widest uppercase mb-8 flex items-center gap-3 justify-center md:justify-start text-teal-400">
              <div className="p-2 bg-teal-500/10 border border-teal-500/30 rounded-lg">
                <FaCode className="w-4 h-4" />
              </div>
              Our Services
            </h4>
            <ul className="space-y-4 w-full">
              {[
                { href: '/services', icon: <FaCode className="w-3.5 h-3.5" />, text: 'Software Development' },
                { href: '/services', icon: <FaMobileAlt className="w-3.5 h-3.5" />, text: 'Application Development' },
                { href: '/blogs', icon: <FaUsers className="w-3.5 h-3.5" />, text: 'Tech Meetups' },
                { href: '/careers', icon: <FaUniversity className="w-3.5 h-3.5" />, text: 'Industrial Visits' },
                { href: '/careers', icon: <FaUserGraduate className="w-3.5 h-3.5" />, text: 'Internship Training' }
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-teal-400 transition-all duration-300 flex items-center gap-2.5 justify-center md:justify-start hover:translate-x-1.5 group w-fit">
                    <span className="text-gray-500 group-hover:text-teal-400 transition-colors duration-300">{item.icon}</span>
                    <span className="text-sm font-medium">{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-mono text-sm tracking-widest uppercase mb-8 flex items-center gap-3 justify-center md:justify-start text-purple-400">
              <div className="p-2 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                <FaEnvelope className="w-4 h-4" />
              </div>
              Contact Info
            </h4>
            <div className="space-y-6 w-full flex flex-col items-center md:items-start">
              
              <div className="flex flex-col items-center md:items-start group">
                <div className="flex items-center gap-2.5 mb-2 text-gray-300">
                  <div className="p-1.5 bg-white/[0.02] border border-white/10 rounded-md text-purple-400">
                    <FaMapMarkerAlt className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold text-xs uppercase tracking-wider">Address</span>
                </div>
                <address className="text-gray-400 text-sm not-italic text-center md:text-left leading-relaxed pl-8">
                  Acutix Soft LLP,
                  <br />
                  No: 4/110, 4th Cross,
                  <br />
                  Kalathumettu Street, Kottivakkam,
                  <br />
                  Chennai 600041
                </address>
              </div>

              <div className="flex flex-col items-center md:items-start group">
                <div className="flex items-center gap-2.5 mb-2 text-gray-300">
                  <div className="p-1.5 bg-white/[0.02] border border-white/10 rounded-md text-purple-400">
                    <FaEnvelope className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold text-xs uppercase tracking-wider">Email</span>
                </div>
                <a
                  href="mailto:contact@acutixsoft.com"
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm pl-8 font-medium">
                  contact@acutixsoft.com
                </a>
              </div>

              <div className="flex flex-col items-center md:items-start group">
                <div className="flex items-center gap-2.5 mb-2 text-gray-300">
                  <div className="p-1.5 bg-white/[0.02] border border-white/10 rounded-md text-purple-400">
                    <FaPhone className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold text-xs uppercase tracking-wider">Phone</span>
                </div>
                <a href="tel:+916369936706" className="text-gray-400 hover:text-purple-400 transition-colors text-sm pl-8 font-medium">
                  +91 6369936706
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-center gap-4">
          <div className="text-xs text-gray-500 flex items-center gap-1.5 justify-center">
            <FaRegCopyright />
            <span>2025 Acutix Soft LLP. All rights reserved.</span>
          </div>
          <div className="text-[10px] font-mono tracking-wider text-gray-600">
            ENGINE_STATE: OPERATIONAL // PORT_3000
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
