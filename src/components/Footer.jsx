import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaInstagram, FaTiktok, FaWhatsapp, FaFacebookF, FaYoutube, FaHeart } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail, HiOutlineClock, HiLocationMarker } from "react-icons/hi";
import { FiMessageCircle, FiSend } from "react-icons/fi";
import { footerLinks } from "../data/navigation";
import { contact } from "../data/contact";
import igLifestyle from "../assets/ig_lifestyle.png";
import logoImg from "../assets/logo nanas madu.png";
import { usePrototype } from "../context/PrototypeContext";

export default function Footer({ showInstagram = false }) {
  const { filterByCategory } = usePrototype();

  return (
    <footer className={`bg-surface ${showInstagram ? "pt-24 sm:pt-32" : "pt-12 sm:pt-16"}`}>
      {/* Komunitas Instagram Section */}
      {showInstagram && (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Bergabung dengan <span className="text-brand">Komunitas Kami</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Bagikan momen manis Anda dengan #HoneaPemalang
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass rounded-3xl overflow-hidden shadow-xl"
            >
              {/* Fake IG Header */}
              <div className="flex items-center gap-4 p-4 border-b border-gray-200/50 bg-white/40">
                <div className="h-10 w-10 rounded-full overflow-hidden border border-gray-200/30 bg-white flex items-center justify-center">
                  <img src={logoImg} alt="Honea Profile" className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">honea</p>
                  <p className="text-xs text-gray-500">Semarang, Jawa Tengah</p>
                </div>
              </div>
              
              {/* IG Photo */}
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img
                  src={igLifestyle}
                  alt="Lifestyle Honea"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Fake IG Footer */}
              <div className="p-4 bg-white/40">
                <div className="flex gap-4 mb-2">
                  <FaHeart className="h-6 w-6 text-red-500 cursor-pointer hover:scale-110 transition-transform" />
                  <FiMessageCircle className="h-6 w-6 text-gray-800 cursor-pointer hover:text-brand transition-colors" />
                  <FiSend className="h-6 w-6 text-gray-800 cursor-pointer hover:text-brand transition-colors" />
                </div>
                <p className="text-sm font-bold text-gray-900">Disukai oleh 10.432 lainnya</p>
                <p className="mt-1 text-sm text-gray-800">
                  <span className="font-bold mr-2">honea</span>
                  Panas-panas gini emang paling pas nongkrong bareng bestie sambil minum jus Nanas Madu asli yang super segar! 🍍✨ #Honea #SegarAlami #JusNanasPremium #Semarang
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* Main Footer */}
      <div className="bg-brand-dark pt-16 pb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12">
            {/* Col 1: Brand */}
            <div className="space-y-6 lg:col-span-3">
              <Link to="/" className="flex items-center gap-2 text-3xl font-extrabold text-golden-light tracking-tight">
                <img src={logoImg} alt="Honea Logo" className="h-10 w-auto object-contain brightness-0 invert" loading="lazy" />
                <span>Honea.</span>
              </Link>
              <p className="text-sm leading-6 text-brand-pale">
                Membawa kesegaran dan kebaikan Nanas Madu asli Pemalang langsung ke tangan Anda. Kualitas premium, 100% alami.
              </p>
              <div className="flex space-x-4">
                <a href="https://instagram.com/honea" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-brand-pale hover:bg-white/20 hover:text-white transition-all" aria-label="Instagram">
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a href="https://tiktok.com/@honea" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-brand-pale hover:bg-white/20 hover:text-white transition-all" aria-label="TikTok">
                  <FaTiktok className="h-5 w-5" />
                </a>
                <a href="https://facebook.com/honea" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-brand-pale hover:bg-white/20 hover:text-white transition-all" aria-label="Facebook">
                  <FaFacebookF className="h-5 w-5" />
                </a>
                <a href="https://youtube.com/@honea" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-brand-pale hover:bg-white/20 hover:text-white transition-all" aria-label="YouTube">
                  <FaYoutube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Col 2: Navigasi */}
            <div className="lg:col-span-2">
              <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">
                Navigasi
              </h3>
              <ul role="list" className="mt-6 space-y-3">
                {footerLinks.navigasi.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm leading-6 text-brand-pale hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Produk */}
            <div className="lg:col-span-2">
              <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">
                Produk Kami
              </h3>
              <ul role="list" className="mt-6 space-y-3">
                {footerLinks.produk.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      onClick={() => {
                        if (link.category) {
                          filterByCategory(link.category);
                        }
                      }}
                      className="text-sm leading-6 text-brand-pale hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Hubungi Kami */}
            <div className="lg:col-span-2">
              <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">
                Hubungi Kami
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <HiOutlineLocationMarker className="mt-0.5 h-5 w-5 shrink-0 text-golden" />
                  <span className="text-sm text-brand-pale">{contact.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <HiOutlinePhone className="mt-0.5 h-5 w-5 shrink-0 text-golden" />
                  <a href={`tel:${contact.phone}`} className="text-sm text-brand-pale hover:text-white transition-colors">
                    {contact.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <FaWhatsapp className="mt-0.5 h-5 w-5 shrink-0 text-golden" />
                  <a
                    href={`https://wa.me/${contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-brand-pale hover:text-white transition-colors"
                  >
                    CS WhatsApp
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <HiOutlineMail className="mt-0.5 h-5 w-5 shrink-0 text-golden" />
                  <a href={`mailto:${contact.email}`} className="text-sm text-brand-pale hover:text-white transition-colors">
                    {contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <HiOutlineClock className="mt-0.5 h-5 w-5 shrink-0 text-golden" />
                  <span className="text-sm text-brand-pale">{contact.hours}</span>
                </li>
              </ul>
            </div>

            {/* Col 5: Maps */}
            <div className="space-y-4 lg:col-span-3">
              <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">
                Lokasi Pusat
              </h3>
              <div className="relative overflow-hidden rounded-2xl border border-brand/20 shadow-lg bg-white/5 p-1">
                <iframe
                  title="Honea Center Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2260742337775!2d110.40921477587634!3d-6.98263599301826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4952541a05%3A0x64cf5d3a52140bbd!2sSemarang%20Town%20Square!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                  width="100%"
                  height="140"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl opacity-85 hover:opacity-100 transition-opacity duration-300"
                ></iframe>
                {/* Centered bouncing red pin overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <HiLocationMarker className="w-8 h-8 text-red-500 animate-bounce -mt-4 drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)]" />
                </div>
              </div>
              <p className="text-[11px] text-brand-pale/70 leading-relaxed">
                Semarang Town Square, Jl. Inspeksi, Kembangsari, Kota Semarang, Jawa Tengah
              </p>
            </div>
          </div>
          
          <div className="mt-16 border-t border-brand/30 pt-8 sm:mt-20 lg:mt-24">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
              <p className="text-xs leading-5 text-brand-pale text-center sm:text-left">
                &copy; {new Date().getFullYear()} Honea. Hak cipta dilindungi undang-undang.
              </p>
              <p className="text-xs text-brand-pale/60 text-center sm:text-right">
                Kantor Pusat: Semarang, Jawa Tengah &bull; Kebun: Pemalang, Jawa Tengah
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
