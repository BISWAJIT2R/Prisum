import { INewUser, IUser } from "@/types";
import { ID, account, avatar, databases } from "./AppWrite";
import { toast } from "react-toastify";
console.clear()
export async function createUserPrisum(user: INewUser) {
  try {
    const res = await account.create(ID.unique(), user.email, user.password, user.name)

    if (!res) throw new Error;

    const avatarUrl = avatar.getInitials(user.name)

    const newUser = await userStoreDB({
      accountId: res.$id,
      name: res.name,
      username: user.username,
      email: user.email,
      userImg: avatarUrl,
      bio: '',
    })
    toast.success("😉 User Created Successfully");
    return newUser;
  } catch (err) {
    toast.error("ERROR")
  }
}

export async function userLoggIn(user: { email: string, password: string }) {
  try {
    const userLoggIn = await account.createEmailPasswordSession(user.email, user.password);
    console.log(userLoggIn);

    if (userLoggIn) toast.done("mission is completed")
  } catch (error) {
    console.log(error);

  }
}

export async function userStoreDB(user: IUser) {
  try {
    const res = await databases.createDocument(
      import.meta.env.VITE_PROJECT_DATABASE_ID,
      import.meta.env.VITE_PROJECT_USER_CLIENT_ID,
      user.accountId,
      user
    )

    
    return res;
  } catch (error) {
    console.log(error);

  }
}

export async function getUser() {
  const user = await account.get()
  console.log(user)
}

// console.log( import.meta.env.VITE_PROJECT_USER_CLIENT_ID);
