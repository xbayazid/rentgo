import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const AllBookings = () => {
    const { user, loading } = useContext(AuthContext);
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };


    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['booking'],
        queryFn: async () => {
            const res = await fetch('https://rentgo-server.vercel.app/allBookings/');
            const data = await res.json();
            return data;
        }
    });

    const url = `https://rentgo-server.vercel.app/allTransportBookings`

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
                                        <th>Property Name</th>
                                        <th>Booking Name</th>
                                        <th>Booking Email</th>
                                        <th>Booking Phone</th>
                                        <th>Booking NID</th>
                                        <th>Tour Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        bookings.map((booking, i) => (
                                            <tr key={i} className="hover">
                                                <th>{i + 1}</th>
                                                <td>{booking.propertyName}</td>
                                                <td>{booking.name}</td>
                                                <td>{booking.email}</td>
                                                <td>{booking.phone}</td>
                                                <td>{booking.nid}</td>
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
                                        <th>From</th>
                                        <th>To</th>
                                        <th>Booking Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        [...transports].reverse().map((transport, i) => (
                                            <tr key={i} className="hover">
                                                <th>{i + 1}</th>
                                                <td>{transport.name}</td>
                                                <td>{transport.phone}</td>
                                                <td>{transport.email}</td>
                                                <td>{transport.shiftFrom}</td>
                                                <td>{transport.shiftTo}</td>
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

export default AllBookings;