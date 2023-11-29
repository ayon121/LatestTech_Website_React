
import PropTypes from 'prop-types';


// icon
import { BiSolidUpvote } from "react-icons/bi";
import { axiosSecure } from '../../../Hooks/useAxiosSecure';

// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useContext } from 'react';
import { AuthContext } from '../../../../Providers/Authproviders';
import useFeatured from '../../../Hooks/useFeatured';


const Featured = ({featured}) => {
    const { user} = useContext(AuthContext)
    const [, refetch] = useFeatured()
    const {_id ,product_img , product_name , total_upvote , tags , user_email} = featured
    const handleUpvote = () => {
        axiosSecure.patch(`/featured/upvote/${_id}`)
        .then(res => {
            if(res.data.modifiedCount > 0){
                toast('Upvoted')
                refetch()
            }
        })
    }
    

   
    return (
        <div className="card card-compact w-auto bg-base-100 shadow-xl font-inter h-96">
            <figure><img src={product_img} alt="featured img" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product_name}</h2>
                {/* <p className='badge badge-outline'>{tags.slice(',').join(',')}</p> */}
                {
                    tags.map((tag  , index) => <p key={index} className='badge badge-outline flex '>{tag}</p>)
                }
                
                <div className="card-actions justify-start items-center pt-2 pb-2 ">
                    {/* to do btn function */}
                    <div className='flex items-center border-2 px-2 py-1 rounded-xl border-[#FF444A]'> 
                    <button onClick={handleUpvote} className="text-xl " disabled={user?.email === user_email}><BiSolidUpvote /></button>
                    </div>
                    <div>
                        <p>{total_upvote} upvotes</p>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

Featured.propTypes = {
    featured : PropTypes.object
};

export default Featured;