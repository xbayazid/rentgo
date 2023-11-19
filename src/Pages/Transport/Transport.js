import React from 'react';
import TransportBanner from './TransportBanner/TransportBanner';
import TransportServices from './TransportServices/TransportServices';
import ShiftingProcess from './TransportBanner/ShiftingProcess/ShiftingProcess';

const Transport = () => {
    return (
        <div>
            <TransportBanner/>
            <TransportServices/>
            <ShiftingProcess/>
        </div>
    );
};

export default Transport;