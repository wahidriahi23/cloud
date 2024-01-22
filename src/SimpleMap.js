import React from "react";
import GoogleMapReact from 'google-map-react';

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 35.8288175,
      lng: 10.6405392,
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '500px', width: '500px',margin:'auto' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBB9B-Rk8go54u0Ty2z-gNS28IhIQbG_lg" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >

      </GoogleMapReact>
    </div>
  );
}
