import React from 'react'

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center">
            <img
              src="/logos/logo_black.png"
              width={350}
              alt="logo de la iglesia"
              className="img-fluid about-logo"
            />
          </div>
          <div className="col-md-6">
            <h2 className="section-title">Quiénes somos</h2>
            <p className="section-description">
              La Iglesia UCB Melipilla es una comunidad cristiana que busca
              vivir y compartir el amor de Dios. Nos reunimos cada semana para
              adorar juntos, escuchar la Palabra de Dios y crecer en nuestra
              fe. Nuestro objetivo es ser una iglesia acogedora y servir a
              nuestra comunidad de Melipilla y sus alrededores.
            </p>
            <a href="#">Leer mas</a>
          </div>
          <div className="col-md-12">
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutSection
