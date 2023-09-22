import React from 'react';
import PropertyDescription from './PropertyDescription/PropertyDescription';
import PropertyGallery from './PropertyGallery/PropertyGallery';
import PropertyVideo from './PropertyVideo/PropertyVideo';
import PropertyOffers from './PropertyOffers/PropertyOffers';
import PropertyPlan from './PropertyPlan/PropertyPlan';
import RecentlyAdded from './RecentlyAdded/RecentlyAdded';
import PropertyReviews from './PropertyReviews/PropertyReviews';

const PropertyDetailsBody = ({property}) => {
    const { _id, description, gallery } = property;
    return (
        <div className='flex gap-8 mx-[7%] justify-between'>
            <div className='w-[60%]'>
                <PropertyDescription description= {description}/>
                <PropertyGallery gallery={gallery}/>
                <PropertyVideo/>
                <PropertyOffers property={property}/>
                <PropertyPlan/>
                <PropertyReviews id={_id}/>
            </div>
            <div className='w-[40%] h-[500px] sticky top-2'>
                <RecentlyAdded/>
            </div>
        </div>
    );
};

export default PropertyDetailsBody;