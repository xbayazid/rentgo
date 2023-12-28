import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const MyPropertyBookings = () => {
    const { user } = useContext(AuthContext)
    const { data: bookings = [] } = useQuery({
        queryKey: ['booking', user.email],
        queryFn: async () => {
            const res = await fetch(`https://rentgo-server.vercel.app/myPropertyBooking?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })
    console.log(bookings)
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
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
                            [...bookings].reverse().map((booking, i) => (
                                <tr key={i} className="hover">
                                    <th>{i + 1}</th>
                                    <td>
                                    <Link to={`/propertyDetails/${booking.propertyId}`}><img src={booking.propertyImage} alt="" className='w-[200px]' /></Link>
                                </td>
                                    <td><Link to={`/propertyDetails/${booking.propertyId}`}>{booking.propertyName}</Link></td>
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
    );
};

export default MyPropertyBookings;