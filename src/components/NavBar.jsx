import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    const [navStyle, setNavStyle] = useState({})

    const handleScroll = () => {
        const threshold = 50;
        if (window.pageYOffset > threshold) {
            setNavStyle({
                backgroundColor: '#333',
                position: 'sticky',
                top: '0',
                transition: 'background-color 0.5s, color 0.5s'
            });
        } else {
            setNavStyle({
                backgroundColor: 'transparent',
                color: 'white',
                position: 'sticky',
                top: '0',
                transition: 'background-color 0.5s, color 0.5s'
            })
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    return (
        <nav className="navbar navbar-expand-lg navbar-dark container-fluid" style={navStyle}>
            <a className="navbar-brand" href="/">Mi App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Quiénes Somos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Ministerios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">En qué creemos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Servicios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/acerca-de">Prédicas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contacto">Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar