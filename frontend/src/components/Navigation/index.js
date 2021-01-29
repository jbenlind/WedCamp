import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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
    <div>
      <ul className='nav-bar'>
          <div className='first-fraction'>
            <NavLink className='appName' exact to="/">WedCamp</NavLink>
            <i id='font-icon' className="fad fa-campground"></i>
          </div>
          <div className='second-fraction'>
            <NavLink className='explore' to='/explore'>Explore</NavLink>
            {!sessionUser &&
              <NavLink className='demo' to='/demo'>Demo</NavLink>}
            {!sessionUser &&
            <NavLink className ='login'to="/login">Log In</NavLink>}
            {!sessionUser &&
            <NavLink className='signup' to="/signup">Sign Up</NavLink>}
            {sessionUser &&
            <NavLink className='bookings' to='/bookings'>Bookings</NavLink>}
            {sessionUser &&
            <div onClick={userLogout} className='logout' to='/'>Log Out</div>}
          </div>
      </ul>
    </div>
  );
}

export default Navigation;
