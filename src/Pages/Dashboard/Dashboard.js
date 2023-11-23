import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import Loader from '../../components/Loader/Loader';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };


    const bookingUrl = `https://rentgo-server.vercel.app/bookings?email=${user.email}`
    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['booking'],
        queryFn: async () => {
            const res = await fetch(bookingUrl, {
                headers: {
                    authorization: `bearer ${localStorage.getItem("accessToken")}`,
                },
            });
            const data = await res.json();
            return data;
        }
    });

    console.log(bookings);

    const url = `https://rentgo-server.vercel.app/transportBooking?email=${user?.email}`

    const { data: transports = [] } = useQuery({
        queryKey: ['transport'],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem("accessToken")}`,
                },
            });
            const data = await res.json();
            return data;
        }
    })

    if(isLoading){
        return <Loader/>
    }

    return (
        <div>
            <div className="grid grid-cols-2">
                <div
                    onClick={() => handleTabClick(1)}
                    className={`cursor-pointer text-center px-4 py-2 ${activeTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                        }`}
                >
                    House Bookings
                </div>
                <div
                    onClick={() => handleTabClick(2)}
                    className={`cursor-pointer text-center px-4 py-2 ${activeTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                        }`}
                >
                    Transport Bookings
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
                                        <th>Image</th>
                                        <th>Property Name</th>
                                        <th>Tour Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                        bookings.map((booking, i) => (
                                            <tr key={i} className="hover">
                                        <th>{i+1}</th>
                                        <td>
                                            <Link to={`/propertyDetails/${booking.propertyId}`}><img src={booking.propertyImage} alt="" className='w-[200px]'/></Link>
                                        </td>
                                        <td><Link to={`/propertyDetails/${booking.propertyId}`} className='hover:text-blue-600'>{booking.propertyName}</Link></td>
                                        <td>{booking.tourDate}</td>
                                        
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
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Booking Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        transports.map((transport, i) => (
                                            <tr key={i} className="hover">
                                        <th>{i+1}</th>
                                        <td>{transport.name}</td>
                                        <td>{transport.phone}</td>
                                        <td>{transport.email}</td>
                                        <td>{transport.date}</td>
                                    </tr>
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

export default Dashboard;