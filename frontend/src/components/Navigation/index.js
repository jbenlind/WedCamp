import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <ul className='nav-bar'>
        <div>
          <label className='appName'>WedCamp</label>
          <i className="fad fa-campground"></i>
        </div>
        <div className='link-parent'>
          <NavLink className='explore' to='/explore'>Explore</NavLink>
          <NavLink className ='login'to="/login">Log In</NavLink>
          <NavLink className='signup' to="/signup">Sign Up</NavLink>
          <NavLink className='home' exact to="/">Home</NavLink>
        </div>
        {isLoaded && sessionLinks}
    </ul>
  );
}

export default Navigation;
