
import { useEffect, useState } from "react";

import Navbar from "../../Shared/Navbar";
import Title from "../../Shared/Title";
import AllProduct from "./AllProduct";
import useProductCount from "../../Hooks/useProductCount";





const AllProducts = () => {
    // const [allproducts , refetch , currentPage , pages , SetcurrentPage] = useAllProducts()
    const [allproducts , setAllProducts] = useState([])
    const [currentPage , SetcurrentPage] = useState(0)
    const itemsPerPage = 20
    const [count] = useProductCount()
    const Pagenumber = Math.ceil(count/ itemsPerPage)
    const pages = [...Array(Pagenumber).keys()]
    useEffect(() => {
        fetch(`https://tect-product-serverside.vercel.app/allproducts?page=${currentPage}&size=${itemsPerPage}`)
        .then(res => res.json())
        .then(data => setAllProducts(data))
    },[currentPage , itemsPerPage])
    
    
    // const count = allproducts.length
    // const itemsPerPage = 20
    // const Pagenumber = Math.ceil(count/ itemsPerPage)
    // const [currentPage , SetcurrentPage] = useState(0)
    
    // axiosPublic.get(`/myproducts`)
    // .then(res =>{
    //     console.log(res.data);
    // })
    
    // const pages = []
    // for(let i = 0; i < Pagenumber ; i++){
    //     pages.push(i)
    // }
    // const pages = [...Array(Pagenumber).keys()]
    



    
    return (
        <div>
            <Navbar></Navbar>
            <Title title={'All Products'}></Title>
            {/* search bar */}
            <div className="flex justify-center items-center mb-6 mt-3 gap-3">
                <input type="text" placeholder="Search here" className="input input-bordered input-error w-full max-w-xs" />
                <button className="btn bg-[#FF444A] text-white">Search</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto px-4 gap-4 mb-10">
                {
                    allproducts.map(allproduct => <AllProduct key={allproduct._id} allproduct={allproduct}></AllProduct>)
                }
                
            </div>
            <div className="max-w-5xl mx-auto px-3 text-center mb-8 ">
                {
                    pages.map((page , index) => <button onClick={()=> { SetcurrentPage(page); }} key={index} className={currentPage === page && 'btn btn-xs mx-2 text-white bg-[#FF444A]' || 'btn btn-xs mx-2 text-[#FF444A]  border-[#FF444A]'}>{page}</button>)
                }
            </div>

        </div>
    );
};

export default AllProducts;