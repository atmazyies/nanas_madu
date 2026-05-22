import { useState } from "react";
import { motion } from "framer-motion";
import { ctaData } from "../data/cta";
import { contact } from "../data/contact";
import { usePrototype } from "../context/PrototypeContext";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const { subscribeNewsletter, scrollToShop } = usePrototype();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      subscribeNewsletter(email.trim());
      setEmail("");
    }
  };

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass mt-8 rounded-3xl p-8 sm:p-10"
        >
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                {ctaData.newsletter.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {ctaData.newsletter.subtitle}
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={ctaData.newsletter.placeholder}
                required
                className="flex-1 rounded-full border border-gray-200 px-5 py-3 text-sm outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full gradient-gold px-8 py-3 text-sm font-extrabold text-amber-950 transition-all duration-300 hover:brightness-110 shadow-md hover:shadow-lg"
              >
                {ctaData.newsletter.buttonText}
              </motion.button>
            </form>
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
