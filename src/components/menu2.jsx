import { useState } from "react";
import "../Menu.css";
import { useContext } from "react";
import { ShopContext } from "../context/CartContext";
import CoffeMenu from "../data/data";
import { useSearchParams } from "react-router-dom";
const categories = [
  { id: "all", title: "همه موارد", icon: "▦" },
  { id: "coffee", title: "قهوه‌ها", icon: "☕" },
  { id: "drink", title: "نوشیدنی‌ها", icon: "🥤" },
  { id: "dessert", title: "دسرها", icon: "🍰" },
  { id: "breakfast", title: "صبحانه و میان‌وعده", icon: "🥐" },
];

const Menu2 = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [cartItems, addToCart, removeFromCart] = useContext(ShopContext);
  const [searchParams] = useSearchParams();

  const searchTerm = searchParams.get("search") || "";
  const filteredProducts = CoffeMenu.filter((product) => {
    const matchesCategory =
      activeCategory === "all" || product.category === activeCategory;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.trim().toLowerCase());
      
    const matchesId = product.id >= 4

    return matchesCategory && matchesSearch && matchesId;
  });
  return (
    <div className="menu-page" dir="rtl">
      {/* Hero Section */}
      <section className="menu-hero">
        <div className="menu-hero-content">
          <h1>
            منوی <span>کافه گوشه </span>
          </h1>
          <p>لذت یک فنجان قهوه خوش طعم در کنار دوستان و عزیزانتان</p>
        </div>
      </section>
      {/* Menu Section */}
      <section className="menu-section">
        <div className="menu-heading">
          <span></span>
          <h2>دسته بندی ها</h2>
          <span></span>
        </div>

        {/* Category button */}

        <div className="menu-categories">
          {categories.map((category) => {
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={
                  activeCategory === category.id
                    ? "category-btn active"
                    : "category-btn"
                }
              >
                <span>{category.icon}</span>
                {category.title}
              </button>
            );
          })}
        </div>

        <div className="menu-layout">
          {/* Products */}
          <div className="products-grid">
            {filteredProducts.length === 0 ? (
              <p className="text-xl font-bold">محصولی با این نام پیدا نشد!</p>
            ) : (
              filteredProducts
                .filter((product) => product.id >= 5)
                .map((product) => {
                  return (
                    <div className="product-card" key={product.id}>
                      <div className="product-image">
                        <img src={product.image} alt={product.name} />
                      </div>
                      <div className="product-info">
                        <h3>{product.name}</h3>
                        <p>{product.ingredients.join(" | ")}</p>
                        <p>{product.description}</p>
                        <strong>
                          {product.price.toLocaleString("fa-IR")} تومان
                        </strong>

                        {cartItems?.find(
                          (cartItem) => cartItem.id === product.id,
                        ) ? (
                          <div className="flex items-center gap-4 mt-4">
                            <button
                              onClick={() => addToCart(product.id)}
                              className="bg-cream rounded-full w-9 h-9 text-xl font-bold"
                            >
                              +
                            </button>
                            <span className="font-bold text-lg">
                              {
                                cartItems.find(
                                  (cartItem) => cartItem.id === product.id,
                                ).count
                              }
                            </span>
                            <button
                              onClick={() => removeFromCart(product.id)}
                              className="bg-cream rounded-full w-9 h-9 text-xl font-bold"
                            >
                              -
                            </button>
                          </div>
                        ) : (
                          <button
                            className="add-cart-btn"
                            onClick={() => addToCart(product.id)}
                          >
                            افزودن به سبد 🛒
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })
            )}
          </div>

          {/* SideBar */}
          <aside className="menu-sidebar ">
            <h3>دسته بندی ها</h3>
            {categories.map((category) => {
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={
                    activeCategory === category.id
                      ? "sidebar-btn selected"
                      : "sidebar-btn"
                  }
                >
                  <span>{category.icon}</span>
                  {category.title}
                </button>
              );
            })}
            <div className="sidebar-decoration">☕</div>
          </aside>
        </div>
      </section>

      <footer className="menu-footer">
        <span></span>
        <h3>کافه گوشه؛ جایی برای لحظات خوب</h3>
        <span></span>
      </footer>
    </div>
  );
};
export default Menu2;
