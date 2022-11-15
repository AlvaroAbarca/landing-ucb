import React from 'react';

import {  Col, Container, Nav, Navbar, NavDropdown, Row, } from "react-bootstrap";

import { NavLink, Link } from "react-router-dom";



const Landing = () => {
  return (<>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand to="/">Cafeteria</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
          // style={{ maxHeight: '100px' }}
          // navbarScroll
          >
            <Nav.Link to="/">Inicio</Nav.Link>
            <Nav.Link to="#">Punto de Venta</Nav.Link>
            <Nav.Link to="#">Stock</Nav.Link>
            <Nav.Link to="#" disabled>
              Reportes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container fluid>
      <Row>
        <Col xs="12">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa expedita in soluta doloribus ratione. Magnam distinctio, cupiditate, dolorem animi ab a ex est sed mollitia quo porro. Porro, neque nostrum.</p>
        </Col>
      </Row>
    </Container>
  </>)
}
export default Landing;