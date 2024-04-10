import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./login";
import Singin from "./signin";
export default function Auth(){
    return (
        <div className="flex items-center justify-center h-screen w-screen">
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/signin" element={<Singin />}/>
            </Routes>
        </div>
    )
}