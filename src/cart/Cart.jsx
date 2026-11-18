import { useContext } from "react";
import { ShopContext } from "../context/CartContext";
import CoffeeMenu from "../data/data";

const Cart = () => {
  const [cartItems, , removeFromCart] = useContext(ShopContext);

  const totalPrice = cartItems.reduce((total, item) => {
    const product = CoffeeMenu.find((p) => p.id === item.id);
    return total + product.price * item.count;
  }, 0);

  return (
    <div className="max-w-6xl mx-auto my-20 p-5" id="cart">
      <h2 className="text-2xl font-bold text-brown mb-10 ">سبد خرید شما</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-center">سبد خرید شما خالی است.</p>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
            {CoffeeMenu.map((p) => {
              if (cartItems.some((i) => i.id === p.id)) {
                const cartItem = cartItems.find((i) => i.id === p.id);

                return (
                  <div key={p.id} className="relative  pb-8 ">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full object-contain"
                    />

                    <div className="relative bg-light shadow-lg pb-8 ">
                      <div className="flex justify-center flex-col p-5 gap-4">
                        <h3 className="text-brown font-bold text-xl">
                          {p.name}
                        </h3>
                        <p className="text-gray-900">
                          {p.ingredients.join(" | ")}
                        </p>
                        <p>{p.description}</p>
                        <p className="text-brown">
                          {p.price.toLocaleString()} تومان
                        </p>
                      </div>

                      <p>تعداد: {cartItem.count}</p>

                      <button
                        onClick={() => removeFromCart(p.id)}
                        className="bg-red-500 absolute bottom-0 translate-x-1/2 translate-y-1/2  text-white py-3 w-[150px] rounded-full hover:bg-red-600 transform transition text-[15px]"
                      >
                        حذف از سبد خرید
                      </button>
                    </div>
                  </div>
                );
              }

              return null;
            })}
          </div>

          <div className="mt-10 p-5 bg-light shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-brown">
              مجموع قیمت: {totalPrice.toLocaleString()} تومان
            </h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
