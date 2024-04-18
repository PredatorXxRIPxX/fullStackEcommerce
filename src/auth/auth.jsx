import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./login";
import Singin from "./signin";
import Admin from "../admin/admin";
import Dashboard from "../admin/dashboard";
export default function Auth(){
    return (
        <div className="flex flex-col items-center  h-screen bg-[#222]">
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/signin" element={<Singin />}/>
                <Route path='/admin/*' element={<Admin />}/>
            </Routes>
        </div>
    )
}