'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const mainNavItems = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Services', href: '/services' },
  { name: 'Partnerships', href: '/collaborations' },
  { name: 'Programs', href: '/careers' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'About Us', href: '/about' },
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
    <header className="fixed left-1/2 top-3 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 rounded-full border border-[#152352] bg-[#0A1230]/95 shadow-xl shadow-[#0A1230]/20 backdrop-blur-md transition-colors duration-300">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
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
        <nav className="hidden items-center space-x-4 lg:flex xl:space-x-6">
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
                className={`site-nav-link text-xs font-semibold tracking-wide lg:text-[13px] xl:text-sm ${
                  isActive
                    ? 'text-[#FF7A1A]'
                    : 'text-slate-300'
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
            className="inline-flex items-center gap-1.5 rounded-full bg-[#FF7A1A] px-5 py-2.5 text-sm font-semibold tracking-wide text-white shadow-sm transition-all duration-200 hover:bg-[#EA6608] hover:shadow-orange-500/20 hover:scale-[1.02]"
          >
            <span>Book free demo</span>
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
          className="fixed inset-x-4 top-20 z-40 rounded-2xl border border-[#152352] bg-[#0A1230] shadow-2xl backdrop-blur-xl lg:hidden"
        >
          <div className="pt-4 pb-6 px-6 space-y-2">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`site-nav-link block rounded-lg px-4 py-3 text-sm font-semibold tracking-wide transition-colors duration-150 ${
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
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-[#FF7A1A] px-4 py-3 text-sm font-bold tracking-wider text-white hover:bg-[#EA6608]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Book free demo</span>
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
