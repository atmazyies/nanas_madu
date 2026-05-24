import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineSearch, HiOutlineAdjustments } from "react-icons/hi";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { ProductSkeleton } from "../components/LoadingSkeleton";
import { usePrototype } from "../context/PrototypeContext";

export default function TopProductsSection({ limit, showSearch = !limit }) {
  const [loading, setLoading] = useState(true);
  const { filteredProducts, categoryFilter, clearCategoryFilter, filterByCategory } = usePrototype();

  const [localSearch, setLocalSearch] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [minRating, setMinRating] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const displayProducts = (limit ? filteredProducts.slice(0, limit) : filteredProducts)
    .filter((p) => {
      // 1. Search Query
      if (localSearch) {
        const q = localSearch.toLowerCase();
        const matchesSearch = p.title.toLowerCase().includes(q) || p.description?.toLowerCase().includes(q);
        if (!matchesSearch) return false;
      }
      // 2. Min Price
      if (minPrice !== "" && p.newPrice < Number(minPrice)) return false;
      // 3. Max Price
      if (maxPrice !== "" && p.newPrice > Number(maxPrice)) return false;
      // 4. Min Rating
      if (minRating > 0 && p.rating < minRating) return false;
      
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.newPrice - b.newPrice;
      if (sortBy === "price-desc") return b.newPrice - a.newPrice;
      if (sortBy === "reviews") return (b.reviewCount || 0) - (a.reviewCount || 0);
      if (sortBy === "sold") return (b.soldCount || 0) - (a.soldCount || 0);
      if (sortBy === "updated") return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      return 0;
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

        {/* Unified Search & Main Controls Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 flex flex-col lg:flex-row items-stretch lg:items-center gap-4 bg-white p-4 rounded-3xl shadow-[var(--shadow-soft)] border border-brand-soft/60"
        >
          {/* Search Input */}
          <div className="relative flex-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <HiOutlineSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full rounded-2xl border-0 py-3.5 pl-11 pr-4 text-gray-900 bg-brand-soft/20 placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-brand sm:text-sm transition-all focus:outline-none"
              placeholder="Cari produk nanas..."
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
            />
          </div>

          {/* Quick Sort & Filter Toggler */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            {/* Quick Sort Dropdown */}
            <div className="relative flex-1 sm:flex-none">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="block w-full sm:w-[200px] rounded-2xl border-0 py-3.5 pl-4 pr-10 text-gray-700 bg-brand-soft/20 focus:bg-white focus:ring-2 focus:ring-brand sm:text-sm font-semibold transition-all appearance-none cursor-pointer focus:outline-none"
              >
                <option value="default">Urutkan: Default</option>
                <option value="price-asc">Harga: Terendah</option>
                <option value="price-desc">Harga: Tertinggi</option>
                <option value="reviews">Ulasan: Terbanyak</option>
                <option value="sold">Terbanyak Dibeli</option>
                <option value="updated">Terbaru Diupdate</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Filter Toggle Button */}
            {!limit && (
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className={`flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-bold border transition-all cursor-pointer shadow-sm ${
                  showAdvanced || minPrice || maxPrice
                    ? "bg-brand text-white border-brand shadow-brand/30"
                    : "bg-white text-gray-600 border-gray-200 hover:border-brand-soft hover:bg-brand-soft hover:text-brand"
                }`}
                aria-expanded={showAdvanced}
              >
                <HiOutlineAdjustments className="h-5 w-5" />
                <span>Filter</span>
                {(minPrice || maxPrice) && (
                  <span className="h-2.5 w-2.5 rounded-full bg-golden border border-white" />
                )}
              </button>
            )}
          </div>
        </motion.div>

        {/* Category Pills (Touch-scrollable with scrollbar hidden) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex flex-row overflow-x-auto scrollbar-hide py-2 gap-3 w-full border-b border-gray-100 pb-4">
            <button
              onClick={clearCategoryFilter}
              className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-bold transition-all shadow-sm border cursor-pointer ${
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
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-bold transition-all shadow-sm border cursor-pointer ${
                  categoryFilter?.toLowerCase() === cat.value.toLowerCase()
                    ? "bg-brand text-white border-brand shadow-brand/30"
                    : "bg-white text-gray-600 border-gray-200 hover:border-brand-soft hover:bg-brand-soft hover:text-brand"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Advanced Filters Drawer */}
        <AnimatePresence>
          {!limit && showAdvanced && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginBottom: 0 }}
              animate={{ height: "auto", opacity: 1, marginBottom: 32 }}
              exit={{ height: 0, opacity: 0, marginBottom: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="rounded-3xl border border-brand-soft bg-brand-soft/20 p-6 shadow-inner">
                <h3 className="text-xs font-bold text-brand-dark uppercase tracking-wider mb-4">Filter Harga Lanjutan</h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  {/* Min Price */}
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Harga Minimum</label>
                    <div className="relative rounded-2xl shadow-sm bg-white">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                        <span className="text-gray-400 text-sm font-semibold">Rp</span>
                      </div>
                      <input
                        type="number"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        placeholder="0"
                        className="block w-full rounded-2xl border-0 py-3.5 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-brand sm:text-sm focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Max Price */}
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Harga Maksimum</label>
                    <div className="relative rounded-2xl shadow-sm bg-white">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                        <span className="text-gray-400 text-sm font-semibold">Rp</span>
                      </div>
                      <input
                        type="number"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        placeholder="Maks"
                        className="block w-full rounded-2xl border-0 py-3.5 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-brand sm:text-sm focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Reset Button */}
                  <div className="flex items-end">
                    <button
                      onClick={() => {
                        setMinPrice("");
                        setMaxPrice("");
                      }}
                      className="w-full rounded-2xl bg-white hover:bg-red-50 text-gray-600 hover:text-red-600 px-5 py-3.5 text-sm font-bold border border-gray-200 hover:border-red-200 transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
                    >
                      Buka Semua Harga / Reset
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

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
