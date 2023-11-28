import { useContext } from "react";
import Title from "../../Shared/Title";
import { AuthContext } from "../../../Providers/Authproviders";

import useSingleUser from "../../Hooks/useSingleUser";
import { Link } from "react-router-dom";



const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const [singleuserInfo] = useSingleUser()

    return (
        <div>
            <div>
                <Title title={'Profile'}></Title>
                <div className="font-inter">
                    <div className="text-xl font-bold text-center">
                        <div className="avatar">
                            <div className="w-24 rounded-full border-2 border-[#FF444A] ">
                                <img src={user?.photoURL} alt="img not found" />
                            </div>
                        </div>
                        <h1>Welcome {user?.displayName}</h1>
                    </div>
                    <div>

                        <h1 className="py-2 font-bold">UserName : {user?.displayName}</h1>
                        <h1 className="py-2 font-bold">Email : {user?.email}</h1>
                        <h1 className="py-2 font-bold"> Role : {singleuserInfo[0]?.userRole}</h1>
                        <h1 className="py-2 font-bold"> User Type : {singleuserInfo[0]?.userType} </h1>

                        {
                            singleuserInfo[0]?.userType === 'nonPaid' && <div className="flex gap-2 items-center mb-4">
                                <Link to="/dashboard/payment"><button className="btn text-[#FF444A]">Get Premium</button></Link>
                                <h1>$10 per month</h1>
                            </div>
                        }

                        {
                            singleuserInfo[0]?.userType === 'Paid' && <div className="flex gap-2 items-center mb-4">
                                <h1 className="text-2xl text-[#FF444A]">Verified User</h1>
                            </div>
                        }


                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;