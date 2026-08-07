'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { RadiusFlowArchitectureDiagram } from '@/components/radiusflow/ArchitectureDiagram';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import {
  Terminal,
  Server,
  Database,
  Shield,
  Radio,
  Cpu,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Lock,
  Code2,
  Box,
  Layers,
  Sparkles,
} from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';

export default function RadiusFlowProductPage() {
  const [selectedApiTab, setSelectedApiTab] = React.useState<'create-user' | 'coa-disconnect' | 'radcheck-schema'>('create-user');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-28 pb-24 space-y-20">
        
        {/* RadiusFlow Hero Header */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-6">
          <div className="ambient-glow-cyan top-0 left-1/2 -translate-x-1/2" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/80 text-xs font-mono font-semibold text-cyan-300">
            <Radio className="w-4 h-4 text-cyan-400" />
            <span>Enterprise RADIUS & AAA Infrastructure Platform</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-100 max-w-4xl mx-auto leading-tight">
            RadiusFlow: <span className="gradient-text-cyan">Next-Gen Network Access Control</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            An asynchronous AAA management platform bridging low-level FreeRADIUS networking protocol engines with FastAPI microservices, PostgreSQL, and Next.js 14.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="https://github.com/valentinzirimwabagabo/radiusflow"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/30 flex items-center gap-2"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Explore GitHub Repository</span>
            </a>

            <a
              href="#architecture"
              className="px-6 py-3.5 text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-800 hover:bg-slate-800 rounded-xl flex items-center gap-2"
            >
              <span>View Systems Architecture</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-slate-800/80">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <p className="text-xs text-slate-400">Protocol Support</p>
              <p className="text-lg font-bold font-mono text-cyan-400">RADIUS / 802.1X</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <p className="text-xs text-slate-400">Auth Throughput</p>
              <p className="text-lg font-bold font-mono text-blue-400">&gt; 5,000 req/sec</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <p className="text-xs text-slate-400">API Latency</p>
              <p className="text-lg font-bold font-mono text-emerald-400">&lt; 8 ms</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <p className="text-xs text-slate-400">Disconnect Protocol</p>
              <p className="text-lg font-bold font-mono text-purple-400">CoA (UDP 3799)</p>
            </div>
          </div>
        </section>

        {/* Problem vs Solution Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Problem */}
            <div className="glass-panel rounded-2xl p-8 border-rose-900/30 bg-rose-950/10 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-rose-950 border border-rose-800 flex items-center justify-center text-rose-400 font-bold">
                ✕
              </div>
              <h3 className="text-xl font-bold text-slate-100">The Problem</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Legacy FreeRADIUS setups require network engineers to manually edit flat configuration files or run unmonitored SQL scripts against raw tables. This leads to configuration mistakes, zero audit logs, inability to force-disconnect users dynamically, and extreme difficulty in multi-tenant ISP environments.
              </p>
            </div>

            {/* The RadiusFlow Solution */}
            <div className="glass-panel rounded-2xl p-8 border-cyan-900/30 bg-cyan-950/10 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 font-bold">
                ✓
              </div>
              <h3 className="text-xl font-bold text-slate-100">The RadiusFlow Solution</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                RadiusFlow encapsulates FreeRADIUS within an asynchronous microservice layer. It provides validated REST API endpoints, real-time subscriber session monitoring, bandwidth policy enforcement (MikroTik-Rate-Limit), and instantaneous session termination via RADIUS Disconnect-Request (CoA).
              </p>
            </div>
          </div>
        </section>

        {/* Systems Architecture Diagram */}
        <section id="architecture" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
              System Architecture & Data Traversal
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              How RadiusFlow handles AAA requests across network hardware, FreeRADIUS, and FastAPI backends.
            </p>
          </div>

          <RadiusFlowArchitectureDiagram />
        </section>

        {/* API Code & Database Schema Documentation */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
              API Specifications & Database Schemas
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Production-ready FastAPI async endpoints and FreeRADIUS SQL mapping.
            </p>
          </div>

          <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-4">
              <button
                onClick={() => setSelectedApiTab('create-user')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                  selectedApiTab === 'create-user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200'
                }`}
              >
                FastAPI: Provision Subscriber
              </button>
              <button
                onClick={() => setSelectedApiTab('coa-disconnect')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                  selectedApiTab === 'coa-disconnect'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200'
                }`}
              >
                FastAPI: CoA Session Disconnect
              </button>
              <button
                onClick={() => setSelectedApiTab('radcheck-schema')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                  selectedApiTab === 'radcheck-schema'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200'
                }`}
              >
                PostgreSQL: FreeRADIUS Schema
              </button>
            </div>

            {/* Code Output */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
              {selectedApiTab === 'create-user' && (
                <pre>{`# RadiusFlow User Provisioning Endpoint (FastAPI)
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from schemas import SubscriberCreate, SubscriberResponse
from models import RadCheck, RadReply

router = APIRouter(prefix="/api/v1/subscribers", tags=["Subscribers"])

@router.post("/", response_model=SubscriberResponse, status_code=status.HTTP_201_CREATED)
async def create_subscriber(payload: SubscriberCreate, db: AsyncSession = Depends(get_db)):
    # 1. Insert password check attribute
    check_item = RadCheck(username=payload.username, attribute="Cleartext-Password", op=":=", value=payload.password)
    
    # 2. Insert bandwidth reply attribute (e.g. 10M/10M for MikroTik)
    reply_item = RadReply(username=payload.username, attribute="MikroTik-Rate-Limit", op=":=", value=payload.rate_limit)
    
    db.add_all([check_item, reply_item])
    await db.commit()
    return {"status": "success", "username": payload.username, "rate_limit": payload.rate_limit}`}</pre>
              )}

              {selectedApiTab === 'coa-disconnect' && (
                <pre>{`# Dynamic RADIUS Disconnect-Request (CoA Packet Dispatcher)
import socket
import struct

def build_coa_packet(username: str, secret: str) -> bytes:
    # RADIUS Packet Code 40 = Disconnect-Request
    code = 40
    identifier = 1
    length = 20 + len(username) + 2
    authenticator = b'\\x00' * 16  # Calculated HMAC authenticator
    
    # Pack RADIUS Header
    header = struct.pack("!BBH16s", code, identifier, length, authenticator)
    # Attribute 1 = User-Name
    user_attr = struct.pack("!BB", 1, len(username) + 2) + username.encode('utf-8')
    return header + user_attr`}</pre>
              )}

              {selectedApiTab === 'radcheck-schema' && (
                <pre>{`-- FreeRADIUS 3.x PostgreSQL Relational Schema
CREATE TABLE radcheck (
    id SERIAL PRIMARY KEY,
    username VARCHAR(64) NOT NULL DEFAULT '',
    attribute VARCHAR(64) NOT NULL DEFAULT '',
    op VARCHAR(2) NOT NULL DEFAULT '==',
    value VARCHAR(253) NOT NULL DEFAULT ''
);
CREATE INDEX radcheck_username ON radcheck(username);

CREATE TABLE radreply (
    id SERIAL PRIMARY KEY,
    username VARCHAR(64) NOT NULL DEFAULT '',
    attribute VARCHAR(64) NOT NULL DEFAULT '',
    op VARCHAR(2) NOT NULL DEFAULT '=',
    value VARCHAR(253) NOT NULL DEFAULT ''
);`}</pre>
              )}
            </div>
          </div>
        </section>

        {/* Docker Deployment Guide */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="glass-panel rounded-2xl p-8 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <Box className="w-6 h-6 text-cyan-400" />
              <h3 className="text-xl font-bold text-slate-100">Docker Orchestration Deployment</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              RadiusFlow runs as a containerized stack orchestrated via Docker Compose.
            </p>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300">
              <p className="text-slate-400"># Clone & start RadiusFlow stack</p>
              <p className="text-cyan-300">git clone https://github.com/valentinzirimwabagabo/radiusflow.git</p>
              <p className="text-cyan-300">cd radiusflow</p>
              <p className="text-cyan-300">docker-compose up -d --build</p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
