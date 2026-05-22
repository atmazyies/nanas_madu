import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineSearch,
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiOutlineUser,
  HiMenu,
  HiX,
} from "react-icons/hi";
import { navLinks } from "../data/navigation";
import { usePrototype } from "../context/PrototypeContext";

const iconBtn =
  "relative flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition-all duration-300 hover:bg-brand-soft hover:text-brand";

function Badge({ count }) {
  if (!count) return null;
  return (
    <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-cta px-1 text-[10px] font-bold text-white">
      {count > 9 ? "9+" : count}
    </span>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openPanel, cartCount, wishlist } = usePrototype();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-[var(--shadow-soft)]"
          : "bg-white/60 backdrop-blur-sm"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="text-2xl font-bold tracking-tight text-gray-900 transition-colors hover:text-brand"
        >
          Econis
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-gray-600 transition-colors duration-300 hover:text-brand after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-brand after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            className={iconBtn}
            aria-label="Search"
            onClick={() => openPanel("search")}
          >
            <HiOutlineSearch className="h-5 w-5" />
          </button>
          <button
            type="button"
            className={`${iconBtn} hidden sm:flex`}
            aria-label="Wishlist"
            onClick={() => openPanel("wishlist")}
          >
            <HiOutlineHeart className="h-5 w-5" />
            <Badge count={wishlist.length} />
          </button>
          <button
            type="button"
            className={iconBtn}
            aria-label="Cart"
            onClick={() => openPanel("cart")}
          >
            <HiOutlineShoppingCart className="h-5 w-5" />
            <Badge count={cartCount} />
          </button>
          <button
            type="button"
            className={`${iconBtn} hidden sm:flex`}
            aria-label="Login"
            onClick={() => openPanel("login")}
          >
            <HiOutlineUser className="h-5 w-5" />
          </button>
          <button
            type="button"
            className={`${iconBtn} lg:hidden`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-gray-100 bg-white lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-brand-soft hover:text-brand"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="flex gap-2 border-t border-gray-100 pt-3">
                <button
                  type="button"
                  onClick={() => { openPanel("wishlist"); setMobileOpen(false); }}
                  className="flex-1 rounded-xl bg-brand-soft py-2.5 text-sm font-medium text-brand"
                >
                  Wishlist ({wishlist.length})
                </button>
                <button
                  type="button"
                  onClick={() => { openPanel("login"); setMobileOpen(false); }}
                  className="flex-1 rounded-xl bg-gray-100 py-2.5 text-sm font-medium text-gray-700"
                >
                  Login
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
