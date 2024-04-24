import React, { useEffect, useState } from "react";
import "../style/global.css"
import { getOrders } from "../app/api";
export default function OrdersAdmin(){

    const [listOrders,setListOrders] = useState([]);

    const fetchData = async () =>{
        try {
            var response = await getOrders();
            console.log(response)
            setListOrders(response.documents);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

    return (
        <>
            <h1 className="text-white">hello orders admin</h1>
        </>
    )
}