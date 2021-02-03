import React, { useState} from "react";
import {useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as venueActions from "../../store/venues";
import { DatePicker } from 'react-nice-dates';
import {enUS} from 'date-fns/locale';
import 'react-nice-dates/build/style.css'
// import { use } from "../../../../backend/routes/api/venues";

import "./SplashPage.css";

function SplashPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [searchInput, setSearchInput] = useState("");
  const [date, setDate] = useState(new Date());


  const searchStarted = async () => {
    await dispatch(venueActions.searchVenues(searchInput));
    if (searchInput !== "") history.push("/searchResults");
  };

  return (
      <div className="splash">
        <div className="splash-grid">
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
              <div className="date-box">
                <DatePicker date={date} onDateChange={setDate} locale={enUS}>
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
