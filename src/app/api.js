import {account,database} from "./config"
import { ID } from "appwrite";

export const createAccounts = async (username,email,password)=>{
    try{
        const result = await account.create(ID.unique(),email,password,username);
        return result;
        
    }catch(e){
        console.log(e)
    }
}

export const logAccount= async (email,password)=>{
    try {
        var response = account.createEmailPasswordSession(email,password)
        return response;
    } catch (error) {
        console.log(error)
    }
}

export const getAccountInfo=async ()=>{
    try{
        var response = await account.get()
        return response
    }catch(e){
        console.log(e)
    }
}
