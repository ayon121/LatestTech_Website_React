import Navbar from "../../Shared/Navbar";
import Banner from "./Banner/Banner";
import Featureds from "./Featured/Featureds";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Featureds></Featureds>
        </div>
    );
};

export default Home;