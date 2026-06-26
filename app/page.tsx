'use client';
import FAQSection from '@/components/FAQSection';
import HeroProductScroll from '@/components/HeroProductScroll';

export default function Home() {
  return (
    <main>
      <HeroProductScroll />
      <div className="relative z-20 bg-[#07090e]">
        <FAQSection />
      </div>
    </main>
  );
}

