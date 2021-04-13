import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import * as venueActions from "../../store/venues";
import * as bookingActions from "../../store/bookings"
import AmenityIcon from '../AmenityIcon';
import SingleVenueMap from '../map/index';
import ReviewFormModal from '../modal'
import { DatePicker } from 'react-nice-dates';
import {enUS} from 'date-fns/locale';
import 'react-nice-dates/build/style.css'
import "./VenueInfo.css";

const VenueInfo = () => {

  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState(new Date());
  const [numGuests, setNumGuests] = useState(0);
  const [userId, setUserId] = useState(null);
  const [unavailable, setUnavailable] = useState(false)

  const modifiers = {
    disabled: date => date < Date.now()
  }

  const dispatch = useDispatch();
  const { venueId } = useParams();

  useEffect(() => {
    dispatch(venueActions.getVenueInfo());
  }, [dispatch]);

  const loggedInUser = useSelector((state) => state.session.user ? state.session.user.id : null)
  const venues = useSelector((state) => state.venueInfo.venues);



  useEffect(() => {
    if(loggedInUser) setUserId(loggedInUser)
  }, [loggedInUser, userId])

  let venue;
  if (venues) venue = venues.find((venue) => venue.id === Number(venueId));
  if (!venue) return null;

  const onSubmit = async (event) => {
    if(!userId) {
      history.push("/login")
    }
    event.preventDefault()
    function formatDate() {
      let month = '' + (date.getMonth() + 1)
      let day = '' + date.getDate()
      let year = date.getFullYear()

      if (month.length < 2)
          month = '0' + month;
      if (day.length < 2)
          day = '0' + day;

      return [year, month, day].join('-');
    }
    const newFunc = () => {
      let newVar = true;
      if(venues[venueId - 1].reservedDates === null) {
        return true
      }
      for(let i = 0; i < venues[venueId - 1].reservedDates.length; i++) {
        if (venues[venueId - 1].reservedDates[i].slice(0, 10) === formatDate()) {
          newVar = false;
        }
      }
      return newVar
    }
    if(newFunc()) {
      await dispatch(bookingActions.createBooking({ userId, venueId, date, numGuests}))
      history.push('/', {bookedVenue: true})
    } else {
      setUnavailable(true)
    }
  }
console.log(venue.reservedDates)
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
            <h3 className="price">{`$${venue.averagePrice.slice(0,4)}`}<h4 className='price-per'>/50 guests</h4></h3>
            {!unavailable &&
            <h3>Select A Date</h3>}
            {unavailable &&
            <h3>Date unavailable</h3>}
            <div className="date-selector-venueInfo">
              <DatePicker modifiers={modifiers} date={date} onDateChange={setDate} locale={enUS}>
                {({ inputProps, focused }) => (
                <input
                  className={'date-input-info' + (focused ? ' -focused' : '')}
                  {...inputProps}
                />
                )}
              </DatePicker>
            </div>
            <div className="guests-selector">
              <select className="guests-sel" value={numGuests} onChange={(event) => setNumGuests(event.target.value)}>
                <option value="" default>Number of Guests</option>
                <option className="option-background" value={venue.maxNumberGuests - 100}>{venue.maxNumberGuests - 100} Guests</option>
                <option value={venue.maxNumberGuests - 50}>{venue.maxNumberGuests - 50} Guests</option>
                <option value={venue.maxNumberGuests}>{venue.maxNumberGuests} Guests</option>
              </select>
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
            <div className="review-card" key={review.id}>
                <div className="review-card-info">
                  <i id="profile-icon" className="fal fa-user-circle"></i>
                  <p className="review-info-userName">{review.User.username}</p>
                  <p className="review-info-rating">{`${review.rating}/10`}</p>
                  <p className="review-info-title">{review.title}</p>
                  <p className="review-info-body">{review.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default VenueInfo;
