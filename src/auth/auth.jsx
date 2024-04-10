import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./login";
import Singin from "./signin";
export default function Auth(){
    return (
        <div className="bg-violet-500">
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/signin" element={<Singin />}/>
            </Routes>
        </div>
    )
}