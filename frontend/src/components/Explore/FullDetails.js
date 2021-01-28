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
    <div className="venue-details-page">
      <div className='details-grid'>
        <div className="image-title-container">
          <h1 className="venue-name">{venue.name}</h1>
          <img src={venue.imgUrl} alt="hidden"></img>
        </div>
        <div className='bookingForm-googleMaps'>
          <form className='booking-form'>
            <h3 className='booking-form-title'>Book</h3>
          </form>
          <div className='google-maps-api'>
            {/* google maps box */}
          </div>
        </div>
        <div className="venue-items-container">
          <li className="city-state">{`${venue.city}, ${venue.state}`}</li>
          <li className="price">{`Average cost: $${venue.averagePrice}`}</li>
          <li className="guests">{`Max number of guests: ${venue.maxNumberGuests}`}</li>
          {/* <li className="zipcode">{`Zipcode: ${venue.zipCode}`}</li>
          <li className="gpsLocation">{`Cooridinates: ${venue.gpsLocation}`}</li> */}
        </div>
        <div className="description-container">
          <div className="venue-description">{venue.description}</div>
        </div>
        <div className='amenities-container'>
          {/* <div></div> for the amenities */}
        </div>
        <div className='reviews-container'>
          {/* <div></div> for the reviews */}
        </div>
      </div>
    </div>
  );
};

export default FullDetails;
