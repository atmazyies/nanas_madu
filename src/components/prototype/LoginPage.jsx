import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  HiX,
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineEye,
  HiOutlineEyeOff,
} from "react-icons/hi";
import { usePrototype } from "../../context/PrototypeContext";
import Overlay from "./Overlay";
import AuthBranding from "./AuthBranding";

export default function LoginPage() {
  const { activePanel, closePanel, openPanel, login, logout, isLoggedIn, user } =
    usePrototype();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const isOpen = activePanel === "login";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      login(email.trim(), password);
      setPassword("");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Overlay onClose={closePanel} />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Halaman Login"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 24 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] bg-white shadow-2xl"
            >
              <button
                type="button"
                onClick={closePanel}
                className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-md hover:bg-white"
                aria-label="Tutup login"
              >
                <HiX className="h-5 w-5" />
              </button>

              <div className="grid md:grid-cols-2">
                <AuthBranding description="Masuk untuk akses pesanan, wishlist, dan promo eksklusif member." />

                <div className="p-8 sm:p-10">
                  {isLoggedIn ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex flex-col items-center py-8 text-center"
                    >
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-2xl font-bold text-white">
                        {user?.name?.[0]?.toUpperCase() || "U"}
                      </div>
                      <h2 className="mt-4 text-xl font-bold">Halo, {user?.name}!</h2>
                      <p className="mt-2 text-sm text-gray-500">{user?.email}</p>
                      {user?.phone && (
                        <p className="text-sm text-gray-400">{user.phone}</p>
                      )}
                      <p className="mt-4 text-sm text-brand">
                        Anda sudah login (mode prototipe)
                      </p>
                      <button
                        type="button"
                        onClick={logout}
                        className="mt-8 w-full rounded-full border-2 border-gray-200 py-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        Logout
                      </button>
                    </motion.div>
                  ) : (
                    <>
                      <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-2xl font-bold text-gray-900"
                      >
                        Login
                      </motion.h2>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="mt-1 text-sm text-gray-500"
                      >
                        Masuk ke akun Econis Anda
                      </motion.p>

                      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.15 }}
                        >
                          <label className="text-xs font-semibold text-gray-600">
                            Email
                          </label>
                          <div className="relative mt-1.5">
                            <HiOutlineMail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                            <input
                              type="email"
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="nama@email.com"
                              className="w-full rounded-2xl border border-gray-200 py-3.5 pr-4 pl-12 text-sm outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20"
                            />
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <label className="text-xs font-semibold text-gray-600">
                            Password
                          </label>
                          <div className="relative mt-1.5">
                            <HiOutlineLockClosed className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                            <input
                              type={showPassword ? "text" : "password"}
                              required
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              placeholder="••••••••"
                              className="w-full rounded-2xl border border-gray-200 py-3.5 pr-12 pl-12 text-sm outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                              aria-label={showPassword ? "Sembunyikan" : "Tampilkan"}
                            >
                              {showPassword ? (
                                <HiOutlineEyeOff className="h-5 w-5" />
                              ) : (
                                <HiOutlineEye className="h-5 w-5" />
                              )}
                            </button>
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.25 }}
                          className="flex items-center justify-between"
                        >
                          <label className="flex items-center gap-2 text-sm text-gray-600">
                            <input
                              type="checkbox"
                              checked={remember}
                              onChange={(e) => setRemember(e.target.checked)}
                              className="accent-brand rounded"
                            />
                            Ingat saya
                          </label>
                          <button
                            type="button"
                            className="text-sm font-medium text-brand hover:underline"
                            onClick={() => openPanel("forgot-password")}
                          >
                            Lupa password?
                          </button>
                        </motion.div>

                        <motion.button
                          type="submit"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full rounded-full bg-brand py-3.5 text-sm font-bold text-white shadow-lg shadow-brand/25 hover:bg-green-600"
                        >
                          Masuk
                        </motion.button>
                      </form>

                      <p className="mt-6 text-center text-sm text-gray-500">
                        Belum punya akun?{" "}
                        <button
                          type="button"
                          onClick={() => openPanel("register")}
                          className="font-semibold text-brand hover:underline"
                        >
                          Daftar sekarang
                        </button>
                      </p>

                      <p className="mt-4 text-center text-xs text-gray-400">
                        Prototipe login — gunakan email & password apa saja
                      </p>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
