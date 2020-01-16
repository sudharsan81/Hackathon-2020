import React from "react";
import logo from "./logo.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <img src={logo} id="logo" className="App-logo" alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="About" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/1.1">Who we are</NavDropdown.Item>
            <NavDropdown.Item href="#action/2.2">How we work</NavDropdown.Item>
            <NavDropdown.Item href="#action/2.2">
              Certifications
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Services" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/2.1">
              Cloud Digital Transformation
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/2.2">
              Expert Cloud Advise and Support
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/2.3">
              Software Development
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/2.4">
              Dedicated Teams
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#home">Cloud Academy</Nav.Link>
          <NavDropdown title="Contact" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/4.1">Sales</NavDropdown.Item>
            <NavDropdown.Item href="#action/4.2">Support</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
