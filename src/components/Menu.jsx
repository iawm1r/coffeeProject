import CoffeeMenu from "../data/data";
import { ShopContext } from "../context/CartContext";
import { useContext } from "react";

const Menu = () => {
  const [cartItems, addToCart, removeFromCart] = useContext(ShopContext);
  return (
    <div className="my-20 p-5 max-w-6xl mx-auto" id="menu">
      <div className="text-center mb-10">
        <h4 className="text-brown text-2xl font-bold mb-3">
          از یک ترکیب نووین و دل انگیز از قهوه لذت ببرید
        </h4>
        <p className="text-gray-600">
          همه طعم های قهوه را با ما کشف کنید همیشه فنجانی جدید برای تجربه وجود
          دارد{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 ">
        {CoffeeMenu.filter((item) => item.id <= 4).map((item) => {
          return (
            <div key={item.id} className="relative bg-light shadow-lg pb-8 ">
              <img
                src={item.image}
                alt={item.name}
                className="w-full object-contain"
              />
              <div className="flex justify-center flex-col p-5 gap-4">
                <h3 className="text-brown font-bold text-xl">{item.name}</h3>
                <p className="text-gray-900">{item.ingredients.join(" | ")}</p>
                <p className="text-brown">
                  {item.price.toLocaleString()} تومان
                </p>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                {cartItems?.find((cartItem) => cartItem.id === item.id) ? (
                   <div className="flex items-center gap-4 bg-cream rounded-full px-5 py-2 shadow-md">
                    <button
                      onClick={() => addToCart(item.id)}
                      className="text-xl font-bold"
                    >
                      +
                    </button>
                    <span className="font-bold text-lg">
                      {
                        cartItems.find((cartitem) => cartitem.id === item.id)
                          .count
                      }
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-xl font-bold"
                    >
                      -
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => addToCart(item.id)}
                    className="bg-cream text-black rounded-full px-6 py-2 shadow-md"
                  >
                    سفارش
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Menu;
