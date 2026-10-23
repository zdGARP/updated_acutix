'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const pathname = usePathname();
  const isBrandedPage = ['/', '/products', '/collaboration', '/collaborations', '/services', '/careers', '/blogs', '/about', '/contact'].includes(pathname);
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
    <header className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-300 ${
      isBrandedPage
        ? 'bg-[#222433]/95 border-white/10 shadow-[0_2px_18px_rgba(0,0,0,0.16)]'
        : 'bg-black/50 border-cyan-500/30 shadow-[0_2px_15px_rgba(6,182,212,0.08)]'
    }`}>
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
            { name: 'Collaboration', href: '/collaborations' },
            { name: 'Careers', href: '/careers' },
            { name: 'Blogs', href: '/blogs' },
            { name: 'About Us', href: '/about' },
            { name: 'Contact Us', href: '/contact' }
          ].map(item => (
            <Link
              key={item.name}
              href={item.href}
              aria-current={pathname === item.href ? 'page' : undefined}
              className={`group relative font-medium transition-all duration-300 py-2 text-sm sm:text-base ${
                isBrandedPage
                  ? 'text-gray-200 hover:text-amber-300'
                  : 'text-gray-300 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]'
              }`}>
              {item.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                isBrandedPage
                  ? pathname === item.href ? 'w-full bg-amber-300' : 'w-0 bg-amber-300 group-hover:w-full'
                  : 'w-0 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] group-hover:w-full'
              }`}></span>
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`inline-flex items-center justify-center p-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none transition duration-150 ${
              isBrandedPage
                ? 'text-gray-200 hover:text-amber-300 hover:border-amber-300/50'
                : 'text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50'
            }`}
            aria-label="Main menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div
          ref={menuRef}
          className={`lg:hidden fixed inset-x-0 top-20 backdrop-blur-lg border-t border-white/10 animate-slideDown z-40 ${
            isBrandedPage ? 'bg-[#222433]' : 'bg-black/90'
          }`}>
          <div className="pt-4 pb-6 px-4 space-y-1">
            {[
              { name: 'Home', href: '/' },
              { name: 'Products', href: '/products' },
              { name: 'Services', href: '/services' },
              { name: 'Collaboration', href: '/collaborations' },
              { name: 'Careers', href: '/careers' },
              { name: 'Blogs', href: '/blogs' },
              { name: 'About Us', href: '/about' },
              { name: 'Contact Us', href: '/contact' }
            ].map(item => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:bg-white/5 transition-colors duration-150 text-center ${
                  isBrandedPage ? 'hover:text-amber-300' : 'hover:text-cyan-400'
                }`}
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
