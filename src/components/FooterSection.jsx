import React from 'react'

const FooterSection = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-12">
                <div className="footer-column">
                  <h2 className="footer-title">Visítanos</h2>
                </div>
              </div>
              <div className="col-md-12">
                <div className="footer-column">
                  <h3 className="footer-column-title">Información de Contacto</h3>
                  <p>Teléfono: +1234567890</p>
                  <p>Email: info@iglesiaucbmelipilla.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-12">
                <div className="footer-column">
                  <h3 className="footer-column-title">Ubicación</h3>
                  <p>Dirección: Calle Merced 369, Melipilla</p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="footer-column">
                  <h3 className="footer-column-title">Siguenos</h3>
                  <div className="social-media-icons">
                    <a href="#" className="icon">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" className="icon">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#" className="icon">
                      <i className="bi bi-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
