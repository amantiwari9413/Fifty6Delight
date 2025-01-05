import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Order() {
  const cartItems = useSelector(state => state.items); // Access cart items from Redux
  const [tableNumber, setTableNumber] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerNumber, setCustomerNumber] = useState("");

  // Calculate the total amount
  const totalAmount = cartItems.reduce(
    (total, item) => total + parseFloat(Number(item.items.itemPrice)) * Number(item.items.quantity),
    0
  );

  // Handle Order Submission
  const handleOrder = async () => {
    if (!tableNumber || !customerName || !customerNumber) {
      alert("Please fill all the fields!");
      return;
    }

    const orderData = {
      customerName,
      customerNumber,
      tableNumber,
      orderedItems: cartItems.map((item) => ({
        itemName: item.items.itemName,
        itemQuantity: item.items.quantity,
        itemPrice: parseFloat(Number(item.items.itemPrice)),
      })),
    };

    try {
      const response = await axios.post("https://restaurantapi-07gp.onrender.com/order/palced", orderData);
      console.log("Order placed successfully:", response.data);
      alert("Order placed successfully!");
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order. Please try again.");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      {/* Table Number Field */}
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Table Number</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          value={tableNumber}
          onChange={(e) => setTableNumber(e.target.value)}
          placeholder="Enter table number"
        />
      </div>

      {/* Customer Name Field */}
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Customer Name</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>

      {/* Customer Number Field */}
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Customer Number</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          value={customerNumber}
          onChange={(e) => setCustomerNumber(e.target.value)}
          placeholder="Enter your phone number"
        />
      </div>

      {/* Cart Items */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Cart Items</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="mb-2">
              <div className="flex justify-between">
                <span>
                  {item.items.itemName} (x{item.items.quantity})
                </span>
                <span>₹{parseFloat(Number(item.items.itemPrice)) * Number(item.items.quantity)}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Total Amount */}
      <div className="mb-6">
        <h3 className="text-lg font-bold">Total Amount: ₹{totalAmount.toFixed(2)}</h3>
      </div>

      {/* Order Button */}
      <button
        onClick={handleOrder}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Place Order
      </button>
    </div>
  );
}
