import React from 'react';
import { HiChatAlt, HiOutlineTrendingUp, HiUserGroup } from "react-icons/hi";

const Offer = () => {
    return (
        <div className='mb-5 bg-pink-100 px-5 py-14'>
            <div className='mx-[7%]'>
                <div className='text-center mb-5'>
                    <h1 className='text-5xl font-bold mb-3'>What we do for you</h1>
                    <p className='lg:w-1/2 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, facere? Asperiores corporis sunt at ducimus.</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                    <div className='bg-white px-4 py-9 text-center lg:w-3/4 rounded-md'>
                        <HiChatAlt className='text-5xl bg-pink-100 rounded-md p-2 w- mx-auto'/>
                        <h1 className='text-3xl font-semibold my-3'>Communication</h1>
                        <p>Whether its an apartment in the historic Gaslamp District.</p>
                    </div>
                    <div className='bg-white px-4 py-9 text-center lg:w-3/4 rounded-md'>
                        <HiUserGroup className='text-5xl bg-pink-100 rounded-md p-2 w- mx-auto'/>
                        <h1 className='text-3xl font-semibold my-3'>Families</h1>
                        <p>Whether its an apartment in the historic Gaslamp District.</p>
                    </div>
                    <div className='bg-white px-4 py-9 text-center lg:w-3/4 rounded-md'>
                        <HiOutlineTrendingUp className='text-5xl bg-pink-100 rounded-md p-2 w- mx-auto'/>
                        <h1 className='text-3xl font-semibold my-3'>Quality First</h1>
                        <p>Whether its an apartment in the historic Gaslamp District.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;