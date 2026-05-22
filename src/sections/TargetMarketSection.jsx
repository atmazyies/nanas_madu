import { motion } from "framer-motion";
import boothImage from "../assets/booth_kemitraan.png";

const partnerLogos = [
  { name: "Alfamart", text: "Alfamart", style: "text-red-600 font-bold tracking-tighter" },
  { name: "Indomaret", text: "Indomaret", style: "text-blue-600 font-bold tracking-tight" },
  { name: "Lotte Mart", text: "Lotte Mart", style: "text-red-500 font-bold" },
  { name: "Super Indo", text: "Super Indo", style: "text-red-600 font-black" },
  { name: "Hyatt Hotels", text: "HYATT", style: "text-gray-800 font-serif tracking-widest" },
  { name: "Boutique Cafe", text: "LOCAL CAFE", style: "text-gray-600 font-medium tracking-widest" },
];

export default function TargetMarketSection() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Berkembang Bersama <span className="text-golden-light">Mitra Kami</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Dari stand jus lokal yang estetik hingga rak ritel modern dan sajian hotel berbintang, kami siap mensuplai kebutuhan Nanas Madu premium Anda.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 items-center gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-2">
          {/* Left Visual: Booth Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={boothImage}
                alt="Stand Jus Honea Otentik"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            {/* Glassmorphism floating badge */}
            <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-6 shadow-[var(--shadow-card)] sm:-bottom-8 sm:-right-8">
              <p className="text-3xl font-extrabold text-brand">200+</p>
              <p className="text-sm font-medium text-gray-600">Mitra Franchise & Stand</p>
            </div>
          </motion.div>

          {/* Right Visual: Retail Logos Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center lg:pl-8"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center lg:text-left">
              Dipercaya oleh Brand Ritel & Hospitality Terkemuka
            </h3>
            
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
              {partnerLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass flex h-24 items-center justify-center rounded-2xl bg-white/60 shadow-sm transition-all hover:shadow-md"
                >
                  <span className={`text-lg sm:text-xl ${logo.style}`}>{logo.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center lg:text-left">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand shadow-sm ring-1 ring-inset ring-brand hover:bg-brand-soft transition-colors"
              >
                Gabung Jadi Mitra B2B Kami
                <span>→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
