import React, { useEffect, useState } from "react";
import { addProduct, getAdminDashboardInfo } from "../app/api";
import { Input ,Button} from "@chakra-ui/react";
import AdminCard from "../components/adminCard/adminCard";

export default function Dashboard(){

    const [productName,setProductName] = useState("")
    const [productPrice,setProductPrice] = useState("")
    const [productDescription,setProductDescription] = useState("")
    const [pic,setPic] = useState()
    const [adminDashboard,setAdminDashboard] = useState({
        product_Length:0,
        users_Length:0,
        orders_Length:0
    })


    const fetchData = async () =>{
        try {
            var response = await getAdminDashboardInfo()
            console.log(response)
            setAdminDashboard({
                product_Length:response.product_Length.total,
                users_Length:response.users_Length.total,
                orders_Length:response.order_Length.total
            })
        } catch (error) {
            console.log(error)
        }
    }

    const sendDB = async()=>{
        if(pic!=null){
            await addProduct(productName,productPrice,productDescription,pic);
            setProductName("")
            setPic("")
            setProductPrice("")
            setProductDescription("")
            location.reload()
        }else{
            alert("we didnt find any image");
        }
    }

    useEffect(()=>{
        fetchData()
    },[])

    return (
        <>
        <div className="flex items-center justify-between p-4">

            <div className="h-full w-full flex flex-col items-center  m-4 bg-white rounded-md p-4">
                <Input type="outlined" placeholder="product name" className="m-4" onChange={(e)=>setProductName(e.target.value)} value={productName}/>
                <Input type="outlined" placeholder="product Price" className="m-4 " onChange={(e)=>setProductPrice(e.target.value)} value={productPrice}/>
                <textarea placeholder="description" className="border-none p-4 m-4 w-full bg-gray-100 rounded-md" onChange={(e)=>setProductDescription(e.target.value)} value={productDescription}/>
                <Input type="file" placeholder="product pictures" required  onChange={(e)=>setPic(e.target.files[0])}/>
                <Button className=" bg-red-600 m-4 text-white font-bold" onClick={sendDB}>Add product</Button>
            </div>
            <div className="grid grid-cols-1 grid-row-3 w-full">
                <AdminCard heading={adminDashboard.product_Length} info={"products"}/>
                <AdminCard heading={adminDashboard.users_Length} info={"Users"}/>
                <AdminCard heading={adminDashboard.orders_Length} info={"Orders"} />
            </div>
        </div>
            
        </>
    )
}