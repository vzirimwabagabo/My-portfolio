'use client';

import * as React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { RagSimulator } from '@/components/ai-lab/RagSimulator';
import {
  Sparkles,
  Brain,
  Cpu,
  Database,
  Terminal,
  Code2,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Layers,
  Zap,
} from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';

export default function AiLabPage() {
  const aiProjects = [
    {
      title: 'Dense Vector RAG & Hybrid Retrieval',
      category: 'RAG Systems',
      description: 'Hybrid search combining BM25 sparse keyword matching with FAISS dense vector embeddings for technical documentation Q&A.',
      tags: ['FAISS', 'PyTorch', 'LangChain', 'Python'],
      status: 'Active Playground',
    },
    {
      title: 'Autonomous Multi-Agent Tool Caller',
      category: 'Agentic AI',
      description: 'Supervisor-worker agentic workflow executing API calls, SQL queries, and self-corrective validation steps using Pydantic JSON schemas.',
      tags: ['Agentic AI', 'Tool Calling', 'JSON Schema', 'Python'],
      status: 'Active Research',
    },
    {
      title: 'Student Major Recommendation Classifier',
      category: 'Recommendation Systems',
      description: 'Supervised ML decision pipeline mapping student academic skill metrics to university computer science major specializations.',
      tags: ['Scikit-Learn', 'Random Forest', 'Pandas', 'FastAPI'],
      status: 'Completed Project',
    },
    {
      title: 'Quantitative Hallucination Metric Evaluator',
      category: 'AI Evaluation',
      description: 'Automated evaluation framework calculating claim-level faithfulness and context precision scores for domain-specific LLMs.',
      tags: ['AI Eval', 'Faithfulness', 'Precision', 'Python'],
      status: 'Research Experiment',
    },
    {
      title: 'Domain-Specific LLM Fine-Tuning Pipeline',
      category: 'Fine-tuning & MLOps',
      description: 'LoRA/QLoRA parameter-efficient fine-tuning setup for open-source Llama 3 models on network protocol RFC documentation.',
      tags: ['LoRA', 'Llama 3', 'PyTorch', 'HuggingFace'],
      status: 'Future Lab',
    },
    {
      title: 'Computer Vision Telemetry Inspector',
      category: 'Computer Vision',
      description: 'Convolutional neural network prototype inspecting server LED hardware statuses and physical network rack cabling.',
      tags: ['PyTorch', 'OpenCV', 'CNN', 'Python'],
      status: 'Experimental',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-28 pb-24 space-y-16">
        
        {/* Hero Header */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-6">
          <div className="ambient-glow-cyan top-0 left-1/2 -translate-x-1/2" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/80 text-xs font-mono font-semibold text-cyan-300">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Experimental Playground & Research Hub</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-100 max-w-4xl mx-auto leading-tight">
            Artificial Intelligence <span className="gradient-text-cyan">Lab</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A dedicated playground for testing Large Language Model pipelines, Agentic AI tool execution, RAG evaluation frameworks, and machine learning research experiments.
          </p>
        </section>

        {/* Interactive RAG Simulator */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <RagSimulator />
        </section>

        {/* AI Playground Projects Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
              Active AI Projects & Experiments
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Spanning RAG, Agentic AI, Fine-tuning, Recommendation Systems, and Model Evaluation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiProjects.map((project) => (
              <div
                key={project.title}
                className="glass-panel rounded-2xl p-6 space-y-4 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/60">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400 font-mono">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-100">{project.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{project.description}</p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Research Ambitions Box */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-2xl p-8 border border-blue-800/40 bg-blue-950/20 max-w-4xl mx-auto space-y-4 text-center">
            <h3 className="text-xl font-bold text-slate-100">Graduate Research & Fellowship Goals</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
              I am actively seeking Graduate Research Fellowships (Master&apos;s / Ph.D.) and AI Systems Engineering positions focusing on Machine Learning Systems, Agentic AI, and Enterprise Infrastructure.
            </p>
            <div className="pt-2">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/30"
              >
                <span>Discuss Research Collaboration</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
