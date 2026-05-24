import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";
import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { faqData } from "../data/faq";

function AccordionItem({ item, isOpen, toggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 overflow-hidden"
    >
      <button
        type="button"
        onClick={toggle}
        className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-brand-soft/30"
      >
        <span className="text-base font-semibold text-gray-900 pr-4">{item.question}</span>
        <HiChevronDown
          className={`h-5 w-5 shrink-0 text-brand transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 border-t border-gray-100 pt-4">
              <p className="text-sm leading-relaxed text-gray-600">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQPage() {
  const [openId, setOpenId] = useState(1);

  return (
    <>
      <Navbar />
      <PageBanner
        title="FAQ"
        subtitle={faqData.subtitle}
        breadcrumbs={[{ label: "FAQ" }]}
      />

      <main className="bg-surface">
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="space-y-4">
              {faqData.items.map((item) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isOpen={openId === item.id}
                  toggle={() => setOpenId(openId === item.id ? null : item.id)}
                />
              ))}
            </div>

            {/* CTA to Kontak */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <div className="glass rounded-3xl p-10 shadow-[var(--shadow-card)]">
                <h3 className="text-xl font-bold text-gray-900">Masih punya pertanyaan?</h3>
                <p className="mt-3 text-gray-600">
                  Tim Customer Service kami di Semarang siap membantu Anda
                </p>
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/kontak"
                    className="inline-flex rounded-full gradient-brand px-8 py-3.5 text-sm font-extrabold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:brightness-110"
                  >
                    Hubungi Kami
                  </Link>
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-brand-light/30 px-8 py-3 text-sm font-extrabold text-brand transition-all duration-300 hover:gradient-brand hover:text-white hover:border-transparent hover:scale-105 hover:shadow-lg"
                  >
                    💬 Chat WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
