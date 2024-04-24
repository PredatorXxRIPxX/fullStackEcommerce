import "../style/global.css"
import React, { useEffect, useState } from "react"
import { Link, Route ,Routes} from "react-router-dom"
import Products from "./Products"
import Orders from "./Orders"
import Settings from "./Settings"

export default function Home() {
    const [settings,setSetting] = useState(false)

    return (



        <div className="w-full h-screen">
            <nav className="flex items-center bg-violet-800 text-white font-bold justify-between p-4 sticky top-0 left-0 z-10">
                <h1 className="font-bold text-2xl">Shooper</h1>
                <ul className="list-none flex items-center p-2">
                    <li className="text-white font-bold text-lg p-2"><Link to="/home/products">Products</Link></li>
                    <li className="text-white font-bold text-lg p-2"><Link to="/home/orders">Orders</Link></li>
                    <li className="text-white font-bold text-lg p-2"><div onClick={()=>setSetting(!settings)}>Settings</div></li>                    
                </ul>
            </nav>
            {
                settings==false?
                <Routes>
                    <Route path="/products" element={<Products />}/>
                    <Route path="/orders" element={<Orders/>}/>
                </Routes>:
                <Settings/>
            }
        </div>
    )
}
