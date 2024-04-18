import "../style/global.css"
import React, { useEffect, useState } from "react"
import { Link, Route ,Routes} from "react-router-dom"
import { getProduct } from "../app/api"
import Products from "./Products"
import Orders from "./Orders"
import Settings from "./Settings"

export default function Home() {
    console.log(getProduct(10))
    return (
        <>
            <nav className="flex items-center bg-violet-800 text-white font-bold justify-between p-4 sticky top-0 left-0">
                <h1 className="font-bold text-2xl">Shooper</h1>
                <ul className="list-none flex items-center p-2">
                    <li className="text-white font-bold text-lg p-2"><Link to="/home/products">Products</Link></li>
                    <li className="text-white font-bold text-lg p-2"><Link to="/home/orders">Orders</Link></li>
                    <li className="text-white font-bold text-lg p-2"><Link to="/home/settings">Settings</Link></li>                    
                </ul>
            </nav>
            <Routes>
                <Route path="/products" element={<Products />}/>
                <Route path="/orders" element={<Orders/>}/>
                <Route path="/settings" element={<Settings />}/>
            </Routes>
        </>
    )
}
