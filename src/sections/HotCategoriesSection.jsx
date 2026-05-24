import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { categories } from "../data/categories";
import CategoryCard from "../components/CategoryCard";
import { CategorySkeleton } from "../components/LoadingSkeleton";
import { Link } from "react-router-dom";

export default function HotCategoriesSection() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="categories" className="pt-16 pb-4 sm:pt-20 sm:pb-6 lg:pt-24 lg:pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex items-end justify-between"
        >
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Kategori Terpopuler
          </h2>
          <Link
            to="/produk"
            className="hidden text-sm font-bold text-brand transition-colors hover:text-green-600 sm:block"
          >
            Lihat Semua →
          </Link>
        </motion.div>

        <div className="-mx-4 overflow-x-auto px-4 pb-4 scrollbar-hide sm:-mx-6 sm:px-6 lg:overflow-visible">
          <div className="flex gap-4 sm:gap-6 lg:grid lg:grid-cols-6 lg:gap-5">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <CategorySkeleton key={i} />
                ))
              : categories.map((cat, i) => (
                  <CategoryCard key={cat.id} category={cat} index={i} />
                ))}
          </div>
        </div>
      </div>
    </section>
  );
}
