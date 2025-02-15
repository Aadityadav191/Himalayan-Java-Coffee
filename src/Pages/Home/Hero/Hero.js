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
            duration: 2,
            scale: { type: "spring", visualDuration: 1, bounce: 0.5 },
          }}
        >
          <h1>Savor the Spirit of the Himalayas in Every Cup</h1>
        </motion.div>
      </main>
    </>
  );
}

