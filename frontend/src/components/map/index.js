import React from "react";
import GoogleMapReact from 'google-map-react';


const Pin = () => {
    return <i id="pin-icon" className="fad fa-map-pin" style={{fontSize: '35px', color: 'rgba(30, 130, 76, 1)'}}></i>;
}
const SingleVenueMap = ({venue}) => {

    const defaultProps = {
        center: {
          lat: Number(venue.latitude),
          lng: Number(venue.longitude)
        },
        zoom: 9
    }
            return (
              <div className="map" style={{ height: '420px', width: '450px', borderRadius: "25px" }}>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY}}
                  center={defaultProps.center}
                  defaultZoom={9}
                >
                <Pin lat={defaultProps.center.lat} lng={defaultProps.center.lng}/>
                </GoogleMapReact>
              </div>
            );

}

export default SingleVenueMap;
