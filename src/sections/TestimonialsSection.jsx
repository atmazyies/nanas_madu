import { useState } from "react";
import { motion } from "framer-motion";
import { testimonials } from "../data/testimonials";
import SectionHeading from "../components/SectionHeading";
import LazyImage from "../components/LazyImage";

export default function TestimonialsSection() {
  const [showAll, setShowAll] = useState(false);
  
  const displayedItems = showAll ? testimonials.items : testimonials.items.slice(0, 3);

  return (
    <section id="testimonials" className="pt-20 pb-10 sm:pt-28 sm:pb-12 bg-gradient-to-b from-white to-surface overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={testimonials.title}
          subtitle={testimonials.subtitle}
          align="center"
        />

        <div className="grid gap-8 lg:grid-cols-3 mt-12">
          {displayedItems.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className="flex flex-col rounded-2xl bg-white p-8 shadow-[var(--shadow-card)] border border-gray-100/50 hover:shadow-[var(--shadow-hover)] transition-all"
            >
              {/* Quote Section */}
              <div className="flex-1 mb-8">
                <p className="text-base leading-relaxed text-gray-700">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>
              
              {/* Author Section */}
              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <LazyImage
                  src={item.avatar}
                  alt={item.name}
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-brand-light"
                  wrapperClassName="h-14 w-14 shrink-0 rounded-full"
                />
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    {item.name}
                  </p>
                  <p className="text-xs font-semibold text-brand mt-1">{item.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {testimonials.items.length > 3 && (
          <div className="text-center mt-14">
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
