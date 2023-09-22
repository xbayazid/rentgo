import React from 'react';
// import banner from '../../../assets/images/property_header_1.jpg'
import { HiOutlineLocationMarker } from "react-icons/hi";

const PropertyDetailsBanner = ({property}) => {
    const {image, propertyName, location, authorImage, ownerName, rent} = property;
    return (
        <div className="h-[65vh] relative mb-[100px] px-[7%]" style={{backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover"}}>
            <div className='w-[85%] mx-auto bg-white p-5 rounded absolute -bottom-[80px] shadow-md flex justify-between items-center'>
                <div >
                    <h2 className="text-3xl font-semibold">{propertyName}</h2>
                    <p className='flex items-center gap-2 my-3'><HiOutlineLocationMarker className='text-blue-800'/><span className='text-gray-600'>{location}</span></p>
                    <div className='flex gap-3 items-center'>
                        <img src={authorImage} alt="" className='rounded-full h-12 w-12'/>
                        <h5 className="text-xl font-semibold">{ownerName}</h5>
                    </div>
                </div>
                <div>
                    <p>Stats From / <span className='text-2xl font-semibold text-blue-500'>৳{rent}</span></p>
                    
                </div>
            </div>
        </div>
    );
};

export default PropertyDetailsBanner;