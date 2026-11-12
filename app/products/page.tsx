import ProductSection from '@/components/ProductSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Industry-Focused Software Products | Acutix',
    description: "Explore Acutix products for fertility and women's healthcare, fitness, motor insurance, packaging manufacturers and general clinics.",
};

export default function ProductsPage() {
    return (
        <main>
            <ProductSection />
        </main>
    );
}
