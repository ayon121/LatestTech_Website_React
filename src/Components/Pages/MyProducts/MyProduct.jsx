
// import PropTypes from 'prop-types';

const MyProduct = ()=> {
    
    return (
        <div className="card card-compact w-auto border-2 border-[#FF444A] bg-base-100 shadow-xl font-inter">
            <div className="card-body">
                <h2 className="card-title">Product Name</h2>
                <p className=''>Total Vote : 123</p>
                <p className=''>Status : Pending</p>
              
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
    
};

export default MyProduct;