import { motion } from "framer-motion";
import PageBanner from "../components/PageBanner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BenefitsSection from "../sections/BenefitsSection";
import TargetMarketSection from "../sections/TargetMarketSection";
import TestimonialsSection from "../sections/TestimonialsSection";

const uvpPoints = [
  {
    title: "Segar Langsung dari Kebun",
    description: "Nanas dipanen pada tingkat kemanisan optimal dan dikirim dalam 24 jam. Tanpa penyimpanan lama, tanpa bahan pengawet.",
    icon: "🍍",
  },
  {
    title: "Pilihan Camilan Sehat Kekinian",
    description: "Produk olahan kami bebas gula tambahan dan bahan kimia — cocok untuk generasi muda yang sadar kesehatan.",
    icon: "🌿",
  },
  {
    title: "Harga Kompetitif, Kualitas Premium",
    description: "Kemitraan langsung dengan petani Pemalang memungkinkan kami menawarkan harga terjangkau tanpa mengorbankan kualitas.",
    icon: "💎",
  },
  {
    title: "Identitas Lokal yang Khas",
    description: "Rasa dan aroma Nanas Madu Pemalang tidak bisa ditiru — menjadi keunggulan unik yang membedakan kami dari kompetitor.",
    icon: "🏆",
  },
];

export default function UVPPage() {
  return (
    <>
      <Navbar />
      <PageBanner
        title="Keunggulan Kami"
        subtitle="Sajian Asli Nanas Madu Pemalang: Segar Langsung dari Kebun & Pilihan Camilan Sehat Kekinian Tanpa Rasa Bersalah."
        breadcrumbs={[{ label: "UVP" }]}
      />

      <main className="bg-surface">
        {/* UVP Cards */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-2xl text-center mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Unique Value <span className="text-gradient-brand font-extrabold">Propositions</span>
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Apa yang membuat Honea berbeda dan lebih baik
              </p>
            </motion.div>

            <div className="grid gap-8 sm:grid-cols-2">
              {uvpPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="glass rounded-3xl p-8 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-hover)]"
                >
                  <span className="text-4xl mb-4 block">{point.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Re-use existing sections */}
        <BenefitsSection />
        <TargetMarketSection />
        <TestimonialsSection />
      </main>

      <Footer />
    </>
  );
}
