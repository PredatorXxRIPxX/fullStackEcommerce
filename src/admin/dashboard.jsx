import React, { useState } from "react";

export default function Dashboard(){

    const [productName,setProductName] = useState("")
    const [productPrice,setProductPrice] = useState("")
    const [productDescription,setProductDescription] = useState("")
    const [pic,setPic] = useState()

    const sendDB = async()=>{
        if(pic!=null){
            
        }
    }

    return (
        <>
            <nav className=" bg-violet-500 text-white font-bold flex justify-between p-2 items-center">
                <h1 className=" text-2xl">ShoopIo</h1>
                <ul className="flex items-center justify-normal p-2">
                    <li className="p-2 m-4">Products</li>
                    <li className="p-2 m-4">Orders</li>
                    <li className="p-2 m-4">Account</li>
                </ul>
            </nav>
            <div>
                <input type="text" placeholder="product name" onChange={(e)=>setProductName(e.target.value)} value={productName}/>
                <input type="text" placeholder="product Price" onChange={(e)=>setProductPrice(e.target.value)} value={productPrice}/>
                <textarea placeholder="description" onChange={(e)=>setProductDescription(e.target.value)} value={productDescription}/>
                <input type="file" placeholder="product pictures" required  onChange={(e)=>setPic(e.target.files[0])}/>
                <button onClick={sendDB}>Add product</button>
            </div>
        </>
    )
}