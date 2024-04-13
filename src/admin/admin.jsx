import React, { useState } from "react";
import { getAdmin } from "../features/adminSlice";
import { useSelector } from "react-redux";
import { getUser } from "../features/userSlice";
import { Wrap } from '@chakra-ui/react';
import LogAdmin from "./logAdmin";

export default function Admin() {
    const admin = useSelector(getAdmin())
    

    console.log(admin);

    return (
        admin.auth ? (
            <LogAdmin />
        ) : (
            <div className="h-full w-full bg-[200] text-white font-bold ">
                <nav className="bg-violet-500 text-white font-bold flex justify-between p-2 items-center">
                    <h1 className="text-2xl">ShoopIo</h1>
                    <ul className="flex items-center justify-normal p-2">
                        
                    </ul>
                </nav>
            </div>
        )
    );
}
