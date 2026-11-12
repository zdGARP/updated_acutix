import type { Metadata } from 'next';
import AboutSection from '@/components/AboutSection';

export const metadata: Metadata = {
  title: 'About Us | Acutix Soft LLP',
  description:
    'Building digital solutions through technology, practical problem-solving, and collaboration. Learn about Acutix Soft LLP, our mission, vision, values, and community initiatives.',
};

export default function About() {
  return (
    <main>
      <AboutSection />
    </main>
  );
}

