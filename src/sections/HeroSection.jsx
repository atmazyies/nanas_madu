import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo nanas madu.png";

const MotionLink = motion(Link);

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 35, filter: "blur(8px)" },
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
    transition: { staggerChildren: 0.03, delayChildren: 0.05 },
  },
};

const charVariants = {
  hidden: { filter: "blur(8px)", opacity: 0, y: 12 },
  visible: { 
    filter: "blur(0px)", 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.34, 1.56, 0.64, 1] } 
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

// Pre-generated coordinates and speeds for the golden sparkles background
const sparkles = [
  { id: 1, size: 4, x: 12, y: 25, delay: 0.5, duration: 12 },
  { id: 2, size: 6, x: 85, y: 18, delay: 1.2, duration: 15 },
  { id: 3, size: 3, x: 28, y: 75, delay: 0.1, duration: 10 },
  { id: 4, size: 5, x: 72, y: 65, delay: 2.3, duration: 14 },
  { id: 5, size: 2, x: 45, y: 15, delay: 3.1, duration: 9 },
  { id: 6, size: 4, x: 60, y: 80, delay: 1.8, duration: 13 },
  { id: 7, size: 5, x: 5, y: 55, delay: 0.9, duration: 11 },
  { id: 8, size: 3, x: 92, y: 45, delay: 2.7, duration: 16 },
  { id: 9, size: 6, x: 38, y: 40, delay: 3.5, duration: 18 },
  { id: 10, size: 3, x: 78, y: 30, delay: 0.4, duration: 12 },
  { id: 11, size: 5, x: 19, y: 88, delay: 1.5, duration: 14 },
  { id: 12, size: 4, x: 67, y: 12, delay: 2.0, duration: 11 },
  { id: 13, size: 2, x: 52, y: 60, delay: 0.8, duration: 10 },
  { id: 14, size: 6, x: 30, y: 30, delay: 2.9, duration: 15 },
  { id: 15, size: 3, x: 81, y: 82, delay: 4.2, duration: 13 }
];

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
      className="force-light relative flex min-h-screen items-center justify-center overflow-hidden pt-40 pb-20"
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

        {/* Premium Drifting Golden Sparkles representing Pineapple Madu sweetness */}
        {sparkles.map((sp) => (
          <motion.div
            key={sp.id}
            className="absolute rounded-full bg-amber-400/25 blur-[1px]"
            style={{
              width: sp.size,
              height: sp.size,
              left: `${sp.x}%`,
              top: `${sp.y}%`,
            }}
            animate={{
              y: ["0px", "-100px", "0px"],
              x: ["0px", "30px", "0px"],
              opacity: [0, 0.6, 0.3, 0.6, 0],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: sp.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: sp.delay,
            }}
          />
        ))}
      </div>

      {/* Left Floating Pineapple Logo (Interactive Fluid Motion) */}
      <motion.div
        initial={{ opacity: 0, x: -80, rotate: -35, scale: 0.8 }}
        animate={{ 
          opacity: [0, 0.85, 0.85], 
          x: 0,
          y: [0, -18, 6, -18, 0],
          rotate: [-20, -14, -26, -14, -20],
          scale: 1
        }}
        transition={{ 
          opacity: { duration: 1.2, ease: "easeOut" },
          x: { duration: 1.2, ease: "easeOut" },
          scale: { duration: 1.2, ease: "easeOut" },
          y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
        whileHover={{ 
          scale: 1.12, 
          rotate: -8, 
          opacity: 1,
          boxShadow: "0 25px 60px rgba(251, 191, 36, 0.45)",
          borderColor: "rgba(255, 255, 255, 0.45)"
        }}
        className="absolute left-[4%] top-[20%] z-10 hidden md:block w-32 h-32 lg:w-48 lg:h-48 rounded-full p-2 lg:p-2 bg-white/10 backdrop-blur-md border border-white/25 shadow-[inset_0_6px_20px_rgba(255,255,255,0.3),_inset_0_-6px_20px_rgba(0,0,0,0.15),_0_20px_45px_rgba(251,191,36,0.25)] overflow-hidden cursor-pointer group transition-shadow duration-300"
      >
        {/* Proportional internal glowing bubble inside glass ring */}
        <div className="absolute inset-1 lg:inset-2 rounded-full bg-gradient-to-br from-amber-400/35 via-amber-500/15 to-transparent blur-lg lg:blur-xl group-hover:scale-115 transition-transform duration-500" />
        <img 
          src={logoImg} 
          alt="Nanas Madu Left Decor" 
          className="relative z-10 w-full h-full object-contain brightness-[1.18] contrast-[1.08] drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)] transition-transform duration-500 group-hover:scale-108" 
        />
      </motion.div>

      {/* Right Floating Pineapple Logo (Interactive Fluid Motion) */}
      <motion.div
        initial={{ opacity: 0, x: 80, rotate: 35, scale: 0.8 }}
        animate={{ 
          opacity: [0, 0.85, 0.85], 
          x: 0,
          y: [0, 18, -6, 18, 0],
          rotate: [20, 26, 14, 26, 20],
          scale: 1
        }}
        transition={{ 
          opacity: { duration: 1.2, ease: "easeOut", delay: 0.2 },
          x: { duration: 1.2, ease: "easeOut", delay: 0.2 },
          scale: { duration: 1.2, ease: "easeOut", delay: 0.2 },
          y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
          rotate: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }
        }}
        whileHover={{ 
          scale: 1.12, 
          rotate: 8, 
          opacity: 1,
          boxShadow: "0 25px 60px rgba(5, 150, 105, 0.45)",
          borderColor: "rgba(255, 255, 255, 0.45)"
        }}
        className="absolute right-[4%] top-[30%] z-10 hidden md:block w-32 h-32 lg:w-48 lg:h-48 rounded-full p-2 lg:p-2 bg-white/10 backdrop-blur-md border border-white/25 shadow-[inset_0_6px_20px_rgba(255,255,255,0.3),_inset_0_-6px_20px_rgba(0,0,0,0.15),_0_20px_45px_rgba(5,150,105,0.25)] overflow-hidden cursor-pointer group transition-shadow duration-300"
      >
        {/* Proportional internal glowing bubble inside glass ring */}
        <div className="absolute inset-1 lg:inset-2 rounded-full bg-gradient-to-br from-emerald-400/35 via-emerald-500/15 to-transparent blur-lg lg:blur-xl group-hover:scale-115 transition-transform duration-500" />
        <img 
          src={logoImg} 
          alt="Nanas Madu Right Decor" 
          className="relative z-10 w-full h-full object-contain brightness-[1.18] contrast-[1.08] drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)] transition-transform duration-500 group-hover:scale-108" 
        />
      </motion.div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="flex flex-col items-center w-full"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-8">
            <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
              <span className="absolute inset-0 bg-gradient-to-r from-amber-300 via-amber-600 to-amber-300 animate-[spin_3s_linear_infinite]" />
              <span className="inline-flex h-full w-full cursor-default items-center justify-center rounded-full bg-slate-950/80 px-6 py-2 text-xs font-bold uppercase tracking-widest text-amber-300 backdrop-blur-xl">
                ✨ Asli Khas Kab. Pemalang
              </span>
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            variants={fadeUp}
            className="text-3xl font-extrabold leading-[1.2] tracking-tight sm:text-6xl lg:text-7xl drop-shadow-2xl mb-8 flex flex-col items-center gap-2"
          >
            <span className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              <AnimatedText text="Pelopor Nanas Madu" className="text-white" />
            </span>
            <span className="block mt-1">
              <AnimatedText text="Premium Asli Pemalang" className="text-amber-400 drop-shadow-lg" />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={fadeUp}
            className="mt-4 max-w-2xl text-base sm:text-xl text-gray-300 drop-shadow-md leading-relaxed font-light px-2 sm:px-0"
          >
            Sajian premium Nanas Madu asli Pemalang. Ditanam dengan cinta, dipanen pada tingkat kemanisan sempurna. Nikmati kesegaran tropis kaya manfaat di setiap gigitan.
          </motion.p>

          {/* CTA Button */}
          <motion.div 
            variants={fadeUp}
            className="mt-12"
          >
            <MotionLink
              to="/shop"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 px-10 py-4 text-lg font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 border border-amber-300/30 cursor-pointer"
            >
              {/* Shimmer overlay sweep on hover */}
              <motion.span 
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                variants={{
                  hover: {
                    x: "100%",
                    transition: { duration: 0.8, ease: "easeInOut" }
                  }
                }}
              />
              {/* Glowing aura background on hover */}
              <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <span className="relative z-10">Pesan Sekarang</span>
              <motion.span
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </MotionLink>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
