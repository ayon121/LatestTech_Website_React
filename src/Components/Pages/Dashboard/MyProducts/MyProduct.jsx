
import PropTypes from 'prop-types';

const MyProduct = ({product})=> {
    const {product_name , total_upvote ,status  } = product
    // const [text] = useTypewriter({
    //     words: [product_name],
    //     loop : 6
    //   })
    
    return (
        <div className="card card-compact w-auto border-2 border-[#FF444A] bg-base-100 shadow-xl font-inter">
            <div className="card-body">
                <h2 className="card-title">{product_name}</h2>
                <p className=''>Total Vote : {total_upvote}</p>
                <p className=''>Status : {status}</p>
                <div className="card-actions justify-start items-center pt-2 pb-2 ">
                    <div className='flex items-center  px-2 py-1 rounded-xl gap-3'> 
                        <button className="btn text-[#FF444A]">Update</button>
                        <button className="btn text-[#FF444A]">Delete</button>   
                    </div>
                </div>
            </div>
        </div>
    );
};

MyProduct.propTypes = {
    product : PropTypes.object
};

export default MyProduct;