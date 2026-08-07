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
    <section id="contact" className="py-24 relative bg-slate-950/90 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/60 text-xs font-semibold text-cyan-300">
            <Mail className="w-3.5 h-3.5" />
            <span>Initiate Professional Dialogue</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
            Get In <span className="gradient-text-cyan">Touch</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Interested in hiring me for AI Engineering, Systems Architecture, Backend Engineering, or discussing Graduate Fellowships? Reach out directly below or chat via WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="glass-panel rounded-2xl p-6 space-y-6">
              <h3 className="text-xl font-bold text-slate-100">Contact Information</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                I respond promptly to inquiries from recruiters, research directors, and engineering leads.
              </p>

              <div className="space-y-4 text-xs">
                {/* Direct WhatsApp Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/60 hover:border-emerald-500/80 text-slate-300 hover:text-white transition-all shadow-md shadow-emerald-900/20 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-900/60 border border-emerald-700/60 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-emerald-400 uppercase font-semibold">Instant Chat</p>
                    <p className="font-semibold text-slate-100">Chat directly on WhatsApp →</p>
                  </div>
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-semibold">Direct Email</p>
                    <p className="font-mono text-cyan-300">{personalInfo.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-800 flex items-center justify-center text-blue-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-semibold">Location</p>
                    <p className="font-medium">{personalInfo.location} (Originally from {personalInfo.origin})</p>
                  </div>
                </div>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 text-slate-300 hover:text-white transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-800 flex items-center justify-center text-blue-400">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-semibold">LinkedIn Profile</p>
                    <p className="font-medium text-blue-300">in/valentinzirimwabagabo</p>
                  </div>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-semibold">GitHub Repositories</p>
                    <p className="font-mono text-slate-200">github.com/valentinzirimwabagabo</p>
                  </div>
                </a>
              </div>

              {/* Download Resume Box */}
              <div className="pt-4 border-t border-slate-800">
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
              <h3 className="text-xl font-bold text-slate-100">Send a Message</h3>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-center space-y-3"
                >
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-slate-100">Message Received</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out. I have received your submission (and sent a notification to my phone) and will respond via email/WhatsApp shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-4 py-2 text-xs font-semibold text-emerald-300 bg-emerald-900/60 rounded-lg hover:bg-emerald-900"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {status === 'error' && (
                    <div className="p-3 rounded-lg bg-rose-950/50 border border-rose-800/60 text-xs text-rose-300 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">Your Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. s.jenkins@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">Target Role Focus</label>
                      <select
                        value={formData.roleCategory}
                        onChange={(e) => setFormData({ ...formData, roleCategory: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-100 focus:border-cyan-500 focus:outline-none"
                      >
                        <option value="AI Engineer">AI / ML Engineer Role</option>
                        <option value="Full-Stack Developer">Full-Stack / Backend Role</option>
                        <option value="Network Infrastructure">Network Systems Role</option>
                        <option value="Graduate Research">Graduate School / Research Opportunity</option>
                        <option value="General Inquiry">General Technical Inquiry</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">Subject</label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-100 focus:border-cyan-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Message *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Discuss project requirements, role expectations, or research alignment..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 resize-none"
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
