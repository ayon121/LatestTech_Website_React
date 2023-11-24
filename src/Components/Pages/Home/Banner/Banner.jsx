import '../Banner/Banner.css'
import { GiTechnoHeart } from "react-icons/gi";

const Banner = () => {
    return (
        <div className='featuredimage bg-fixed mb-5  h-[330px] md:h-[500px] font-inter text-white'>
            <div className='md:flex h-[500px] justify-center items-center py-8 px-16 gap-3'>
                <div className='md:ml-9 text-center max-w-4xl'>
                    <p className='uppercase text-3xl md:text-4xl font-bold pb-3'>discover and share the latest tech products</p>
                    <a className="btn text-[#FF444A]"><GiTechnoHeart></GiTechnoHeart>Join Now</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;