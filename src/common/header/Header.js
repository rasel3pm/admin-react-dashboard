import React from "react";

import { Navbar, Container, Nav, Form } from "react-bootstrap";
import "remixicon/fonts/remixicon.css";
import "./header.css";
const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="navberPro" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Admin</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Form>
                <Form.Control
                  type="search"
                  placeholder="Search here"
                  className="me-1 rounded-pill bg-transparent  text-white"
                  aria-label="Search"
                />
              </Form>
            </Nav>

            <Nav className="me-auto">
              <Form>
                <Form.Control
                  input
                  type="date"
                  className="bg-transparent text-center text-white"
                />
              </Form>
            </Nav>
            <Nav>
              <i class="ri-notification-4-line icon"></i>
              <i class="ri-contrast-2-line icon"></i>
            </Nav>
            <Nav className="user-area">
              <i class="ri-user-line icon"></i>
              <p className="user-name">Name</p>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
