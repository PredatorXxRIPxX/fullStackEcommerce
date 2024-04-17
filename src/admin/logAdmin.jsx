import React, { useState } from "react";
import { Input } from '@chakra-ui/react'
import { connectAdmin } from "../app/api";
import { Button } from '@chakra-ui/react'
export default function LogAdmin(){
    const [email,setEmail]= useState("")
    const [password,setPassword] = useState("")

    const connectAdmins = async () =>{
        try {
            var response = await connectAdmin(email,password)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="p-4 bg-white shadow-md drop-shadow-md shadow-gray-200 rounded-md ">
            <h2>Email</h2>
            <Input size={"md"} onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <h2>Password</h2>
            <Input size={"md"} onChange={(e)=>setPassword(e.target.value)} value={password} />
            <Button size='md' color={"white"} backgroundColor={"violet"} height='48px' width='200px' border='none' margin={'2rem 0rem'} onClick={connectAdmins}>Enter Admin</Button>
        </div>
    )
}