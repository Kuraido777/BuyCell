import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #b6d5e1;
  }

  .navbar-brand,
  .navbar-nav .nav-link {
    color: #fff;
    font-size: 20px;

    &:hover {
      color: black;
    }
  }
`;

function NavBar() {
  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/buy">Buy</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/sell">Sell</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}

export default NavBar;
