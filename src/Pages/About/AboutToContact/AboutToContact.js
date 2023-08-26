import React from 'react';
import { Link } from 'react-router-dom';

const AboutToContact = () => {
    return (
        <div className='mt-8 my-5'>
            <div className='lg:flex gap-6 items-center mx-[7%] mb-14'>
                <div>
                    <h1 className='text-3xl lg:text-6xl font-bold lg:w-[86%]'>Choose and realize the residence you desire</h1>
                </div>
                <div>
                    <p className='mb-5'>We are the platform for buying and selling houses, property that you dream of best company in this field</p>
                    <Link to='/contact' className='bg-blue-600 px-4 py-3 text-white rounded'>Contact Us</Link>
                </div>
            </div>
           <div>
           <img className='h-[90vh] w-full' src="https://i.ibb.co/PrrfG2F/about-1.jpg" alt="" />
           <video src=""></video>
           </div>
        </div>
    );
};

export default AboutToContact;