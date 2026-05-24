import { motion } from "framer-motion";
import LazyImage from "./LazyImage";
import { usePrototype } from "../context/PrototypeContext";

export default function PromoBanner({ banner }) {
  const { scrollToShop, claimPromo } = usePrototype();
  const isGreen = banner.variant === "green";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.01 }}
      className={`relative flex min-h-[220px] overflow-hidden rounded-3xl p-6 sm:min-h-[260px] sm:p-8 lg:min-h-[280px] ${
        isGreen
          ? "bg-gradient-to-br from-brand-pale via-brand-soft to-white"
          : "bg-gradient-to-br from-gray-100 via-gray-50 to-white"
      } shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-card)]`}
    >
      <div className="relative z-10 flex max-w-[55%] flex-col justify-center">
        <span
          className={`text-xs font-semibold uppercase tracking-wider ${
            isGreen ? "text-brand" : "text-gray-500"
          }`}
        >
          {banner.eyebrow}
        </span>
        <h3 className="mt-2 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
          {banner.title}
        </h3>
        {banner.subtitle && (
          <p
            className={`mt-2 text-sm ${
              isGreen ? "font-medium text-brand" : "text-gray-500"
            }`}
          >
            {banner.subtitle}
          </p>
        )}
        <motion.button
          type="button"
          onClick={() => {
            claimPromo(`${banner.eyebrow} ${banner.title}`);
            scrollToShop();
          }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className={`mt-5 inline-flex w-fit items-center rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-colors ${
            isGreen
              ? "bg-brand hover:bg-green-600"
              : "bg-gray-800 hover:bg-gray-900"
          }`}
        >
          {banner.cta}
        </motion.button>
      </div>

      <div className="absolute right-0 bottom-0 flex h-full w-[50%] items-end justify-end pr-2 sm:pr-4">
        <LazyImage
          src={banner.image}
          alt={banner.imageAlt}
          className={`object-contain drop-shadow-lg transition-transform duration-500 hover:scale-105 ${
            isGreen ? "h-[85%] max-h-[240px]" : "h-[75%] max-h-[200px]"
          }`}
          wrapperClassName="h-full w-full flex items-end justify-end"
        />
      </div>

      {!isGreen && (
        <div
          className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full bg-white/40 blur-2xl"
          aria-hidden="true"
        />
      )}
    </motion.article>
  );
}
