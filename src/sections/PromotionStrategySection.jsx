import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import petaniImage from "../assets/petani_sunset.png";

export default function PromotionStrategySection() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-950 py-20 sm:py-28 overflow-hidden">
      {/* Premium background decorative shapes */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start text-left"
          >
            <span className="inline-block rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 text-xs font-bold tracking-widest text-amber-300 uppercase mb-6 shadow-sm">
              🏆 100% Pemberdayaan Lokal
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight mb-6">
              Dari Tangan Petani Terbaik, <br className="hidden sm:block" />
              <span className="text-gradient-gold">Hadir untuk Anda</span>
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-emerald-100/80 mb-8">
              Setiap buah Honea adalah wujud keringat, dedikasi mendalam, dan senyuman tulus para petani lokal Pemalang. Kami membangun rantai pasok beretika yang secara langsung meningkatkan kesejahteraan petani binaan, melestarikan ekosistem tanah Gunung Slamet, sekaligus menjamin kualitas nanas madu termanis dan tersegar sampai di meja makan Anda.
            </p>
            <Link
              to="/about#petani"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-golden-light to-golden text-white px-8 py-3.5 text-sm font-bold shadow-md hover:from-golden hover:to-golden-dark transition-all scale-100 hover:scale-105"
            >
              Selengkapnya tentang Petani Kami →
            </Link>
          </motion.div>

          {/* Right Column: 1:1 Square Farmer Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Glowing Backdrop Circle */}
            <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-amber-500 to-emerald-500 opacity-20 blur-lg" />
            
            <div className="relative aspect-square max-w-md mx-auto w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10 bg-white/5 backdrop-blur-md">
              <motion.img
                initial={{ scale: 1.05 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                src={petaniImage}
                alt="Petani Nanas Pemalang"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
