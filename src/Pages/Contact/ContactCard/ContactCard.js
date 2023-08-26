import React from 'react';
import { HiChat, HiLocationMarker, HiPhone } from "react-icons/hi";

const ContactCard = () => {
    return (
        <div className='my-9 mx-[7%]'>
            <div className='grid lg:grid-cols-3 gap-6'>
                <div className='shadow-xl p-4 lg:w-2/3'>
                    <HiChat className='text-4xl mb-3 border border-gray-300 p-2 rounded-full'/>
                    <h4 className='font-bold'>Chat to support</h4>
                    <p className='my-2 text-gray-600'>We're here to help</p>
                    <p className='border p-2 rounded-md cursor-pointer w-2/3'>support@rentgo.com</p>
                </div>
                <div className='shadow-xl p-4 lg:w-2/3'>
                    <HiLocationMarker className='text-4xl mb-3 border border-gray-300 p-2 rounded-full'/>
                    <h4 className='font-bold'>Visit Us</h4>
                    <p className='my-2 text-gray-600'>Visit our office HQ.</p>
                    <p className='border p-2 rounded-md cursor-pointer w-2/3'>View on Google Map</p>
                </div>
                <div className='shadow-xl p-4 lg:w-2/3'>
                    <HiPhone className='text-4xl mb-3 border border-gray-300 p-2 rounded-full'/>
                    <h4 className='font-bold'>Call us</h4>
                    <p className='my-2 text-gray-600'>Mon-Fri from 8am to 5pm</p>
                    <p className='border p-2 rounded-md cursor-pointer w-2/3'>+1(555)000-000</p>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;