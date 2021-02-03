import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import * as venueActions from "../../store/venues";
import AmenityIcon from '../AmenityIcon';
import SingleVenueMap from '../map/index';
import ReviewFormModal from '../modal'
import "./VenueInfo.css";

const VenueInfo = () => {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const [bookingDate, setBookingDate] = useState("");
  // const [numGuests, setNumGuests] = useState(0);

  const dispatch = useDispatch();
  const { venueId } = useParams();

  useEffect(() => {
    dispatch(venueActions.getVenueInfo());
  }, [dispatch]);

  // const userId = useSelector((state) => state.session.user ? state.session.user.id : null)
  const venues = useSelector((state) => state.venueInfo.venues);


  let venue;
  if (venues) venue = venues.find((venue) => venue.id === Number(venueId));
  if (!venue) return null;



  const onSubmit = () => {
    // dispatch(bookingActions.createBooking({ userId, venueId, bookingDate, numGuests}))
    history.push('/');
  }

  return (
    <>
    {showModal && <ReviewFormModal setShowModal={setShowModal} />}
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

          <form className='booking-form' onSubmit={onSubmit}>
          <div className='pricing'>
            <div className="price">{`$${venue.averagePrice}`}</div>
            <div className='price-per'>(for 50 guests)</div>
          </div>
            <div>
              <input
                className='date-picker'
                value={bookingDate}
                type="date"
                onChange={(event)=> setBookingDate(event.target.value)}
              />
              <input
                className="guest-picker"
                type='number'
                placeholder="Guests(below cap)"
                // value={numGuests}
                // onChange={(event) => setNumGuests(event.target.value)}
              />

            </div>
            <button className='book-button' type="submit">Request Venue</button>
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
          <div className="description-box">
            <h3 className="description-header">Description</h3>
            <div className="venue-description">{venue.description}</div>
          </div>
        </div>
        <div className='google-maps-api'>
          <div className="the-map">
            {venue.latitude && <SingleVenueMap venue={venue} />}
          </div>
        </div>
        <div className='amenities-container'>
          <h3 className='amenity-title'>Amenities</h3>
          {venue.Amenities &&
          venue.Amenities.map((amenity) => (
            <ul className="amenities-list" key={amenity.id}>
              <div className='amenity-icon'><AmenityIcon  amenity={amenity}/></div>
            </ul>
          ))}
        </div>
        <div className='reviews-container'>
          <div className="review-header-container">
            <h3 className="review-header">Reviews</h3>
            <button onClick={(event) => {setShowModal(true); console.log(showModal)}} className="review-button">Add a review</button>
          </div>
          {venue.Reviews &&
          venue.Reviews.map((review) => (
            <div className="review" key={review.id}>
              <table className="review-table">
                <tbody>
                  <tr className="row-1">
                    <td className="revew-userName">{review.User.username}</td>
                    {review.verifiedBooking ?
                    <td>Verified booking<i id="checkmark" className="fas fa-check-square"></i></td> : <td className="verified">Not Verified</td>}
                    <td>{`Rating:${review.rating}/10`}</td>
                  </tr>
                  <tr>
                    <td className="row-2">Title: {review.title}</td>
                  </tr>
                  <tr>
                    <td colSpan='3'>{review.body}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default VenueInfo;
