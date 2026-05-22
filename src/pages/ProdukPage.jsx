import { motion } from "framer-motion";
import PageBanner from "../components/PageBanner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HotCategoriesSection from "../sections/HotCategoriesSection";
import TopProductsSection from "../sections/TopProductsSection";

const categories = [
  {
    title: "Nanas Madu Segar",
    description: "Buah nanas madu grade A langsung dari kebun Pemalang, dipetik saat kemanisan optimal.",
    icon: "🍍",
    color: "from-golden-light/20 to-golden-pale",
  },
  {
    title: "Olahan Nanas",
    description: "Keripik nanas, selai, dodol, jus murni, dan berbagai camilan sehat berbahan dasar nanas.",
    icon: "🥤",
    color: "from-brand-soft to-brand-pale",
  },
  {
    title: "Paket Hampers",
    description: "Paket hadiah eksklusif dengan kemasan premium — cocok untuk oleh-oleh dan hadiah spesial.",
    icon: "🎁",
    color: "from-golden-pale to-brand-soft",
  },
];

export default function ProdukPage() {
  return (
    <>
      <Navbar />
      <PageBanner
        title="Produk Kami"
        subtitle="Koleksi lengkap produk Honea — dari buah segar premium hingga olahan lezat yang menyehatkan."
        breadcrumbs={[{ label: "Produk" }]}
      />

      <main className="bg-surface">
        {/* Category Overview */}
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
                Kategori <span className="text-gradient-brand font-extrabold">Produk</span>
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Pilih kategori yang sesuai kebutuhan Anda
              </p>
            </motion.div>

            <div className="grid gap-8 sm:grid-cols-3">
              {categories.map((cat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className={`rounded-3xl bg-gradient-to-br ${cat.color} p-10 text-center shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-hover)] cursor-pointer`}
                >
                  <span className="text-5xl mb-5 block">{cat.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{cat.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{cat.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <TopProductsSection />
        <HotCategoriesSection />
      </main>

      <Footer />
    </>
  );
}
