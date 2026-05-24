import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-white via-brand-pale/25 to-white backdrop-blur-md">
      {/* Premium Glassmorphic Loader Container */}
      <div className="relative flex flex-col items-center justify-center p-8 rounded-3xl border border-white/60 bg-white/40 shadow-2xl backdrop-blur-lg max-w-xs w-full text-center">
        {/* Glowing Decorative Backgrounds */}
        <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-brand-light/10 blur-xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-golden-light/10 blur-xl pointer-events-none" />

        {/* Animated Spinner with Dual Color Borders */}
        <div className="relative w-16 h-16 mb-4">
          {/* External Pulsing Glow Ring */}
          <div className="absolute inset-0 rounded-full border-[3px] border-brand-light/20 animate-ping opacity-75" />
          
          {/* The Spinning Core */}
          <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-brand border-r-golden animate-spin duration-1000" />
          
          {/* Inner Accent Ring */}
          <div className="absolute inset-2 rounded-full border border-brand-pale/50 animate-pulse" />
        </div>

        {/* Brand Text & Indicator */}
        <span className="text-xs font-bold uppercase tracking-widest text-brand-dark mb-1">
          Honea Pemalang
        </span>
        <p className="text-xs text-gray-500 font-medium tracking-wide animate-pulse">
          Memuat halaman premium...
        </p>
      </div>
    </div>
  );
}
