import { useState } from "react";
import Title from "../../Shared/Title";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import ReviewProduct from "./ReviewProduct";


const ReviewProducts = () => {
    const [reviewProucts , setReviewPRoducts] = useState()
    axiosSecure.get('/reviewproduct')
    .then(res => {
        setReviewPRoducts(res.data)
    })

    return (
        <div>
            <Title title={'Review Products'}></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto px-4 gap-4 mb-10">
                {
                    reviewProucts?.map(product => <ReviewProduct key={product._id} product={product}></ReviewProduct>)
                }
            </div>
        </div>
    );
};

export default ReviewProducts;