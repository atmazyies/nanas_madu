import { useState } from "react";
import { motion } from "framer-motion";
import { testimonials } from "../data/testimonials";
import SectionHeading from "../components/SectionHeading";
import LazyImage from "../components/LazyImage";

export default function TestimonialsSection() {
  const [showAll, setShowAll] = useState(false);
  
  const displayedItems = showAll ? testimonials.items : testimonials.items.slice(0, 4);

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-gradient-to-b from-white to-surface overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={testimonials.title}
          subtitle={testimonials.subtitle}
          align="center"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-12">
          {displayedItems.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.08 }}
              whileHover={{ y: -4 }}
              className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-[var(--shadow-card)] border border-gray-100/50 hover:shadow-[var(--shadow-hover)] transition-all"
            >
              <p className="flex-1 text-sm leading-relaxed text-gray-600 italic">
                &ldquo;{item.text}&rdquo;
              </p>
              
              <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-4">
                <LazyImage
                  src={item.avatar}
                  alt={item.name}
                  className="h-11 w-11 rounded-full object-cover ring-2 ring-brand-soft"
                  wrapperClassName="h-11 w-11 shrink-0 rounded-full"
                />
                <div>
                  <p className="text-sm font-extrabold text-gray-900">
                    {item.name}
                  </p>
                  <p className="text-xs font-semibold text-brand mt-0.5">{item.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {testimonials.items.length > 4 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center justify-center rounded-full bg-white border-2 border-brand-light/30 px-10 py-3.5 text-sm font-bold text-brand shadow-sm transition-all hover:bg-brand-soft hover:border-transparent hover:shadow-md hover:scale-105"
            >
              {showAll ? "Tampilkan Lebih Sedikit" : "Baca Kisah Selengkapnya"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
