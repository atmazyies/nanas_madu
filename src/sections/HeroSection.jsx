import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { heroData } from "../data/hero";
import FloatingLeaves from "../components/FloatingLeaves";
import LazyImage from "../components/LazyImage";
import { usePrototype } from "../context/PrototypeContext";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const wordStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const wordItem = {
  hidden: { opacity: 0, y: 20, rotateX: -40 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HeroSection() {
  const { scrollToShop } = usePrototype();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yBottles = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  const titleWords = heroData.title.split(" ");

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-[90vh] items-center overflow-hidden pt-24"
    >
      {/* Animated gradient background */}
      <motion.div
        style={{ y: yBg }}
        className="pointer-events-none absolute inset-0 hero-gradient-bg"
        aria-hidden="true"
      />

      {/* Floating orbs */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-24 right-[10%] h-72 w-72 rounded-full bg-brand-pale/70 blur-3xl"
        aria-hidden="true"
      />
      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, 25, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-20 left-[5%] h-96 w-96 rounded-full bg-gray-100/90 blur-3xl"
        aria-hidden="true"
      />
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="pointer-events-none absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-light/30 blur-2xl"
        aria-hidden="true"
      />

      <FloatingLeaves />

      <motion.div
        style={{ opacity: opacityHero }}
        className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-12 lg:gap-4 lg:px-8 lg:py-0"
      >
        {/* Left content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-center lg:col-span-4 lg:text-left"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block rounded-full bg-brand-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand"
          >
            <motion.span
              animate={{ opacity: [1, 0.6, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {heroData.badge}
            </motion.span>
          </motion.span>

          <motion.p variants={fadeUp} className="mt-4 text-sm font-semibold text-brand">
            {heroData.productName}
          </motion.p>

          <motion.h1
            variants={wordStagger}
            className="mt-2 flex flex-wrap justify-center gap-x-2 gap-y-1 text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl lg:justify-start lg:text-[3.25rem]"
          >
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                variants={wordItem}
                className="inline-block"
                style={{ perspective: 400 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-md line-clamp-4 text-sm leading-relaxed text-gray-500 lg:mx-0 lg:text-base"
          >
            {heroData.subtitle}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8">
            <motion.button
              type="button"
              onClick={scrollToShop}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 16px 32px -8px rgba(239,68,68,0.5)",
              }}
              whileTap={{ scale: 0.97 }}
              animate={{
                boxShadow: [
                  "0 8px 24px -6px rgba(239,68,68,0.35)",
                  "0 12px 28px -6px rgba(239,68,68,0.45)",
                  "0 8px 24px -6px rgba(239,68,68,0.35)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-2 rounded-full bg-cta px-8 py-3.5 text-sm font-semibold text-white"
            >
              {heroData.cta}
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Center bottles */}
        <motion.div
          style={{ y: yBottles }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex min-h-[380px] items-end justify-center lg:col-span-5 lg:min-h-[520px]"
        >
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.85, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 h-40 w-72 -translate-x-1/2 rounded-[50%] bg-gradient-to-t from-orange-200/50 via-amber-100/40 to-transparent blur-xl"
            aria-hidden="true"
          />
          <motion.div
            animate={{ scale: [1, 1.15, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-16 left-[18%] h-20 w-20 rounded-full bg-orange-300/40 blur-lg"
            aria-hidden="true"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
            className="absolute bottom-28 right-[15%] h-16 w-16 rounded-full bg-green-300/40 blur-lg"
            aria-hidden="true"
          />

          <div className="relative flex h-[420px] w-full max-w-md items-end justify-center sm:h-[480px]">
            <motion.div
              initial={{ opacity: 0, x: -40, rotate: -8 }}
              animate={{ opacity: 1, x: 0, rotate: 0, y: [0, -10, 0] }}
              transition={{
                opacity: { duration: 0.8, delay: 0.5 },
                x: { duration: 0.8, delay: 0.5 },
                y: { duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
              }}
              className="absolute bottom-0 left-[5%] z-10 w-[28%] sm:left-[10%]"
            >
              <LazyImage
                src={heroData.bottles[1].image}
                alt={heroData.bottles[1].alt}
                className="h-auto w-full object-contain drop-shadow-xl"
                wrapperClassName="w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              animate={{
                opacity: 1,
                y: [0, -14, 0],
                scale: 1,
              }}
              transition={{
                opacity: { duration: 0.9, delay: 0.3 },
                y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
                scale: { duration: 0.9, delay: 0.3 },
              }}
              className="relative z-20 w-[42%]"
            >
              <LazyImage
                src={heroData.bottles[0].image}
                alt={heroData.bottles[0].alt}
                className="h-auto w-full object-contain drop-shadow-2xl"
                wrapperClassName="w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40, rotate: 8 }}
              animate={{ opacity: 1, x: 0, rotate: 0, y: [0, -12, 0] }}
              transition={{
                opacity: { duration: 0.8, delay: 0.5 },
                x: { duration: 0.8, delay: 0.5 },
                y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 },
              }}
              className="absolute bottom-0 right-[5%] z-10 w-[28%] sm:right-[10%]"
            >
              <LazyImage
                src={heroData.bottles[2].image}
                alt={heroData.bottles[2].alt}
                className="h-auto w-full object-contain drop-shadow-xl"
                wrapperClassName="w-full"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Right glass card */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotateY: -15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden lg:col-span-3 lg:flex lg:justify-end"
        >
          <motion.div
            whileHover={{ scale: 1.03, rotateY: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="glass max-w-[220px] rounded-3xl p-6 shadow-[var(--shadow-soft)]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.p
              animate={{ color: ["#22c55e", "#16a34a", "#22c55e"] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-xs font-medium uppercase tracking-wider text-brand"
            >
              Pure Organic
            </motion.p>
            <motion.p
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.9 }}
              className="mt-2 text-2xl font-bold text-gray-900"
            >
              500+
            </motion.p>
            <p className="text-sm text-gray-500">Healthy products</p>
            <div className="mt-4 flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + i * 0.1, type: "spring" }}
                  className="h-8 w-8 rounded-full border-2 border-white bg-brand-light"
                />
              ))}
            </div>
            <p className="mt-3 text-xs text-gray-400">Trusted by 10k+ customers</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
