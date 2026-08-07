'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Menu, X, FileText, Cpu, Sparkles, Terminal } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'AI Journey', href: '#ai-journey' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const specialPages = [
    { name: 'RadiusFlow', href: '/projects/radiusflow', icon: Terminal },
    { name: 'AI Lab', href: '/ai-lab', icon: Sparkles },
  ];

  const isHomePage = pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHomePage
          ? 'bg-slate-950/80 dark:bg-slate-950/85 backdrop-blur-md border-b border-slate-800/60 shadow-lg shadow-black/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-600 p-[1px] shadow-lg shadow-blue-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-bold text-lg font-mono">
                  VZ
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors text-sm sm:text-base">
                Valentin Zirimwabagabo
              </span>
              <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                AI & Systems Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 dark:bg-slate-900/80 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {isHomePage ? (
              navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-full transition-all duration-200"
                >
                  {link.name}
                </a>
              ))
            ) : (
              <Link
                href="/"
                className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-full transition-all duration-200"
              >
                ← Back to Overview
              </Link>
            )}

            <div className="w-px h-4 bg-slate-800 mx-1" />

            {/* Special Pages Links */}
            {specialPages.map((page) => {
              const Icon = page.icon;
              const isActive = pathname === page.href;
              return (
                <Link
                  key={page.name}
                  href={page.href}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-full flex items-center gap-1.5 transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                      : 'text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/40'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {page.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-lg shadow-md shadow-blue-600/20 hover:shadow-blue-500/40 transition-all duration-200 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 pt-3 pb-6 mt-3 space-y-3">
          <div className="flex flex-col space-y-1">
            {isHomePage ? (
              navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-900 rounded-lg"
                >
                  {link.name}
                </a>
              ))
            ) : (
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-900 rounded-lg"
              >
                ← Back to Overview
              </Link>
            )}
          </div>

          <div className="pt-2 border-t border-slate-800/80 flex flex-col gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 px-3">
              Deep-Dive Pages
            </span>
            {specialPages.map((page) => {
              const Icon = page.icon;
              return (
                <Link
                  key={page.name}
                  href={page.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-semibold text-cyan-400 bg-cyan-950/30 rounded-lg flex items-center gap-2"
                >
                  <Icon className="w-4 h-4" />
                  {page.name} Page
                </Link>
              );
            })}
          </div>

          <div className="pt-2">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg shadow-md"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
