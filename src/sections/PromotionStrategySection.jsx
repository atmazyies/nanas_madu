import { motion } from "framer-motion";
import {
  HiOutlineGlobe,
  HiOutlineMail,
  HiOutlineSearch,
  HiOutlineSpeakerphone,
} from "react-icons/hi";
import { promotionStrategy } from "../data/promotionStrategy";
import SectionHeading from "../components/SectionHeading";
import { usePrototype } from "../context/PrototypeContext";

const iconMap = {
  social: HiOutlineGlobe,
  email: HiOutlineMail,
  search: HiOutlineSearch,
  ads: HiOutlineSpeakerphone,
};

export default function PromotionStrategySection() {
  const { promoHighlight } = promotionStrategy;
  const { claimPromo, scrollToShop } = usePrototype();

  return (
    <section id="promotion" className="bg-gray-50/80 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={promotionStrategy.title}
          subtitle={promotionStrategy.subtitle}
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {promotionStrategy.strategies.map((strategy, i) => {
            const Icon = iconMap[strategy.icon] || HiOutlineGlobe;
            return (
              <motion.article
                key={strategy.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-3xl bg-white p-6 shadow-[var(--shadow-soft)] sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {strategy.channel}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">
                      {strategy.description}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {strategy.tactics.map((tactic) => (
                        <li
                          key={tactic}
                          className="rounded-full bg-brand-soft px-3 py-1 text-xs font-medium text-brand"
                        >
                          {tactic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 rounded-3xl bg-gradient-to-r from-brand to-green-600 p-8 text-white sm:p-10"
        >
          <h3 className="text-xl font-bold">{promoHighlight.title}</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {promoHighlight.offers.map((offer) => (
              <div
                key={offer.label}
                className="rounded-2xl bg-white/15 px-6 py-4 backdrop-blur-sm"
              >
                <p className="text-sm opacity-90">{offer.label}</p>
                <p className="mt-1 text-2xl font-extrabold">{offer.value}</p>
              </div>
            ))}
          </div>
          <motion.button
            type="button"
            onClick={() => {
              claimPromo("Promo Aktif Econis");
              scrollToShop();
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 inline-flex rounded-full bg-white px-8 py-3 text-sm font-bold text-brand transition-colors hover:bg-brand-soft"
          >
            Klaim Promo Sekarang
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
