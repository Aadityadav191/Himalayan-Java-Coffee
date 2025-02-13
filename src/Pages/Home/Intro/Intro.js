import React from "react";
import "./Intro.css";
import Btn from "../../../Components/Btn/Btn";
import { motion } from "framer-motion";



export default function Intro() {
  return (
    <>
      <section className="introcontent">
        <div className="intro-text">
          In 1999, we started off as the first specialty coffee shop in Nepal.
          Over the years, we have diversified from a small coffee shop to an
          enterprise franchising the Nepali Coffee brand, nationally and
          internationally.
        </div>


        <Btn/>
        
      </section>

      <section className="Journeysection">

       <motion.div
                 initial={{ opacity: 0, scale: 0 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{
                   duration: 2,
                   scale: { type: "spring", visualDuration: 1, bounce: 0.5 },
                 }}
               >
          <img src="https://himalayanjava.com/wp-content/uploads/2023/08/crop.jpg" className="journey-img" alt="Journey-img"/>
        </motion.div>


      
        <div className="journey-text">
        <h6>Coffee Farming</h6>
         <h1>The Journey from <br/> Crop to Cup</h1>
         <p>
         Grown in the ideal Himalayan air, our coffee beans are roasted to perfection and sent off to all our outlets to deliver the best coffee experience.
         </p>

         <Btn/>
        </div>

      </section>
    </>
  );
}
