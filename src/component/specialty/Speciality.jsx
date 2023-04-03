import React from "react";
import "../specialty/speciality.css";
import spec2 from "../../img/spec2.png";
import spec1 from "../../img/spec1.png";

export default function Speciality() {
  return (
    <div className="spec-cont">
        <h1>Abasare services</h1>
      <div className="spec">
        <div className="spec-img">
          <img src={spec2} alt="" />
        </div>
        <div className="spec-p">
          <h1>Riders</h1>
          <p>
            Abasare is aplatfoarm which links abasare with clients who can not
            find them easily.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam commodi quia minima accusantium omnis eum incidunt ad ipsa perferendis. Deleniti totam modi sequi accusamus assumenda quasi repellat laboriosam aliquid odit.
          </p>
        </div>
      
        <div className="spec-p">
            <h1>Drivers</h1>
          <p>
          Abasare is aplatfoarm which links abasare with clients who can not find them easily.
          </p>
        </div>
        <div className="spec-img">
          <img src={spec1} alt="" />
        </div>
      </div>
    </div>
  );
}
