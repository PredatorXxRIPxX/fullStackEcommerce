import {motion} from "framer-motion"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "../style/global.css"
import { createAccounts } from "../app/api"
import { Input } from "@chakra-ui/react"

export default function Singin(){
    const navigate = useNavigate()
    const[username,setUsername] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")

    async function createAccount () {
        var response = await createAccounts(username,email,password);
        if(response==null){
            alert("une alert c'est produit")
        }else{
            setEmail("")
            setPassword("")
            setUsername("")
            console.log("success")
            navigate("/")
        }
    }

    return(
        <motion.div className="bg-gray-200 w-fit rounded-md flex flex-col items-center p-4 shadow-xl drop-shadow-sm shadow-gray-500">
            <div>
            
            </div>
            <h1>userName</h1>
            <Input type="outline " onChange={(e)=>setUsername(e.target.value)} value={username}/>
            <h1>email</h1>
            <Input type="outline" onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <h1>password</h1>
            <Input type="outline" onChange={(e)=>setPassword(e.target.value)} value={password} />
            <motion.button className="rounded-md text-white bg-violet-800 p-2 m-2" onClick={createAccount}>
                sing in
            </motion.button>
            <p>already have an account ? <Link to={"/"}><span className="text-violet-800">Log in</span></Link></p>
        </motion.div>
    )
}