import { fetch } from "./csrf";

const SET_CONTENT = "venueInfo/setContent";
const SEARCH = "venueInfo/search"

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

const venueInfoReducer = (state = [], action) => {
    switch (action.type) {
        case SET_CONTENT:
          const venueInfo = Object.assign({}, { venues: action.venues });
          return venueInfo;
        case SEARCH:
           const venueSearch = Object.assign({}, { venues: action.venues });;
           return venueSearch;

        default:
        return state;
    }
}

export default venueInfoReducer;
