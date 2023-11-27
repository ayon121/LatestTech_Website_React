
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/Authproviders';

const useSingleUser = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const {data: singleuserInfo = [] } = useQuery({
        queryKey: ['singleusersinfo'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user?.email}`)
            return res.data
        }
    })
    return (
       [singleuserInfo ]
    );
};

export default useSingleUser;