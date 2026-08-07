import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { personalInfo } from '@/lib/data';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Valentin Zirimwabagabo | AI Engineer & Systems Specialist',
  description:
    'Personal portfolio & technical platform of Valentin Zirimwabagabo — AI Engineer (Aspiring), Network Infrastructure Engineer, and Full-Stack Software Developer. BS in Applied Computer Technology graduate from USIU-Africa and Mastercard Foundation Scholar.',
  keywords: [
    'Valentin Zirimwabagabo',
    'AI Engineer',
    'Machine Learning Engineer',
    'Network Infrastructure Engineer',
    'Full-Stack Developer',
    'FreeRADIUS',
    'FastAPI',
    'Next.js',
    'Mastercard Foundation Scholar',
    'USIU-Africa',
    'RadiusFlow',
    'Nairobi Kenya',
    'Burundi',
  ],
  authors: [{ name: 'Valentin Zirimwabagabo', url: 'https://valentinzirimwabagabo.com' }],
  creator: 'Valentin Zirimwabagabo',
  openGraph: {
    title: 'Valentin Zirimwabagabo | AI Engineer & Systems Specialist',
    description:
      'I design intelligent software systems that bridge AI, networking, and scalable backend engineering.',
    url: 'https://valentinzirimwabagabo.com',
    siteName: 'Valentin Zirimwabagabo Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Valentin Zirimwabagabo | AI Engineer & Systems Specialist',
    description:
      'AI Engineer (Aspiring) | Network Infrastructure Engineer | Full-Stack Software Developer.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    alumniOf: personalInfo.university,
    award: personalInfo.scholarship,
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Network Infrastructure',
      'FreeRADIUS',
      'FastAPI',
      'Next.js',
      'PostgreSQL',
      'TCP/IP',
    ],
    sameAs: [personalInfo.github, personalInfo.linkedin],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${roboto.variable} ${roboto.className} bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased selection:bg-blue-500/30 transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
