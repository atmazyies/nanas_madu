import { motion } from "framer-motion";
import { FaLeaf, FaStore, FaShoppingBasket } from "react-icons/fa";
import { HiOutlineSparkles, HiOutlineCheckCircle } from "react-icons/hi";
import PageBanner from "../components/PageBanner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { contact } from "../data/contact";

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

          {/* B2B Partnership Box (Match Screenshot perfectly) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] bg-white border border-gray-100 p-8 sm:p-12 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden"
          >
            <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-brand-soft/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-golden-pale/25 blur-3xl pointer-events-none" />

            <div className="grid items-center gap-10 lg:grid-cols-12 relative z-10">
              {/* Left Content (8 cols) */}
              <div className="lg:col-span-8 text-left">
                <div className="flex items-center gap-2 mb-4">
                  <HiOutlineSparkles className="w-5 h-5 text-[#00966B]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00966B]">Kerjasama Bisnis</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-3">
                  Mau Kerjasama B2B & Kemitraan?
                </h3>
                <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-6">
                  Bergabunglah dengan jaringan mitra Honea dan kembangkan bisnis Anda bersama produk premium kami.
                </p>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {partnershipBenefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                      <HiOutlineCheckCircle className="w-5 h-5 text-[#00966B] shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Stacked Buttons (4 cols) */}
              <div className="lg:col-span-4 flex flex-col gap-4 w-full">
                <a
                  href={`mailto:${contact.email}?subject=Inquiry Kerjasama B2B & Kemitraan Honea`}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-4 text-sm font-extrabold text-white transition-all duration-300 hover:brightness-110 shadow-md hover:shadow-lg active:scale-[0.98] text-center"
                >
                  Hubungi Tim Kemitraan
                </a>
                <a
                  href={contact.social.find((s) => s.id === "whatsapp")?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border-2 border-[#00966B] px-8 py-4 text-sm font-extrabold text-[#00966B] bg-white transition-all duration-300 hover:bg-[#00966B]/5 active:scale-[0.98] text-center"
                >
                  Chat via WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer showInstagram={true} />
    </>
  );
}
