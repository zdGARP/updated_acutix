'use client';
import FAQSection from '@/components/FAQSection';
import HeroProductScroll from '@/components/HeroProductScroll';
import EcosystemSection from '@/components/EcosystemSection';
import styles from './home.module.css';

export default function Home() {
  return (
    <div className={`${styles.landing} landing-page`}>
      <EcosystemSection />
      <HeroProductScroll />
      <div className="relative z-20 bg-[#07090e]">
        <FAQSection />
      </div>
    </div>
  );
}
