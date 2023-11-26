import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUserInfo = () => {
    const axiosSecure = useAxiosSecure()
    const {data: userInfo = [] } = useQuery({
        queryKey: ['usersinfo'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users`)
            return res.data
        }
    })
    return (
       [userInfo ]
    );
};

export default useUserInfo;