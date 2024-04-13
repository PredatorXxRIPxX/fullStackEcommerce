import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./login";
import Singin from "./signin";
import Admin from "../admin/admin";
export default function Auth(){
    return (
        <div className="flex items-center justify-center h-screen w-screen bg-[#222]">
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/signin" element={<Singin />}/>
                <Route path='/admin' element={<Admin />}/>
            </Routes>
        </div>
    )
}