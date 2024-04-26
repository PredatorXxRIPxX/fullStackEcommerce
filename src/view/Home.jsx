import "../style/global.css"
import React, { useEffect, useState } from "react"
import { Link, Route ,Routes} from "react-router-dom"
import Products from "./Products"
import Orders from "./Orders"
import Settings from "./Settings"

export default function Home() {
    const [settings,setSetting] = useState(false)

    return (
<<<<<<< HEAD
        <div>
            <nav className="flex items-center bg-violet-800 text-white font-bold justify-between p-4 sticky top-0 left-0">
                <h1 className="font-bold text-2xl">Shooper</h1>
                <ul className="list-none flex items-center p-2">
                    <li className="text-white font-bold text-lg p-2 flex items-center justify-between h-full max-w-full"><Link to="/home/products"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
</Link></li>
                    <li className="text-white font-bold text-lg p-2 flex items-center justify-between h-full max-w-full"><Link to="/home/orders"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg></Link></li>
                    <li className="text-white font-bold text-lg p-2 flex items-center justify-between h-full max-w-full"><Link to="/home/settings"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
</svg>
</Link></li>                    
                </ul>
            </nav>
            <Routes>
                <Route path="/products" element={<div><Products /></div>}/>
                <Route path="/orders" element={<div><Orders/></div>}/>
                <Route path="/settings" element={<div><Settings /></div>}/>
            </Routes>
=======



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
>>>>>>> update
        </div>
    )
}
