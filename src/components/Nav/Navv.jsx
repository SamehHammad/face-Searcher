import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function Navv() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">F<span style={{color:"red"}}>in</span>D</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Search</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navv;
