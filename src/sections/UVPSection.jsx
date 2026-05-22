import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function UVPSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-brand-soft/35 to-white pt-20 pb-8 sm:pt-24 sm:pb-12">
      {/* Decorative background blobs - Expanded and shifted directly behind the glass card */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-1/4 h-96 w-96 rounded-full bg-brand-light/25 blur-[100px]" />
        <div className="absolute bottom-10 right-1/4 h-[400px] w-[400px] rounded-full bg-golden-light/25 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl border border-white/60 px-8 py-12 sm:px-12 sm:py-16 shadow-[var(--shadow-card)] text-center relative overflow-hidden"
        >
          {/* Internal ambient glowing circles */}
          <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-brand-light/10 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-golden-light/10 blur-2xl pointer-events-none" />

          <div className="relative z-10">
            <span className="inline-block rounded-full bg-gradient-to-r from-brand-pale to-brand-soft px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-dark mb-6 border border-brand-light/10 shadow-sm">
              Cerita Honea
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl mb-6 leading-tight">
              Membawa Manisnya Pemalang <br className="hidden sm:block" />
              <span className="text-gradient-brand mt-2 inline-block font-extrabold">Langsung dari Kebun Binaan</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-10 leading-relaxed max-w-4xl mx-auto">
              Berawal dari tekad melestarikan pertanian lokal lereng Gunung Slamet, Honea menghadirkan keaslian Nanas Madu terbaik dari Kecamatan Belik. Dirawat tulus oleh kelompok tani tradisional secara organik, dipanen manual saat fajar kala buah matang sempurna di pohon—tanpa proses karbit kimia sintetis demi menjaga enzim alami bromelain yang menyehatkan tubuh.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-full border-2 border-brand-light/30 bg-white/40 px-10 py-3.5 text-sm font-bold text-brand shadow-sm transition-all duration-300 hover:bg-brand-dark hover:text-white hover:border-transparent hover:shadow-lg hover:scale-105"
            >
              Kisah Kami
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
