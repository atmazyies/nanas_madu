import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLeaf, FaStore, FaShoppingBasket } from "react-icons/fa";

const milestones = [
  {
    id: 1,
    number: "50+",
    text: "Hektar Kebun Binaan",
    icon: FaLeaf,
    delay: 0.1,
    href: "/about#mitra-kebun"
  },
  {
    id: 2,
    number: "200+",
    text: "Mitra Outlet Jus",
    icon: FaStore,
    delay: 0.2,
    href: "/about#mitra-outlet"
  },
  {
    id: 3,
    number: "500+",
    text: "Tersedia di Ritel",
    icon: FaShoppingBasket,
    delay: 0.3,
    href: "/about#mitra-ritel"
  },
];

export default function UVPSection() {
  return (
    <section className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Cerita Honea: <br className="hidden sm:block" />
            <span className="text-gradient-brand">Membawa Manisnya Pemalang Sejak 2018</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Berawal dari semangat memberdayakan petani lokal, Honea kini hadir membawa kualitas nanas terbaik Pemalang ke seluruh penjuru negeri dengan standar mutu yang tak tertandingi.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {milestones.map((milestone) => (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: milestone.delay }}
                className="flex flex-col items-center rounded-3xl bg-white border border-gray-100/80 p-10 shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-hover)] hover:-translate-y-1.5 hover:border-brand-light/20"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-soft to-brand-pale text-brand shadow-sm">
                  <milestone.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <dt className="text-5xl font-extrabold tracking-tight text-gradient-brand">
                  {milestone.number}
                </dt>
                <dd className="mt-4 text-center text-base font-bold leading-7 text-gray-600">
                  {milestone.text}
                </dd>
                <Link
                  to={milestone.href}
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-brand hover:text-green-600 hover:translate-x-0.5 transition-all"
                >
                  Detail &rarr;
                </Link>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
