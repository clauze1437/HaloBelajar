import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "boxicons";
import "../assets/css/NavLanding.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../assets/images/Logo Text Light.svg";
import LogoText from "../assets/images/Logo Text.svg";
// import 

export default function NavLanding() {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" class="nav-default" id="nav-1">
      <Container>
      <Navbar.Brand href="/">
            <img
              alt=""
              src={LogoText}
              width="200"
            //   height="40px"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <NavDropdown title="Category" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Front-End</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Back-End</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Full Stack</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link><Link to="/login" id="login">Log In</Link></Nav.Link>
            <Nav.Link eventKey={2}><Link to="/sign-up" id="sign-up">Sign Up</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}