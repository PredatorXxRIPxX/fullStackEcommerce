import { Client,Databases,Avatars,Storage,Account } from 'appwrite';

export const projectConfiguration = {
    endPoint:import.meta.env.VITE_APPWRITE_ENDPOINT_ID,
    projectId:import.meta.env.VITE_APPWRITE_PROJECT_ID,
    databaseID:import.meta.env.VITE_APPWRITE_DATABASE_ID,
    storageID:import.meta.env.VITE_APPWRITE_STORAGE_ID,
    adminCollectectionID:import.meta.env.VITE_APPWRITE_ADMIN_COLLECTION_ID,
    productCollectionId:import.meta.env.VITE_APPWRITE_PRODUCTS_COLLECTIONS_ID,
    transactionCollectionID: import.meta.env.VITE_APPWRITE_TRANSATION_COLLECTION_ID ,
    usersCollectionID:import.meta.env.VITE_APPWRITE_USERS_ID,
}


export const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject(projectConfiguration.projectId)

export const account = new Account(client)
export const database = new Databases(client)
export const avatar = new Avatars(client)
export const storage = new Storage(client)