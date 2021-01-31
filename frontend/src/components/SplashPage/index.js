import React, { useState} from "react";
import {useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as venueActions from "../../store/venues";
// import { use } from "../../../../backend/routes/api/venues";

import "./SplashPage.css";

function SplashPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [searchInput, setSearchInput] = useState("");

  const searchStarted = async () => {
    await dispatch(venueActions.searchVenues(searchInput));
    if (searchInput !== "") history.push("/searchResults");
  };

  return (
      <div className="splash">
        <h1 className="header">Find yourselves outdoors</h1>
        <h3 className="header-2">Come see what's waiting for you . . .</h3>
        <div className="form-box">
          <input
            type="text"
            className="search-field__location"
            placeholder="Cities in Wisconsin..."
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <input type="date" className="search-field__dates"></input>
          <button
            className="search-button"
            onClick={(event) => searchStarted()}
            type="button"
          >
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
  );
}

export default SplashPage;
