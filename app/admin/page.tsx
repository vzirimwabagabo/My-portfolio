import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { 
  ShieldCheck, 
  LogOut, 
  FolderKanban, 
  Users, 
  GraduationCap, 
  UserCheck, 
  ExternalLink,
  Plus,
  RefreshCw,
  KeyRound
} from 'lucide-react';
import { logoutAction } from './actions';
import { getPortfolioProjects, getPortfolioReferees, getPortfolioPersonalInfo } from '@/lib/supabase-portfolio';
import { AdminProjectsManager } from './AdminProjectsManager';

export const metadata = {
  title: 'Portfolio Control Center | Admin',
  robots: { index: false, follow: false },
};

export default async function AdminDashboardPage() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/admin/login');
  }

  // Load current projects & referees
  const [projects, referees, personalInfo] = await Promise.all([
    getPortfolioProjects(),
    getPortfolioReferees(),
    getPortfolioPersonalInfo()
  ]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Top Navigation */}
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-950/70 border border-cyan-800/60 text-cyan-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm tracking-tight text-slate-100">
                  Portfolio Operations
                </span>
                <span className="text-[10px] font-mono uppercase bg-emerald-950/70 text-emerald-400 border border-emerald-800/60 px-2 py-0.5 rounded-full font-semibold">
                  Secure Admin
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono truncate max-w-xs">
                {user.email}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="px-3.5 py-1.5 text-xs font-semibold rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>View Live Portfolio</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <form action={logoutAction}>
              <button
                type="submit"
                className="px-3.5 py-1.5 text-xs font-semibold rounded-xl bg-rose-950/60 hover:bg-rose-900/80 border border-rose-800/70 text-rose-300 transition-colors flex items-center gap-1.5"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out</span>
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Main Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* KPI Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-medium uppercase tracking-wider">Total Projects</span>
              <FolderKanban className="w-4 h-4 text-cyan-400" />
            </div>
            <p className="text-2xl font-bold text-slate-100">{projects.length}</p>
            <p className="text-[11px] text-slate-400">
              {projects.filter(p => p.featured).length} Featured on Homepage
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-medium uppercase tracking-wider">Academic Referees</span>
              <Users className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-2xl font-bold text-slate-100">{referees.length}</p>
            <p className="text-[11px] text-slate-400">Active recommendations</p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-medium uppercase tracking-wider">Degree Status</span>
              <GraduationCap className="w-4 h-4 text-blue-400" />
            </div>
            <p className="text-2xl font-bold text-slate-100">3.368 GPA</p>
            <p className="text-[11px] text-slate-400">B.S. Applied Computer Tech</p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-medium uppercase tracking-wider">Security Engine</span>
              <KeyRound className="w-4 h-4 text-amber-400" />
            </div>
            <p className="text-2xl font-bold text-emerald-400">RLS Strict</p>
            <p className="text-[11px] text-slate-400">Admin Whitelist Verified</p>
          </div>
        </div>

        {/* Live Projects Management Component */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <FolderKanban className="w-5 h-5 text-cyan-400" />
                <span>Projects & Case Studies Manager</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Add, update, or toggle featured status for portfolio projects. Edits reflect immediately.
              </p>
            </div>
          </div>

          <AdminProjectsManager initialProjects={projects} />
        </section>

      </main>
    </div>
  );
}
