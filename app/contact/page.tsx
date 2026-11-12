import type { Metadata } from 'next';
import ContactSection from '@/components/ContactSection';

interface ContactPageProps {
  searchParams: Promise<{
    product?: string;
    request?: string;
  }>;
}

export const metadata: Metadata = {
  title: "Let's Talk About Your Next Project | Contact Acutix Soft",
  description:
    'Have a software requirement, a question about our products, or an idea for collaboration? Get in touch with Acutix Soft LLP.',
};

export default async function Contact({ searchParams }: ContactPageProps) {
  const { product, request } = await searchParams;
  const productContext = [product, request].filter(Boolean).join(': ');

  return (
    <main>
      <ContactSection productContext={productContext} />
    </main>
  );
}
