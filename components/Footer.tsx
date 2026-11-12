import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-[#152352] bg-[#0A1230] pt-16 pb-8 text-slate-400">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14 text-left">
          
          {/* Brand Section */}
          <div className="flex flex-col items-start space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Acutix Logo"
                width={561}
                height={474}
                priority
                className="h-9 w-auto object-contain"
              />
            </Link>

            <p className="max-w-xs text-xs sm:text-sm leading-relaxed text-slate-400">
              Innovative tech solutions for your business growth. We build scalable digital products and cultivate next-generation development talent.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3 pt-2">
              <a
                href="https://www.linkedin.com/company/acutix-soft-llp/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-md border border-[#18295E] bg-[#101D48] p-2.5 text-slate-300 transition-all duration-200 hover:border-[#FF7A1A] hover:text-[#FF7A1A] hover:bg-[#FF7A1A]/10"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href="https://www.instagram.com/acutixsoft?igsh=YXNxZ2I1aGR2Nm44"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-md border border-[#18295E] bg-[#101D48] p-2.5 text-slate-300 transition-all duration-200 hover:border-[#FF7A1A] hover:text-[#FF7A1A] hover:bg-[#FF7A1A]/10"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-200">
              Quick Links
            </h4>
            <ul className="space-y-2.5 w-full">
              {[
                { href: '/', text: 'Home' },
                { href: '/products', text: 'Products' },
                { href: '/services', text: 'Services' },
                { href: '/collaborations', text: 'Collaboration' },
                { href: '/careers', text: 'Careers' },
                { href: '/blogs', text: 'Blog' },
                { href: '/about', text: 'About Us' },
                { href: '/contact', text: 'Contact Us' }
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="inline-block text-xs sm:text-sm text-slate-400 transition-colors duration-200 hover:text-[#FF7A1A]"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col items-start">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-200">
              Our Services
            </h4>
            <ul className="space-y-2.5 w-full">
              {[
                { href: '/services', text: 'Software Development' },
                { href: '/services', text: 'Application Development' },
                { href: '/collaborations', text: 'Academic Workshops' },
                { href: '/collaborations', text: 'Industrial Visits' },
                { href: '/careers', text: 'Internship Training' }
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="inline-block text-xs sm:text-sm text-slate-400 transition-colors duration-200 hover:text-[#FF7A1A]"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-start">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-200">
              Contact
            </h4>
            <div className="space-y-3 w-full text-xs sm:text-sm">
              <div>
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                  Address
                </span>
                <p className="text-slate-400 leading-relaxed">
                  Acutix Soft LLP,<br />
                  Room #301, 4th Cross,<br />
                  Kalathumettu Street, Kottivakkam,<br />
                  Chennai 600041
                </p>
              </div>

              <div>
                <a
                  href="mailto:contact@acutixsoft.com"
                  className="block text-slate-400 transition-colors hover:text-[#FF7A1A]"
                >
                  contact@acutixsoft.com
                </a>
              </div>

              <div>
                <a
                  href="tel:+916369936706"
                  className="block text-slate-400 transition-colors hover:text-[#FF7A1A]"
                >
                  +91 6369936706
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#152352] pt-6 text-center md:flex-row">
          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500">
            <FaRegCopyright className="h-3 w-3" />
            <span>{new Date().getFullYear()} Acutix Soft LLP. All rights reserved.</span>
          </div>
          <div className="text-xs text-slate-500">
            <span>Chennai, India • Empowering Digital Innovation</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
