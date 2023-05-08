import React from "react";
import Body from "../body/Body";
import Speciality from "../specialty/Speciality";
import Team from "../Team/Team";
import Testiomony from "../Testimonies/Testiomony";


export default function Home() {
  return (
    <div>
      <Body/>
    <Speciality />
      <Testiomony/>
      {/* <Team /> */}
    </div>
  );
}
