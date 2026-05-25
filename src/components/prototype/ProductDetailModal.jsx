import { useState, useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiX, HiStar, HiOutlineHeart, HiMinus, HiPlus, HiChevronLeft, HiChevronRight, HiOutlineChatAlt2 } from "react-icons/hi";
import { IoBagAdd } from "react-icons/io5";
import { usePrototype } from "../../context/PrototypeContext";
import Overlay from "./Overlay";
import { formatRupiah } from "../../utils/format";

const generateReviewsForProduct = (product) => {
  const id = product.id;
  const title = product.title;
  const category = product.category;

  const dates = [
    "2 hari yang lalu",
    "4 hari yang lalu",
    "1 minggu yang lalu",
    "2 minggu yang lalu",
    "1 bulan yang lalu"
  ];

  const ratings = [5, 5, 4, 5, 4];

  const names = [
    ["Rian Pratama", "Siti Aminah", "Budi Cahyono", "Dewi Sartika", "Hendra Setiawan"],
    ["Eko Susanto", "Putri Lestari", "Agus Wijaya", "Sri Wahyuni", "Fajar Nugroho"],
    ["Andi Saputra", "Rina Amelia", "Dedi Kusuma", "Lia Rahmawati", "Yanto Subagyo"],
    ["Joko Sitorus", "Mega Handayani", "Susi Susanti", "Bambang Pamungkas", "Gisella Anastasia"],
    ["Taufik Hidayat", "Liliyana Natsir", "Alan Budikusuma", "Jonatan Christie", "Kevin Sanjaya"],
    ["Raffi Ahmad", "Nagita Slavina", "Deddy Corbuzier", "Atta Halilintar", "Baim Wong"],
    ["Reza Rahadian", "Chelsea Islan", "Pevita Pearce", "Dian Sastro", "Nicholas Saputra"],
    ["Gibran Rakabuming", "Kaesang Pangarep", "Bobby Nasution", "Selvi Ananda", "Kahiyang Ayu"],
    ["Anies Baswedan", "Ganjar Pranowo", "Prabowo Subianto", "Muhaimin Iskandar", "Mahfud MD"],
    ["Sandiaga Uno", "Erick Thohir", "Basuki Hadimuljono", "Retno Marsudi", "Sri Mulyani"],
    ["Ridwan Kamil", "Khofifah Indar", "Tri Rismaharini", "Emil Dardak", "Atalia Praratya"],
    ["Najwa Shihab", "Andy F. Noya", "Karni Ilyas", "Rosianna Silalahi", "Merry Riana"],
    ["Iqbaal Ramadhan", "Angga Yunanda", "Adhisty Zara", "Vanesha Prescilla", "Jefri Nichol"],
    ["Isyana Sarasvati", "Raisa Andriana", "Tulus", "Afgan Syahreza", "Yura Yunita"],
    ["Ariel Noah", "Once Mekel", "Ari Lasso", "Kaka Slank", "Duta Sheila"],
    ["Gading Marten", "Gisella Anastasia", "Gempi Nora", "Roy Marten", "Roy Suryo"],
    ["Sule Prikitiw", "Andre Taulany", "Nunung Srimulat", "Parto Patrio", "Azis Gagap"],
    ["Denny Cagur", "Wendy Cagur", "Ruben Onsu", "Ivan Gunawan", "Raffi Ahmad"],
    ["Paula Verhoeven", "Kiano Tiger", "Kenzo Eldrago", "Chelzea Verhoeven", "Nail Fadhly"],
    ["Ria Ricis", "Teuku Ryan", "Oki Setiana", "Shindy Putri", "Moana Cantik"],
    ["Tasya Farasya", "Tasyi Athasyia", "Rachel Vennya", "Awkarin", "Anya Geraldine"],
    ["Boy William", "Daniel Mananta", "Roby Purba", "Indra Herlambang", "Arie Untung"],
    ["Cinta Laura", "Agnez Mo", "Anggun C. Sasmi", "Rich Brian", "Niki Zefanya"],
    ["Raditya Dika", "Ernest Prakasa", "Pandji Pragi", "Bintang Emon", "Arie Kriting"]
  ];

  const productNames = names[(id - 1) % names.length];

  let templates = [];
  if (category === "Juice") {
    templates = [
      `Jus ${title} nya segar sekali, rasa nanas madunya kerasa banget dan manisnya alami tanpa serak di tenggorokan. Sangat direkomendasikan untuk diminum dingin!`,
      `Pengiriman cepat dan jus ${title} sampai dalam kondisi masih dingin berkat kemasan yang rapi. Tanpa gula tapi sudah manis alami, mantap sekali!`,
      `Anak-anak saya suka sekali dengan ${title} ini. Rasanya segar, asam manis pas, dan praktis tidak perlu kupas nanas lagi. Repeat order pasti.`,
      `Kualitas premium sesuai deskripsi. Dingin-dingin minum ${title} ini langsung bikin mata melek dan tubuh segar kembali. Top markotop!`,
      `Sangat puas dengan ${title} ini. Terasa sekali kalau ini perasan murni 100% buah nanas madu asli Pemalang tanpa campuran air.`
    ];
  } else if (category === "Fresh Fruit") {
    templates = [
      `${title} nya sangat manis, juicy, dan tidak gatal di lidah sama sekali. Benar-benar nanas madu kualitas pilihan terbaik dari Pemalang.`,
      `Kondisi ${title} sampai dengan aman, buahnya segar, wangi madunya langsung tercium begitu kemasan dibuka. Potongannya juga rapi dan bersih.`,
      `Sangat praktis beli ${title} di sini. Tidak perlu repot mengupas, tinggal makan. Manis madunya legit sekali, cocok untuk hidangan pencuci mulut.`,
      `Rasa manis nanas madu ${title} ini juara banget! Jauh lebih enak dari nanas biasa. Pengiriman cepat dan dikemas sangat higienis.`,
      `Nanasnya segar sekali, matang sempurna dengan warna kuning madu yang merata. Sangat direkomendasikan bagi pecinta nanas sejati!`
    ];
  } else if (category === "Pantry") {
    templates = [
      `Gila, ${title} ini wangi dan rasanya legit banget. Tekstur serat nanas madunya masih sangat terasa, manisnya pas tidak bikin enek.`,
      `Saya pakai ${title} ini untuk isian nastar dan rasanya jadi premium sekali! Konsistensinya pas, tidak terlalu basah dan gampang dibulatkan.`,
      `Kemasan jar kacanya rapi dan aman dengan bubble wrap tebal. ${title} rasa manis asamnya seimbang, sangat enak dioles ke roti tawar pagi hari.`,
      `Kualitas bahan organiknya terasa sekali di ${title} ini. Tanpa bahan pengawet kimia jadi rasanya sangat alami dan menyehatkan.`,
      `Baru pertama kali coba ${title} dan langsung jatuh cinta. Nanas madu aslinya berasa banget, beda jauh dengan merk pabrikan biasa.`
    ];
  } else if (category === "Snacks") {
    templates = [
      `${title} ini renyah banget dan rasa manis-asam nanas madunya tetap awet. Camilan sehat yang wajib disetok di rumah!`,
      `Keripik ${title} nya kering sempurna, tidak berminyak sama sekali, dan renyahnya tahan lama. Sangat nagih untuk teman nonton film.`,
      `Pengemasan aman dengan kardus tebal sehingga ${title} tidak hancur di jalan. Rasa manis alami nanas madunya juara sekali.`,
      `Camilan nanas kering ${title} terfavorit! Tanpa pemanis buatan sehingga aman dikonsumsi anak-anak. Potongannya pas dan bersih.`,
      `Dodol/keripik ${title} nya legit dan gurih mantap. Teksturnya pas di lidah, rasa manis nanas Pemalangnya khas sekali.`
    ];
  } else if (category === "Supplements") {
    templates = [
      `Luar biasa khasiat ${title} ini. Setelah rutin konsumsi, nyeri sendi saya berkurang drastis dan pencernaan jadi sangat lancar.`,
      `Produk ekstrak ${title} berkualitas tinggi. Sangat membantu meredakan perut kembung dan begah sehabis makan protein tinggi.`,
      `Sangat direkomendasikan! Kapsul ${title} herbalnya gampang ditelan dan khasiat nanas madu Pemalangnya benar-benar terasa nyata.`,
      `Kondisi botol segel rapat dan aman. Suplemen ${title} ini sangat bagus untuk imunitas tubuh dan melancarkan saluran pencernaan.`,
      `Cuka/enzim ${title} nya asli difermentasi alami, terasa dari aromanya yang khas. Sangat bagus untuk detoks tubuh harian.`
    ];
  } else {
    templates = [
      `Produk ${title} ini sangat luar biasa! Kualitas premium, rasa nanas madunya khas Pemalang sekali, dan pengiriman super cepat.`,
      `Sangat puas belanja ${title} di sini. Seller sangat ramah, kemasan higienis dan aman, rasa produknya manis segar juara.`,
      `Rekomendasi terbaik untuk produk olahan nanas madu. ${title} ini memiliki cita rasa kelas atas, manisnya alami dan sehat.`,
      `Barang sampai dengan selamat tanpa cacat. Kualitas ${title} sangat oke, cocok untuk oleh-oleh maupun dinikmati sendiri bersama keluarga.`,
      `Tidak pernah kecewa beli ${title} di Honea. Rasanya konsisten enak, berkhasiat tinggi bagi tubuh, dan harga sangat sebanding.`
    ];
  }

  return productNames.map((name, index) => ({
    id: `rev-${id}-${index}`,
    name,
    rating: ratings[index],
    date: dates[index],
    text: templates[index]
  }));
};

