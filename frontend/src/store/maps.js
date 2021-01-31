import { fetch } from "./csrf";

const SET_CONTENT = "mapsInfo/setContent";

const setContent = (map) => ({
    type: SET_CONTENT,
    map,
});

export const getMapsInfo = ({venueId}) => async (dispatch) => {
    const response = await fetch(`/api/venues/${venueId}`);
    dispatch(setContent(response.data))
}

const mapsInfoReducer = (state = [], action) => {
    switch (action.type) {
        case SET_CONTENT:
          const mapsInfo = Object.assign({}, { map: action.map });
          return mapsInfo;
        default:
        return state;
    }
}

export default mapsInfoReducer;
