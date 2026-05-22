import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FaHeartbeat, FaShieldAlt, FaSun } from "react-icons/fa";

const benefits = [
  {
    id: 1,
    title: "Kaya Vitamin C",
    description: "Meningkatkan daya tahan tubuh dan menjaga kelembapan kulit secara alami dari dalam.",
    footnote: "Sumber: Carr & Maggini, Nutrients, 2019",
    icon: FaSun,
  },
  {
    id: 2,
    title: "Enzim Bromelain",
    description: "Membantu melancarkan pencernaan dan mengurangi peradangan setelah beraktivitas berat.",
    footnote: "Sumber: Rathnavelu et al., BioMed Rep, 2021",
    icon: FaHeartbeat,
  },
  {
    id: 3,
    title: "Tinggi Antioksidan",
    description: "Melawan radikal bebas dan memperlambat penuaan dini, menjadikan tubuh lebih bugar.",
    footnote: "Sumber: Setiawan et al., J. Agric Food, 2022",
    icon: FaShieldAlt,
  },
];

export default function BenefitsSection() {
  const location = useLocation();
  const isUvpPage = location.pathname === "/uvp";
  const [flippedCards, setFlippedCards] = useState({});
  const [hoveredCards, setHoveredCards] = useState({});

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const setHovered = (id, isHovered) => {
    // Jangan aktifkan hover di perangkat touch/mobile (mencegah bug "sticky hover")
    if (window.matchMedia("(pointer: coarse)").matches) return;
    
    setHoveredCards((prev) => ({
      ...prev,
      [id]: isHovered,
    }));
  };

  return (
    <section className="relative overflow-hidden bg-white pt-4 pb-20 sm:pt-6 sm:pb-28">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-golden-pale/50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-brand-pale/50 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Kebaikan Alam di <span className="text-gradient-brand font-extrabold">Setiap Gigitan</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Bukan sekadar camilan lezat, Nanas Madu menyimpan segudang manfaat kesehatan yang membuat Anda segar bugar sepanjang hari.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-lg sm:mt-20 lg:max-w-none lg:px-12 relative">
          {/* Ambient spotlights directly behind the cards to maximize the glassmorphism pop */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-72 w-72 rounded-full bg-brand-light/20 blur-[90px] pointer-events-none" />
          <div className="absolute top-1/3 right-1/4 -translate-y-1/2 h-72 w-72 rounded-full bg-golden-light/20 blur-[90px] pointer-events-none" />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 relative z-10">
            {benefits.map((benefit, index) => {
              const isFlipped = !!(flippedCards[benefit.id] || hoveredCards[benefit.id]);
              return (
                <motion.div
                  key={benefit.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  className="group relative h-72 w-full perspective-1000 cursor-pointer select-none"
                  style={{ perspective: "1000px" }}
                  onClick={() => toggleFlip(benefit.id)}
                  onMouseEnter={() => setHovered(benefit.id, true)}
                  onMouseLeave={() => setHovered(benefit.id, false)}
                >
                  {/* Flipping Container - Stateful rotation on click/tap + Hover rotation on desktop */}
                  <motion.div
                    className="relative h-full w-full rounded-3xl"
                    style={{ transformStyle: "preserve-3d" }}
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    {/* Front Side */}
                    <div
                      className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl glass border border-white/40 p-8 shadow-[var(--shadow-card)] hover:border-brand-light/30 transition-all duration-300 backface-hidden"
                      style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                    >
                      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand-soft to-brand-pale text-brand shadow-md ring-4 ring-white/60">
                        <benefit.icon className="h-10 w-10" />
                      </div>
                      <h3 className="text-xl font-extrabold text-gray-900">{benefit.title}</h3>
                      <p className="mt-3 text-sm text-brand font-semibold">Ketuk atau Arahkan kursor untuk info →</p>
                    </div>

                    {/* Back Side */}
                    <div
                      className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-brand-dark via-brand to-golden p-8 shadow-[var(--shadow-hover)] text-center backface-hidden"
                      style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/25 text-white shadow-sm ring-1 ring-white/10">
                        <benefit.icon className="h-7 w-7" />
                      </div>
                      <h3 className="text-xl font-extrabold text-white mb-2">{benefit.title}</h3>
                      <p className="text-brand-pale font-medium leading-relaxed text-sm mb-4">
                        {benefit.description}
                      </p>
                      <span className="text-[10px] italic text-amber-300 font-bold bg-black/20 px-2.5 py-1 rounded-full border border-white/5">
                        {benefit.footnote}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {!isUvpPage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 flex justify-center"
          >
            <Link
              to="/uvp#manfaat-kesehatan"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brand/20 bg-brand-soft/20 px-8 py-3.5 text-sm font-bold text-brand shadow-sm hover:bg-brand hover:text-white hover:shadow-md transition-all duration-300"
            >
              Lihat Manfaat Lengkap & Jurnal Ilmiah &rarr;
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
