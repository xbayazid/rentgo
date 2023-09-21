import React from 'react';
import { Link } from 'react-router-dom';

const PropertyDescription = ({description}) => {
    return (
        <div className='bg-white shadow-md rounded p-5 mt-8'>
            <h2 className="text-2xl font-semibold">Description</h2>
            <p className='text-justify mt-4 text-[#888]'>{description}</p>

            <h2 className="text-2xl font-semibold my-8">Location</h2>
            {/* <div className="grid grid-cols-3 mt-4 gap-5">
                <div>
                    <p>Address: <span className='text-[#888]'>42 Albemarle st.</span></p>
                    <p>State / Country: <span className='text-[#888]'>Dhaka</span></p>
                </div>
                <div>
                    <p>Neighborhood : <span className='text-[#888]'>Andersonville</span></p>
                    <p>Zip/Postal Code : <span className='text-[#888]'>Dhaka</span></p>
                </div>
                <div>
                    <p>Country : <span className='text-[#888]'>Bangladesh</span></p>
                    <p>City <span className='text-[#888]'>Dhaka</span></p>
                </div>
            </div> */}
            <a href='#map' className='text-blue-500'> View in Google Map</a>

        </div>
    );
};

export default PropertyDescription;