import React, { useState } from "react";

const AddItem = () => {
  const [formData, setFormData] = useState({
    itemName: "",
    itemPrice: "",
    itemImg: null,
    menuName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      itemImg: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("itemName", formData.itemName);
    formDataToSend.append("itemPrice", formData.itemPrice);
    formDataToSend.append("itemImg", formData.itemImg);
    formDataToSend.append("menuName", formData.menuName);

    try {
      const response = await fetch("https://restaurantapi-07gp.onrender.com/item/addItem", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();
      if (data.success) {
        alert("Item added successfully!");
        setFormData({
          itemName: "",
          itemPrice: "",
          itemImg: null,
          menuName: "",
        });
      } else {
        alert("Failed to add item: " + data.message);
      }
    } catch (error) {
      console.error("Error adding item:", error);
      alert("An error occurred while adding the item.");
    }
  };

  return (
    <div className="p-8 bg-orange-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Add New Item
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg"
      >
        <div className="mb-4">
          <label
            htmlFor="itemName"
            className="block text-gray-700 font-medium mb-2"
          >
            Item Name:
          </label>
          <input
            type="text"
            id="itemName"
            name="itemName"
            value={formData.itemName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="itemPrice"
            className="block text-gray-700 font-medium mb-2"
          >
            Item Price:
          </label>
          <input
            type="number"
            id="itemPrice"
            name="itemPrice"
            value={formData.itemPrice}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="itemImg"
            className="block text-gray-700 font-medium mb-2"
          >
            Item Image:
          </label>
          <input
            type="file"
            id="itemImg"
            name="itemImg"
            onChange={handleFileChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

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
            value={formData.menuName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItem;
