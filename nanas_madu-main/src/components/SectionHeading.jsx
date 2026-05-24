import { motion } from "framer-motion";

export default function SectionHeading({
  title,
  subtitle,
  align = "left",
  id,
}) {
  const alignClass =
    align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.header
      id={id}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-10 max-w-2xl ${alignClass}`}
    >
      <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-sm leading-relaxed text-gray-500 sm:text-base">
          {subtitle}
        </p>
      )}
    </motion.header>
  );
}
