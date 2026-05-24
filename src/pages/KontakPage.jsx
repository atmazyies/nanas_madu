import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineClock,
  HiCheck,
} from "react-icons/hi";
import { FaWhatsapp, FaInstagram, FaTiktok, FaFacebookF, FaYoutube } from "react-icons/fa";
import PageBanner from "../components/PageBanner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { contact } from "../data/contact";

const socialIconMap = {
  instagram: FaInstagram,
  facebook: FaFacebookF,
  tiktok: FaTiktok,
  youtube: FaYoutube,
  whatsapp: FaWhatsapp,
};

export default function KontakPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <PageBanner
        title="Hubungi Kami"
        subtitle="Tim Honea siap membantu pesanan, pertanyaan, dan kebutuhan kemitraan Anda dari Semarang."
        breadcrumbs={[{ label: "Kontak" }]}
      />

      <main className="bg-surface">
        {/* Contact Info + Form */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Left: Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    Informasi <span className="text-gradient-brand font-extrabold">Kontak</span>
                  </h2>
                  <p className="mt-3 text-gray-600">
                    Kantor pusat kami di Semarang melayani Anda dengan profesional
                  </p>
                </div>

                <div className="space-y-6 rounded-3xl bg-white p-8 shadow-[var(--shadow-card)]">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                      <HiOutlineLocationMarker className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Alamat Kantor</p>
                      <p className="mt-1 text-sm text-gray-500">{contact.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                      <HiOutlinePhone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Telepon</p>
                      <a href={`tel:${contact.phone}`} className="mt-1 text-sm text-gray-500 hover:text-brand transition-colors">
                        {contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                      <FaWhatsapp className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">WhatsApp CS</p>
                      <a
                        href={`https://wa.me/${contact.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 text-sm text-brand font-medium hover:text-brand-dark transition-colors"
                      >
                        +62 812-3456-7890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                      <HiOutlineMail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a href={`mailto:${contact.email}`} className="mt-1 text-sm text-gray-500 hover:text-brand transition-colors">
                        {contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-golden-pale text-golden">
                      <HiOutlineClock className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Jam Operasional CS</p>
                      <p className="mt-1 text-sm text-gray-500">{contact.hours}</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="rounded-3xl bg-white p-8 shadow-[var(--shadow-card)]">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Media Sosial</h3>
                  <div className="flex flex-wrap gap-3">
                    {contact.social.map((s) => {
                      const Icon = socialIconMap[s.id] || FaInstagram;
                      return (
                        <a
                          key={s.id}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 rounded-2xl bg-white/60 border border-gray-100 backdrop-blur-md px-5 py-3 text-sm font-semibold text-brand transition-all duration-300 hover:gradient-brand hover:text-white hover:border-transparent hover:scale-105 hover:shadow-md"
                        >
                          <Icon className="h-5 w-5" />
                          {s.label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>

              {/* Right: Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                <div className="rounded-3xl bg-white p-8 shadow-[var(--shadow-card)] sm:p-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Kirim Pesan</h3>
                  <p className="text-sm text-gray-500 mb-8">
                    Isi formulir di bawah dan tim kami akan merespons dalam 1x24 jam
                  </p>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-16 text-center"
                    >
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-soft text-brand mb-6 shadow-md ring-4 ring-brand/10">
                        <HiCheck className="h-10 w-10" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">Pesan Terkirim!</h4>
                      <p className="mt-2 text-gray-500">Terima kasih, tim kami akan segera menghubungi Anda.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Nama Lengkap
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20"
                          placeholder="Masukkan nama Anda"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Email
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20"
                          placeholder="email@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Subjek
                        </label>
                        <select
                          id="contact-subject"
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          required
                          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20 bg-white"
                        >
                          <option value="">Pilih subjek</option>
                          <option value="order">Pertanyaan Pesanan</option>
                          <option value="product">Informasi Produk</option>
                          <option value="partnership">Kemitraan & B2B</option>
                          <option value="complaint">Keluhan & Saran</option>
                          <option value="other">Lainnya</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Pesan
                        </label>
                        <textarea
                          id="contact-message"
                          rows={5}
                          required
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20 resize-none"
                          placeholder="Tulis pesan Anda di sini..."
                        />
                      </div>
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02, boxShadow: "0 16px 40px -12px rgba(5,150,105,0.4)" }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full rounded-xl gradient-brand px-8 py-3.5 text-sm font-extrabold text-white shadow-xl transition-all duration-300 hover:brightness-110 border border-brand-light/10"
                      >
                        Kirim Pesan
                      </motion.button>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Google Maps */}
        <section className="pb-20 sm:pb-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="overflow-hidden rounded-3xl shadow-[var(--shadow-card)]"
            >
              <iframe
                title="Lokasi Honea Semarang"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2981870038883!2d110.41249731477238!3d-6.987026094965157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4ec3f92173%3A0x4039d11a6c4bfe0!2sJl.%20Pandanaran%2C%20Semarang!5e0!3m2!1sid!2sid!4v1716400000000!5m2!1sid!2sid"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
