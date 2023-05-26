import React from 'react'

const MeetingsSection = () => {
  return (
    <section className="meetings-section">
      <div className="container">
        <h2 className="section-title">Reuniones</h2>
        <div className="meeting-card">
          <h3 className="meeting-name">Reunión de Oración</h3>
          <p className="meeting-info">Miércoles 21:00 horas</p>
        </div>
        <div className="meeting-card">
          <h3 className="meeting-name">Reunión de Jóvenes</h3>
          <p className="meeting-info">Sábado 18:00 horas</p>
        </div>
        <div className="meeting-card">
          <h3 className="meeting-name">Servicio Dominical</h3>
          <p className="meeting-info">Domingo 10:00 horas</p>
        </div>
      </div>
    </section>
  )
}
export default MeetingsSection
