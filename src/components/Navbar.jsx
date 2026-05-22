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
  "relative flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition-all duration-300 hover:bg-brand-soft hover:text-brand outline-none focus:outline-none focus:ring-0";

function Badge({ count }) {
  if (!count) return null;
  return (
    <span className="absolute -top-1 -right-1 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-gradient-to-r from-golden-light to-golden px-1 text-[10px] font-extrabold text-white shadow-sm ring-2 ring-white">
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
        className={`block rounded-2xl px-5 py-3.5 text-base font-semibold transition-all hover:bg-brand-soft hover:text-brand outline-none ${
          isActive ? "bg-brand-soft text-brand shadow-sm" : "text-gray-700"
        }`}
        onClick={() => setMobileOpen(false)}
      >
        {link.label}
      </Link>
    );
  }

  return (
    <div className="rounded-2xl overflow-hidden bg-gray-50/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex w-full items-center justify-between px-5 py-3.5 text-base font-semibold transition-all hover:text-brand outline-none ${
          isActive ? "text-brand" : "text-gray-700"
        }`}
      >
        {link.label}
        <HiChevronDown className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-brand" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-col gap-1 px-4 pb-4">
              {link.subLinks.map((sub, idx) => (
                <Link
                  key={idx}
                  to={sub.href}
                  className="block rounded-xl px-4 py-2.5 text-sm font-medium text-gray-600 transition-all hover:bg-white hover:text-brand hover:shadow-sm outline-none"
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
    const onScroll = () => setScrolled(window.scrollY > 30);
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
    <>
      {/* Top Discount Ticker (Hides on scroll for cleaner pill look) */}
      <div 
        className={`fixed top-0 w-full z-40 gradient-brand text-white text-xs sm:text-sm font-semibold py-2 overflow-hidden flex justify-center items-center h-10 shadow-sm transition-transform duration-500 ${
          scrolled ? "-translate-y-full" : "translate-y-0"
        }`}
      >
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

      {/* Floating Pill Header */}
      <header
        className={`fixed right-0 left-0 z-50 flex justify-center transition-all duration-500 pointer-events-none px-4 sm:px-6 lg:px-8 ${
          scrolled ? "top-4" : "top-14"
        }`}
      >
        <nav
          className={`pointer-events-auto flex w-full max-w-7xl items-center justify-between px-5 sm:px-6 py-2.5 transition-all duration-500 rounded-[2rem] ${
            scrolled
              ? "bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/60"
              : "bg-white/60 backdrop-blur-md shadow-md border border-white/40"
          }`}
          aria-label="Main navigation"
        >
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center gap-2 transition-transform duration-300 hover:scale-105 outline-none focus:outline-none"
          >
            <div className="bg-white rounded-full p-1.5 shadow-sm border border-gray-100">
              <img
                src={logoImg}
                alt="Honea Logo"
                className="h-8 w-8 sm:h-9 sm:w-9 object-contain select-none"
              />
            </div>
            <div className="flex flex-col justify-center leading-none hidden sm:flex">
              <span className="font-extrabold text-[18px] tracking-tight text-gray-900 leading-none">
                Honea
              </span>
              <span className="text-[8px] font-bold tracking-[0.15em] text-brand uppercase mt-0.5 leading-none">
                Asli Pemalang
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-1.5 bg-gray-50/50 p-1 rounded-full border border-gray-100/50">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href || (link.href !== "/" && location.pathname.startsWith(link.href));
              return (
                <li key={link.id} className="relative group">
                  <NavLink
                    to={link.href}
                    className={`flex items-center gap-1.5 text-[13px] font-bold transition-all duration-300 px-4 py-2 rounded-full outline-none focus:outline-none ${
                      isActive 
                        ? "bg-white text-brand shadow-sm" 
                        : "text-gray-600 hover:text-gray-900 hover:bg-white/60"
                    }`}
                  >
                    {link.label}
                    {link.subLinks && (
                      <HiChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180 ${isActive ? 'text-brand' : 'text-gray-400'}`} />
                    )}
                  </NavLink>
                  
                  {/* Mega Menu Dropdown */}
                  {link.subLinks && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all duration-300 z-50 pt-1">
                      <div className="w-64 rounded-3xl bg-white/95 backdrop-blur-xl p-2.5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-white">
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
                            className="block rounded-2xl px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-brand-soft hover:text-brand hover:shadow-sm transition-all outline-none focus:outline-none"
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

          {/* Action Icons */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              className={`${iconBtn} hidden sm:flex bg-gray-50 hover:bg-brand-soft border border-gray-100`}
              aria-label="Wishlist"
              onClick={() => openPanel("wishlist")}
            >
              <HiOutlineHeart className="h-5 w-5" />
              <Badge count={wishlist.length} />
            </button>
            <button
              type="button"
              className={`${iconBtn} bg-gray-50 hover:bg-brand-soft border border-gray-100`}
              aria-label="Cart"
              onClick={() => openPanel("cart")}
            >
              <HiOutlineShoppingCart className="h-5 w-5" />
              <Badge count={cartCount} />
            </button>
            <button
              type="button"
              className={`${iconBtn} lg:hidden bg-gray-50 border border-gray-100 ml-1`}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <HiX className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <HiMenu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-gray-900/40 backdrop-blur-sm lg:hidden pt-24 pb-6 px-4"
          >
            <motion.div
              initial={{ y: -20, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-full border border-white/50"
            >
              <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <MobileNavItem key={link.id} link={link} setMobileOpen={setMobileOpen} />
                ))}
              </div>
              <div className="p-4 bg-gray-50 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => { openPanel("wishlist"); setMobileOpen(false); }}
                  className="w-full flex items-center justify-center gap-2 rounded-2xl bg-white shadow-sm border border-gray-200 py-3.5 text-sm font-bold text-gray-700 hover:text-brand hover:border-brand-light transition-all outline-none"
                >
                  <HiOutlineHeart className="h-5 w-5 text-brand" />
                  Wishlist Saya ({wishlist.length})
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
