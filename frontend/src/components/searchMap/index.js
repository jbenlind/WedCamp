import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { GoogleMap, Marker, InfoWindow} from '@react-google-maps/api';
import './searchMap.css'

const containerStyle = {
  width: '1100px',
  height: '832px'
};

const center = {
  lat: 44.558755,
  lng: -89.296325
};

const SearchMap = () => {
  const venues = useSelector((state) => state.venueInfo.venues)
  const [selected, setSelected] = useState(null)

    return (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={7}
          onClick={() => setSelected(null)}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          {venues &&
          venues.map((venue) => (
            <Marker key={venue.id} onClick={() => setSelected(venue)} position={{lat: Number(venue.latitude), lng: Number(venue.longitude)}}/>
          ))}
          {selected &&
          <InfoWindow  position={{lat: Number(selected.latitude), lng: Number(selected.longitude)}}>
           <div>
              <Link className="marker-link" to={`/explore/${selected.id}`}>{selected.name}</Link>
              <p className="marker-info">{`Avg Price: $${selected.averagePrice}`}</p>
              <p className="marker-info">{`Capacity: ${selected.maxNumberGuests}`}</p>
           </div>
            </InfoWindow>}
          <></>
        </GoogleMap>

    )
}

export default SearchMap;
