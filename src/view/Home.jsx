import "../style/global.css"
import React from "react"
import { Link, Route, Routes } from "react-router-dom"
import Products from "./Products"
import Settings from "./Settings"
import Orders from "./Orders"


export default function Home(){


    return (
        <>
            <nav className="flex items-center bg-violet-800 text-white font-bold justify-between p-4 w-full h-6">
                <h1>Shooper</h1>
                <ul>
                    <li><Link to={"/home/products"}>Products</Link></li>
                    <li><Link to={"/home/orders"}>Orders</Link></li>
                    <li><Link to={"/home/settings"}>Settings</Link></li>
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