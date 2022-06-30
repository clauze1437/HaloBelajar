import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "../assets/css/dashboard.css";
// import class from "../assets/images/icons8-class-50.png";
import user from "../assets/images/icons8-user-64.png";
import kelas from "../assets/images/icons8-class-50.png";
import edit from "../assets/images/icons8-edit-30.png";
import pass from "../assets/images/icons8-show-password-64.png";
import out from "../assets/images/icons8-logout-24.png";
import "bootstrap/dist/css/bootstrap.min.css";
// import "boxicons";
import "../assets/css/NavVideo.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/images/Logo.svg";

function Dashboard() {
  return (
    <div>
      <section className="nav">
        <section>
          <Navbar collapseOnSelect expand="lg" bg="light" fixed="top" className="nav-default" id="nav-1">
            <Container className="container-nav">
              <Navbar.Brand href="/">
                <img alt="Logo HaloBelajar" src={Logo} width="50" className="d-inline-block align-top" />{" "}
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/kelas-saya" id="login">
                    Dashboard
                  </Nav.Link>
                </Nav>
                <Nav>
                  <Navbar.Text id="siswa">Halo, Siswa</Navbar.Text>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </section>
      </section>
      <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action list-group-item-dark">
          <div class="image">
            <img alt="" src={user} width="70" height="70" />
          </div>
          <br></br>
          <br></br>
          <p>
            Jane Doe
            <br></br>
            Mahasiswa
            <br></br>
          </p>
        </a>
        <Link to="/kelas-saya" class="list-group-item list-group-item-action list-group-item-dark">
          <div class="image" />
          <img alt="" src={kelas} width="20" height="20" />
          Kelas Saya
        </Link>
        <Link to="/ubah-profil" class="list-group-item list-group-item-action list-group-item-dark">
          <div class="image" />
          <img alt="" src={edit} width="20" height="20" />
          Ubah Profil
        </Link>
        <Link to="/ubah-pass" class="list-group-item list-group-item-action list-group-item-dark">
          <div class="image" />
          <img alt="" src={pass} width="20" height="20" />
          Ubah Password
        </Link>
        <Link to="/" class="list-group-item list-group-item-action list-group-item-dark">
          <div class="image" />
          <img alt="" src={out} width="20" height="20" />
          Keluar
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
