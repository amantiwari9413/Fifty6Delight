import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../feature/addCartSlice";

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const cartHandler = () => {
    dispatch(addItem({ ...item, quantity }));
    alert(`Added ${quantity} ${item.itemName}(s) to the cart!`);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="relative m-4 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md sm:max-w-sm md:max-w-md lg:max-w-lg">
      <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl cursor-pointer">
        <img className="object-cover" src={item.itemImg} alt="product" />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          39% OFF
        </span>
      </div>
      <div className="mt-4 px-5 pb-5">
        <div className="cursor-pointer">
          <h5 className="text-xl tracking-tight text-slate-900">{item.itemName}</h5>
        </div>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">₹{item.itemPrice}</span>
          </p>
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                aria-hidden="true"
                className="h-5 w-5 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
            <span className="mr-2 ml-3 rounded bg-green-400 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button className="px-2 py-1 border border-gray-300 text-gray-600" onClick={decrementQuantity}>-</button>
            <span className="px-3 py-1">{quantity}</span>
            <button className="px-2 py-1 border border-gray-300 text-gray-600" onClick={incrementQuantity}>+</button>
          </div>
          <button
            className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            onClick={cartHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
