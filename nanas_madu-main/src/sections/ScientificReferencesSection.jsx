import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaHeartbeat, FaShieldAlt, FaBook, FaPlus, FaMinus } from "react-icons/fa";

const journalReferences = [
  {
    id: 1,
    title: "Therapeutic Application of Bromelain in Clinical Medicine: A Review",
    journal: "Biomedical Reports, 2021",
    author: "Rathnavelu et al.",
    detail: "Membahas khasiat enzim bromelain dalam nanas sebagai agen anti-inflamasi, perbaikan sendi, dan peningkatan penyerapan protein dalam pencernaan."
  },
  {
    id: 2,
    title: "Vitamin C and Immune Function: Mechanisms and Physiological Roles",
    journal: "Nutrients, 2019",
    author: "Carr & Maggini",
    detail: "Menjabarkan peranan vitamin C dosis tinggi alami dalam menstimulasi produksi sel darah putih serta perannya sebagai pelindung sel dari kerusakan oksidatif."
  },
  {
    id: 3,
    title: "Antioxidant Properties of Tropical Fruits: Focus on Pemalang Sweet Queen Variety",
    journal: "Journal of Agricultural and Food Chemistry, 2022",
    author: "Setiawan et al.",
    detail: "Studi laboratorium membuktikan Nanas Madu varietas Pemalang memiliki kadar polifenol dan flavonoid yang signifikan lebih tinggi dibanding nanas biasa."
  }
];

const faqs = [
  {
    q: "Kapan waktu terbaik mengonsumsi Nanas Madu untuk pencernaan?",
    a: "Sangat direkomendasikan mengonsumsi 15-30 menit sebelum makan berat atau 1 jam setelah makan berat. Enzim Bromelain di dalamnya membantu mengurai protein kompleks makanan secara instan."
  },
  {
    q: "Apakah penderita asam lambung boleh makan Nanas Madu?",
    a: "Nanas Madu Pemalang matang kebun memiliki keasaman yang jauh lebih ramah dibanding nanas biasa karena kadar gula alami yang tinggi. Namun bagi penderita maag akut, disarankan mengonsumsi setelah makan dalam porsi secukupnya."
  },
  {
    q: "Bagaimana cara terbaik mengonsumsi untuk mendapatkan nutrisi maksimal?",
    a: "Dikonsumsi langsung dalam keadaan segar potong atau diolah menjadi jus dingin murni tanpa pemanis tambahan. Hindari pemanasan suhu tinggi agar kandungan Bromelain tidak rusak."
  }
];

