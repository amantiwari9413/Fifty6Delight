import React, { useState, useEffect } from "react";
import ItemCard from "./itemCard";

const Items = () => {
  const [itemData, setItemData] = useState([]);
  const [loading, setLoading] = useState(true);

  const allitemsArray = (itemArray) => {
    let final = [];
    for (let i = 0; i < itemArray.length; i++) {
      if (itemArray[i].items.length !== 0) {
        final = final.concat(itemArray[i].items);
      }
    }
    return final;
  };

  useEffect(() => {
    // Fetch menu data from API
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://restaurantapi-07gp.onrender.com/item/getAllItem"
        ); // Replace with your actual API endpoint
        const data = await response.json();
        if (data.success) {
          setItemData(allitemsArray(data.data));
        }
      } catch (error) {
        console.error("Error fetching menu data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-semibold text-gray-700">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-orange-600 h-screen">
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {itemData.map((item, index) => (
        <ItemCard key={index} item={item} />
      ))}
    </div>
    </div>

  );
};

export default Items;
