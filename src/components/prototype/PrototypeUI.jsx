import ToastContainer from "./ToastContainer";
import SearchModal from "./SearchModal";
import CartDrawer from "./CartDrawer";
import WishlistDrawer from "./WishlistDrawer";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import ForgotPasswordPage from "./ForgotPasswordPage";
import CheckoutModal from "./CheckoutModal";
import ProductDetailModal from "./ProductDetailModal";
import ChatDrawer from "./ChatDrawer";

export default function PrototypeUI() {
  return (
    <>
      <ToastContainer />
      <SearchModal />
      <CartDrawer />
      <WishlistDrawer />
      <LoginPage />
      <RegisterPage />
      <ForgotPasswordPage />
      <CheckoutModal />
      <ProductDetailModal />
      <ChatDrawer />
    </>
  );
}
