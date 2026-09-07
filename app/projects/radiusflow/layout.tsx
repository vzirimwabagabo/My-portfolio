import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RadiusFlow | FreeRADIUS Network Access Management Platform',
  description:
    'Deep architectural overview and case study of RadiusFlow — FreeRADIUS AAA access control decoupled with FastAPI, PostgreSQL, and MikroTik RouterOS.',
  alternates: {
    canonical: '/projects/radiusflow',
  },
  openGraph: {
    title: 'RadiusFlow | FreeRADIUS Network Access Management Platform',
    description:
      'Deep architectural overview and case study of RadiusFlow — FreeRADIUS AAA access control decoupled with FastAPI, PostgreSQL, and MikroTik RouterOS.',
    url: 'https://valentinz.me/projects/radiusflow',
  },
};

export default function RadiusFlowLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
