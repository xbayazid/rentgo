import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import Map from '../../components/Map/Map';
import ContactCard from './ContactCard/ContactCard';

const Contact = () => {
    return (
        <div>
            <div className='text-center my-5'>
                <p className='text-blue-600'>Contact Us</p>
                <h1 className='text-5xl font-bold my-2'>Get in touch with our team</h1>
                <p>We have the team and know-how to help you scale 10x faster.</p>
            </div>
            {/* <Map/> */}
            <ContactCard/>
            <ContactForm/>
        </div>
    );
};

export default Contact;