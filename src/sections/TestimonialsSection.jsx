import { motion } from "framer-motion";
import { HiStar } from "react-icons/hi";
import { testimonials } from "../data/testimonials";
import SectionHeading from "../components/SectionHeading";
import LazyImage from "../components/LazyImage";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={testimonials.title}
          subtitle={testimonials.subtitle}
          align="center"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.items.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="flex flex-col rounded-3xl bg-white p-6 shadow-[var(--shadow-soft)]"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <HiStar
                    key={idx}
                    className={`h-4 w-4 ${
                      idx < Math.floor(item.rating)
                        ? "text-amber-400"
                        : "text-gray-200"
                    }`}
                  />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-4">
                <LazyImage
                  src={item.avatar}
                  alt={item.name}
                  className="h-10 w-10 rounded-full object-cover"
                  wrapperClassName="h-10 w-10 shrink-0 rounded-full"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-400">{item.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
