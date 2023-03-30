import React from 'react'
import { useState } from 'react';
import '../body/body.css'

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
    <div className='body' >
      <nav >
        <ul className='Ride-drive'>
          <li><a href="#" onClick={handleLoginClick}>Ride</a></li>
          <li><a href="#" onClick={handleSignupClick}>Drive or Deliver</a></li>
        </ul>
      </nav>
      {showLoginForm && (
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <button type="submit">Login</button>
        </form>
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
  );
}







