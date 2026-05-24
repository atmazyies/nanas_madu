import { motion } from "framer-motion";
import { SiShopee, SiTiktok } from "react-icons/si";
import { FaShoppingBag } from "react-icons/fa";

export default function MarketplaceSection() {
  const marketplaces = [
    {
      id: "shopee",
      name: "Shopee",
      icon: SiShopee,
      color: "from-[#ee4d2d] to-[#ff7337]",
      textColor: "text-[#ee4d2d]",
      bgSoft: "bg-[#ee4d2d]/10",
      link: "#" // Tambahkan link toko asli jika sudah ada
    },
    {
      id: "tiktok",
      name: "TikTok Shop",
      icon: SiTiktok,
      color: "from-[#000000] to-[#333333]",
      textColor: "text-gray-900",
      bgSoft: "bg-gray-200",
      link: "#"
    },
    {
      id: "lazada",
      name: "Lazada",
      icon: FaShoppingBag,
      color: "from-[#0f146d] to-[#161a8f]",
      textColor: "text-[#0f146d]",
      bgSoft: "bg-[#0f146d]/10",
      link: "#"
    }
  ];

  return (
    <section id="marketplace" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-72 w-72 rounded-full bg-brand-pale/20 blur-3xl pointer-events-none"></div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block rounded-full bg-gradient-to-r from-brand-pale to-brand-soft px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-dark mb-4 border border-brand-light/10 shadow-sm">
            Official Store
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Beli Mudah di <span className="text-gradient-brand">Marketplace Resmi</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Dapatkan produk Honea favorit Anda dengan promo gratis ongkir dan diskon eksklusif di berbagai platform e-commerce terpercaya pilihan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {marketplaces.map((platform, idx) => {
            const IconComponent = platform.icon;
            return (
              <motion.a
                key={platform.id}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative flex flex-col items-center p-8 rounded-3xl border border-gray-100 bg-white shadow-xl shadow-gray-200/40 overflow-hidden transition-all"
              >
                {/* Hover Background */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${platform.color} transition-opacity duration-300`}></div>
                
                <div className={`relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl ${platform.bgSoft} group-hover:bg-white/20 mb-6 transition-colors duration-300`}>
                  <IconComponent className={`h-10 w-10 ${platform.textColor} group-hover:text-white transition-colors duration-300`} />
                </div>
                
                <h3 className="relative z-10 text-xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300 mb-2">
                  {platform.name}
                </h3>
                
                <p className="relative z-10 text-sm text-gray-500 group-hover:text-white/80 text-center transition-colors duration-300">
                  Kunjungi toko resmi kami di {platform.name}
                </p>
                
                <div className="relative z-10 mt-6 inline-flex items-center text-sm font-bold text-brand group-hover:text-white transition-colors duration-300">
                  Belanja Sekarang
                  <svg className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
