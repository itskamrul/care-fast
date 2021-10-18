import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import logo from '../../../images/logo.png';
import './NavBar.css';
import { HashLink } from 'react-router-hash-link';

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
        <Navbar.Brand className="" href="#home">
          <img className="img-fluid logo" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link as={HashLink} to="/home">
            Home
          </Nav.Link>
          <Nav.Link as={HashLink} to="/allProduct">
            All Product
          </Nav.Link>
          <Nav.Link as={HashLink} to="/home#home">
            Pricing
          </Nav.Link>
          <Button className="btn button">Login</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
