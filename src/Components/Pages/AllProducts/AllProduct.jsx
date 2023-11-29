
import PropTypes from 'prop-types';
import {  BiSolidUpvote } from 'react-icons/bi';
import useSingleUser from '../../Hooks/useSingleUser';
import { axiosSecure } from '../../Hooks/useAxiosSecure';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/Authproviders';
import useAllProducts from '../../Hooks/useAllProducts';

const AllProduct = ({allproduct}) => {
    const {_id, product_img , product_name , total_upvote , tags ,user_email , post_date } = allproduct
    const [singleuserInfo] = useSingleUser()
    const { user} = useContext(AuthContext)
    const [, refetch] = useAllProducts()
    const handlemakeFeatured = () => {
        
        const addfeatured = {
            product_img , product_name , total_upvote , tags , user_email, post_date
        }

        axiosSecure.post('/featured' , addfeatured)
        .then(res => {
            console.log(res.data);
            if(res.data.insertedId){
                toast(`successfully added to Featured`)
            }
            
        })
    }

    const handleUpvote = () => {
        axiosSecure.patch(`/allproduct/upvote/${_id}`)
        .then(res => {
            if(res.data.modifiedCount > 0){
                toast('Upvoted')
                refetch()
            }
        })
    }
    return (
        <div className="card card-compact w-auto h-96 bg-base-100 shadow-xl font-inter">
            <figure><img src={product_img} alt="featured img" /></figure>
            <div className="card-body">
                <h2 className="card-title text-sm">{product_name}</h2>
                {/* <p className='badge badge-outline'>tags : game , code , for , hot</p> */}
                {
                    tags.map((tag , index) => <p key={index} className='badge badge-outline flex text-xs'>{tag}</p>)
                }
                <div className="card-actions justify-start items-center pt-2 pb-2 ">
                    <div className='flex items-center border-2 px-2 py-1 rounded-xl border-[#FF444A]'> 
                        <button onClick={handleUpvote} className="text-xl " disabled={user?.email === user_email}><BiSolidUpvote /></button>
                    </div>
                    <div>
                        <p>{total_upvote}upvotes</p>
                    </div>
                </div>
                <div>
                    <Link to={`/product/${_id}`}><button className="btn btn-sm">See Details</button></Link>
                </div>
               <hr />
                <div>
                    {
                        singleuserInfo[0]?.userRole === 'modaretor' &&  <button onClick={handlemakeFeatured} className="btn btn-sm border-[#FF444A]">Make Featured</button>
                    }
                    {
                        singleuserInfo[0]?.userRole === 'admin' &&  <button onClick={handlemakeFeatured} className="btn btn-sm border-[#FF444A]">Make Featured</button>
                    }
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

AllProduct.propTypes = {
    allproduct : PropTypes.object
};

export default AllProduct;