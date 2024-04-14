import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../features/userSlice";
import { Wrap } from '@chakra-ui/react';
import LogAdmin from "./logAdmin";

export default function Admin() {

    return (
        
        <>
            <LogAdmin />
        </>
    );
}
