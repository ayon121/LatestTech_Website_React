import { Link, NavLink } from "react-router-dom";
import { GiTechnoHeart } from "react-icons/gi";

const Navbar = () => {
    const navlinks = <>
         <NavLink to="/" className={({ isActive }) => isActive ? 'text-sm font-bold text-[#FF444A]' : 'text-sm bg-transparent text-[#f8f5f5]'}>Home</NavLink>
        <li><NavLink   className={({ isActive }) => isActive ? 'text-sm  font-bold text-[#FF444A]' : 'text-sm  bg-transparent text-[#f8f5f5]'} to="/allproducts" >All Products</NavLink></li>
        <li><NavLink  className={({ isActive }) => isActive ? 'text-sm  font-bold text-[#FF444A]' : 'text-sm  bg-transparent text-[#f8f5f5]'} to="/addproduct">Add Product</NavLink></li>
        <li><NavLink  className={({ isActive }) => isActive ? 'text-sm  font-bold text-[#FF444A]' : 'text-sm  bg-transparent text-[#f8f5f5]'} to="/myproducts">My Products</NavLink></li>

    </>
    return (
        <div className=" bg-[#231f20] font-inter ">
            <div className="navbar max-w-7xl  mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#231f20] rounded-box w-52">
                            {navlinks}
                        </ul>

                    </div>
                    <a className="btn btn-ghost lg:text-2xl  flex items-center text-[#fcfbfb]"><span className="text-[#FF444A]"><GiTechnoHeart /></span>TechVibe </a>
                    <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 items-center">
                        {navlinks}

                    </ul>
                </div>
                </div>
                
                <div className="navbar-end">
                    <Link to='/login'><button className="btn text-[#FF444A]">Login</button></Link>
                   
                </div>
            </div>
        </div>
    );
};

export default Navbar;