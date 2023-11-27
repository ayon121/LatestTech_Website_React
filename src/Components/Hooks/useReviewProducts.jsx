import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useReviewProducts = () => {
    const axiosSecure = useAxiosSecure()
    const {data: reviewProucts = [] , refetch } = useQuery({
        queryKey: ['reviewProucts'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/reviewproduct`)
            return res.data
        }
    })
    return (
       [reviewProucts , refetch]
    );
};

export default useReviewProducts;