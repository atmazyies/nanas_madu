import { createContext, useContext, useState, useCallback, useMemo, useEffect } from "react";
import { products as rawProducts } from "../data/products";
import { formatRupiah } from "../utils/format";

const products = rawProducts.map((p) => {
  const reviewCount = Math.floor(((p.id * 17) % 89) + 12);
  const soldCount = Math.floor(((p.id * 43) % 450) + 50);
  const daysAgo = Math.floor((p.id * 7) % 30);
  // Generate a deterministic past ISO date
  const updatedAt = new Date(1779538400000 - daysAgo * 24 * 60 * 60 * 1000).toISOString();
  return {
    ...p,
    reviewCount,
    soldCount,
    updatedAt,
  };
});

const PrototypeContext = createContext(null);

const EMPTY_CUSTOMER = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  postalCode: "",
  notes: "",
  paymentMethod: "transfer",
};

const INITIAL_NOTIFICATIONS = [
  {
    id: "notif-1",
    type: "pesanan_dibayar",
    title: "Pesanan Berhasil Dibayar! 🎉",
    message: "Pembayaran untuk pesanan #ECO-4829104 senilai Rp 185.000 telah diverifikasi. Penjual sedang menyiapkan Nanas Madu segar Anda.",
    time: "2 jam yang lalu",
    read: false,
    date: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "notif-2",
    type: "pesanan_belum_dibayar",
    title: "Menunggu Pembayaran ⏳",
    message: "Segera selesaikan pembayaran untuk pesanan #ECO-4829112 senilai Rp 75.000 sebelum pukul 23:59 hari ini agar pesanan tidak dibatalkan.",
    time: "5 jam yang lalu",
    read: false,
    date: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "notif-3",
    type: "chat",
    title: "Chat baru dari Honea Seller 💬",
    message: "Halo Kak! Nanas madu segar pesanan kakak sudah dipanen dan siap dikirim pagi ini ya. Terima kasih!",
    time: "1 hari yang lalu",
    read: true,
    date: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "notif-4",
    type: "promo",
    title: "Promo Spesial Panen Raya! 🍍",
    message: "Dapatkan potongan harga hingga 25% untuk pemesanan Jus Nanas Murni & Camilan Stik Nanas. Kuota terbatas!",
    time: "2 hari yang lalu",
    read: false,
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "notif-5",
    type: "voucher",
    title: "Voucher Gratis Ongkir Ditambahkan! 🚚",
    message: "Selamat! Voucher gratis ongkir senilai Rp 15.000 telah masuk ke akun Anda. Gunakan untuk belanja hemat hari ini.",
    time: "3 hari yang lalu",
    read: true,
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  }
];

const INITIAL_CHAT_MESSAGES = [
  {
    id: "msg-1",
    sender: "seller",
    text: "Halo! Selamat datang di Toko Resmi Nanas Madu Honea Pemalang. Ada yang bisa kami bantu mengenai produk segar atau kemitraan kami? 🍍😊",
    time: "08:30",
    date: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
  }
];

