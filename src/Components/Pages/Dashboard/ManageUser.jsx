import { axiosSecure } from "../../Hooks/useAxiosSecure";
import useUserInfo from "../../Hooks/useUserInfo";
import Title from "../../Shared/Title";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const ManageUser = () => {
    const [userInfo, refetch] = useUserInfo()
    const handlemakeAdmin = user => {

        axiosSecure.patch(`/users/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    toast(`${user.name} is an Admin now`)
                    refetch()
                }
            })
    }
    const handlemakeModaretor = user => {

        axiosSecure.patch(`/users/modaretor/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    toast(`${user.name} is an Modaretor now`)
                    refetch()
                }
            })
    }

    return (
        <div className="font-inter">
            <Title title={'Manage Users'}></Title>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-11/12 mx-auto">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="text-[#FF444A]"> index</th>
                                <th className="text-[#FF444A]">Name</th>
                                <th className="text-[#FF444A]">UserType</th>
                                <th className="text-[#FF444A]">User Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userInfo.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user?.name}</td>
                                    <td>{user?.userType}</td>
                                    <td className="flex items-center">{user?.userRole}
                                        {
                                            user?.userRole === 'user' && <div>
                                                <button onClick={() => handlemakeAdmin(user)} className="btn btn-xs text-[#FF444A] mx-1">Make Admin</button>
                                                <button onClick={() => handlemakeModaretor(user)} className="btn btn-xs text-[#FF444A] mx-1">Make Modaretor</button>

                                            </div>
                                        }
                                        {
                                            user?.userRole === 'admin' && <div>
                                                <button onClick={() => handlemakeModaretor(user)} className="btn btn-xs text-[#FF444A] mx-1">Make Modaretor</button>
                                            </div>
                                        }
                                        {
                                            user?.userRole === 'modaretor' && <div>
                                                <button onClick={() => handlemakeAdmin(user)} className="btn btn-xs text-[#FF444A] mx-1">Make Admin</button>
                                            </div>
                                        }
                                        <div>


                                        </div>


                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default ManageUser;