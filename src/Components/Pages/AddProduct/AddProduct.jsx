import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";
import Title from "../../Shared/Title";


const AddProduct = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Title title={'Add Product'}></Title>
            <div className='flex justify-center items-center mt-4 px-4 gap-4 font-inter my-5'>
                <div className='text-center border-4 rounded-2xl border-[#FF444A] p-6'>
                    <div className="w-full">
                        <div className='flex flex-col md:flex-row gap-2'>
                            <div>
                                <label className='flex justify-start'>Product Name</label>
                                <input type="text" placeholder="Type your name" className="input input-bordered input-error w-full max-w-xs my-2" required />
                            </div>
                            <div>
                                <label className='flex justify-start'>Product Image Url</label>
                                <input type="text" placeholder="Type your Product Image Url" className="input input-bordered input-error w-full max-w-xs my-2" required />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row gap-2'>
                            <div>
                                <label className='flex justify-start'>Tags</label>
                                <input type="text" placeholder="Tags input field" className="input input-bordered input-error w-full max-w-xs my-2" required />
                            </div>
                            <div>
                                <label className='flex justify-start'>External Links</label>
                                <input type="text" placeholder="Type your Product External Url" className="input input-bordered input-error w-full max-w-xs my-2" required />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row gap-2'>
                            <div>
                                <label className='flex justify-start'>Email</label>
                                <input type="text" disabled defaultValue={'borshon1234@gmail.com'} className="input input-bordered input-error w-full max-w-xs my-2" required />
                            </div>
                            <div>
                                <label className='flex justify-start'>User Name</label>
                                <input type="text" disabled defaultValue={'ayon saha'} className="input input-bordered input-error w-full max-w-xs my-2" required />
                            </div>
                        </div>
                        <div className='w-full'>
                            <div>
                                <label className='flex justify-center'>Description</label>
                                <input type="text" placeholder="Type your Product Description" className="input input-bordered input-error w-full max-w-xs my-2 " required />
                            </div>
                        </div>
                        <button className="btn text-[#FF444A] border-[#FF444A] w-1/2 mt-6">Add Product</button>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddProduct;