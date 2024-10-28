import React from "react";
import useProductStore from "../store/productStore";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateCartQuantity } = useProductStore();

  const handleQuantityChange = (id, event) => {
    const quantity = Number(event.target.value);
    if (quantity >= 0) {
      updateCartQuantity(id, quantity);
    }
  };

  return (
    <div>
      {cart.length === 0 ? (
        <div className="h-[100vh] w-full flex flex-col justify-center items-center text-purple-400 font-semibold text-[35px]">
          <p>Your cart is Empty</p>
          <Link
            className="font-semibold bg-purple-300 hover:bg-purple-400 transition-all rounded-lg px-4 py-2 text-white mt-4"
            to="/dashboard/product"
          >
            Products
          </Link>
        </div>
      ) : (
        <table style={{ width: "100%", marginTop: "1rem" }}>
          <thead className="border-b border-purple-600">
            <tr className="mb-3">
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id} className="border-b border-purple-300">
                <td className="text-center">{item.name}</td>
                <td className="text-center">
                  <input
                    type="number"
                    min="0"
                    value={item.quantity}
                    onChange={(event) => handleQuantityChange(item.id, event)}
                    className="my-2 border rounded-xl border-purple-200 p-2"
                  />
                </td>
                <td className="text-center">${item.price * item.quantity}</td>
                <td className="text-center">
                  <button
                    className="text-white font-semibold bg-purple-500 px-3 py-2 rounded-lg"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Cart;