export default function ProductDetailModal() {
  const {
    activePanel,
    selectedProduct,
    closePanel,
    addToCart,
    toggleWishlist,
    isWishlisted,
    startCheckout,
    openChatWithProductTemplate,
    startBuyNow,
  } = usePrototype();

  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const isOpen = activePanel === "product" && selectedProduct;
  const wishlisted = selectedProduct ? isWishlisted(selectedProduct.id) : false;

  const images = selectedProduct
    ? [{ id: 1, src: selectedProduct.image, alt: selectedProduct.title }]
    : [];

  useEffect(() => {
    if (selectedProduct) {
      setActiveImage(0);
      setQuantity(1);
      setSelectedColor(selectedProduct.colors?.[0] ?? null);
      setSelectedSize(selectedProduct.sizes?.[0] ?? null);
    }
  }, [selectedProduct]);

  const unitPrice = useMemo(() => {
    if (!selectedProduct) return 0;
    return selectedProduct.newPrice + (selectedSize?.priceModifier ?? 0);
  }, [selectedProduct, selectedSize]);

  const totalPrice = unitPrice * quantity;

  const handleAddToCart = () => {
    if (!selectedProduct) return;
    addToCart(selectedProduct, {
      qty: quantity,
      color: selectedColor,
      size: selectedSize,
    });
  };

  const handleBuyNow = () => {
    if (!selectedProduct) return;
    closePanel();
    startBuyNow(selectedProduct, {
      qty: quantity,
      color: selectedColor,
      size: selectedSize,
    });
  };

  const nextImage = () => setActiveImage((i) => (i + 1) % images.length);
  const prevImage = () => setActiveImage((i) => (i - 1 + images.length) % images.length);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Overlay onClose={closePanel} />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Detail produk"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ type: "spring", damping: 26, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 z-[70] max-h-[92vh] w-[calc(100%-1.5rem)] max-w-4xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            <button
              type="button"
              onClick={closePanel}
              className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow-md hover:bg-white"
              aria-label="Tutup"
            >
              <HiX className="h-5 w-5" />
            </button>

            <div className="grid max-h-[92vh] overflow-y-auto lg:grid-cols-2">
              {/* Gallery */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative bg-brand-soft/20 p-5 sm:p-6"
              >
                {selectedProduct.discount && (
                  <span className="absolute top-7 left-7 z-10 rounded-full bg-cta px-3 py-1 text-xs font-bold text-white">
                    -{selectedProduct.discount}%
                  </span>
                )}

                <div className="relative overflow-hidden rounded-2xl bg-white">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImage}
                      src={images[activeImage]?.src}
                      alt={images[activeImage]?.alt || selectedProduct.title}
                      initial={{ opacity: 0, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="aspect-square w-full object-cover"
                    />
                  </AnimatePresence>

                  {images.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={prevImage}
                        className="absolute top-1/2 left-2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-md hover:bg-white"
                        aria-label="Foto sebelumnya"
                      >
                        <HiChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        type="button"
                        onClick={nextImage}
                        className="absolute top-1/2 right-2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-md hover:bg-white"
                        aria-label="Foto berikutnya"
                      >
                        <HiChevronRight className="h-5 w-5" />
                      </button>
                      <span className="absolute bottom-3 right-3 rounded-full bg-black/50 px-2.5 py-1 text-xs font-medium text-white">
                        {activeImage + 1} / {images.length}
                      </span>
                    </>
                  )}
                </div>

                {/* Thumbnails - min 5 */}
                <div className="mt-4 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                  {images.map((img, i) => (
                    <button
                      key={img.id}
                      type="button"
                      onClick={() => setActiveImage(i)}
                      className={`h-16 w-16 shrink-0 overflow-hidden rounded-xl border-2 transition-all sm:h-[72px] sm:w-[72px] ${
                        activeImage === i
                          ? "border-brand ring-2 ring-brand/30 scale-105"
                          : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex flex-col p-5 sm:p-7 lg:max-h-[92vh] lg:overflow-y-auto"
              >
                <span className="w-fit rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
                  {selectedProduct.category}
                </span>
                <h2 className="mt-3 text-xl font-bold text-gray-900 sm:text-2xl">
                  {selectedProduct.title}
                </h2>

                <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm">
                  <div className="flex items-center gap-1">
                    <HiStar className="h-4 w-4 text-amber-400" />
                    <span className="font-semibold">{selectedProduct.rating}</span>
                  </div>
                  {selectedProduct.reviewCount !== undefined && (
                    <span className="text-gray-500">
                      ({selectedProduct.reviewCount} ulasan)
                    </span>
                  )}
                  {selectedProduct.soldCount !== undefined && (
                    <span className="font-semibold text-brand bg-brand-soft/40 px-2 py-0.5 rounded-lg text-xs">
                      Terjual {selectedProduct.soldCount}+
                    </span>
                  )}
                  <span
                    className={`font-medium ${
                      selectedProduct.stock === "Low Stock"
                        ? "text-orange-500"
                        : "text-brand"
                    }`}
                  >
                    {selectedProduct.stock}
                  </span>
                  <span className="text-gray-400">SKU: {selectedProduct.sku}</span>
                </div>

                <div className="mt-3 flex flex-wrap gap-3 text-xs text-gray-500">
                  <span className="rounded-lg bg-gray-100 px-2.5 py-1">
                    Berat: {selectedProduct.weight}
                  </span>
                  <span className="rounded-lg bg-gray-100 px-2.5 py-1">
                    Asal: {selectedProduct.origin}
                  </span>
                </div>

                <div className="mt-4 flex items-baseline gap-3">
                  <span className="text-2xl font-bold text-brand sm:text-3xl">
                    {formatRupiah(unitPrice)}
                  </span>
                  <span className="text-base text-gray-400 line-through">
                    {formatRupiah(selectedProduct.oldPrice)}
                  </span>
                  {selectedSize && selectedSize.priceModifier !== 0 && (
                    <span className="text-xs text-gray-400">
                      ({selectedSize.priceModifier > 0 ? "+" : ""}{formatRupiah(selectedSize.priceModifier)} ukuran)
                    </span>
                  )}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  {selectedProduct.description}
                </p>

                {/* Warna / varian */}
                {selectedProduct.colors?.length > 0 && (
                  <div className="mt-5">
                    <p className="text-sm font-semibold text-gray-900">
                      Pilih Warna / Rasa:{" "}
                      <span className="font-normal text-brand">
                        {selectedColor?.name}
                      </span>
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {selectedProduct.colors.map((color) => (
                        <button
                          key={color.id}
                          type="button"
                          onClick={() => setSelectedColor(color)}
                          title={color.name}
                          className={`flex items-center gap-2 rounded-full border-2 px-3 py-1.5 text-xs font-medium transition-all ${
                            selectedColor?.id === color.id
                              ? "border-brand bg-brand-soft text-brand"
                              : "border-gray-200 text-gray-600 hover:border-brand/50"
                          }`}
                        >
                          <span
                            className="h-5 w-5 rounded-full border border-gray-200 shadow-inner"
                            style={{ backgroundColor: color.hex }}
                          />
                          {color.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Ukuran / kemasan */}
                {selectedProduct.sizes?.length > 0 && (
                  <div className="mt-5">
                    <p className="text-sm font-semibold text-gray-900">
                      Pilih Ukuran / Kemasan:{" "}
                      <span className="font-normal text-brand">
                        {selectedSize?.name}
                      </span>
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {selectedProduct.sizes.map((size) => (
                        <button
                          key={size.id}
                          type="button"
                          onClick={() => setSelectedSize(size)}
                          className={`rounded-xl border-2 px-4 py-2 text-xs font-semibold transition-all ${
                            selectedSize?.id === size.id
                              ? "border-brand bg-brand text-white"
                              : "border-gray-200 text-gray-700 hover:border-brand"
                          }`}
                        >
                          {size.name}
                          {size.priceModifier > 0 && (
                            <span className="ml-1 opacity-80">
                              (+{formatRupiah(size.priceModifier)})
                            </span>
                          )}
                          {size.priceModifier < 0 && (
                            <span className="ml-1 opacity-80">
                              (-{formatRupiah(Math.abs(size.priceModifier))})
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Kuantitas */}
                <div className="mt-5">
                  <p className="text-sm font-semibold text-gray-900">Kuantitas</p>
                  <div className="mt-2 flex items-center gap-4">
                    <div className="flex items-center rounded-full border border-gray-200 bg-gray-50">
                      <button
                        type="button"
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        disabled={quantity <= 1}
                        className="flex h-10 w-10 items-center justify-center rounded-l-full hover:bg-gray-100 disabled:opacity-40"
                        aria-label="Kurangi"
                      >
                        <HiMinus className="h-4 w-4" />
                      </button>
                      <span className="w-12 text-center text-sm font-bold">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQuantity((q) => Math.min(99, q + 1))}
                        className="flex h-10 w-10 items-center justify-center rounded-r-full hover:bg-gray-100"
                        aria-label="Tambah"
                      >
                        <HiPlus className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-500">
                      Subtotal:{" "}
                      <strong className="text-brand">{formatRupiah(totalPrice)}</strong>
                    </p>
                  </div>
                </div>

                {/* Keunggulan */}
                <div className="mt-5">
                  <p className="text-sm font-semibold text-gray-900">Keunggulan:</p>
                  <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {selectedProduct.features?.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 rounded-xl bg-brand-soft/50 px-3 py-2 text-xs text-gray-700"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Khasiat & Manfaat */}
                {selectedProduct.benefits?.length > 0 && (
                  <div className="mt-5">
                    <p className="text-sm font-semibold text-gray-900">Khasiat & Manfaat:</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {selectedProduct.benefits.map((b, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 rounded-xl bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-800 ring-1 ring-amber-600/10 shadow-sm"
                        >
                          🍍 {b}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Kandungan & Nutrisi */}
                {selectedProduct.nutrition?.length > 0 && (
                  <div className="mt-5">
                    <p className="text-sm font-semibold text-gray-900">Kandungan & Nutrisi:</p>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      {selectedProduct.nutrition.map((nut, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center rounded-xl bg-gray-50 border border-gray-100 p-2.5 text-xs hover:bg-brand-soft/20 transition-all duration-300"
                        >
                          <span className="text-gray-500 font-medium">{nut.label}</span>
                          <span className="text-brand font-bold">{nut.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}


                {/* Ringkasan pilihan */}
                <div className="mt-4 rounded-2xl border border-brand/20 bg-brand-soft/30 p-3 text-xs text-gray-600">
                  <strong className="text-gray-800">Pilihan Anda:</strong>{" "}
                  {selectedColor?.name && `${selectedColor.name}`}
                  {selectedColor && selectedSize && " · "}
                  {selectedSize?.name}
                  {" · "}Qty: {quantity}
                </div>

                <div className="mt-5 flex gap-3">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAddToCart}
                    className="flex flex-1 items-center justify-center gap-2 rounded-full bg-brand py-3.5 text-sm font-semibold text-white hover:bg-green-600"
                  >
                    <IoBagAdd className="h-5 w-5" />
                    Tambah ke Keranjang
                  </motion.button>
                  <button
                    type="button"
                    onClick={() => toggleWishlist(selectedProduct)}
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                      wishlisted
                        ? "border-cta bg-cta/10 text-cta"
                        : "border-gray-200 text-gray-500 hover:border-cta"
                    }`}
                    aria-label="Wishlist"
                  >
                    <HiOutlineHeart
                      className={`h-5 w-5 ${wishlisted ? "fill-cta" : ""}`}
                    />
                  </button>
                </div>

                <div className="mt-3.5 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      openChatWithProductTemplate(selectedProduct, selectedColor, selectedSize, quantity);
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-blue-500 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition-all duration-300"
                  >
                    <HiOutlineChatAlt2 className="h-5 w-5" />
                    Chat Penjual
                  </button>
                  <button
                    type="button"
                    onClick={handleBuyNow}
                    className="rounded-full bg-brand py-3 text-sm font-semibold text-white hover:bg-brand-dark transition-all duration-300 shadow-md shadow-brand/10 animate-pulse"
                  >
                    Beli Sekarang
                  </button>
                </div>

                {/* Ulasan Pelanggan Section */}
                <div className="mt-8 border-t border-gray-150 pt-6">
                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    Ulasan Pelanggan <span className="text-xs font-normal text-gray-500">(5 ulasan)</span>
                  </h3>
                  
                  {/* Rating Overview */}
                  <div className="mt-4 flex flex-col sm:flex-row gap-5 rounded-2xl bg-gray-50 p-4 border border-gray-100/50">
                    <div className="flex flex-col items-center justify-center sm:w-1/3 border-b sm:border-b-0 sm:border-r border-gray-200/60 pb-3 sm:pb-0 sm:pr-5">
                      <span className="text-4xl font-extrabold text-gray-900">{selectedProduct.rating}</span>
                      <div className="flex items-center gap-0.5 mt-1.5">
                        {[...Array(5)].map((_, i) => (
                          <HiStar 
                            key={i} 
                            className={`h-4.5 w-4.5 ${
                              i < Math.floor(selectedProduct.rating) ? "text-amber-400" : "text-gray-200"
                            }`} 
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 mt-2">Kepuasan 98%</span>
                    </div>
                    
                    {/* Progress Bars */}
                    <div className="flex-1 flex flex-col justify-center gap-1.5 text-xs text-gray-600">
                      <div className="flex items-center gap-2">
                        <span className="w-12 font-medium">5 Bintang</span>
                        <div className="flex-1 h-2 rounded-full bg-gray-200 overflow-hidden">
                          <div className="h-full bg-brand rounded-full" style={{ width: "60%" }}></div>
                        </div>
                        <span className="w-4 text-right">3</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-12 font-medium">4 Bintang</span>
                        <div className="flex-1 h-2 rounded-full bg-gray-200 overflow-hidden">
                          <div className="h-full bg-brand rounded-full" style={{ width: "40%" }}></div>
                        </div>
                        <span className="w-4 text-right">2</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-12 font-medium">3 Bintang</span>
                        <div className="flex-1 h-2 rounded-full bg-gray-200 overflow-hidden">
                          <div className="h-full bg-brand rounded-full" style={{ width: "0%" }}></div>
                        </div>
                        <span className="w-4 text-right">0</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-12 font-medium">2 Bintang</span>
                        <div className="flex-1 h-2 rounded-full bg-gray-200 overflow-hidden">
                          <div className="h-full bg-brand rounded-full" style={{ width: "0%" }}></div>
                        </div>
                        <span className="w-4 text-right">0</span>
                      </div>
                    </div>
                  </div>

                  {/* Reviews List */}
                  <div className="mt-5 space-y-4">
                    {generateReviewsForProduct(selectedProduct).map((rev) => (
                      <div 
                        key={rev.id} 
                        className="rounded-2xl border border-gray-100 p-4 transition-all hover:bg-gray-50/50 hover:shadow-sm"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-3">
                            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-brand to-golden flex items-center justify-center text-white text-[11px] font-bold uppercase shadow-sm">
                              {rev.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                            </div>
                            <div className="flex flex-col">
                              <span className="text-xs font-bold text-gray-800">{rev.name}</span>
                              <div className="flex items-center gap-0.5 mt-0.5">
                                {[...Array(5)].map((_, i) => (
                                  <HiStar 
                                    key={i} 
                                    className={`h-3 w-3 ${
                                      i < rev.rating ? "text-amber-400" : "text-gray-200"
                                    }`} 
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                          <span className="text-[10px] text-gray-400 font-medium">{rev.date}</span>
                        </div>
                        <p className="mt-2.5 text-xs text-gray-600 leading-relaxed pl-1">
                          {rev.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
