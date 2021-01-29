import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import * as venueActions from "../../store/venues";
import AmenityIcon from '../AmenityIcon';
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
        <div className='venue-detail-title'>
            <h1 className="venue-name">{venue.name}</h1>
        </div>
        <div className="image-container">
          <div className='card-image' >
            <img className="image" src={venue.imgUrl} alt="hidden"></img>
          </div>
        </div>
        <div className='bookingForm'>
          <form className='booking-form'>
          <div className='pricing'>
            <div className="price">{`$${venue.averagePrice}`}</div>
            <div className='price-per'>(for 50 guests)</div>
          </div>
            <div>
              <input
                className='date-picker'
                type="date"
              />
              <input
                className="guest-picker"
                type='number'
                placeholder="Guests(below cap)"
              // controlled input for error on over cap
              />

            </div>
            <button className='book-button' type="submit">Book Venue</button>
          </form>
        </div>
        <div className="venue-items-container">
          <div className='item-content'>
            <h3 className="location">Location:</h3>
            <div className='spacer-1'></div>
            <div className="city-state">{venue.city}, {venue.state}</div>
            <div className='spacer-2'></div>
            <h3 className="capacity">Capacity:</h3>
            <div className='spacer-3'></div>
            <div className="guests">{venue.maxNumberGuests}</div>
          </div>
        </div>
        <div className="description-container">
          <h1 className="description-title">Description:</h1>
          <div className="venue-description">{venue.description}</div>
        </div>
        <div className='amenities-container'>
          <h1 className="description-title">Amenities:</h1>
          {venue &&
          venue.Amenities.map((amenity) => (
            <li><AmenityIcon  amenity={amenity}/></li>
          ))}
        </div>
        <div className='reviews-container'>
          <h1 className="description-title">Reviews:</h1>
          {venue &&
          venue.Reviews.map((review) => (
            <div className="review" key={review.id}>
              <ul>
                <li>{review.verifiedBooking}</li>
                <li>{review.title}</li>
                <li>{review.body}</li>
                <li>{review.rating}</li>
              </ul>
            </div>
          ))}
        </div>
        <div className='google-maps-api'>
            {/* google maps box */}
        </div>
      </div>
    </div>
  );
};

export default FullDetails;
