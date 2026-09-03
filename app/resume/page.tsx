'use client';

import * as React from 'react';
import Link from 'next/link';
import { Libre_Baskerville } from 'next/font/google';
import { personalInfo, skillCategories, projects, timelineItems, certifications } from '@/lib/data';
import { ArrowLeft, Printer, CheckCircle2, Mail, Phone, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

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

  // Filter out Education from timeline items so it is not duplicated
  const experienceAndLeadership = timelineItems.filter((item) => item.type !== 'Education');

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libertinus+Serif:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap');

        .cv-root {
          font-family: "Libertinus Serif", "Libre Baskerville", "Georgia", "Times New Roman", serif;
          color: #111111;
          background: #ffffff;
        }

        .cv-root h1, .cv-root h2, .cv-root h3, .cv-root h4 {
          font-family: "Libertinus Serif", "Libre Baskerville", serif;
          color: #000000;
        }

        .cv-h1 {
          font-size: 1.85rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          line-height: 1.15;
          color: #000000;
        }

        .cv-h2 {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #000000;
          border-bottom: 1.5px solid #000000;
          padding-bottom: 2px;
          margin-top: 14px;
          margin-bottom: 8px;
        }

        .cv-h3 {
          font-size: 0.86rem;
          font-weight: 700;
          color: #000000;
        }

        .cv-subtitle {
          font-size: 0.82rem;
          font-weight: 600;
          font-style: italic;
          color: #333333;
        }

        .cv-body {
          font-size: 0.78rem;
          font-weight: 400;
          color: #222222;
          line-height: 1.5;
        }

        .cv-small {
          font-size: 0.73rem;
          color: #333333;
          line-height: 1.45;
        }

        .cv-mono {
          font-family: "Courier New", Courier, monospace;
          font-size: 0.73rem;
          color: #444444;
        }

        .cv-divider {
          border: none;
          border-top: 1.5px solid #000000;
          margin: 10px 0;
        }

        .cv-thin-divider {
          border: none;
          border-top: 0.5px solid #dddddd;
          margin: 10px 0;
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
          border: 0.5px solid #444444;
          padding: 0.5px 5px;
          border-radius: 2px;
          font-size: 0.62rem;
          font-family: "Courier New", monospace;
          color: #222222;
          background: #fcfcfc;
        }

        .cv-badge {
          display: inline-block;
          background: #000000;
          color: #ffffff;
          padding: 1px 6px;
          border-radius: 2px;
          font-size: 0.58rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .cv-avoid-break {
          page-break-inside: avoid;
          break-inside: avoid;
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
            padding: 16mm 14mm !important;
          }
          @page {
            margin: 0;
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
            ● Synchronized with portfolio profile data
          </span>
          <button
            onClick={handlePrint}
            className="px-4 py-2 text-xs font-bold text-white bg-black hover:bg-gray-800 rounded flex items-center gap-2 transition-all cursor-pointer shadow-sm"
          >
            <Printer className="w-4 h-4" />
            Save as PDF / Print
          </button>
        </div>
      </div>

      {/* Main CV Document */}
      <div className={`cv-root min-h-screen bg-gray-100 py-8 px-4 ${libreBaskerville.variable}`}>
        <div className="cv-page bg-white max-w-3xl mx-auto shadow-md border border-gray-200 rounded-sm p-8 sm:p-12 space-y-4">

          {/* ── HEADER ─────────────────────────────── */}
          <header className="space-y-1.5">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
              <div>
                <h1 className="cv-h1">{personalInfo.name}</h1>
                <p className="cv-subtitle mt-0.5 text-black font-semibold">{personalInfo.title}</p>
              </div>
              <div className="text-left sm:text-right space-y-0.5 text-xs">
                <p className="cv-small font-semibold">{personalInfo.location} • Origin: {personalInfo.origin}</p>
                <p className="cv-small text-gray-600">{personalInfo.status}</p>
              </div>
            </div>

            {/* Contact row */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1">
              <a href={`mailto:${personalInfo.email}`} className="cv-link cv-mono flex items-center gap-1">
                <Mail className="w-3 h-3 inline-block" /> {personalInfo.email}
              </a>
              {personalInfo.phoneDisplay && (
                <span className="cv-mono flex items-center gap-1 text-black">
                  <Phone className="w-3 h-3 inline-block" /> {personalInfo.phoneDisplay}
                </span>
              )}
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="cv-link cv-mono flex items-center gap-1">
                <GithubIcon className="w-3 h-3 inline-block" /> GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="cv-link cv-mono flex items-center gap-1">
                <LinkedinIcon className="w-3 h-3 inline-block" /> LinkedIn
              </a>
              <a href="https://valentinzirimwabagabo.valentinz.me" target="_blank" rel="noopener noreferrer" className="cv-link cv-mono flex items-center gap-1">
                <ExternalLink className="w-3 h-3 inline-block" /> Portfolio
              </a>
            </div>
          </header>

          <hr className="cv-divider" />

          {/* ── PROFESSIONAL SUMMARY ─────────────────────────────── */}
          <section className="space-y-1">
            <h2 className="cv-h2">Professional Summary</h2>
            <p className="cv-body">
              Multidisciplinary Software Engineer and Data Science professional with strong practical grounding in network infrastructure and systems engineering. BSc in Applied Computer Technology graduate from USIU-Africa (Mastercard Foundation Scholar) with advanced Data Science credentialing from The University of Tokyo (Matsuo-Iwasawa Laboratory). Experienced in architecting decoupled AAA network management platforms (RadiusFlow / FreeRADIUS + FastAPI), full-stack web platforms (React, Next.js, Node.js, PostgreSQL, MongoDB), and applied machine learning pipelines (Python, scikit-learn). Dedicated to engineering secure, observable, and intelligent systems that solve measurable real-world problems.
            </p>
          </section>

          {/* ── EDUCATION & ACADEMIC TRAINING ─────────────────────────────── */}
          <section className="space-y-3">
            <h2 className="cv-h2">Education & Advanced Training</h2>
            
            {/* Primary Degree */}
            <div className="space-y-0.5 cv-avoid-break">
              <div className="flex justify-between items-baseline">
                <h3 className="cv-h3">{personalInfo.degree}</h3>
                <span className="cv-mono">2021 — 2025</span>
              </div>
              <p className="cv-subtitle">{personalInfo.university} · Nairobi, Kenya</p>
              <p className="cv-small mt-0.5">
                <strong>Honors / Award:</strong> Mastercard Foundation Scholar — Awarded full competitive international scholarship recognizing academic excellence, resilience, and leadership.
              </p>
              <p className="cv-small text-gray-700">
                <strong>Relevant Areas:</strong> Applied Machine Learning, Artificial Intelligence, Database Systems, Computer Networks & Telecommunications, Network Security & Cryptography, Distributed Systems, Cloud Computing, Systems Analysis & Design.
              </p>
            </div>

            {/* University of Tokyo Data Science Program */}
            <div className="space-y-0.5 cv-avoid-break pt-1">
              <div className="flex justify-between items-baseline">
                <h3 className="cv-h3">Data Science Training Program</h3>
                <span className="cv-mono">Completed Aug 2026</span>
              </div>
              <p className="cv-subtitle">Matsuo-Iwasawa Laboratory, Graduate School of Engineering, The University of Tokyo</p>
              <p className="cv-small mt-0.5">
                Comprehensive training covering fundamental data science theory, machine learning algorithms, quantitative analysis, and production implementation. Successfully passed final rigorous technical examination.
              </p>
            </div>
          </section>

          {/* ── TECHNICAL SKILLS ─────────────────────────────── */}
          <section className="space-y-1.5 cv-avoid-break">
            <h2 className="cv-h2">Technical Competencies</h2>
            <div className="space-y-1">
              {skillCategories.map((group) => (
                <div key={group.category} className="flex flex-col sm:flex-row sm:items-baseline text-xs gap-1">
                  <span className="cv-body font-bold sm:w-48 shrink-0">{group.category}:</span>
                  <span className="cv-small text-gray-800">
                    {group.skills.map((s) => s.name).join(' · ')}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* ── ENGINEERING EXPERIENCE & LEADERSHIP ─────────────────────────────── */}
          <section className="space-y-3">
            <h2 className="cv-h2">Professional Experience & Leadership</h2>
            <div className="space-y-3">
              {experienceAndLeadership.map((item) => (
                <div key={item.id} className="cv-avoid-break space-y-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                    <h3 className="cv-h3">{item.title}</h3>
                    <span className="cv-mono">{item.period}</span>
                  </div>
                  <p className="cv-subtitle">{item.organization} · {item.location}</p>
                  <p className="cv-body">{item.description}</p>
                  {item.achievements.length > 0 && (
                    <ul className="list-disc list-inside space-y-0.5">
                      {item.achievements.map((ach, i) => (
                        <li key={i} className="cv-small">{ach}</li>
                      ))}
                    </ul>
                  )}
                  <div className="flex flex-wrap gap-1 pt-0.5">
                    {item.skills.map((sk) => (
                      <span key={sk} className="cv-tag">{sk}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── FEATURED ENGINEERING PROJECTS ─────────────────────────────── */}
          <section className="space-y-3">
            <h2 className="cv-h2">Selected Technical Projects</h2>
            <div className="space-y-3">
              {projects.slice(0, 4).map((p) => (
                <div key={p.id} className="cv-avoid-break space-y-1 border-b border-gray-100 pb-2 last:border-none">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                    <div className="flex items-center gap-2">
                      <h3 className="cv-h3">{p.title}</h3>
                      <span className="cv-badge">{p.category}</span>
                    </div>
                    <span className="cv-mono text-[11px]">{p.tags.slice(0, 4).join(', ')}</span>
                  </div>
                  <p className="cv-small text-gray-900 font-medium">{p.subtitle}</p>
                  <p className="cv-small text-gray-700">{p.caseStudy?.overview || p.description}</p>
                  {p.caseStudy?.results && p.caseStudy.results.length > 0 && (
                    <p className="cv-small text-gray-800">
                      <strong>Impact / Key Outcome:</strong> {p.caseStudy.results[0]}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ── CERTIFICATIONS & CREDENTIALS ─────────────────────────────── */}
          <section className="space-y-1.5 cv-avoid-break">
            <h2 className="cv-h2">Honors & Certifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {certifications.map((c) => (
                <div key={c.id} className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-black" />
                  <div>
                    <p className="cv-body font-bold leading-tight">{c.title}</p>
                    <p className="cv-small text-gray-600">{c.issuer} · {c.issueDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className="cv-thin-divider" />

          {/* Footer */}
          <footer className="text-center pt-1">
            <p className="cv-mono text-[10px] text-gray-500">
              Valentin Zirimwabagabo · https://valentinzirimwabagabo.valentinz.me · References & project repositories available on request
            </p>
          </footer>

        </div>
      </div>
    </>
  );
}
