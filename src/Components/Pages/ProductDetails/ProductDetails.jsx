import  { useState } from 'react';
import {  useParams } from 'react-router-dom';
import { axiosPublic } from '../../Hooks/useAxiosPublic';
import Title from '../../Shared/Title';
import Navbar from '../../Shared/Navbar';
import Footer from '../../Shared/Footer';

const ProductDetails = () => {
    const {id} = useParams()
    const [product , Setproduct] = useState([])
    axiosPublic.get(`/allproduct/${id}`)
    .then(res => {
        
        Setproduct(res.data)
        
    })

    const {description ,external_link ,total_upvote,user_email , product_img, product_name   } = product
    return (
        <div>
            <Navbar></Navbar>
            <Title title={'Product Details'}></Title>
            <div className='max-w-6xl mx-auto px-3 font-inter mb-5 mt-2'>
                <div>
                    <h1 className='text-xl md:text-2xl font-bold text-center my-3'>{product_name}</h1>
                </div>
                <div className='flex justify-center'>
                    <img src={product_img} className='w-4/5 h-3/4 text-center rounded-2xl border-4 border-[#FF444A]' alt="product img" />
                </div>
                <div>
                    <p className='pt-3 px-2 font-semibold'>{description}</p>
                </div>
                <div>
                    <p className='pt-3 px-2 font-semibold'>External Link : {external_link}</p>
                    <p className='pt-3 px-2 font-semibold'>UpVotes : {total_upvote}</p>
                    <p className='pt-3 px-2 font-semibold'>Posted By : {user_email}</p>
                </div>

            </div>
            <Footer></Footer>

        </div>
    );
};

export default ProductDetails;