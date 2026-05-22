import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineSearch, HiX } from "react-icons/hi";
import { usePrototype } from "../../context/PrototypeContext";
import Overlay from "./Overlay";

export default function SearchModal() {
  const {
    activePanel,
    closePanel,
    searchQuery,
    setSearchQuery,
    searchResults,
    addToCart,
    openProductDetail,
    scrollToShop,
  } = usePrototype();

  const isOpen = activePanel === "search";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Overlay onClose={closePanel} />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Pencarian produk"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 right-4 left-4 z-[70] mx-auto max-w-lg rounded-3xl bg-white p-6 shadow-2xl sm:top-24"
          >
            <div className="flex items-center gap-3">
              <HiOutlineSearch className="h-5 w-5 text-brand" />
              <input
                type="search"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari produk organik..."
                className="flex-1 text-sm outline-none"
              />
              <button
                type="button"
                onClick={closePanel}
                className="rounded-full p-1 hover:bg-gray-100"
                aria-label="Tutup pencarian"
              >
                <HiX className="h-5 w-5" />
              </button>
            </div>

            <ul className="mt-4 max-h-64 space-y-2 overflow-y-auto">
              {searchResults.length === 0 ? (
                <li className="py-4 text-center text-sm text-gray-400">
                  Produk tidak ditemukan
                </li>
              ) : (
                searchResults.map((product) => (
                  <li
                    key={product.id}
                    className="flex items-center justify-between rounded-2xl bg-brand-soft/50 px-4 py-3"
                  >
                    <button
                      type="button"
                      className="flex-1 text-left"
                      onClick={() => {
                        openProductDetail(product);
                        closePanel();
                      }}
                    >
                      <p className="text-sm font-semibold text-gray-800 hover:text-brand">
                        {product.title}
                      </p>
                      <p className="text-xs font-bold text-brand">
                        ${product.newPrice}
                      </p>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        addToCart(product);
                        closePanel();
                      }}
                      className="rounded-full bg-brand px-3 py-1.5 text-xs font-semibold text-white hover:bg-green-600"
                    >
                      + Cart
                    </button>
                  </li>
                ))
              )}
            </ul>

            <button
              type="button"
              onClick={() => {
                closePanel();
                scrollToShop();
              }}
              className="mt-4 w-full text-center text-sm font-medium text-brand hover:underline"
            >
              Lihat semua produk →
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
