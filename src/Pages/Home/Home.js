import React from "react";
import Hero from "./Hero/Hero";
import Intro from "./Intro/Intro";
import BuyHero from "./BuyHero/BuyHero";
import Training from "./Training/Training";
import Footer from "../../Components/Footer/Footer";
import Location from "./Location/Location";

export default function Home() {
  return (
    <>
      <main>
        
        <Hero />
        <Intro />
        <BuyHero />
        <Training />
        <br />
        <br />
        <Location/>
        <br />
        <br />
        <Footer />
      </main>
    </>
  );
}
