import React, { useState } from "react";
import {motion} from "framer-motion"
import { Link } from "react-router-dom";
import { logAccount } from "../app/api";
import "../style/global.css"
import {useDispatch } from "react-redux";
import { getAccountInfo } from "../app/api";
import { setUserRedux } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import { Button, Input ,InputGroup, InputRightElement} from "@chakra-ui/react";


export default function Login(){
    const dispatch = useDispatch();
    const navigator = useNavigate()
    const [email,setEmail]=useState("")
    const [password,setPassword] = useState("")
    const [show,setShow] = useState(false)
    const handleClick =()=>setShow(!show)

    async function loginAccount(){
        var response = await logAccount(email,password);
        if(response == null){
            alert("an error has occured")
        }else{
            const tmp_information = await getAccountInfo()
            const id_User = tmp_information.$id;
            const username_user = tmp_information.name
<<<<<<< HEAD
            dispatch(setUserRedux(id_User,email,username_user));
=======
            dispatch(setUserRedux({
                id:id_User,
                email:email,
                username:username_user
            }))
>>>>>>> update
            setEmail("")
            setPassword("")
            navigator("/home/products")
        }
    }

    return (
        <motion.div className="w-full h-full flex items-center justify-center">
        <div className="bg-gray-200 w-fit rounded-md flex flex-col items-center p-4 shadow-xl drop-shadow-sm shadow-gray-500">
            <div>
            
            </div>
            <h1 className="font-bold text-left">Email</h1>
            <Input type="text" onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <h1 className="font-bold text-left">Password</h1>
            <InputGroup>
                <Input type={show?"text":"password"} onChange={(e)=>setPassword(e.target.value)} value={password}/>
                <InputRightElement width={"4.5rem"}>
                <Button bgColor={"violet"} color={"white"} h='1.75rem' size='sm' onClick={handleClick} >
                    {show?"Hide":"Show"}
                </Button>

                </InputRightElement>
            </InputGroup>
            <motion.button onClick={loginAccount} className="rounded-md text-white bg-violet-800 p-2 m-2">
                log in
            </motion.button>
            <p>Don't have an Account <Link to={"/signin"}><span className="text-violet-800">signIn</span></Link></p>
        </div>
        </motion.div>
    )
}