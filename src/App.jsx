import React from "react"
import "./style/global.css"
import Auth from "./auth/auth"
import { Route,Routes,Link } from "react-router-dom"
import Login from "./auth/login"
import Singin from "./auth/signin"
import Home from "./view/Home"
import Products from "./view/Products"
import Settings from "./view/Settings"
import Orders from "./view/Orders"
import Admin from "./admin/admin"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />}>
          <Route path="/login" element={<Login />}/>
          <Route path="/signin" element={<Singin />}/>
          <Route path="/admin" element={<Admin />}/>
        </Route>
        <Route path="/home" element={<Home />}>
          <Route path="/home/settings" element={<Settings />}/>
          <Route path="/home/products" element={<Products/>}/>
          <Route path="/home/orders" element={<Orders />}/>
        </Route>
        <Route path="/admin" element={<Admin />}/>
      </Routes>
    </>
  )
}

export default App
