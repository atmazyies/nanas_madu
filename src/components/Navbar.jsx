import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiMenu,
  HiX,
  HiChevronDown,
  HiOutlineBell,
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
  const {
    openPanel,
    cartCount,
    wishlist,
    filterByCategory,
    clearCategoryFilter,
    unreadNotificationsCount,
    isLoggedIn,
    user,
    logout
  } = usePrototype();
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
          ? "bg-white/95 backdrop-blur-xl shadow-md"
          : "bg-white shadow-sm"
      }`}
    >
      {/* Top Discount Ticker */}
      <div className="force-light gradient-brand text-white text-xs sm:text-sm font-semibold py-1.5 overflow-hidden relative flex justify-center items-center h-8 shadow-sm">
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
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-4 xl:px-8"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="flex items-center gap-1.5 transition-all duration-300 hover:opacity-90 outline-none focus:outline-none shrink-0"
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

        <ul className="hidden items-center lg:gap-3 xl:gap-6 lg:flex mx-4">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href || (link.href !== "/" && location.pathname.startsWith(link.href));
            return (
              <li key={link.id} className="relative group">
                <NavLink
                  to={link.href}
                  className={`flex items-center gap-0.5 xl:gap-1 text-xs xl:text-sm font-semibold whitespace-nowrap transition-colors duration-300 py-2 outline-none focus:outline-none ${
                    isActive ? "text-brand" : "text-gray-600 hover:text-brand"
                  }`}
                >
                  {link.label}
                  {link.subLinks && (
                    <HiChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180 shrink-0" />
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

        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          <Link
            to="/notifications"
            className={iconBtn}
            aria-label="Notifikasi"
          >
            <HiOutlineBell className="h-5 w-5" />
            <Badge count={unreadNotificationsCount} />
          </Link>
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
          {isLoggedIn ? (
            <div className="relative group hidden sm:block">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-soft border border-brand/20 px-3 py-1.5 text-xs font-semibold text-brand transition-all duration-300 hover:bg-brand hover:text-white hover:border-transparent active:scale-95 outline-none focus:outline-none"
              >
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-brand to-golden flex items-center justify-center text-white text-[10px] font-extrabold uppercase shadow-sm">
                  {user.name ? user.name.slice(0, 2) : "US"}
                </div>
                <span className="max-w-[80px] truncate">{user.name || "User"}</span>
                <HiChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute right-0 top-full opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 pt-2">
                <div className="w-52 rounded-2xl bg-white p-2 shadow-[0_12px_40px_rgba(0,0,0,0.1)] border border-gray-100/50 outline-none">
                  <div className="px-3 py-2 border-b border-gray-100/80 mb-1">
                    <p className="text-xs font-bold text-gray-900 truncate">{user.name || "Pengguna"}</p>
                    <p className="text-[10px] text-gray-500 truncate mt-0.5">{user.email}</p>
                  </div>
                  <button
                    type="button"
                    onClick={logout}
                    className="w-full text-left rounded-xl px-3 py-2.5 text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-colors outline-none focus:outline-none flex items-center gap-2"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Keluar / Logout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="hidden sm:inline-flex items-center justify-center rounded-xl bg-brand-soft border border-brand/20 px-4.5 py-2 text-xs font-semibold text-brand transition-all duration-300 hover:bg-brand hover:text-white hover:border-transparent active:scale-95 outline-none focus:outline-none"
            >
              Masuk
            </Link>
          )}
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
              <li className="pt-3 flex flex-col gap-2">
                {isLoggedIn ? (
                  <div className="flex flex-col gap-2 rounded-xl bg-gray-50 p-3 border border-gray-100 mb-1">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-brand to-golden flex items-center justify-center text-white text-xs font-extrabold uppercase shadow-sm">
                        {user.name ? user.name.slice(0, 2) : "US"}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-gray-900 leading-tight">{user.name || "User"}</span>
                        <span className="text-xs text-gray-500 truncate max-w-[180px]">{user.email}</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        logout();
                        setMobileOpen(false);
                      }}
                      className="w-full mt-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 py-2.5 text-xs font-bold text-rose-600 transition-colors duration-300 outline-none focus:outline-none flex justify-center items-center gap-2"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013 3v1" />
                      </svg>
                      Keluar / Logout
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setMobileOpen(false)}
                    className="w-full text-center rounded-xl bg-brand py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark transition-all duration-300 outline-none focus:outline-none"
                  >
                    Masuk / Daftar
                  </Link>
                )}
                <button
                  type="button"
                  onClick={() => { openPanel("wishlist"); setMobileOpen(false); }}
                  className="w-full rounded-xl bg-brand-soft py-2.5 text-sm font-medium text-brand outline-none focus:outline-none"
                >
                  Wishlist ({wishlist.length})
                </button>
                <Link
                  to="/notifications"
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center rounded-xl bg-brand-soft py-2.5 text-sm font-medium text-brand outline-none focus:outline-none flex justify-center items-center gap-1.5"
                >
                  Notifikasi ({unreadNotificationsCount})
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
