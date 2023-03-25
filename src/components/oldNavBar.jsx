import React, { useState, useEffect } from 'react'

const NavBar = () => {
  const [flag, setFlag] = useState(false)
  const [navStyle, setNavStyle] = useState({
    backgroundColor: 'transparent',
    color: 'white',
    position: 'sticky',
    top: '0',
    transition: 'background-color 0.5s, color 0.5s',
    fontFamily: 'Montserrat, sans-serif',
    boxShadow: 'none'
  })

  const handleScroll = () => {
    const threshold = 50
    if (window.pageYOffset > threshold) {
      setNavStyle(prev => {
        return { ...prev, backgroundColor: '#343a40', boxShadow: '0px 3px 10px 0px rgba(0,0,0,0.5)' } // Cambia a cualquier color que desees
      })
      setFlag(true)
    } else {
      setNavStyle(prev => {
        return { ...prev, backgroundColor: 'transparent', boxShadow: 'none' }
      })
      setFlag(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  // style={{ ...navStyle }}

  return (
    <nav className={ flag ? 'navbar navbar-expand-lg navbar-dark bg-dark sticky-top' : 'navbar navbar-expand-lg sticky-top' } >
      <div className="container-fluid">
        <a className="navbar-brand ms-3" href="/" >Mi App</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav"></ul>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/" >Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" >Quiénes Somos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" >Ministerios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" >En qué creemos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" >Servicios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/acerca-de" >Prédicas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contacto" >Contacto</a>
            </li>
          </ul>
          <ul className="navbar-nav me-3">
            <li className="nav-item">
              <a className="nav-link" href="/contacto"><i className="bi bi-facebook"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contacto"><i className="bi bi-instagram"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contacto"><i className="bi bi-youtube"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default NavBar
