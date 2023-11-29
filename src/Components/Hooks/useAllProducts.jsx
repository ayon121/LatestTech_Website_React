import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useState } from "react";
import useProductCount from "./useProductCount";


const useAllProducts = () => {
    const axiosPublic = useAxiosPublic()
    const [currentPage , SetcurrentPage] = useState(0)
    const itemsPerPage = 20
    const [count] = useProductCount()
    const {data: allproducts = [] , refetch} = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/allproducts?page=${currentPage}&size=${itemsPerPage}`)
            return res.data
        }
    })

    const Pagenumber = Math.ceil(count/ itemsPerPage)
    const pages = [...Array(Pagenumber).keys()]
    return [allproducts , refetch , currentPage , pages , SetcurrentPage]
};    

export default useAllProducts;