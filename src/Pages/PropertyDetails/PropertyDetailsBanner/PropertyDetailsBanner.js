import React from 'react';
// import banner from '../../../assets/images/property_header_1.jpg'
import { HiOutlineLocationMarker } from "react-icons/hi";
import agent from '../../../assets/images/agent_min_1.jpg';

const PropertyDetailsBanner = () => {
    return (
        <div className="h-[65vh] bg-[url('https://i.ibb.co/C7svDDw/property-header-1.jpg')] bg-cover bg-center bg-no-repeat relative mb-[100px] px-[7%]">
            <div className='w-[85%] mx-auto bg-white p-5 rounded absolute -bottom-[80px] shadow-md flex justify-between items-center'>
                <div >
                    <h2 className="text-3xl font-semibold">Villa on Hartford</h2>
                    <p className='flex items-center gap-2 my-3'><HiOutlineLocationMarker className='text-blue-800'/><span className='text-gray-600'>2854 Meadow View Drive, Hartford, USA</span></p>
                    <div className='flex gap-3 items-center'>
                        <img src={agent} alt="" className='rounded-full h-12 w-12'/>
                        <h5 className="text-xl font-semibold">Tony Stark</h5>
                    </div>
                </div>
                <div>
                    <p>Stats From / <span className='text-2xl font-semibold text-blue-500'>৳20,000</span></p>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetailsBanner;