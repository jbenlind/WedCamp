import { fetch } from "./csrf";

const SET_CONTENT = "venueInfo/setContent";
const SEARCH = "venueInfo/search"
const SUBMIT_REVIEW = "venueInfo/submit_review"

const setContent = (venues) => ({
    type: SET_CONTENT,
    venues,
});

const search = (venues) => ({
    type: SEARCH,
    venues,
});

export const searchVenues = (query) => async (dispatch) => {
    const response = await fetch(`/api/venues/search/${query}`)
    dispatch(search(response.data))
    return response;
}

export const getVenueInfo = () => async (dispatch) => {
    const response = await fetch("/api/venues/");
    dispatch(setContent(response.data));
    return response;
}

export const submitNewReview = ({userId, venueId, rating, title, reviewBody, verifiedBooking}) => async (dispatch) => {
    const res = await fetch(`/api/venues/reviews`, {
        method: "POST",
        headers : {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({userId, venueId, rating, title, reviewBody, verifiedBooking}),
    });
    await dispatch(setContent(res.data))

    return res;

}

const venueInfoReducer = (state = [], action) => {
    switch (action.type) {
        case SET_CONTENT:
          const venueInfo = Object.assign({}, { venues: action.venues });
          return venueInfo;
        case SEARCH:
           const venueSearch = Object.assign({}, { venues: action.venues });
           return venueSearch;
        case SUBMIT_REVIEW:
            const venueReview = Object.assign({}, {venue: action.venue});
            return venueReview

        default:
        return state;
    }
}

export default venueInfoReducer;
