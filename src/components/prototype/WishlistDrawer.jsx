import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineHeart, HiX } from "react-icons/hi";
import { usePrototype } from "../../context/PrototypeContext";
import Overlay from "./Overlay";

export default function WishlistDrawer() {
  const {
    activePanel,
    closePanel,
    wishlist,
    toggleWishlist,
    addToCart,
  } = usePrototype();

  const isOpen = activePanel === "wishlist";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Overlay onClose={closePanel} />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Wishlist"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed top-0 right-0 z-[70] flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
              <div className="flex items-center gap-2">
                <HiOutlineHeart className="h-6 w-6 text-cta" />
                <h2 className="text-lg font-bold">Wishlist ({wishlist.length})</h2>
              </div>
              <button
                type="button"
                onClick={closePanel}
                className="rounded-full p-2 hover:bg-gray-100"
                aria-label="Tutup wishlist"
              >
                <HiX className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {wishlist.length === 0 ? (
                <p className="py-12 text-center text-sm text-gray-500">
                  Wishlist masih kosong. Klik ❤️ pada produk favorit Anda.
                </p>
              ) : (
                <ul className="space-y-4">
                  {wishlist.map((item) => (
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
                        <p className="text-sm font-semibold">{item.title}</p>
                        <p className="text-sm font-bold text-brand">
                          ${item.newPrice}
                        </p>
                        <div className="mt-2 flex gap-2">
                          <button
                            type="button"
                            onClick={() => addToCart(item)}
                            className="rounded-full bg-brand px-4 py-1.5 text-xs font-semibold text-white"
                          >
                            + Cart
                          </button>
                          <button
                            type="button"
                            onClick={() => toggleWishlist(item)}
                            className="text-xs text-gray-400 hover:text-cta"
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
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
