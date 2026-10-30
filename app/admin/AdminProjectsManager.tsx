'use client';

import * as React from 'react';
import { Project } from '@/lib/data';
import { createClient } from '@/utils/supabase/client';
import { 
  Sparkles, 
  ExternalLink, 
  Github, 
  Edit3, 
  Save, 
  X, 
  CheckCircle2, 
  AlertCircle,
  Plus,
  Trash2
} from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';

interface AdminProjectsManagerProps {
  initialProjects: Project[];
}

export function AdminProjectsManager({ initialProjects }: AdminProjectsManagerProps) {
  const [projectsList, setProjectsList] = React.useState<Project[]>(initialProjects);
  const [editingProject, setEditingProject] = React.useState<Project | null>(null);
  const [isSaving, setIsSaving] = React.useState(false);
  const [saveStatus, setSaveStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = React.useState('');

  const supabase = createClient();

  const handleEdit = (project: Project) => {
    setEditingProject({ ...project });
    setSaveStatus('idle');
  };

  const handleCreateNew = () => {
    const newId = `project-${Date.now()}`;
    const newProj: Project = {
      id: newId,
      title: 'New Engineering Project',
      subtitle: 'System Subtitle or Architecture Focus',
      description: 'Concise summary of the system problem, tech stack, and impact.',
      category: 'Full-Stack',
      featured: false,
      slug: newId,
      tags: ['TypeScript', 'Next.js'],
      caseStudy: {
        overview: 'System overview details.',
        problem: 'The engineering challenge addressed.',
        challenges: ['Performance under load', 'State management'],
        architecture: 'Decoupled architecture pattern.',
        technologies: ['TypeScript', 'Next.js'],
        engineeringDecisions: ['Adopted PostgreSQL RPCs for atomic operations'],
        results: ['Sub-second latency achieved'],
        lessonsLearned: ['Early schema design is critical'],
        futureImprovements: ['Adding real-time streaming'],
      },
    };
    setEditingProject(newProj);
    setSaveStatus('idle');
  };

  const handleToggleFeatured = async (project: Project) => {
    const newFeaturedState = !project.featured;
    const updatedList = projectsList.map((p) =>
      p.id === project.id ? { ...p, featured: newFeaturedState } : p
    );
    setProjectsList(updatedList);

    try {
      const { error } = await supabase
        .from('portfolio_projects')
        .update({ featured: newFeaturedState })
        .eq('id', project.id);

      if (error) throw error;
      setSaveStatus('success');
      setStatusMessage(`Updated featured status for ${project.title}`);
    } catch (err: any) {
      setSaveStatus('error');
      setStatusMessage(err.message || 'Failed to update database');
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject) return;

    setIsSaving(true);
    setSaveStatus('idle');

    try {
      // Map to DB snake_case payload
      const dbPayload = {
        id: editingProject.id,
        title: editingProject.title,
        subtitle: editingProject.subtitle,
        description: editingProject.description,
        long_description: editingProject.longDescription || null,
        category: editingProject.category,
        featured: editingProject.featured,
        slug: editingProject.slug,
        tags: editingProject.tags,
        github_url: editingProject.githubUrl || null,
        github_label: editingProject.githubLabel || null,
        live_url: editingProject.liveUrl || null,
        has_special_page: editingProject.hasSpecialPage || false,
        special_page_path: editingProject.specialPagePath || null,
        case_study: editingProject.caseStudy,
        updated_at: new Date().toISOString(),
      };

      const { error } = await supabase
        .from('portfolio_projects')
        .upsert(dbPayload, { onConflict: 'id' });

      if (error) throw error;

      // Update state locally
      const exists = projectsList.some((p) => p.id === editingProject.id);
      const updated = exists
        ? projectsList.map((p) => (p.id === editingProject.id ? editingProject : p))
        : [editingProject, ...projectsList];

      setProjectsList(updated);
      setSaveStatus('success');
      setStatusMessage(`Saved ${editingProject.title} successfully!`);
      setEditingProject(null);
    } catch (err: any) {
      setSaveStatus('error');
      setStatusMessage(err.message || 'Error writing to Supabase. Check RLS or Whitelist.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Alert bar */}
      {saveStatus === 'success' && (
        <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{statusMessage}</span>
        </div>
      )}
      {saveStatus === 'error' && (
        <div className="p-3.5 rounded-xl bg-rose-950/60 border border-rose-800 text-rose-300 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-rose-400" />
          <span>{statusMessage}</span>
        </div>
      )}

      {/* Action buttons */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-slate-400">
          Showing <strong className="text-slate-200">{projectsList.length}</strong> active projects
        </span>
        <button
          onClick={handleCreateNew}
          className="px-3.5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs flex items-center gap-1.5 shadow-lg shadow-cyan-600/20 transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>New Project</span>
        </button>
      </div>

      {/* Projects Table / Card List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectsList.map((p) => (
          <div
            key={p.id}
            className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-400 border border-slate-700 uppercase font-semibold">
                  {p.category}
                </span>

                <button
                  onClick={() => handleToggleFeatured(p)}
                  className={`text-[10px] font-bold px-2 py-0.5 rounded border transition-colors ${
                    p.featured
                      ? 'bg-amber-950/50 border-amber-800 text-amber-300'
                      : 'bg-slate-950 border-slate-800 text-slate-500 hover:text-slate-300'
                  }`}
                  title="Click to toggle featured status on portfolio home"
                >
                  {p.featured ? '★ Featured' : '☆ Standard'}
                </button>
              </div>

              <h3 className="font-bold text-sm text-slate-100">{p.title}</h3>
              <p className="text-xs text-slate-400 line-clamp-2">{p.subtitle}</p>

              <div className="flex flex-wrap gap-1 pt-1">
                {p.tags.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800"
                  >
                    {t}
                  </span>
                ))}
                {p.tags.length > 3 && (
                  <span className="text-[9px] font-mono text-slate-500">
                    +{p.tags.length - 3}
                  </span>
                )}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 hover:text-emerald-200"
                    title="Live URL"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {p.githubUrl && (
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white"
                    title="GitHub Repository"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              <button
                onClick={() => handleEdit(p)}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 font-semibold text-xs flex items-center gap-1.5 transition-colors"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Project Modal */}
      {editingProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl my-8 max-h-[85vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-xl font-bold text-slate-100">
                  Edit Project Details
                </h2>
                <p className="text-xs text-slate-400">
                  ID: <span className="font-mono text-cyan-400">{editingProject.id}</span>
                </p>
              </div>
              <button
                onClick={() => setEditingProject(null)}
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSave} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1 text-left">
                  <label className="font-semibold text-slate-300">Project Title</label>
                  <input
                    type="text"
                    required
                    value={editingProject.title}
                    onChange={(e) =>
                      setEditingProject({ ...editingProject, title: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div className="space-y-1 text-left">
                  <label className="font-semibold text-slate-300">Category</label>
                  <select
                    value={editingProject.category}
                    onChange={(e: any) =>
                      setEditingProject({ ...editingProject, category: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-cyan-500"
                  >
                    <option value="Full-Stack">Full-Stack</option>
                    <option value="Networking">Networking</option>
                    <option value="AI & ML">AI & ML</option>
                    <option value="Backend & Systems">Backend & Systems</option>
                    <option value="Mobile">Mobile</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1 text-left">
                <label className="font-semibold text-slate-300">Subtitle / Tagline</label>
                <input
                  type="text"
                  required
                  value={editingProject.subtitle}
                  onChange={(e) =>
                    setEditingProject({ ...editingProject, subtitle: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="space-y-1 text-left">
                <label className="font-semibold text-slate-300">Short Summary Description</label>
                <textarea
                  rows={3}
                  required
                  value={editingProject.description}
                  onChange={(e) =>
                    setEditingProject({ ...editingProject, description: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-cyan-500 resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1 text-left">
                  <label className="font-semibold text-slate-300">Live Demo URL</label>
                  <input
                    type="url"
                    placeholder="https://app.example.com"
                    value={editingProject.liveUrl || ''}
                    onChange={(e) =>
                      setEditingProject({ ...editingProject, liveUrl: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div className="space-y-1 text-left">
                  <label className="font-semibold text-slate-300">GitHub Repository URL</label>
                  <input
                    type="url"
                    placeholder="https://github.com/..."
                    value={editingProject.githubUrl || ''}
                    onChange={(e) =>
                      setEditingProject({ ...editingProject, githubUrl: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div className="space-y-1 text-left">
                <label className="font-semibold text-slate-300">
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  value={editingProject.tags.join(', ')}
                  onChange={(e) =>
                    setEditingProject({
                      ...editingProject,
                      tags: e.target.value.split(',').map((t) => t.trim()).filter(Boolean),
                    })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-cyan-500"
                />
              </div>

              {/* Case Study Section Preview & Edit */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <h4 className="font-bold text-cyan-400 uppercase tracking-wider text-[11px]">
                  Case Study Highlights
                </h4>

                <div className="space-y-1 text-left">
                  <label className="font-semibold text-slate-300">System Overview</label>
                  <textarea
                    rows={2}
                    value={editingProject.caseStudy.overview}
                    onChange={(e) =>
                      setEditingProject({
                        ...editingProject,
                        caseStudy: { ...editingProject.caseStudy, overview: e.target.value },
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-cyan-500 resize-none"
                  />
                </div>

                <div className="space-y-1 text-left">
                  <label className="font-semibold text-slate-300">Engineering Problem</label>
                  <textarea
                    rows={2}
                    value={editingProject.caseStudy.problem}
                    onChange={(e) =>
                      setEditingProject({
                        ...editingProject,
                        caseStudy: { ...editingProject.caseStudy, problem: e.target.value },
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-cyan-500 resize-none"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingProject(null)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold flex items-center gap-1.5 shadow-lg shadow-cyan-600/25"
                >
                  <Save className="w-4 h-4" />
                  <span>{isSaving ? 'Saving to Database...' : 'Save Changes'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
