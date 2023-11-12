import { Container, Form, Nav, Navbar } from "react-bootstrap";
import React from "react";

const Navbars = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" className="mb-5">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand href="#home">Shugs Delight </Navbar.Brand>
          <Form>
            <input type="text" className="form-control" placeholder="search" />
          </Form>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Meals</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
