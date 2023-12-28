import React from 'react';

const Skeleton = () => {
    return (
        <div className="flex items-center justify-center h-screen">
      <div className="p-8 bg-white shadow-lg rounded-md animate-pulse">
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
        </div>
        <div className="w-32 h-4 bg-gray-300 mb-2"></div>
        <div className="w-full h-4 bg-gray-300 mb-2"></div>
        <div className="w-24 h-4 bg-gray-300 mb-2"></div>
        <div>Please wait until upload</div>
        <div className="flex justify-end">
          <div className="w-16 h-8 bg-gray-300 mt-4"></div>
        </div>
      </div>
    </div>
    );
};

export default Skeleton;