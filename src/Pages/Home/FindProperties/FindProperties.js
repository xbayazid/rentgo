import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import PropertyCard from '../../../components/PropertyCard/PropertyCard';
import Loader from '../../../components/Loader/Loader';

const FindProperties = () => {
    const [properties, setProperties] = useState([]);
    useEffect(() => {
        fetch('https://rentgo-server.vercel.app/properties')
            .then(res => res.json())
            .then(data => setProperties(data.reverse().slice(0, 6)))
    }, [])

    if(properties.length < 1){
        return <Loader />
    }

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