import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrototypeProvider } from "./context/PrototypeContext";
import PrototypeUI from "./components/prototype/PrototypeUI";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import PageLoader from "./components/PageLoader";

// Lazy load non-home pages for optimized chunking and faster initial load
const AboutPage = lazy(() => import("./pages/AboutPage"));
const SejarahNanasPage = lazy(() => import("./pages/SejarahNanasPage"));
const ProdukPage = lazy(() => import("./pages/ProdukPage"));
const UVPPage = lazy(() => import("./pages/UVPPage"));
const ShopPage = lazy(() => import("./pages/ShopPage"));
const KontakPage = lazy(() => import("./pages/KontakPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const KemitraanPage = lazy(() => import("./pages/KemitraanPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const ForgotPasswordPage = lazy(() => import("./pages/ForgotPasswordPage"));
const NotificationsPage = lazy(() => import("./pages/NotificationsPage"));

function App() {
  return (
    <BrowserRouter>
      <PrototypeProvider>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/sejarah-nanas" element={<SejarahNanasPage />} />
            <Route path="/produk" element={<ProdukPage />} />
            <Route path="/uvp" element={<UVPPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/kontak" element={<KontakPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/kemitraan" element={<KemitraanPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
          </Routes>
        </Suspense>
        <FloatingWhatsApp />
        <PrototypeUI />
      </PrototypeProvider>
    </BrowserRouter>
  );
}

export default App;

