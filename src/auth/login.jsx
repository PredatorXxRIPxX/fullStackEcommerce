import React, { useState } from "react";
import {motion} from "framer-motion"
import { Link } from "react-router-dom";
import "../style/global.css"
import {useDispatch } from "react-redux";
import { connectAccount, getAccountInfo } from "../app/api";
import { setUserRedux } from "../features/userSlice";
import { account } from "../app/config";
import { useNavigate } from "react-router-dom";


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
            <h1 className="font-bold">Email</h1>
            <input className="p-2 m-1 rounded-sm" type="text" onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <h1 className="font-bold">Password</h1>
            <input className="p-2 m-1 rounded-sm" type="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
            <motion.button onClick={loginAccount} className="rounded-md text-white bg-violet-800 p-2 m-2">
                log in
            </motion.button>
            <p>Don't have an Account <Link to={"/signin"}><span className="text-violet-800">signIn</span></Link></p>
        </motion.div>
    )
}