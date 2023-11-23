import React from 'react';
import PropertyDetailsBanner from './PropertyDetailsBanner/PropertyDetailsBanner';
import PropertyDetailsBody from './PropertyDetailsBody/PropertyDetailsBody';
import Map from '../../components/Map/Map';
import { useLoaderData } from 'react-router-dom';

const PropertyDetails = () => {
    const property = useLoaderData();
    const {location, area }= property;
    return (
        <div>
            <PropertyDetailsBanner property={property}/>
            <PropertyDetailsBody property={property}/>
            <Map property={property}/>
        </div>
    );
};

export default PropertyDetails;