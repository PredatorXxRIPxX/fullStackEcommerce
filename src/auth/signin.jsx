import {motion} from "framer-motion"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "../style/global.css"
import { creatingAccount } from "../app/api"


export default function Singin(){
    const navigate = useNavigate()
    const[username,setUsername] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")

    async function createAccount () {
        var response = await creatingAccount(username,email,password);
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
        <motion.div>
            <h1>userName</h1>
            <input type="text" onChange={(e)=>setUsername(e.target.value)} value={username}/>
            <h1>email</h1>
            <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email} />
            <h1>password</h1>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} />
            <motion.button onClick={createAccount}>
                sing in
            </motion.button>
            <p>already have an account ? <Link to={"/"}><span className="text-violet-800">Log in</span></Link></p>
        </motion.div>
    )
}