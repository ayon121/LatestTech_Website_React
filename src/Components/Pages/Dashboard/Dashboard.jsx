import { useContext } from "react";
import Title from "../../Shared/Title";
import { AuthContext } from "../../../Providers/Authproviders";
import useUserInfo from "../../Hooks/useUserInfo";



const Dashboard = () => {
    const { user } = useContext(AuthContext)
    console.log(user);

    const [userInfo] = useUserInfo()
    console.log(userInfo);
    return (
        <div>
            <div>
                <Title title={'Profile'}></Title>
                <div className="font-inter">
                    <div className="text-xl font-bold text-center">
                        <h1>Welcome {user?.displayName || 'username'}</h1>
                    </div>
                    <div>
                        <h1 className="py-2 font-bold">Email : {user?.email || 'example@gmail.com'}</h1>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;