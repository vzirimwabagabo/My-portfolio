'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { projects, Project } from '@/lib/data';
import {
  ExternalLink,
  Layers,
  ArrowRight,
  X,
  CheckCircle2,
  AlertCircle,
  Cpu,
  Sparkles,
  Terminal,
  Code2,
} from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';

export function FeaturedProjectsSection() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('All');
  const [activeModalProject, setActiveModalProject] = React.useState<Project | null>(null);

  const categories = ['All', 'Networking', 'AI & ML', 'Backend & Systems', 'Mobile'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative bg-slate-950/80 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/60 text-xs font-semibold text-cyan-300">
            <Layers className="w-3.5 h-3.5" />
            <span>Case Studies & Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
            Featured <span className="gradient-text-cyan">Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Real systems built with architectural clarity, empirical testing, and production-grade technologies.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="glass-panel rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Header tag */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-cyan-400 px-2.5 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/60">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 px-2 py-0.5 rounded bg-amber-950/40 border border-amber-800/50">
                      ★ Featured Case Study
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 font-medium">{project.subtitle}</p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.slice(0, 5).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 5 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 text-slate-400">
                      +{project.tags.length - 5} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between gap-3 mt-6">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 group/btn"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                      title="View GitHub Source Code"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}

                  {project.hasSpecialPage && (
                    <Link
                      href={project.specialPagePath!}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors flex items-center gap-1 shadow-md"
                    >
                      <span>Deep Dive</span>
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Modal Overlay */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl my-8 max-h-[85vh] overflow-y-auto text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 pr-8">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  Case Study • {activeModalProject.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
                  {activeModalProject.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 font-medium">
                  {activeModalProject.subtitle}
                </p>
              </div>

              {/* Case Study Sections */}
              <div className="space-y-6 text-xs sm:text-sm text-slate-300 border-t border-slate-800 pt-6">
                
                {/* Overview & Problem */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-bold text-slate-100 text-xs uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                      <Code2 className="w-4 h-4" />
                      <span>System Overview</span>
                    </h4>
                    <p className="leading-relaxed text-slate-300">
                      {activeModalProject.caseStudy.overview}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-bold text-slate-100 text-xs uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4" />
                      <span>The Engineering Problem</span>
                    </h4>
                    <p className="leading-relaxed text-slate-300">
                      {activeModalProject.caseStudy.problem}
                    </p>
                  </div>
                </div>

                {/* Challenges */}
                <div className="space-y-2">
                  <h4 className="font-bold text-slate-100 text-xs uppercase tracking-wider text-rose-400">
                    Key Architectural Challenges
                  </h4>
                  <ul className="space-y-2">
                    {activeModalProject.caseStudy.challenges.map((c, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-300">
                        <span className="text-rose-400 font-mono font-bold">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Architecture & Decisions */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                  <h4 className="font-bold text-slate-100 text-xs uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
                    <Cpu className="w-4 h-4" />
                    <span>System Architecture & Engineering Decisions</span>
                  </h4>
                  <p className="leading-relaxed text-slate-300">
                    {activeModalProject.caseStudy.architecture}
                  </p>
                  <div className="pt-2 space-y-1.5">
                    {activeModalProject.caseStudy.engineeringDecisions.map((d, i) => (
                      <div key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results & Lessons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-bold text-slate-100 text-xs uppercase tracking-wider text-emerald-400">
                      Empirical Results
                    </h4>
                    <ul className="space-y-1.5">
                      {activeModalProject.caseStudy.results.map((r, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-300">
                          <span className="text-emerald-400 font-bold">✓</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-bold text-slate-100 text-xs uppercase tracking-wider text-indigo-400">
                      Lessons Learned
                    </h4>
                    <ul className="space-y-1.5">
                      {activeModalProject.caseStudy.lessonsLearned.map((l, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-300">
                          <span className="text-indigo-400 font-bold">→</span>
                          <span>{l}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technologies */}
                <div className="space-y-2">
                  <h4 className="font-bold text-slate-100 text-xs uppercase tracking-wider text-slate-400">
                    Technologies & Libraries
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.caseStudy.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded bg-slate-800 text-cyan-300 font-mono text-xs border border-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Modal Footer Links */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                {activeModalProject.hasSpecialPage ? (
                  <Link
                    href={activeModalProject.specialPagePath!}
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl flex items-center gap-2 shadow-lg shadow-blue-600/30"
                  >
                    <span>View Dedicated Product Page</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <div />
                )}

                {activeModalProject.githubUrl && (
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl flex items-center gap-2"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
