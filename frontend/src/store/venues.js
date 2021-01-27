import { fetch } from "./csrf";

const SET_CONTENT = "venueInfo/setContent";

const setContent = (venues) => ({
    type: SET_CONTENT,
    venues,
});

export const getVenueInfo = () => async (dispatch) => {
    const response = await fetch("/api/venues/");
    dispatch(setContent(response.data))
}

const venueInfoReducer = (state = [], action) => {
    switch (action.type) {
        case SET_CONTENT:
          const venueInfo = Object.assign({}, { venues: action.venues });
          return venueInfo;
        default:
        return state;
    }
}

export default venueInfoReducer;
