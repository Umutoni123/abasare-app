import React from 'react'
import { useState } from 'react';
import '../body/body.css'
import { Link } from 'react-router-dom';

export default function Body() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowSignupForm(false);
  };

  const handleSignupClick = () => {
    setShowLoginForm(false);
    setShowSignupForm(true);
  };

  return (
    <div className='bg'>
    <div className='body' >
      <nav >
        <ul className='Ride-drive'>
          <li><Link  onClick={handleLoginClick} id="links">Ride</Link></li>
          <li><Link onClick={handleSignupClick} id="links">Drive or Deliver</Link></li>
        </ul>
        <hr />
      </nav>
      
      {showLoginForm && (
        <div className='ride-form'>
          <div><h1>Request a ride</h1></div>
          <form className='ride-form'>
          <input type="text" id="pickup" name="username" placeholder='pickup' />
          <input type="password" id="pickup" name="password" placeholder='Destination' />
          <button type="submit" id='ride-btn'>Request a ride</button>
        </form>
        </div>
      )}
      {showSignupForm && (
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <button type="submit">Sign up</button>
        </form>
      )}
    </div>
    </div>
  );
}







