import { QueryClient, useMutation, useQueryClient, useInfiniteQuery  } from "@tanstack/react-query";
import { createUserPrisum, userLoggIn } from "../AppWrite/Api";
import { ILogUser, INewUser } from "@/types";

export const queryclient = new QueryClient({
   defaultOptions: {
     queries: {
        staleTime: 60 * 1000,
     }
   }
})
export const useCreateUser = () => {
    return useMutation({
        mutationFn: (user: INewUser) => createUserPrisum(user)
    })
}

export const  useUserLoggedIn = () => {
    return useMutation({
        mutationFn: (user: ILogUser) => userLoggIn(user)
    })
}