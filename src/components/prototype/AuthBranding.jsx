import { motion } from "framer-motion";
import { IoLeaf } from "react-icons/io5";

export default function AuthBranding({ title = "Honea", description }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.15 }}
      className="relative hidden overflow-hidden bg-gradient-to-br from-brand via-green-500 to-brand-pale p-10 md:flex md:flex-col md:justify-between"
    >
      <motion.div
        animate={{ rotate: [0, 10, 0], y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <IoLeaf className="h-12 w-12 text-white/80" />
      </motion.div>
      <div>
        <h2 className="text-3xl font-extrabold text-white">{title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-white/90">{description}</p>
      </div>
      <div className="flex gap-2">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            className="h-2 w-2 rounded-full bg-white/60"
          />
        ))}
      </div>
      <div
        className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-2xl"
        aria-hidden="true"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="pointer-events-none absolute top-1/3 right-10 h-24 w-24 rounded-full bg-white/10 blur-xl"
        aria-hidden="true"
      />
    </motion.div>
  );
}
