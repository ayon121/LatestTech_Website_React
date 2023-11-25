
import PropTypes from 'prop-types';


// icon
import { BiSolidUpvote, BiSolidDownvote } from "react-icons/bi";


const Featured = ({featured}) => {
    console.log(featured);

    const {product_img , product_name , total_upvote , tags } = featured
    return (
        <div className="card card-compact w-auto bg-base-100 shadow-xl font-inter h-96">
            <figure><img src={product_img} alt="featured img" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product_name}</h2>
                {/* <p className='badge badge-outline'>{tags.slice(',').join(',')}</p> */}
                {
                    tags.map((tag ) => <p key={tag._id} className='badge badge-outline flex '>{tag}</p>)
                }
                
                <div className="card-actions justify-start items-center pt-2 pb-2 ">
                    {/* to do btn function */}
                    <div className='flex items-center border-2 px-2 py-1 rounded-xl border-[#FF444A]'> 
                        <button className="text-xl "><BiSolidUpvote /></button>
                        <button className="text-xl"><BiSolidDownvote /></button>
                    </div>
                    <div>
                        <p>{total_upvote} upvotes</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

Featured.propTypes = {
    featured : PropTypes.object
};

export default Featured;