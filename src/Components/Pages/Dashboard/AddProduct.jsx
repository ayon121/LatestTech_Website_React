
import { useContext } from "react";
import { AuthContext } from "../../../Providers/Authproviders";
import Title from "../../Shared/Title";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'



const AddProduct = () => {
    const { user } = useContext(AuthContext)

    const handdleAddProduct = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const product_name = form.get('product_name')
        const product_img = form.get('product_img')
        const description = form.get('description')
        const external_link = form.get('external_link')
        const tag1 = form.get('tag1')
        const tag2 = form.get('tag2')
        const tag3 = form.get('tag3')
        const tags = [tag1 , tag2 , tag3]
        const total_upvote = 0
        const user_email = user?.email
        const user_img = user?.photoURL
        const status = 'pending'

        const product = { product_name , product_img, tags , description , external_link , total_upvote , user_email , user_img , status }
        console.log(product);
        axiosSecure.post('/reviewproduct' , product)
        .then(res =>  {
            if(res.data.insertedId){
                toast('Product Added Successfuly')
            }
        })

    }
    return (
        <div>
            <Title title={'Add Product'}></Title>
            <div className='flex justify-center items-center mt-4 px-4 gap-4 font-inter my-5'>
                <div className='text-center border-4 rounded-2xl border-[#FF444A] p-6'>
                    <div className="w-full">
                        <form onSubmit={handdleAddProduct}>
                            <div className='flex flex-col md:flex-row gap-2'>
                                <div>
                                    <label className='flex justify-start'>Product Name</label>
                                    <input type="text" name="product_name" placeholder="Type your name" className="input input-bordered input-error w-full max-w-xs my-2" required />
                                </div>
                                <div>
                                    <label className='flex justify-start'>Product Image Url</label>
                                    <input type="text" name="product_img" placeholder="Type your Product Image Url" className="input input-bordered input-error w-full max-w-xs my-2" required />
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row gap-2'>
                                <div>
                                    <label className='flex justify-start'>Tag 1</label>
                                    <input type="text" name="tag1" placeholder="Tags input field" className="input input-bordered input-error w-full max-w-xs my-2" required />
                                </div>
                                <div>
                                    <label className='flex justify-start'>Tag 2</label>
                                    <input type="text" name="tag2"  placeholder="Tags input field" className="input input-bordered input-error w-full max-w-xs my-2" required />
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row gap-2'>
                                <div>
                                    <label className='flex justify-start'>Tag 3</label>
                                    <input type="text" name="tag3"  placeholder="Tags input field" className="input input-bordered input-error w-full max-w-xs my-2" required />
                                </div>
                                <div>
                                    <label className='flex justify-start'>External Links</label>
                                    <input type="text" name="external_link" placeholder="Type your Product External Url" className="input input-bordered input-error w-full max-w-xs my-2" required />
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row gap-2'>
                                <div>
                                    <label className='flex justify-start'>Email</label>
                                    <input type="text" disabled defaultValue={user?.email} className="input input-bordered input-error w-full max-w-xs my-2 " required />
                                </div>
                                <div>
                                    <label className='flex justify-start'>User Name</label>
                                    <input type="text" disabled defaultValue={user?.displayName} className="input input-bordered input-error w-full max-w-xs my-2 " required />
                                </div>
                            </div>
                            <div className='w-full'>
                                <div>
                                    <label className='flex justify-center'>Description</label>
                                    <input type="text" name="description" placeholder="Type your Product Description" className="input input-bordered input-error w-full max-w-xs my-2 " required />
                                </div>
                            </div>
                            <input  className="btn text-[#FF444A] border-[#FF444A] w-1/2 mt-6" type="submit" value="Add Product" />
                        </form>
                    </div>

                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default AddProduct;