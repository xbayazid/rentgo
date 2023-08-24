import React from 'react';

const PropertyVideo = () => {
    return (
        <div className='bg-white shadow-md rounded p-5 mt-8'>
            <h2 className="text-2xl font-semibold">Property Video</h2>
            
            <iframe className='w-full mt-5' width="" height="400" src="https://www.youtube.com/embed/v_ATnE02qFs?si=qwxlJbWguFLwHLYJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    );
};

export default PropertyVideo;