import { fetch } from "./csrf";

const SET_BOOKINGS = 'bookings/GET_BOOKINGS';

export const setBookings = (bookings) => {
    return {
        type: SET_BOOKINGS,
        bookings: bookings
    }
}
// other params?
export const createBooking = ({numGuests, bookingDate, userId}) => {
    return async dispatch => {
        const res = await fetch(`/api/bookings/${userId}`, {
            method: "POST",
            headers : {
                "Content-Type": "application/json",
            },
            // other params?
            body: JSON.stringify({numGuests, bookingDate, userId}),
        });

        dispatch(setBookings(res.data.bookings))

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
