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

  let venue;
  if (venues) venue = venues.find((venue) => venue.id === Number(venueId));
  if (!venue) return null;

  return (
    <div className="venue-detail-page">
      <div className='details-card'>
        <div className="image-form">
          <div className="image-form-details">
            <h1 className="venue-name">{venue.name}</h1>
            <div className="venue-items">
              <li className="city-state">{`${venue.city}, ${venue.state}`}</li>
              <li className="price">{`Average cost: $${venue.averagePrice}`}</li>
              <li className="guests">{`Max number of guests: ${venue.maxNumberGuests}`}</li>
              <li className="host">{`Owner: ${venue.host}`}</li>
              <li className="zipcode">{`Zipcode: ${venue.zipCode}`}</li>
              <li className="gpsLocation">{`Cooridinates: ${venue.gpsLocation}`}</li>
              {/* <li className="reservedDates">{venue.reservedDates}</li> */}
            </div>
          </div>
          <img src={venue.imgUrl} alt="hidden"></img>
        </div>
        <div className='description-booking'>
          <div className="description">
            <div className="venue-description">{venue.description}</div>
          </div>
          <form className='booking-form'>
            <h3 className='booking-form-title'>Book</h3>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FullDetails;
