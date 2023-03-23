import React, { useState, useEffect } from 'react'

const NavBar = () => {
  const [navStyle, setNavStyle] = useState({
    backgroundColor: 'transparent',
    color: 'white',
    position: 'sticky',
    top: '0',
    transition: 'background-color 0.5s, color 0.5s',
    fontFamily: 'Montserrat, sans-serif', //, 'sans-serif'
    boxShadow: 'none'
  })

  const [navLinkStyle, setNavLinkStyle] = useState({
    color: 'rgba(0, 0, 0, 0.55)'
  })

  const handleScroll = () => {
    const threshold = 50
    if (window.pageYOffset > threshold) {
      setNavStyle(prev => {
        return { ...prev, backgroundColor: '#343a40', boxShadow: '0px 3px 10px 0px rgba(0,0,0,0.5)' } // Cambia a cualquier color que desees
      })
      setNavLinkStyle({ color: 'white' })
    } else {
      setNavStyle(prev => {
        return { ...prev, backgroundColor: 'transparent', boxShadow: 'none' }
      })
      setNavLinkStyle({ color: 'rgba(0, 0, 0, 0.55)' })
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className="navbar navbar-expand-lg container-fluid" style={{ ...navStyle }}>
      <a className="navbar-brand ms-3" href="/" style={navLinkStyle}>Mi App</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
        <ul className="navbar-nav"></ul>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/" style={navLinkStyle} >Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/" style={navLinkStyle}>Quiénes Somos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/" style={navLinkStyle}>Ministerios</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/" style={navLinkStyle}>En qué creemos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/" style={navLinkStyle}>Servicios</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/acerca-de" style={navLinkStyle} >Prédicas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contacto" style={navLinkStyle} >Contacto</a>
          </li>
        </ul>
        <ul className="navbar-nav me-3">
          <li className="nav-item">
            <a className="nav-link" href="/contacto" style={navLinkStyle}><i className="bi bi-facebook"></i></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contacto" style={navLinkStyle}><i className="bi bi-instagram"></i></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contacto" style={navLinkStyle}><i className="bi bi-youtube"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default NavBar
