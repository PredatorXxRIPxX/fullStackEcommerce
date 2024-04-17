import React, { useState } from "react";
import { addProduct } from "../app/api";

export default function Dashboard(){

    const [productName,setProductName] = useState("")
    const [productPrice,setProductPrice] = useState("")
    const [productDescription,setProductDescription] = useState("")
    const [pic,setPic] = useState()

    const sendDB = async()=>{
        if(pic!=null){
            addProduct(productName,productPrice,productDescription,pic);
            setProductName("")
            setPic("")
            setProductPrice("")
            setProductDescription("")
        }else{
            console.log("we didnt find any image");
        }
    }

    return (
        <>
            <div className="h-full w-full flex flex-col items-center p-4 m-4 ">
                <input type="text" placeholder="product name" onChange={(e)=>setProductName(e.target.value)} value={productName}/>
                <input type="text" placeholder="product Price" onChange={(e)=>setProductPrice(e.target.value)} value={productPrice}/>
                <textarea placeholder="description" onChange={(e)=>setProductDescription(e.target.value)} value={productDescription}/>
                <input type="file" placeholder="product pictures" required  onChange={(e)=>setPic(e.target.files[0])}/>
                <button className=" bg-red-600 text-white font-bold" onClick={sendDB}>Add product</button>
            </div>
        </>
    )
}