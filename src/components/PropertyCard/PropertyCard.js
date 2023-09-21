import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineLocationMarker, HiOutlineCheckCircle, HiOutlineStar } from "react-icons/hi";

const PropertyCard = ({property}) => {
    const {_id, image, propertyName, location, rent, bedroom, bath, garage, size} = property;
    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                    className="w-full h-[250px]"
                    src={image} // Replace this URL with your actual image URL
                    alt="Card"
                />
                <div className="px-6 py-4">
                    <Link to={`/propertyDetails/${_id}`} className="text-xl hover:text-blue-700">{propertyName}</Link>
                    <div className='mt-3'>
                        <p className='flex items-center gap-2'><HiOutlineLocationMarker className='text-blue-800' /><span className='text-gray-600'>{location}</span></p>
                        <div className="my-2">
                            <div className="grid grid-cols-2">
                                <p className='flex items-center gap-2'><HiOutlineCheckCircle />{bedroom} Bedroom</p>
                                <p className='flex items-center gap-2'><HiOutlineCheckCircle />{size} sq ft</p>
                                <p className='flex items-center gap-2'><HiOutlineCheckCircle />{bath} Bath</p>
                                <p className='flex items-center gap-2'><HiOutlineCheckCircle />{garage} Garage</p>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <div className="grid lg:grid-cols-2">
                                <p className='flex items-center gap-2'><HiOutlineStar className='text-orange-300' />4.5</p>
                                <p className='text-xl font-medium text-blue-800'>৳ {rent}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;