import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as bookingActions from '../../store/bookings';

function UpComingBookings() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state)=> state.session.user)

    useEffect(() => {
        dispatch(bookingActions.findBookings(sessionUser.id))
    }, [dispatch, sessionUser])

    const bookings = useSelector((state) => state.booking)


    console.log("-------------",bookings)
    return(
        <div>
            <div>
                {/* {bookings &&
                bookings.map((booking) => (
                    <div className ='booking-display' key={booking.id}>
                    </div>

                ))} */}
            </div>
        </div>
    )
}

export default UpComingBookings;
