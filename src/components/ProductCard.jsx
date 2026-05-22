import { motion } from "framer-motion";
import { HiOutlineHeart, HiStar } from "react-icons/hi";
import { IoBagAdd } from "react-icons/io5";
import LazyImage from "./LazyImage";
import { usePrototype } from "../context/PrototypeContext";
import { formatRupiah } from "../utils/format";

export default function ProductCard({ product, index = 0 }) {
  const { addToCart, toggleWishlist, isWishlisted, openProductDetail } = usePrototype();
  const wishlisted = isWishlisted(product.id);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white p-4 shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-card)]"
    >
      <div
        className="relative cursor-pointer overflow-hidden rounded-2xl bg-brand-soft/30"
        onClick={() => openProductDetail(product)}
        onKeyDown={(e) => e.key === "Enter" && openProductDetail(product)}
        role="button"
        tabIndex={0}
        aria-label={`Lihat detail ${product.title}`}
      >
        {product.discount && (
          <span className="absolute top-3 left-3 z-10 rounded-full gradient-gold px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-sm ring-1 ring-white/10">
            -{product.discount}%
          </span>
        )}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-500 shadow-sm transition-all duration-300 hover:bg-white hover:text-golden"
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <HiOutlineHeart
            className={`h-5 w-5 transition-colors ${wishlisted ? "fill-golden text-golden" : ""}`}
          />
        </button>
        <div className="overflow-hidden">
          <LazyImage
            src={product.image}
            alt={product.title}
            className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
            wrapperClassName="w-full"
            skeletonClassName="aspect-square w-full"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/50 to-transparent py-4 text-center text-xs font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          Lihat Detail →
        </div>
      </div>

      <div className="mt-4 flex flex-1 flex-col">
        <h3
          className="line-clamp-2 cursor-pointer text-sm font-semibold text-gray-800 transition-colors hover:text-brand"
          onClick={() => openProductDetail(product)}
        >
          {product.title}
        </h3>

        <div className="mt-2 flex items-center gap-1">
          <HiStar className="h-4 w-4 text-amber-400" />
          <span className="text-xs font-medium text-gray-600">
            {product.rating}
          </span>
          <span className="text-xs text-gray-400">· {product.category}</span>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-xs text-gray-400 line-through">
              {formatRupiah(product.oldPrice)}
            </span>
            <span className="text-lg font-extrabold text-brand-dark">
              {formatRupiah(product.newPrice)}
            </span>
          </div>
          <motion.button
            type="button"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full gradient-brand text-white shadow-md transition-all duration-300 hover:brightness-115"
            aria-label={`Add ${product.title} to cart`}
          >
            <IoBagAdd className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}
