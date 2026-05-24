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
    <section id="affiliator" className="py-20 sm:py-28 relative bg-surface overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] bg-gradient-to-br from-gray-900 to-gray-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-[#00966B]/20 to-transparent pointer-events-none"></div>
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#00966B]/30 blur-3xl pointer-events-none"></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Content */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#B2DFCF] mb-6 border border-white/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E6F4EF] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E6F4EF]"></span>
                </span>
                Program Kreator
              </span>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Jadi <span className="text-[#B2DFCF]">Affiliator Honea</span> & Dapatkan Cuan!
              </h2>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Punya audiens di TikTok atau Instagram? Ayo gabung jadi partner Affiliator Honea. Promosikan gaya hidup sehat bareng Nanas Madu dan raih penghasilan tambahan tanpa ribet urus pengiriman barang!
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {benefits.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.bg}`}>
                      <item.icon className={`h-5 w-5 ${item.color}`} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a href="#" className="inline-flex items-center justify-center rounded-full bg-[#00966B] px-8 py-4 text-sm font-extrabold text-white transition-all hover:brightness-110 shadow-lg shadow-[#00966B]/30">
                  <FaTiktok className="mr-2 h-5 w-5" /> Daftar via TikTok
                </a>
                <a href="#" className="inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md px-8 py-4 text-sm font-extrabold text-white transition-all hover:bg-white/20 border border-white/10">
                  <FaInstagram className="mr-2 h-5 w-5" /> DM Instagram
                </a>
              </div>
            </div>

            {/* Right Visual/Images */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/60 to-transparent rounded-3xl mix-blend-overlay z-10"></div>
              <div className="h-[400px] w-full rounded-3xl bg-gray-800 border border-white/10 flex flex-col items-center justify-center backdrop-blur-sm shadow-2xl relative overflow-hidden group">
                {/* Decorative image background (using a gradient pattern if no image) */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-80 group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                
                <div className="relative z-20 text-center p-8 max-w-sm">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl">
                    <FaVideo className="h-10 w-10 text-[#00966B]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Konten Edukatif & Menarik</h3>
                  <p className="text-base text-gray-300">Buat review jujur soal segarnya Nanas Madu Honea dan tempel keranjang kuning buat raih cuan bareng kita!</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
