import { motion } from "framer-motion";
import LazyImage from "./LazyImage";
import { usePrototype } from "../context/PrototypeContext";

export default function CategoryCard({ category, index = 0 }) {
  const { filterByCategory } = usePrototype();

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
      onClick={() => filterByCategory(category.title)}
      onKeyDown={(e) => e.key === "Enter" && filterByCategory(category.title)}
      className="group min-w-[140px] shrink-0 cursor-pointer rounded-[20px] bg-white p-6 shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-hover)] sm:min-w-[160px]"
    >
      <div className="mx-auto h-20 w-20 overflow-hidden rounded-full border-4 border-brand-soft bg-brand-soft/50 transition-transform duration-300 group-hover:scale-105">
        <LazyImage
          src={category.image}
          alt={category.title}
          className="h-full w-full object-cover"
          wrapperClassName="h-full w-full"
        />
      </div>
      <h3 className="mt-4 text-center text-sm font-semibold text-gray-800">
        {category.title}
      </h3>
      <p className="mt-1 text-center text-xs text-gray-400">{category.products}</p>
    </motion.article>
  );
}
