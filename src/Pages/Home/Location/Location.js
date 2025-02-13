import React from "react";
import "./Location.css";
import LocationCards from "../../../Components/LocationCards/LocationCards";
export default function Location() {
  return (
    <>
      <main className="location">
        <h3>Our Locations</h3>

        <section className="cards">
          <LocationCards />
          <LocationCards />
          <LocationCards />
          <LocationCards />
          <LocationCards />
          <LocationCards />
        </section>
      </main>
    </>
  );
}
