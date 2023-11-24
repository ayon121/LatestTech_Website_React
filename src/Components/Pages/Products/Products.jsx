import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";
import Title from "../../Shared/Title";
import Product from "./Product";


const Products = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Title title={'All Products'}></Title>
            {/* search bar */}
            <div className="flex justify-center items-center mb-6 mt-3 gap-3"> 
                <input type="text" placeholder="Search here" className="input input-bordered input-error w-full max-w-xs" />
                <button className="btn bg-[#FF444A] text-white">Search</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto px-4 gap-4 mb-10">
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
            </div>
            <Footer></Footer>


        </div>
    );
};

export default Products;