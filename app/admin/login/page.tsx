import { Metadata } from 'next';
import { Lock, ShieldAlert, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { loginAction } from '../actions';

export const metadata: Metadata = {
  title: 'Admin Authentication | Valentin Zirimwabagabo',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const error = typeof params.error === 'string' ? params.error : undefined;
  const next = typeof params.next === 'string' ? params.next : '/admin';

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-md p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex p-3 rounded-2xl bg-cyan-950/70 border border-cyan-800/60 text-cyan-400 mb-2">
            <Lock className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-100">
            Portfolio Administration
          </h1>
          <p className="text-xs text-slate-400">
            Restricted access portal. Multi-layered whitelist protection active.
          </p>
        </div>

        {error && (
          <div className="p-3.5 rounded-xl bg-rose-950/50 border border-rose-800/80 text-rose-300 text-xs flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 flex-shrink-0 mt-0.5 text-rose-400" />
            <span>{error}</span>
          </div>
        )}

        <form action={loginAction} className="space-y-4">
          <input type="hidden" name="next" value={next} />

          <div className="space-y-1.5 text-left">
            <label className="text-xs font-semibold text-slate-300">
              Admin Email
            </label>
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="admin@valentinz.me"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
            />
          </div>

          <div className="space-y-1.5 text-left">
            <label className="text-xs font-semibold text-slate-300">
              Secure Password
            </label>
            <input
              name="password"
              type="password"
              required
              autoComplete="current-password"
              placeholder="••••••••••••"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs tracking-wide shadow-lg shadow-cyan-600/25 transition-all duration-200 mt-2"
          >
            Authenticate Session
          </button>
        </form>

        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
          <Link
            href="/"
            className="hover:text-cyan-400 transition-colors flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Portfolio</span>
          </Link>
          <span className="text-[10px] font-mono text-slate-600">
            RLS Enforcement: Active
          </span>
        </div>
      </div>
    </div>
  );
}
