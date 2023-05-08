import React from "react";
import "../specialty/speciality.css";
import spec2 from "../../img/spec2.png";
import spec1 from "../../img/spec1.png";
import test6 from "../../img/test6.jpg"
import car from '../../img/test6.jpg'

export default function Speciality() {
  return (
    <div className="speciality p-20 bt-[1px]">
      <div className="flex gap-[3rem]">
        <div className="w-[50%]">
          <img src={car} />
        </div>
        <div className="w-[50%] justify-[center]">
          <h2 className="text-3xl">who we are</h2>
          <div className="flex flex-col gap-[4rem]">
            <h3 className="font-bold text-4xl">Abasare project Lorem ipsum </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, ullam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, sunt expedita, rerum optio, libero temporibus ratione distinctio odit minus perferendis officia eligendi? Error iure ex hic, incidunt id numquam quis. </p>
          </div>
        </div>
      </div>
    </div>
  );
}
