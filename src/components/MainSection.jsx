import React from 'react'

const MainSection = () => {
  return (
    <main className="main-section">
      <div className="video-container">
        <video autoPlay muted loop>
          <source src="videos/background-video.mp4" type="video/mp4" />
        </video>
        <div className="overlay" />
      </div>
      <div className="content-container">
        <h1 className="title">¡Bienvenidos!
        </h1>
        <h2 className="sub--title">Iglesia Cristo al mundo Melipilla</h2>
        <h2 className="sub--title">UNIÓN DE CENTROS BÍBLICOS</h2>
      </div>
    </main>
  )
}
export default MainSection
