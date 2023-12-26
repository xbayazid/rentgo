import React from 'react';
import propertyValuation from '../../../assets/images/property-valuation.jpg';

const PropertyValuation = () => {
    return (
        <div className='py-16 w-full text-center ' style={{backgroundImage:`linear-gradient(rgba(18, 17, 17, 0.5), rgba(25, 23, 23, 0.5)), url(${propertyValuation})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center"}}>
            <div className='w-[60%] mx-auto text-white'>
            <p>Get a property Valuation</p>
            <h2 className="text-3xl font-semibold my-3">How much is my property worth?</h2>
            <p className="text-xl">The first step in selling your property is to get a valuation from local experts. They will inspect your home and take into account its unique features, the area and market conditions before providing you with the most accurate valuation.</p>
            {/* <div className='text-black mt-5'>
                <input type="text" className='w-[60%] p-3' placeholder='Enter Property Address here...' />
                <input type="submit" className='bg-orange-500 py-3 px-5 cursor-pointer text-white' name="" value="Price My Property" />
            </div> */}
            </div>
        </div>
    );
};

export default PropertyValuation;