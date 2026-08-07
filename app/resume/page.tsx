'use client';

import * as React from 'react';
import Link from 'next/link';
import { Libre_Baskerville } from 'next/font/google';
import { personalInfo, skillCategories, projects, timelineItems, certifications } from '@/lib/data';
import { ArrowLeft, Printer, CheckCircle2, Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

// Libertinus Serif is not on Google Fonts — use Libre Baskerville (same classic serif spirit)
// We load it from Google Fonts for rendering, and use CSS @import for the actual Libertinus Serif font
const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cv-serif',
  display: 'swap',
});

export default function ResumePage() {
  const handlePrint = () => {
    if (typeof window !== 'undefined') window.print();
  };

  return (
    <>
      {/* Inject Libertinus Serif via Google Fonts @import — used as the primary CV font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libertinus+Serif:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap');

        .cv-root {
          font-family: "Libertinus Serif", "Libre Baskerville", "Georgia", "Times New Roman", serif;
          color: #000000;
          background: #ffffff;
        }

        .cv-root h1, .cv-root h2, .cv-root h3, .cv-root h4 {
          font-family: "Libertinus Serif", "Libre Baskerville", serif;
          color: #000000;
        }

        .cv-h1 {
          font-size: 2rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          line-height: 1.2;
          color: #000000;
        }

        .cv-h2 {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #000000;
          border-bottom: 1.5px solid #000000;
          padding-bottom: 3px;
          margin-bottom: 8px;
        }

        .cv-h3 {
          font-size: 0.875rem;
          font-weight: 700;
          color: #000000;
        }

        .cv-subtitle {
          font-size: 0.875rem;
          font-weight: 600;
          font-style: italic;
          color: #333333;
        }

        .cv-body {
          font-size: 0.8rem;
          font-weight: 400;
          color: #1a1a1a;
          line-height: 1.55;
        }

        .cv-small {
          font-size: 0.7rem;
          color: #444444;
          line-height: 1.5;
        }

        .cv-mono {
          font-family: "Courier New", monospace;
          font-size: 0.7rem;
          color: #333333;
        }

        .cv-divider {
          border: none;
          border-top: 1.5px solid #000000;
          margin: 12px 0;
        }

        .cv-thin-divider {
          border: none;
          border-top: 0.5px solid #cccccc;
          margin: 8px 0;
        }

        .cv-link {
          color: #000000;
          text-decoration: none;
          border-bottom: 1px solid #999999;
        }

        .cv-link:hover {
          border-bottom-color: #000000;
        }

        .cv-tag {
          display: inline-block;
          border: 1px solid #000000;
          padding: 1px 6px;
          border-radius: 3px;
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #000000;
          background: transparent;
        }

        .cv-badge {
          display: inline-block;
          background: #000000;
          color: #ffffff;
          padding: 2px 8px;
          border-radius: 3px;
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        /* Print styles */
        @media print {
          .no-print { display: none !important; }
          .cv-root {
            background: #ffffff !important;
            color: #000000 !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .cv-page {
            box-shadow: none !important;
            border: none !important;
            border-radius: 0 !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 28px 40px !important;
          }
          @page {
            margin: 12mm 10mm;
            size: A4;
          }
        }
      `}</style>

      {/* Top Control Bar — hidden on print */}
      <div className="no-print sticky top-0 z-50 bg-white border-b border-gray-200 py-3 px-4 sm:px-8 flex items-center justify-between shadow-sm">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-700 hover:text-black transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-[11px] text-gray-500 hidden sm:block font-mono">
            ● Autogenerated from portfolio data
          </span>
          <button
            onClick={handlePrint}
            className="px-4 py-2 text-xs font-bold text-white bg-black hover:bg-gray-800 rounded flex items-center gap-2 transition-all"
          >
            <Printer className="w-4 h-4" />
            Save as PDF / Print
          </button>
        </div>
      </div>

      {/* Main CV Document */}
      <div className={`cv-root min-h-screen bg-gray-100 py-8 px-4 ${libreBaskerville.variable}`}>
        <div className="cv-page bg-white max-w-3xl mx-auto shadow-lg border border-gray-200 rounded-sm p-8 sm:p-12 space-y-5">

          {/* ── HEADER ─────────────────────────────── */}
          <header className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div>
                <h1 className="cv-h1">{personalInfo.name}</h1>
                <p className="cv-subtitle mt-0.5">{personalInfo.title}</p>
              </div>
              <div className="text-right space-y-0.5">
                <p className="cv-small font-semibold">{personalInfo.location} • {personalInfo.origin}</p>
                <p className="cv-small">{personalInfo.status}</p>
              </div>
            </div>

            {/* Contact row */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1.5">
              <a href={`mailto:${personalInfo.email}`} className="cv-link cv-mono flex items-center gap-1">
                <Mail className="w-3 h-3 inline-block" /> {personalInfo.email}
              </a>
              <span className="cv-mono flex items-center gap-1 text-black">
                <Phone className="w-3 h-3 inline-block" /> {personalInfo.phoneDisplay} (WhatsApp)
              </span>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="cv-link cv-mono flex items-center gap-1">
                <GithubIcon className="w-3 h-3 inline-block" /> GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="cv-link cv-mono flex items-center gap-1">
                <LinkedinIcon className="w-3 h-3 inline-block" /> LinkedIn
              </a>
            </div>
          </header>

          <hr className="cv-divider" />

          {/* ── SUMMARY ─────────────────────────────── */}
          <section className="space-y-1.5">
            <h2 className="cv-h2">Professional Summary</h2>
            <p className="cv-body">
              Applied Computer Technology graduate from USIU-Africa and Mastercard Foundation Scholar originally from Burundi, based in Nairobi, Kenya. Specializing in high-throughput network access control (FreeRADIUS, 802.1X, TCP/IP), asynchronous backend microservices (FastAPI, PostgreSQL, Docker), and applied artificial intelligence (Machine Learning, RAG pipelines, Agentic AI systems). Driven by a commitment to building resilient, secure, and scalable real-world software systems.
            </p>
          </section>

          {/* ── EDUCATION ─────────────────────────────── */}
          <section className="space-y-2">
            <h2 className="cv-h2">Education</h2>
            <div>
              <div className="flex justify-between items-baseline">
                <h3 className="cv-h3">{personalInfo.degree}</h3>
                <span className="cv-mono">2021 — 2025</span>
              </div>
              <p className="cv-subtitle">{personalInfo.university}</p>
              <p className="cv-body mt-1">
                <strong>★ Mastercard Foundation Scholar</strong> — Awarded full competitive international scholarship for academic excellence and demonstrated leadership potential in technology and community development.
              </p>
            </div>
          </section>

          {/* ── TECHNICAL SKILLS ─────────────────────────────── */}
          <section className="space-y-2">
            <h2 className="cv-h2">Technical Competencies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
              {skillCategories.slice(0, 6).map((group) => (
                <div key={group.category}>
                  <p className="cv-body font-bold mb-0.5">{group.category}</p>
                  <p className="cv-small">
                    {group.skills.map((s) => s.name).join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── EXPERIENCE & LEADERSHIP ─────────────────────────────── */}
          <section className="space-y-4">
            <h2 className="cv-h2">Engineering Experience & Leadership</h2>
            <div className="space-y-4">
              {timelineItems.map((item) => (
                <div key={item.id}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0.5">
                    <h3 className="cv-h3">{item.title}</h3>
                    <span className="cv-mono">{item.period}</span>
                  </div>
                  <p className="cv-subtitle">{item.organization} · {item.location}</p>
                  <p className="cv-body mt-1">{item.description}</p>
                  {item.achievements.length > 0 && (
                    <ul className="list-disc list-inside mt-1 space-y-0.5">
                      {item.achievements.map((ach, i) => (
                        <li key={i} className="cv-small">{ach}</li>
                      ))}
                    </ul>
                  )}
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {item.skills.slice(0, 5).map((sk) => (
                      <span key={sk} className="cv-tag">{sk}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── FEATURED PROJECTS ─────────────────────────────── */}
          <section className="space-y-3">
            <h2 className="cv-h2">Featured Engineering Systems</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projects.slice(0, 4).map((p) => (
                <div key={p.id} className="border border-gray-300 p-3 space-y-1">
                  <div className="flex justify-between items-start">
                    <h3 className="cv-h3">{p.title}</h3>
                    <span className="cv-badge">{p.category}</span>
                  </div>
                  <p className="cv-small">{p.description}</p>
                  <p className="cv-mono mt-1">Stack: {p.tags.join(', ')}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── CERTIFICATIONS ─────────────────────────────── */}
          <section className="space-y-2">
            <h2 className="cv-h2">Certifications & Verified Credentials</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {certifications.map((c) => (
                <div key={c.id} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-black" />
                  <div>
                    <p className="cv-body font-bold leading-tight">{c.title}</p>
                    <p className="cv-small">{c.issuer} · {c.issueDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className="cv-thin-divider" />

          {/* Footer */}
          <footer className="text-center">
            <p className="cv-small italic text-gray-500">
              Autogenerated from valentinzirimwabagabo.com · {new Date().getFullYear()}
            </p>
          </footer>

        </div>
      </div>
    </>
  );
}
