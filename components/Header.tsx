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
    <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Acutix Logo" width={86} height={86} priority className="border border-white/10 rounded-lg p-1 bg-black/20" />
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
              className="group relative text-gray-300 font-medium hover:text-[#f97316] transition-colors py-2 text-sm sm:text-base">
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f97316] transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-[#f97316] hover:border-orange-500/50 bg-white/5 border border-white/10 focus:outline-none transition duration-150"
            aria-label="Main menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div
          ref={menuRef}
          className="lg:hidden fixed inset-x-0 top-20 bg-black/90 backdrop-blur-lg border-t border-white/10 animate-slideDown z-40">
          <div className="pt-4 pb-6 px-4 space-y-1">
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
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-[#f97316] hover:bg-white/5 transition-colors duration-150 text-center"
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

