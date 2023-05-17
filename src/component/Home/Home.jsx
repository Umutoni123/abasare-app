import React from "react";
import Body from "../body/Body";
import Speciality from "../specialty/Speciality";
import Team from "../Team/Team";
import Testiomony from "../Testimonies/Testiomony";
import Contact from "../contact/Contact";
import LocationForm from "../locationform/LocationForm";


export default function Home() {
  return (
    <div>
      <Body/>
    <Speciality />
      <Team />
      <Contact/>
      {/* <LocationForm/> */}

      <Testiomony/>
    </div>
  );
}
