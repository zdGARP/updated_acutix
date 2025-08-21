'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#323b42] border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        <div className="flex items-center justify-between h-20 w-full">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="Acutix Logo" width={86} height={86} priority className="border-2" />
              {/* <span className="ml-2 text-2xl font-bold text-primary">ACUTIX</span> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          {/* <nav className="hidden md:flex items-center space-x-2 px-2 py-1 rounded-lg text-white"> */}
          <nav className="hidden lg:flex space-x-8 xl:space-x-10">
            {[
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
              { name: 'Careers', href: '/careers' },
              { name: 'Blogs', href: '/blogs' },
              { name: 'About Us', href: '/about' },
              { name: 'Contact Us', href: '/contact' }
            ].map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative text-white font-lg hover:text-primary transition-colors">
                {/* className="px-4 py-2 text-white hover:text-blue-600 font-medium text-base rounded-lg transition-colors duration-150 focus:outline-none"> */}
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-primary bg-white border border-gray-200 focus:outline-none transition duration-150"
              aria-label="Main menu">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-20 bg-white border-t border-gray-200 animate-slideDown z-40">
          <div className="pt-4 pb-4 px-4 space-y-1">
            {[
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
              { name: 'Careers', href: '/careers' },
              { name: 'Blogs', href: '/blogs' },
              { name: 'About Us', href: '/about' },
              { name: 'Contact Us', href: '/contact' }
            ].map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-150"
                onClick={() => setMobileMenuOpen(false)}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
