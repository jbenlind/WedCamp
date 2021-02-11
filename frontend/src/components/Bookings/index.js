import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import * as bookingActions from '../../store/bookings';
import * as venueActions from '../../store/venues';
import "./Bookings.css";

function UpComingBookings() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state)=> state.session.user);
    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        if (sessionUser) dispatch(bookingActions.findBookings(sessionUser.id));
    }, [dispatch, sessionUser])

    useEffect(() => {
        dispatch(venueActions.getVenueInfo());
    }, [dispatch])

    const bookings = useSelector((state) => Object.values(state.booking));
    const venues = useSelector((state) => state.venueInfo.venues);

    useEffect(() => {
        if(bookings && venues) {
            setLoaded(true);
        }
    }, [bookings, venues])


    return(
        <div>
            <div className="booking-content">
                    {loaded && bookings.length > 0 &&
                    bookings.map((booking) => {
                        const unixDate = Date.parse(booking.date);
                        const date = new Date(unixDate);
                        const options = { year: 'numeric', month: 'long', day: 'numeric'}
                    return (
                        <div className="bookingInfo" key={booking.id}>
                            <Link className='booking-venue' to={`/explore/${booking.venueId}`}>{venues.find(venue => venue.id === booking.venueId) ? venues.find(venue => venue.id === booking.venueId).name : ""}</Link>
                            <p className="booking-date">{date.toLocaleString("en-US", options )}</p>
                            <p className="booking-guests">{`Guests: ${booking.numberOfGuests}`}</p>
                        </div>
                    )})}
            </div>
        </div>
    )
}

export default UpComingBookings;
