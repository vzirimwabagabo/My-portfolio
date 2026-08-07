'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { blogPosts, BlogPost } from '@/lib/data';
import { BookOpen, Calendar, Clock, ArrowRight, X, Tag } from 'lucide-react';

export function BlogSection() {
  const [selectedPost, setSelectedPost] = React.useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-24 relative bg-slate-950/80 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/60 text-xs font-semibold text-cyan-300">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Technical Writing & Insights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
            Engineering <span className="gradient-text-cyan">Blog</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            In-depth technical articles on FreeRADIUS AAA, async FastAPI microservices, and LLM hallucination evaluation.
          </p>
        </div>

        {/* Blog Post Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="glass-panel rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/60">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors leading-snug">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {post.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Read Action */}
              <div className="pt-6 border-t border-slate-800/80 mt-6">
                <button
                  onClick={() => setSelectedPost(post)}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 group/btn"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

      </div>

      {/* Article Viewer Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl my-8 max-h-[85vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Article Header */}
              <div className="space-y-3 border-b border-slate-800 pb-6 pr-8">
                <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/60">
                    {selectedPost.category}
                  </span>
                  <span>{selectedPost.date}</span>
                  <span>•</span>
                  <span>{selectedPost.readTime}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 leading-snug">
                  {selectedPost.title}
                </h2>
              </div>

              {/* Article Markdown Body */}
              <div className="prose prose-invert prose-cyan max-w-none text-xs sm:text-sm text-slate-300 leading-relaxed space-y-4">
                <p className="font-semibold text-slate-200 text-base leading-relaxed">
                  {selectedPost.excerpt}
                </p>
                <div className="whitespace-pre-wrap font-sans space-y-4 text-slate-300">
                  {selectedPost.content}
                </div>
              </div>

              {/* Footer Tags */}
              <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {selectedPost.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 rounded-lg"
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
