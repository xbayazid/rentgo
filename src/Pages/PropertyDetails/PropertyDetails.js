import React from 'react';
import PropertyDetailsBanner from './PropertyDetailsBanner/PropertyDetailsBanner';
import PropertyDetailsBody from './PropertyDetailsBody/PropertyDetailsBody';
import Map from '../../components/Map/Map';
import { useLoaderData } from 'react-router-dom';

const PropertyDetails = () => {
    const property = useLoaderData();
    return (
        <div>
            <PropertyDetailsBanner property={property}/>
            <PropertyDetailsBody property={property}/>
            <Map/>
        </div>
    );
};

export default PropertyDetails;