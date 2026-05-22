import { motion } from "framer-motion";
import {
  HiOutlineSun,
  HiOutlineHeart,
  HiOutlineTruck,
  HiOutlineMap,
} from "react-icons/hi";
import PageBanner from "../components/PageBanner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScientificReferencesSection from "../sections/ScientificReferencesSection";
import CertificationsSection from "../sections/CertificationsSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import petaniSunsetImg from "../assets/petani_sunset.png";

const uvpPoints = [
  {
    title: "Dipetik Subuh, Langsung Kirim",
    description: "Nanas madu pilihan dipetik manual saat fajar ketika kematangan alami optimal mencapai 95%. Tanpa proses karbit kimia sintetis, langsung dibersihkan dan dikirim dalam 24 jam untuk mengunci kesegaran dan rasa manis legit alami.",
    icon: HiOutlineSun,
    iconColor: "text-amber-600 bg-amber-500/10",
  },
  {
    title: "Nyemil Enak Tapi Tetap Sehat",
    description: "Nikmati kelezatan nanas renyah tanpa rasa bersalah. Seluruh camilan olahan kami bebas tambahan gula tebu, tanpa pengawet sulfur, dan diolah suhu rendah untuk menjaga serat serta keaktifan enzim bromelain alami.",
    icon: HiOutlineHeart,
    iconColor: "text-emerald-600 bg-emerald-500/10",
  },
  {
    title: "Aman Kirim Ke Luar Kota",
    description: "Buah segar dibungkus jaring busa tebal dalam kardus berventilasi khusus pelindung benturan. Produk olahan dikemas vacuum seal ganda, memastikan kesegaran dan cita rasa madu tetap utuh hingga ke depan pintu Anda.",
    icon: HiOutlineTruck,
    iconColor: "text-blue-600 bg-blue-500/10",
  },
  {
    title: "Keunikan Rasa Gunung Slamet",
    description: "Tumbuh di ketinggian 700 mdpl lereng Gunung Slamet, buah kami menyerap mineral belerang vulkanik alami. Menghasilkan rasa manis pekat seperti madu hutan dan daging buah kuning renyah khas yang tidak bisa ditiru.",
    icon: HiOutlineMap,
    iconColor: "text-yellow-650 bg-yellow-500/10",
  },
];

export default function UVPPage() {
  return (
    <>
      <Navbar />
      <PageBanner
        title="Keunggulan Kami"
        subtitle="Menjaga Keaslian Rasa Nanas Madu Pemalang Melalui Kemitraan Adil, Budidaya Alami Tanpa Karbit, dan Dedikasi Tulus Petani Lokal Belik."
        breadcrumbs={[{ label: "UVP" }]}
      />

      <main className="bg-surface relative overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-brand-light/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-golden-light/10 blur-[130px] pointer-events-none" />

        {/* UVP Showcase Section */}
        <section className="py-20 sm:py-28 relative z-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-3xl text-center mb-16 sm:mb-20"
            >
              <span className="inline-block rounded-full bg-gradient-to-r from-brand-pale to-brand-soft px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-dark mb-4 border border-brand-light/10 shadow-sm">
                Nilai Ketulusan Kami
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-4">
                Janji Kualitas dari <span className="text-gradient-brand font-extrabold">Bumi Pemalang</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Mengapa Honea berbeda? Kami tidak sekadar berjualan produk, kami membagikan dedikasi tulus dari para petani lereng Gunung Slamet langsung ke meja makan Anda.
              </p>
            </motion.div>

            {/* Split Grid Layout */}
            <div className="grid gap-12 lg:grid-cols-12 items-stretch">
              {/* Left Column: Farmer Showcase Image */}
              <motion.div
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-5 relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/40 shadow-[var(--shadow-card)] group min-h-[480px] lg:min-h-full aspect-[4/5] sm:aspect-square lg:aspect-auto"
              >
                <img
                  src={petaniSunsetImg}
                  alt="Pak Tarno - Petani Binaan Honea di Pemalang"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 select-none"
                  loading="lazy"
                />
                
                {/* Farmer Quote Glass Card */}
                <div className="absolute bottom-5 left-5 right-5 bg-brand-dark/90 rounded-[2rem] p-5 sm:p-6 text-left border border-white/10 backdrop-blur-xl shadow-2xl">
                  <span className="inline-block rounded-full bg-emerald-500/20 px-3 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-emerald-300 mb-2.5 border border-emerald-500/20 shadow-sm">
                    Kisah Nyata dari Belik
                  </span>
                  <p className="text-xs sm:text-sm italic text-emerald-50/95 font-medium leading-relaxed mb-4">
                    "Kami rawat setiap tunas nanas madu dengan ketulusan selama 18 bulan penuh, membiarkannya matang secara alami di pohon di bawah terik lereng Slamet agar manisnya jujur, berkah, dan membawa manfaat nyata."
                  </p>
                  <div className="flex items-center gap-2 border-t border-white/10 pt-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <p className="text-[10px] font-extrabold text-golden-light uppercase tracking-wider">Pak Tarno, Ketua Kelompok Tani Binaan Honea</p>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Dynamic Authentic Promises */}
              <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
                {uvpPoints.map((point, i) => {
                  const Icon = point.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      whileHover={{ y: -4, scale: 1.01 }}
                      className="glass rounded-3xl p-6 sm:p-8 border border-white/50 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-hover)] text-left flex flex-col justify-between"
                    >
                      <div>
                        {/* Icon Badge */}
                        <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${point.iconColor} shadow-inner`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2.5">{point.title}</h3>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{point.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Re-use existing sections */}
        <ScientificReferencesSection />
        <CertificationsSection />
        <TestimonialsSection />
      </main>

      <Footer />
    </>
  );
}
