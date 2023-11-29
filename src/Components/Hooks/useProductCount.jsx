import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "./useAxiosPublic";


const useProductCount = () => {
    const {data: productcount = [] , refetch } = useQuery({
        queryKey: ['count'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/allporductCount`)
            return res.data.count
        }
    })
    return (
        [productcount , refetch]
    );
};

export default useProductCount;