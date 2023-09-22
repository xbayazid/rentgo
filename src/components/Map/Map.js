import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Marker } from '@react-google-maps/api';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


const Map = () => {
    const defaultProps = {
        center: {
          lat: 23.8041,
          lng: 90.4152
        },
        zoom: 11
      };
    return (
        // Important! Always set the container height explicitly
    <div style={{ height: '500px', width: '100%' }} id='map'>
    <GoogleMapReact
      bootstrapURLKeys={{ key: "" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent
        lat={23.8041}
        lng={90.4152}
        text="My Marker"
      />
    </GoogleMapReact>
  </div>
    );
};

export default Map;