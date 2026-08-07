'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Database, CheckCircle2, Search, Cpu, FileText, ArrowRight } from 'lucide-react';

export function RagSimulator() {
  const [query, setQuery] = React.useState('How does FreeRADIUS rlm_sql handle connection pooling under high AAA load?');
  const [isRunning, setIsRunning] = React.useState(false);
  const [step, setStep] = React.useState(0);

  const sampleQueries = [
    'How does FreeRADIUS rlm_sql handle connection pooling under high AAA load?',
    'What is the difference between EAP-TTLS and PEAP authentication protocols?',
    'How do Random Forest Classifiers evaluate feature weights in student recommendation models?',
  ];

  const handleSimulate = () => {
    setIsRunning(true);
    setStep(1);
    setTimeout(() => setStep(2), 700);
    setTimeout(() => setStep(3), 1400);
    setTimeout(() => setStep(4), 2100);
    setTimeout(() => setIsRunning(false), 2200);
  };

  return (
    <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6 border border-slate-800">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span>Interactive Dense Vector RAG Pipeline Simulator</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Simulate query vectorization, semantic retrieval, and self-corrective hallucination verification.
          </p>
        </div>
        <span className="text-[10px] font-mono font-bold text-cyan-400 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60">
          FAISS + Vector Embeddings
        </span>
      </div>

      {/* Query Input */}
      <div className="space-y-3">
        <label className="text-xs font-semibold text-slate-300">Select or Type a Technical Query:</label>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 focus:border-cyan-500 focus:outline-none"
          />
          <button
            onClick={handleSimulate}
            disabled={isRunning}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
          >
            {isRunning ? <span>Processing...</span> : <span>Run RAG Pipeline</span>}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Quick presets */}
        <div className="flex flex-wrap gap-2 pt-1">
          <span className="text-[11px] text-slate-400 self-center">Presets:</span>
          {sampleQueries.map((q) => (
            <button
              key={q}
              onClick={() => setQuery(q)}
              className="text-[10px] font-mono px-2.5 py-1 rounded bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
            >
              {q.slice(0, 35)}...
            </button>
          ))}
        </div>
      </div>

      {/* RAG Pipeline Stages Visualizer */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-2">
        <div className={`p-4 rounded-xl border transition-all ${step >= 1 ? 'bg-cyan-950/50 border-cyan-500 text-slate-100' : 'bg-slate-950 border-slate-800 text-slate-400'}`}>
          <Search className="w-4 h-4 text-cyan-400 mb-1" />
          <h4 className="text-xs font-bold">1. Vector Embedding</h4>
          <p className="text-[10px] text-slate-400 mt-1">1536-dim Dense Embedding</p>
        </div>

        <div className={`p-4 rounded-xl border transition-all ${step >= 2 ? 'bg-blue-950/50 border-blue-500 text-slate-100' : 'bg-slate-950 border-slate-800 text-slate-400'}`}>
          <Database className="w-4 h-4 text-blue-400 mb-1" />
          <h4 className="text-xs font-bold">2. Top-K Retrieval</h4>
          <p className="text-[10px] text-slate-400 mt-1">Cosine Sim &gt; 0.88</p>
        </div>

        <div className={`p-4 rounded-xl border transition-all ${step >= 3 ? 'bg-indigo-950/50 border-indigo-500 text-slate-100' : 'bg-slate-950 border-slate-800 text-slate-400'}`}>
          <Cpu className="w-4 h-4 text-indigo-400 mb-1" />
          <h4 className="text-xs font-bold">3. LLM Synthesis</h4>
          <p className="text-[10px] text-slate-400 mt-1">Context-Grounded Prompt</p>
        </div>

        <div className={`p-4 rounded-xl border transition-all ${step >= 4 ? 'bg-emerald-950/50 border-emerald-500 text-slate-100' : 'bg-slate-950 border-slate-800 text-slate-400'}`}>
          <CheckCircle2 className="w-4 h-4 text-emerald-400 mb-1" />
          <h4 className="text-xs font-bold">4. Grounding Check</h4>
          <p className="text-[10px] text-slate-400 mt-1">0% Hallucination Rate</p>
        </div>
      </div>

      {/* Simulated Output Output Box */}
      {step >= 4 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3"
        >
          <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2">
            <span className="font-bold text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" /> Synthesized Answer (Faithfulness Score: 0.98)
            </span>
            <span className="font-mono text-slate-400 text-[11px]">Latency: 142ms</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            FreeRADIUS \`rlm_sql\` manages connection pools using asynchronous worker threads specified in \`mods-available/sql\`. Under high packet volumes, connection pooling prevents database socket exhaustion by maintaining pre-allocated connections with configurable \`num_sql_sockets\` parameters.
          </p>
        </motion.div>
      )}

    </div>
  );
}
