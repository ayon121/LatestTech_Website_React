
import PropTypes from 'prop-types';


// toast
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'



const Trending = ({ tranding }) => {
    const {  product_img, product_name, total_upvote, tags} = tranding

    

  
    return (
        <div className="card card-compact w-auto h-96 bg-base-100 shadow-xl font-inter">
            <figure><img src={product_img} alt="featured img" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product_name}</h2>
                {
                    tags.map((tag, index) => <p key={index} className='badge badge-outline flex text-xs'>{tag}</p>)
                }
                <div className="card-actions justify-start items-center pt-2 pb-2 ">
                    <div className="card-actions justify-start items-center pt-2 pb-2 ">
                    
                    <div>
                        <p>{total_upvote}upvotes</p>
                    </div>
                </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

Trending.propTypes = {
    tranding: PropTypes.object
};

export default Trending;