'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const mainNavItems = [
  { name: 'PRODUCTS', href: '/products' },
  { name: 'SERVICES', href: '/services' },
  { name: 'PARTNERSHIPS', href: '/collaborations' },
  { name: 'PROGRAMS', href: '/careers' },
  { name: 'BLOGS', href: '/blogs' },
  { name: 'ABOUT US', href: '/about' },
];

const Header = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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
    <header className="fixed top-0 left-0 w-full z-50 border-b border-[#152352] bg-[#0A1230] shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo.png"
              alt="Acutix Logo"
              width={561}
              height={474}
              priority
              className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {mainNavItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href === '/collaborations' && (pathname === '/collaboration' || pathname === '/colloboration')) ||
              (item.href === '/blogs' && pathname === '/blog');

            return (
              <Link
                key={item.name}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`relative text-xs font-semibold tracking-wider uppercase transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-[#FF7A1A] after:transition-[width] after:duration-200 ${
                  isActive
                    ? 'text-[#FF7A1A] after:w-full'
                    : 'text-slate-300 after:w-0 hover:text-[#FF7A1A] hover:after:w-full'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-md bg-[#FF7A1A] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all duration-200 hover:bg-[#EA6608] hover:shadow-orange-500/20 hover:scale-[1.02]"
          >
            <span>CONTACT US</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-[#18295E] bg-[#101D48] p-2 text-slate-200 transition duration-150 hover:border-[#FF7A1A] hover:text-[#FF7A1A]"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div
          ref={menuRef}
          id="mobile-navigation"
          className="fixed inset-x-0 top-20 z-40 border-t border-[#152352] bg-[#0A1230] shadow-2xl backdrop-blur-xl lg:hidden"
        >
          <div className="pt-4 pb-6 px-6 space-y-2">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block rounded-lg px-4 py-3 text-sm font-semibold tracking-wider transition-colors duration-150 uppercase ${
                  pathname === item.href
                    ? 'bg-[#152352] text-[#FF7A1A]'
                    : 'text-slate-300 hover:bg-[#101D48] hover:text-[#FF7A1A] hover:underline hover:decoration-[#FF7A1A] hover:underline-offset-4'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-[#152352] flex flex-col gap-2">
              <Link
                href="/contact"
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-[#FF7A1A] px-4 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-[#EA6608]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>CONTACT US</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
