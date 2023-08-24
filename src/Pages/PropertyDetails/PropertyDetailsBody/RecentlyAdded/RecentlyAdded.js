import React from 'react';
import property from '../../../../assets/images/property_2.jpg'
import { Link } from 'react-router-dom';
import { HiOutlineLocationMarker } from "react-icons/hi";

const RecentlyAdded = () => {
    return (
        <div className='bg-white shadow-md rounded p-5 mt-8'>
            <h2 className="text-2xl font-semibold">Recently Added</h2>
            
            <div className='flex gap-2 items-center mt-5'>
                <img src={property} alt=""  className='w-[100px] h-[70px]'/>
                <div>
                <Link to='/propertyDetails' className="text-lg hover:text-blue-700">Villa on Hartford</Link>
                <p className='flex items-center gap-2'><HiOutlineLocationMarker className='text-blue-800'/><span className='text-gray-600'>2854 Meadow View Drive, USA</span></p>
                <p><span className='text-blue-400'>৳20,000</span> / month</p>
                </div>
            </div>
            <div className='flex gap-2 items-center mt-5'>
                <img src={property} alt=""  className='w-[100px] h-[70px]'/>
                <div>
                <Link to='/propertyDetails' className="text-lg hover:text-blue-700">Villa on Hartford</Link>
                <p className='flex items-center gap-2'><HiOutlineLocationMarker className='text-blue-800'/><span className='text-gray-600'>2854 Meadow View Drive, USA</span></p>
                <p><span className='text-blue-400'>৳20,000</span> / month</p>
                </div>
            </div>
            <div className='flex gap-2 items-center mt-5'>
                <img src={property} alt=""  className='w-[100px] h-[70px]'/>
                <div>
                <Link to='/propertyDetails' className="text-lg hover:text-blue-700">Villa on Hartford</Link>
                <p className='flex items-center gap-2'><HiOutlineLocationMarker className='text-blue-800'/><span className='text-gray-600'>2854 Meadow View Drive, USA</span></p>
                <p><span className='text-blue-400'>৳20,000</span> / month</p>
                </div>
            </div>
        </div>
    );
};

export default RecentlyAdded;