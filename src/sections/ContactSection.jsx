import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineClock,
} from "react-icons/hi";
import { contact } from "../data/contact";
import SectionHeading from "../components/SectionHeading";

const socialIconMap = {
  instagram: FaInstagram,
  facebook: FaFacebookF,
  tiktok: SiTiktok,
  youtube: FaYoutube,
  whatsapp: FaWhatsapp,
};

export default function ContactSection() {
  return (
    <section id="contact-info" className="border-t border-gray-100 bg-brand-soft/20 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Kontak & Media Sosial"
          subtitle="Hubungi tim Econis — kami siap membantu pesanan dan pertanyaan Anda"
          align="center"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5 rounded-3xl bg-white p-8 shadow-[var(--shadow-soft)]"
          >
            <div className="flex items-start gap-4">
              <HiOutlineLocationMarker className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <div>
                <p className="text-sm font-semibold text-gray-900">Alamat</p>
                <p className="text-sm text-gray-500">{contact.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiOutlineMail className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <div>
                <p className="text-sm font-semibold text-gray-900">Email</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm text-gray-500 hover:text-brand"
                >
                  {contact.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiOutlinePhone className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <div>
                <p className="text-sm font-semibold text-gray-900">Telepon</p>
                <a
                  href={`tel:${contact.phone}`}
                  className="text-sm text-gray-500 hover:text-brand"
                >
                  {contact.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiOutlineClock className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <div>
                <p className="text-sm font-semibold text-gray-900">Jam Operasional</p>
                <p className="text-sm text-gray-500">{contact.hours}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white p-8 shadow-[var(--shadow-soft)]"
          >
            <h3 className="text-lg font-bold text-gray-900">Ikuti Kami</h3>
            <p className="mt-2 text-sm text-gray-500">
              Dapatkan update promo, resep sehat, dan tips wellness
            </p>
            <ul className="mt-6 space-y-4">
              {contact.social.map((social) => {
                const Icon = socialIconMap[social.id] || FaInstagram;
                return (
                  <li key={social.id}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-2xl p-3 transition-colors hover:bg-brand-soft"
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {social.label}
                        </p>
                        <p className="text-xs text-gray-400">{social.handle}</p>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
