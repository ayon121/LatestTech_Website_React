
import PropTypes from 'prop-types';
import { axiosSecure } from '../../Hooks/useAxiosSecure';

// react toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import useReviewProducts from '../../Hooks/useReviewProducts';
const ReviewProduct = ({ product }) => {
    const [ , refetch] = useReviewProducts()
    const { _id, status, product_name, product_img, tags, description, user_email, user_img, total_upvote, external_link, user_name } = product


    const handleAproveProduct = () => {
        const approvedProduct = {
            product_name,
            product_img,
            tags,
            description,
            user_email,
            user_img,
            total_upvote,
            external_link,
            user_name

        }

        axiosSecure.post('/allproducts', approvedProduct)
            .then(res => {
                if (res.data.insertedId) {
                    toast('Product Approved Successfuly')
                    axiosSecure.patch(`/reviewproduct/${_id}`)
                        .then(res => {
                            console.log(res.data);
                            refetch()
                        })
                }
            })


    }

    const RejectProduct = () => {
        axiosSecure.patch(`/reviewproduct/reject/${_id}`)
            .then(res => {
                console.log(res.data);
                refetch()
            })
    }
    return (
        <div className="card card-compact w-auto h-96 bg-base-100 shadow-xl font-inter">
            <figure><img src={product_img} alt="featured img" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product_name}</h2>
                {
                    tags.map((tag, index) => <p key={index} className='badge badge-outline flex '>{tag}</p>)
                }
                <p>{description}</p>
                <p>{user_email}</p>
                <div className="card-actions justify-start items-center pt-2 pb-2 ">
                    <div className='flex items-center gap-2 px-2 py-1 rounded-xl'>
                        <button onClick={handleAproveProduct} className={`btn`} disabled={status === 'Approved'}>Approve</button>
                        <button onClick={RejectProduct} disabled={status === 'Rejected'} className="btn">Reject</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

ReviewProduct.propTypes = {
    product: PropTypes.object

};

export default ReviewProduct;