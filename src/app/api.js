import { ID,Query } from "appwrite"
import {account,database,projectConfiguration,storage} from "./config"
import { data } from "autoprefixer"


export const creatingAccount=async(username,email,password) =>{
    try {
        if(username!=""&&email!=""&&password!=""){
            var response = await account.create(
                ID.unique(),
                email,
                password,
                username,
            )
            await database.createDocument(projectConfiguration.databaseID,projectConfiguration.usersCollectionID,ID.unique(),{
                UserName:username,
                user_password:password,
                user_email:email
            })
            console.log(response)
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


export const connectAdmin=async(email,password)=>{
    try {
        await account.createEmailPasswordSession(email,password)
        return await database.listDocuments(projectConfiguration.databaseID,projectConfiguration.adminCollectectionID,[
            Query.equal("email",email),
        ])
    } catch (error) {
        console.log(error)
    }
}

export const uploadPic=async (pic)=>{
    try {
       var response = await storage.createFile(projectConfiguration.storageID,ID.unique(),pic);
       return response
    } catch (error) {
        console.log(error)
    }
}

export const addProduct=async (name,price,description,image)=>{
    try {
        var response = await database.createDocument(projectConfiguration.databaseID,projectConfiguration.productCollectionId,ID.unique(),{
            name_product:name,
            price_product:price,
            description:description,
        })
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}