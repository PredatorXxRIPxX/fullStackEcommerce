import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../features/userSlice";
import "../style/global.css"
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Products from "./Products";
import Orders from "./Orders";
import Settings from "./Settings";

export default function Home(){
    const navigator = useNavigate()
    const pages_Link = ["/home/products","/home/orders","/home/settings"]
    const current_user = useSelector(getUser)
    
    return (
        <>
            <nav className=" bg-violet-500 text-white font-bold flex justify-between p-2 items-center">
                <h1 className=" text-2xl">ShoopIo</h1>
                <ul className="flex items-center justify-normal p-2">
                    <li className="p-2 m-4"><Link to={pages_Link[0]}>Products</Link></li>
                    <li className="p-2 m-4"><Link to={pages_Link[1]}>Orders</Link></li>
                    <li className="p-2 m-4"><Link to={pages_Link[2]}>Account</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/home/products" element={<Products />}/>
                <Route path="/home/orders" element={<Orders />}/>
                <Route path="/home/settings" element={<Settings />}/>
            </Routes>
        </>
    )
}