import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
    cartTotal,
  } = useContext(CartContext);

  return (
    <div className="px-10 py-10">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-6 border-b pb-4"
            >
              <div className="flex items-center gap-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>KES {item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="px-3 py-1 bg-gray-200"
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="px-3 py-1 bg-gray-200"
                >
                  +
                </button>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 ml-4"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h3 className="text-xl font-bold mt-6">
            Total: KES {cartTotal}
          </h3>
        </>
      )}
    </div>
  );
};

export default Cart;
