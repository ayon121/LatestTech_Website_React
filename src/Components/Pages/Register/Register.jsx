
import { Link, useNavigate } from 'react-router-dom';
import Title from '../../Shared/Title';
import { FcGoogle } from "react-icons/fc";
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/Authproviders';

// react toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const { createUser , GoogleLogin} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        const name = form.get('name')
        const img = form.get('img')

        console.log(name , img);
        // create user
        createUser(email , password)
        .then(result => {
            console.log(result)
            navigate('/')
            
        })
        .catch(error => console.log(error))
    }
    const HandleGoogleLogin = () => {
        GoogleLogin()
            .then(result => {
                console.log(result)
                toast("Login Success")
                navigate(location?.state ? location.state : '/')

            })
            .catch(error => {
                toast(error.message)
            })
    }

    return (
        <div>
            <Title title={'Register Now'}></Title>
            <div className='flex justify-center items-center mt-4 px-4 gap-4 font-inter'>
                <div className='text-center border-4 rounded-2xl border-[#FF444A] p-6'>
                    <div className='text-center'>
                        <button onClick={HandleGoogleLogin} className='text-5xl '><FcGoogle /></button>

                    </div>
                    <div className='py-2'>
                        <h1>or</h1>
                    </div>
                    <div>
                        <form onSubmit={handleRegister}>
                            <div className='flex flex-col md:flex-row gap-2'>
                                <div>
                                    <label className='flex justify-start'>Name</label>
                                    <input type="text" name='name' placeholder="Type your Username" className="input input-bordered input-error w-full max-w-xs my-2" required />
                                </div>
                                <div>
                                    <label className='flex justify-start'>Email</label>
                                    <input type="email" name='email' placeholder="Type your email" className="input input-bordered input-error w-full max-w-xs my-2" required />
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row gap-2'>
                                <div>
                                    <label className='flex justify-start'>ImageUrl</label>
                                    <input type="text" name='img' placeholder="Type image url" className="input input-bordered input-error w-full max-w-xs my-2" required />
                                </div>
                                <div>
                                    <label className='flex justify-start'>Pasword</label>
                                    <input type="password" name='password' placeholder="Type your password" className="input input-bordered input-error w-full max-w-xs my-2" required />
                                </div>
                            </div>
                            <input className="btn text-[#FF444A] border-[#FF444A] w-1/2" type="submit" value="Register" />
                        </form>
                    </div>
                    <div>
                        <h1 className='py-2 text-[#FF444A] text-sm'>Already have an account ?</h1>
                        <Link to="/login"><button className="btn btn-sm text-[#FF444A] border-[#FF444A]">Login</button></Link>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;