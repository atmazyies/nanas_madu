import PageBanner from "../components/PageBanner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TopProductsSection from "../sections/TopProductsSection";

export default function ShopPage() {
  return (
    <>
      <Navbar />
      <PageBanner
        title="Shop"
        subtitle="Belanja produk Honea premium dengan mudah — nanas segar, olahan, dan paket hampers siap dikirim ke seluruh Indonesia."
        breadcrumbs={[{ label: "Shop" }]}
      />

      <main className="bg-surface">
        <TopProductsSection />
      </main>

      <Footer />
    </>
  );
}
