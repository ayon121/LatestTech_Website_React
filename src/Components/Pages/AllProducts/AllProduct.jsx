
import PropTypes from 'prop-types';
import { BiSolidDownvote, BiSolidUpvote } from 'react-icons/bi';

const AllProduct = ({allproduct}) => {
    const {product_img , product_name , total_upvote , tags  } = allproduct
    
    return (
        <div className="card card-compact w-auto h-96 bg-base-100 shadow-xl font-inter">
            <figure><img src={product_img} alt="featured img" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product_name}</h2>
                {/* <p className='badge badge-outline'>tags : game , code , for , hot</p> */}
                {
                    tags.map((tag , index) => <p key={index} className='badge badge-outline flex '>{tag}</p>)
                }
                <div className="card-actions justify-start items-center pt-2 pb-2 ">
                    <div className='flex items-center border-2 px-2 py-1 rounded-xl border-[#FF444A]'> 
                        <button className="text-xl "><BiSolidUpvote /></button>
                        <button className="text-xl"><BiSolidDownvote /></button>
                    </div>
                    <div>
                        <p>{total_upvote}upvotes</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

AllProduct.propTypes = {
    allproduct : PropTypes.object
};

export default AllProduct;