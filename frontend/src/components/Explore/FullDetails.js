import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import * as venueActions from "../../store/venues";
import AmenityIcon from '../AmenityIcon';
// import  Map  from '../map';
import ReviewFormModal from '../modal'
import "./fullDetails.css";

const FullDetails = () => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const { venueId } = useParams();
// o useState for guests
  useEffect(() => {
    dispatch(venueActions.getVenueInfo());
  }, [dispatch]);

  const venues = useSelector((state) => state.venueInfo.venues);

  let venue;
  if (venues) venue = venues.find((venue) => venue.id === Number(venueId));
  if (!venue) return null;

  // const showReviewForm = () => {
  //   setShowModal(true);
  // }

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
              // max
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
            {/* <Map /> */}
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
                  <tr>
                    <td id="row-1" className="revew-userName">{review.User.username}</td>
                    {review.verifiedBooking ?
                    <td id="row-1">Verified booking<i id="checkmark" className="fas fa-check-square"></i></td> : <p>Not Verified</p>}
                    <td id="row-1">{`Rating:${review.rating}/10`}</td>
                  </tr>
                  <tr>
                    <td className="row-2">{review.title}</td>
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

export default FullDetails;
