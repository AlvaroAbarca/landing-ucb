// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../styles/landing.css'

import { Col, Container, Nav, Navbar, NavDropdown, Row, Offcanvas, Form, Button } from 'react-bootstrap'

// import { NavLink, Link } from 'react-router-dom'

const Landing = () => {
  return (
    <>
      <Container>
        <Navbar bg='light' expand='false'>
          <Navbar.Brand to='/'>Ucb Melipilla</Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          {/* <Navbar.Offcanvas>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown
              title="Dropdown"
              id={`offcanvasNavbarDropdown-expand`}
            >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Offcanvas.Body>
        </Navbar.Offcanvas> */}
          <Navbar.Collapse id='navbarScroll'>
            <Nav>
              <Nav.Link to='/'>Inicio</Nav.Link>
              <Nav.Link to='#'>Sobre Nosotros</Nav.Link>
              <Nav.Link to='#'>Ministerios</Nav.Link>
              <Nav.Link to='#'>Sermones</Nav.Link>
              <Nav.Link to='#'>Eventos</Nav.Link>
              <Nav.Link to='#'>Blog</Nav.Link>
              <Nav.Link to='#'>Contact</Nav.Link>
              <Nav.Link to='#' disabled>
                Reportes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
      <div className='main-section hero-wrap'>
        <div className='overlay' />
        <Container>
          <Row className='g-0 align-items-center' style={{ height: '907px' }}>
            <Col sm='12' className='align-self-center text-center'>
              <h1 className='mb-0'>Helping Grow Your Faith</h1>
              <h3 className='subheading mb-4 pb-1'>Submit your presence to the creator of the universe</h3>
              <p><a href='#' className='btn btn-primary py-3 px-4'>New here!</a> <a href='#' className='btn btn-white py-3 px-4'><span className='icon-play-circle' /> Live Stream</a></p>
              <div className='mouse'>
                <a href='#' className='mouse-icon'>
                  <div className='mouse-wheel'><span className='ion-ios-arrow-down' /></div>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
export default Landing
