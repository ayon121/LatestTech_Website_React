
import Title from "../../../Shared/Title";
import MyProduct from "./MyProduct";
import useMyProduct from "../../../Hooks/useMyProduct";



const MyProducts = () => {
    const [myproducts] = useMyProduct()


    return (
        <div>
            <Title title={'My Products'}></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4 gap-4 mb-10">
                {
                    myproducts.map(product => <MyProduct key={product._id} product={product}></MyProduct>)
                }
            </div>  

        </div>
    );
};

export default MyProducts;