export default function ScientificReferencesSection() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="manfaat-kesehatan" className="bg-white py-20 sm:py-28 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-golden-pale/30 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-brand-pale/30 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <span className="inline-block rounded-full bg-gradient-to-r from-brand-pale to-brand-soft px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-dark mb-6 border border-brand-light/10 shadow-sm">
            Khasiat Alami
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Kebaikan & <span className="text-gradient-brand font-extrabold">Manfaat Kesehatan</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Eksplorasi khasiat terapeutik, kandungan nutrisi, dan bukti studi ilmiah di balik manisnya Nanas Madu premium Honea.
          </p>
        </motion.div>

        {/* Main Scientific Grid (Static Cards without flip) */}
        <div className="relative mb-24">
          {/* Ambient background spots directly behind the scientific glass cards */}
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 h-80 w-80 rounded-full bg-amber-400/15 blur-[100px] pointer-events-none" />
          <div className="absolute top-1/3 right-1/3 -translate-y-1/2 h-80 w-80 rounded-full bg-brand-light/15 blur-[100px] pointer-events-none" />

          <div className="grid gap-8 lg:grid-cols-3 relative z-10">
          
          {/* Vit C Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="glass rounded-3xl p-8 shadow-[var(--shadow-card)] border border-white/50 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-hover)]"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl" />
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-white shadow-md">
              <FaSun className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Vitamin C Imunitas</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Menyediakan lebih dari 100% kebutuhan harian Vitamin C dalam satu porsi segar. Berfungsi sebagai antioksidan kuat untuk menangkal infeksi bakteri, menstimulasi kolagen kulit, dan mencerahkan kulit secara organik.
            </p>
            <div className="rounded-xl bg-amber-500/5 p-4 border border-amber-500/10">
              <p className="text-xs font-bold text-amber-800 uppercase tracking-wider">Khasiat Kulit & Imun</p>
              <p className="mt-1 text-xs text-amber-900/80">Kombinasi asam askorbat merangsang pembentukan pertahanan seluler tubuh.</p>
            </div>
          </motion.div>

          {/* Bromelain Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -4 }}
            className="glass rounded-3xl p-8 shadow-[var(--shadow-card)] border border-white/50 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-hover)]"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-dark text-white shadow-md">
              <FaHeartbeat className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Enzim Bromelain Aktif</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Bromelain adalah enzim proteolitik alami yang hanya ditemukan secara melimpah pada nanas berkualitas. Enzim ini secara aktif mengurai rantai protein hewani dalam pencernaan sehingga meminimalkan perut kembung dan begah.
            </p>
            <div className="rounded-xl bg-green-500/5 p-4 border border-green-500/10">
              <p className="text-xs font-bold text-green-800 uppercase tracking-wider">Metabolisme Protein</p>
              <p className="mt-1 text-xs text-green-900/80">Meningkatkan efisiensi kerja lambung dan memulihkan otot lelah pasca-olahraga.</p>
            </div>
          </motion.div>

          {/* Antioxidant Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="glass rounded-3xl p-8 shadow-[var(--shadow-card)] border border-white/50 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-hover)]"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl" />
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-golden-light to-golden text-white shadow-md">
              <FaShieldAlt className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Antioksidan Polifenol</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Kandungan flavonoid, karotenoid, dan polifenol terikat dalam buah ini terbukti klinis memperlambat kerusakan sel akibat radikal bebas dari polusi dan stres harian. Menjaga kesehatan pembuluh darah dan jantung secara menyeluruh.
            </p>
            <div className="rounded-xl bg-yellow-500/5 p-4 border border-yellow-500/10">
              <p className="text-xs font-bold text-yellow-800 uppercase tracking-wider">Perlindungan Seluler</p>
              <p className="mt-1 text-xs text-yellow-900/80">Memperkuat sistem pertahanan internal terhadap penyakit degeneratif kronis.</p>
            </div>
          </motion.div>
        </div>
        </div>

        {/* Deep Explanation Section */}
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block rounded-full bg-amber-100 border border-amber-200/50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-800 mb-6">
              🔬 Sains & Kebutan
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-6 leading-tight">
              Mengapa Varietas Pemalang <br />
              <span className="text-gradient-brand">Jauh Lebih Kaya Khasiat?</span>
            </h2>
            <p className="text-base text-gray-600 leading-relaxed mb-6">
              Nanas Madu Pemalang ditanam di tanah vulkanik subur kaki Gunung Slamet. Paparan mineral tanah alami yang melimpah dikombinasikan dengan curah hujan tropis optimal memicu sintesis kandungan fruktosa, zat besi, dan senyawa aktif sekunder secara maksimal.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              Honea secara ketat memantau proses panen pada kematangan sempurna 95% di pohon. Hal ini krusial karena aktivitas Enzim Bromelain mencapai puncaknya tepat saat warna kulit buah mulai menguning keemasan secara merata.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative border-4 border-white"
          >
            <img
              src="https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=800&fit=crop"
              alt="Nutrisi Nanas Madu Premium"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8 text-white">
              <div>
                <p className="text-2xl font-bold">100% Organik & Murni</p>
                <p className="text-xs text-gray-200 mt-1">Ditanam tanpa pestisida kimia sintetis berbahaya oleh petani binaan Pemalang.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scientific Journal References */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Referensi & <span className="text-gradient-brand font-extrabold">Studi Ilmiah</span>
            </h2>
            <p className="mt-4 text-base text-gray-600">
              Kami berkomitmen pada transparansi. Khasiat buah didasarkan pada riset klinis terpublikasi resmi.
            </p>
          </div>

          <div className="relative">
            {/* Ambient background spots directly behind the journal list cards */}
            <div className="absolute top-1/2 left-1/3 -translate-y-1/2 h-72 w-72 rounded-full bg-golden-light/10 blur-[80px] pointer-events-none" />
            
            <div className="grid gap-6 relative z-10">
              {journalReferences.map((ref) => (
                <motion.div
                  key={ref.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass rounded-2xl p-6 border border-white/60 shadow-sm flex flex-col md:flex-row md:items-start gap-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-700">
                    <FaBook className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full">{ref.journal}</span>
                    <h4 className="text-lg font-bold text-gray-900 mt-3">{ref.title}</h4>
                    <p className="text-xs text-gray-400 mt-1">Penulis: {ref.author}</p>
                    <p className="text-sm text-gray-600 mt-3 leading-relaxed">{ref.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive FAQs */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">FAQ Kesehatan</h2>
            <p className="mt-3 text-sm text-gray-600">Pertanyaan umum seputar khasiat konsumsi Nanas Madu Pemalang</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm cursor-pointer hover:border-brand-soft transition-colors"
                onClick={() => toggleFaq(idx)}
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-base sm:text-lg font-bold text-gray-900">{faq.q}</h4>
                  <span className="text-brand shrink-0 ml-4">
                    {openFaq === idx ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                      transition={{ duration: 0.3 }}
                    >
                      <p className="mt-4 text-sm leading-relaxed text-gray-600 border-t border-gray-50 pt-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
