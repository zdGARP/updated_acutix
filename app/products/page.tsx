import ProductSection from '@/components/ProductSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Industry-Focused Software Products | Acutix',
    description: "Explore Acutix products for fertility care, laboratory management, fitness, motor insurance, packaging businesses and clinics.",
};

export default function ProductsPage() {
    return (
        <main>
            <ProductSection />
        </main>
    );
}
