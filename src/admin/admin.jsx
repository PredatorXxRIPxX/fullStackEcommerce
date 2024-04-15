import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../features/userSlice";
import { Wrap } from '@chakra-ui/react';
import LogAdmin from "./logAdmin";
import adminSlice from "../features/adminSlice";

export default function Admin() {
    const admin = useSelector(adminSlice)
    return (
        
        <>
            (if(!admin.auth){
                <LogAdmin />
            }else{
                <p>Hello</p>
            })

        </>
    );
}
