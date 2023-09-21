import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineLocationMarker, HiOutlineCheckCircle, HiOutlineStar } from "react-icons/hi";
import { useState } from 'react';
import { useEffect } from 'react';
import PropertyCard from '../../../components/PropertyCard/PropertyCard';

const FindProperties = () => {
    const [properties, setProperties] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/houses')
            .then(res => res.json())
            .then(data => setProperties(data.slice(0, 6)))
    }, [])

    console.log(properties);
    return (
        <div className='my-5'>
            <h1 className='text-center text-2xl font-semibold'>Find Properties</h1>
            <div className="my-6 mx-8">
                <div className="grid gap-5 lg:grid-cols-3">
                    {
                        properties.map((property) => <PropertyCard key={property._id} property={property} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default FindProperties;