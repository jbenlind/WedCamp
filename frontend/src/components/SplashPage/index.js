import React, { useState} from "react";
import {useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as venueActions from "../../store/venues";
import UpComingBookings from '../Bookings';
import { DatePicker } from 'react-nice-dates';
import {enUS} from 'date-fns/locale';
import 'react-nice-dates/build/style.css'
import "./SplashPage.css";

function SplashPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);

  let initialSideBar = "hidden";
  let initialButton = "";
  if(history.location.state && history.location.state.bookedVenue) {
    initialSideBar = "";
    initialButton ="hidden"
  }

  const [searchInput, setSearchInput] = useState("");
  const [date, setDate] = useState(new Date());
  const [sideBar, setSideBar] = useState(initialSideBar);
  const [firstButton, setFirstButton] = useState(initialButton);

  const modifiers = {
    disabled: date => date < Date.now()
  }

  const searchStarted = async () => {
    await dispatch(venueActions.searchVenues(searchInput));
    if (searchInput !== "") history.push("/searchResults");
  };

  const sideBarPosition = () => {
    if(firstButton === "") setFirstButton("hidden")
    if(firstButton === "hidden") setFirstButton("")
    if(sideBar === "hidden") setSideBar("");
    if(sideBar !==  "hidden") setSideBar("hidden");
  }

  return (
      <div className="splash">
        <div className="splash-grid">
          { sessionUser &&
          <div className="button-container">
            <button
              id={firstButton}
              className={"show-bookings-button"}
              onClick={(event) => sideBarPosition()}
              >Upcoming Events</button>
          </div>}
          { sessionUser &&
          <div className="side-bar-container">
            <div id={sideBar} className="side-bar">
              <div className="side-bar-grid">
                <button
                  className="hide-bookings-button"
                  onClick={(event) => sideBarPosition()}
                  ><i className="far fa-arrow-right"></i>
                </button>
                <h1 className="side-bar-header">Your bookings</h1>
                <div className="booking-display">
                <UpComingBookings />
                </div>
              </div>
            </div>
          </div>}
          <div className="splash-headers">
            <h1 className="header-1">Find yourselves outdoors</h1>
            <h3 className="header-2">Come see what's waiting for you . . .</h3>
          </div>
          <div className="splash-search">
            <div className="search-box-grid">
              <p className="location-text">Where to?</p>
              <div className="location-box">
                <input
                  type="text"
                  className="location-input"
                  placeholder="Location..."
                  value={searchInput}
                  onChange={(event) => setSearchInput(event.target.value)}
                />
              </div>
              <p className="date-text">Dates</p>
              <div className="search-date-box">
                <DatePicker modifiers={modifiers} date={date} onDateChange={setDate} locale={enUS}>
                  {({ inputProps, focused }) => (
                  <input
                    className={'date-input' + (focused ? ' -focused' : '')}
                    {...inputProps}
                  />
                  )}
                </DatePicker>
              </div>
              <div className="search-button-box">
                <button
                  className="search-bar-button"
                  onClick={(event) => searchStarted()}
                  type="button"
                ><i id="search-bar-icon" className="fas fa-search"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default SplashPage;
