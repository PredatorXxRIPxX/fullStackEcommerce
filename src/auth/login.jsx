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
            //useDispatch(setUserRedux(id_User,email,username_user))
            
            setEmail("")
            setPassword("")
            console.log("succes")
            navigator("/home")
        }
    }

    return (
        <motion.div className="bg-violet-500">
            <h1>Email</h1>
            <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <h1>Password</h1>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
            <motion.button onClick={loginAccount}>
                log in
            </motion.button>
            <p>Don't have an Account <Link to={"/signin"}><span className="text-violet-800">signIn</span></Link></p>
        </motion.div>
    )
}