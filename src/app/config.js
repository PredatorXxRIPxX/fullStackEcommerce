import { Client,Databases,Avatars,Storage,Account } from 'appwrite';

export const client = new Client();
client.setEndpoint('https://cloud.appwrite.io/v1').setProject('6615a981eefee2c91420')

export const account = new Account(client)
export const database = new Databases(client)
export const avatar = new Avatars(client)
export const storage = new Storage(client)