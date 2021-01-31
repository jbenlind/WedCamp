import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from './session';
import venueInfoReducer from './venues';
import bookingReducer from './bookings';
import mapsInfoReducer from './maps';

const rootReducer = combineReducers({
  session: sessionReducer,
  venueInfo: venueInfoReducer,
  booking: bookingReducer,
  mapInfo: mapsInfoReducer
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
