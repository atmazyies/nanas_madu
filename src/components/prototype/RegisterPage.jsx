import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  HiX,
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineEye,
  HiOutlineEyeOff,
  HiOutlineUser,
  HiOutlinePhone,
  HiArrowLeft,
} from "react-icons/hi";
import { usePrototype } from "../../context/PrototypeContext";
import Overlay from "./Overlay";
import AuthBranding from "./AuthBranding";

export default function RegisterPage() {
  const { activePanel, closePanel, openPanel, register } = usePrototype();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const isOpen = activePanel === "register";

  const update = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const err = {};
    if (!form.fullName.trim()) err.fullName = "Nama wajib diisi";
    if (!form.email.trim()) err.email = "Email wajib diisi";
    if (!form.phone.trim()) err.phone = "Telepon wajib diisi";
    if (form.password.length < 6) err.password = "Min. 6 karakter";
    if (form.password !== form.confirmPassword)
      err.confirmPassword = "Password tidak cocok";
    if (!form.agreeTerms) err.agreeTerms = "Setujui syarat & ketentuan";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    register({
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      password: form.password,
    });
    setForm({
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      agreeTerms: false,
    });
  };

  const inputClass = (hasError) =>
    `w-full rounded-2xl border py-3.5 pr-4 pl-12 text-sm outline-none transition-all focus:ring-2 focus:ring-brand/20 ${
      hasError
        ? "border-cta focus:border-cta"
        : "border-gray-200 focus:border-brand"
    }`;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Overlay onClose={closePanel} />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Halaman Register"
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
              className="relative max-h-[92vh] w-full max-w-4xl overflow-hidden overflow-y-auto rounded-[2rem] bg-white shadow-2xl"
            >
              <button
                type="button"
                onClick={closePanel}
                className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-md hover:bg-white"
                aria-label="Tutup register"
              >
                <HiX className="h-5 w-5" />
              </button>

              <div className="grid md:grid-cols-2">
                <AuthBranding
                  description="Bergabung dengan komunitas Honea. Dapatkan promo member, tracking pesanan, dan rekomendasi produk organik."
                />

                <div className="p-8 sm:p-10">
                  <button
                    type="button"
                    onClick={() => openPanel("login")}
                    className="mb-4 flex items-center gap-1 text-sm font-medium text-brand hover:underline"
                  >
                    <HiArrowLeft className="h-4 w-4" />
                    Sudah punya akun? Login
                  </button>

                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl font-bold text-gray-900"
                  >
                    Daftar Akun
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-1 text-sm text-gray-500"
                  >
                    Buat akun Honea gratis dalam hitungan menit
                  </motion.p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-600">
                        Nama Lengkap *
                      </label>
                      <div className="relative mt-1.5">
                        <HiOutlineUser className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        <input
                          required
                          value={form.fullName}
                          onChange={(e) => update("fullName", e.target.value)}
                          placeholder="John Doe"
                          className={inputClass(errors.fullName)}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-cta">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-gray-600">
                        Email *
                      </label>
                      <div className="relative mt-1.5">
                        <HiOutlineMail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                          placeholder="nama@email.com"
                          className={inputClass(errors.email)}
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-xs text-cta">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-gray-600">
                        No. Telepon *
                      </label>
                      <div className="relative mt-1.5">
                        <HiOutlinePhone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => update("phone", e.target.value)}
                          placeholder="+62 812 3456 7890"
                          className={inputClass(errors.phone)}
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-xs text-cta">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-gray-600">
                        Password *
                      </label>
                      <div className="relative mt-1.5">
                        <HiOutlineLockClosed className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        <input
                          type={showPassword ? "text" : "password"}
                          required
                          minLength={6}
                          value={form.password}
                          onChange={(e) => update("password", e.target.value)}
                          placeholder="Min. 6 karakter"
                          className={inputClass(errors.password)}
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
                      {errors.password && (
                        <p className="mt-1 text-xs text-cta">{errors.password}</p>
                      )}
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-gray-600">
                        Konfirmasi Password *
                      </label>
                      <div className="relative mt-1.5">
                        <HiOutlineLockClosed className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        <input
                          type={showPassword ? "text" : "password"}
                          required
                          value={form.confirmPassword}
                          onChange={(e) =>
                            update("confirmPassword", e.target.value)
                          }
                          placeholder="Ulangi password"
                          className={inputClass(errors.confirmPassword)}
                        />
                      </div>
                      {errors.confirmPassword && (
                        <p className="mt-1 text-xs text-cta">
                          {errors.confirmPassword}
                        </p>
                      )}
                    </div>

                    <label className="flex items-start gap-2 text-sm text-gray-600">
                      <input
                        type="checkbox"
                        checked={form.agreeTerms}
                        onChange={(e) => update("agreeTerms", e.target.checked)}
                        className="mt-1 accent-brand rounded"
                      />
                      <span>
                        Saya setuju dengan{" "}
                        <button
                          type="button"
                          className="font-medium text-brand hover:underline"
                          onClick={() => alert("Syarat & Ketentuan — prototipe")}
                        >
                          Syarat & Ketentuan
                        </button>{" "}
                        dan Kebijakan Privasi Honea
                      </span>
                    </label>
                    {errors.agreeTerms && (
                      <p className="text-xs text-cta">{errors.agreeTerms}</p>
                    )}

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full rounded-full bg-brand py-3.5 text-sm font-bold text-white shadow-lg shadow-brand/25 hover:bg-green-600"
                    >
                      Daftar Sekarang
                    </motion.button>
                  </form>

                  <p className="mt-5 text-center text-sm text-gray-500">
                    Sudah punya akun?{" "}
                    <button
                      type="button"
                      onClick={() => openPanel("login")}
                      className="font-semibold text-brand hover:underline"
                    >
                      Login di sini
                    </button>
                  </p>

                  <p className="mt-4 text-center text-xs text-gray-400">
                    Prototipe register — data tidak disimpan ke server
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
