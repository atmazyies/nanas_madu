import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiMenu,
  HiX,
  HiChevronDown,
} from "react-icons/hi";
import { navLinks } from "../data/navigation";
import { usePrototype } from "../context/PrototypeContext";
import logoImg from "../assets/logo nanas madu.png";

const iconBtn =
  "relative flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition-all duration-300 hover:bg-brand-soft hover:text-brand outline-none focus:outline-none focus:ring-0";

function Badge({ count }) {
  if (!count) return null;
  return (
    <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-gradient-to-r from-golden-light to-golden px-1 text-[10px] font-extrabold text-white shadow-sm">
      {count > 9 ? "9+" : count}
    </span>
  );
}

function MobileNavItem({ link, setMobileOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = location.pathname === link.href || (link.href !== "/" && location.pathname.startsWith(link.href));
  const { filterByCategory, clearCategoryFilter } = usePrototype();

  if (!link.subLinks) {
    return (
      <Link
        to={link.href}
        className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-brand-soft hover:text-brand outline-none focus:outline-none ${
          isActive ? "bg-brand-soft text-brand" : "text-gray-700"
        }`}
        onClick={() => setMobileOpen(false)}
      >
        {link.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-brand-soft hover:text-brand outline-none focus:outline-none ${
          isActive ? "bg-brand-soft/50 text-brand" : "text-gray-700"
        }`}
      >
        {link.label}
        <HiChevronDown className={`h-5 w-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-1 pl-6 pr-2 pb-2 pt-1">
              {link.subLinks.map((sub, idx) => (
                <Link
                  key={idx}
                  to={sub.href}
                  className="block rounded-lg px-4 py-2 text-sm text-gray-600 transition-colors hover:bg-brand-soft hover:text-brand outline-none focus:outline-none"
                  onClick={() => {
                    if (sub.category) {
                      filterByCategory(sub.category);
                    } else if (link.id === "shop" && sub.label === "Semua Produk") {
                      clearCategoryFilter();
                    }
                    setMobileOpen(false);
                  }}
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [tickerIndex, setTickerIndex] = useState(0);
  const { openPanel, cartCount, wishlist, filterByCategory, clearCategoryFilter } = usePrototype();
  const location = useLocation();

  const tickerTexts = [
    "🍍 Diskon Spesial 20% untuk Pengguna Baru!",
    "🚚 Gratis Ongkir ke Seluruh Jawa Tengah",
    "⚡ Flash Sale: Beli 2 Gratis 1 Jus Nanas"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % tickerTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

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
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 border-none outline-none ${
        scrolled
          ? "bg-white/75 backdrop-blur-xl shadow-sm"
          : "bg-white/60 backdrop-blur-md"
      }`}
    >
      {/* Top Discount Ticker */}
      <div className="gradient-brand text-white text-xs sm:text-sm font-semibold py-1.5 overflow-hidden relative flex justify-center items-center h-8 shadow-sm">
        <AnimatePresence mode="wait">
          <motion.div
            key={tickerIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute whitespace-nowrap"
          >
            {tickerTexts[tickerIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="flex items-center gap-1.5 transition-all duration-300 hover:opacity-90 outline-none focus:outline-none"
        >
          <img
            src={logoImg}
            alt="Honea Logo"
            className="h-[52px] w-auto object-contain select-none"
          />
          <div className="flex flex-col justify-center leading-none">
            <span className="font-extrabold text-[22px] tracking-tight text-gray-900 leading-[1.1]">
              Honea
            </span>
            <span className="text-[9px] font-medium tracking-[0.12em] text-brand-dark uppercase mt-0.5 leading-none">
              Asli Khas Pemalang
            </span>
          </div>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href || (link.href !== "/" && location.pathname.startsWith(link.href));
            return (
              <li key={link.id} className="relative group">
                <NavLink
                  to={link.href}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors duration-300 py-2 outline-none focus:outline-none ${
                    isActive ? "text-brand" : "text-gray-600 hover:text-brand"
                  }`}
                >
                  {link.label}
                  {link.subLinks && (
                    <HiChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </NavLink>
                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-brand to-golden"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.subLinks && (
                  <div className="absolute left-0 top-full opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 pt-2">
                    <div className="w-56 rounded-2xl bg-white p-3 shadow-[0_12px_40px_rgba(0,0,0,0.06)] border-none outline-none">
                      {link.subLinks.map((sub, idx) => (
                        <Link
                          key={idx}
                          to={sub.href}
                          onClick={() => {
                            if (sub.category) {
                              filterByCategory(sub.category);
                            } else if (link.id === "shop" && sub.label === "Semua Produk") {
                              clearCategoryFilter();
                            }
                          }}
                          className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-600 hover:bg-brand-soft hover:text-brand transition-colors outline-none focus:outline-none"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1 sm:gap-2">
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
            className="overflow-hidden bg-white lg:hidden border-none outline-none shadow-lg"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <MobileNavItem link={link} setMobileOpen={setMobileOpen} />
                </li>
              ))}
              <li className="pt-3">
                <button
                  type="button"
                  onClick={() => { openPanel("wishlist"); setMobileOpen(false); }}
                  className="w-full rounded-xl bg-brand-soft py-2.5 text-sm font-medium text-brand outline-none focus:outline-none"
                >
                  Wishlist ({wishlist.length})
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
