import { motion } from "framer-motion";
import { HiCheckCircle, HiShieldCheck, HiSparkles } from "react-icons/hi";

export default function CertificationsSection() {
  const certifications = [
    {
      id: 1,
      name: "Sertifikasi Halal",
      issuer: "Lembaga Pengkajian Pangan, Obat-obatan, dan Kosmetika Majelis Ulama Indonesia (LPPOM MUI)",
      year: "2020",
      icon: HiShieldCheck,
      description: "Produk Honea telah tersertifikasi halal dan aman untuk dikonsumsi sesuai dengan standar syariah Islam."
    },
    {
      id: 2,
      name: "Sertifikasi BPOM",
      issuer: "Badan Pengawas Obat dan Makanan Republik Indonesia",
      year: "2019",
      icon: HiCheckCircle,
      description: "Terdaftar dan disetujui oleh BPOM sebagai produk pangan yang aman, berkualitas, dan memenuhi standar kesehatan nasional."
    },
    {
      id: 3,
      name: "Sertifikasi Organik",
      issuer: "Lembaga Sertifikasi Organik Indonesia (LSOI)",
      year: "2021",
      icon: HiSparkles,
      description: "Produk organik bersertifikat tanpa pestisida sintetis, pupuk kimia, dan bahan kimia berbahaya lainnya."
    }
  ];


  return (
    <section id="sertifikasi" className="py-20 sm:py-28 bg-gradient-to-b from-white to-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <span className="inline-block rounded-full bg-gradient-to-r from-brand-pale to-brand-soft px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-dark mb-6 border border-brand-light/10 shadow-sm">
            Standar Kualitas
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Sertifikasi & <span className="text-gradient-brand">Standar Internasional</span>
          </h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            Honea berkomitmen pada standar kualitas tertinggi dengan sertifikasi internasional yang menjamin keamanan, kualitas, dan keberlanjutan produk kami.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => {
            const IconComponent = cert.icon;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl bg-white p-8 shadow-[var(--shadow-card)] border border-gray-100/50 hover:shadow-[var(--shadow-hover)] transition-all overflow-hidden"
              >
                {/* Background accent */}
                <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-brand-light/5 group-hover:bg-brand-light/10 transition-colors" />
                
                {/* Icon */}
                <div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-light to-brand text-white">
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-xs font-semibold text-brand mb-3">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {cert.description}
                  </p>
                  
                  {/* Year Badge */}
                  <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                    <HiCheckCircle className="w-4 h-4 text-brand" />
                    <span className="text-xs font-semibold text-gray-500">
                      Tersertifikasi sejak {cert.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Statement */}
        <div className="relative mt-16">
          {/* Ambient background spots directly behind the trust statement glass card */}
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 h-64 w-64 rounded-full bg-brand-light/20 blur-[80px] pointer-events-none" />
          <div className="absolute top-1/2 right-1/3 -translate-y-1/2 h-64 w-64 rounded-full bg-golden-light/20 blur-[80px] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 sm:p-12 border border-white/60 relative z-10"
          >
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-golden-light to-golden text-white">
              <HiCheckCircle className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Komitmen Kami pada Kualitas
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Setiap sertifikasi yang kami miliki adalah bukti nyata dari dedikasi kami untuk memberikan produk terbaik kepada Anda. Kami terus melakukan audit dan pembaruan standar untuk memastikan bahwa setiap buah Nanas Madu Honea yang sampai ke tangan Anda adalah hasil dari proses produksi yang ketat, transparan, dan berkelanjutan.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
