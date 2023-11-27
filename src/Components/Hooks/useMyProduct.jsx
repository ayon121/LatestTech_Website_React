import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Providers/Authproviders";


const useMyProduct = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const {data: myproducts = [] , refetch } = useQuery({
        queryKey: ['myproducts'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/reviewproduct/${user?.email}`)
            return res.data
        }
    })
    return (
       [myproducts , refetch]
    );
};

export default useMyProduct;