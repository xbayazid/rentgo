import React from 'react';

const PropertyVideo = ({video}) => {
    return (
        <div className='bg-white shadow-md rounded p-5 mt-8'>
            <h2 className="text-2xl font-semibold">Property Video</h2>
            
            <video src={video} controls height={500} width={600} className='mx-auto rounded-md mt-5'></video>
        </div>
    );
};

export default PropertyVideo;