import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from "react-router-dom"
import * as venueActions from '../../store/venues';
import "./SplashPage.css";

function SplashPage() {
  const dispatch = useDispatch();
  const history = useHistory()
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    dispatch(venueActions.getVenueInfo())
}, [dispatch])

const searchStarted = () => {
  setSearching(true)

  history.push("/searchResults")
}

const venues = useSelector((state) => state.venueInfo.venues);

  return (
    <div className='splash'>
        <h1 className='header'>Find yourselves outdoors</h1>
        <h3 className='header-2'>Come see what's waiting for you . . .</h3>
            <div className='form-box'>
                <input type='text' className='search-field__location' placeholder='Location...'></input>
                <input type='date' className='search-field__dates'></input>
                <button className='search-button' onClick={(event) => searchStarted()} type='button'><i className="fas fa-search"></i></button>
            </div>
    </div>
  );
}

export default SplashPage;
