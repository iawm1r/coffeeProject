import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import ScrollToHash from "./components/ScrollToHash";
import Menu from "./components/Menu";
import Cart from "./cart/Cart";
import WhyUs from "./components/WhyUs";
import CoffeeBanner from "./components/CoffeeBanner";
import Comment from "./components/Comment";
import Auth from "./components/Auth";
import NewsLetter from "./components/NewsLetter";
import { CartProvider } from "./context/CartContext";
import Menu2 from "./components/menu2"
import Fotter from "./components/Fotter";
function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <ScrollToHash />

          <Routes>
            {/* صفحه اصلی */}
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Hero />
                  <Banner />
                  <Menu />
                  <WhyUs />
                  <CoffeeBanner />
                  <Comment />
                  <NewsLetter />
                  <Fotter/>
                </>
              }
            />

            {/* سبد خرید */}
            <Route
              path="/cart"
              element={
                <>
                  <Header />
                  <Hero />
                  <Cart />
                </>
              }
            />

            {/* ورود و ثبت نام */}
            <Route path="/login" element={<Auth />} />
            <Route path="/signup" element={<Auth />} />
            <Route
              path="/menu"
              element={
                <>
                  <Header />
                  <Menu2 />
                </>
              }
            />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
