import React from "react";
import "./Navbar.css";
import { Navbar, Nav, NavDropdown, Form, Button } from "react-bootstrap";

export default function Navigation() {
  return (
    <>

      <Navbar bg="light" expand="lg" class="navbar sticky-top bg-body-tertiary" >
        <Navbar.Brand href="">
          <img
            src="https://himalayanjava.com/wp-content/uploads/2023/08/java-newlogo.png"
            alt="Description"
            height={70}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">About Us</Nav.Link>
            <NavDropdown title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/">OUR COFFEE</NavDropdown.Item>
              <NavDropdown.Item href="/">COFFEE EQUIPMENT</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">BARISTA TRAINING</NavDropdown.Item>
              <NavDropdown.Item href="/">BAKERY TRAINING</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/">Location</Nav.Link>
            <Nav.Link href="/">Franchise</Nav.Link>
            <Nav.Link href="/">Loyalty app</Nav.Link>
            <Nav.Link href="/">Careers At Java</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
