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
import CTASection from "../sections/CTASection";
import ContactSection from "../sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="bg-surface">
        <HeroSection />

        {/* Cerita Honea Section */}
        <section className="relative py-24 bg-white overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-light/10 blur-3xl" />
            <div className="absolute top-1/2 right-0 h-96 w-96 rounded-full bg-golden-light/10 blur-[100px]" />
          </div>
          <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl mb-6">
                Cerita Honea: <br className="hidden sm:block" />
                <span className="text-gradient-brand mt-2 inline-block">Membawa Manisnya Pemalang Sejak 2018</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                Berawal dari semangat memberdayakan petani lokal, Honea kini hadir membawa kualitas nanas terbaik Pemalang ke seluruh penjuru negeri dengan standar mutu yang tak tertandingi.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full border-2 border-brand-light/30 px-10 py-3.5 text-base font-bold text-brand shadow-sm transition-all duration-300 hover:gradient-brand hover:text-white hover:border-transparent hover:shadow-lg hover:scale-105"
              >
                Kisah Kami
              </Link>
            </motion.div>
          </div>
        </section>

        <UVPSection />
        <BenefitsSection />
        <TopProductsSection limit={4} />
        <CTASection />
        <HotCategoriesSection />
        <PromotionStrategySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
