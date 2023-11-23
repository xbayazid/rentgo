import React from 'react';
import { Link } from 'react-router-dom';

const PropertyDescription = ({property}) => {
    const {location} = property;
    const splite = location.split(",");
    const house = splite[0].split(" ")[1];
    const road = splite[1].split(" ")[3];
    const sector = splite[2].split(" ")[1].split("-")[1];
    return (
        <div className='bg-white shadow-md rounded p-5 mt-8'>
            <h2 className="text-2xl font-semibold">Description</h2>
            <p className='text-justify mt-4 text-[#888]'>{property.description}</p>

            <h2 className="text-2xl font-semibold my-8">Location</h2>
            <div className="grid grid-cols-3 mt-4 gap-5">
                <div>
                    <p>Area: <span className='text-[#888]'>{property.area}</span></p>
                    <p>Sector: <span className='text-[#888]'>{sector}</span></p>
                </div>
                <div>
                    <p>Road : <span className='text-[#888]'>{road}</span></p>
                    <p>House NO : <span className='text-[#888]'>{house}</span></p>
                </div>
                <div>
                    <p>Country : <span className='text-[#888]'>Bangladesh</span></p>
                    <p>City <span className='text-[#888]'>Dhaka</span></p>
                </div>
            </div>
            {/* <a href='#map' className='text-blue-500'> View in Google Map</a> */}

        </div>
    );
};

export default PropertyDescription;