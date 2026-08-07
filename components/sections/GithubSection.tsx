'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { githubStats, personalInfo } from '@/lib/data';
import { Star, GitFork, GitCommit, ExternalLink, Code2 } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';

export function GithubSection() {
  return (
    <section className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/50 border border-blue-800/60 text-xs font-semibold text-blue-300">
            <GithubIcon className="w-3.5 h-3.5" />
            <span>Open Source & Code Activity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
            GitHub <span className="gradient-text-blue">Activity</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Direct insight into my code output, open-source repositories, and system commit history.
          </p>
        </div>

        {/* GitHub Metrics Overview Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="glass-panel rounded-2xl p-5 text-center space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-cyan-400 text-xs font-semibold">
              <Code2 className="w-4 h-4" />
              <span>Repositories</span>
            </div>
            <p className="text-2xl font-bold font-mono text-slate-100">{githubStats.totalRepos}+</p>
            <p className="text-[11px] text-slate-400">Public & Academic Projects</p>
          </div>

          <div className="glass-panel rounded-2xl p-5 text-center space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-amber-400 text-xs font-semibold">
              <Star className="w-4 h-4" />
              <span>Stars Earned</span>
            </div>
            <p className="text-2xl font-bold font-mono text-slate-100">{githubStats.totalStars}</p>
            <p className="text-[11px] text-slate-400">Across Featured Repos</p>
          </div>

          <div className="glass-panel rounded-2xl p-5 text-center space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-emerald-400 text-xs font-semibold">
              <GitCommit className="w-4 h-4" />
              <span>Contributions</span>
            </div>
            <p className="text-2xl font-bold font-mono text-slate-100">{githubStats.contributionsThisYear}+</p>
            <p className="text-[11px] text-slate-400">Commits Past 12 Months</p>
          </div>

          <div className="glass-panel rounded-2xl p-5 text-center space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-blue-400 text-xs font-semibold">
              <GithubIcon className="w-4 h-4" />
              <span>Primary Stack</span>
            </div>
            <p className="text-xl font-bold font-mono text-slate-100">Python / TS</p>
            <p className="text-[11px] text-slate-400">Main Development Languages</p>
          </div>
        </div>

        {/* Pinned Repositories Grid */}
        <div className="space-y-6 mb-12">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-100">Pinned Repositories</h3>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
            >
              <span>View All Repositories on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {githubStats.pinnedRepos.map((repo) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="glass-panel rounded-2xl p-6 space-y-3 flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <GithubIcon className="w-4 h-4 text-cyan-400" />
                      <h4 className="text-base font-bold text-slate-100 font-mono">{repo.name}</h4>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-amber-400 font-mono">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{repo.stars}</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{repo.description}</p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="font-mono text-slate-400">{repo.language}</span>
                  <a
                    href={`${personalInfo.github}/${repo.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1"
                  >
                    <span>Source</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Language Distribution Bar */}
        <div className="glass-panel rounded-2xl p-6 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
            Language Composition Across Projects
          </h4>
          <div className="w-full h-3 rounded-full bg-slate-900 overflow-hidden flex">
            {githubStats.topLanguages.map((lang) => (
              <div
                key={lang.name}
                style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                title={`${lang.name}: ${lang.percentage}%`}
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-4 text-xs font-mono pt-1">
            {githubStats.topLanguages.map((lang) => (
              <div key={lang.name} className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }} />
                <span className="text-slate-300">{lang.name}:</span>
                <span className="text-slate-400">{lang.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
