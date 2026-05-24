import { motion } from "framer-motion";
import { FaTiktok, FaInstagram, FaUsers, FaVideo } from "react-icons/fa";

export default function AffiliatorSection() {
  const benefits = [
    {
      id: "komisi",
      title: "Komisi Menarik",
      desc: "Dapatkan persentase komisi yang besar dari setiap penjualan produk yang berasal dari link Anda.",
      icon: FaUsers,
      color: "text-amber-500",
      bg: "bg-amber-100"
    },
    {
      id: "sampel",
      title: "Sampel Produk Gratis",
      desc: "Kreator aktif akan mendapatkan sampel produk secara gratis untuk kebutuhan review dan pembuatan konten.",
      icon: FaVideo,
      color: "text-[#00966B]", // using brand color manually just in case
      bg: "bg-[#00966B]/10"
    }
  ];

  return (
    <section id="affiliator" className="py-20 sm:py-28 relative bg-surface overflow-hidden border-t border-brand-soft/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand border border-brand/20 bg-brand/5 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full bg-brand opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 bg-brand"></span>
                </span>
                Program Kreator
              </span>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
                Jadi Affiliator Honea & Dapatkan Cuan!
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Punya audiens di TikTok atau Instagram? Ayo gabung jadi partner Affiliator Honea. Promosikan gaya hidup sehat bareng Nanas Madu dan raih penghasilan tambahan tanpa ribet urus pengiriman barang!
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                {benefits.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center border border-gray-100 shadow-sm ${item.bg}`}>
                      <item.icon className={`h-4 w-4 ${item.color}`} />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-bold text-sm mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a href="#" className="inline-flex items-center justify-center border-2 border-slate-900 bg-slate-900 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-transparent hover:text-slate-900">
                  <FaTiktok className="mr-2 h-4 w-4" /> Daftar via TikTok
                </a>
                <a href="#" className="inline-flex items-center justify-center border border-gray-300 bg-transparent px-8 py-4 text-sm font-bold text-gray-700 transition-all hover:bg-gray-50">
                  <FaInstagram className="mr-2 h-4 w-4" /> DM Instagram
                </a>
              </div>
            </div>

            {/* Right Visual/Images */}
            <div className="relative hidden lg:flex items-center justify-center p-12 bg-brand-soft/30 border border-brand-soft/80 h-full min-h-[400px]">
              <div className="relative z-20 text-center max-w-sm">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center border border-brand-soft bg-white text-brand shadow-sm">
                  <FaVideo className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Konten Edukatif & Menarik</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Buat review jujur soal segarnya Nanas Madu Honea dan tempel keranjang kuning buat raih cuan bareng kita!</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
