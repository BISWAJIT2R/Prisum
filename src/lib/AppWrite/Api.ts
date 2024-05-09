import { INewUser } from "@/types";
import { ID, account } from "./AppWrite";
import {toast} from "react-toastify";
export async function createUserPrisum(user: INewUser) {
  try {
    const res = await account.create(ID.unique(), user.email, user.password, user.name)
    toast.success("😉 User Created Successfully");
    return res;
  }catch(err) {
   console.log(err);
   toast.error("ERROR")
  }
}