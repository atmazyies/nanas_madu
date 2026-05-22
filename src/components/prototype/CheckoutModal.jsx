import { AnimatePresence, motion } from "framer-motion";
import {
  HiX,
  HiOutlineShoppingCart,
  HiOutlineUser,
  HiOutlineCreditCard,
  HiOutlineCheckCircle,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";
import { usePrototype } from "../../context/PrototypeContext";
import Overlay from "./Overlay";
import { formatRupiah } from "../../utils/format";

const steps = [
  { id: 1, label: "Keranjang", icon: HiOutlineShoppingCart },
  { id: 2, label: "Data Pelanggan", icon: HiOutlineUser },
  { id: 3, label: "Pembayaran", icon: HiOutlineCreditCard },
  { id: 4, label: "Selesai", icon: HiOutlineCheckCircle },
];

export default function CheckoutModal() {
  const {
    activePanel,
    closePanel,
    cart,
    cartSubtotal,
    shippingCost,
    cartTotal,
    checkoutStep,
    customerForm,
    updateCustomerForm,
    orderSuccess,
    nextCheckoutStep,
    prevCheckoutStep,
    completeCheckout,
    finishCheckout,
    user,
  } = usePrototype();

  const isOpen = activePanel === "checkout";

  const validateStep2 = () => {
    const { fullName, email, phone, address, city, postalCode } = customerForm;
    return fullName && email && phone && address && city && postalCode;
  };

  const handleNext = () => {
    if (checkoutStep === 2 && !validateStep2()) {
      return;
    }
    if (checkoutStep === 3) {
      completeCheckout();
      return;
    }
    nextCheckoutStep();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Overlay onClose={checkoutStep === 4 ? finishCheckout : closePanel} />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Checkout"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="fixed inset-4 z-[70] mx-auto flex max-h-[calc(100vh-2rem)] max-w-2xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl sm:inset-8"
          >
            {/* Header */}
            <div className="border-b border-gray-100 px-6 py-5">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Checkout</h2>
                <button
                  type="button"
                  onClick={checkoutStep === 4 ? finishCheckout : closePanel}
                  className="rounded-full p-2 hover:bg-gray-100"
                  aria-label="Tutup"
                >
                  <HiX className="h-5 w-5" />
                </button>
              </div>

              {/* Step indicator */}
              <div className="mt-5 flex items-center justify-between">
                {steps.map((step, i) => {
                  const Icon = step.icon;
                  const active = checkoutStep >= step.id;
                  const current = checkoutStep === step.id;
                  return (
                    <div key={step.id} className="flex flex-1 items-center">
                      <div className="flex flex-col items-center">
                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-full transition-all ${
                            active
                              ? "bg-brand text-white"
                              : "bg-gray-100 text-gray-400"
                          } ${current ? "ring-4 ring-brand/20 scale-110" : ""}`}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                        <span
                          className={`mt-1 hidden text-[10px] font-medium sm:block ${
                            active ? "text-brand" : "text-gray-400"
                          }`}
                        >
                          {step.label}
                        </span>
                      </div>
                      {i < steps.length - 1 && (
                        <div
                          className={`mx-1 h-0.5 flex-1 ${
                            checkoutStep > step.id ? "bg-brand" : "bg-gray-200"
                          }`}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 py-5">
              <AnimatePresence mode="wait">
                {checkoutStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h3 className="font-semibold text-gray-900">Ringkasan Pesanan</h3>
                    <ul className="mt-4 space-y-3">
                      {cart.map((item) => (
                        <li
                          key={item.id}
                          className="flex gap-3 rounded-2xl bg-brand-soft/40 p-3"
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-14 w-14 rounded-xl object-cover"
                          />
                          <div className="flex-1">
                            <p className="text-sm font-semibold">
                              {item.displayTitle || item.title}
                            </p>
                            <p className="text-xs text-gray-500">
                              {item.qty} x {formatRupiah(item.unitPrice ?? item.newPrice)}
                            </p>
                          </div>
                          <p className="text-sm font-bold text-brand">
                            {formatRupiah((item.unitPrice ?? item.newPrice) * item.qty)}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 space-y-2 rounded-2xl bg-gray-50 p-4 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Subtotal</span>
                        <span>{formatRupiah(cartSubtotal)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Ongkir</span>
                        <span>
                          {shippingCost === 0 ? (
                            <span className="text-brand font-medium">Gratis</span>
                          ) : (
                            formatRupiah(shippingCost)
                          )}
                        </span>
                      </div>
                      <div className="flex justify-between border-t border-gray-200 pt-2 font-bold">
                        <span>Total</span>
                        <span className="text-brand">{formatRupiah(cartTotal)}</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {checkoutStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h3 className="font-semibold text-gray-900">Data Pelanggan</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Lengkapi informasi pengiriman Anda
                    </p>
                    <form className="mt-5 grid gap-4 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <label className="text-xs font-medium text-gray-600">
                          Nama Lengkap *
                        </label>
                        <input
                          required
                          value={customerForm.fullName}
                          onChange={(e) =>
                            updateCustomerForm("fullName", e.target.value)
                          }
                          placeholder="John Doe"
                          className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-gray-600">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={customerForm.email || user?.email || ""}
                          onChange={(e) => updateCustomerForm("email", e.target.value)}
                          placeholder="email@contoh.com"
                          className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-gray-600">
                          No. Telepon *
                        </label>
                        <input
                          type="tel"
                          required
                          value={customerForm.phone}
                          onChange={(e) => updateCustomerForm("phone", e.target.value)}
                          placeholder="+62 812 3456 7890"
                          className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="text-xs font-medium text-gray-600">
                          Alamat Lengkap *
                        </label>
                        <textarea
                          required
                          rows={2}
                          value={customerForm.address}
                          onChange={(e) =>
                            updateCustomerForm("address", e.target.value)
                          }
                          placeholder="Jl. Organik No. 123, RT/RW"
                          className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-gray-600">
                          Kota *
                        </label>
                        <input
                          required
                          value={customerForm.city}
                          onChange={(e) => updateCustomerForm("city", e.target.value)}
                          placeholder="Jakarta"
                          className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-gray-600">
                          Kode Pos *
                        </label>
                        <input
                          required
                          value={customerForm.postalCode}
                          onChange={(e) =>
                            updateCustomerForm("postalCode", e.target.value)
                          }
                          placeholder="12345"
                          className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="text-xs font-medium text-gray-600">
                          Catatan Pesanan (opsional)
                        </label>
                        <input
                          value={customerForm.notes}
                          onChange={(e) => updateCustomerForm("notes", e.target.value)}
                          placeholder="Contoh: Tolong kirim pagi hari"
                          className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                        />
                      </div>
                    </form>
                  </motion.div>
                )}

                {checkoutStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h3 className="font-semibold text-gray-900">Metode Pembayaran</h3>
                    <div className="mt-4 space-y-3">
                      {[
                        { id: "transfer", label: "Transfer Bank", desc: "BCA / Mandiri / BNI" },
                        { id: "cod", label: "Cash on Delivery", desc: "Bayar saat terima barang" },
                        { id: "ewallet", label: "E-Wallet", desc: "GoPay / OVO / DANA" },
                      ].map((method) => (
                        <label
                          key={method.id}
                          className={`flex cursor-pointer items-center gap-4 rounded-2xl border-2 p-4 transition-all ${
                            customerForm.paymentMethod === method.id
                              ? "border-brand bg-brand-soft/50"
                              : "border-gray-100 hover:border-brand/30"
                          }`}
                        >
                          <input
                            type="radio"
                            name="payment"
                            checked={customerForm.paymentMethod === method.id}
                            onChange={() =>
                              updateCustomerForm("paymentMethod", method.id)
                            }
                            className="accent-brand"
                          />
                          <div>
                            <p className="font-semibold text-gray-900">{method.label}</p>
                            <p className="text-xs text-gray-500">{method.desc}</p>
                          </div>
                        </label>
                      ))}
                    </div>

                    <div className="mt-6 rounded-2xl bg-gray-50 p-4">
                      <p className="text-sm font-semibold text-gray-900">
                        Konfirmasi Pengiriman
                      </p>
                      <p className="mt-2 text-sm text-gray-600">
                        <strong>{customerForm.fullName}</strong>
                        <br />
                        {customerForm.address}, {customerForm.city}{" "}
                        {customerForm.postalCode}
                        <br />
                        {customerForm.phone}
                      </p>
                      <p className="mt-3 text-lg font-bold text-brand">
                        Total: {formatRupiah(cartTotal)}
                      </p>
                    </div>
                  </motion.div>
                )}

                {checkoutStep === 4 && orderSuccess && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center py-8 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className="flex h-20 w-20 items-center justify-center rounded-full bg-brand text-white"
                    >
                      <HiOutlineCheckCircle className="h-10 w-10" />
                    </motion.div>
                    <h3 className="mt-6 text-2xl font-bold text-gray-900">
                      Pesanan Berhasil!
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Terima kasih, {orderSuccess.customer.fullName}
                    </p>
                    <div className="mt-6 w-full max-w-sm rounded-2xl bg-brand-soft/50 p-5 text-left text-sm">
                      <p>
                        <span className="text-gray-500">ID Pesanan:</span>{" "}
                        <strong>{orderSuccess.orderId}</strong>
                      </p>
                      <p className="mt-2">
                        <span className="text-gray-500">Total:</span>{" "}
                        <strong className="text-brand">
                          {formatRupiah(orderSuccess.total)}
                        </strong>
                      </p>
                      <p className="mt-2">
                        <span className="text-gray-500">Pembayaran:</span>{" "}
                        {orderSuccess.customer.paymentMethod}
                      </p>
                      <p className="mt-2">
                        <span className="text-gray-500">Waktu:</span>{" "}
                        {orderSuccess.date}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer actions */}
            {checkoutStep < 4 && (
              <div className="flex gap-3 border-t border-gray-100 px-6 py-5">
                {checkoutStep > 1 && (
                  <button
                    type="button"
                    onClick={prevCheckoutStep}
                    className="flex items-center gap-1 rounded-full border border-gray-200 px-5 py-3 text-sm font-medium hover:bg-gray-50"
                  >
                    <HiChevronLeft className="h-4 w-4" />
                    Kembali
                  </button>
                )}
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={checkoutStep === 2 && !validateStep2()}
                  className="ml-auto flex flex-1 items-center justify-center gap-1 rounded-full bg-brand py-3 text-sm font-semibold text-white hover:bg-green-600 disabled:opacity-50 sm:flex-none sm:px-8"
                >
                  {checkoutStep === 3 ? "Konfirmasi Pesanan" : "Lanjutkan"}
                  <HiChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}

            {checkoutStep === 4 && (
              <div className="border-t border-gray-100 px-6 py-5">
                <button
                  type="button"
                  onClick={finishCheckout}
                  className="w-full rounded-full bg-brand py-3.5 text-sm font-bold text-white hover:bg-green-600"
                >
                  Kembali ke Beranda
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
