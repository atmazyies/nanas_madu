import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/6281234567890"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      whileTap={{ scale: 0.9 }}
      className="group fixed bottom-6 right-6 z-50 flex h-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)] transition-all duration-300 border border-emerald-400/20 px-3.5 hover:px-5"
      aria-label="Chat WhatsApp"
    >
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold tracking-wide transition-all duration-300 ease-in-out group-hover:max-w-[150px] group-hover:mr-2">
        Customer Service
      </span>
      <FaWhatsapp className="h-7 w-7 transition-transform duration-300 group-hover:rotate-12" />
    </motion.a>
  );
}

