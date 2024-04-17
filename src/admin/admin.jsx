import React, { useState } from "react";
import { useSelector } from "react-redux";
import LogAdmin from "./logAdmin";
import { selectAuth } from "../features/adminSlice";
import Dashboard from "./dashboard";

export default function Admin() {

    return (
        <>
            <Dashboard />
        </>
    );
}
