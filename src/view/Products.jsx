import React, { useEffect, useState } from "react";
import "../style/global.css"
import { getProduct, getProductImage } from "../app/api";
import ProductCard from "../components/productCard/productCard";
import { ID } from "appwrite";
import { useSelector } from "react-redux";
import { getUser } from "../features/userSlice";

export default function Products(){
    const user = useSelector(getUser)
    const [listproduct,setListProduct] = useState([])
    const fetchData = async () =>{
        try {
            var response = await getProduct()
            setListProduct(response.documents)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchData()
        
    },[])

    return (
        <div className="text-white bg-[#333] h-full w-full p-4 grid grid-cols-3 gap-3 ">
            {listproduct.map((element)=>{
                return (
                    <div key={ID.unique()}>
                        <ProductCard id={element.$id} imageLink={getProductImage(element.image)} heading={element.name_product} price={element.price_product}/>
                    </div>
                )
            })}
        </div>
    )
}