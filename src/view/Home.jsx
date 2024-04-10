import React from "react";
import { useSelector } from "react-redux";
import { getUser } from "../features/userSlice";
import "../style/global.css"

export default function Home(){

    const current_user = useSelector(getUser)
    console.log(current_user)
    return (
        <>
            <nav className=" bg-violet-500 text-white font-bold flex justify-between p-2 items-center">
                <h1 className=" text-2xl">ShoopIo</h1>
                <ul className="flex items-center justify-normal p-2">
                    <li className="p-2 m-4">produuct</li>
                    <li className="p-2 m-4">orders</li>
                    <li className="p-2 m-4">settings</li>
                </ul>
            </nav>
        </>
    )
}