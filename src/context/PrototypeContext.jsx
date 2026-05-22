import { createContext, useContext, useState, useCallback, useMemo, useEffect } from "react";
import { products } from "../data/products";

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
    const key = categoryFilter.toLowerCase();
    const filtered = products.filter((p) => {
      const title = p.title.toLowerCase();
      const cat = (p.category || "").toLowerCase();
      if (key.includes("juice") || key.includes("minuman"))
        return cat === "juice" || title.includes("juice") || title.includes("smoothie") || title.includes("aloe");
      if (key.includes("fruit"))
        return cat.includes("snack") || title.includes("gumm");
      if (key.includes("meat") || key.includes("chicken"))
        return cat.includes("meat") || title.includes("chicken");
      if (key.includes("dried") || key.includes("cumin") || key.includes("butter") || key.includes("egg"))
        return cat.includes("pantry") || title.includes("cumin");
      return cat.includes(key.split(" ")[0]) || title.includes(key.split(" ")[0]);
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

  const shippingCost = cartSubtotal >= 50 ? 0 : 5.99;
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

  const completeCheckout = useCallback(() => {
    const orderId = `ECO-${Date.now().toString().slice(-8)}`;
    setOrderSuccess({
      orderId,
      total: cartTotal,
      customer: { ...customerForm },
      items: [...cart],
      date: new Date().toLocaleString("id-ID"),
    });
    setCheckoutStep(4);
    showToast(`Pesanan ${orderId} berhasil dibuat!`);
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
