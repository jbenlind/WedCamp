import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './DemoUser.css';

const DemoUser = () => {
    const history = useHistory();
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(sessionActions.login({credential:"demo@user.io", password: "password"}))

        history.push('/')
      }


    return (
        <form className="demoUser-page" onSubmit={handleSubmit}>
            <div className='demo-form'>
                <h3 className='demoForm-title'>Test out WedCamp!</h3>
                <p className='demoForm-text'>Feel free to try out WedCamp without having to enter any information. Your dream venue is only a click away!</p>
                <button className='demo-button' type="submit">Enter<i className="fad fa-campground"></i></button>
                <NavLink className='redirect-demo' to='/signup'>Want to make an account?</NavLink>
            </div>
        </form>
    )
}

export default DemoUser;
