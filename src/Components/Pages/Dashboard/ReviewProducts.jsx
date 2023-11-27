
import Title from "../../Shared/Title";

import ReviewProduct from "./ReviewProduct";
import useReviewProducts from "../../Hooks/useReviewProducts";


const ReviewProducts = () => {
    const [ reviewProucts ] = useReviewProducts()


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