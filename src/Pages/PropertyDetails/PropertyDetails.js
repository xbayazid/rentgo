import React from 'react';
import PropertyDetailsBanner from './PropertyDetailsBanner/PropertyDetailsBanner';
import PropertyDetailsBody from './PropertyDetailsBody/PropertyDetailsBody';
import Map from '../../components/Map/Map';

const PropertyDetails = () => {
    return (
        <div>
            <PropertyDetailsBanner/>
            <PropertyDetailsBody/>
            <Map/>
        </div>
    );
};

export default PropertyDetails;