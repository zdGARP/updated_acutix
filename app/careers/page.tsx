import type { Metadata } from 'next';
import CareersSection from '@/components/CareersSection';

export const metadata: Metadata = {
  title: 'Build Your Future with Acutix | Careers & Internships',
  description:
    'Work on real-world technology, develop practical skills, and collaborate with people who are passionate about building useful software.',
};

export default function Careers() {
  return (
    <main>
      <CareersSection />
    </main>
  );
}
