import React, { useState } from "react";

const MenuName = () => {
  const [menuName, setMenuName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://restaurantapi-07gp.onrender.com/menu/addMenu", // Replace with your API endpoint
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ menuName }),
        }
      );

      const data = await response.json();
      if (data.success) {
        alert("Menu name added successfully!");
        setMenuName(""); // Reset the input field after successful submission
      } else {
        alert("Failed to add menu name: " + data.message);
      }
    } catch (error) {
      console.error("Error adding menu name:", error);
      alert("An error occurred while adding the menu name.");
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-8">
        Add Menu Name
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg"
      >
        <div className="mb-4">
          <label
            htmlFor="menuName"
            className="block text-gray-700 font-medium mb-2"
          >
            Menu Name:
          </label>
          <input
            type="text"
            id="menuName"
            name="menuName"
            value={menuName}
            onChange={(e) => setMenuName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Enter menu name"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700"
        >
          Add Menu
        </button>
      </form>
    </div>
  );
};

export default MenuName;
