import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineUser, HiOutlineMail, HiOutlineLockClosed, HiEye, HiEyeOff } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { IoArrowBackOutline, IoShieldCheckmarkOutline, IoHeartOutline, IoSparklesOutline } from "react-icons/io5";
import logoImg from "../assets/logo nanas madu.png";
import petaniSunset from "../assets/petani_sunset.png";

// Animation Variants for staggered inputs
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function RegisterPage() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  const showToast = (message, type = "success") => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!fullName || !email || !password || !confirmPassword) {
      showToast("Harap isi semua kolom!", "error");
      return;
    }
    if (password !== confirmPassword) {
      showToast("Konfirmasi kata sandi tidak cocok!", "error");
      return;
    }
    if (!agreeTerms) {
      showToast("Anda harus menyetujui syarat & ketentuan!", "error");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      showToast("Pendaftaran berhasil! Mengalihkan...", "success");
      setTimeout(() => {
        navigate("/login");
      }, 1200);
    }, 1200);
  };

  const handleGoogleRegister = () => {
    setIsLoading(true);
    showToast("Menghubungkan dengan Google...", "info");

    setTimeout(() => {
      setIsLoading(false);
      showToast("Pendaftaran dengan Google berhasil!", "success");
      setTimeout(() => {
        navigate("/");
      }, 1200);
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-[#FAFDFB] overflow-hidden select-none font-sans relative">
      
      {/* 1. LEFT SIDE: Elegant Branding Panel (Visible only on Desktop) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-tr from-brand-dark via-brand to-golden/90 items-center justify-center p-12 overflow-hidden">
        
        {/* Background Image Blend */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity pointer-events-none" 
          style={{ backgroundImage: `url(${petaniSunset})` }}
        />
        <div className="absolute inset-0 bg-brand-dark/20 backdrop-blur-[2px] pointer-events-none" />

        {/* Dynamic Glowing Blobs inside Left Panel */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-10%] w-96 h-96 rounded-full bg-golden-light/20 blur-[80px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.15, 1], rotate: [360, 180, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] left-[-10%] w-96 h-96 rounded-full bg-brand-light/30 blur-[80px]"
        />

        {/* Floating elements inside Left Panel */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white/10 rounded-full"
              style={{
                width: Math.random() * 20 + 8,
                height: Math.random() * 20 + 8,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -60, 0],
                x: [0, Math.random() * 30 - 15, 0],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        {/* Core Content */}
        <div className="z-10 w-full max-w-lg text-white flex flex-col justify-between h-full">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2.5 hover:opacity-90 transition-opacity duration-300 w-fit">
            <div className="bg-white/95 p-2 rounded-2xl shadow-lg border border-white/20">
              <img src={logoImg} alt="Honea Logo" className="h-10 w-auto object-contain" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-extrabold text-[22px] tracking-tight text-white leading-[1.1]">Honea</span>
              <span className="text-[8px] font-bold tracking-[0.15em] text-golden-light uppercase mt-0.5">Asli Khas Pemalang</span>
            </div>
          </Link>

          {/* Inspirational Taglines */}
          <div className="my-auto py-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/10 border border-white/20 backdrop-blur-sm text-golden-light mb-6 uppercase tracking-wider">
                <IoSparklesOutline className="animate-spin text-[14px]" /> Daftar & Berbelanja
              </span>
              <h1 className="text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight text-white mb-6">
                Bergabunglah dengan <br />
                <span className="text-gradient-gold drop-shadow-md">Keluarga Honea</span>
              </h1>
              <p className="text-white/80 text-base leading-relaxed mb-8 max-w-md">
                Dapatkan akses langsung ke produk madu nanas terlezat, penawaran diskon khusus anggota baru, serta pelacakan pesanan Anda dengan mudah.
              </p>
            </motion.div>

            {/* Micro Benefits Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              <div className="bg-white/10 border border-white/10 backdrop-blur-md rounded-2xl p-4 transition-all duration-300 hover:bg-white/15 hover:translate-y-[-2px]">
                <IoShieldCheckmarkOutline className="text-golden-light text-2xl mb-2" />
                <h4 className="text-sm font-bold text-white">Diskon Member</h4>
                <p className="text-xs text-white/60 mt-1">Potongan 20% belanja perdana.</p>
              </div>
              <div className="bg-white/10 border border-white/10 backdrop-blur-md rounded-2xl p-4 transition-all duration-300 hover:bg-white/15 hover:translate-y-[-2px]">
                <IoHeartOutline className="text-golden-light text-2xl mb-2" />
                <h4 className="text-sm font-bold text-white">Produk Eksklusif</h4>
                <p className="text-xs text-white/60 mt-1">Hanya untuk pengguna terdaftar.</p>
              </div>
            </motion.div>
          </div>

          {/* Footer inside Left Panel */}
          <div className="text-xs text-white/40 flex justify-between border-t border-white/10 pt-6">
            <span>© 2026 Honea Indonesia.</span>
            <span>Semua Hak Dilindungi.</span>
          </div>
        </div>
      </div>

      {/* 2. RIGHT SIDE: Form Panel (Full width on Mobile) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 relative overflow-hidden bg-[#FAFDFB]">
        
        {/* Dynamic Moving Colorful Glass Blobs behind the card */}
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -60, 40, 0],
            scale: [1, 1.25, 0.9, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[10%] w-72 h-72 rounded-full bg-brand/15 blur-[60px] pointer-events-none"
        />
        <motion.div
          animate={{
            x: [0, -60, 50, 0],
            y: [0, 80, -30, 0],
            scale: [1, 0.85, 1.2, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[15%] right-[10%] w-80 h-80 rounded-full bg-golden/15 blur-[65px] pointer-events-none"
        />

        {/* Return to Home link (Floating) */}
        <Link
          to="/"
          className="absolute top-6 right-6 z-25 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-gray-600 bg-white/80 hover:bg-white hover:text-brand border border-gray-150 shadow-sm transition-all duration-300 hover:translate-x-[-2px] active:scale-95 outline-none"
        >
          <IoArrowBackOutline className="h-4 w-4" />
          Beranda
        </Link>

        {/* Form Content Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-md z-10 my-4"
        >
          {/* Main Glass Card */}
          <div className="bg-white/80 border border-white/50 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 shadow-[0_25px_55px_rgba(5,150,105,0.06),_0_10px_20px_rgba(5,150,105,0.02)] relative overflow-hidden">
            
            {/* Subtle Gradient Border Accent on Card Top */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand via-golden-light to-brand" />

            {/* Mobile-only Header */}
            <div className="flex flex-col items-center mb-6 text-center">
              <Link to="/" className="lg:hidden flex items-center gap-1.5 mb-5 outline-none">
                <img src={logoImg} alt="Honea Logo" className="h-10 w-auto object-contain" />
                <div className="flex flex-col text-left leading-none">
                  <span className="font-extrabold text-[18px] tracking-tight text-gray-900 leading-[1.1]">Honea</span>
                  <span className="text-[7px] font-bold tracking-[0.1em] text-brand-dark uppercase mt-0.5">Asli Khas Pemalang</span>
                </div>
              </Link>
              
              <motion.h2 
                variants={itemVariants}
                className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight"
              >
                Daftar Akun Baru
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-sm text-gray-500 mt-2 font-medium"
              >
                Buat akun gratis Anda sekarang juga
              </motion.p>
            </div>

            {/* Form */}
            <form onSubmit={handleRegister} className="space-y-4">
              
              {/* Full Name */}
              <motion.div variants={itemVariants}>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                  Nama Lengkap
                </label>
                <div className="relative group">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400 group-focus-within:text-brand transition-colors duration-300 pointer-events-none">
                    <HiOutlineUser className="h-5 w-5" />
                  </span>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Nama Lengkap Anda"
                    className="block w-full pl-11 pr-4 py-2.5 rounded-2xl bg-white/90 border border-gray-200/80 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-brand/10 focus:border-brand transition-all duration-300 shadow-sm"
                    required
                  />
                </div>
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants}>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                  Alamat Email
                </label>
                <div className="relative group">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400 group-focus-within:text-brand transition-colors duration-300 pointer-events-none">
                    <HiOutlineMail className="h-5 w-5" />
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="block w-full pl-11 pr-4 py-2.5 rounded-2xl bg-white/90 border border-gray-200/80 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-brand/10 focus:border-brand transition-all duration-300 shadow-sm"
                    required
                  />
                </div>
              </motion.div>

              {/* Password */}
              <motion.div variants={itemVariants}>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                  Kata Sandi
                </label>
                <div className="relative group">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400 group-focus-within:text-brand transition-colors duration-300 pointer-events-none">
                    <HiOutlineLockClosed className="h-5 w-5" />
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="block w-full pl-11 pr-12 py-2.5 rounded-2xl bg-white/90 border border-gray-200/80 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-brand/10 focus:border-brand transition-all duration-300 shadow-sm"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-brand transition-colors duration-300 focus:outline-none"
                  >
                    {showPassword ? <HiEyeOff className="h-5 w-5" /> : <HiEye className="h-5 w-5" />}
                  </button>
                </div>
              </motion.div>

              {/* Confirm Password */}
              <motion.div variants={itemVariants}>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                  Konfirmasi Kata Sandi
                </label>
                <div className="relative group">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400 group-focus-within:text-brand transition-colors duration-300 pointer-events-none">
                    <HiOutlineLockClosed className="h-5 w-5" />
                  </span>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="block w-full pl-11 pr-12 py-2.5 rounded-2xl bg-white/90 border border-gray-200/80 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-brand/10 focus:border-brand transition-all duration-300 shadow-sm"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-brand transition-colors duration-300 focus:outline-none"
                  >
                    {showConfirmPassword ? <HiEyeOff className="h-5 w-5" /> : <HiEye className="h-5 w-5" />}
                  </button>
                </div>
              </motion.div>

              {/* Terms and Conditions Checkbox */}
              <motion.div variants={itemVariants} className="flex items-start text-xs pt-0.5">
                <label className="flex items-start gap-2.5 cursor-pointer text-gray-600 font-semibold select-none group">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={() => setAgreeTerms(!agreeTerms)}
                    className="h-4.5 w-4.5 rounded-lg border-gray-300 text-brand focus:ring-brand/20 cursor-pointer transition-colors duration-300 mt-0.5 accent-brand"
                  />
                  <span className="leading-tight group-hover:text-gray-900 transition-colors">
                    Saya menyetujui{" "}
                    <a href="#" className="font-bold text-brand hover:underline">Syarat & Ketentuan</a>{" "}
                    dan{" "}
                    <a href="#" className="font-bold text-brand hover:underline">Kebijakan Privasi</a>
                  </span>
                </label>
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={itemVariants} className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center py-3 px-4 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-brand to-golden shadow-[0_6px_20px_rgba(5,150,105,0.15)] hover:shadow-[0_8px_30px_rgba(5,150,105,0.25)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 focus:outline-none disabled:opacity-60 disabled:pointer-events-none"
                >
                  {isLoading ? (
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  ) : (
                    "Daftar Sekarang"
                  )}
                </button>
              </motion.div>
            </form>

            {/* Divider */}
            <motion.div variants={itemVariants} className="relative my-6">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-150" />
              </div>
              <div className="relative flex justify-center text-xs uppercase tracking-wider">
                <span className="bg-[#FAFDFB]/90 px-3.5 text-gray-400 font-bold rounded-full">
                  Atau daftar dengan
                </span>
              </div>
            </motion.div>

            {/* Google Signup Button */}
            <motion.div variants={itemVariants}>
              <button
                type="button"
                onClick={handleGoogleRegister}
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-3 py-2.5 px-4 rounded-2xl bg-white hover:bg-gray-50 text-gray-700 text-sm font-bold border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300 active:scale-[0.99] outline-none disabled:opacity-60 disabled:pointer-events-none"
              >
                <FcGoogle className="h-5.5 w-5.5" />
                <span>Daftar dengan Google</span>
              </button>
            </motion.div>

            {/* Login redirection */}
            <motion.p 
              variants={itemVariants}
              className="text-center text-sm text-gray-500 mt-6 font-medium"
            >
              Sudah punya akun?{" "}
              <Link
                to="/login"
                className="font-bold text-brand hover:text-brand-dark transition-colors duration-300 hover:underline underline-offset-4"
              >
                Masuk Sekarang
              </Link>
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Floating Interactive Toast */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-2xl shadow-xl text-sm font-semibold border ${
              notification.type === "success"
                ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                : notification.type === "error"
                ? "bg-rose-50 border-rose-200 text-rose-800"
                : "bg-amber-50 border-amber-200 text-amber-800"
            }`}
          >
            {notification.type === "success" && (
              <span className="flex h-5.5 w-5.5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-bold">✓</span>
            )}
            {notification.type === "error" && (
              <span className="flex h-5.5 w-5.5 items-center justify-center rounded-full bg-rose-100 text-rose-600 font-bold">✗</span>
            )}
            {notification.type === "info" && (
              <span className="flex h-5.5 w-5.5 items-center justify-center rounded-full bg-amber-100 text-amber-600 font-bold">i</span>
            )}
            <span>{notification.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
