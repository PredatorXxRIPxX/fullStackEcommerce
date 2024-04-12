import React, { useState } from "react";
import {motion} from "framer-motion"
import { Link } from "react-router-dom";
import "../style/global.css"
import {useDispatch } from "react-redux";
import { connectAccount, getAccountInfo } from "../app/api";
import { setUserRedux } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import { Input } from "@chakra-ui/react";


export default function Login(){
    const dispatch = useDispatch();
    const navigator = useNavigate()
    const [email,setEmail]=useState("")
    const [password,setPassword] = useState("")

    async function loginAccount(){
        var response = await connectAccount(email,password);
        if(response == null){
            alert("an error has occured")
        }else{
            const tmp_information = await getAccountInfo()
            const id_User = tmp_information.$id;
            const username_user = tmp_information.name
            console.log(id_User)
            console.log(username_user)
            dispatch(setUserRedux(id_User,email,username_user));
            console.log()
            setEmail("")
            setPassword("")
            console.log("succes")
            navigator("/home/products")
        }
    }

    return (
        <motion.div className="bg-gray-200 w-fit rounded-md flex flex-col items-center p-4 shadow-xl drop-shadow-sm shadow-gray-500">
            <div>
            
            </div>
            <h1 className="font-bold text-left">Email</h1>
            <Input variant='flushed' onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <h1 className="font-bold text-left">Password</h1>
            <Input variant='password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
            <motion.button onClick={loginAccount} className="rounded-md text-white bg-violet-800 p-2 m-2">
                log in
            </motion.button>
            <p>Don't have an Account <Link to={"/signin"}><span className="text-violet-800">signIn</span></Link></p>
        </motion.div>
    )
}