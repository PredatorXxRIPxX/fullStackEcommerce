import React from "react"
import "./style/global.css"
import Auth from "./auth/auth"
import { Route, Routes } from "react-router-dom"
import Login from "./auth/login"
import SignIn from "./auth/signin"
import Home from "./view/Home"
import Admin from "./admin/admin"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />}>
          <Route path="/login" element={<Login />}/>
          <Route path="/signin" element={<SignIn />}/>
          <Route path="/admin/*" element={<Admin />}/>
        </Route>
        <Route path="/home/*" element={<Home />}/>
      </Routes>
    </>
  )
}

export default App