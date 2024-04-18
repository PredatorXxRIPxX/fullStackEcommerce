import "../style/global.css"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getProduct } from "../app/api"

export default function Home() {
    console.log(getProduct(10))
    return (
        <>
            <nav className="flex items-center bg-violet-800 text-white font-bold justify-between p-4">
                <h1 className="font-bold text-2xl">Shooper</h1>
                <ul className="list-none flex items-center p-2">
                    <li className="text-white font-bold text-lg p-2"><Link to="/home/products">Products</Link></li>
                    <li className="text-white font-bold text-lg p-2"><Link to="/home/products">Orders</Link></li>
                    <li className="text-white font-bold text-lg p-2"><Link to="/home/products">Settings</Link></li>                    
                </ul>
            </nav>
            <div className="bg-[#222] text-white font-bold h-screen w-full grid grid-cols-4 gap-2">
                <p>hello</p>
            </div>
        </>
    )
}
