import React, { useState } from "react";
import { Input } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
export default function LogAdmin(){
    const [email,setEmail]= useState("")
    const [password,setPassword] = useState("")
    return (
        <div>
            <h2>Email</h2>
            <Input size={"md"}  onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <h2>Password</h2>
            <Input size={"md"} onChange={(e)=>setPassword(e.target.value)} value={password} />
            <Button size='md' height='48px' width='200px' border='2px' borderColor='violet.800'>Enter Admin</Button>
        </div>
    )
}