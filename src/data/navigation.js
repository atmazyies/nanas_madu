export const navLinks = [
  {
    id: "home",
    label: "Beranda",
    href: "/",
  },
  {
    id: "about",
    label: "Tentang Kami",
    href: "/about",
    subLinks: [
      { label: "Kisah Honea", href: "/about#story" },
      { label: "Sejarah Nanas Madu", href: "/sejarah-nanas" },
      { label: "Tim Kami", href: "/about#team" },
    ],
  },
  {
    id: "uvp",
    label: "Keunggulan",
    href: "/uvp",
    subLinks: [
      { label: "Kenapa Honea?", href: "/uvp" },
      { label: "Manfaat Kesehatan", href: "/uvp#manfaat-kesehatan" },
      { label: "Sertifikasi & Kualitas", href: "/uvp#sertifikasi" },
    ],
  },
  {
    id: "shop",
    label: "Katalog Produk",
    href: "/shop",
    subLinks: [
      { label: "Semua Produk", href: "/shop" },
      { label: "Buah Segar (Fresh Fruit)", href: "/shop", category: "Fresh Fruit" },
      { label: "Jus Murni (Juice)", href: "/shop", category: "Juice" },
      { label: "Camilan Nanas (Snacks)", href: "/shop", category: "Snacks" },
      { label: "Olahan Pantry (Pantry)", href: "/shop", category: "Pantry" },
      { label: "Suplemen Kesehatan (Supplements)", href: "/shop", category: "Supplements" },
      { label: "Paket Hampers (Hampers)", href: "/shop", category: "Hampers" },
    ],
  },
  {
    id: "kemitraan",
    label: "Kemitraan",
    href: "/kemitraan",
    subLinks: [
      { label: "Peluang Kolaborasi", href: "/kemitraan" },
      { label: "Hubungi Tim B2B", href: "/kemitraan" },
    ],
  },
  {
    id: "bantuan",
    label: "Bantuan",
    href: "/faq",
    subLinks: [
      { label: "Tanya Jawab / FAQ", href: "/faq" },
      { label: "Hubungi Kami", href: "/kontak" },
    ],
  },
];

export const footerLinks = {
  navigasi: [
    { label: "Beranda", href: "/" },
    { label: "Tentang Kami", href: "/about" },
    { label: "Sejarah Nanas Madu", href: "/sejarah-nanas" },
    { label: "Keunggulan", href: "/uvp" },
    { label: "Katalog Produk", href: "/shop" },
    { label: "Kemitraan", href: "/kemitraan" },
    { label: "Tanya Jawab / FAQ", href: "/faq" },
    { label: "Hubungi Kami", href: "/kontak" },
  ],
  produk: [
    { label: "Buah Segar", href: "/shop", category: "Fresh Fruit" },
    { label: "Jus Murni", href: "/shop", category: "Juice" },
    { label: "Camilan Nanas", href: "/shop", category: "Snacks" },
    { label: "Olahan Pantry", href: "/shop", category: "Pantry" },
    { label: "Suplemen Kesehatan", href: "/shop", category: "Supplements" },
    { label: "Paket Hampers", href: "/shop", category: "Hampers" },
  ],
  layanan: [
    { label: "Tanya Jawab / FAQ", href: "/faq" },
    { label: "Hubungi Kami", href: "/kontak" },
    { label: "Kemitraan & Franchise", href: "/kemitraan" },
    { label: "Supply B2B", href: "/kemitraan" },
  ],
};

export const socialLinks = [
  { id: "instagram", label: "Instagram", href: "https://instagram.com/honea" },
  { id: "tiktok", label: "TikTok", href: "https://tiktok.com/@honea" },
  { id: "facebook", label: "Facebook", href: "https://facebook.com/honea" },
  { id: "youtube", label: "YouTube", href: "https://youtube.com/@honea" },
];
