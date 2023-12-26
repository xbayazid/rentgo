import React from 'react';
import empty from '../../assets/images/empty-result_shot.png'

const NoSearchFound = () => {
    return (
        <div>
            <img src={empty} alt="" className='h-screen w-screen'/>
        </div>
    );
};

export default NoSearchFound;