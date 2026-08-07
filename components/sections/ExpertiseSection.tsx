'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '@/lib/data';
import {
  Code,
  FileCode,
  Code2,
  Coffee,
  Database,
  Zap,
  Server,
  Globe,
  ShieldCheck,
  Layout,
  Layers,
  Palette,
  Network,
  Radio,
  Terminal,
  Cpu,
  Lock,
  Flame,
  Box,
  GitBranch,
  Cloud,
  Brain,
  Sparkles,
  MessageSquare,
  CheckCircle2,
  BarChart,
  Users,
  MessageCircle,
  BookOpen,
  Kanban,
  Target,
  Wrench,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Code,
  FileCode,
  Code2,
  Coffee,
  Database,
  Zap,
  Server,
  Globe,
  ShieldCheck,
  Layout,
  Layers,
  Palette,
  Network,
  Radio,
  Terminal,
  Cpu,
  Lock,
  Flame,
  Box,
  GitBranch,
  Cloud,
  Brain,
  Sparkles,
  MessageSquare,
  CheckCircle2,
  BarChart,
  Users,
  MessageCircle,
  BookOpen,
  Kanban,
  Target,
};

export function ExpertiseSection() {
  const [activeCategory, setActiveCategory] = React.useState(skillCategories[0].category);

  const selectedGroup = skillCategories.find((cat) => cat.category === activeCategory) || skillCategories[0];

  return (
    <section id="expertise" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/50 border border-blue-800/60 text-xs font-semibold text-blue-300">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
            Technical <span className="gradient-text-blue">Expertise</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            A comprehensive matrix of technical proficiencies across programming languages, systems engineering, network infrastructure, and artificial intelligence.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((group) => {
            const isActive = group.category === activeCategory;
            return (
              <button
                key={group.category}
                onClick={() => setActiveCategory(group.category)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-500'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 border border-slate-800'
                }`}
              >
                {group.category}
              </button>
            );
          })}
        </div>

        {/* Group Description */}
        <div className="text-center mb-8">
          <p className="text-xs sm:text-sm text-slate-400 italic max-w-xl mx-auto">
            &ldquo;{selectedGroup.description}&rdquo;
          </p>
        </div>

        {/* Skill Cards Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {selectedGroup.skills.map((skill) => {
            const IconComponent = iconMap[skill.iconName] || Code;
            return (
              <div
                key={skill.name}
                className="glass-panel rounded-2xl p-6 space-y-4 hover:border-blue-500/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                        skill.level === 'Advanced'
                          ? 'bg-blue-950/60 text-blue-300 border-blue-700/60'
                          : skill.level === 'Proficient'
                          ? 'bg-emerald-950/60 text-emerald-300 border-emerald-700/60'
                          : 'bg-slate-900 text-slate-400 border-slate-800'
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-100">{skill.name}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{skill.description}</p>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
