import React from "react";
import { useLocation, Outlet,useNavigate } from "react-router-dom";

const Admin = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        // Navigate to the relative path under /admin
        navigate(path);
    };

    // Check if the current path is exactly "/admin"
    const isAdminDashboard = location.pathname === "/Admin";

    return (
        <div>
            {isAdminDashboard && (
                <div className="flex flex-col items-center justify-center h-screen bg-orange-100">
                <h1 className="text-4xl font-bold text-orange-600 mb-8">Admin Dashboard</h1>
                <div className="flex flex-col space-y-4">
                    <button
                        className="bg-orange-300 text-white py-2 px-4 rounded-lg shadow-md hover:bg-orange-400"
                        onClick={() => handleNavigation("order")} // Use relative path
                    >
                        Orders
                    </button>
                    <button
                        className="bg-orange-300 text-white py-2 px-4 rounded-lg shadow-md hover:bg-orange-400"
                        onClick={() => handleNavigation("additem")} // Use relative path
                    >
                        Add Item
                    </button>
                    <button
                        className="bg-orange-300 text-white py-2 px-4 rounded-lg shadow-md hover:bg-orange-400"
                        onClick={() => handleNavigation("addmenu")} // Use relative path
                    >
                        Add Menu
                    </button>
                </div>
            </div>
            )}
            <Outlet />
        </div>
    );
};

export default Admin;





