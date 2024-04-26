import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import OrdersElement from "../components/ordersElement/ordersElement";
import { getProduct, getProductImage } from "../app/api"; // Import your API functions
import { Button } from "@chakra-ui/react";

export default function Orders() {
  const someOrders = useSelector((state) => state.user.orders);
  const [orderDetails, setOrderDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const details = await Promise.all(
          someOrders.map(async (order) => {
            const response = await getProduct();
            const element = response.documents.find((ele) => ele.$id === order.id);
            const discription = element ? element.discription : "";
            const image = element ? await getProductImage(element.image) : "";
            return { id: order.id, name: order.name, image, discription };
          })
        );
        setOrderDetails(details);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [someOrders]);

  return (
    <div className="w-full h-full bg-[#222] text-white font-bold p-4">
      {orderDetails.length === 0 ? (
        <h1>Loading Orders...</h1>
      ) : (
        <>
          <h1>Your Orders</h1>
          <ul>
            {orderDetails.map((order) => (
              <OrdersElement
                key={order.id}
                id={order.id}
                name={order.name}
                image={order.image}
                discription={order.discription}
              />
            ))}
          </ul>
          <div className="w-full h-fit flex flex-row-reverse p-4">
            <Button zIndex={"2"} color={"white"} bgColor={"violet"}>
              Checkout
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
