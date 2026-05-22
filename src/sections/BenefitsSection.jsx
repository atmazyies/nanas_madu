import { motion } from "framer-motion";
import {
  HiOutlineShieldCheck,
  HiOutlineLightningBolt,
  HiOutlineHeart,
  HiOutlineCheckCircle,
  HiOutlineCube,
} from "react-icons/hi";
import { IoLeafOutline } from "react-icons/io5";
import { benefits } from "../data/benefits";
import SectionHeading from "../components/SectionHeading";

const iconMap = {
  shield: HiOutlineShieldCheck,
  bolt: HiOutlineLightningBolt,
  heart: HiOutlineHeart,
  leaf: IoLeafOutline,
  check: HiOutlineCheckCircle,
  box: HiOutlineCube,
};

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={benefits.title}
          subtitle={benefits.subtitle}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.items.map((item, i) => {
            const Icon = iconMap[item.icon] || HiOutlineCheckCircle;
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="group flex gap-4 rounded-3xl bg-white p-6 shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-hover)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
