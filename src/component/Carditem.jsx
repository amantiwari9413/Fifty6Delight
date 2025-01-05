import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Carditem() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
  navigate(path);
 };
  // Select the cart items from the Redux store
  const items = useSelector(state => state.items);
  console.log(items)
  // Calculate the total amount
  const totalAmount = items.reduce(
    (total, item) => total + parseFloat(Number(item.items.itemPrice)) * Number(item.items.quantity),
    0
  );

  return (
    <div className="max-w-md mx-auto mt-16 bg-white rounded-lg overflow-hidden md:max-w-lg border border-gray-400">
      {/* Header */}
      <div className="px-4 py-2 border-b border-gray-200">
        <h2 className="font-semibold text-gray-800">Shopping Cart</h2>
      </div>

      {/* Cart Items */}
      <div className="flex flex-col divide-y divide-gray-200">
        {items.map((item) => (
          <div key={item.id} className="flex items-center py-4 px-6">
            <img
              className="w-16 h-16 object-cover rounded"
              src={item.items.itemImg}
              alt={item.items.itemName}
            />
            <div className="ml-3">
              <h3 className="text-gray-900 font-semibold">{item.items.itemName}</h3>
              <p className="text-gray-700 mt-1">₹{item.items.itemPrice}</p>
              <p className="text-gray-500 text-sm">Qty: {item.items.quantity}</p>
            </div>
            <button className="ml-auto py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-lg">
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-6 py-3 bg-gray-100">
        <h3 className="text-gray-900 font-semibold">Total: ₹{totalAmount.toFixed(2)}</h3>
        <button
        onClick={() => handleNavigation('/order')}
         className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
          Checkout
        </button>
      </div>
    </div>
  );
}
