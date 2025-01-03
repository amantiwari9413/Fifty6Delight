import React from "react";
import { Routes, Route } from "react-router-dom"
import Home from "./component/Home"
import About from "./component/About"
import Menu from "./component/Menu"
import Items from "./component/Items"
import Admin from "./component/Admin"
import Order from "./component/Order"
import AddMenu from "./component/AddMenu"
import Additem from "./component/Additem"


const RouterApp = () => {
    return (
        <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/items" element={<Items />} />

            {/* Nested Route Example */}
            <Route path="/admin" element={<Admin />}>
                <Route path="order" element={<Order />} />
                <Route path="addmenu" element={<AddMenu />} />
                <Route path="additem" element={<Additem />} />
                <Route path="*" element={<div>404 Not Found</div>} />
            </Route>

            {/* Fallback Route */}
            <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
    );
};

export default RouterApp;
