import { ID,Query } from "appwrite"
import {account,database,projectConfiguration,storage} from "./config"


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
        var result = await uploadPic(image);

        var response = await database.createDocument(projectConfiguration.databaseID,projectConfiguration.productCollectionId,ID.unique(),{
            id_produit:ID.unique(),
            name_product:name,
            price_product:price,
            description:description,
            image:result.$id,
        })
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}

export const getProductImage=async (id)=>{
    try {
        var result = storage.getFilePreview(projectConfiguration.storageID,id)
        console.log(result)
        return result.href
    } catch (error) {
        console.log(error)
    }
}


export const getProduct = async () => {
    try {
        const response = await database.listDocuments(
            projectConfiguration.databaseID,
            projectConfiguration.productCollectionId,
            
        );
        
        return response
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error; // Re-throw the error to handle it elsewhere
    }
};


export const getUsers = async () =>{
    try {
        var response = database.listDocuments(projectConfiguration.databaseID,projectConfiguration.usersCollectionID)
        return response
    } catch (error) {
        console.log(error)
    }
}

export const deleteProduct = async (product_id)=>{
    try {
        var response = await database.deleteDocument(projectConfiguration.databaseID,projectConfiguration.productCollectionId,product_id);
        return response
    } catch (error) {
        console.log(error)
    }
}

export const deleteUser=async(userId)=>{
    try {
        var response = await database.deleteDocument(projectConfiguration.databaseID,projectConfiguration.usersCollectionID,userId)
        return response
    } catch (error) {
        console.log(error)
    }
}

export const getOrders=async()=>{
    try {
        var response = await database.listDocuments(projectConfiguration.databaseID,projectConfiguration.transactionCollectionID)
        return response
    } catch (error) {
        console.log(error)
    }
}

export const getAdminDashboardInfo=async()=>{
    try {
        const users_Length = await getUsers()
        const product_Length = await getProduct()
        const orders_Length = await getOrders()
        return {
            users_Length:users_Length,
            product_Length:product_Length,
            order_Length:orders_Length,
        }
    } catch (error) {
        console.log(error)
    }
}