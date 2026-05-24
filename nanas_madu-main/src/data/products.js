export const products = [
  {
    id: 1,
    title: "Sari Nanas Madu Premium",
    oldPrice: 85000,
    newPrice: 65000,
    rating: 4.9,
    discount: 23,
    category: "Juice",
    stock: "In Stock",
    sku: "NANAS-JUI-001",
    weight: "500ml",
    origin: "Pemalang, Indonesia",
    image: "/images/product-1.webp",
    images: [
      { id: 1, src: "/images/product-1-1.webp", alt: "Sari Nanas Madu 1" },
      { id: 2, src: "/images/product-1-2.webp", alt: "Sari Nanas Madu 2" },
      { id: 3, src: "/images/product-1-3.webp", alt: "Sari Nanas Madu 3" },
    ],
    colors: [
      { id: "yellow", name: "Golden Yellow", hex: "#FDD835" },
      { id: "orange", name: "Fresh Orange", hex: "#FFB300" },
    ],
    sizes: [
      { id: "250g", name: "250ml Botol", priceModifier: -20000 },
      { id: "500g", name: "500ml Botol", priceModifier: 0 },
      { id: "1kg", name: "1000ml Botol", priceModifier: 40000 },
    ],
    description: "Sari Nanas Madu murni yang diekstrak dengan teknik cold-pressed tanpa tambahan air, pengawet, dan gula. Menjaga nutrisi tetap utuh dan menyegarkan tubuh secara alami.",
    features: ["100% Nanas Asli", "Cold-pressed", "Tanpa gula tambahan", "Tanpa pengawet"],
    benefits: ["Meningkatkan Imunitas Tubuh", "Melancarkan Pencernaan", "Meredakan Inflamasi & Nyeri Sendi"],
    nutrition: [
      { label: "Vitamin C", value: "85%" },
      { label: "Bromelain", value: "220 GDU" },
      { label: "Kalori", value: "60 kkal" },
      { label: "Serat Alami", value: "2.5g" }
    ]
  },
  {
    id: 2,
    title: "Nanas Madu Potong Segar",
    oldPrice: 45000,
    newPrice: 35000,
    rating: 4.8,
    discount: 22,
    category: "Fresh Fruit",
    stock: "In Stock",
    sku: "NANAS-FRT-002",
    weight: "400g",
    origin: "Pemalang, Indonesia",
    image: "/images/product-2.webp",
    images: [
      { id: 1, src: "/images/product-2-1.webp", alt: "Nanas Potong 1" },
      { id: 2, src: "/images/product-2-2.webp", alt: "Nanas Utuh" },
    ],
    colors: [
      { id: "natural", name: "Natural Yellow", hex: "#FFEE58" },
    ],
    sizes: [
      { id: "200g", name: "200g Pack", priceModifier: -15000 },
      { id: "400g", name: "400g Pack", priceModifier: 0 },
      { id: "800g", name: "800g Pack Big", priceModifier: 30000 },
    ],
    description: "Potongan buah Nanas Madu asli Pemalang yang matang pohon, dikupas secara higienis dan siap santap. Memiliki cita rasa super manis legit dengan kandungan air melimpah.",
    features: ["Siap Santap", "Kupas Higienis", "Matang Alami", "Kemasan Makanan Khusus"],
    benefits: ["Mencegah Dehidrasi", "Membantu Diet Sehat", "Menyegarkan Tenggorokan"],
    nutrition: [
      { label: "Kadar Air", value: "87%" },
      { label: "Vitamin C", value: "70%" },
      { label: "Bromelain", value: "180 GDU" },
      { label: "Fruktosa Alami", value: "12g" }
    ]
  },
  {
    id: 3,
    title: "Selai Nanas Madu Organik",
    oldPrice: 55000,
    newPrice: 42000,
    rating: 4.7,
    discount: 23,
    category: "Pantry",
    stock: "In Stock",
    sku: "NANAS-JAM-003",
    weight: "250g",
    origin: "Jawa Tengah, Indonesia",
    image: "/images/product-3.webp",
    images: [
      { id: 1, src: "/images/product-3-1.webp", alt: "Selai Nanas 1" },
      { id: 2, src: "/images/product-3-2.webp", alt: "Selai Nanas 2" },
    ],
    colors: [
      { id: "gold", name: "Golden Jam", hex: "#FFCA28" },
    ],
    sizes: [
      { id: "150g", name: "150g Jar", priceModifier: -12000 },
      { id: "250g", name: "250g Jar", priceModifier: 0 },
      { id: "500g", name: "500g Jar Jumbo", priceModifier: 35000 },
    ],
    description: "Selai dari Nanas Madu asli dengan tekstur berserat alami, diproses dengan gula kelapa organik. Sangat cocok dijadikan isian nastar premium, olesan roti panggang, maupun dessert.",
    features: ["Tekstur Serat Asli", "Manis Organik", "Tanpa Pewarna Kimia", "Vegan Friendly"],
    benefits: ["Energi Tambahan", "Melancarkan Metabolisme", "Pengganti Gula Pasir"],
    nutrition: [
      { label: "Serat Pektin", value: "3.2g" },
      { label: "Kalium", value: "110mg" },
      { label: "Zat Besi", value: "4%" },
      { label: "Karbohidrat", value: "18g" }
    ]
  },
  {
    id: 4,
    title: "Manisan Nanas Madu Kering",
    oldPrice: 60000,
    newPrice: 48000,
    rating: 4.6,
    discount: 20,
    category: "Snacks",
    stock: "Low Stock",
    sku: "NANAS-SNK-004",
    weight: "150g",
    origin: "Bali, Indonesia",
    image: "/images/product-4.webp",
    images: [
      { id: 1, src: "/images/product-4-1.webp", alt: "Manisan Nanas 1" },
    ],
    colors: [
      { id: "amber", name: "Dried Amber", hex: "#FFB300" },
    ],
    sizes: [
      { id: "100g", name: "100g Pack", priceModifier: -10000 },
      { id: "150g", name: "150g Pack", priceModifier: 0 },
      { id: "300g", name: "300g Pack Big", priceModifier: 30000 },
    ],
    description: "Camilan sehat buah nanas madu kering (dehydrated) yang diiris tipis. Menggunakan teknik pengeringan bersuhu rendah untuk mempertahankan vitamin C alami tanpa tambahan gula tepung.",
    features: ["Bebas Gluten", "Tanpa Gula Tambahan", "Kaya Antioksidan", "Tahan Lama Alami"],
    benefits: ["Camilan Rendah Kalori", "Meningkatkan Kesehatan Kulit", "Menjaga Gula Darah Stabil"],
    nutrition: [
      { label: "Vitamin C", value: "40%" },
      { label: "Serat Kasar", value: "5g" },
      { label: "Kalium", value: "140mg" },
      { label: "Kalsium", value: "2%" }
    ]
  },
  {
    id: 5,
    title: "Sirup Nanas Madu Asli",
    oldPrice: 75000,
    newPrice: 55000,
    rating: 4.8,
    discount: 26,
    category: "Pantry",
    stock: "In Stock",
    sku: "NANAS-SYR-005",
    weight: "500ml",
    origin: "Jawa Tengah, Indonesia",
    image: "/images/product-5.webp",
    images: [
      { id: 1, src: "/images/product-5-1.webp", alt: "Sirup Nanas 1" },
    ],
    colors: [
      { id: "yellow", name: "Bright Yellow", hex: "#FFEE58" },
    ],
    sizes: [
      { id: "350g", name: "350ml Botol", priceModifier: -15000 },
      { id: "500g", name: "500ml Botol", priceModifier: 0 },
      { id: "1000g", name: "1000ml Botol", priceModifier: 45000 },
    ],
    description: "Sirup konsentrat buah nanas madu segar berkarakteristik kental dan harum semerbak. Sangat cocok disajikan dingin dengan es batu, campuran teh, soda, maupun racikan mocktail.",
    features: ["Sirup Kental Asli", "Aroma Tropis Kuat", "Ekstrak Nanas Murni", "Tanpa Pemanis Buatan"],
    benefits: ["Pereda Stres & Menyegarkan", "Teman Kumpul Keluarga", "Praktis Disajikan"],
    nutrition: [
      { label: "Nanas Murni", value: "65%" },
      { label: "Vitamin C", value: "30%" },
      { label: "Karbohidrat", value: "22g" },
      { label: "Fosfor", value: "8mg" }
    ]
  },
  {
    id: 6,
    title: "Ekstrak Enzim Bromelain",
    oldPrice: 150000,
    newPrice: 115000,
    rating: 4.9,
    discount: 23,
    category: "Supplements",
    stock: "In Stock",
    sku: "NANAS-SUP-006",
    weight: "60 Kapsul",
    origin: "Jakarta, Indonesia",
    image: "/images/product-6.webp",
    images: [
      { id: 1, src: "/images/product-6-1.webp", alt: "Suplemen Bromelain 1" },
    ],
    colors: [
      { id: "white", name: "Capsule Putih", hex: "#F5F5F5" },
    ],
    sizes: [
      { id: "30g", name: "30 Kapsul Botol", priceModifier: -45000 },
      { id: "60g", name: "60 Kapsul Botol", priceModifier: 0 },
      { id: "120g", name: "120 Kapsul Botol", priceModifier: 80000 },
    ],
    description: "Suplemen konsentrat enzim bromelain organik yang diekstrak langsung dari bonggol nanas madu pilihan. Sangat efektif melancarkan sistem pencernaan dan meredakan radang.",
    features: ["Bromelain Konsentrat", "Anti Inflamasi Kuat", "Kapsul Vegan", "Uji Laboratorium"],
    benefits: ["Membantu Pencernaan Protein", "Mengurangi Pembengkakan Sinus", "Meringankan Nyeri Sendi"],
    nutrition: [
      { label: "Bromelain Murni", value: "500mg" },
      { label: "Kekuatan Enzim", value: "2400 GDU" },
      { label: "Serat Bonggol", value: "12%" },
      { label: "Kalium Organik", value: "15mg" }
    ]
  },
  {
    id: 7,
    title: "Keripik Nanas Madu Renyah",
    oldPrice: 35000,
    newPrice: 28000,
    rating: 4.5,
    discount: 20,
    category: "Snacks",
    stock: "In Stock",
    sku: "NANAS-CHP-007",
    weight: "100g",
    origin: "Subang, Indonesia",
    image: "/images/product-7.webp",
    images: [
      { id: 1, src: "/images/product-7-1.webp", alt: "Keripik Nanas 1" },
    ],
    colors: [
      { id: "gold", name: "Crispy Gold", hex: "#FFCA28" },
    ],
    sizes: [
      { id: "50g", name: "50g Pack Kecil", priceModifier: -13000 },
      { id: "100g", name: "100g Pack Sedang", priceModifier: 0 },
      { id: "250g", name: "250g Pack Keluarga", priceModifier: 30000 },
    ],
    description: "Keripik renyah rasa manis-asam seimbang hasil teknologi vacuum frying suhu rendah. Bebas kolesterol dan minyak berlebih, camilan sehat andalan keluarga.",
    features: ["Vacuum Frying", "Rendah Lemak", "Bebas MSG", "Tanpa Pengawet"],
    benefits: ["Camilan Sehat Anak-anak", "Sumber Energi Cepat", "Mengatasi Mual"],
    nutrition: [
      { label: "Lemak Jenuh", value: "0%" },
      { label: "Serat Makanan", value: "4.5g" },
      { label: "Vitamin C", value: "25%" },
      { label: "Natrium Alami", value: "5mg" }
    ]
  },
  {
    id: 8,
    title: "Nanas Madu Sparkling Water",
    oldPrice: 30000,
    newPrice: 22000,
    rating: 4.8,
    discount: 26,
    category: "Juice",
    stock: "In Stock",
    sku: "NANAS-SPK-008",
    weight: "330ml",
    origin: "Bali, Indonesia",
    image: "/images/product-8.webp",
    images: [
      { id: 1, src: "/images/product-8-1.webp", alt: "Sparkling Nanas 1" },
    ],
    colors: [
      { id: "clear", name: "Clear Gold", hex: "#FFF59D" },
    ],
    sizes: [
      { id: "330g", name: "330ml Kaleng", priceModifier: 0 },
      { id: "6pack", name: "6 x 330ml Multipack", priceModifier: 95000 },
    ],
    description: "Air soda segar berkarbonasi ringan berpadu dengan ekstrak murni nanas madu tanpa gula pasir. Hanya 10 kalori per kaleng, sensasi segar tropis bebas rasa bersalah.",
    features: ["Zero Added Sugar", "Sangat Menyegarkan", "Hanya 10 Kalori", "Ekstrak Buah Asli"],
    benefits: ["Pengganti Soda Manis", "Melepas Dahaga Instan", "Menambah Semangat Kerja"],
    nutrition: [
      { label: "Kalori", value: "10 kkal" },
      { label: "Karbohidrat", value: "2g" },
      { label: "Ekstrak Nanas", value: "15%" },
      { label: "Vitamin C", value: "15%" }
    ]
  },
  {
    id: 9,
    title: "Nanas Madu Pemalang Utuh",
    oldPrice: 25000,
    newPrice: 18000,
    rating: 4.9,
    discount: 28,
    category: "Fresh Fruit",
    stock: "In Stock",
    sku: "NANAS-WHO-009",
    weight: "1.2kg",
    origin: "Pemalang, Indonesia",
    image: "/images/product-9.webp",
    images: [
      { id: 1, src: "/images/product-9-1.webp", alt: "Nanas Utuh" },
    ],
    colors: [
      { id: "fresh", name: "Segar Utuh", hex: "#4CAF50" },
    ],
    sizes: [
      { id: "1pc", name: "1 Pcs (±1kg)", priceModifier: 0 },
      { id: "3pcs", name: "3 Pcs Paket Hemat", priceModifier: 30000 },
      { id: "5pcs", name: "5 Pcs Paket Borongan", priceModifier: 60000 },
    ],
    description: "Buah nanas madu khas Pemalang utuh segar yang dipanen langsung dari kebun lereng Gunung Slamet. Kulit jingga-kekuningan pertanda kematangan manis madu alami yang sempurna.",
    features: ["Petik Segar", "Grade A Eksport", "Rasa Madu Asli", "Tahan 7 Hari Perjalanan"],
    benefits: ["Buah Meja Premium", "Bisa Disimpan Lama", "Bahan Rujak Terbaik"],
    nutrition: [
      { label: "Kematangan", value: "95%" },
      { label: "Kadar Gula Alami", value: "16 Brix" },
      { label: "Vitamin C", value: "80%" },
      { label: "Kalsium", value: "3%" }
    ]
  },
  {
    id: 10,
    title: "Jus Nanas Madu & Jahe",
    oldPrice: 38000,
    newPrice: 29000,
    rating: 4.7,
    discount: 24,
    category: "Juice",
    stock: "In Stock",
    sku: "NANAS-JUI-010",
    weight: "250ml",
    origin: "Pemalang, Indonesia",
    image: "/images/product-10.webp",
    images: [
      { id: 1, src: "/images/product-10-1.webp", alt: "Jus Nanas Jahe" },
    ],
    colors: [
      { id: "ginger", name: "Ginger Yellow", hex: "#FFF176" },
    ],
    sizes: [
      { id: "250ml", name: "250ml Botol", priceModifier: 0 },
      { id: "500ml", name: "500ml Botol", priceModifier: 20000 },
    ],
    description: "Kombinasi unik nanas madu segar berpadu dengan jahe emprit pilihan. Menghasilkan rasa jus tropis yang manis, asam segar, dan memberikan kehangatan lembut di tenggorokan.",
    features: ["Ekstrak Jahe Asli", "Cold-pressed", "Tanpa Air Tambahan", "Menghangatkan Tubuh"],
    benefits: ["Meredakan Masuk Angin", "Melancarkan Sirkulasi Darah", "Meredakan Mual & Kembung"],
    nutrition: [
      { label: "Gingerol", value: "12mg" },
      { label: "Vitamin C", value: "65%" },
      { label: "Bromelain", value: "150 GDU" },
      { label: "Energi", value: "75 kkal" }
    ]
  },
  {
    id: 11,
    title: "Sambal Nanas Madu Pedas",
    oldPrice: 35000,
    newPrice: 26000,
    rating: 4.8,
    discount: 25,
    category: "Pantry",
    stock: "In Stock",
    sku: "NANAS-PAN-011",
    weight: "180g",
    origin: "Pemalang, Indonesia",
    image: "/images/product-11.webp",
    images: [
      { id: 1, src: "/images/product-11-1.webp", alt: "Sambal Nanas" },
    ],
    colors: [
      { id: "spicy", name: "Merah Merona", hex: "#E53935" },
    ],
    sizes: [
      { id: "100g", name: "100g Jar Kecil", priceModifier: -10000 },
      { id: "180g", name: "180g Jar Sedang", priceModifier: 0 },
    ],
    description: "Sensasi sambal pedas berpadu dengan keunikan rasa asam-manis segar nanas madu Pemalang cincang. Menjadi pendamping makan nasi hangat, ikan bakar, dan ayam goreng yang tiada duanya.",
    features: ["Cabe Segar Pilihan", "Cincangan Nanas Asli", "Tanpa Pengawet Buatan", "Kemasan Jar Praktis"],
    benefits: ["Membangkitkan Selera Makan", "Kaya Capsaicin & Vit C", "Sensasi Makan Seru"],
    nutrition: [
      { label: "Kadar Cabe", value: "45%" },
      { label: "Nanas Madu", value: "30%" },
      { label: "Vitamin C", value: "40%" },
      { label: "Natrium", value: "85mg" }
    ]
  },
  {
    id: 12,
    title: "Hampers Honea Royal Golden",
    oldPrice: 350000,
    newPrice: 285000,
    rating: 4.9,
    discount: 18,
    category: "Hampers",
    stock: "In Stock",
    sku: "NANAS-HAM-012",
    weight: "3.5kg",
    origin: "Pemalang, Indonesia",
    image: "/images/product-12.webp",
    images: [
      { id: 1, src: "/images/product-12-1.webp", alt: "Hampers Premium" },
    ],
    colors: [
      { id: "royal", name: "Gold Exclusive", hex: "#D4AF37" },
    ],
    sizes: [
      { id: "standard", name: "Paket Standard Box", priceModifier: 0 },
      { id: "luxury", name: "Paket Luxury Hardbox", priceModifier: 75000 },
    ],
    description: "Hampers eksklusif berisi 2 buah Nanas Madu segar pilihan, 1 botol Sirup Nanas, 1 jar Selai Organik, dan 1 pack Keripik Nanas Renyah. Dikemas mewah dengan kartu ucapan custom.",
    features: ["Kemasan Hardbox Mewah", "Kartu Ucapan Kustom", "Varian Produk Lengkap", "Paling Dicari Saat Lebaran"],
    benefits: ["Hadiah Relasi Bisnis", "Oleh-Oleh Khas Premium", "Berbagi Kebahagiaan Sehat"],
    nutrition: [
      { label: "Nanas Segar", value: "2 Pcs" },
      { label: "Sirup Nanas", value: "350ml" },
      { label: "Selai Nanas", value: "150g" },
      { label: "Keripik Nanas", value: "100g" }
    ]
  },
  {
    id: 13,
    title: "Dodol Nanas Madu Pemalang",
    oldPrice: 40000,
    newPrice: 32000,
    rating: 4.6,
    discount: 20,
    category: "Snacks",
    stock: "In Stock",
    sku: "NANAS-SNK-013",
    weight: "250g",
    origin: "Pemalang, Indonesia",
    image: "/images/product-13.webp",
    images: [
      { id: 1, src: "/images/product-13-1.webp", alt: "Dodol Nanas" },
    ],
    colors: [
      { id: "brown", name: "Coklat Legit", hex: "#795548" },
    ],
    sizes: [
      { id: "250g", name: "250g Box", priceModifier: 0 },
      { id: "500g", name: "500g Box Family", priceModifier: 28000 },
    ],
    description: "Dodol tradisional khas Pemalang bertekstur legit, kenyal, dan manis legit alami berkat kandungan sari nanas madu asli yang tinggi. Tanpa pengawet kimia.",
    features: ["100% Gula Asli", "Kenyal Lembut", "Bungkus Higienis", "Oleh-Oleh Tradisional"],
    benefits: ["Penunda Lapar Ringan", "Camilan Manis Tradisional", "Energi Instan"],
    nutrition: [
      { label: "Sari Nanas", value: "40%" },
      { label: "Gula Kelapa", value: "30%" },
      { label: "Ketan Putih", value: "25%" },
      { label: "Serat Pangan", value: "2g" }
    ]
  },
  {
    id: 14,
    title: "Nanas Madu Kupas Frozen",
    oldPrice: 50000,
    newPrice: 39000,
    rating: 4.7,
    discount: 22,
    category: "Fresh Fruit",
    stock: "In Stock",
    sku: "NANAS-FRZ-014",
    weight: "500g",
    origin: "Pemalang, Indonesia",
    image: "/images/product-14.webp",
    images: [
      { id: 1, src: "/images/product-14-1.webp", alt: "Nanas Frozen" },
    ],
    colors: [
      { id: "frozen", name: "Ice Gold", hex: "#E0F7FA" },
    ],
    sizes: [
      { id: "500g", name: "500g Bag", priceModifier: 0 },
      { id: "1000g", name: "1000g Bag Big", priceModifier: 32000 },
    ],
    description: "Daging buah Nanas Madu kupas segar yang langsung dibekukan dengan teknologi IQF (Individual Quick Freezing) untuk menjaga kesegaran, rasa, dan nutrisi hingga 6 bulan.",
    features: ["Teknologi IQF", "Kupas Bersih", "Cocok Untuk Horeka", "Bertahan 6 Bulan"],
    benefits: ["Bahan Smoothie Praktis", "Bisa Disimpan Lama", "Segar Dingin Menyehatkan"],
    nutrition: [
      { label: "Kadar Vitamin C", value: "60%" },
      { label: "IQF Freshness", value: "98%" },
      { label: "Kalori", value: "52 kkal" },
      { label: "Serat Kasar", value: "3g" }
    ]
  },
  {
    id: 15,
    title: "Jus Nanas Madu & Aloe Vera",
    oldPrice: 38000,
    newPrice: 29000,
    rating: 4.8,
    discount: 24,
    category: "Juice",
    stock: "In Stock",
    sku: "NANAS-JUI-015",
    weight: "250ml",
    origin: "Pemalang, Indonesia",
    image: "/images/product-15.webp",
    images: [
      { id: 1, src: "/images/product-15-1.webp", alt: "Jus Aloe Vera" },
    ],
    colors: [
      { id: "aloe", name: "Aloe Green-Yellow", hex: "#C5E1A5" },
    ],
    sizes: [
      { id: "250ml", name: "250ml Botol", priceModifier: 0 },
      { id: "500ml", name: "500ml Botol Big", priceModifier: 20000 },
    ],
    description: "Perpaduan super menyegarkan antara perasan sari nanas madu Pemalang asli dengan sensasi kenyal lidah buaya (aloe vera) pilihan. Sangat baik untuk kesehatan lambung.",
    features: ["Potongan Lidah Buaya", "Rasa Tropis Segar", "Baik Untuk Lambung", "Tanpa Pemanis Kimia"],
    benefits: ["Meredakan Panas Dalam", "Menyejukkan Lambung & Gerd", "Detoksifikasi Alami"],
    nutrition: [
      { label: "Lidah Buaya", value: "25%" },
      { label: "Vitamin C", value: "70%" },
      { label: "Kalsium", value: "4%" },
      { label: "Asam Amino", value: "Kaya" }
    ]
  },
  {
    id: 16,
    title: "Cuka Nanas Madu Murni",
    oldPrice: 95000,
    newPrice: 78000,
    rating: 4.9,
    discount: 17,
    category: "Supplements",
    stock: "In Stock",
    sku: "NANAS-SUP-016",
    weight: "350ml",
    origin: "Pemalang, Indonesia",
    image: "/images/Cuka Nanas Madu Murni.png",
    images: [
      { id: 1, src: "/images/Cuka Nanas Madu Murni.png", alt: "Cuka Nanas Madu Murni" },
    ],
    colors: [
      { id: "vinegar", name: "Acid Amber", hex: "#FFE082" },
    ],
    sizes: [
      { id: "350ml", name: "350ml Botol Kaca", priceModifier: 0 },
      { id: "500ml", name: "500ml Botol Kaca", priceModifier: 30000 },
    ],
    description: "Cuka nanas madu hasil fermentasi alami secara bertahap selama berbulan-bulan. Masih mengandung 'Mother' cuka (bakteri baik) aktif yang berkhasiat tinggi bagi pencernaan.",
    features: ["Dengan 'Mother'", "Fermentasi Alami", "Bebas Alkohol", "Tanpa Pasteurisasi"],
    benefits: ["Menjaga Gula Darah Stabil", "Menurunkan Kolesterol Jahat", "Detoksifikasi Saluran Cerna"],
    nutrition: [
      { label: "Mother Aktif", value: "Kaya" },
      { label: "Asam Asetat Alami", value: "5%" },
      { label: "Bromelain", value: "80 GDU" },
      { label: "Kalium", value: "95mg" }
    ]
  },
  {
    id: 17,
    title: "Keripik Kaca Nanas Pedas",
    oldPrice: 30000,
    newPrice: 22000,
    rating: 4.5,
    discount: 26,
    category: "Snacks",
    stock: "In Stock",
    sku: "NANAS-CHP-017",
    weight: "100g",
    origin: "Pemalang, Indonesia",
    image: "/images/product-17.webp",
    images: [
      { id: 1, src: "/images/product-17-1.webp", alt: "Keripik Kaca Nanas" },
    ],
    colors: [
      { id: "redglass", name: "Glass Red", hex: "#EF5350" },
    ],
    sizes: [
      { id: "100g", name: "100g Pack", priceModifier: 0 },
      { id: "200g", name: "200g Pack Big", priceModifier: 18000 },
    ],
    description: "Sensasi unik keripik kaca tipis transparan berbahan dasar sari pati nanas madu dan tapioka, dipadukan bumbu pedas daun jeruk aromatik yang luar biasa nagih.",
    features: ["Sangat Tipis Renyah", "Bumbu Daun Jeruk", "Rasa Asam Pedas Manis", "Kemasan Zipper"],
    benefits: ["Teman Ngemil Seru", "Meredakan Kantuk", "Camilan Pedas Kekinian"],
    nutrition: [
      { label: "Karbohidrat", value: "22g" },
      { label: "Serat Tapioka", value: "2g" },
      { label: "Vitamin C", value: "10%" },
      { label: "Natrium Alami", value: "90mg" }
    ]
  },
  {
    id: 18,
    title: "Hampers Oleh-Oleh Pemalang",
    oldPrice: 180000,
    newPrice: 145000,
    rating: 4.8,
    discount: 19,
    category: "Hampers",
    stock: "In Stock",
    sku: "NANAS-HAM-018",
    weight: "2kg",
    origin: "Pemalang, Indonesia",
    image: "/images/product-18.webp",
    images: [
      { id: 1, src: "/images/product-18-1.webp", alt: "Hampers Oleh Oleh" },
    ],
    colors: [
      { id: "local", name: "Kardus Craft Tradisional", hex: "#8D6E63" },
    ],
    sizes: [
      { id: "craftbox", name: "Craftbox Edisi Pemalang", priceModifier: 0 },
    ],
    description: "Paket oleh-oleh khas Pemalang praktis dan terjangkau. Berisi 2 Pcs Nanas Madu utuh segar, 1 pack Dodol Nanas, dan 1 pack Keripik Nanas Renyah. Sempurna untuk keluarga jauh.",
    features: ["Box Edisi Khusus", "Ringkas & Kokoh", "Produk Paling Populer", "Kartu Khas Daerah"],
    benefits: ["Oleh-Oleh Wajib", "Praktis Dibawa Bepergian", "Mengenalkan Cita Rasa Daerah"],
    nutrition: [
      { label: "Nanas Segar", value: "2 Pcs" },
      { label: "Dodol Nanas", value: "250g" },
      { label: "Keripik Nanas", value: "100g" }
    ]
  },
  {
    id: 19,
    title: "Nanas Madu Bubuk Organik",
    oldPrice: 70000,
    newPrice: 55000,
    rating: 4.7,
    discount: 21,
    category: "Pantry",
    stock: "In Stock",
    sku: "NANAS-PAN-019",
    weight: "150g",
    origin: "Pemalang, Indonesia",
    image: "/images/product-19.webp",
    images: [
      { id: 1, src: "/images/product-19-1.webp", alt: "Nanas Bubuk" },
    ],
    colors: [
      { id: "powder", name: "Yellow Powder", hex: "#FFF9C4" },
    ],
    sizes: [
      { id: "150g", name: "150g Jar", priceModifier: 0 },
      { id: "300g", name: "300g Jar Big", priceModifier: 40000 },
    ],
    description: "Bubuk nanas madu 100% organik yang diproses dengan spray-drying dari jus nanas madu Pemalang konsentrat. Sangat praktis sebagai perasa dessert, kue, maupun minuman.",
    features: ["100% Soluble Air", "Tanpa Pewarna", "Gampang Diaduk", "Umur Simpan 1 Tahun"],
    benefits: ["Perasa Kue Premium", "Bahan Campuran Jamu", "Praktis Tanpa Blender"],
    nutrition: [
      { label: "Nanas Dehidrasi", value: "98%" },
      { label: "Vitamin C", value: "45%" },
      { label: "Gula Buah Alami", value: "8g" },
      { label: "Kadar Air", value: "2%" }
    ]
  },
  {
    id: 20,
    title: "Teh Herbal Kulit Nanas",
    oldPrice: 45000,
    newPrice: 34000,
    rating: 4.6,
    discount: 24,
    category: "Supplements",
    stock: "In Stock",
    sku: "NANAS-SUP-020",
    weight: "20 Kantung",
    origin: "Pemalang, Indonesia",
    image: "/images/product-20.webp",
    images: [
      { id: 1, src: "/images/product-20-1.webp", alt: "Teh Herbal" },
    ],
    colors: [
      { id: "tea", name: "Teh Gold", hex: "#FFE082" },
    ],
    sizes: [
      { id: "20tea", name: "20 Teabag Box", priceModifier: 0 },
    ],
    description: "Teh herbal kering berkhasiat dari pemanfaatan kulit nanas madu Pemalang organik pilihan yang dicuci bersih steril dan dicampur serai wangi. Kaya polifenol.",
    features: ["Kantung Teh Food Grade", "Aroma Serai Wangi", "Antioksidan Tinggi", "Zero Caffeine"],
    benefits: ["Membakar Lemak Perut", "Antioksidan Penangkal Radikal", "Meredakan Nyeri Otot"],
    nutrition: [
      { label: "Serat Kulit Nanas", value: "70%" },
      { label: "Serai Wangi", value: "30%" },
      { label: "Polifenol Aktif", value: "Tinggi" },
      { label: "Kafein", value: "0mg" }
    ]
  },
  {
    id: 21,
    title: "Smoothie Nanas & Mangga",
    oldPrice: 42000,
    newPrice: 33000,
    rating: 4.8,
    discount: 21,
    category: "Juice",
    stock: "In Stock",
    sku: "NANAS-JUI-021",
    weight: "350ml",
    origin: "Pemalang, Indonesia",
    image: "/images/product-21.webp",
    images: [
      { id: 1, src: "/images/product-21-1.webp", alt: "Smoothie Nanas" },
    ],
    colors: [
      { id: "mango", name: "Mango Gold", hex: "#FFA726" },
    ],
    sizes: [
      { id: "350ml", name: "350ml Cup", priceModifier: 0 },
      { id: "500ml", name: "500ml Cup Big", priceModifier: 15000 },
    ],
    description: "Kombinasi smoothie kental dari blenderan nanas madu Pemalang yang legit berpadu dengan manisnya Mangga Harum Manis pilihan. Menghasilkan tekstur super creamy dan kaya serat pangan.",
    features: ["Kental Alami", "Serat Pangan Tinggi", "Tanpa Sirup Esen", "Mengenyangkan"],
    benefits: ["Pengganti Sarapan Sehat", "Melancarkan Pencernaan", "Vitamin C Harian Terpenuhi"],
    nutrition: [
      { label: "Nanas Madu", value: "50%" },
      { label: "Mangga Arumanis", value: "50%" },
      { label: "Vitamin C", value: "95%" },
      { label: "Serat Serat", value: "4g" }
    ]
  },
  {
    id: 22,
    title: "Asinan Nanas Madu Tropis",
    oldPrice: 35000,
    newPrice: 28000,
    rating: 4.7,
    discount: 20,
    category: "Snacks",
    stock: "In Stock",
    sku: "NANAS-SNK-022",
    weight: "400g",
    origin: "Pemalang, Indonesia",
    image: "/images/product-22.webp",
    images: [
      { id: 1, src: "/images/product-22-1.webp", alt: "Asinan Nanas" },
    ],
    colors: [
      { id: "spicysweety", name: "Kuah Cabai Merah", hex: "#EF5350" },
    ],
    sizes: [
      { id: "400g", name: "400g Cup", priceModifier: 0 },
    ],
    description: "Camilan asinan khas dengan irisan tipis nanas madu Pemalang segar yang direndam dalam kuah asinan pedas manis asam segar racikan cabai asli tanpa cuka kimia.",
    features: ["Cabai Asli Ulek", "Asam Jeruk Kunci", "Segar Dingin", "Kemasan Cup Rapat"],
    benefits: ["Pereda Kantuk & Lesu", "Sangat Menyegarkan", "Camilan Tropis Alami"],
    nutrition: [
      { label: "Air Asinan", value: "50%" },
      { label: "Nanas Madu", value: "50%" },
      { label: "Vitamin C", value: "55%" },
      { label: "Natrium Alami", value: "65mg" }
    ]
  },
  {
    id: 23,
    title: "Saus BBQ Nanas Madu",
    oldPrice: 48000,
    newPrice: 39000,
    rating: 4.8,
    discount: 18,
    category: "Pantry",
    stock: "In Stock",
    sku: "NANAS-PAN-023",
    weight: "250g",
    origin: "Pemalang, Indonesia",
    image: "/images/product-23.webp",
    images: [
      { id: 1, src: "/images/product-23-1.webp", alt: "Saus BBQ" },
    ],
    colors: [
      { id: "bbq", name: "Dark Ruby BBQ", hex: "#5D4037" },
    ],
    sizes: [
      { id: "250g", name: "250g Botol Plastik", priceModifier: 0 },
    ],
    description: "Saus barbekyu premium dengan sentuhan manis karamel dan kesegaran rasa buah nanas madu Pemalang asli. Sempurna untuk marinasi daging sapi, ayam grill, maupun saus cocolan.",
    features: ["Aroma Smoked Kuat", "Manis Karamel Nanas", "Marinasi Empuk Alami", "Mudah Dipakai"],
    benefits: ["Mengempukkan Daging Sapi", "Menambah Cita Rasa Grill", "Praktis Untuk BBQ-an"],
    nutrition: [
      { label: "Konsentrat Nanas", value: "35%" },
      { label: "Rempah Pilihan", value: "15%" },
      { label: "Kalium", value: "70mg" },
      { label: "Karbohidrat", value: "14g" }
    ]
  },
  {
    id: 24,
    title: "Paket Hemat Nanas 3 Pcs",
    oldPrice: 75000,
    newPrice: 49000,
    rating: 4.9,
    discount: 34,
    category: "Fresh Fruit",
    stock: "In Stock",
    sku: "NANAS-WHO-024",
    weight: "3.2kg",
    origin: "Pemalang, Indonesia",
    image: "/images/product-24.webp",
    images: [
      { id: 1, src: "/images/product-24-1.webp", alt: "Paket Hemat" },
    ],
    colors: [
      { id: "hemat", name: "3 Pcs Segar", hex: "#81C784" },
    ],
    sizes: [
      { id: "3pcs", name: "Paket Hemat 3 Pcs", priceModifier: 0 },
    ],
    description: "Paket belanja borongan super hemat berisi 3 Pcs buah Nanas Madu Pemalang utuh segar yang manis legit matang kebun. Pilihan ekonomis untuk pesta rujak keluarga.",
    features: ["Sangat Ekonomis", "Petik Segar Pilihan", "Kemanisan Dijamin", "Cocok Untuk Rujakan"],
    benefits: ["Sangat Menghemat Uang", "Stok Buah Mingguan", "Menu Rujak Ramai-ramai"],
    nutrition: [
      { label: "Jumlah Buah", value: "3 Pcs" },
      { label: "Brix Kemanisan", value: "15 Brix" },
      { label: "Berat Rata-rata", value: "1.1kg / Pc" },
      { label: "Serat Alami", value: "Kaya" }
    ]
  },
  {
    id: 25,
    title: "Kapsul Vitamin C Nanas",
    oldPrice: 120000,
    newPrice: 95000,
    rating: 4.8,
    discount: 20,
    category: "Supplements",
    stock: "In Stock",
    sku: "NANAS-SUP-025",
    weight: "50 Kapsul",
    origin: "Jakarta, Indonesia",
    image: "/images/product-25.webp",
    images: [
      { id: 1, src: "/images/product-25-1.webp", alt: "Kapsul Vitamin C" },
    ],
    colors: [
      { id: "vitc", name: "Kapsul Orange-Kuning", hex: "#FFB74D" },
    ],
    sizes: [
      { id: "50caps", name: "50 Kapsul Botol", priceModifier: 0 },
    ],
    description: "Suplemen antioksidan kaya Vitamin C yang disintesis bersama dengan ekstrak jus nanas madu Pemalang asli kering. Sangat baik dalam menjaga daya tahan tubuh sehari-hari.",
    features: ["Vitamin C Alami", "Antioksidan Booster", "Penyerapan Maksimal", "Mudah Ditelan"],
    benefits: ["Menjaga Kekebalan Tubuh", "Melindungi Dari Radikal Bebas", "Menjaga Kecerahan Kulit"],
    nutrition: [
      { label: "Vitamin C Asli", value: "500mg" },
      { label: "Ekstrak Nanas", value: "100mg" },
      { label: "Flavonoid", value: "15mg" },
      { label: "Kalori Kapsul", value: "0 kkal" }
    ]
  },
  {
    id: 26,
    title: "Hampers Honea Mini Gift",
    oldPrice: 110000,
    newPrice: 89000,
    rating: 4.7,
    discount: 19,
    category: "Hampers",
    stock: "In Stock",
    sku: "NANAS-HAM-026",
    weight: "1.2kg",
    origin: "Pemalang, Indonesia",
    image: "/images/product-26.webp",
    images: [
      { id: 1, src: "/images/product-26-1.webp", alt: "Hampers Mini" },
    ],
    colors: [
      { id: "minigift", name: "Craft Mini Box", hex: "#A1887F" },
    ],
    sizes: [
      { id: "standard", name: "Standard Mini Box", priceModifier: 0 },
    ],
    description: "Paket kado mini cantik yang manis berisikan 1 jar Selai Nanas Madu Organik (150g) dan 1 pack Keripik Nanas Renyah (100g). Kado sehat dan hangat untuk sahabat.",
    features: ["Craftbox Pita Mini", "Desain Klasik Elegan", "Praktis & Terjangkau", "Termasuk Tag Ucapan"],
    benefits: ["Kado Ulang Tahun Sahabat", "Kado Terimakasih Kasih", "Bingkisan Kecil Sehat"],
    nutrition: [
      { label: "Selai Nanas", value: "150g" },
      { label: "Keripik Nanas", value: "100g" },
      { label: "Gift Box", value: "1 Pcs" }
    ]
  },
  {
    id: 27,
    title: "Puding Jelly Nanas Madu",
    oldPrice: 25000,
    newPrice: 19000,
    rating: 4.6,
    discount: 24,
    category: "Snacks",
    stock: "In Stock",
    sku: "NANAS-SNK-027",
    weight: "200g",
    origin: "Pemalang, Indonesia",
    image: "/images/product-27.webp",
    images: [
      { id: 1, src: "/images/product-27-1.webp", alt: "Puding Jelly Nanas" },
    ],
    colors: [
      { id: "jelly", name: "Jelly Yellow Gold", hex: "#FFF59D" },
    ],
    sizes: [
      { id: "200g", name: "200g Cup", priceModifier: 0 },
      { id: "4x200g", name: "4 x 200g Family Pack", priceModifier: 50000 },
    ],
    description: "Jelly puding rasa nanas madu Pemalang yang sangat lembut dan kenyal, dilengkapi dengan potongan buah nanas asli (nata de nanas) di dalamnya. Camilan sejuk siang hari.",
    features: ["Kenyal Lembut Jelly", "Nata De Nanas Cincang", "Sangat Enak Dingin", "Tanpa Gelatin Hewani"],
    benefits: ["Serat Kelancaran BAB", "Camilan Penurun Panas", "Dessert Manis Sehat"],
    nutrition: [
      { label: "Sari Buah Nanas", value: "35%" },
      { label: "Serat Rumput Laut", value: "15%" },
      { label: "Vitamin C", value: "30%" },
      { label: "Kalori", value: "45 kkal" }
    ]
  },
  {
    id: 28,
    title: "Nanas Madu Kupas Spiral",
    oldPrice: 32000,
    newPrice: 24000,
    rating: 4.8,
    discount: 25,
    category: "Fresh Fruit",
    stock: "In Stock",
    sku: "NANAS-FRT-028",
    weight: "500g",
    origin: "Pemalang, Indonesia",
    image: "/images/product-28.webp",
    images: [
      { id: 1, src: "/images/product-28-1.webp", alt: "Nanas Spiral" },
    ],
    colors: [
      { id: "spiral", name: "Spiral Cut Gold", hex: "#FFE082" },
    ],
    sizes: [
      { id: "500g", name: "500g Pack Utuh Kupas", priceModifier: 0 },
    ],
    description: "Buah nanas madu Pemalang kupas utuh bermotif spiral cantik nan higienis. Mata nanas terbuang bersih sempurna, menyisakan daging nanas tebal berair siap disantap dingin.",
    features: ["Kupas Spiral Cantik", "Mata Nanas Bersih Total", "Siap Sajian Pesta", "Kemasan Box Higienis"],
    benefits: ["Praktis Langsung Iris", "Sangat Estetik Disajikan", "Tanpa Repot Mengupas"],
    nutrition: [
      { label: "Daging Nanas", value: "98%" },
      { label: "Kadar Gula Alami", value: "15 Brix" },
      { label: "Vitamin C", value: "75%" },
      { label: "Serat Larut", value: "3.5g" }
    ]
  },
  {
    id: 29,
    title: "Jus Nanas Mint Detoks",
    oldPrice: 40000,
    newPrice: 31000,
    rating: 4.9,
    discount: 22,
    category: "Juice",
    stock: "In Stock",
    sku: "NANAS-JUI-029",
    weight: "250ml",
    origin: "Pemalang, Indonesia",
    image: "/images/product-29.webp",
    images: [
      { id: 1, src: "/images/product-29-1.webp", alt: "Jus Nanas Mint" },
    ],
    colors: [
      { id: "minty", name: "Minty Yellow Green", hex: "#D4E157" },
    ],
    sizes: [
      { id: "250ml", name: "250ml Botol", priceModifier: 0 },
      { id: "500ml", name: "500ml Botol Big", priceModifier: 19000 },
    ],
    description: "Jus cold-pressed super bersih perpaduan nanas madu Pemalang manis legit dengan daun mint segar pilihan. Menghasilkan rasa dingin segar yang mendetoks racun dalam tubuh.",
    features: ["Kombinasi Daun Mint", "Cold-pressed Sehat", "Tanpa Gula & Pengawet", "Detoksifikasi Alami"],
    benefits: ["Mendegramasi Racun Tubuh", "Nafas Segar Minty", "Membuat Pikiran Rileks"],
    nutrition: [
      { label: "Nanas Madu", value: "90%" },
      { label: "Sari Daun Mint", value: "10%" },
      { label: "Menthol Alami", value: "Tinggi" },
      { label: "Vitamin C", value: "85%" }
    ]
  },
  {
    id: 30,
    title: "Konsentrat Nanas Madu",
    oldPrice: 190000,
    newPrice: 155000,
    rating: 4.8,
    discount: 18,
    category: "Pantry",
    stock: "In Stock",
    sku: "NANAS-IND-030",
    weight: "2.5kg",
    origin: "Pemalang, Indonesia",
    image: "/images/product-30.webp",
    images: [
      { id: 1, src: "/images/product-30-1.webp", alt: "Konsentrat Nanas" },
    ],
    colors: [
      { id: "concentrate", name: "Deep Gold Concentrate", hex: "#F57C00" },
    ],
    sizes: [
      { id: "2.5kg", name: "2.5kg Jerrycan", priceModifier: 0 },
      { id: "5kg", name: "5.0kg Jerrycan Big", priceModifier: 140000 },
    ],
    description: "Konsentrat sari nanas madu Pemalang murni berdensitas tinggi untuk kebutuhan komersial UMKM kuliner, cafe, katering, maupun produsen kue skala menengah besar.",
    features: ["Densitas Tinggi 65 Brix", "Sari Nanas Murni Murni", "Tanpa Tambahan Air", "Jerrycan Segel Tebal"],
    benefits: ["Bahan Baku Selai Masal", "Sangat Hemat Katering", "Konsistensi Rasa Terjamin"],
    nutrition: [
      { label: "Densitas Brix", value: "65 Brix" },
      { label: "Sari Nanas Murni", value: "100%" },
      { label: "Vitamin C", value: "50%" },
      { label: "Kalium Pekat", value: "240mg" }
    ]
  }
];
