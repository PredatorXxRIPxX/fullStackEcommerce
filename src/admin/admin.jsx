import React, { useState } from "react";
import { useSelector } from "react-redux";
import LogAdmin from "./logAdmin";
import { selectAuth } from "../features/adminSlice";
import Dashboard from "./dashboard";
import "../style/global.css"
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import UsersAdmin from "./usersAdmin";
import OrdersAdmin from "./ordersAdmin";
import ProductAdmin from "./productAdmin";

export default function Admin() {

    return (
        <>
            <nav className="flex p-2 justify-between items-center bg-violet-800 text-white font-bold w-full">
            <h1 className="text-2xl">Shooper</h1>
            <ul className=" list-none flex items-center p-2">
                <li className="p-4 m-1 cursor-pointer"><Link to={"/admin/Dashboard"}>Dashboard</Link></li>
                <li className="p-4 m-1 cursor-pointer"><Link to={"/admin/Product"}>Products</Link></li>
                <li className="p-4 m-1 cursor-pointer"><Link to={"/admin/UsersAdmin"}>Users</Link></li>
                <li className="p-4 m-1 cursor-pointer"><Link to={"/admin/OrdersAdmin"}>Orders</Link></li>
            </ul>
        </nav>
        <Routes>
            <Route path="/Dashboard" element={<div><Dashboard /></div>}/>
            <Route path="/Product" element={<div><ProductAdmin/></div>} />  
            <Route path="/UsersAdmin" element={<div><UsersAdmin /></div>}/>
            <Route path="/OrdersAdmin" element={<div><OrdersAdmin /></div>}/>
        </Routes>
        </>
    );
}
