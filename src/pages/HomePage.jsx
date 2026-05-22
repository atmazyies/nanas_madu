import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../sections/HeroSection";
import UVPSection from "../sections/UVPSection";
import TargetMarketSection from "../sections/TargetMarketSection";
import BenefitsSection from "../sections/BenefitsSection";
import HotCategoriesSection from "../sections/HotCategoriesSection";
import PromoBannerSection from "../sections/PromoBannerSection";
import PromotionStrategySection from "../sections/PromotionStrategySection";
import TopProductsSection from "../sections/TopProductsSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import CTASection from "../sections/CTASection";
import ContactSection from "../sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <UVPSection />
        <TargetMarketSection />
        <BenefitsSection />
        <HotCategoriesSection />
        <PromoBannerSection />
        <PromotionStrategySection />
        <TopProductsSection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
