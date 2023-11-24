// import PropTypes from 'prop-types';
import img from '../../../assets/banner.jpg'

// icon
import { BiSolidUpvote, BiSolidDownvote } from "react-icons/bi";


const Product = () => {
    return (
        <div className="card card-compact w-auto bg-base-100 shadow-xl font-inter">
            <figure><img src={img} alt="featured img" /></figure>
            <div className="card-body">
                <h2 className="card-title">Product Name</h2>
                <p className='badge badge-outline'>tags : game , code , for , hot</p>
                <div className="card-actions justify-start items-center pt-2 pb-2 ">
                    <div className='flex items-center border-2 px-2 py-1 rounded-xl border-[#FF444A]'> 
                        <button className="text-xl "><BiSolidUpvote /></button>
                        <button className="text-xl"><BiSolidDownvote /></button>
                    </div>
                    <div>
                        <p>45 upvotes</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

Product.propTypes = {
    
};

export default Product;