import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";
import Title from "../../Shared/Title";
import MyProduct from "./MyProduct";


const MyProducts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Title title={'My Products'}></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4 gap-4 mb-10">
                <MyProduct></MyProduct>
                <MyProduct></MyProduct>
                <MyProduct></MyProduct>
                <MyProduct></MyProduct>
                <MyProduct></MyProduct>
                <MyProduct></MyProduct>
                <MyProduct></MyProduct>
                
            </div>  
            <Footer></Footer>
        </div>
    );
};

export default MyProducts;