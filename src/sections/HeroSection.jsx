import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo nanas madu.png";

const MotionLink = motion(Link);

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const textContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
};

const charVariants = {
  hidden: { filter: "blur(10px)", opacity: 0, y: 10 },
  visible: { 
    filter: "blur(0px)", 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const AnimatedText = ({ text, className }) => {
  const words = text.split(" ");
  return (
    <motion.span 
      variants={textContainerVariants}
      className={`inline-flex flex-wrap justify-center ${className}`}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={charVariants}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
};

export default function HeroSection() {
  const { scrollY } = useScroll();
  
  // Transform background gradient based on scroll position
  const background = useTransform(
    scrollY,
    [0, 800],
    [
      "radial-gradient(ellipse at top, #064e3b 0%, #022c22 40%, #0f172a 100%)",
      "radial-gradient(ellipse at bottom, #422006 0%, #064e3b 50%, #020617 100%)"
    ]
  );

  return (
    <motion.section
      id="home"
      style={{ background }}
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-40 pb-20"
    >
      {/* Decorative premium elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[30%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-amber-500/5 blur-[120px]"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-emerald-500/10 blur-[120px]"
        />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40 mix-blend-overlay"></div>
      </div>

      {/* Left Floating Pineapple Logo */}
      <motion.div
        initial={{ opacity: 0, x: -50, rotate: -25 }}
        animate={{ 
          opacity: [0, 0.8, 0.8], 
          x: 0,
          y: [0, -20, 0],
          rotate: [-20, -17, -20]
        }}
        transition={{ 
          opacity: { duration: 1 },
          x: { duration: 1 },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" }
        }}
        whileHover={{ scale: 1.1, rotate: -10, opacity: 0.98 }}
        className="absolute left-[4%] top-[20%] z-10 hidden md:block w-32 h-32 lg:w-48 lg:h-48 rounded-full p-2 lg:p-2 bg-white/10 backdrop-blur-md border border-white/25 shadow-[inset_0_6px_20px_rgba(255,255,255,0.3),_inset_0_-6px_20px_rgba(0,0,0,0.15),_0_20px_45px_rgba(251,191,36,0.25)] overflow-hidden cursor-pointer group"
      >
        {/* Proportional internal glowing bubble inside glass ring */}
        <div className="absolute inset-1 lg:inset-2 rounded-full bg-gradient-to-br from-amber-400/35 via-amber-500/15 to-transparent blur-lg lg:blur-xl group-hover:scale-110 transition-transform duration-500" />
        <img 
          src={logoImg} 
          alt="Nanas Madu Left Decor" 
          className="relative z-10 w-full h-full object-contain brightness-[1.18] contrast-[1.08] drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)] transition-transform duration-500 group-hover:scale-108" 
        />
      </motion.div>

      {/* Right Floating Pineapple Logo */}
      <motion.div
        initial={{ opacity: 0, x: 50, rotate: 25 }}
        animate={{ 
          opacity: [0, 0.8, 0.8], 
          x: 0,
          y: [0, 20, 0],
          rotate: [20, 23, 20]
        }}
        transition={{ 
          opacity: { duration: 1 },
          x: { duration: 1 },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
          rotate: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.2 }
        }}
        whileHover={{ scale: 1.1, rotate: 10, opacity: 0.98 }}
        className="absolute right-[4%] top-[30%] z-10 hidden md:block w-32 h-32 lg:w-48 lg:h-48 rounded-full p-2 lg:p-2 bg-white/10 backdrop-blur-md border border-white/25 shadow-[inset_0_6px_20px_rgba(255,255,255,0.3),_inset_0_-6px_20px_rgba(0,0,0,0.15),_0_20px_45px_rgba(5,150,105,0.25)] overflow-hidden cursor-pointer group"
      >
        {/* Proportional internal glowing bubble inside glass ring */}
        <div className="absolute inset-1 lg:inset-2 rounded-full bg-gradient-to-br from-emerald-400/35 via-emerald-500/15 to-transparent blur-lg lg:blur-xl group-hover:scale-110 transition-transform duration-500" />
        <img 
          src={logoImg} 
          alt="Nanas Madu Right Decor" 
          className="relative z-10 w-full h-full object-contain brightness-[1.18] contrast-[1.08] drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)] transition-transform duration-500 group-hover:scale-108" 
        />
      </motion.div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-6 text-center">
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
              <span className="absolute inset-0 bg-gradient-to-r from-amber-300 via-amber-600 to-amber-300 animate-[spin_3s_linear_infinite]" />
              <span className="inline-flex h-full w-full cursor-default items-center justify-center rounded-full bg-slate-950/80 px-6 py-2 text-xs font-bold uppercase tracking-widest text-amber-300 backdrop-blur-xl">
                ✨ Asli Khas Kab. Pemalang
              </span>
            </span>
          </div>

          <motion.h1 
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="text-3xl font-extrabold leading-[1.2] tracking-tight sm:text-6xl lg:text-7xl drop-shadow-2xl mb-8 flex flex-col items-center gap-2"
          >
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              <AnimatedText text="Pelopor Nanas Madu" className="text-white" />
            </motion.div>
            <motion.div variants={fadeUp}>
              <AnimatedText text="Premium Asli Pemalang" className="text-amber-400 drop-shadow-lg" />
            </motion.div>
          </motion.h1>

          <p className="mt-4 max-w-2xl text-base sm:text-xl text-gray-300 drop-shadow-md leading-relaxed font-light px-2 sm:px-0">
            Sajian premium Nanas Madu asli Pemalang. Ditanam dengan cinta, dipanen pada tingkat kemanisan sempurna. Nikmati kesegaran tropis kaya manfaat di setiap gigitan.
          </p>

          <div className="mt-12">
            <MotionLink
              to="/shop"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(251, 191, 36, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-700 px-10 py-4 text-lg font-bold text-white shadow-2xl transition-all duration-300 hover:brightness-110 border border-amber-300/30 cursor-pointer"
            >
              <span className="relative z-10">Pesan Sekarang</span>
              <motion.span
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </MotionLink>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
