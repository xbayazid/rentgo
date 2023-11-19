import React from 'react';

const Loader = () => {
    return (
        <div className='relative min-h-screen'>
            <span className="loading loading-spinner loading-lg absolute top-1/2 left-1/2"></span>
        </div>
    );
};

export default Loader;