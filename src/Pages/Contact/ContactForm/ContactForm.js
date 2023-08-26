import React from 'react';
import { Link } from 'react-router-dom';

const ContactForm = () => {
    return (
        <div className='bg-blue-500 text-white py-14'>
            <div className='text-center'>
                <h1 className='text-5xl font-bold'>We're ready to scale when you are</h1>
                <p className='mb-7'>Join over 4,000+ property already registered here.</p>
                <div className='lg:flex justify-center gap-7 items-center'>
                    <Link to='/about' className='border border-white p-2 rounded-md'>Learn More</Link>
                    <Link to='/signup' className='bg-white p-2 text-blue-700 rounded-md'>Create account</Link>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;