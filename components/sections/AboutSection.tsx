'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Terminal, Brain, Heart, Rocket, Quote, ChevronRight, BookOpen, GraduationCap, Award, Globe, Shield } from 'lucide-react';
import { myStoryChapters, personalInfo } from '@/lib/data';

export function AboutSection() {
  const [activeChapterId, setActiveChapterId] = React.useState<string>('curiosity');

  const activeChapter = myStoryChapters.find((c) => c.id === activeChapterId) || myStoryChapters[0];

  const getChapterIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-4 h-4" />;
      case 'Terminal':
        return <Terminal className="w-4 h-4" />;
      case 'Brain':
        return <Brain className="w-4 h-4" />;
      case 'Heart':
        return <Heart className="w-4 h-4" />;
      case 'Rocket':
        return <Rocket className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <section id="about" className="py-24 relative bg-[color:var(--bg-secondary)] border-t border-[color:var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[color:var(--bg-card)] border border-[color:var(--border-color)] text-xs font-semibold text-[color:var(--accent-cyan)]">
            <BookOpen className="w-3.5 h-3.5" />
            <span>My Personal & Engineering Story</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[color:var(--text-primary)]">
            From Curiosity to <span className="gradient-text-cyan">Building Systems That Matter</span>
          </h2>
          <p className="text-sm sm:text-base text-[color:var(--text-secondary)] leading-relaxed">
            The narrative, choices, failures, and experiences that shaped my path as an engineer from Burundi to Nairobi, Kenya.
          </p>
        </div>

        {/* 4 Summary Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Card 1: Academic Journey */}
          <div className="glass-panel rounded-2xl p-6 space-y-4 flex flex-col justify-between text-left">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[color:var(--bg-card-hover)] border border-[color:var(--border-color)] flex items-center justify-center text-[color:var(--accent-blue)]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[color:var(--text-primary)]">Displacement & Resilience</h3>
              <p className="text-xs text-[color:var(--text-secondary)] leading-relaxed">
                Displacement interrupted my early education. Adapting across Burundi, Rwanda, and Kenya shaped how I approach complex technical challenges today.
              </p>
            </div>
            <div className="pt-3 border-t border-[color:var(--border-color)] text-[11px] text-[color:var(--accent-cyan)] font-mono">
              Burundi → Rwanda → Kenya
            </div>
          </div>

          {/* Card 2: Mastercard Scholar */}
          <div className="glass-panel rounded-2xl p-6 space-y-4 flex flex-col justify-between text-left">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[color:var(--bg-card-hover)] border border-[color:var(--border-color)] flex items-center justify-center text-[#d97706]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[color:var(--text-primary)]">Mastercard Scholar</h3>
              <p className="text-xs text-[color:var(--text-secondary)] leading-relaxed">
                Graduated BS in Applied Computer Technology from USIU-Africa. Selected for competitive global fellowship recognizing academic excellence.
              </p>
            </div>
            <div className="pt-3 border-t border-[color:var(--border-color)] text-[11px] text-[#d97706] font-mono">
              ★ USIU-Africa Scholar
            </div>
          </div>

          {/* Card 3: Systems-First Ethos */}
          <div className="glass-panel rounded-2xl p-6 space-y-4 flex flex-col justify-between text-left">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[color:var(--bg-card-hover)] border border-[color:var(--border-color)] flex items-center justify-center text-[color:var(--accent-cyan)]">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[color:var(--text-primary)]">Real Infrastructure</h3>
              <p className="text-xs text-[color:var(--text-secondary)] leading-relaxed">
                Interned at Zestra Capital & engineered RadiusFlow—a enterprise FreeRADIUS AAA management platform combining networks with FastAPI & Linux.
              </p>
            </div>
            <div className="pt-3 border-t border-[color:var(--border-color)] text-[11px] text-[color:var(--accent-cyan)] font-mono">
              FreeRADIUS • FastAPI • Linux
            </div>
          </div>

          {/* Card 4: Community Leadership */}
          <div className="glass-panel rounded-2xl p-6 space-y-4 flex flex-col justify-between text-left">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[color:var(--bg-card-hover)] border border-[color:var(--border-color)] flex items-center justify-center text-emerald-500">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[color:var(--text-primary)]">Technology for People</h3>
              <p className="text-xs text-[color:var(--text-secondary)] leading-relaxed">
                Led the Mahama Tailoring Empowerment Project (M-TEP) in Mahama Refugee Camp, delivering 480+ hours of vocational training for youth.
              </p>
            </div>
            <div className="pt-3 border-t border-[color:var(--border-color)] text-[11px] text-emerald-500 font-mono">
              480+ Hours Training • Camp
            </div>
          </div>

        </div>

        {/* Interactive Story Reader Component */}
        <div className="mt-8 glass-panel rounded-2xl border border-[color:var(--border-color)] overflow-hidden text-left shadow-2xl">
          
          {/* Chapter Navigation Bar */}
          <div className="bg-[color:var(--bg-card)] border-b border-[color:var(--border-color)] p-2 sm:p-3 overflow-x-auto flex items-center gap-2 no-scrollbar">
            {myStoryChapters.map((chapter, index) => {
              const isActive = chapter.id === activeChapterId;
              return (
                <button
                  key={chapter.id}
                  onClick={() => setActiveChapterId(chapter.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-[color:var(--accent-blue)] text-white shadow-lg shadow-blue-600/30'
                      : 'text-[color:var(--text-muted)] hover:text-[color:var(--text-primary)] hover:bg-[color:var(--bg-card-hover)]'
                  }`}
                >
                  <span className="opacity-80">{getChapterIcon(chapter.iconName)}</span>
                  <span>Chapter {index + 1}: {chapter.id.charAt(0).toUpperCase() + chapter.id.slice(1)}</span>
                </button>
              );
            })}
          </div>

          {/* Chapter Content Reader */}
          <div className="p-6 sm:p-10 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeChapter.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Chapter Title Header */}
                <div className="space-y-2 border-b border-[color:var(--border-color)] pb-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-[color:var(--text-primary)]">
                      {activeChapter.title}
                    </h3>
                    {activeChapter.highlightBadge && (
                      <span className="px-3 py-1 rounded-full bg-[color:var(--bg-card)] border border-[color:var(--border-color)] text-xs font-mono font-semibold text-[color:var(--accent-cyan)]">
                        {activeChapter.highlightBadge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-[color:var(--accent-cyan)] font-medium">
                    {activeChapter.subtitle}
                  </p>
                </div>

                {/* Chapter Key Quote Box */}
                {activeChapter.keyQuote && (
                  <div className="p-4 sm:p-5 rounded-xl bg-[color:var(--bg-card)] border-l-4 border-[color:var(--accent-cyan)] space-y-2">
                    <div className="flex items-center gap-2 text-[color:var(--accent-cyan)] text-xs font-semibold uppercase tracking-wider">
                      <Quote className="w-4 h-4" />
                      <span>Key Engineering Insight</span>
                    </div>
                    <p className="text-xs sm:text-sm italic text-[color:var(--text-secondary)] leading-relaxed font-serif">
                      &quot;{activeChapter.keyQuote}&quot;
                    </p>
                  </div>
                )}

                {/* Chapter Paragraphs */}
                <div className="space-y-4 text-xs sm:text-sm text-[color:var(--text-secondary)] leading-relaxed">
                  {activeChapter.content.map((paragraph, idx) => (
                    <p key={idx} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Next Chapter Button */}
                <div className="pt-4 border-t border-[color:var(--border-color)] flex justify-end">
                  {myStoryChapters.findIndex((c) => c.id === activeChapterId) < myStoryChapters.length - 1 && (
                    <button
                      onClick={() => {
                        const currentIndex = myStoryChapters.findIndex((c) => c.id === activeChapterId);
                        setActiveChapterId(myStoryChapters[currentIndex + 1].id);
                      }}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[color:var(--accent-cyan)] hover:opacity-80 transition-colors"
                    >
                      <span>Read Next Chapter</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
