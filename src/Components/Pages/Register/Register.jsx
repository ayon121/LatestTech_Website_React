
import { Link } from 'react-router-dom';
import Title from '../../Shared/Title';
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    return (
        <div>
            <Title title={'Register Now'}></Title>
            <div className='flex justify-center items-center mt-4 px-4 gap-4 font-inter'>
                <div className='text-center border-4 rounded-2xl border-[#FF444A] p-6'>
                    <div className='text-center'>
                        <button className='text-5xl '><FcGoogle /></button>

                    </div>
                    <div className='py-2'>
                        <h1>or</h1>
                    </div>
                    <div>
                        <div className='flex flex-col md:flex-row gap-2'>
                            <div>
                                <label className='flex justify-start'>Name</label>
                                <input type="text" placeholder="Type your name" className="input input-bordered input-error w-full max-w-xs my-2" required />
                            </div>
                            <div>
                                <label className='flex justify-start'>Email</label>
                                <input type="email" placeholder="Type your email" className="input input-bordered input-error w-full max-w-xs my-2" required />
                            </div>
                        </div>
                        <div  className='flex flex-col md:flex-row gap-2'>
                            <div>
                                <label className='flex justify-start'>ImageUrl</label>
                                <input type="text" placeholder="Type image url" className="input input-bordered input-error w-full max-w-xs my-2" required />
                            </div>
                            <div>
                                <label className='flex justify-start'>Pasword</label>
                                <input type="password" placeholder="Type your password" className="input input-bordered input-error w-full max-w-xs my-2" required />
                            </div>
                        </div>
                        <button className="btn text-[#FF444A] border-[#FF444A] w-1/2">Register</button>
                    </div>
                    <div>
                        <h1 className='py-2 text-[#FF444A] text-sm'>Already have an account ?</h1>
                        <Link to="/login"><button className="btn btn-sm text-[#FF444A] border-[#FF444A]">Login</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;