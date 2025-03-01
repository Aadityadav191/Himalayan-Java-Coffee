import React from "react";
import "./Training.css";
import Btn from "../../../Components/Btn/Btn";
import { motion } from "framer-motion";

export default function Training() {
  return (
    <>
      <section>
        <div className="Coffee-Equipment">
          <motion.span
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="https://himalayanjava.com/wp-content/uploads/2023/08/equipment.jpg"
              alt="product"
            />
          </motion.span>

          <span className="Traningtext">
            <p>Because we love Coffee</p>
            <h1 className="Traningtitle">Coffee Equipment</h1>
            <p>Your all-in-one coffee equipment destination.</p>
            <Btn />
          </span>
        </div>

        <div className="Barista-Training">
          <span className="Traningtext">
            <p>Training & Workshop</p>
            <h1 className="Traningtitle">Barista Training</h1>
            <p>
              Vocational training equips individuals with practical skills to
              empower themselves and contribute to their personal and
              professional advancement
            </p>
            <Btn />
          </span>

          <motion.span
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="https://himalayanjava.com/wp-content/uploads/2023/10/barista-training.jpg"
              alt="product"
            />
          </motion.span>
        </div>

        <br />

        <div className="Bakery-Training">
          <motion.span
          initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="https://himalayanjava.com/wp-content/uploads/2023/10/bakery-training.jpg"
              alt="product"
            />
          </motion.span>

          <span className="Traningtext">
            <p>Training & Workshop</p>
            <h1 className="Traningtitle">Bakery Training</h1>
            <p>
              We train students to help them understand the fundamentals of
              baking and running a bakery.
            </p>
            <Btn />
          </span>
        </div>
      </section>
    </>
  );
}
