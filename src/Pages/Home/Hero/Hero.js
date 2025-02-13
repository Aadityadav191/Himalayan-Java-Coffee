import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      <main className="Hero">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
        >
          <h1>Rise and grind, it's coffee time!</h1>
        </motion.div>
      </main>
    </>
  );
}

