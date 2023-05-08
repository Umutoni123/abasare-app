import React from "react";
import Body from "../body/Body";
import Speciality from "../specialty/Speciality";
import Team from "../Team/Team";
import Testiomony from "../Testimonies/Testiomony";
import Contact from "../contact/Contact";


export default function Home() {
  return (
    <div>
      <Body/>
    <Speciality />
      <Testiomony/>
      {/* <Team /> */}
      <Contact/>
    </div>
  );
}
