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
          <div className='card-image' >
            <h1 className="venue-name">{venue.name}</h1>
            <img className="image" src={venue.imgUrl} alt="hidden"></img>
          </div>
        </div>
        <div className='bookingForm-googleMaps'>
          <form className='booking-form'>
          <div className="price">{`Average price: $${venue.averagePrice}`}</div>
            <div>
              <input
                  className='email-input'
                  type="date"
                  // value={credential}
                  // onChange={(e) => setCredential(e.target.value)}
                  required
                />
            </div>
            <button className='book-button' type="submit">Book Venue</button>
          </form>
          <div className='google-maps-api'>
            {/* google maps box */}
          </div>
        </div>
        <div className="venue-items-container">
          <div className="city-state">{`Location: ${venue.city}, ${venue.state}`}</div>
          <div className="guests">{`Max number of guests: ${venue.maxNumberGuests}`}</div>
          {/* <li className="zipcode">{`Zipcode: ${venue.zipCode}`}</li>
          <li className="gpsLocation">{`Cooridinates: ${venue.gpsLocation}`}</li> */}
        </div>
        <div className="description-container">
          <h1 className="description-title">Description:</h1>
          <div className="venue-description">{venue.description}</div>
        </div>
        <div className='amenities-container'>
          <h1 className="description-title">Amenities:</h1>
          <p>this is the amenities area</p>
          {/* <div></div> for the amenities */}
        </div>
        <div className='reviews-container'>
          <h1 className="description-title">Reviews:</h1>
          {/* <div></div> for the reviews */}
        </div>
        <div className='background-cover'></div>
        <div className='background-cover-2'></div>
        <div className='background-cover-3'></div>
        <div className='background-cover-4'></div>
        <div className='background-cover-5'></div>
      </div>
    </div>
  );
};

export default FullDetails;
