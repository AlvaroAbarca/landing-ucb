import React, { useState, useEffect } from 'react'
/* import 'bootstrap/dist/css/bootstrap.min.css'; */

const NavBar = () => {
    const [backgroundStyle, setBackgroundStyle] = useState({
        backgroundColor: 'transparent',
    });

    const textStyle = {
        color: 'white',
        position: 'sticky',
        top: '0',
        transition: 'background-color 0.5s, color 0.5s'
    };

    const linkStyle = {
        color: 'black',
        textDecoration: 'none'
    };

    const handleScroll = () => {
        const threshold = 50;
        if (window.pageYOffset > threshold) {
            setBackgroundStyle({
                backgroundColor: '#343a40', // Cambia a cualquier color que desees
            });
        } else {
            setBackgroundStyle({
                backgroundColor: 'transparent',
            });
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="navbar navbar-expand-lg container-fluid" style={{ ...backgroundStyle, ...textStyle }}>
            <a className="navbar-brand" href="/" style={linkStyle}>Mi App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link" href="/" style={linkStyle}>Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/" style={linkStyle}>Quiénes Somos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/" style={linkStyle}>Ministerios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/" style={linkStyle}>En qué creemos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/" style={linkStyle}>Servicios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/acerca-de" style={linkStyle}>Prédicas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contacto" style={linkStyle}>Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
