import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiStar, HiLightBulb, HiFlag, HiUserGroup } from "react-icons/hi";
import { FaLeaf, FaStore, FaShoppingBasket, FaSearch, FaMapMarkerAlt, FaExpandAlt, FaUser } from "react-icons/fa";
import PageBanner from "../components/PageBanner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LazyImage from "../components/LazyImage";
import { aboutData } from "../data/about";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageBanner
        title="Tentang Honea"
        subtitle="Dari kebun Pemalang hingga ke tangan Anda — kenali kisah, visi, dan tim di balik kesegaran premium Honea."
        breadcrumbs={[{ label: "About Us" }]}
      />

      <main className="bg-surface">
        {/* Our Story */}
        <section id="story" className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
              >
                <span className="inline-block rounded-full bg-gradient-to-r from-brand-pale to-brand-soft px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-dark mb-6 border border-brand-light/10 shadow-sm">
                  Kisah Kami
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Dari Kebun Pemalang, <span className="text-gradient-brand">untuk Indonesia</span>
                </h2>
                <div className="mt-8 space-y-5">
                  {aboutData.story.paragraphs.map((p, i) => (
                    <p key={i} className="text-base leading-relaxed text-gray-600">{p}</p>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1595348020949-87cdfbb44174?w=800&h=600&fit=crop"
                    alt="Kebun Nanas Madu Pemalang"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-6 shadow-[var(--shadow-card)]">
                  <p className="text-3xl font-extrabold text-brand">7+</p>
                  <p className="text-sm font-medium text-gray-600">Tahun Pengalaman</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Visi & Misi */}
        <section id="visi-misi" className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mx-auto max-w-2xl text-center mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Visi & <span className="text-gradient-brand font-extrabold">Misi</span>
              </h2>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Visi */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="glass rounded-3xl p-10 shadow-[var(--shadow-card)]"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-golden-light to-golden text-white">
                  <HiLightBulb className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Visi</h3>
                <p className="text-base leading-relaxed text-gray-600">
                  {aboutData.vpisMisi.visi}
                </p>
              </motion.div>

              {/* Misi */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="glass rounded-3xl p-10 shadow-[var(--shadow-card)]"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-dark text-white">
                  <HiFlag className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Misi</h3>
                <ul className="space-y-3">
                  {aboutData.vpisMisi.misi.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base text-gray-600">
                      <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand text-xs font-bold">
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tim Kami */}
        <div id="petani" className="scroll-mt-20" />
        <section id="team" className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mx-auto max-w-2xl text-center mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Tim <span className="text-gradient-brand font-extrabold">Kami</span>
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Orang-orang berdedikasi di balik setiap buah nanas yang sampai ke tangan Anda
              </p>
            </motion.div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {aboutData.team.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group rounded-3xl bg-white p-8 text-center shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-hover)]"
                >
                  <div className="mx-auto mb-6 h-24 w-24 overflow-hidden rounded-full ring-4 ring-brand-soft">
                    <LazyImage
                      src={member.avatar}
                      alt={member.name}
                      className="h-full w-full object-cover"
                      wrapperClassName="h-24 w-24 rounded-full"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-brand">{member.role}</p>
                  <p className="mt-3 text-sm text-gray-500 leading-relaxed">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Jaringan Mitra & Lokasi Section */}
        <PartnersDirectory />

        {/* Timeline / Milestones */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mx-auto max-w-2xl text-center mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Perjalanan <span className="text-gradient-gold font-extrabold">Kami</span>
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Milestone penting dalam pertumbuhan Honea
              </p>
            </motion.div>

            <div className="relative mx-auto max-w-3xl">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-brand-pale sm:left-1/2 sm:-translate-x-px" />

              {aboutData.milestones.map((ms, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className={`relative mb-10 flex items-start gap-6 sm:gap-0 ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 flex h-12 w-12 shrink-0 items-center justify-center rounded-full gradient-brand text-white text-xs font-extrabold z-10 ring-4 ring-white shadow-lg">
                    {ms.year.slice(-2)}
                  </div>

                  {/* Content */}
                  <div className={`ml-20 sm:ml-0 sm:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? "sm:pr-8 sm:text-right" : "sm:pl-8 sm:text-left"
                  }`}>
                    <div className="glass rounded-2xl p-6 shadow-sm">
                      <span className="text-xs font-bold text-brand uppercase tracking-wider">{ms.year}</span>
                      <h3 className="mt-1 text-lg font-bold text-gray-900">{ms.title}</h3>
                      <p className="mt-2 text-sm text-gray-600 leading-relaxed">{ms.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

// Programmatic Generator for 53 Partners across Indonesia
const GENERATED_PARTNERS = [];
const types = [
  { id: "kebun", label: "Kebun Kemitraan", hash: "#mitra-kebun", icon: FaLeaf, prefix: "Kebun Mitra" },
  { id: "outlet", label: "Outlet Resmi", hash: "#mitra-outlet", icon: FaStore, prefix: "Honea Outlet" },
  { id: "ritel", label: "Swalayan & Ritel", hash: "#mitra-ritel", icon: FaShoppingBasket, prefix: "Ritel Mitra" }
];

const provinces = [
  "Jawa Tengah", "Jawa Barat", "Jawa Timur", "DKI Jakarta", "Banten", "DI Yogyakarta", "Bali", "Sumatera Utara", "Sumatera Selatan", "Sulawesi Selatan"
];

const cities = {
  "Jawa Tengah": ["Pemalang", "Semarang", "Solo", "Tegal", "Pekalongan"],
  "Jawa Barat": ["Bandung", "Bogor", "Bekasi", "Depok", "Cirebon"],
  "Jawa Timur": ["Surabaya", "Malang", "Sidoarjo", "Jember", "Banyuwangi"],
  "DKI Jakarta": ["Jakarta Selatan", "Jakarta Pusat", "Jakarta Barat", "Jakarta Utara", "Jakarta Timur"],
  "Banten": ["Tangerang", "Tangerang Selatan", "Serang", "Cilegon"],
  "DI Yogyakarta": ["Sleman", "Bantul", "Yogyakarta City"],
  "Bali": ["Denpasar", "Badung", "Gianyar"],
  "Sumatera Utara": ["Medan", "Binjai", "Deli Serdang"],
  "Sumatera Selatan": ["Palembang", "Prabumulih"],
  "Sulawesi Selatan": ["Makassar", "Maros", "Gowa"]
};

// Generate exactly 53 unique partners distributed across types
for (let i = 1; i <= 53; i++) {
  let typeId = "kebun";
  if (i > 18 && i <= 36) {
    typeId = "outlet";
  } else if (i > 36) {
    typeId = "ritel";
  }

  const prov = provinces[i % provinces.length];
  const cityList = cities[prov];
  const city = cityList[i % cityList.length];
  
  let name = "";
  let address = "";
  
  if (typeId === "kebun") {
    const kebunNames = ["Subur Makmur", "Gunung Slamet", "Madu Sari", "Tani Sejahtera", "Mulia Jaya", "Alam Asri", "Hijau Lestari", "Raya Agung", "Berkah Tani", "Sumber Rasa", "Gading Mas", "Bumi Indah"];
    name = `Kebun Mitra ${kebunNames[i % kebunNames.length]} ${Math.ceil(i / 3)}`;
    address = `Jl. Raya Kaki Gunung No. ${i * 4}, Kec. Randudongkal, ${city}, ${prov}`;
  } else if (typeId === "outlet") {
    const outletNames = ["Premium Hub", "Fresh Corner", "Madu Center", "Sari Alam", "Honea Express", "Signature Store", "Eco Green"];
    name = `Honea Outlet ${outletNames[i % outletNames.length]} - ${city}`;
    address = `Ruko Gold Center Blok B-${i % 9}, Jl. Sudirman No. ${i * 3}, ${city}, ${prov}`;
  } else {
    const ritelNames = ["Superindo Fresh", "Hypermart", "Indomaret Fresh", "Alfamidi Super", "Farmers Market", "Hero Supermarket"];
    name = `${ritelNames[i % ritelNames.length]} ${city}`;
    address = `MALL Plaza ${city}, Lantai Dasar LG-${i % 5}, ${city}, ${prov}`;
  }

  GENERATED_PARTNERS.push({
    id: i,
    name,
    type: typeId,
    province: prov,
    city,
    address,
    phone: `+62 812-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(1000 + Math.random() * 9000)}`,
    status: typeId === "kebun" ? "Organik Tersertifikasi" : "Ready Stock",
    area: typeId === "kebun" ? `${(2.5 + (i % 5) * 0.8).toFixed(1)} Hektar` : null
  });
}

function PartnersDirectory() {
  const [activeTab, setActiveTab] = useState("kebun");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("Semua");
  const [visibleCount, setVisibleCount] = useState(6);

  // Sync hash with active tab and scroll to section
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#mitra-kebun") {
        setActiveTab("kebun");
        scrollToSection();
      } else if (hash === "#mitra-outlet") {
        setActiveTab("outlet");
        scrollToSection();
      } else if (hash === "#mitra-ritel") {
        setActiveTab("ritel");
        scrollToSection();
      }
    };

    const scrollToSection = () => {
      const element = document.getElementById("partners-directory");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    // Run on initial mount
    handleHashChange();

    // Listen to hash change
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Filter partners based on state
  const filteredPartners = GENERATED_PARTNERS.filter((partner) => {
    const matchesTab = partner.type === activeTab;
    const matchesSearch = partner.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          partner.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          partner.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesProvince = selectedProvince === "Semua" || partner.province === selectedProvince;
    return matchesTab && matchesSearch && matchesProvince;
  });

  // Reset pagination when tab/search/filter changes
  useEffect(() => {
    setVisibleCount(6);
  }, [activeTab, searchQuery, selectedProvince]);

  const handleTabChange = (typeId) => {
    setActiveTab(typeId);
    window.history.pushState(null, "", `#mitra-${typeId}`);
  };

  return (
    <section id="partners-directory" className="py-20 bg-gradient-to-b from-surface to-white border-y border-gray-100 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block rounded-full bg-gradient-to-r from-amber-500/10 to-amber-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-800 mb-4">
            Jaringan Nasional
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Jaringan <span className="text-gradient-brand">Mitra & Lokasi</span>
          </h2>
          <p className="mt-4 text-base text-gray-600">
            Honea bekerja sama erat dengan lebih dari 50+ kebun kemitraan petani lokal, outlet resmi, dan mitra ritel terkemuka di seluruh penjuru Indonesia.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {types.map((type) => {
            const Icon = type.icon;
            const isActive = activeTab === type.id;
            return (
              <button
                key={type.id}
                onClick={() => handleTabChange(type.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold transition-all ${
                  isActive
                    ? "bg-gradient-to-br from-brand to-brand-dark text-white shadow-md shadow-brand/20 scale-105"
                    : "bg-white text-gray-600 hover:text-brand border border-gray-200 hover:border-brand-soft"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-brand"}`} />
                {type.label}
              </button>
            );
          })}
        </div>

        {/* Search & Filter Bar */}
        <div className="glass rounded-3xl p-6 shadow-sm border border-gray-100 mb-10 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Cari berdasarkan nama mitra, kota, atau daerah..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50/50 border border-gray-200 rounded-2xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/35 focus:border-brand transition-all"
            />
          </div>
          <div className="w-full md:w-64">
            <select
              value={selectedProvince}
              onChange={(e) => setSelectedProvince(e.target.value)}
              className="w-full bg-gray-50/50 border border-gray-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/35 focus:border-brand transition-all appearance-none cursor-pointer"
              style={{ backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.25em' }}
            >
              <option value="Semua">Semua Provinsi</option>
              {provinces.map((prov) => (
                <option key={prov} value={prov}>{prov}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-6 flex justify-between items-center text-xs sm:text-sm text-gray-500 px-2">
          <p>Menampilkan <span className="font-bold text-gray-800">{Math.min(visibleCount, filteredPartners.length)}</span> dari <span className="font-bold text-gray-800">{filteredPartners.length}</span> lokasi mitra</p>
          {selectedProvince !== "Semua" || searchQuery !== "" ? (
            <button 
              onClick={() => { setSearchQuery(""); setSelectedProvince("Semua"); }}
              className="text-brand font-bold hover:underline"
            >
              Reset Filter
            </button>
          ) : null}
        </div>

        {/* Partners Grid */}
        {filteredPartners.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPartners.slice(0, visibleCount).map((partner, idx) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 3) * 0.05 }}
                className="group bg-white rounded-3xl p-6 border border-gray-100 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Card Badge and Icon */}
                  <div className="flex justify-between items-start mb-4">
                    <span className="inline-block rounded-full bg-emerald-500/5 border border-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-800 shadow-sm">
                      {partner.status}
                    </span>
                    <span className="text-gray-400 text-xs font-semibold">ID: HNE-{1000 + partner.id}</span>
                  </div>
                  
                  {/* Name and Location */}
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand transition-colors">
                    {partner.name}
                  </h4>
                  
                  <div className="flex items-start gap-2.5 text-xs text-gray-500 leading-relaxed mb-4">
                    <FaMapMarkerAlt className="w-3.5 h-3.5 text-brand shrink-0 mt-0.5" />
                    <span>{partner.address}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-50 flex flex-col gap-2.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Kota:</span>
                    <span className="font-semibold text-gray-700">{partner.city}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Provinsi:</span>
                    <span className="font-semibold text-gray-700">{partner.province}</span>
                  </div>
                  {partner.area && (
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Luas Lahan:</span>
                      <span className="font-semibold text-brand">{partner.area}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Kontak:</span>
                    <span className="font-semibold text-gray-700">{partner.phone}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="glass rounded-3xl p-12 text-center border border-dashed border-gray-300">
            <p className="text-lg font-bold text-gray-700 mb-2">Lokasi Tidak Ditemukan</p>
            <p className="text-sm text-gray-500 mb-4">Tidak ada mitra Honea yang cocok dengan pencarian "{searchQuery}" atau di provinsi tersebut.</p>
            <button 
              onClick={() => { setSearchQuery(""); setSelectedProvince("Semua"); }}
              className="px-5 py-2.5 bg-brand text-white rounded-full text-xs font-bold hover:bg-brand-dark transition-all"
            >
              Reset Semua Filter
            </button>
          </div>
        )}

        {/* Load More Button */}
        {filteredPartners.length > visibleCount && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold bg-gradient-to-r from-golden-light to-golden text-white hover:from-golden hover:to-golden-dark shadow-md transition-all scale-100 hover:scale-105"
            >
              Tampilkan Lebih Banyak
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
