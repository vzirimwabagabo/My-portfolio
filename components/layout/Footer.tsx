'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowUp, Mail, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { personalInfo } from '@/lib/data';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[color:var(--bg-secondary)] border-t border-[color:var(--border-color)] pt-12 pb-8 text-[color:var(--text-muted)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1px]">
                <div className="relative w-full h-full rounded-[7px] overflow-hidden bg-[color:var(--bg-card)]">
                  <Image
                    src="/image.png"
                    alt="Portrait of Valentin Zirimwabagabo"
                    fill
                    sizes="32px"
                    className="object-cover object-[50%_20%]"
                  />
                </div>
              </div>
              <span className="font-semibold text-[color:var(--text-primary)] text-lg">
                Valentin Zirimwabagabo
              </span>
            </div>
            <p className="text-xs text-[color:var(--text-secondary)] max-w-md leading-relaxed">
              AI Engineer (Aspiring) | Network Infrastructure Engineer | Full-Stack Software Developer.
              BS in Applied Computer Technology graduate from USIU-Africa. Mastercard Foundation Scholar.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Architected with Next.js App Router, TypeScript & Tailwind CSS</span>
            </div>
          </div>

          {/* Special Subpages Col */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[color:var(--text-primary)] mb-3">
              Platform Deep-Dives
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/projects/radiusflow" className="hover:text-cyan-400 transition-colors">
                  RadiusFlow Architecture Page
                </Link>
              </li>
              <li>
                <Link href="/ai-lab" className="hover:text-cyan-400 transition-colors">
                  Artificial Intelligence Lab
                </Link>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">
                  Featured Case Studies
                </a>
              </li>
              <li>
                <a href="#ai-journey" className="hover:text-cyan-400 transition-colors">
                  AI Research Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Connect Col */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[color:var(--text-primary)] mb-3">
              Connect & Verify
            </h4>
            <div className="flex items-center gap-3 mb-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-8 h-8 rounded-lg bg-[color:var(--bg-card)] border border-[color:var(--border-color)] flex items-center justify-center text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] hover:border-cyan-500/50 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-8 h-8 rounded-lg bg-[color:var(--bg-card)] border border-[color:var(--border-color)] flex items-center justify-center text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] hover:border-cyan-500/50 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email Contact"
                className="w-8 h-8 rounded-lg bg-[color:var(--bg-card)] border border-[color:var(--border-color)] flex items-center justify-center text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] hover:border-cyan-500/50 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[11px] text-[color:var(--text-muted)]">
              Based in Nairobi, Kenya • Originally from Burundi
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[color:var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Valentin Zirimwabagabo. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[color:var(--bg-card)] hover:bg-[color:var(--bg-card-hover)] border border-[color:var(--border-color)] text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
