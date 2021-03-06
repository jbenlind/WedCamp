import { fetch } from "./csrf";

const SET_BOOKINGS = 'bookings/SET_BOOKINGS';

export const setBookings = (bookings) => {
    return {
        type: SET_BOOKINGS,
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

export const deleteBooking = (id, userId) => {
    return async (dispatch) => {
        const res = await fetch(`/api/bookings/${userId}`, {
            method: "delete",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }),
        });
        res.data = await res.json();
        if (res.ok) {
          dispatch(setBookings(res.data.bookings));
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
        default:
            return state;
    }
}
