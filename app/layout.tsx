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
  metadataBase: new URL('https://valentinzirimwabagabo.valentinz.me'),
  title: {
    default: 'Valentin Zirimwabagabo | Software Engineer & Data Science Professional',
    template: '%s | Valentin Zirimwabagabo',
  },
  description:
    'Portfolio of Valentin Zirimwabagabo — Software Engineer, Data Science Professional & Network Infrastructure Engineer based in Nairobi, Kenya. BS Applied Computer Technology, USIU-Africa. Mastercard Foundation Scholar. Builder of RadiusFlow (FreeRADIUS + FastAPI), TalentHub, and ML systems. Experienced in Python, Next.js, TypeScript, PostgreSQL, and Network Security.',
  keywords: [
    // Branded
    'Valentin Zirimwabagabo',
    'Valentin Zirimwabagabo portfolio',
    'Valentin Zirimwabagabo software engineer',
    'Valentin Zirimwabagabo AI engineer',
    // Specialty + Location
    'AI Engineer Nairobi',
    'Machine Learning Engineer Kenya',
    'Data Scientist Nairobi',
    'Software Engineer Nairobi Kenya',
    'Network Infrastructure Engineer Kenya',
    'Full-Stack Developer Nairobi',
    'Backend Developer Kenya',
    // Tech Stack
    'FreeRADIUS FastAPI developer',
    'FreeRADIUS management platform',
    'RadiusFlow',
    'Python backend specialist',
    'Next.js TypeScript engineer',
    'FastAPI PostgreSQL developer',
    'React Next.js full-stack',
    'RADIUS AAA network engineer',
    'MikroTik network configuration',
    // AI / Data
    'scikit-learn machine learning',
    'PCA KNN classification',
    'data science professional',
    'applied machine learning engineer',
    // Education
    'USIU-Africa Applied Computer Technology',
    'USIU-Africa graduate',
    'Mastercard Foundation Scholar AI',
    'Mastercard Foundation Scholar Kenya',
    'University of Tokyo data science',
    'Matsuo-Iwasawa Laboratory',
  ],
  authors: [{ name: 'Valentin Zirimwabagabo', url: 'https://valentinzirimwabagabo.valentinz.me' }],
  creator: 'Valentin Zirimwabagabo',
  publisher: 'Valentin Zirimwabagabo',
  alternates: {
    canonical: 'https://valentinzirimwabagabo.valentinz.me',
  },
  openGraph: {
    title: 'Valentin Zirimwabagabo | Software Engineer & Data Science Professional',
    description:
      'Building robust software, secure networks, and intelligent systems. Software Engineer & Data Science Professional based in Nairobi, Kenya. USIU-Africa graduate | Mastercard Foundation Scholar | University of Tokyo Data Science.',
    url: 'https://valentinzirimwabagabo.valentinz.me',
    siteName: 'Valentin Zirimwabagabo — Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Valentin Zirimwabagabo | Software Engineer & Data Science Professional',
    description:
      'Software Engineer & Data Science Professional | Network Infrastructure | AI/ML | Nairobi, Kenya.',
    creator: '@valentinziri',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
    name: 'Valentin Zirimwabagabo',
    url: 'https://valentinzirimwabagabo.valentinz.me',
    jobTitle: 'Software Engineer & Data Science Professional',
    description:
      'Software Engineer, Data Science Professional and Network Infrastructure Engineer based in Nairobi, Kenya. USIU-Africa graduate and Mastercard Foundation Scholar.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nairobi',
      addressCountry: 'KE',
    },
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'United States International University-Africa (USIU-Africa)',
        address: { '@type': 'PostalAddress', addressLocality: 'Nairobi', addressCountry: 'KE' },
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Matsuo-Iwasawa Laboratory, The University of Tokyo',
        address: { '@type': 'PostalAddress', addressLocality: 'Tokyo', addressCountry: 'JP' },
      },
    ],
    award: 'Mastercard Foundation Scholar',
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Data Science',
      'Software Engineering',
      'Network Infrastructure',
      'FreeRADIUS',
      'FastAPI',
      'Next.js',
      'Python',
      'PostgreSQL',
      'TCP/IP',
      'Network Security',
      'Cryptography',
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Data Science Training Program',
        credentialCategory: 'Certificate',
        recognizedBy: { '@type': 'Organization', name: 'The University of Tokyo' },
        dateCreated: '2026-08-31',
      },
    ],
    sameAs: [
      'https://github.com/vzirimwabagabo',
      'https://www.linkedin.com/in/valentin-zirimwabagabo/',
    ],
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
