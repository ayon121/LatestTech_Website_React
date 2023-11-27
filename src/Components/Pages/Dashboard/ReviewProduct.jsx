
import PropTypes from 'prop-types';

const ReviewProduct = ({product}) => {
    const {product_name , product_img , tags , description , user_email} = product
    return (
        <div className="card card-compact w-auto h-96 bg-base-100 shadow-xl font-inter">
            <figure><img src={product_img} alt="featured img" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product_name}</h2>
                {
                    tags.map((tag  , index) => <p key={index} className='badge badge-outline flex '>{tag}</p>)
                }
                <p>{ description }</p>
                <p>{user_email}</p>
                <div className="card-actions justify-start items-center pt-2 pb-2 ">
                    <div className='flex items-center gap-2 px-2 py-1 rounded-xl'> 
                        <button className="btn">Approve</button>
                        <button className="btn">Reject</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

ReviewProduct.propTypes = {
    product : PropTypes.object
    
};

export default ReviewProduct;