import React from "react";
import { GoogleMap, Marker, LoadScript} from '@react-google-maps/api';

const containerStyle = {
  width: '448px',
  height: '402px'
};

const SingleVenueMap = ({venue}) => {

const center = {
  lat: Number(venue.latitude),
  lng: Number(venue.longitude)
}

    return (
      <LoadScript googleMapsApiKey={process.env.REACT_APP_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={9}
        >
          <Marker position={{lat: Number(venue.latitude), lng: Number(venue.longitude)}}/>
        </GoogleMap>
      </LoadScript>
    );

}

export default SingleVenueMap;
