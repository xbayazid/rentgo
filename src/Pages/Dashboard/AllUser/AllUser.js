import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const AllUser = () => {
    const { user, loading } = useContext(AuthContext);
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };


    const { data: users = [], isLoading } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetch('https://rentgo-server.vercel.app/users/');
            const data = await res.json();
            return data;
        }
    });
    return (
        <div>
            <div className="grid grid-cols-4">
                <div
                    onClick={() => handleTabClick(1)}
                    className={`cursor-pointer text-center px-4 py-2 ${activeTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                        }`}
                >
                    All Users
                </div>
                <div
                    onClick={() => handleTabClick(2)}
                    className={`cursor-pointer text-center px-4 py-2 ${activeTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                        }`}
                >
                    Property Owners
                </div>
                <div
                    onClick={() => handleTabClick(3)}
                    className={`cursor-pointer text-center px-4 py-2 ${activeTab === 3 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                        }`}
                >
                    Owner Requested
                </div>
                <div
                    onClick={() => handleTabClick(4)}
                    className={`cursor-pointer text-center px-4 py-2 ${activeTab === 4 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                        }`}
                >
                    Admins
                </div>
                {/* Add more tabs as needed */}
            </div>

            <div className="mt-4">
                {activeTab === 1 &&
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((user, i) => (
                                            <tr key={i} className="hover">
                                                <th>{i + 1}</th>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                }
                {activeTab === 2 &&
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((user, i) => (
                                            
                                                user.role === 'owner' ? 
                                                <tr key={i} className="hover">
                                                <th></th>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>{ user?.role !== 'admin' && <button className='btn btn-xs text-white btn-error'>Delete</button>}</td>
                                            </tr>:
                                            <></>
                                            
                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                }
                {activeTab === 3 &&
                    <div>
                        <div className="overflow-x-auto">
                        <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Confirm</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((user, i) => (
                                            
                                                user.role === 'request' ? 
                                                <tr key={i} className="hover">
                                                <th></th>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>{ user?.role !== 'admin' && <button className='btn btn-xs text-white btn-success'>Confirm</button>}</td>
                                            </tr>:
                                            <></>
                                            
                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                }
                {activeTab === 4 &&
                    <div>
                        <div className="overflow-x-auto">
                        <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((user, i) => (
                                            
                                                user.role === 'admin' ? 
                                                <tr key={i} className="hover">
                                                <th></th>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>{ user?.role !== 'admin' && <button className='btn btn-xs text-white btn-error'>Delete</button>}</td>
                                            </tr>:
                                            <></>
                                            
                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                }
                {/* Add content for more tabs as needed */}
            </div>
        </div>
    );
};

export default AllUser;