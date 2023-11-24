
import PropTypes from 'prop-types';

const Title =({title})=> {
    return (
        <div className='max-w-2xl mx-auto font-inter font-bold text-center mt-8 mb-5' >
            <div className='py-2 border-y-2 w-3/5 mx-auto border-[#FF444A]'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl'>{title}</h1>
            </div>
        </div>
    );
};

Title.propTypes = {
    title : PropTypes.string
};

export default Title;