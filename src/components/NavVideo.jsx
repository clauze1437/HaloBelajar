import React from "react";
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
// import "boxicons";
import "../assets/css/NavVideo.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../assets/images/Logo.svg";

export default function NavLanding() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" fixed="top" className="nav-default" id="nav-1">
      <Container className="container-nav">
      <Navbar.Brand href="/">
            <img
              alt="Logo HaloBelajar"
              src={Logo}
              width="50"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link id="login"><Link to="/kelas-saya">Dashboard</Link></Nav.Link>
          </Nav>
          <Nav>
            <Navbar.Text id="siswa">Halo, Siswa</Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}