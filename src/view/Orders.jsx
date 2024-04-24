import React from "react";
import { useSelector } from "react-redux";
import OrdersElement from "../components/ordersElement/ordersElement";
import { useState } from "react";

export default function Orders() {

  const someOrders = useSelector((state)=>state.user.orders)
  const [image,setImage] = useState("")
  const [discription,setDiscription] =useState("")
  
  async function fetchData(id){
    try {
      var response = await getProduct();
      var element = response.documents.filter((ele)=>ele.$id==id);
      setDiscription(element.discription)
      setImage(await getProductImage(element.image))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-full h-full bg-[#222] text-white font-bold p-4">
      {someOrders.length === 0 ? (
        <h1>Loading Orders...</h1> // Display loading message if no orders
      ) : (
        <>
          <h1>Your Orders</h1>
          <ul>
            {someOrders.map(async(order) => (
              await fetchData(order.id)
              (<OrdersElement id={order.id} name={order.name} image={image} discription={discription}/>) // Replace with your order data structure
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
