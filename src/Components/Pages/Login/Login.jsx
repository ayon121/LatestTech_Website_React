
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Title from '../../Shared/Title';
import { FcGoogle } from "react-icons/fc";
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/Authproviders';

// react toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { axiosPublic } from '../../Hooks/useAxiosPublic';

const Login = () => {
    const { loginUser, GoogleLogin } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handlelogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')

        loginUser(email, password)
            .then(result => {
                console.log(result)
                toast("Login Success")
                // navigate after login
                navigate(location?.state ? location.state : '/')
            })

            .catch(error => console.log(error))

    }

    const HandleGoogleLogin = () => {
        GoogleLogin()
            .then(result => {
                console.log(result)
                const userinfo = {
                    email : result.user?.email, 
                    name : result.user?.displayName,
                    userRole : 'user' ,
                    userType : 'nonPaid'
                }
                axiosPublic.post('/users' , userinfo)
                .then(res => console.log(res.data))
                toast("Login Success")
                navigate(location?.state ? location.state : '/')

            })
            .catch(error => {
                toast(error.message)
            })
    }

    return (
        <div>
            <Title title={'Login To Your Account'}></Title>
            <div className='flex justify-center items-center mt-4 px-4 gap-4 font-inter'>
                <div className='text-center border-4 rounded-2xl border-[#FF444A] p-6'>
                    <div className='text-center'>
                        <button onClick={HandleGoogleLogin} className='text-5xl '><FcGoogle /></button>

                    </div>
                    <div>
                        <h1>or</h1>
                    </div>
                    <div>
                        <form onSubmit={handlelogin}>

                            <label className='flex justify-start'>Email</label>
                            <input type="email" name='email' placeholder="Type your email" className="input input-bordered input-error w-full max-w-xs my-2" required /><br />
                            <label className='flex justify-start'>Pasword</label>
                            <input type="password" name='password' placeholder="Type your password" className="input input-bordered input-error w-full max-w-xs my-2" required /><br />
                            <input className="btn text-[#FF444A] border-[#FF444A]" type="submit" value="Login" />
                        </form>
                    </div>
                    <div>
                        <h1 className='py-2 text-[#FF444A] text-sm'>Do not have an account ?</h1>
                        <Link to="/register"><button className="btn btn-sm text-[#FF444A] border-[#FF444A]">Register</button></Link>



                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;