'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Shield, Radio, Cpu, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';

export function RadiusFlowArchitectureDiagram() {
  const [activeStep, setActiveStep] = React.useState<number>(0);

  const steps = [
    {
      title: '1. Access Request (802.1X / EAP)',
      actor: 'Network Client & NAS Gateway (MikroTik / Cisco)',
      description: 'The wireless access point or switch receives EAP-TTLS/PEAP credentials from an end-user device and forwards a RADIUS Access-Request packet to FreeRADIUS over UDP port 1812.',
      highlight: 'UDP 1812 / 1813',
    },
    {
      title: '2. FreeRADIUS rlm_sql Lookup',
      actor: 'FreeRADIUS 3.x Engine',
      description: 'FreeRADIUS processes module configuration and executes an optimized SQL query against PostgreSQL to check radcheck and radreply tables for password hashes and bandwidth policies.',
      highlight: 'Sub-5ms Query Latency',
    },
    {
      title: '3. Asynchronous FastAPI Management API',
      actor: 'FastAPI Microservice (Python 3.11)',
      description: 'Administrators interact with RadiusFlow via JWT-authenticated REST APIs. FastAPI handles user provisioning, active session queries, and profile assignment without locking FreeRADIUS tables.',
      highlight: 'Pydantic & SQLAlchemy Async',
    },
    {
      title: '4. Dynamic CoA / Disconnect-Request',
      actor: 'RadiusFlow System Controller',
      description: 'If an admin terminates a user session via the dashboard, RadiusFlow dispatches an asynchronous RADIUS Disconnect-Request (CoA) packet directly to the NAS gateway over UDP port 3799.',
      highlight: 'Real-time Disconnect (CoA)',
    },
  ];

  return (
    <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <Layers className="w-5 h-5 text-cyan-400" />
            <span>Interactive AAA Architecture & Packet Flow</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Click through the stages below to visualize packet traversal between NAS gateways, FreeRADIUS, and FastAPI.
          </p>
        </div>
        <span className="text-[11px] font-mono font-bold text-cyan-400 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60">
          UDP / SQL Protocol Pipeline
        </span>
      </div>

      {/* Visual Component Nodes */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className={`p-4 rounded-xl border transition-all ${activeStep === 0 ? 'bg-cyan-950/50 border-cyan-500 text-slate-100' : 'bg-slate-900 border-slate-800 text-slate-400'}`}>
          <Radio className="w-6 h-6 text-cyan-400 mb-2" />
          <h4 className="text-xs font-bold uppercase tracking-wider">1. NAS Gateway</h4>
          <p className="text-[11px] mt-1">MikroTik / Cisco Router</p>
        </div>

        <div className={`p-4 rounded-xl border transition-all ${activeStep === 1 ? 'bg-blue-950/50 border-blue-500 text-slate-100' : 'bg-slate-900 border-slate-800 text-slate-400'}`}>
          <Server className="w-6 h-6 text-blue-400 mb-2" />
          <h4 className="text-xs font-bold uppercase tracking-wider">2. FreeRADIUS 3.x</h4>
          <p className="text-[11px] mt-1">rlm_sql Protocol Engine</p>
        </div>

        <div className={`p-4 rounded-xl border transition-all ${activeStep === 2 ? 'bg-indigo-950/50 border-indigo-500 text-slate-100' : 'bg-slate-900 border-slate-800 text-slate-400'}`}>
          <Cpu className="w-6 h-6 text-indigo-400 mb-2" />
          <h4 className="text-xs font-bold uppercase tracking-wider">3. FastAPI API</h4>
          <p className="text-[11px] mt-1">Python Async Backend</p>
        </div>

        <div className={`p-4 rounded-xl border transition-all ${activeStep === 3 ? 'bg-purple-950/50 border-purple-500 text-slate-100' : 'bg-slate-900 border-slate-800 text-slate-400'}`}>
          <Database className="w-6 h-6 text-purple-400 mb-2" />
          <h4 className="text-xs font-bold uppercase tracking-wider">4. PostgreSQL</h4>
          <p className="text-[11px] mt-1">Shared AAA Datastore</p>
        </div>
      </div>

      {/* Step Selector Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
        {steps.map((s, idx) => (
          <button
            key={s.title}
            onClick={() => setActiveStep(idx)}
            className={`px-3 py-2 text-xs font-semibold rounded-lg text-left transition-all ${
              activeStep === idx
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-900/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            {s.title}
          </button>
        ))}
      </div>

      {/* Step Detail Card */}
      <motion.div
        key={activeStep}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-3"
      >
        <div className="flex items-center justify-between">
          <h4 className="text-base font-bold text-slate-100">{steps[activeStep].title}</h4>
          <span className="text-xs font-mono font-semibold text-cyan-400 px-2.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/80">
            {steps[activeStep].highlight}
          </span>
        </div>
        <p className="text-xs text-slate-400 font-mono">Actor: {steps[activeStep].actor}</p>
        <p className="text-xs text-slate-300 leading-relaxed">{steps[activeStep].description}</p>
      </motion.div>
    </div>
  );
}
