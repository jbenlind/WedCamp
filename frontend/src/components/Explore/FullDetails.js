import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import * as venueActions from "../../store/venues";
import "./fullDetails.css";

const FullDetails = () => {
  const dispatch = useDispatch();
  const { venueId } = useParams();

  useEffect(() => {
    dispatch(venueActions.getVenueInfo());
  }, [dispatch]);

  const venues = useSelector((state) => state.venueInfo.venues);

  const venue = venues.find((venue) => venue.id === Number(venueId));

  return (
    <div className="venue-detail-card">
      <img src={venue.imgUrl} alt="hidden"></img>
      <div class>
        <h1 className="name">{venue.name}</h1>
        <div className="city-state">{`${venue.city}, ${venue.state}`}</div>
        <div className="venue-description">{venue.description}</div>
      </div>
      <div className="details">
        <div className="zipcode">{`Zipcode: ${venue.zipCode}`}</div>
        <div className="gpsLocation">{`GPS Locations: ${venue.gpsLocation}`}</div>
        <div className="guests">{`Max number of guests: ${venue.maxNumberGuests}`}</div>
        <div className="price">{`Average cost: $${venue.averagePrice}`}</div>
        <div className="host">{`Venue Host: ${venue.host}`}</div>
        <div className="reservedDates">{venue.reservedDates}</div>
      </div>
    </div>
  );
};

export default FullDetails;
