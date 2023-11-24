
import Title from '../../Shared/Title';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <div>
            <Title title={'Login To Your Account'}></Title>
            <div className='flex justify-center items-center mt-4 px-4 gap-4 font-inter'>
                <div className='text-center border-4 rounded-2xl border-[#FF444A] p-6'>
                    <div className='text-center'>
                        <button className='text-5xl '><FcGoogle /></button>
                   
                    </div>
                    <div>
                        <h1>or</h1>
                    </div>
                    <div>
                        <label  className='flex justify-start'>Email</label>
                        <input type="email" placeholder="Type your email" className="input input-bordered input-error w-full max-w-xs my-2" required/><br />
                        <label className='flex justify-start'>Pasword</label>
                        <input type="password" placeholder="Type your password" className="input input-bordered input-error w-full max-w-xs my-2"  required/><br />
                        <button className="btn text-[#FF444A] border-[#FF444A]">Login</button>
                    </div>
                    <div>
                        <h1 className='py-2 text-[#FF444A] text-sm'>Do not have a account</h1>
                        <button className="btn btn-sm text-[#FF444A] border-[#FF444A]">Register</button>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;