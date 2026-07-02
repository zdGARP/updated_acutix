'use client';
import HeroSection from './services/HeroSection';
import StatsSection from './services/StatsSection';
import ServicesBentoGrid from './services/ServicesBentoGrid';
import TechStackMarquee from './services/TechStackMarquee';
import Timeline from './services/Timeline';
import WhyChooseUs from './services/WhyChooseUs';
import IndustryExpertise from './services/IndustryExpertise';
import ShowcaseCarousel from './services/ShowcaseCarousel';
import Testimonials from './services/Testimonials';
import FAQ from './services/FAQ';
import FinalCTA from './services/FinalCTA';

export default function OurServices() {
  return (
    <div className="bg-gray-950 min-h-screen text-gray-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      <HeroSection />
      <StatsSection />
      <ServicesBentoGrid />
      <TechStackMarquee />
      <Timeline />
      <WhyChooseUs />
      <IndustryExpertise />
      <ShowcaseCarousel />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </div>
  );
}
