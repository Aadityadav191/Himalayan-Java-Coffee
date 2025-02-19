import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // If the page is scrolled more than 50px
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        bg="transparent"
        expand="lg"
        className={`navbar position-sticky top-0 bg-body-tertiary ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <Navbar.Brand className="mx-auto">
          <img
            src="https://himalayanjava.com/wp-content/uploads/2023/08/java-newlogo.png"
            alt="Description"
            height={scrolled ? 10 : 60}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="mx-auto">
            {" "}
            {/* Add this class to center the Nav items */}
            {/* Using Link for React Router navigation */}
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About Us
            </Nav.Link>
            <NavDropdown title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/our-coffee">
                OUR COFFEE
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/coffee-equipment">
                COFFEE EQUIPMENT
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/barista-training">
                BARISTA TRAINING
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/bakery-training">
                BAKERY TRAINING
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/location">
              Location
            </Nav.Link>
            <Nav.Link as={Link} to="/franchise">
              Franchise
            </Nav.Link>
            <Nav.Link as={Link} to="/loyalty">
              Loyalty app
            </Nav.Link>
            <Nav.Link as={Link} to="/careers">
              Careers At Java
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
