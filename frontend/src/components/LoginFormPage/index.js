import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
  }

  return (
    <form className='login-form' onSubmit={handleSubmit}>
      <h3 className='form-header'>Welcome back!</h3>
      <p className='form-text'>Let's get you outside</p>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
        <div className="input-fields">
          <label>
            <input
            className='email-input'
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
              placeholder='EmailAddress...'
            />
          </label>
          <label>
            <input
              className='password-input'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder='Password...'
            />
          </label>
          <button className='login-button' type="submit">Log In</button>
        </div>
    </form>

  );
}

export default LoginFormPage;
