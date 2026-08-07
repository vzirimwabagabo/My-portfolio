'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { timelineItems } from '@/lib/data';
import { Briefcase, GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export function TimelineSection() {
  const [filter, setFilter] = React.useState<string>('All');

  const categories = ['All', 'Education', 'Experience', 'Research', 'Leadership'];

  const filteredItems = filter === 'All'
    ? timelineItems
    : timelineItems.filter((item) => item.type === filter);

  return (
    <section id="experience" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/50 border border-blue-800/60 text-xs font-semibold text-blue-300">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Milestones & Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
            Experience <span className="gradient-text-blue">Timeline</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            A history of academic excellence, software engineering internships, network security research, and student community leadership.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-200 ${
                filter === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Vertical Timeline Tree */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800/80 -translate-x-1/2" />

          <div className="space-y-12">
            {filteredItems.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Icon Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-900 border-2 border-blue-500 flex items-center justify-center text-cyan-400 z-10 shadow-lg shadow-blue-500/20">
                    {item.type === 'Education' ? (
                      <GraduationCap className="w-4 h-4" />
                    ) : item.type === 'Experience' ? (
                      <Briefcase className="w-4 h-4" />
                    ) : item.type === 'Research' ? (
                      <BookOpen className="w-4 h-4" />
                    ) : (
                      <Award className="w-4 h-4" />
                    )}
                  </div>

                  {/* Card Content Container */}
                  <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${isEven ? 'sm:pr-10' : 'sm:pl-10'}`}>
                    <div className="glass-panel rounded-2xl p-6 space-y-4 hover:border-blue-500/40 transition-all duration-300">
                      
                      {/* Top Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/60">
                          {item.type}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Title & Org */}
                      <div>
                        <h3 className="text-lg font-bold text-slate-100">{item.title}</h3>
                        <p className="text-xs text-blue-400 font-semibold mt-0.5">{item.organization}</p>
                        <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-1">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Key Achievements */}
                      <div className="space-y-1.5 pt-2">
                        {item.achievements.map((ach, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60">
                        {item.skills.map((s) => (
                          <span
                            key={s}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800"
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
