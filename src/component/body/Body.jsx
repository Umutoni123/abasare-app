import React from "react";
import { useState } from "react";

import "../body/body.css";
import { Link, Navigate } from "react-router-dom";
import ride from "../../img/Vector.png";
import deliver from "../../img/Group.png";
import woman from "../../img/Woman Talking Taxi Driver.svg";
import { async } from "q";
export default function Body() {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [location, setLocation] = useState("");
  const url ="https://google-maps-geocoding.p.rapidapi.com/geocode/json?latlng=40.714224%2C-73.96145&language=en";

  const handleClick = async () => {
    
    const options = {
      method: "GET",
      headers: {
        "content-type": "application/octet-stream",
        "X-RapidAPI-Key": "8cb59b7abbmsh9637ff93509ce49p1b9729jsnde89b10bb791",
        "X-RapidAPI-Host": "google-maps-geocoding.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

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
            <ul>
              <li>
                <Link onClick={handleLoginClick} id="links" to="ride">
                  <li>
                    <img src={ride} alt="" />
                  </li>
                  <button onClick={()=>Navigate('/Signupd')} className="  ">
                  Ride
                  </button>
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link onClick={handleSignupClick} id="links">
                  <li>
                    <img src={deliver} alt="" />
                  </li>
                  Drive
                </Link>
              </li>
            </ul>
          </nav>
          <hr />

          {showLoginForm && (
            <div className="ride-form">
              <div>
                <h1 className="  ">Request a ride</h1>
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
                  <button  type="submit" id="ride-btn">
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
