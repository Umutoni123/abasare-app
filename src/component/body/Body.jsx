import React from "react";
import { useState } from "react";
import "../body/body.css";
import { Link } from "react-router-dom";
import ride from '../../img/Vector.png'
import deliver from '../../img/Group.png'

export default function Body() {
  const [showLoginForm, setShowLoginForm] = useState(true);
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
    <div className="bg">
      <div className="body">
        <nav className="Ride-drive">
          <ul >
            <li><img src={ride} alt="" /></li>
            <li>
              <Link onClick={handleLoginClick} id="links">
                Ride
              </Link>
            </li>
            </ul>
            <ul>
            <li><img className="align-midd itemsnter" src={deliver} alt="" /></li>
                <li>
              <Link onClick={handleSignupClick} id="links">
                Drive or Deliver
              </Link>
            </li>
          </ul>
        </nav>
        <hr />

        {showLoginForm && (
          
          <div className="ride-form">
            <div>
              <h1>Request a ride</h1>
            </div>
            <form className="ride-form">
              <input
                type="text"
                id="pickup"
                name="username"
                placeholder="pickup"
              />
              <input
                type="password"
                id="pickup"
                name="password"
                placeholder="Destination"
              />
              <button type="submit" id="ride-btn">
                Request a ride
              </button>
            </form>
          </div>
        )}
        {showSignupForm && (
          <div className="ride-form">
            <div>
              <h1>Signup to be Umusare</h1>
            </div>
            <p>Connect with riders easely</p>
            <form>
              <button type="submit" id="ride-btn">
                Sign up
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
