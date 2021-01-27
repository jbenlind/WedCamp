import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import ProfileButton from './ProfileButton';
import { logout } from '../../store/session';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const userLogout = (event) => {
    event.preventDefault()

    dispatch(logout());
    history.push('/');
  }

  return (
    <ul className='nav-bar'>
        <div>
          <label className='appName'>WedCamp</label>
          <i className="fad fa-campground"></i>
        </div>
        <div className='link-parent'>
          <NavLink className='explore' to='/explore'>Explore</NavLink>
          {!sessionUser &&
          <NavLink className ='login'to="/login">Log In</NavLink>}
          {!sessionUser &&
          <NavLink className='signup' to="/signup">Sign Up</NavLink>}
          <NavLink className='home' exact to="/">Home</NavLink>
          {sessionUser &&
          <div onClick={userLogout} className='logout' to='/'>Log Out</div>}
        </div>
    </ul>
  );
}

export default Navigation;
