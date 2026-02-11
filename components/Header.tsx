'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    }
    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-[#323b42] border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Acutix Logo" width={86} height={86} priority className="border-2" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 xl:space-x-10">
          {[
            { name: 'Home', href: '/' },
            { name: 'Products', href: '/products' },
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
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-primary bg-white border border-gray-200 focus:outline-none transition duration-150"
            aria-label="Main menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div
          ref={menuRef}
          className="lg:hidden fixed inset-x-0 top-20 bg-white border-t border-gray-200 animate-slideDown z-40">
          <div className="pt-4 pb-4 px-4 space-y-1">
            {[
              { name: 'Home', href: '/' },
              { name: 'Products', href: '/products' },
              { name: 'Services', href: '/services' },
              { name: 'Careers', href: '/careers' },
              { name: 'Blogs', href: '/blogs' },
              { name: 'About Us', href: '/about' },
              { name: 'Contact Us', href: '/contact' }
            ].map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-150 text-center"
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
