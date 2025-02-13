import React from "react";
import "./Footer.css";
import { FaFacebookF ,FaInstagram} from "react-icons/fa6";


export default function Footer() {
  return (
    <>
      <footer className="footer1">
        <section className="logo">
          <img
            src="https://himalayanjava.com/demo/wp-content/uploads/2023/08/javafooterlogo.png"
            alt="product"
          />
        </section>

        <section>
          <h4>Contact</h4>
          <span>
            <h6>
              <b>Head Office</b>
            </h6>
            <p>Tridevi Marg-26, Thamel, Kathmandu +977 1 4512536</p>
          </span>

          <span>
            <h6>
              <b>Administrative Office:</b>
            </h6>
            <p>Purva Dhoka, Nagpokhari Lane, Kathmandu +977 1 5919003</p>
          </span>
          <p>info@himalayanjava.com</p>

          <span style={{ display: 'flex', gap: '10px', padding:'30px' }}>
          <FaFacebookF size={25} />
          <FaInstagram size={25}/>
          </span>

           
        </section>

        <section>
          <h4>Training & Workshop</h4>

          <p>Barista Training</p>
          <p>Bakery Training</p>
        </section>

        <section className="app-container">
          <h4>Download our App</h4>

          <img
            src="https://himalayanjava.com/wp-content/uploads/2023/08/appstore.png"
            alt="appstore"
            className="appstoreimg"
          />
          <img
            src="https://himalayanjava.com/wp-content/uploads/2023/08/googleplay.png"
            alt="googleplay"
            className="appstoreimg"
          />
        </section>
      </footer>

      <footer className="footer2">
            <section>
                  <div>Terms and Conditions</div>
                  <div>Privacy Policy</div>
                  <div>Contact</div>
            </section>


            <section>
                  <div>© Himalayan Java. 1999-2025 | Powered by:   AADITYADAV</div>
            </section>
      </footer>
    </>
  );
}
