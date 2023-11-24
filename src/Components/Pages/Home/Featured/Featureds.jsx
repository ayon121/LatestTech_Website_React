import Title from "../../../Shared/Title";
import Featured from "./Featured";


const Featureds = () => {
    return (
        <div>
            <Title title={'Featured Products'}></Title> 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4 gap-4 mb-10">
                <Featured></Featured>
                <Featured></Featured>
                <Featured></Featured>
                <Featured></Featured>
                <Featured></Featured>
            </div>  
        </div>
    );
};

export default Featureds;