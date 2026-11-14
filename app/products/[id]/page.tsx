import type { Metadata } from 'next';
import { ProductDetail } from '@/components/ProductSection';

export const metadata: Metadata = {
  title: 'Acutix Product Details | Acutix',
  description: 'Explore Acutix product capabilities, workflows, and technology.',
};

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <ProductDetail productId={id} />;
}
