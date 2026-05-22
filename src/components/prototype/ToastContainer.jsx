import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineCheckCircle, HiOutlineInformationCircle, HiOutlineXCircle } from "react-icons/hi";
import { usePrototype } from "../../context/PrototypeContext";

const icons = {
  success: HiOutlineCheckCircle,
  info: HiOutlineInformationCircle,
  error: HiOutlineXCircle,
};

const styles = {
  success: "bg-brand text-white",
  info: "bg-gray-800 text-white",
  error: "bg-cta text-white",
};

export default function ToastContainer() {
  const { toasts } = usePrototype();

  return (
    <div
      className="pointer-events-none fixed right-4 bottom-4 z-[100] flex flex-col gap-2 sm:right-6 sm:bottom-6"
      aria-live="polite"
    >
      <AnimatePresence>
        {toasts.map((toast) => {
          const Icon = icons[toast.type] || icons.success;
          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className={`pointer-events-auto flex items-center gap-3 rounded-2xl px-5 py-3.5 text-sm font-medium shadow-lg ${styles[toast.type]}`}
            >
              <Icon className="h-5 w-5 shrink-0" />
              {toast.message}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
