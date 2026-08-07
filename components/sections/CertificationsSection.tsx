'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '@/lib/data';
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/50 border border-blue-800/60 text-xs font-semibold text-blue-300">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Credentials & Formal Training</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
            Certifications & <span className="gradient-text-blue">Badges</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Industry and academic certifications spanning Cisco Networking, Machine Learning, Python Software Engineering, and Transformative Leadership.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-panel rounded-2xl p-6 space-y-4 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Top Badge Tag */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-300 px-2.5 py-1 rounded bg-slate-900 border border-slate-800">
                    {cert.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </div>
                </div>

                {/* Title & Issuer */}
                <div>
                  <h3 className="text-lg font-bold text-slate-100">{cert.title}</h3>
                  <p className="text-xs text-cyan-400 font-medium mt-0.5">{cert.issuer}</p>
                </div>

                <div className="text-[11px] text-slate-400 font-mono">
                  Issued: {cert.issueDate}
                </div>
              </div>

              {/* Skills */}
              <div className="pt-4 border-t border-slate-800 space-y-2">
                <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
                  Validated Competencies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
