import React from "react";
import { useState } from "react";
import "../body/body.css";
import { Link } from "react-router-dom";
import ride from '../../img/Vector.png'
import deliver from '../../img/Group.png'
import woman from '../../img/Woman Talking Taxi Driver.svg'
export default function Body() {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [location, setLocation] = useState("");

  function handleClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Use a reverse geocoding service to get the location name
        fetch(`https://ipinfo.io/json?token=37dc1ce6f3b3e2`)
          .then((response) => response.json())
          .then((data) => {
            setLocation(data.city);
          })
          .catch((error) => {
            console.error(error);
            setLocation("Error getting location");
          });
      });
    } else {
      setLocation("Geolocation is not supported by this browser.");
    }
  }

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowSignupForm(false);
  };

  const handleSignupClick = () => {
    setShowLoginForm(false);
    setShowSignupForm(true);
  };

  return (
    <div>
    <div className="bg">
      <div className="body">
        <nav className="Ride-drive">
          <ul >
            
            <li>
            
              <Link onClick={handleLoginClick} id="links" to="ride">
              <li><img src={ride} alt="" /></li>
                Ride
              </Link>
            </li>
            </ul>
            <ul>
            
            <li>
              <Link onClick={handleSignupClick} id="links">
              <li><img src={deliver} alt="" /></li>
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
                onClick={handleClick}
              />
              <p>{location}</p>
              <input
                type="password"
                id="pickup"
                name="password"
                placeholder="Destination"
              />
              <Link to="signup">
              <button type="submit" id="ride-btn">
                Request a ride
              </button>
              </Link>
             
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
      <div>
        <img src={woman} alt="" srcset="" />
      </div>
    </div>
    </div>
  );
}
