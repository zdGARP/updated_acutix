import type { Metadata } from 'next';
import { ProductDetail } from '@/components/ProductSection';

const defaultMetadata: Metadata = {
  title: 'Acutix Product Details | Acutix',
  description: 'Explore Acutix product capabilities, workflows, and technology.',
};

const productMetadata: Record<string, Metadata> = {
  'gym-pad': {
    title: 'GymPad: Complete Gym & Fitness Management Software | Acutix',
    description: 'GymPad connects member registration, trainer scheduling, session bookings, personalized workout and diet planning, and membership administration.',
  },
  'clinic-cms': {
    title: 'AcuCare: Complete Hospital Management Software | Acutix',
    description: 'AcuCare connects hospital administration, patient records, appointments, clinical workflows, pharmacy, laboratory, inpatient operations, and financial management.',
  },
  ferticare: {
    title: 'FertiCare: Complete Fertility Centre Management Software | Acutix',
    description: 'FertiCare connects fertility centre administration, IVF labs, inpatient wards, operation theatres, treatment workflows, and multi-branch finances.',
  },
  aculabs: {
    title: 'AcuLabs Laboratory Management Software | Acutix',
    description: 'AcuLabs connects patient registration, test orders, sample tracking, result entry, report verification, and billing through one laboratory platform.',
  },
  'box-care': {
    title: 'Box Care Packaging Management Platform | Acutix',
    description: 'Box Care brings packaging selection, custom sizing, brand printing, order placement, and fulfilment together in one digital storefront.',
  },
  'thaai-seyali': {
    title: 'Thaai Seyali: Fertility Care Companion App | Acutix',
    description: 'Thaai Seyali helps patients organize fertility journeys, appointments, medications, health records and clinic updates in one companion application.',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  return productMetadata[id] ?? defaultMetadata;
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <ProductDetail productId={id} />;
}
