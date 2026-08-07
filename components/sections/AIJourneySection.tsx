'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, Brain, Cpu, MessageSquare, CheckCircle2, ArrowRight, Compass, Rocket } from 'lucide-react';

export function AIJourneySection() {
  const roadmapSteps = [
    {
      step: '01',
      title: 'Machine Learning Foundations',
      description: 'Supervised & Unsupervised learning, feature engineering, Decision Trees, Random Forests, Scikit-Learn, and statistics.',
      status: 'Completed',
    },
    {
      step: '02',
      title: 'Neural Networks & Deep Learning',
      description: 'Multi-layer perceptrons, backpropagation, CNNs for vision, PyTorch tensor mechanics, and loss function optimization.',
      status: 'Completed',
    },
    {
      step: '03',
      title: 'LLMs & Dense Vector RAG',
      description: 'Large Language Models, semantic search, vector embeddings (FAISS), LangChain, and hybrid sparse-dense retrieval.',
      status: 'Active Focus',
    },
    {
      step: '04',
      title: 'Agentic AI & System Tool Calling',
      description: 'Autonomous multi-agent loops, structured JSON schema outputs, self-reflection agents, and tool execution environments.',
      status: 'Active Research',
    },
    {
      step: '05',
      title: 'AI Evaluation & MLOps',
      description: 'Quantitative hallucination scoring, factual precision benchmarking, model evaluation, and deployment orchestration.',
      status: 'Future Ambition',
    },
  ];

  return (
    <section id="ai-journey" className="py-24 relative bg-slate-950/90 border-t border-slate-800/80">
      {/* Background ambient lighting */}
      <div className="ambient-glow-cyan top-1/3 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/60 text-xs font-semibold text-cyan-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>AI Evolution & Future Research</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
            My <span className="gradient-text-cyan">AI Journey</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            How a background in network infrastructure evolved into a passion for Machine Learning, Agentic AI, and Systems Research.
          </p>
        </div>

        {/* Narrative Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-2xl p-8 max-w-4xl mx-auto space-y-6 mb-16"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-900/40 border border-cyan-700/50 flex items-center justify-center text-cyan-400">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-100">Connecting Networks to Neural Networks</h3>
              <p className="text-xs text-cyan-400 font-medium">Infrastructure • Machine Learning • Agentic Systems</p>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            My interest in Artificial Intelligence stemmed directly from network engineering. Managing AAA protocols and RADIUS packet flows made me realize that modern enterprise infrastructure generates vast telemetry data. Machine learning provides the reasoning framework needed to make network systems autonomous, self-healing, and intelligent.
          </p>

          <p className="text-sm text-slate-300 leading-relaxed">
            Starting from foundational statistical learning and Scikit-Learn in my undergraduate capstone project, I expanded into deep learning with PyTorch, Dense Vector Retrieval (RAG), and Autonomous Agentic AI workflows. My goal is to combine robust low-level backend engineering with state-of-the-art AI models.
          </p>

          {/* Quick Callout CTA */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400">
              Want to see interactive RAG and Agentic AI simulators in action?
            </p>
            <Link
              href="/ai-lab"
              className="px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-xl flex items-center gap-2 shadow-lg shadow-cyan-600/25"
            >
              <span>Visit Artificial Intelligence Lab</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* Roadmap Grid */}
        <div className="space-y-6 mb-16">
          <h3 className="text-xl font-bold text-center text-slate-100 mb-8">
            Machine Learning & AI Learning Roadmap
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {roadmapSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-panel rounded-2xl p-5 space-y-3 relative flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold font-mono text-cyan-400 opacity-60">
                      {step.step}
                    </span>
                    <span
                      className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        step.status === 'Completed'
                          ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/60'
                          : step.status === 'Active Focus' || step.status === 'Active Research'
                          ? 'bg-cyan-950/60 text-cyan-300 border border-cyan-800/60'
                          : 'bg-slate-900 text-slate-400 border border-slate-800'
                      }`}
                    >
                      {step.status}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-100 leading-snug">{step.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Graduate School & Research Ambitions Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-2xl p-8 border border-blue-800/40 bg-blue-950/20 max-w-4xl mx-auto space-y-4 text-left"
        >
          <div className="flex items-center gap-3">
            <Rocket className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-bold text-slate-100">Graduate Research & International Fellowship Aspirations</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            As a Mastercard Foundation Scholar, my long-term goal is to pursue Graduate Studies (Master&apos;s / Ph.D.) and international research fellowships focusing on Machine Learning Systems, Distributed AI, and Intelligent Infrastructure. I seek research environments where theoretical machine learning meets real-world deployment challenges.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
