'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Compass, Globe, Shield, Terminal, Code, Cpu } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative bg-slate-950/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/60 text-xs font-semibold text-cyan-300">
            <Compass className="w-3.5 h-3.5" />
            <span>Engineering Ethos & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
            About <span className="gradient-text-cyan">Valentin Zirimwabagabo</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            A professional narrative grounded in technical rigor, academic excellence, leadership, and a passion for resilient system architecture.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Academic Journey */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel rounded-2xl p-6 space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-900/40 border border-blue-700/50 flex items-center justify-center text-blue-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-100">Academic Journey</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Graduated with a Bachelor of Science in Applied Computer Technology from United States International University-Africa (USIU-Africa) in Nairobi, Kenya.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 font-mono flex items-center justify-between">
              <span>USIU-Africa</span>
              <span>2021 — 2025</span>
            </div>
          </motion.div>

          {/* Card 2: Mastercard Scholar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel rounded-2xl p-6 space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-900/40 border border-amber-700/50 flex items-center justify-center text-amber-400">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-100">Mastercard Scholar</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Selected for the prestigious Mastercard Foundation Scholarship, recognized for academic achievement, character, and potential to drive transformative change.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-800 text-[11px] text-amber-400 font-mono">
              ★ Competitive Global Fellowship
            </div>
          </motion.div>

          {/* Card 3: Systems-First Engineering */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-panel rounded-2xl p-6 space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-900/40 border border-cyan-700/50 flex items-center justify-center text-cyan-400">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-100">Systems-First Ethos</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                I believe software engineering starts at the network and runtime layer. I design systems with high emphasis on throughput, protocol compliance, and security.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-800 text-[11px] text-cyan-400 font-mono">
              AAA • Sockets • AI Pipelines
            </div>
          </motion.div>

          {/* Card 4: Global Perspective */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-panel rounded-2xl p-6 space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-900/40 border border-indigo-700/50 flex items-center justify-center text-indigo-400">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-100">Global Perspective</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Originally from Burundi and operating from Nairobi, Kenya, I bring cross-cultural leadership, resilience, and curiosity to international engineering teams.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
              Burundi → Kenya → Global
            </div>
          </motion.div>

        </div>

        {/* Narrative Deep Dive Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 glass-panel rounded-2xl p-8 border border-slate-800 space-y-4 max-w-4xl mx-auto text-left"
        >
          <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <Code className="w-5 h-5 text-blue-400" />
            <span>Engineering & Career Vision</span>
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            My career trajectory combines the structural discipline of network infrastructure with the analytical power of modern artificial intelligence. Whether optimizing RADIUS packet processing for enterprise network gateways or evaluating factual precision in autonomous multi-agent language model pipelines, my goal is unchanged: to construct software systems that are reliable, performant, and secure under load.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            I am actively positioning myself for high-impact roles as an AI Engineer, Machine Learning Engineer, Backend Systems Engineer, or Network Infrastructure Specialist, alongside pursuing advanced graduate research opportunities in computer science.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
