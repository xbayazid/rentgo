import React from 'react';
import plan from '../../../../assets/images/plan-1.jpg'

const PropertyPlan = () => {
    return (
        <div className='bg-white shadow-md rounded p-5 mt-8'>
            <h2 className="text-2xl font-semibold">Property Plan</h2>
            
            <img src={plan} alt="" />
        </div>
    );
};

export default PropertyPlan;