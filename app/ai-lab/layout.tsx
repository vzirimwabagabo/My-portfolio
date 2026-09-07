import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Lab & Interactive Machine Learning Explorations',
  description:
    'Interactive machine learning demonstrations, dimensionality reduction visualizers, and experimental AI pipelines by Valentin Zirimwabagabo.',
  alternates: {
    canonical: '/ai-lab',
  },
  openGraph: {
    title: 'AI Lab | Valentin Zirimwabagabo',
    description:
      'Interactive machine learning demonstrations, dimensionality reduction visualizers, and experimental AI pipelines.',
    url: 'https://valentinz.me/ai-lab',
  },
};

export default function AiLabLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
