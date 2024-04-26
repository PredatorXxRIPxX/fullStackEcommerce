import React from "react";

export default function Settings(){
    return (
        <div className="w-fit h-fit flex items-center justify-center bg-[#222] rounded-lg shadow-md drop-shadow-md shadow-white">
            <ul className=" list-none p-4">
                <li className="cursor-pointer text-white font-bold text-xl m-2 border-b-2 border-gray-200" ><p>edit account</p></li>
                <li className="cursor-pointer text-white font-bold text-xl m-2 border-b-2 border-gray-200" ><p>change theme</p></li>
                <li className="cursor-pointer text-white font-bold text-xl m-2 border-b-2 border-gray-200" ><p>select another language</p></li>
                <li className="cursor-pointer text-white font-bold text-xl m-2 border-b-2 border-gray-200" ><p>Change your credit card</p></li>
                <li className="cursor-pointer text-white font-bold text-xl m-2 border-b-2 border-gray-200" ><p>Read About privacy</p></li>
                <li className="cursor-pointer text-white font-bold text-xl m-2 border-b-2 border-gray-200" ><p>Delete Account</p></li>
            </ul>
        </div>
    )
}