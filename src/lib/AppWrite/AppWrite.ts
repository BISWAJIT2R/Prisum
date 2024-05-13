import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const client = new Client();

client
    .setEndpoint(import.meta.env.VITE_PROJECT_END_POINT_URL)
    .setProject(import.meta.env.VITE_PROJECT_PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatar = new Avatars(client);
export { ID } from 'appwrite';


