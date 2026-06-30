import { Metadata } from 'next';
import CollaborationsSection from '@/components/CollaborationsSection';

export const metadata: Metadata = {
  title: 'Industry-Academia Ecosystems & Incubator | Acutix Soft LLP',
  description: 'Acutix Soft LLP bridges the gap between commercial SaaS development and hands-on developer training. Explore our academic alliances, SaaS case studies, and mentor network.',
};

export default function CollaborationsPage() {
  return (
    <main>
      <CollaborationsSection />
    </main>
  );
}
