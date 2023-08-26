import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowSmRight } from "react-icons/hi";

const Explore = () => {
    return (
        <div className='bg-gray-300 px-5 py-14'>
            <div className='mx-[7%] lg:flex justify-between items-center'>
                <div>
                    <h1 className='text-3xl lg:text-6xl font-bold'>Looking for the best dream home?</h1>
                </div>
                <div>
                    <Link className='bg-orange-950 text-white p-4 flex items-center gap-2'>Explore More <HiArrowSmRight/></Link>
                </div>
            </div>
        </div>
    );
};

export default Explore;