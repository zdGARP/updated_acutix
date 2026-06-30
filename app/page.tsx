'use client';
import FAQSection from '@/components/FAQSection';
import HeroProductScroll from '@/components/HeroProductScroll';
import EcosystemSection from '@/components/EcosystemSection';

export default function Home() {
  return (
    <main>
      <EcosystemSection />
      <HeroProductScroll />
      <div className="relative z-20 bg-[#07090e]">
        <FAQSection />
      </div>
    </main>
  );
}


