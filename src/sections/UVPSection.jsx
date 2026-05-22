import { motion } from "framer-motion";
import { uvp } from "../data/uvp";
import SectionHeading from "../components/SectionHeading";

export default function UVPSection() {
  return (
    <section id="uvp" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-pale via-white to-brand-soft p-8 sm:p-12 lg:p-16">
          <SectionHeading
            title={uvp.title}
            subtitle={uvp.description}
            align="center"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mx-auto -mt-4 mb-12 max-w-3xl text-center text-xl font-bold text-gray-900 sm:text-2xl"
          >
            {uvp.headline}
          </motion.p>

          <div className="grid gap-8 md:grid-cols-3">
            {uvp.points.map((point, i) => (
              <motion.article
                key={point.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-3xl bg-white p-8 text-center shadow-[var(--shadow-soft)]"
              >
                <div className="mx-auto flex h-20 w-20 flex-col items-center justify-center rounded-full bg-brand text-white">
                  <span className="text-2xl font-extrabold">{point.stat}</span>
                  <span className="text-[10px] font-medium uppercase tracking-wider opacity-90">
                    {point.statLabel}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-bold text-gray-900">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {point.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
