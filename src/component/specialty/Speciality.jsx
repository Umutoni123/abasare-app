import React from "react";
import "../specialty/speciality.css";
import spec2 from "../../img/spec2.png";
import spec1 from "../../img/spec1.png";

export default function Speciality() {
  return (
    <div className="speciality">
      <div className="spec-cont">
        <h1 id="spec-h1">About us</h1>
        <div className="spec-cards">
          <div className="spec-img">
          <img src={spec2} alt="" />
          </div>
          <div className="spec-text">
            <h2>Riders</h2>
            <span id="spec-span">Abasare is a platfoarm which links abasare with clients who can not find them easily.</span>
          </div>
        </div>
        <div className="spec-cards">
          <div className="spec-text">
            <h2>Riders</h2>
            <span id="spec-span">Abasare is a platfoarm which links abasare with clients who can not find them easily.</span>
          </div>
          <div className="spec-img">
          <img src={spec1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
