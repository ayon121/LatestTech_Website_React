
import Navbar from '../../Shared/Navbar';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer';
import useSingleUser from '../../Hooks/useSingleUser';

const Layout = () => {
    const [singleuserInfo] = useSingleUser()
    return (
        <div>
            <Navbar></Navbar>
            <div className='max-w-6xl mx-auto flex px-3 flex-col md:flex-row gap-3 font-inter'>
                <div className='w-full md:w-1/5 border-2 px-3 py-3 h-auto my-4 bg-[#231f20] rounded-2xl md:rounded-r-2xl border-[#FF444A]'>
                    <div className='flex flex-row md:flex-col gap-2 text-center'>
                        <Link to="/dashboard"><button className='text-xs md:text-xl  font-bold text-white  md:py-2 underline'>Profile</button></Link>
                        <Link><button className=' text-xs md:text-xl font-bold text-white md:py-2  underline'>My Products</button></Link>
                        <Link to="/dashboard/addproduct"><button className=' text-xs md:text-xl  font-bold text-white md:py-2  underline'>Add Products</button></Link>

                        {/* admin and modator */}
                        {
                            singleuserInfo[0]?.userRole === 'admin' && <div>
                                <Link  to='/dashboard/users'><button className=' text-xs md:text-xl  font-bold text-white md:py-2  underline'>Manage Users</button></Link>
                                <Link><button className=' text-xs md:text-xl font-bold text-white md:py-2  underline'>Review</button></Link>
                            </div>
                        }
                        {
                            singleuserInfo[0]?.userRole === 'modaretor' && <div>
                                <Link><button className=' text-xs md:text-xl font-bold text-white md:py-2  underline'>Review</button></Link>
                            </div>
                        }
                        <Link to='/dashboard/users'><button className=' text-xs md:text-xl  font-bold text-white md:py-2  underline'>Manage Users</button></Link>
                        <Link><button className=' text-xs md:text-xl font-bold text-white md:py-2  underline'>Review</button></Link>
                    </div>
                </div>
                <div className=' w-full md:w-4/5 px-3'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;