import { motion } from "framer-motion";
import {
  HiOutlineUserGroup,
  HiOutlineBriefcase,
  HiOutlineHome,
  HiOutlineLightningBolt,
} from "react-icons/hi";
import { targetMarket } from "../data/targetMarket";
import SectionHeading from "../components/SectionHeading";

const iconMap = {
  users: HiOutlineUserGroup,
  briefcase: HiOutlineBriefcase,
  home: HiOutlineHome,
  fitness: HiOutlineLightningBolt,
};

export default function TargetMarketSection() {
  return (
    <section id="target-market" className="bg-brand-soft/30 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={targetMarket.title}
          subtitle={targetMarket.subtitle}
          align="center"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {targetMarket.segments.map((segment, i) => {
            const Icon = iconMap[segment.icon] || HiOutlineUserGroup;
            return (
              <motion.article
                key={segment.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass rounded-3xl p-6 shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-card)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-bold text-gray-900">
                  {segment.title}
                </h3>
                <span className="mt-1 inline-block rounded-full bg-brand-soft px-3 py-0.5 text-xs font-medium text-brand">
                  {segment.age}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {segment.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
