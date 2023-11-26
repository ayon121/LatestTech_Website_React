import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useAllProducts = () => {
    const axiosPublic = useAxiosPublic()
    const {data: allproducts = [] } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/allproducts`)
            return res.data
        }
    })
    return [allproducts]
};    

export default useAllProducts;