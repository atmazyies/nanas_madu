import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HiOutlineTrash,
  HiCheckCircle,
  HiOutlineClock,
  HiOutlineChatAlt2,
  HiOutlineTag,
  HiOutlineGift,
  HiCheck,
  HiOutlineBell,
  HiChevronRight
} from "react-icons/hi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageBanner from "../components/PageBanner";
import { usePrototype } from "../context/PrototypeContext";

export default function NotificationsPage() {
  const {
    notifications,
    markNotificationAsRead,
    markAllNotificationsAsRead,
    deleteNotification,
    clearAllNotifications,
    openPanel
  } = usePrototype();

  const [activeTab, setActiveTab] = useState("semua");

  // Filter logic based on tabs
  const filteredNotifications = notifications.filter((notif) => {
    if (activeTab === "semua") return true;
    if (activeTab === "pesanan") {
      return notif.type === "pesanan_dibayar" || notif.type === "pesanan_belum_dibayar";
    }
    if (activeTab === "chat") return notif.type === "chat";
    if (activeTab === "promo") {
      return notif.type === "promo" || notif.type === "voucher";
    }
    return true;
  });

  const getNotifIcon = (type) => {
    switch (type) {
      case "pesanan_dibayar":
        return (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
            <HiCheckCircle className="h-6 w-6" />
          </div>
        );
      case "pesanan_belum_dibayar":
        return (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
            <HiOutlineClock className="h-6 w-6" />
          </div>
        );
      case "chat":
        return (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            <HiOutlineChatAlt2 className="h-6 w-6" />
          </div>
        );
      case "promo":
        return (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
            <HiOutlineTag className="h-6 w-6" />
          </div>
        );
      case "voucher":
        return (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-yellow-600 animate-pulse">
            <HiOutlineGift className="h-6 w-6" />
          </div>
        );
      default:
        return (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-600">
            <HiOutlineBell className="h-6 w-6" />
          </div>
        );
    }
  };

  const getTabCount = (tab) => {
    if (tab === "semua") return notifications.length;
    if (tab === "pesanan") {
      return notifications.filter(
        (n) => n.type === "pesanan_dibayar" || n.type === "pesanan_belum_dibayar"
      ).length;
    }
    if (tab === "chat") return notifications.filter((n) => n.type === "chat").length;
    if (tab === "promo") {
      return notifications.filter((n) => n.type === "promo" || n.type === "voucher").length;
    }
    return 0;
  };

  const handleNotifClick = (notif) => {
    markNotificationAsRead(notif.id);
    if (notif.type === "chat") {
      openPanel("chat");
    }
  };

  return (
    <>
      <Navbar />
      <PageBanner
        title="Kotak Notifikasi"
        subtitle="Pantau status pembayaran pesanan, promo spesial nanas madu premium, kupon belanja, dan percakapan Anda dengan penjual secara real-time."
        breadcrumbs={[{ label: "Kotak Masuk", href: "/notifications" }]}
      />

      <main className="min-h-screen bg-surface py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-4">
            {/* Sidebar Tabs */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 rounded-2xl bg-white p-4 shadow-[var(--shadow-soft)] border border-gray-100">
                <h3 className="mb-4 px-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                  Kategori
                </h3>
                <nav className="flex flex-col gap-1">
                  {[
                    { id: "semua", label: "Semua Notifikasi" },
                    { id: "pesanan", label: "Status Pesanan" },
                    { id: "chat", label: "Chat Penjual" },
                    { id: "promo", label: "Promo & Voucher" }
                  ].map((tab) => {
                    const count = getTabCount(tab.id);
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                          isActive
                            ? "bg-brand text-white shadow-md shadow-brand/10"
                            : "text-gray-600 hover:bg-brand-soft hover:text-brand"
                        }`}
                      >
                        <span>{tab.label}</span>
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                            isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Notification Content */}
            <div className="lg:col-span-3">
              <div className="flex flex-col gap-4">
                {/* Header Actions */}
                {notifications.length > 0 && (
                  <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white px-6 py-4 shadow-[var(--shadow-soft)] border border-gray-100">
                    <div className="text-sm font-semibold text-gray-800">
                      Menampilkan {filteredNotifications.length} notifikasi
                    </div>
                    <div className="flex gap-4">
                      <button
                        onClick={markAllNotificationsAsRead}
                        className="inline-flex items-center gap-1 text-xs font-bold text-brand hover:text-brand-dark transition-colors"
                      >
                        <HiCheck className="h-4 w-4" />
                        Tandai Semua Terbaca
                      </button>
                      <button
                        onClick={clearAllNotifications}
                        className="inline-flex items-center gap-1 text-xs font-bold text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <HiOutlineTrash className="h-4 w-4" />
                        Hapus Semua
                      </button>
                    </div>
                  </div>
                )}

                {/* Notifications List */}
                <div className="flex flex-col gap-3">
                  <AnimatePresence mode="popLayout">
                    {filteredNotifications.length > 0 ? (
                      filteredNotifications.map((notif) => (
                        <motion.div
                          key={notif.id}
                          layout
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          onClick={() => handleNotifClick(notif)}
                          className={`group relative flex cursor-pointer gap-4 rounded-3xl border p-5 transition-all hover:bg-brand-soft/20 ${
                            notif.read
                              ? "bg-white border-gray-100 shadow-[var(--shadow-soft)]"
                              : "bg-gradient-to-r from-brand-soft/40 to-white border-brand/20 shadow-md ring-1 ring-brand/10"
                          }`}
                        >
                          {/* Unread indicator dot */}
                          {!notif.read && (
                            <span className="absolute top-6 right-6 h-2.5 w-2.5 rounded-full bg-brand shadow-sm animate-pulse" />
                          )}

                          {/* Left Icon */}
                          {getNotifIcon(notif.type)}

                          {/* Detail text */}
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <h4
                                className={`text-base ${
                                  notif.read ? "font-semibold text-gray-800" : "font-extrabold text-gray-900"
                                }`}
                              >
                                {notif.title}
                              </h4>
                            </div>
                            <p className="mt-1.5 text-sm text-gray-600 leading-relaxed pr-6">
                              {notif.message}
                            </p>
                            <div className="mt-3.5 flex items-center justify-between">
                              <span className="text-xs font-medium text-gray-400">
                                {notif.time}
                              </span>

                              {/* Interactive Context Button */}
                              <div className="flex items-center gap-3">
                                {notif.type === "chat" && (
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      markNotificationAsRead(notif.id);
                                      openPanel("chat");
                                    }}
                                    className="inline-flex items-center gap-1 rounded-xl bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-600 transition-colors hover:bg-blue-100"
                                  >
                                    Balas Chat <HiChevronRight className="h-3 w-3" />
                                  </button>
                                )}
                                {notif.type === "pesanan_belum_dibayar" && (
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      markNotificationAsRead(notif.id);
                                      openPanel("checkout");
                                    }}
                                    className="inline-flex items-center gap-1 rounded-xl bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-700 transition-colors hover:bg-amber-100"
                                  >
                                    Bayar Sekarang <HiChevronRight className="h-3 w-3" />
                                  </button>
                                )}
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    deleteNotification(notif.id);
                                  }}
                                  className="rounded-lg p-1.5 text-gray-400 opacity-0 transition-opacity hover:bg-gray-100 hover:text-red-500 group-hover:opacity-100"
                                  aria-label="Hapus notifikasi"
                                >
                                  <HiOutlineTrash className="h-4.5 w-4.5" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))
                    ) : (
                      // Empty state
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center rounded-3xl bg-white py-16 px-6 text-center shadow-[var(--shadow-soft)] border border-gray-100"
                      >
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-soft text-brand-dark mb-4">
                          <HiOutlineBell className="h-8 w-8 text-brand" />
                        </div>
                        <h4 className="text-lg font-bold text-gray-800">
                          Kotak Masuk Bersih
                        </h4>
                        <p className="mt-1 max-w-sm text-sm text-gray-500">
                          Tidak ada notifikasi baru di kategori {activeTab === "semua" ? "" : `"${activeTab}"`} saat ini. Semua sistem berjalan lancar!
                        </p>
                        <Link
                          to="/shop"
                          className="mt-6 inline-flex items-center gap-1 rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand/10 transition-all hover:bg-brand-dark active:scale-95"
                        >
                          Mulai Belanja Nanas Madu
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
