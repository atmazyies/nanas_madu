import { motion } from "framer-motion";
import { FaHeartbeat, FaShieldAlt, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";

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
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
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

        <div className="mx-auto mt-16 max-w-lg sm:mt-20 lg:max-w-none lg:px-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="group relative h-72 w-full perspective-1000"
                style={{ perspective: "1000px" }}
              >
                {/* Flipping Container - Extremely Snappy with duration-200 */}
                <motion.div
                  className="relative h-full w-full rounded-3xl transition-transform duration-200"
                  style={{ transformStyle: "preserve-3d" }}
                  whileHover={{ rotateY: 180 }}
                >
                  {/* Front Side */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl glass border border-white/40 p-8 shadow-[var(--shadow-card)] hover:border-brand-light/30 transition-all duration-300 backface-hidden"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand-soft to-brand-pale text-brand shadow-md ring-4 ring-white/60">
                      <benefit.icon className="h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-extrabold text-gray-900">{benefit.title}</h3>
                    <p className="mt-3 text-sm text-brand font-semibold group-hover:opacity-0 transition-opacity">Arahkan kursor untuk info →</p>
                  </div>

                  {/* Back Side */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-brand-dark via-brand to-golden p-8 shadow-[var(--shadow-hover)] text-center backface-hidden"
                    style={{
                      backfaceVisibility: "hidden",
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
            ))}
          </div>
        </div>

        {/* Selengkapnya CTA Button to Manfaat Kesehatan */}
        <div className="text-center mt-12 sm:mt-16">
          <Link
            to="/manfaat-kesehatan"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold bg-gradient-to-r from-brand to-brand-dark text-white hover:from-brand-dark hover:to-brand shadow-md transition-all scale-100 hover:scale-105"
          >
            Lihat Manfaat Lengkap & Jurnal Ilmiah →
          </Link>
        </div>
      </div>
    </section>
  );
}
