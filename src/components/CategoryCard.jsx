import { motion } from "framer-motion";
import LazyImage from "./LazyImage";
import { usePrototype } from "../context/PrototypeContext";

export default function CategoryCard({ category, index = 0 }) {
  const { filterByCategory, categoryFilter, clearCategoryFilter } = usePrototype();
  const isActive = categoryFilter === category.title;

  const handleClick = () => {
    if (isActive) {
      clearCategoryFilter();
    } else {
      filterByCategory(category.title);
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: -10, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
      className={`group min-w-[140px] shrink-0 cursor-pointer rounded-[20px] bg-white p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:shadow-[var(--shadow-hover)] sm:min-w-[160px] ${
        isActive ? "ring-2 ring-brand bg-green-50/20 scale-[1.02] shadow-[var(--shadow-hover)]" : ""
      }`}
    >
      <div className={`mx-auto h-20 w-20 overflow-hidden rounded-full border-4 transition-all duration-300 group-hover:scale-105 ${
        isActive ? "border-brand bg-brand-soft" : "border-brand-soft bg-brand-soft/50"
      }`}>
        <LazyImage
          src={category.image}
          alt={category.title}
          className="h-full w-full object-cover"
          wrapperClassName="h-full w-full"
        />
      </div>
      <h3 className={`mt-4 text-center text-sm font-bold transition-colors ${isActive ? "text-brand" : "text-gray-800"}`}>
        {category.title}
      </h3>
      <p className="mt-1 text-center text-xs text-gray-400">{category.products}</p>
    </motion.article>
  );
}
