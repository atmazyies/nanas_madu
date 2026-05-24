import { motion } from "framer-motion";
import PageBanner from "../components/PageBanner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TopProductsSection from "../sections/TopProductsSection";
import { usePrototype } from "../context/PrototypeContext";
import { categories } from "../data/categories";
import CategoryCard from "../components/CategoryCard";

export default function ProdukPage() {
  const { categoryFilter, clearCategoryFilter } = usePrototype();

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
        <section className="py-12 sm:py-16 bg-white border-b border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Kategori <span className="text-gradient-brand font-extrabold">Terpopuler</span>
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Pilih kategori di bawah untuk memfilter katalog produk secara instan
              </p>
              {categoryFilter && (
                <button
                  onClick={clearCategoryFilter}
                  className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand transition-colors hover:bg-brand/20"
                >
                  Tampilkan Semua Produk (Clear Filter) ✕
                </button>
              )}
            </motion.div>

            <div className="-mx-4 overflow-x-auto px-4 pb-4 scrollbar-hide sm:-mx-6 sm:px-6 lg:overflow-visible">
              <div className="flex justify-center gap-4 sm:gap-6 lg:grid lg:grid-cols-6 lg:gap-5">
                {categories.map((cat, i) => (
                  <CategoryCard key={cat.id} category={cat} index={i} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <TopProductsSection />
      </main>

      <Footer />
    </>
  );
}
