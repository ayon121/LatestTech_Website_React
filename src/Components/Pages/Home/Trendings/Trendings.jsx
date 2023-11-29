
import { Link } from 'react-router-dom';
import Title from '../../../Shared/Title';

import { GiTechnoHeart } from "react-icons/gi";
import useTrandings from '../../../Hooks/useTrandings';
import Trending from './Trending';

// import useAllProducts from '../../../Hooks/useAllProducts';

const Trendings = () => {
    const [trandings ] = useTrandings()
    return (

        <div>
            <Title title={'Trending Products'}></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4 gap-4 mb-10">
                {
                    trandings.map(tranding => <Trending key={tranding._id} tranding={tranding}></Trending>)
                }
            </div>
            <div className='text-center px-3 mb-9 '>
                <Link to="/allproducts"><button className="btn text-[#FF444A]"><GiTechnoHeart></GiTechnoHeart>See All Products</button></Link>
            </div>
        </div>
    );
};

export default Trendings;