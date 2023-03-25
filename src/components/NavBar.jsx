import React, { useState, useEffect } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavBar = () => {
  const [flag, setFlag] = useState(false)

  const handleScroll = () => {
    const threshold = 50
    if (window.pageYOffset > threshold) {
      setFlag(true)
    } else {
      setFlag(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Navbar bg={ flag ? 'dark' : 'light' } variant={ flag ? 'dark' : 'light' } expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand href="/" className="ms-3">Mi App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav></Nav>
          <Nav className="mx-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Quiénes Somos</Nav.Link>
            <Nav.Link href="#link">Ministerios</Nav.Link>
            <Nav.Link href="#link">En qué creemos</Nav.Link>
            <Nav.Link href="#link">Servicios</Nav.Link>
            <Nav.Link href="#link">Prédicas</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/contacto"><i className="bi bi-facebook"></i></Nav.Link>
            <Nav.Link href="/contacto"><i className="bi bi-instagram"></i></Nav.Link>
            <Nav.Link href="/contacto"><i className="bi bi-youtube"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default NavBar
