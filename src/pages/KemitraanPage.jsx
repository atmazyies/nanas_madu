import { motion } from "framer-motion";
import { FaLeaf, FaStore, FaShoppingBasket } from "react-icons/fa";
import { HiOutlineSparkles, HiOutlineCheckCircle } from "react-icons/hi";
import PageBanner from "../components/PageBanner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { contact } from "../data/contact";
import MarketplaceSection from "../sections/MarketplaceSection";
import AffiliatorSection from "../sections/AffiliatorSection";

export default function KemitraanPage() {
  const models = [
    {
      id: "kebun",
      title: "Mitra Kebun",
      subtitle: "Untuk Petani & Pemilik Lahan",
      description: "Dukung pertanian berkelanjutan dengan menjadi bagian dari rantai pasok Honea. Kami berkomitmen meningkatkan taraf hidup petani binaan dengan sistem yang transparan.",
      icon: FaLeaf,
      colorClass: "from-emerald-400 to-emerald-600",
      bgSoft: "bg-emerald-500/5 border-emerald-500/10 text-emerald-700",
      benefits: [
        {
          title: "Jaminan Pembelian Hasil Panen",
          desc: "Kami membeli seluruh hasil panen Nanas Madu yang memenuhi kriteria kualitas dengan harga stabil di atas pasar."
        },
        {
          title: "Bantuan Pupuk & Bibit Unggul",
          desc: "Akses ke pasokan bibit varietas Pemalang terbaik dan pupuk organik untuk menjaga kesuburan tanah jangka panjang."
        },
        {
          title: "Pendampingan Agronomis",
          desc: "Edukasi berkala mengenai teknik bertani modern ramah lingkungan untuk meminimalisir risiko gagal panen."
        }
      ]
    },
    {
      id: "outlet",
      title: "Mitra Outlet",
      subtitle: "Untuk Wirausaha & Franchisee",
      description: "Buka outlet jus buah segar dan olahan nanas madu premium Honea di kota Anda. Model bisnis teruji dengan operasional ringkas dan produk bersertifikasi.",
      icon: FaStore,
      colorClass: "from-amber-400 to-amber-650",
      bgSoft: "bg-amber-500/5 border-amber-500/10 text-amber-700",
      benefits: [
        {
          title: "Pasokan Buah Matang Sempurna",
          desc: "Jaminan pengiriman Nanas Madu segar langsung dari kebun binaan kami dalam waktu 24 jam setelah dipanen."
        },
        {
          title: "Aset Pemasaran & SOP Lengkap",
          desc: "Dukungan branding, perlengkapan stan modern, resep eksklusif, serta panduan operasional standar operasional."
        },
        {
          title: "Pelatihan & Sistem Terpadu",
          desc: "Program pelatihan intensif untuk staf, sistem kasir (POS) digital terintegrasi, serta konsultasi manajemen berkala."
        }
      ]
    },
    {
      id: "ritel",
      title: "Mitra Ritel & Swalayan",
      subtitle: "Untuk Toko Modern & Swalayan",
      description: "Hadirkan produk olahan Nanas Madu premium siap konsumsi (Dodol, Keripik, Jus murni) di rak ritel modern Anda untuk memperluas pilihan produk sehat.",
      icon: FaShoppingBasket,
      colorClass: "from-golden-light to-golden",
      bgSoft: "bg-yellow-500/5 border-yellow-500/10 text-yellow-800",
      benefits: [
        {
          title: "Margin Keuntungan Menjanjikan",
          desc: "Skema harga grosir khusus yang sangat kompetitif untuk memaksimalkan keuntungan kemitraan ritel."
        },
        {
          title: "Sertifikasi Lengkap & Higienis",
          desc: "Semua produk olahan kami telah dilengkapi izin edar resmi BPOM, Sertifikat Halal, dan kemasan higienis modern."
        },
        {
          title: "Dukungan Promosi Bersama",
          desc: "Dukungan pemasaran in-store, materi promosi cetak, serta kampanye media sosial bersama untuk mendorong penjualan."
        }
      ]
    }
  ];

  const partnershipBenefits = [
    "Harga khusus untuk pembelian dalam jumlah besar",
    "Dukungan marketing dan branding bersama",
    "Sistem logistik terintegrasi dan terpercaya",
    "Tim support dedicated untuk mitra bisnis"
  ];

  return (
    <>
      <Navbar />
      <PageBanner
        title="Kemitraan & B2B"
        subtitle="Tumbuh Bersama Honea: Buka Peluang Bisnis Baru dengan Jaminan Kualitas, Keberlanjutan, dan Kemitraan yang Saling Menguntungkan."
        breadcrumbs={[{ label: "Kemitraan" }]}
      />

      <main className="bg-surface py-20 sm:py-28 relative overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-72 w-72 rounded-full bg-golden-pale/25 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-72 w-72 rounded-full bg-brand-pale/25 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Main Marketing Headers */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="inline-block rounded-full bg-gradient-to-r from-brand-pale to-brand-soft px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-dark mb-4 border border-brand-light/10 shadow-sm">
              Peluang Bisnis
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Model Kolaborasi <span className="text-gradient-brand">Kemitraan</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              Pilih model kemitraan yang sesuai dengan kapasitas dan visi bisnis Anda. Kami menyediakan ekosistem terpadu untuk mendukung kesuksesan bersama.
            </p>
          </div>

          {/* 3-Column Marketing Benefits Grid */}
          <div className="grid gap-8 lg:grid-cols-3 mb-24">
            {models.map((model, idx) => {
              const IconComponent = model.icon;
              return (
                <motion.div
                  key={model.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="glass rounded-3xl p-8 border border-white/50 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Icon Container */}
                    <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${model.colorClass} text-white shadow-md`}>
                      <IconComponent className="h-6 w-6" />
                    </div>

                    {/* Titles */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{model.title}</h3>
                    <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold border ${model.bgSoft} mb-4`}>
                      {model.subtitle}
                    </span>

                    {/* Description */}
                    <p className="text-sm text-gray-500 leading-relaxed mb-8">
                      {model.description}
                    </p>

                    {/* Benefits Checklist */}
                    <div className="border-t border-gray-100 pt-6">
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Benefit Eksklusif</h4>
                      <ul className="space-y-4">
                        {model.benefits.map((benefit, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-3">
                            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <div>
                              <p className="text-sm font-bold text-gray-800 leading-none mb-1">{benefit.title}</p>
                              <p className="text-xs text-gray-500 leading-relaxed">{benefit.desc}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-gray-50 text-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                      Saling Menguntungkan & Berkelanjutan
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* B2B Partnership Section (Redesigned to be organic) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 pt-16 border-t border-brand-soft/50 grid items-center gap-10 lg:grid-cols-12"
          >
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 text-left">
              <div className="flex items-center gap-2 mb-4">
                <HiOutlineSparkles className="w-5 h-5 text-brand" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand">Kerjasama Bisnis</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
                Punya Kebutuhan Skala Besar?
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-8 max-w-2xl">
                Bergabunglah dengan jaringan mitra Honea. Kami siap mensuplai kebutuhan Nanas Madu premium untuk operasional bisnis HORECA maupun ritel Anda.
              </p>
              <ul className="grid sm:grid-cols-2 gap-4">
                {partnershipBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                    <HiOutlineCheckCircle className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Stacked Buttons (4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-4 w-full">
              <a
                href={`mailto:${contact.email}?subject=Inquiry Kerjasama B2B & Kemitraan Honea`}
                className="inline-flex items-center justify-center bg-brand text-white px-8 py-4 text-sm font-bold transition-all duration-300 hover:bg-brand-dark hover:-translate-y-1"
              >
                Hubungi Tim Kemitraan
              </a>
              <a
                href={contact.social.find((s) => s.id === "whatsapp")?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-brand text-brand bg-transparent px-8 py-4 text-sm font-bold transition-all duration-300 hover:bg-brand-soft"
              >
                Chat via WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Sponsorship Box (Redesigned) */}
          <motion.div
            id="sponsorship"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 sm:p-12 bg-brand-soft/40 border border-brand-soft/80 flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div className="text-left max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <HiOutlineSparkles className="w-5 h-5 text-golden" />
                <span className="text-xs font-bold uppercase tracking-widest text-golden-dark">Program Acara</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-4">
                Pengajuan Sponsorship Honea
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Punya acara kampus, festival, atau kompetisi olahraga? Honea siap mendukung kesuksesan event Anda melalui program sponsorship produk segar sehat!
              </p>
            </div>
            <div className="shrink-0 w-full lg:w-auto flex flex-col items-center lg:items-end">
              <a
                href={`mailto:${contact.email}?subject=Proposal Sponsorship Acara`}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 text-sm font-bold transition-all hover:bg-slate-800"
              >
                Kirim Proposal
              </a>
              <p className="text-xs text-gray-500 mt-3 text-center sm:text-right">
                *Proses review 2-3 hari kerja.
              </p>
            </div>
          </motion.div>

        </div>
      </main>

      <AffiliatorSection />
      <MarketplaceSection />

      <Footer showInstagram={true} />
    </>
  );
}
