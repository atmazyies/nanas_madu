import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrototypeProvider } from "./context/PrototypeContext";
import PrototypeUI from "./components/prototype/PrototypeUI";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProdukPage from "./pages/ProdukPage";
import UVPPage from "./pages/UVPPage";
import ShopPage from "./pages/ShopPage";
import KontakPage from "./pages/KontakPage";
import FAQPage from "./pages/FAQPage";
import ManfaatKesehatanPage from "./pages/ManfaatKesehatanPage";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

function App() {
  return (
    <BrowserRouter>
      <PrototypeProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/produk" element={<ProdukPage />} />
          <Route path="/uvp" element={<UVPPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/kontak" element={<KontakPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/manfaat-kesehatan" element={<ManfaatKesehatanPage />} />
        </Routes>
        <FloatingWhatsApp />
        <PrototypeUI />
      </PrototypeProvider>
    </BrowserRouter>
  );
}

export default App;
