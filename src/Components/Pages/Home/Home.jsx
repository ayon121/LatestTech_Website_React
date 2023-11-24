import Navbar from "../../Shared/Navbar";
import Banner from "./Banner/Banner";
import Featureds from "./Featured/Featureds";
import Trendings from "./Trendings/Trendings";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Featureds></Featureds>
            <Trendings></Trendings>
        </div>
    );
};

export default Home;