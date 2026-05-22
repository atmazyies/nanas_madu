import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaMountain, FaTintSlash, FaLeaf, FaClock, FaSeedling } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";
import PageBanner from "../components/PageBanner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function SejarahNanasPage() {
  const geographicalFactors = [
    {
      title: "Tanah Vulkanik Lereng Slamet",
      description: "Perkebunan Pemalang berada di ketinggian optimal lereng Gunung Slamet. Mineral sulfur dan debu vulkanik purba memperkaya tanah dengan zat hara mikro yang memicu pembentukan rasa manis gurih nanas madu secara alami.",
      icon: <FaMountain className="h-8 w-8 text-amber-500" />,
    },
    {
      title: "Kadar Kemanisan 'Sweet Queen'",
      description: "Varietas lokal unggul Sweet Queen khas Pemalang memiliki kadar kemanisan (Brix level) alami yang sangat tinggi. Karakteristik manisnya legit menyerupai madu murni tanpa rasa gatal atau getir di lidah.",
      icon: <HiOutlineSparkles className="h-8 w-8 text-amber-500" />,
    },
    {
      title: "Tekstur Padat & Kadar Air Rendah",
      description: "Curah hujan musiman yang pas dan drainase tanah berpori lereng gunung membuat buah nanas Pemalang tumbuh lebih padat, renyah, berserat halus, serta memiliki kadar air yang pas dan tidak becek.",
      icon: <FaTintSlash className="h-8 w-8 text-amber-500" />,
    },
  ];

  const heritageSteps = [
    {
      title: "Pemilihan Tunas Unggul Tradisional",
      description: "Para petani secara manual menyeleksi tunas samping (sucker) terbaik dari tanaman induk yang sehat. Metode seleksi tradisional ini diwariskan turun-temurun untuk menjamin kemurnian genetika rasa manis nanas madu asli Pemalang tetap terjaga.",
      icon: <FaSeedling className="h-6 w-6 text-brand" />,
      highlight: "Tahap Seleksi",
    },
    {
      title: "18 Bulan Pertumbuhan Alami",
      description: "Nanas madu dibiarkan tumbuh lambat secara sabar selama 12 hingga 18 bulan di bawah sinar matahari tropis lereng gunung. Tanpa rekayasa kimiawi atau hormon pemaksa tumbuh cepat, memastikan metabolisme buah membentuk nutrisi matang sempurna.",
      icon: <FaClock className="h-6 w-6 text-brand" />,
      highlight: "Pematangan Alami",
    },
    {
      title: "Panen Selektif di Pohon (95% Ripeness)",
      description: "Buah hanya dipanen dengan tangan satu per satu ketika tingkat kematangan di pohon telah mencapai minimal 95% (ditandai dengan warna kulit buah kuning keemasan dari pangkal hingga tengah). Ini memastikan Enzim Bromelain aktif dan kadar gula alami berada pada puncaknya.",
      icon: <FaLeaf className="h-6 w-6 text-brand" />,
      highlight: "Kearifan Panen",
    },
  ];

  return (
    <>
      <Navbar />
      <PageBanner
        title="Sejarah Nanas Madu Pemalang"
        subtitle="Menelusuri warisan agrikultur legendaris, kearifan lokal petani lereng Gunung Slamet, dan asal-usul kelezatan buah kuning emas."
        breadcrumbs={[
          { label: "Tentang Kami", href: "/about" },
          { label: "Sejarah Nanas Madu" },
        ]}
      />

      <main className="bg-surface py-20 sm:py-28 relative overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-brand-soft blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-golden-light blur-3xl" />
        </div>

        {/* Section 1: Sejarah & Asal-usul */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="space-y-6"
            >
              <span className="inline-block rounded-full bg-gradient-to-r from-brand-pale to-brand-soft px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-dark border border-brand-light/10 shadow-sm">
                Warisan Budaya Agraria
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Asal-Usul & Riwayat <br />
                <span className="text-gradient-brand">Nanas Madu Pemalang</span>
              </h2>
              <div className="space-y-4 text-base text-gray-600 leading-relaxed">
                <p>
                  Kemasyhuran Nanas Madu Pemalang berawal dari Kecamatan Belik, sebuah kawasan perbukitan subur di bagian selatan Kabupaten Pemalang. Diperkenalkan secara lokal puluhan tahun lalu, varietas buah ini menemukan ekosistem tumbuhnya yang paling ideal di tanah vulkanik lereng Gunung Slamet yang kaya mineral belerang alami.
                </p>
                <p>
                  Nama "Nanas Madu" disematkan oleh para sesepuh tani dan pedagang terdahulu karena buah dari wilayah ini memiliki keunikan yang tidak dijumpai pada nanas daerah lain: daging buahnya yang berwarna kuning keemasan berkilau memancarkan aroma wangi yang sangat semerbak, dengan rasa manis pekat yang legit layaknya tetesan madu murni.
                </p>
                <p>
                  Di masa lampau, nanas ini menjadi buah kehormatan yang disajikan untuk menyambut tamu-tamu agung kerajaan dan pejabat yang melintasi jalur pegunungan Pemalang-Purwokerto. Kelezatan alaminya menyebar cepat melalui cerita dari mulut ke mulut, mengukuhkan posisinya sebagai ikon buah tropis termanis di nusantara.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=800&h=600&fit=crop"
                  alt="Nanas Madu Pemalang Segar"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-6 shadow-[var(--shadow-card)] max-w-xs border border-white/20">
                <p className="text-xs font-bold text-brand uppercase tracking-wider mb-1">Ciri Khas Fisik</p>
                <p className="text-sm font-semibold text-gray-800 leading-relaxed">
                  "Ukurannya cenderung mungil bulat, mata buahnya menonjol, dengan mahkota daun yang lebat hijau segar."
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Faktor Terroir */}
        <section className="mt-32 bg-white py-20 sm:py-28 relative overflow-hidden">
          {/* Ambient glowing spotlight for terroir cards */}
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 h-96 w-96 rounded-full bg-golden-light/15 blur-[110px] pointer-events-none" />
          <div className="absolute top-1/3 right-1/3 -translate-y-1/2 h-96 w-96 rounded-full bg-brand-light/15 blur-[110px] pointer-events-none" />

          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mx-auto max-w-2xl text-center mb-16"
            >
              <span className="inline-block rounded-full bg-gradient-to-r from-golden-light/20 to-golden/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-dark mb-4">
                Faktor Terroir
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Rahasia Keunggulan Alami
              </h2>
              <p className="mt-4 text-base text-gray-600">
                Mengapa varietas ini tidak bisa ditiru rasanya di wilayah lain? Berikut adalah perpaduan unik alam lereng Gunung Slamet yang membentuk keistimewaannya.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-8 md:grid-cols-3 relative z-10"
            >
              {geographicalFactors.map((factor, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="glass rounded-3xl p-8 border border-white/60 shadow-[var(--shadow-card)]"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 shadow-inner">
                    {factor.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{factor.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{factor.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Section 3: Warisan Budidaya Tradisional */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-32 relative z-10">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-5 space-y-6"
            >
              <span className="inline-block rounded-full bg-gradient-to-r from-brand-pale to-brand-soft px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-dark border border-brand-light/10 shadow-sm">
                Kearifan Tradisional
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Melestarikan Cara Tani <span className="text-gradient-brand">Turun-Temurun</span>
              </h2>
              <p className="text-base leading-relaxed text-gray-600">
                Kualitas rasa legendaris nanas madu Honea tidak lepas dari dedikasi tinggi para petani lokal Pemalang yang tetap mempertahankan kearifan budidaya tradisional. Kami menolak metode instan demi melestarikan keaslian rasa buah yang ramah lingkungan.
              </p>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-soft to-brand-pale border border-brand-light/20 flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm text-brand font-bold text-xl">
                  🚜
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Tanpa Zat Pematang Buatan</h4>
                  <p className="text-xs text-gray-600 mt-1">
                    Kami mendampingi petani untuk tidak menggunakan hormon etilen kimia karbit demi mempercepat panen secara paksa, sehingga rasa manis legit yang terbentuk murni dari fotosintesis alami matahari lereng gunung.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-7 grid gap-6 relative"
            >
              {/* Ambient spotlights directly behind the heritage cards */}
              <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-72 w-72 rounded-full bg-brand-light/15 blur-[90px] pointer-events-none" />
              
              {heritageSteps.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="glass group relative flex flex-col sm:flex-row gap-5 rounded-3xl p-6 border border-white/60 shadow-[var(--shadow-card)] z-10"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-soft/60 text-brand shadow-inner">
                    {item.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className="text-xs font-bold text-brand uppercase tracking-wider">{item.highlight}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Section 4: Preserving the Legacy closing banner */}
        <section className="mx-auto max-w-5xl px-6 lg:px-8 mt-32 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="rounded-3xl bg-gradient-to-br from-brand-dark via-brand to-brand-dark p-8 sm:p-16 text-center relative overflow-hidden shadow-xl"
          >
            <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-golden-light/10 blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-brand-light/10 blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Menjaga Warisan Nanas Pemalang Tetap Hidup
              </h2>
              <p className="text-base text-brand-pale max-w-xl mx-auto leading-relaxed">
                Setiap kali Anda menikmati produk Honea, Anda turut mendukung keberlangsungan hidup ratusan keluarga petani tradisional di Pemalang, melestarikan warisan agrikultur lereng Slamet, serta menjaga keseimbangan alam demi generasi masa depan.
              </p>
              <div className="pt-4 flex justify-center">
                <Link
                  to="/shop"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-golden-light to-golden px-10 py-4 text-sm font-bold text-brand-dark shadow-lg transition-transform hover:scale-105"
                >
                  Rasakan Keaslian Manisnya
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
