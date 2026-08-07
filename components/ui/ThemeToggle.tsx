'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9 rounded-lg bg-slate-800/40 border border-slate-700/40" />;
  }

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle Light/Dark Theme"
      className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 text-slate-300 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-slate-700 transition-transform duration-300 -rotate-12 hover:rotate-0" />
      )}
    </button>
  );
}
