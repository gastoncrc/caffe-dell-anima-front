import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import FeatureProducts from "./components/feature_products/FeatureProducts";
import Products from "./pages/products/Products";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import Cart from "./pages/cart/Cart";
import Error from "./pages/error/Error";
import { MenuProvider } from "./menuContext";
import { Routes, Route } from "react-router-dom";
import RegisterUser from "./pages/register/RegisterUser";

function App() {
  return (
    <MenuProvider>
      <div className="app-container">
        <Header />

        <Routes>
          <Route path="/" element={<FeatureProducts />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </MenuProvider>
  );
}

export default App;
