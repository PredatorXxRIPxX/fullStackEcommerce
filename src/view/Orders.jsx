import React from "react";
import { useSelector } from "react-redux";
import { UserOrders } from "../features/userSlice";


export default function Orders() {
  const orders = useSelector(UserOrders)

  return (
    <div className="w-full h-full bg-[#222] text-white font-bold p-4">
      {orders.length === 0 ? (
        <h1>Loading Orders...</h1> // Display loading message if no orders
      ) : (
        <>
          <h1>Your Orders</h1>
          <ul>
            {orders.map((order) => (
              <li key={order.id}>{order.name}</li> // Replace with your order data structure
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
