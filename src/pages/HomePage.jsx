import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../sections/HeroSection";
import UVPSection from "../sections/UVPSection";
import BenefitsSection from "../sections/BenefitsSection";
import HotCategoriesSection from "../sections/HotCategoriesSection";
import PromotionStrategySection from "../sections/PromotionStrategySection";
import TopProductsSection from "../sections/TopProductsSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import ContactSection from "../sections/ContactSection";
import MarketplaceSection from "../sections/MarketplaceSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="bg-surface">
        <HeroSection />
        <UVPSection />
        <BenefitsSection />
        <HotCategoriesSection />
        <TopProductsSection limit={4} />
        <MarketplaceSection />
        <PromotionStrategySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
