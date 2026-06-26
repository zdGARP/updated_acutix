'use client';
import WhyAcutix from '@/components/WhyAcutix';
import WhoWeAre from '@/components/WhoWeAre';
import WhatWeDo from '@/components/WhatWeDo';
import FAQSection from '@/components/FAQSection';
import HeroProductScroll from '@/components/HeroProductScroll';

export default function Home() {
  return (
    <main>
      <HeroProductScroll />
      <div className="relative z-20 bg-white dark:bg-[#181c24]">
        <WhyAcutix />
        <WhoWeAre />
        <WhatWeDo />
        <FAQSection />
      </div>
    </main>
  );
}

