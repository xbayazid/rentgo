import React, { useState } from 'react';

import { Autocomplete, GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import Loader from '../Loader/Loader';

const center = {
    lat: 23.8041,
    lng: 90.4152
}

const SingleMap = () => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyB4z7wDpFbNQsMR4JzmorXynCL8Ia83E_4",
        // libraries: ['places'],

    })

    // const [map, setMap] = useState(/**@type google.maps.Map */ (null))

    if (!isLoaded) {
        return <Loader />
    }
    return (
        <div className='w-full'>
            <GoogleMap
                center={center}
                zoom={15}
                mapContainerStyle={{ width: '100%', height: '400px' }}
                options={{
                    zoomControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                }}
                // onLoad={map => setMap(map)}
            >
                <Marker position={center} />
            </GoogleMap>

            {/* <form className='mt-20'>
                <Autocomplete>

                <input 
                type="text" 
                className='outline-2 border-2 border-sky-400'
                placeholder='Origin'
                />
                </Autocomplete>
                <Autocomplete>
                <input 
                type="text" 
                className='outline-2 border-2 border-sky-400' 
                placeholder='Destination'
                // ref={destination}
                />
                </Autocomplete>
            </form> */}
        </div>
    );
};

export default SingleMap;