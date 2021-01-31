import React from "react";
import GoogleMapReact from 'google-map-react';
import './index.css'

// key AIzaSyAoO7BkNknLbtgbKd7O-UufuNTtufJ6FTo
const Pin = () => {
    return <i id="pin-icon" className="fal fa-map-pin" style={{fontSize: '30px', color: 'rgba(30, 130, 76, 1)'}}></i>;
}
const GoogleMap = ({venue}) => {

    // careful of padding and margin
    const defaultProps = {
        center: {
          lat: Number(venue.latitude),
          lng: Number(venue.longitude)
        },
        zoom: 11
    }
            return (
              <div className="map" style={{ height: '398px', width: '412px' }}>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: "AIzaSyAoO7BkNknLbtgbKd7O-UufuNTtufJ6FTo" }}
                  center={defaultProps.center}
                  defaultZoom={9}
                >
                <Pin lat={defaultProps.center.lat} lng={defaultProps.center.lng}/>
                </GoogleMapReact>
              </div>
            );

}

export default GoogleMap;
