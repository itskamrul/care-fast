import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import logo from '../../../images/logo.png';
import './NavBar.css';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar
      className="navbar-container"
      // bg="white"
      variant="dark"
      sticky="top"
      collapseOnSelect
      expand="lg"
    >
      <Container>
        <Navbar.Brand as={HashLink} className="" to="/">
          <img className="img-fluid logo" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link as={HashLink} to="/home">
            Home
          </Nav.Link>
          <Nav.Link as={HashLink} to="/home#bestSellings">
            Best Sellings
          </Nav.Link>
          <Nav.Link as={HashLink} to="/allProduct">
            All Product
          </Nav.Link>
          <Nav.Link as={HashLink} to="/about">
            About us
          </Nav.Link>
          <Nav.Link as={HashLink} to="/login">
            <Button className="btn button">Login</Button>
          </Nav.Link>

          <Link>Kamrul Islam</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
