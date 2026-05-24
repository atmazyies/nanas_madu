import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  HiX,
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineEye,
  HiOutlineEyeOff,
  HiOutlineCheckCircle,
  HiArrowLeft,
} from "react-icons/hi";
import { usePrototype } from "../../context/PrototypeContext";
import Overlay from "./Overlay";
import AuthBranding from "./AuthBranding";

export default function ForgotPasswordPage() {
  const { activePanel, closePanel, openPanel, showToast } = usePrototype();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isOpen = activePanel === "forgot-password";

  const handleSendLink = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setStep(2);
      showToast(`Link reset dikirim ke ${email}`, "info");
    }
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      showToast("Password tidak cocok", "error");
      return;
    }
    if (newPassword.length < 6) {
      showToast("Password minimal 6 karakter", "error");
      return;
    }
    setStep(4);
    showToast("Password berhasil diubah!");
  };

  const goToLogin = () => {
    setStep(1);
    setEmail("");
    setNewPassword("");
    setConfirmPassword("");
    openPanel("login");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Overlay onClose={closePanel} />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Lupa password"
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
                aria-label="Tutup"
              >
                <HiX className="h-5 w-5" />
              </button>

              <div className="grid md:grid-cols-2">
                <AuthBranding
                  description="Reset password Anda dengan aman. Kami akan mengirimkan link ke email terdaftar."
                />

                <div className="p-8 sm:p-10">
                  <button
                    type="button"
                    onClick={goToLogin}
                    className="mb-4 flex items-center gap-1 text-sm font-medium text-brand hover:underline"
                  >
                    <HiArrowLeft className="h-4 w-4" />
                    Kembali ke Login
                  </button>

                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <h2 className="text-2xl font-bold text-gray-900">
                          Lupa Password
                        </h2>
                        <p className="mt-1 text-sm text-gray-500">
                          Masukkan email akun Anda. Kami akan mengirim link reset
                          password.
                        </p>

                        <form onSubmit={handleSendLink} className="mt-8 space-y-5">
                          <div>
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
                                className="w-full rounded-2xl border border-gray-200 py-3.5 pr-4 pl-12 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                              />
                            </div>
                          </div>

                          <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full rounded-full bg-brand py-3.5 text-sm font-bold text-white hover:bg-green-600"
                          >
                            Kirim Link Reset
                          </motion.button>
                        </form>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="py-4 text-center"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring" }}
                          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-soft text-brand"
                        >
                          <HiOutlineMail className="h-8 w-8" />
                        </motion.div>
                        <h2 className="mt-6 text-xl font-bold text-gray-900">
                          Cek Email Anda
                        </h2>
                        <p className="mt-2 text-sm text-gray-500">
                          Link reset password telah dikirim ke{" "}
                          <strong className="text-gray-800">{email}</strong>
                        </p>
                        <p className="mt-4 text-xs text-gray-400">
                          (Prototipe) Klik lanjut untuk simulasi reset password
                        </p>
                        <button
                          type="button"
                          onClick={() => setStep(3)}
                          className="mt-6 w-full rounded-full bg-brand py-3.5 text-sm font-bold text-white hover:bg-green-600"
                        >
                          Lanjut Reset Password
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            showToast("Email dikirim ulang (prototipe)", "info");
                          }}
                          className="mt-3 text-sm font-medium text-brand hover:underline"
                        >
                          Kirim ulang email
                        </button>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="step3-form"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <h2 className="text-2xl font-bold text-gray-900">
                          Password Baru
                        </h2>
                        <p className="mt-1 text-sm text-gray-500">
                          Buat password baru untuk akun Anda
                        </p>

                        <form onSubmit={handleResetPassword} className="mt-8 space-y-5">
                          <div>
                            <label className="text-xs font-semibold text-gray-600">
                              Password Baru
                            </label>
                            <div className="relative mt-1.5">
                              <HiOutlineLockClosed className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                              <input
                                type={showPassword ? "text" : "password"}
                                required
                                minLength={6}
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                placeholder="Min. 6 karakter"
                                className="w-full rounded-2xl border border-gray-200 py-3.5 pr-12 pl-12 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                              />
                              <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                              >
                                {showPassword ? (
                                  <HiOutlineEyeOff className="h-5 w-5" />
                                ) : (
                                  <HiOutlineEye className="h-5 w-5" />
                                )}
                              </button>
                            </div>
                          </div>

                          <div>
                            <label className="text-xs font-semibold text-gray-600">
                              Konfirmasi Password
                            </label>
                            <div className="relative mt-1.5">
                              <HiOutlineLockClosed className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                              <input
                                type={showPassword ? "text" : "password"}
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Ulangi password"
                                className="w-full rounded-2xl border border-gray-200 py-3.5 pr-4 pl-12 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                              />
                            </div>
                          </div>

                          <button
                            type="submit"
                            className="w-full rounded-full bg-brand py-3.5 text-sm font-bold text-white hover:bg-green-600"
                          >
                            Simpan Password Baru
                          </button>
                        </form>
                      </motion.div>
                    )}

                    {step === 4 && (
                      <motion.div
                        key="step4-success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="py-6 text-center"
                      >
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white">
                          <HiOutlineCheckCircle className="h-8 w-8" />
                        </div>
                        <h2 className="mt-6 text-xl font-bold text-gray-900">
                          Password Berhasil Diubah!
                        </h2>
                        <p className="mt-2 text-sm text-gray-500">
                          Silakan login dengan password baru Anda.
                        </p>
                        <button
                          type="button"
                          onClick={goToLogin}
                          className="mt-8 w-full rounded-full bg-brand py-3.5 text-sm font-bold text-white hover:bg-green-600"
                        >
                          Ke Halaman Login
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <p className="mt-6 text-center text-xs text-gray-400">
                    Prototipe lupa password — simulasi alur reset
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
