import { useState } from "react";
import { motion } from "framer-motion";
import { ctaData } from "../data/cta";
import { contact } from "../data/contact";
import { usePrototype } from "../context/PrototypeContext";
import { HiOutlineSparkles, HiOutlineCheckCircle } from "react-icons/hi";

export default function CTASection() {
  const { scrollToShop } = usePrototype();

  const partnershipBenefits = [
    "Harga khusus untuk pembelian dalam jumlah besar",
    "Dukungan marketing dan branding bersama",
    "Sistem logistik terintegrasi dan terpercaya",
    "Tim support dedicated untuk mitra bisnis"
  ];

  return (
    <section id="cta" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] gradient-luxury px-8 py-14 text-center text-white shadow-2xl sm:px-16 border border-white/10"
        >
          <div
            className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-white/10 blur-2xl"
            aria-hidden="true"
          />
          <h2 className="text-2xl font-extrabold sm:text-4xl">
            {ctaData.primary.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm opacity-90 sm:text-base">
            {ctaData.primary.subtitle}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.button
              type="button"
              onClick={scrollToShop}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(251,191,36,0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex rounded-full bg-white px-10 py-3.5 text-sm font-extrabold text-brand-dark shadow-xl transition-all duration-300 hover:bg-gray-50"
            >
              {ctaData.primary.buttonText}
            </motion.button>
            <motion.button
              type="button"
              onClick={() =>
                document.getElementById("products-heading")?.scrollIntoView({ behavior: "smooth" })
              }
              whileHover={{ scale: 1.03 }}
              className="inline-flex rounded-full border-2 border-white/80 px-10 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {ctaData.primary.secondaryText}
            </motion.button>
          </div>
        </motion.div>

        {/* B2B Partnership Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass mt-8 rounded-3xl p-8 sm:p-10"
        >
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <HiOutlineSparkles className="w-5 h-5 text-brand" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand">Kerjasama Bisnis</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Mau Kerjasama B2B & Kemitraan?
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Bergabunglah dengan jaringan mitra Honea dan kembangkan bisnis Anda bersama produk premium kami.
              </p>
              <ul className="mt-5 space-y-2.5">
                {partnershipBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <HiOutlineCheckCircle className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${contact.email}?subject=Inquiry Kerjasama B2B & Kemitraan Honea`}
                className="inline-flex items-center justify-center rounded-full gradient-gold px-8 py-3.5 text-sm font-extrabold text-amber-950 transition-all duration-300 hover:brightness-110 shadow-md hover:shadow-lg"
              >
                Hubungi Tim Kemitraan
              </a>
              <a
                href={contact.social.find((s) => s.id === "whatsapp")?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border-2 border-brand px-8 py-3.5 text-sm font-extrabold text-brand transition-all duration-300 hover:bg-brand-soft"
              >
                Chat via WhatsApp
              </a>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
          <a href={`mailto:${contact.email}`} className="hover:text-brand">
            {contact.email}
          </a>
          <span className="hidden sm:inline text-gray-300">|</span>
          <a href={`tel:${contact.phone}`} className="hover:text-brand">
            {contact.phone}
          </a>
          <span className="hidden sm:inline text-gray-300">|</span>
          <a
            href={contact.social.find((s) => s.id === "whatsapp")?.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand hover:text-green-600"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
