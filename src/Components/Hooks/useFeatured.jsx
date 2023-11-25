import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useFeatured = () => {
    //tan stack
    const axiosPublic = useAxiosPublic()
    const {data: featured = [] } = useQuery({
                queryKey: ['bookings'],
                queryFn: async () => {
                    const res = await axiosPublic.get(`/featured`)
                    return res.data
                }
            })
    
    return [featured]
};

export default useFeatured;