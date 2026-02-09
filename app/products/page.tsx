import ProductSection from '@/components/ProductSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Products | Acutix',
    description: 'Explore our modern software solutions including Gym Pad, Clinic Management Software, and ASCAS Fertility Center Management System.',
};

export default function ProductsPage() {
    return (
        <main>
            <ProductSection />
        </main>
    );
}
