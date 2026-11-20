import { useContext, useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { ShopContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import CoffeeMenu from "../data/data";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems] = useContext(ShopContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredProducts = CoffeeMenu.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.trim().toLowerCase()),
  ).slice(0, 5);

  const handleSearch = (e) => {
    const value = e.target.value;

    setSearchTerm(value);
    setShowSuggestions(true);
  };

  const toggleIcones = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handelSaze = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handelSaze);
    return () => {
      window.removeEventListener("resize", handelSaze);
    };
  }, []);

  const itemCount = cartItems?.reduce((prev, current) => {
    return prev + current.count;
  }, 0);
  return (
    <header className="absolute top-0 left-0 w-full text-white z-10">
      <nav className="px-10 py-5">
        <div className="flex justify-between items-center ">
          <div className="hidden lg:flex lg:gap-6 lg:items-center">
            <h1>کافه گوشه</h1>
            <ul>
              <li>
                <Link to="/cart" className="relative">
                  <FontAwesomeIcon icon={faShoppingCart} />
                  {itemCount > 0 && (
                    <span className="inline-flex  w-5 h-5  bg-red-500 text-white rounded items-center justify-center text-[10px] absolute left-4 top-3">
                      {itemCount}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:hidden relative">
            <div
              className={`flex gap-6 z-20 ${isMenuOpen ? "fixed" : "relative"}`}
            >
              <button onClick={toggleIcones} className="lg:hidden  z-20">
                <IoMdMenu className="w-6 h-6" />
              </button>
              <ul className="z-20 ">
                <li className="relative top-1 ">
                  <Link to="/cart">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    {itemCount > 0 && (
                      <span className="inline-flex  w-5 h-5  bg-red-500 text-white rounded items-center justify-center text-[10px] absolute left-4 top-3">
                        {itemCount}
                      </span>
                    )}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="hidden  lg:flex gap-10">
            <ul className="flex gap-10">
              <li className="text-xl">
                <Link to="/#home">خانه</Link>
              </li>
              <li className="text-xl">
                <Link to="/menu">منو</Link>
              </li>
              <li className="text-xl">
                <Link to="/#whyUs">درباره ما</Link>
              </li>
              <li className="text-xl">
                <Link to="/#connect">ارتباط با ما</Link>
              </li>
            </ul>
          </div>
          <div className="relative w-[340px]">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center w-[200px] sm:w-[300px] md:w-full mr-2 h-[42px] bg-white/85 border border-white/50 rounded-full px-3"
            >
              <input
                type="text"
                placeholder="دنبال چی میگردی؟"
                value={searchTerm}
                onChange={handleSearch}
                onFocus={() => setShowSuggestions(true)}
                className="w-full bg-transparent outline-none border-none text-[#3c2113] text-[13px] text-right"
              />

              <button type="submit">
                <IoSearchOutline />
              </button>
            </form>

            {showSuggestions && searchTerm.trim() && (
              <div className="absolute top-full mt-3 w-full bg-white text-gray-900 rounded-xl shadow-xl overflow-hidden z-50">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((item) => (
                    <Link
                      key={item.id}
                      to={
                        item.id <= 4
                          ? `/?search=${encodeURIComponent(item.name)}`
                          : `/menu?search=${encodeURIComponent(item.name)}`
                      }
                      onClick={() => {
                        setShowSuggestions(false);
                        setSearchTerm(item.name);
                      }}
                      className="flex items-center gap-3 p-3 hover:bg-gray-100 transition-colors border-b border-gray-100"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 object-cover rounded-lg"
                      />

                      <div className="flex flex-col gap-1">
                        <span className="font-bold text-sm">{item.name}</span>

                        <span className="text-xs text-gray-500">
                          {item.price.toLocaleString("fa-IR")} تومان
                        </span>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="text-center text-sm text-gray-500 p-5">
                    محصولی با این نام پیدا نشد!
                  </p>
                )}
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/signup"
              state={{ isLogin: false }}
              onClick={() => setIsMenuOpen(false)}
              className="bg-cream px-4 py-1 shadow-sm shadow-cream rounded-3xl text-gray-950"
            >
              ثبت نام{" "}
            </Link>
            <Link
              to="/login"
              state={{ isLogin: true }}
              onClick={() => setIsMenuOpen(false)}
              className="py-1 mx-2"
            >
              ورود
            </Link>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
      <div
        className={`fixed top-0  w-full h-[450px] bg-gray-400 text-gray-950 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className=" py-5">
          <div className="flex justify-center items-center flex-col py-7 gap-10">
            <div>
              <span className="text-4xl text-cream">کافه</span>
              <span className="text-3xl"> گوشه</span>
            </div>

            <div className="flex gap-5 w-full">
              <ul className="flex flex-col gap-5 w-[100%]">
                <li className="bg-cream block w-full  py-2 hover:bg-gray-300 transition-all duration-500">
                  <Link
                    to="/#home"
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  >
                    خانه
                  </Link>
                </li>
                <li className="bg-cream block w-full  py-2 hover:bg-gray-300 transition-all duration-500">
                  <Link
                    to="/menu"
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  >
                    منو
                  </Link>
                </li>
                <li className="bg-cream block w-full  py-2 hover:bg-gray-300 transition-all duration-500">
                  <Link
                    to="/#whyUs"
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  >
                    درباره ما{" "}
                  </Link>
                </li>
                <li className="bg-cream block w-full  py-2 hover:bg-gray-300 transition-all duration-500">
                  <Link to="/#connect" onClick={() => setIsMenuOpen(false)}>
                    ارتباط با ما
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex items-start justify-start gap-2 px-10 self-end">
              <Link
                to="/signup"
                state={{ isLogin: false }}
                onClick={() => setIsMenuOpen(false)}
                className="bg-cream px-4 py-1 shadow-sm shadow-cream rounded-3xl text-gray-950"
              >
                ثبت نام{" "}
              </Link>
              <Link
                to="/login"
                state={{ isLogin: true }}
                onClick={() => setIsMenuOpen(false)}
                className="py-1 mx-2"
              >
                ورود
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
