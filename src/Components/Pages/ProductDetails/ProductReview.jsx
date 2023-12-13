
import PropTypes from 'prop-types';

const ProductReview = ({reviews}) => {
    
    const {name , review , ratings} = reviews
    return (
        <div className='px-3 py-2 border-4 border-red-600'>
            <h1 className='text-3xl'>{name}</h1>
            <p className='text-xl'>{review}</p>
            <p>Ratings : {ratings}</p>
            
        </div>
    );
};

ProductReview.propTypes = {
    reviews : PropTypes.object
};

export default ProductReview;