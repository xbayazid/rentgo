import React from 'react';
import { HiOutlineCheckCircle } from "react-icons/hi";

const PropertyOffers = ({property}) => {
    const {_id, propertyType, propertyStatus, rent, room, bedroom, bath, garage, size} = property;
    return (
        <div className='bg-white shadow-md rounded p-5 mt-8'>
            <h2 className="text-2xl font-semibold mt-8">Property Details</h2>
            <div className="grid grid-cols-3 mt-4 gap-5">
                <div>
                    <p>Property ID : <span className='text-[#888]'>{_id}</span></p>
                    <p>Property Type : <span className='text-[#888]'>{propertyType}</span></p>
                    <p>Property status : <span className='text-[#888]'>{propertyStatus}</span></p>
                </div>
                <div>
                    <p>Property Price : <span className='text-[#888]'>৳{rent}/month</span></p>
                    <p>Rooms :  <span className='text-[#888]'>{room}</span></p>
                    <p>Bedrooms:  <span className='text-[#888]'>{bedroom}</span></p>
                </div>
                <div>
                    <p>Bath: <span className='text-[#888]'>{bath}</span></p>
                    <p>Garages: <span className='text-[#888]'>{garage}</span></p>
                    <p>Size: <span className='text-[#888]'>{size} sq ft</span></p>
                </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8">Amenities</h2>
            <div className="grid grid-cols-3 mt-4 gap-5">
                <div>
                    <p className='flex items-center gap-2'><HiOutlineCheckCircle />basketball court</p>
                    <p className='flex items-center gap-2'><HiOutlineCheckCircle />No Smoking zone</p>
                    <p className='flex items-center gap-2'><HiOutlineCheckCircle />Free Parking on premises</p>
                    <p className='flex items-center gap-2'><HiOutlineCheckCircle />Air Conditioned</p>
                </div>
                <div>
                    <p className='flex items-center gap-2'><HiOutlineCheckCircle />basketball court</p>
                    <p className='flex items-center gap-2'><HiOutlineCheckCircle />No Smoking zone</p>
                    <p className='flex items-center gap-2'><HiOutlineCheckCircle />Free Parking on premises</p>
                    <p className='flex items-center gap-2'><HiOutlineCheckCircle />Air Conditioned</p>
                </div>
                <div>
                    <p className='flex items-center gap-2'><HiOutlineCheckCircle />basketball court</p>
                    <p className='flex items-center gap-2'><HiOutlineCheckCircle />No Smoking zone</p>
                    <p className='flex items-center gap-2'><HiOutlineCheckCircle />Free Parking on premises</p>
                    <p className='flex items-center gap-2'><HiOutlineCheckCircle />Air Conditioned</p>
                </div>
            </div>

        </div>
    );
};

export default PropertyOffers;