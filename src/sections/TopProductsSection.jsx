import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import { ProductSkeleton } from "../components/LoadingSkeleton";
import { usePrototype } from "../context/PrototypeContext";

export default function TopProductsSection() {
  const [loading, setLoading] = useState(true);
  const { filteredProducts, categoryFilter, clearCategoryFilter } = usePrototype();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="shop" className="bg-brand-soft/30 py-16 sm:py-20 lg:py-24" aria-labelledby="products-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <h2 id="products-heading" className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Top Products
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              {categoryFilter
                ? `Filter aktif: ${categoryFilter}`
                : "Handpicked organic favorites loved by our community"}
            </p>
          </div>
          {categoryFilter && (
            <button
              type="button"
              onClick={clearCategoryFilter}
              className="w-fit rounded-full border border-brand px-4 py-2 text-sm font-medium text-brand hover:bg-brand-soft"
            >
              Reset Filter
            </button>
          )}
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => (
                <ProductSkeleton key={i} />
              ))
            : filteredProducts.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
        </div>
      </div>
    </section>
  );
}