export function PrototypeProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [toasts, setToasts] = useState([]);
  const [activePanel, setActivePanel] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [customerForm, setCustomerForm] = useState(EMPTY_CUSTOMER);
  const [orderSuccess, setOrderSuccess] = useState(null);
  const [user, setUser] = useState(null);
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const [chatMessages, setChatMessages] = useState(INITIAL_CHAT_MESSAGES);
  const [isTyping, setIsTyping] = useState(false);

  const isLoggedIn = !!user;

  const showToast = useCallback((message, type = "success") => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  }, []);

  const openPanel = useCallback((panel) => {
    setActivePanel(panel);
    if (panel === "checkout") setCheckoutStep(1);
  }, []);

  const closePanel = useCallback(() => {
    setActivePanel(null);
    setSelectedProduct(null);
    if (activePanel === "checkout" && !orderSuccess) {
      setCheckoutStep(1);
    }
  }, [activePanel, orderSuccess]);

  const openProductDetail = useCallback((product) => {
    setSelectedProduct(product);
    setActivePanel("product");
  }, []);

  const addToCart = useCallback(
    (product, options = {}) => {
      const qty = options.qty ?? 1;
      const color = options.color ?? null;
      const size = options.size ?? null;
      const unitPrice =
        product.newPrice + (size?.priceModifier ?? 0);
      const cartKey = `${product.id}-${color?.id ?? "default"}-${size?.id ?? "default"}`;

      setCart((prev) => {
        const existing = prev.find((item) => item.cartKey === cartKey);
        if (existing) {
          return prev.map((item) =>
            item.cartKey === cartKey ? { ...item, qty: item.qty + qty } : item
          );
        }
        return [
          ...prev,
          {
            ...product,
            cartKey,
            qty,
            selectedColor: color,
            selectedSize: size,
            unitPrice,
            displayTitle: `${product.title}${color ? ` (${color.name})` : ""}${size ? ` - ${size.name}` : ""}`,
          },
        ];
      });
      showToast(`${product.title} x${qty} ditambahkan ke keranjang`);
    },
    [showToast]
  );

  const removeFromCart = useCallback((id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    showToast("Produk dihapus dari keranjang", "info");
  }, [showToast]);

  const updateCartQty = useCallback((id, qty) => {
    if (qty < 1) {
      setCart((prev) => prev.filter((item) => item.id !== id));
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty } : item))
    );
  }, []);

  const toggleWishlist = useCallback(
    (product) => {
      setWishlist((prev) => {
        const exists = prev.some((p) => p.id === product.id);
        if (exists) {
          showToast(`${product.title} dihapus dari wishlist`, "info");
          return prev.filter((p) => p.id !== product.id);
        }
        showToast(`${product.title} ditambahkan ke wishlist`);
        return [...prev, product];
      });
    },
    [showToast]
  );

  const isWishlisted = useCallback(
    (id) => wishlist.some((p) => p.id === id),
    [wishlist]
  );

  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return products.slice(0, 6);
    return products.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const filteredProducts = useMemo(() => {
    if (!categoryFilter) return products;
    const key = categoryFilter.toLowerCase().trim();
    const filtered = products.filter((p) => {
      const cat = (p.category || "").toLowerCase().trim();
      return cat === key || cat.includes(key) || key.includes(cat);
    });
    return filtered.length > 0 ? filtered : products;
  }, [categoryFilter]);

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.qty, 0),
    [cart]
  );

  const cartSubtotal = useMemo(
    () =>
      cart.reduce(
        (sum, item) => sum + (item.unitPrice ?? item.newPrice) * item.qty,
        0
      ),
    [cart]
  );

  const shippingCost = cartSubtotal >= 100000 ? 0 : 15000;
  const cartTotal = cartSubtotal + (cart.length > 0 ? shippingCost : 0);

  const updateCustomerForm = useCallback((field, value) => {
    setCustomerForm((prev) => ({ ...prev, [field]: value }));
  }, []);

  const startCheckout = useCallback(() => {
    if (cart.length === 0) {
      showToast("Keranjang masih kosong", "error");
      return;
    }
    setCheckoutStep(1);
    setOrderSuccess(null);
    if (user) {
      setCustomerForm((prev) => ({
        ...prev,
        email: user.email,
        fullName: prev.fullName || user.name,
      }));
    }
    setActivePanel("checkout");
  }, [cart.length, showToast, user]);

  const nextCheckoutStep = useCallback(() => {
    setCheckoutStep((s) => Math.min(s + 1, 3));
  }, []);

  const prevCheckoutStep = useCallback(() => {
    setCheckoutStep((s) => Math.max(s - 1, 1));
  }, []);

  const startBuyNow = useCallback((product, options = {}) => {
    const qty = options.qty ?? 1;
    const color = options.color ?? null;
    const size = options.size ?? null;
    const unitPrice = product.newPrice + (size?.priceModifier ?? 0);
    const cartKey = `${product.id}-${color?.id ?? "default"}-${size?.id ?? "default"}`;
    
    const singleItem = {
      ...product,
      cartKey,
      qty,
      selectedColor: color,
      selectedSize: size,
      unitPrice,
      displayTitle: `${product.title}${color ? ` (${color.name})` : ""}${size ? ` - ${size.name}` : ""}`,
    };
    
    setCart([singleItem]);
    setCheckoutStep(1);
    setOrderSuccess(null);
    if (user) {
      setCustomerForm((prev) => ({
        ...prev,
        email: user.email,
        fullName: prev.fullName || user.name,
      }));
    }
    setActivePanel("checkout");
  }, [user]);

  const completeCheckout = useCallback(() => {
    const orderId = `ECO-${Date.now().toString().slice(-8)}`;
    const formattedTotal = formatRupiah(cartTotal);
    setOrderSuccess({
      orderId,
      total: cartTotal,
      customer: { ...customerForm },
      items: [...cart],
      date: new Date().toLocaleString("id-ID"),
    });
    setCheckoutStep(4);
    showToast(`Pesanan ${orderId} berhasil dibuat!`);

    const isCodOrEwallet = customerForm.paymentMethod !== "transfer";
    const title = isCodOrEwallet 
      ? "Pembayaran Berhasil! 🎉" 
      : "Pesanan Berhasil Dibuat! 📦";
    const message = isCodOrEwallet
      ? `Pembayaran untuk pesanan #${orderId} sebesar ${formattedTotal} telah diverifikasi otomatis via ${customerForm.paymentMethod.toUpperCase()}. Penjual sedang menyiapkan Nanas Madu segar Anda.`
      : `Pesanan #${orderId} senilai ${formattedTotal} berhasil dibuat. Silakan lakukan transfer bank agar pesanan dapat segera diproses oleh penjual.`;

    const newNotif = {
      id: `notif-${Date.now()}`,
      type: isCodOrEwallet ? "pesanan_dibayar" : "pesanan_belum_dibayar",
      title,
      message,
      time: "Baru saja",
      read: false,
      date: new Date().toISOString(),
    };

    setNotifications((prev) => [newNotif, ...prev]);

    if (customerForm.paymentMethod === "transfer") {
      setTimeout(() => {
        const paymentNotif = {
          id: `notif-${Date.now() + 1}`,
          type: "pesanan_dibayar",
          title: "Pembayaran Diterima! 🎉",
          message: `Pembayaran transfer untuk pesanan #${orderId} sebesar ${formattedTotal} telah kami terima dan diverifikasi. Terima kasih!`,
          time: "Baru saja",
          read: false,
          date: new Date().toISOString(),
        };
        setNotifications((prev) => [paymentNotif, ...prev]);
        showToast("Pembayaran pesanan berhasil dikonfirmasi!", "success");
      }, 4000);
    }
  }, [cart, cartTotal, customerForm, showToast]);

  const finishCheckout = useCallback(() => {
    setCart([]);
    setCustomerForm(EMPTY_CUSTOMER);
    setCheckoutStep(1);
    setOrderSuccess(null);
    setActivePanel(null);
  }, []);

  const login = useCallback(
    (email, _password) => {
      setUser({ email, name: email.split("@")[0] });
      setActivePanel(null);
      showToast(`Selamat datang, ${email.split("@")[0]}!`);
    },
    [showToast]
  );

  const register = useCallback(
    ({ fullName, email, phone }) => {
      setUser({
        email,
        name: fullName,
        phone,
      });
      setActivePanel(null);
      showToast(`Akun ${fullName} berhasil dibuat! Selamat bergabung.`);
    },
    [showToast]
  );

  const logout = useCallback(() => {
    setUser(null);
    showToast("Anda telah logout", "info");
  }, [showToast]);

  const subscribeNewsletter = useCallback(
    (email) => {
      showToast(`Terima kasih! Email ${email} berhasil didaftarkan.`);
    },
    [showToast]
  );

  const claimPromo = useCallback(
    (promoName) => {
      showToast(`Promo "${promoName}" berhasil diklaim! (prototipe)`);
    },
    [showToast]
  );

  const filterByCategory = useCallback((categoryTitle) => {
    setCategoryFilter(categoryTitle);
    showToast(`Menampilkan kategori: ${categoryTitle}`, "info");
    document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
  }, [showToast]);

  const clearCategoryFilter = useCallback(() => {
    setCategoryFilter(null);
    showToast("Filter kategori direset", "info");
  }, [showToast]);

  const scrollToShop = useCallback(() => {
    document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const addNotification = useCallback((type, title, message) => {
    const id = `notif-${Date.now()}`;
    const newNotif = {
      id,
      type,
      title,
      message,
      time: "Baru saja",
      read: false,
      date: new Date().toISOString(),
    };
    setNotifications((prev) => [newNotif, ...prev]);
    showToast(title, "info");
  }, [showToast]);

  const markNotificationAsRead = useCallback((id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  }, []);

  const markAllNotificationsAsRead = useCallback(() => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    showToast("Semua notifikasi ditandai terbaca");
  }, [showToast]);

  const deleteNotification = useCallback((id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
    showToast("Notifikasi dihapus", "info");
  }, [showToast]);

  const clearAllNotifications = useCallback(() => {
    setNotifications([]);
    showToast("Semua notifikasi dibersihkan", "info");
  }, [showToast]);

  const sendChatMessage = useCallback((text, isUser = true) => {
    if (!text.trim()) return;
    const timeString = new Date().toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit"
    });
    const newMessage = {
      id: `msg-${Date.now()}`,
      sender: isUser ? "user" : "seller",
      text,
      time: timeString,
      date: new Date().toISOString(),
    };
    setChatMessages((prev) => [...prev, newMessage]);

    if (isUser) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const replyText = text.toLowerCase().includes("ready")
          ? "Halo! Iya kak, produk nanas madu tersebut ready stock dan segar baru dipanen. Silakan langsung diorder agar masuk pengiriman hari ini ya! 🍍✨"
          : text.toLowerCase().includes("diskon") || text.toLowerCase().includes("promo") || text.toLowerCase().includes("voucher")
          ? "Tentu kak! Kami sedang ada promo gratis ongkir untuk wilayah Jawa Tengah dan diskon voucher pengguna baru yang bisa kakak klaim di bagian atas web kami ya. 😊"
          : text.toLowerCase().includes("harga")
          ? "Untuk harga detail sesuai dengan ukuran/kemasan yang dipilih kak. Kami menjamin harga terbaik langsung dari petani Pemalang dengan kualitas premium super manis! 🍍"
          : "Terima kasih atas pesannya! Tim Customer Service kami akan segera menindaklanjuti pertanyaan Anda secara detail. Ada hal lain yang bisa dibantu? 😊";
        
        const sellerMsgId = `msg-${Date.now() + 1}`;
        const sellerMessage = {
          id: sellerMsgId,
          sender: "seller",
          text: replyText,
          time: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }),
          date: new Date().toISOString(),
        };
        
        setChatMessages((prev) => [...prev, sellerMessage]);
        
        // Add a notification for the incoming chat!
        const notifId = `notif-${Date.now() + 2}`;
        const newNotif = {
          id: notifId,
          type: "chat",
          title: "Pesan baru dari Honea Seller 💬",
          message: replyText.length > 85 ? `${replyText.slice(0, 85)}...` : replyText,
          time: "Baru saja",
          read: false,
          date: new Date().toISOString(),
        };
        setNotifications((prev) => [newNotif, ...prev]);
        showToast("Pesan baru dari Honea Seller", "info");
      }, 1500);
    }
  }, [showToast]);

  const openChatWithProductTemplate = useCallback((product, color, size, qty) => {
    setSelectedProduct(null); // close product detail
    setActivePanel("chat");
    const colorText = color ? ` varian ${color.name}` : "";
    const sizeText = size ? ` ukuran ${size.name}` : "";
    const qtyText = qty > 1 ? ` sebanyak ${qty} pcs` : "";
    const messageTemplate = `Halo Honea Seller! Saya ingin bertanya tentang produk *${product.title}*${colorText}${sizeText}${qtyText}. Apakah ready stock dan bisa langsung dikirim? 🍍`;
    
    // Automatically send user message
    sendChatMessage(messageTemplate, true);
  }, [sendChatMessage]);

  const unreadNotificationsCount = useMemo(
    () => notifications.filter((n) => !n.read).length,
    [notifications]
  );

  useEffect(() => {
    document.body.style.overflow = activePanel ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activePanel]);

  const value = {
    cart,
    wishlist,
    toasts,
    activePanel,
    searchQuery,
    setSearchQuery,
    categoryFilter,
    selectedProduct,
    checkoutStep,
    customerForm,
    orderSuccess,
    user,
    isLoggedIn,
    cartCount,
    cartSubtotal,
    shippingCost,
    cartTotal,
    searchResults,
    filteredProducts,
    showToast,
    openPanel,
    closePanel,
    openProductDetail,
    addToCart,
    removeFromCart,
    updateCartQty,
    toggleWishlist,
    isWishlisted,
    subscribeNewsletter,
    login,
    register,
    logout,
    startCheckout,
    nextCheckoutStep,
    prevCheckoutStep,
    completeCheckout,
    finishCheckout,
    updateCustomerForm,
    claimPromo,
    filterByCategory,
    clearCategoryFilter,
    scrollToShop,
    notifications,
    chatMessages,
    isTyping,
    unreadNotificationsCount,
    addNotification,
    markNotificationAsRead,
    markAllNotificationsAsRead,
    deleteNotification,
    clearAllNotifications,
    sendChatMessage,
    openChatWithProductTemplate,
    startBuyNow,
  };

  return (
    <PrototypeContext.Provider value={value}>
      {children}
    </PrototypeContext.Provider>
  );
}

export function usePrototype() {
  const ctx = useContext(PrototypeContext);
  if (!ctx) throw new Error("usePrototype must be used within PrototypeProvider");
  return ctx;
}
