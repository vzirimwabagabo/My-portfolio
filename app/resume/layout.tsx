import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume & Curriculum Vitae',
  description:
    'Curriculum Vitae of Valentin Zirimwabagabo — Software Engineer, Data Science Professional & Network Infrastructure Engineer. BSc Applied Computer Technology, USIU-Africa. Mastercard Foundation Scholar.',
  alternates: {
    canonical: '/resume',
  },
  openGraph: {
    title: 'Resume & Curriculum Vitae | Valentin Zirimwabagabo',
    description:
      'Curriculum Vitae of Valentin Zirimwabagabo. Software Engineering, Data Science, and Network Infrastructure credentials.',
    url: 'https://valentinz.me/resume',
  },
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
