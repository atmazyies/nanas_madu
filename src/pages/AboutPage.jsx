import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LazyImage from "../components/LazyImage";

import { aboutData } from "../data/about";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageBanner
        title="Tentang Honea"
        subtitle="Mengenal lebih dekat dedikasi Honea dalam menjalin kemitraan profesional dan menyalurkan kesegaran nanas madu premium."
        breadcrumbs={[{ label: "Tentang Kami" }]}
      />

      <main className="bg-surface">
        {/* Our Story */}
        <section id="story" className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
              >
                <span className="inline-block rounded-full bg-gradient-to-r from-brand-pale to-brand-soft px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-dark mb-6 border border-brand-light/10 shadow-sm">
                  Kisah Kami
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Dari Kebun Pemalang, <span className="text-gradient-brand">untuk Indonesia</span>
                </h2>
                <div className="mt-8 space-y-5">
                  {aboutData.story.paragraphs.map((p, i) => (
                    <p key={i} className="text-base leading-relaxed text-gray-600">{p}</p>
                  ))}
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
                    src="/images/about_honea.jpg"
                    alt="Kebun Nanas Madu Pemalang"
                    className="h-full w-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Sejarah & Cakupan */}
        <section className="bg-white py-20 sm:py-28 relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-brand-soft/30 blur-3xl" />
            <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-golden-light/20 blur-3xl" />
          </div>

          <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-dark via-brand to-brand-dark px-8 py-16 text-center shadow-2xl sm:px-16"
            >
              {/* Outer light glow */}
              <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-golden-light/20 blur-2xl" />
              <div className="absolute -left-16 -bottom-16 w-48 h-48 rounded-full bg-white/10 blur-2xl" />

              <div className="mx-auto max-w-2xl relative z-10">
                <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-golden-light mb-6 border border-white/10 shadow-sm">
                  Warisan Agrikultur Pemalang
                </span>
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl leading-tight">
                  Telusuri Keunikan & Sejarah <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-golden-light to-amber-200">
                    Nanas Madu Pemalang
                  </span>
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-brand-pale">
                  Ketahui bagaimana riwayat budidaya tradisional dan kondisi tanah vulkanik kaki Gunung Slamet melahirkan rasa manis legit legendaris yang istimewa.
                </p>
                <div className="mt-10 flex justify-center">
                  <Link
                    to="/sejarah-nanas"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-golden-light to-golden px-8 py-4 text-base font-bold text-brand-dark shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-amber-300 hover:to-amber-500"
                  >
                    Pelajari Sejarah Nanas Madu
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Kemitraan Petani Asli Pemalang */}
        <section id="petani" className="py-20 sm:py-28 bg-white relative overflow-hidden">
          {/* Decorative subtle green grids/lights */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-50/40 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-50/30 rounded-full blur-[100px] pointer-events-none" />

          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              
              {/* Left Column: Authentic narrative */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
              >
                <span className="inline-block rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-xs font-bold tracking-widest text-brand uppercase mb-6 shadow-sm">
                  🌾 Kemitraan Petani Lokal Pemalang
                </span>
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl leading-tight">
                  Tumbuh dari Tanah Vulkanik, <br />
                  <span className="text-gradient-brand">Dipetik dengan Ketulusan</span>
                </h2>
                
                <div className="mt-8 space-y-6 text-base sm:text-lg leading-relaxed text-gray-600">
                  <p>
                    Setiap buah nanas madu premium yang Anda nikmati bersama Honea merupakan hasil dedikasi mendalam para petani lokal Pemalang, khususnya yang bermukim di lereng subur kaki Gunung Slamet, Kecamatan Belik. Wilayah ini dianugerahi iklim pegunungan yang sejuk serta tanah vulkanik kaya unsur hara alami—menciptakan terroir agrikultur ideal yang melahirkan karakteristik nanas madu termanis, paling juicy, dengan aroma harum yang legendaris.
                  </p>
                  <p>
                    Kami percaya bahwa kualitas buah yang unggul hanya bisa dicapai melalui petani yang sejahtera. Oleh karena itu, Honea berkomitmen menjalankan kemitraan beretika yang memotong rantai pasok tengkulak tidak sehat. Kami memberikan jaminan harga beli yang adil di atas rata-rata pasar, pendampingan agrikultur berkelanjutan, serta penyediaan fasilitas pertanian modern guna meningkatkan produktivitas kebun lokal secara berkesinambungan.
                  </p>
                  <p>
                    Dengan memilih Honea, Anda tidak hanya menikmati kesegaran nanas madu premium terbaik, melainkan turut aktif memberdayakan ekonomi puluhan kepala keluarga petani lokal di Pemalang dan melestarikan ekosistem tanah air kita.
                  </p>
                </div>

                {/* Key attributes showcase */}
                <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-gray-100">
                  <div>
                    <span className="block text-xl sm:text-3xl font-extrabold text-brand-dark">50+</span>
                    <span className="mt-1 block text-[10px] xs:text-xs sm:text-sm font-semibold text-gray-500 leading-tight">Mitra Petani Lokal</span>
                  </div>
                  <div>
                    <span className="block text-xl sm:text-3xl font-extrabold text-brand-dark">100%</span>
                    <span className="mt-1 block text-[10px] xs:text-xs sm:text-sm font-semibold text-gray-500 leading-tight">Hasil Panen Segar</span>
                  </div>
                  <div>
                    <span className="block text-xl sm:text-3xl font-extrabold text-brand-dark">Fair</span>
                    <span className="mt-1 block text-[10px] xs:text-xs sm:text-sm font-semibold text-gray-500 leading-tight">Trade Supply Chain</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Premium Styled visual image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* Outer decorative soft color card frame */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-brand/10 to-golden/5 blur-lg opacity-85" />
                
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl border border-emerald-900/5 bg-surface">
                  <img
                    src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?w=800&h=600&fit=crop"
                    alt="Petani Nanas Pemalang Asli"
                    className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Floating Glassmorphic Overlay Badge */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 backdrop-blur-md bg-emerald-950/80 p-4 sm:p-5 rounded-2xl border border-white/10 text-white shadow-xl">
                    <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-golden mb-1">Gunung Slamet Terroir</p>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed opacity-90">
                      "Perpaduan tanah abu vulkanis dan ketinggian udara menghasilkan tingkat kemanisan madu (perfect brix) yang tak bisa ditiru daerah lain."
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Tim Kami */}
        <section id="team" className="py-20 sm:py-28 bg-surface">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mx-auto max-w-2xl text-center mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Tim <span className="text-gradient-brand font-extrabold">Kami</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                Orang-orang berdedikasi di balik penyediaan nanas madu premium terbaik untuk Anda
              </p>
            </motion.div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {aboutData.team.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group rounded-3xl bg-white p-8 text-center shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-hover)] border border-emerald-900/5"
                >
                  <div className="mx-auto mb-6 h-24 w-24 overflow-hidden rounded-full ring-4 ring-brand-soft/50 group-hover:ring-brand transition-all">
                    <LazyImage
                      src={member.avatar}
                      alt={member.name}
                      className="h-full w-full object-cover"
                      wrapperClassName="h-24 w-24 rounded-full"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-brand">{member.role}</p>
                  <p className="mt-3 text-sm text-gray-500 leading-relaxed">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

