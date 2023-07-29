import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavbarComp = () => {
  const [gantiWarna, setGantiWarna] = useState(false);

  const gantiWarnaBackground = () => {
    if (window.scrollY > 900) {
      setGantiWarna(true);
    } else {
      setGantiWarna(false);
    }
  };

  useEffect(() => {
    gantiWarnaBackground();

    window.addEventListener("scroll", gantiWarnaBackground);
  });

  return (
    <div className="sticky-top">
      <Navbar
        expand="lg"
        variant="dark"
        className={gantiWarna ? "color-active" : ""}
      >
        <Container>
          <Navbar.Brand href="#Home" className="fw-bold fs-4">
            Villa Puncak Bidadari
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center">
              <Nav.Link href="#Home" className="mx-2">
                Home
              </Nav.Link>
              <Nav.Link href="#Gallery" className="mx-2">
                Gallery
              </Nav.Link>
              <NavDropdown
                title="Action"
                id="basic-nav-dropdown"
                className="mx-2"
              >
                <NavDropdown.Item href="#Services">Services</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#contact-me">
                  Contact Me
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
