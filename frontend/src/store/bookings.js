import { fetch } from "./csrf";

const SET_BOOKINGS = 'bookings/SET_BOOKINGS';
const DELETE_BOOKINGS = 'bookings/DELETE_BOOKINGS';

const setBookings = (bookings) => {
    return {
        type: SET_BOOKINGS,
        bookings: bookings
    }
}

const deleteBookings = (bookings) => {
    return {
        type: DELETE_BOOKINGS,
        bookings: bookings
    }
}

export const createBooking = ({userId, venueId, date, numGuests}) => {
    return async dispatch => {
        const res = await fetch(`/api/bookings/${userId}`, {
            method: "POST",
            headers : {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({venueId, date, numGuests}),
        });
        await dispatch(setBookings(res.data))

        return res;
    }
}

export const deleteBooking = (bookingId, userId) => {
    return async (dispatch) => {
        const res = await fetch(`/api/bookings/${userId}/delete`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ bookingId }),
        });
        if (res.ok) {
          dispatch(setBookings(res.data));
        }
        return res;
    }
}

export const findBookings = (userId) => async (dispatch) => {
    const res = await fetch(`/api/bookings/${userId}`);
    dispatch(setBookings(res.data));
}

export default function bookingReducer(state = {}, action) {
    switch (action.type) {
        case SET_BOOKINGS:
            return action.bookings;
        case DELETE_BOOKINGS:
            return action.bookings;
        default:
            return state;
    }
}
