import React from 'react';
import property from '../../../../assets/images/property_2.jpg'
import { Link } from 'react-router-dom';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useQuery } from '@tanstack/react-query';

const RecentlyAdded = () => {
    const {data: proerties = []} = useQuery({
        queryKey: ['property'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/properties');
            const data = res.json();
            return data;
        }
    });
    const reverse = [...proerties].reverse().slice(0,3);
    return (
        <div className='bg-white shadow-md rounded p-5 mt-8'>
            <h2 className="text-2xl font-semibold">Recently Added</h2>
            
            
            {
                reverse.map(property =>(
                    <div className='flex gap-3 items-center mt-5'>
                <img src={property.image} alt=""  className='w-[100px] h-[80px]'/>
                <div>
                <Link to={`/propertyDetails/${property._id}`} className="text-lg hover:text-blue-700">{property.propertyName}</Link>
                <p className='flex items-center gap-2'><HiOutlineLocationMarker className='text-blue-800'/><span className='text-gray-600'>{property.location}</span></p>
                <p><span className='text-blue-400'>৳{property.rent}</span> / month</p>
                </div>
            </div>
                ) )
            }
        </div>
    );
};

export default RecentlyAdded;