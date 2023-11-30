import axios from 'axios';


export const axiosPublic = axios.create({
    baseURL : 'https://tect-product-serverside.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;