import { Link } from 'react-router-dom';
import '../Banner/Banner.css'
import { GiTechnoHeart } from "react-icons/gi";
import { Cursor, useTypewriter } from "react-simple-typewriter";
const Banner = () => {
    const [text] = useTypewriter({
        words: ['discover and share the latest tech products'],
        loop : 6
      })
    return (
        <div className='featuredimage bg-fixed mb-5  h-[330px] md:h-[500px] font-inter text-white'>
            <div className='md:flex h-[500px] justify-center items-center py-8 px-16 gap-3'>
                <div className='md:ml-9 text-center max-w-4xl'>
                    <p className='uppercase text-3xl md:text-4xl font-bold pb-3'>{text}<Cursor cursorColor='red' /></p>
                    <Link to='/register'><button className="btn text-[#FF444A]"><GiTechnoHeart></GiTechnoHeart>Join Now</button></Link>
                
                </div>
            </div>
        </div>
    );
};

export default Banner;