import React from 'react';
import condo from '../../../assets/images/condo.png';
import apartment from '../../../assets/images/apartment.png';
import villa from '../../../assets/images/villa.png';
import home from '../../../assets/images/home.png';

const Featured = () => {
    return (
        <div className='w-[80%] mx-auto grid grid-cols-4 gap-6 my-12'>
            <div className='border text-center flex justify-center items-center flex-col p-5 hover:shadow-xl duration-500 rounded-md'>
                <img src={condo} alt="" />
                <h5 className='text-purple-600 text-xl'>Condominium</h5>
                <p>45 Listing</p>
            </div>
            <div className='border text-center flex justify-center items-center flex-col p-5 hover:shadow-xl duration-500 rounded-md'>
                <img src={apartment} alt="" />
                <h5 className='text-purple-600 text-xl'>Apartment</h5>
                <p>45 Listing</p>
            </div>
            <div className='border text-center flex justify-center items-center flex-col p-5 hover:shadow-xl duration-500 rounded-md'>
                <img src={home} alt="" />
                <h5 className='text-purple-600 text-xl'>Home</h5>
                <p>45 Listing</p>
            </div>
            <div className='border text-center flex justify-center items-center flex-col p-5 hover:shadow-xl duration-500 rounded-md'>
                <img src={villa} alt="" />
                <h5 className='text-purple-600 text-xl'>Villa</h5>
                <p>45 Listing</p>
            </div>
        </div>
    );
};

export default Featured;