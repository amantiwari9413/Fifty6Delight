import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://restaurantapi-07gp.onrender.com/menu/allMenu"
        );
        const data = await response.json();
        if (data.success) {
          setMenuData(data.data);
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
    <div className="p-8 bg-orange-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-orange-600 mb-8">
        Menu List
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuData.map((menu) => (
          <Link
            key={menu._id}
            to={`/menu/${menu.menuName}`} // Create dynamic route
            className="bg-orange-600 shadow-lg rounded-lg p-6 flex items-center justify-center"
          >
            <h2 className="text-2xl font-semibold text-gray-700">
              {menu.menuName}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
