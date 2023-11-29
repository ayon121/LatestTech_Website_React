import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useTrandings = () => {
    //tan stack
    const axiosPublic = useAxiosPublic()
    const { data: trandings = [], refetch } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/trendings`)
            return res.data
        }
    })
    return (
        [trandings , refetch]
    );
};

export default useTrandings;