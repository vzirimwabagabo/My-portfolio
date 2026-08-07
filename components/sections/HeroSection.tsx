'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Sparkles, Terminal, Shield, Network, Cpu, Code2 } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting */}
      <div className="ambient-glow-cyan top-1/4 -left-20" />
      <div className="ambient-glow-blue bottom-10 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/40 border border-blue-800/50 backdrop-blur-md text-xs text-blue-300 font-medium shadow-inner">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Available for AI & Systems Engineering Roles</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-[1.15]">
              I design <span className="gradient-text-blue">intelligent software systems</span> that bridge AI, networking, and backend engineering.
            </h1>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              {personalInfo.shortBio}{' '}
              <span className="text-slate-400">
                Applied Computer Technology graduate from USIU-Africa & Mastercard Foundation Scholar. Building secure, resilient real-world systems.
              </span>
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-cyan-500/40 transition-all duration-200 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href="#projects"
                className="px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 rounded-xl transition-all duration-200 flex items-center gap-2 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-5 py-3.5 text-sm font-semibold text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Tech Badge Bar */}
            <div className="pt-6 border-t border-slate-800/80">
              <span className="text-xs uppercase font-semibold text-slate-400 tracking-wider block mb-3">
                Core Engineering Stack
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
                {['Python', 'FastAPI', 'FreeRADIUS', 'TypeScript', 'Next.js', 'PyTorch', 'Docker', 'PostgreSQL'].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-150"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Visual Card & Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Outer decorative ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-600 opacity-30 blur-lg animate-pulse" />

              <div className="relative glass-panel rounded-2xl p-6 space-y-6 text-left">
                {/* Profile Header Block */}
                <div className="flex items-center gap-4">
                  {/* Photo / Avatar Placeholder */}
                  <div className="relative w-20 h-20 rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-center overflow-hidden shadow-inner group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/20 opacity-60" />
                    <span className="text-2xl font-bold font-mono text-cyan-400">VZ</span>
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-slate-100">{personalInfo.name}</h2>
                    <p className="text-xs text-cyan-400 font-medium">{personalInfo.status}</p>
                    <p className="text-xs text-slate-400 mt-1">Nairobi, Kenya • From Burundi</p>
                  </div>
                </div>

                {/* Key Metrics / Highlights Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                    <div className="flex items-center gap-2 text-cyan-400 mb-1">
                      <Terminal className="w-4 h-4" />
                      <span className="text-xs font-semibold">Systems</span>
                    </div>
                    <p className="text-xs text-slate-300">FreeRADIUS AAA & Asynchronous Microservices</p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                    <div className="flex items-center gap-2 text-blue-400 mb-1">
                      <Cpu className="w-4 h-4" />
                      <span className="text-xs font-semibold">AI & ML</span>
                    </div>
                    <p className="text-xs text-slate-300">Recommendation Systems & Agentic RAG</p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                    <div className="flex items-center gap-2 text-indigo-400 mb-1">
                      <Network className="w-4 h-4" />
                      <span className="text-xs font-semibold">Networking</span>
                    </div>
                    <p className="text-xs text-slate-300">TCP/IP, 802.1X Access Control, Routing</p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                    <div className="flex items-center gap-2 text-emerald-400 mb-1">
                      <Shield className="w-4 h-4" />
                      <span className="text-xs font-semibold">Scholarship</span>
                    </div>
                    <p className="text-xs text-slate-300">Mastercard Foundation Scholar</p>
                  </div>
                </div>

                {/* Quick Link Card for RadiusFlow & AI Lab */}
                <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-800/40 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-200">
                    <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
                    <span className="font-medium">Explore Interactive Demos</span>
                  </div>
                  <a
                    href="/ai-lab"
                    className="text-cyan-400 hover:text-cyan-300 font-semibold underline underline-offset-4"
                  >
                    Open AI Lab →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
