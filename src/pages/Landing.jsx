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
          <Navbar.Brand to='/'>UCB Melipilla</Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
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
      <header>
      <video class="video-bg" muted autoPlay loop>
		<source src="videoo.mp4" type="video/mp4"/>
	</video>

	<div class="video-overlay">
  <h2 className='iglesia'>IGLESIA CRISTIANA</h2>

		<h1 className='titulo'>Cristo al mundo de Melipilla</h1>
    <br/>
    <h2 className='iglesia'>UNIÓN DE CENTROS BÍBLICOS</h2>
	</div>
  </header>

  <main>
<h2>Lorem Ipsum</h2>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolorum totam dicta quidem eaque quos neque, dolor numquam itaque placeat! Id quia at officia, accusamus placeat vero sed ea quo voluptates. Earum praesentium saepe maxime, esse veniam aperiam,
  officiis beatae error voluptatem odit provident optio vel eum nemo, facilis numquam fugit laboriosam. Libero veritatis repellendus quo. Facere perferendis blanditiis, voluptates cupiditate veniam repudiandae cumque sit provident nobis, beatae aut aliquam
  dolorem qui porro repellendus totam animi delectus laudantium.</p>

</main>
    </>
  )
}
export default Landing
