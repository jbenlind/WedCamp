import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import * as bookingActions from '../../store/bookings';
import * as venueActions from '../../store/venues';

function UpComingBookings() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state)=> state.session.user)

    useEffect(() => {
        if (sessionUser) dispatch(bookingActions.findBookings(sessionUser.id))
    }, [dispatch, sessionUser])

    useEffect(() => {
        dispatch(venueActions.getVenueInfo())
    }, [dispatch])

    const venues = useSelector((state) => state.venueInfo.venues);

    const bookings = useSelector((state) => Object.values(state.booking))

    return(
        <div>
            <div className="booking-content">
                    {bookings &&
                    bookings.map((booking) => (
                        <Link className ='booking-location' key={booking.id} to={`/explore/${booking.venueId}`}>Link</Link>
                    ))}
            </div>
        </div>
    )
}

export default UpComingBookings;
