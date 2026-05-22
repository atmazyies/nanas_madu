import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
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
    <section id="contact-info" className="border-t border-gray-100 bg-brand-soft/20 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading
          title="Ikuti Media Sosial Kami"
          subtitle="Hubungi tim Honea, dapatkan info promo menarik, resep sehat, dan tips gaya hidup bugar"
          align="center"
        />

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {contact.social.map((social) => {
            const Icon = socialIconMap[social.id] || FaInstagram;
            return (
              <motion.a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6 }}
                className="group flex flex-col items-center justify-center rounded-3xl bg-white p-6 shadow-[var(--shadow-card)] border border-gray-100/50 hover:shadow-[var(--shadow-hover)] transition-all min-w-[130px] sm:min-w-[150px] relative overflow-hidden"
              >
                {/* Glowing glow effect */}
                <div className="absolute -inset-1 rounded-full bg-brand/10 opacity-0 group-hover:opacity-100 blur-lg transition-opacity pointer-events-none" />
                
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-brand-soft text-brand transition-all group-hover:bg-brand group-hover:text-white shadow-sm ring-4 ring-white">
                  <Icon className="h-6 w-6" />
                </span>
                
                <p className="relative z-10 text-sm font-extrabold text-gray-900 mt-4 group-hover:text-brand transition-colors">
                  {social.label}
                </p>
                <p className="relative z-10 text-xs text-gray-400 mt-1">
                  {social.handle}
                </p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
