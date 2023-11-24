
import { Link } from 'react-router-dom';
import Title from '../../../Shared/Title';
import Treanding from './Treanding';
import { GiTechnoHeart } from "react-icons/gi";

const Trendings = () => {
    return (
        <div>
            <Title title={'Trending Products'}></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4 gap-4 mb-10">
                <Treanding></Treanding>
                <Treanding></Treanding>
                <Treanding></Treanding>
                <Treanding></Treanding>
                <Treanding></Treanding>
                <Treanding></Treanding>
            </div>
            <div className='text-center px-3 mb-9 '>
                <Link><button className="btn text-[#FF444A]"><GiTechnoHeart></GiTechnoHeart>See All Products</button></Link>
            </div>
        </div>
    );
};

export default Trendings;