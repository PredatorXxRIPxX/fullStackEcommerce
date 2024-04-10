import { ID } from "appwrite"
import {account,database} from "./config"

export const creatingAccount=async(username,email,password) =>{
    try {
        if(username!=""&&email!=""&&password!=""){
            var response = await account.create(
                ID.unique(),
                email,
                password,
                username,
            )
            return response
        }else{
            alert("some field are missing")
        }
    } catch (error) {
        console.log(error)
    }
}

export const connectAccount=async(email,password)=>{
    try {
        if(email!=""&&password!=""){
            var response = await account.createEmailPasswordSession(email,password)
            return response
        }else{
            alert("Some field are missing")
        }
        
    } catch (error) {
        console.log(error)
    }
}

export const getAccountInfo=async ()=>{
    try {
        var response = await account.get()
        return response
    } catch (error) {
        console.log(error)
    }
}
