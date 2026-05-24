import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiOutlineSearch } from "react-icons/hi";
import ProductCard from "../components/ProductCard";
import { ProductSkeleton } from "../components/LoadingSkeleton";
import { usePrototype } from "../context/PrototypeContext";

export default function TopProductsSection({ limit, showSearch = !limit }) {
  const [loading, setLoading] = useState(true);
  const { filteredProducts, categoryFilter, clearCategoryFilter, filterByCategory } = usePrototype();

  const [localSearch, setLocalSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const displayProducts = (limit ? filteredProducts.slice(0, limit) : filteredProducts).filter((p) => {
    if (!localSearch) return true;
    const q = localSearch.toLowerCase();
    return p.title.toLowerCase().includes(q) || p.description?.toLowerCase().includes(q);
  });

  return (
    <section id="shop" className="bg-brand-soft/30 py-16 sm:py-20 lg:py-24" aria-labelledby="products-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <h2 id="products-heading" className="text-2xl font-bold text-gray-900 sm:text-3xl">
              {limit ? "Top Products" : "Katalog Produk"}
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              {categoryFilter
                ? `Menampilkan kategori: ${categoryFilter}`
                : limit 
                  ? "Pilihan favorit dari kebun kami" 
                  : "Eksplorasi semua produk Nanas Madu berkualitas kami"}
            </p>
          </div>
        </motion.div>

        {/* Filters and Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          {/* Category Pills */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={clearCategoryFilter}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all shadow-sm border ${
                !categoryFilter 
                  ? "bg-brand text-white border-brand shadow-brand/30" 
                  : "bg-white text-gray-600 border-gray-200 hover:border-brand-soft hover:bg-brand-soft hover:text-brand"
              }`}
            >
              Semua
            </button>
            {[
              { label: "Buah Segar", value: "Fresh Fruit" },
              { label: "Jus Nanas", value: "Juice" },
              { label: "Camilan", value: "Snacks" },
              { label: "Pantry", value: "Pantry" },
              { label: "Suplemen", value: "Supplements" },
              { label: "Hampers", value: "Hampers" }
            ].map((cat) => (
              <button
                key={cat.value}
                onClick={() => filterByCategory(cat.value)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all shadow-sm border ${
                  categoryFilter?.toLowerCase() === cat.value.toLowerCase()
                    ? "bg-brand text-white border-brand shadow-brand/30"
                    : "bg-white text-gray-600 border-gray-200 hover:border-brand-soft hover:bg-brand-soft hover:text-brand"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          {showSearch && (
            <div className="relative w-full md:w-72 shrink-0">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <HiOutlineSearch className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                className="block w-full rounded-full border-0 py-3 pl-11 pr-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6 transition-all"
                placeholder="Cari produk nanas..."
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
              />
            </div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {loading
            ? Array.from({ length: limit || 8 }).map((_, i) => (
                <ProductSkeleton key={i} />
              ))
            : displayProducts.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
        </div>
      </div>
    </section>
  );
}
