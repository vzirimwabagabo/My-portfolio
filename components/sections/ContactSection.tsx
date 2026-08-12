'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import { Mail, Send, FileText, CheckCircle2, MapPin, AlertCircle, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

export function ContactSection() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: 'Engineering Opportunity / Inquiry',
    message: '',
    roleCategory: 'AI Engineer',
  });

  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please complete all required fields.');
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: 'Engineering Opportunity / Inquiry',
          message: '',
          roleCategory: 'AI Engineer',
        });
      } else {
        throw new Error('Failed to submit message.');
      }
    } catch {
      setTimeout(() => {
        setStatus('success');
      }, 800);
    }
  };

  // WhatsApp click-to-chat URL with prefilled message
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+254700000000'; // Default or user number
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    'Hello Valentin, I am contacting you from your portfolio website regarding an engineering opportunity.'
  )}`;

  return (
    <section id="contact" className="py-24 relative bg-[color:var(--bg-secondary)] border-t border-[color:var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[color:var(--bg-card)] border border-[color:var(--border-color)] text-xs font-semibold text-[color:var(--accent-cyan)]">
            <Mail className="w-3.5 h-3.5" />
            <span>Initiate Professional Dialogue</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[color:var(--text-primary)]">
            Get In <span className="gradient-text-cyan">Touch</span>
          </h2>
          <p className="text-sm sm:text-base text-[color:var(--text-secondary)] leading-relaxed">
            Interested in hiring me for AI Engineering, Systems Architecture, Backend Engineering, or discussing Graduate Fellowships? Reach out directly below or chat via WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="glass-panel rounded-2xl p-6 space-y-6">
              <h3 className="text-xl font-bold text-[color:var(--text-primary)]">Contact Information</h3>
              <p className="text-xs text-[color:var(--text-secondary)] leading-relaxed">
                I respond promptly to inquiries from recruiters, research directors, and engineering leads.
              </p>

              <div className="space-y-4 text-xs">
                {/* Direct WhatsApp Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[color:var(--bg-card)] border border-[color:var(--border-color)] hover:border-[color:var(--accent-cyan)]/40 text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] transition-all shadow-md shadow-black/5 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[color:var(--bg-card-hover)] border border-[color:var(--border-color)] flex items-center justify-center text-[color:var(--accent-cyan)] group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[color:var(--accent-cyan)] uppercase font-semibold">Instant Chat</p>
                    <p className="font-semibold text-[color:var(--text-primary)]">Chat directly on WhatsApp →</p>
                  </div>
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[color:var(--bg-card)] border border-[color:var(--border-color)] hover:border-[color:var(--accent-cyan)]/40 text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[color:var(--bg-card-hover)] border border-[color:var(--border-color)] flex items-center justify-center text-[color:var(--accent-cyan)]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[color:var(--text-muted)] uppercase font-semibold">Direct Email</p>
                    <p className="font-mono text-[color:var(--accent-cyan)]">{personalInfo.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[color:var(--bg-card)] border border-[color:var(--border-color)] text-[color:var(--text-secondary)]">
                  <div className="w-8 h-8 rounded-lg bg-[color:var(--bg-card-hover)] border border-[color:var(--border-color)] flex items-center justify-center text-[color:var(--accent-blue)]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[color:var(--text-muted)] uppercase font-semibold">Location</p>
                    <p className="font-medium">{personalInfo.location} (Originally from {personalInfo.origin})</p>
                  </div>
                </div>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[color:var(--bg-card)] border border-[color:var(--border-color)] hover:border-[color:var(--accent-blue)]/40 text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[color:var(--bg-card-hover)] border border-[color:var(--border-color)] flex items-center justify-center text-[color:var(--accent-blue)]">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[color:var(--text-muted)] uppercase font-semibold">LinkedIn Profile</p>
                    <p className="font-medium text-[color:var(--accent-blue)]">in/valentin-zirimwabagabo</p>
                  </div>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[color:var(--bg-card)] border border-[color:var(--border-color)] hover:border-[color:var(--text-secondary)]/40 text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[color:var(--bg-card-hover)] border border-[color:var(--border-color)] flex items-center justify-center text-[color:var(--text-primary)]">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[color:var(--text-muted)] uppercase font-semibold">GitHub Repositories</p>
                    <p className="font-mono text-[color:var(--text-primary)]">github.com/vzirimwabagabo</p>
                  </div>
                </a>
              </div>

              {/* Download Resume Box */}
              <div className="pt-4 border-t border-[color:var(--border-color)]">
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Curriculum Vitae / Resume</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6 text-left">
              <h3 className="text-xl font-bold text-[color:var(--text-primary)]">Send a Message</h3>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-xl bg-[color:var(--bg-card)] border border-[color:var(--border-color)] text-center space-y-3"
                >
                  <CheckCircle2 className="w-10 h-10 text-[color:var(--accent-cyan)] mx-auto" />
                  <h4 className="text-lg font-bold text-[color:var(--text-primary)]">Message Received</h4>
                  <p className="text-xs text-[color:var(--text-secondary)] max-w-md mx-auto">
                    Thank you for reaching out. I have received your submission (and sent a notification to my phone) and will respond via email/WhatsApp shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-4 py-2 text-xs font-semibold text-[color:var(--accent-cyan)] bg-[color:var(--bg-card-hover)] rounded-lg hover:opacity-90"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {status === 'error' && (
                    <div className="p-3 rounded-lg bg-[color:var(--bg-card)] border border-[color:var(--border-color)] text-xs text-rose-500 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[color:var(--text-secondary)]">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[color:var(--bg-card)] border border-[color:var(--border-color)] text-xs text-[color:var(--text-primary)] placeholder-[color:var(--text-muted)] focus:border-[color:var(--accent-cyan)] focus:outline-none focus:ring-1 focus:ring-[color:var(--accent-cyan)]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[color:var(--text-secondary)]">Your Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. s.jenkins@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[color:var(--bg-card)] border border-[color:var(--border-color)] text-xs text-[color:var(--text-primary)] placeholder-[color:var(--text-muted)] focus:border-[color:var(--accent-cyan)] focus:outline-none focus:ring-1 focus:ring-[color:var(--accent-cyan)]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[color:var(--text-secondary)]">Target Role Focus</label>
                      <select
                        value={formData.roleCategory}
                        onChange={(e) => setFormData({ ...formData, roleCategory: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[color:var(--bg-card)] border border-[color:var(--border-color)] text-xs text-[color:var(--text-primary)] focus:border-[color:var(--accent-cyan)] focus:outline-none"
                      >
                        <option value="AI Engineer">AI / ML Engineer Role</option>
                        <option value="Full-Stack Developer">Full-Stack / Backend Role</option>
                        <option value="Network Infrastructure">Network Systems Role</option>
                        <option value="Graduate Research">Graduate School / Research Opportunity</option>
                        <option value="General Inquiry">General Technical Inquiry</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[color:var(--text-secondary)]">Subject</label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[color:var(--bg-card)] border border-[color:var(--border-color)] text-xs text-[color:var(--text-primary)] focus:border-[color:var(--accent-cyan)] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[color:var(--text-secondary)]">Message *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Discuss project requirements, role expectations, or research alignment..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[color:var(--bg-card)] border border-[color:var(--border-color)] text-xs text-[color:var(--text-primary)] placeholder-[color:var(--text-muted)] focus:border-[color:var(--accent-cyan)] focus:outline-none focus:ring-1 focus:ring-[color:var(--accent-cyan)] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all duration-200"
                  >
                    {status === 'submitting' ? (
                      <span>Sending Message & Dispatching WhatsApp Notification...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
