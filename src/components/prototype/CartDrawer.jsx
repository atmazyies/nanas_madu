import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineShoppingCart, HiX, HiPlus, HiMinus } from "react-icons/hi";
import { usePrototype } from "../../context/PrototypeContext";
import Overlay from "./Overlay";
import { formatRupiah } from "../../utils/format";

export default function CartDrawer() {
  const {
    activePanel,
    closePanel,
    cart,
    cartTotal,
    cartCount,
    removeFromCart,
    updateCartQty,
    startCheckout,
    scrollToShop,
  } = usePrototype();

  const isOpen = activePanel === "cart";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Overlay onClose={closePanel} />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Keranjang belanja"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed top-0 right-0 z-[70] flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
              <div className="flex items-center gap-2">
                <HiOutlineShoppingCart className="h-6 w-6 text-brand" />
                <h2 className="text-lg font-bold">Keranjang ({cartCount})</h2>
              </div>
              <button
                type="button"
                onClick={closePanel}
                className="rounded-full p-2 hover:bg-gray-100"
                aria-label="Tutup keranjang"
              >
                <HiX className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {cart.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <HiOutlineShoppingCart className="h-16 w-16 text-gray-200" />
                  <p className="mt-4 text-sm text-gray-500">Keranjang masih kosong</p>
                  <button
                    type="button"
                    onClick={() => {
                      closePanel();
                      scrollToShop();
                    }}
                    className="mt-4 rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white"
                  >
                    Belanja Sekarang
                  </button>
                </div>
              ) : (
                <ul className="space-y-4">
                  {cart.map((item) => (
                    <li
                      key={item.id}
                      className="flex gap-4 rounded-2xl border border-gray-100 p-4"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-16 w-16 rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-800 line-clamp-2">
                          {item.displayTitle || item.title}
                        </p>
                        {(item.selectedColor || item.selectedSize) && (
                          <p className="mt-0.5 text-[10px] text-gray-400">
                            {item.selectedColor?.name}
                            {item.selectedColor && item.selectedSize && " · "}
                            {item.selectedSize?.name}
                          </p>
                        )}
                        <p className="mt-1 text-sm font-bold text-brand">
                          {formatRupiah(item.unitPrice ?? item.newPrice)}
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => updateCartQty(item.id, item.qty - 1)}
                            disabled={item.qty <= 1}
                            className="rounded-lg border p-1 disabled:opacity-40"
                            aria-label="Kurangi jumlah"
                          >
                            <HiMinus className="h-4 w-4" />
                          </button>
                          <span className="text-sm font-medium w-6 text-center">
                            {item.qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateCartQty(item.id, item.qty + 1)}
                            className="rounded-lg border p-1"
                            aria-label="Tambah jumlah"
                          >
                            <HiPlus className="h-4 w-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="ml-auto text-xs text-cta hover:underline"
                          >
                            Hapus
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t border-gray-100 px-6 py-5">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Total</span>
                  <span className="font-bold text-gray-900">
                    {formatRupiah(cartTotal)}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    closePanel();
                    startCheckout();
                  }}
                  className="mt-4 w-full rounded-full bg-cta py-3.5 text-sm font-bold text-white hover:bg-cta-hover"
                >
                  Lanjut Checkout
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
