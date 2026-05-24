import { motion } from "framer-motion";
import { IoLeaf } from "react-icons/io5";

const leaves = [
  { id: 1, top: "12%", left: "8%", size: 28, delay: 0, rotate: -15, duration: 5 },
  { id: 2, top: "25%", right: "6%", size: 22, delay: 0.5, rotate: 20, duration: 6 },
  { id: 3, bottom: "30%", left: "4%", size: 18, delay: 1, rotate: 10, duration: 4.5 },
  { id: 4, top: "55%", right: "12%", size: 24, delay: 1.5, rotate: -25, duration: 5.5 },
  { id: 5, bottom: "15%", right: "20%", size: 20, delay: 0.8, rotate: 15, duration: 4 },
  { id: 6, top: "40%", left: "15%", size: 16, delay: 2, rotate: -10, duration: 7 },
];

export default function FloatingLeaves({ className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute text-brand-light/50"
          style={{
            top: leaf.top,
            left: leaf.left,
            right: leaf.right,
            bottom: leaf.bottom,
          }}
          animate={{
            y: [0, -20, -8, -18, 0],
            x: [0, 8, -4, 6, 0],
            rotate: [leaf.rotate, leaf.rotate + 15, leaf.rotate - 5, leaf.rotate + 10, leaf.rotate],
            opacity: [0.4, 0.7, 0.5, 0.8, 0.4],
          }}
          transition={{
            duration: leaf.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: leaf.delay,
          }}
        >
          <IoLeaf size={leaf.size} />
        </motion.div>
      ))}
    </div>
  );
}
