import React from 'react'

const MinistriesSection = () => {
  return (
    <section className="ministries-section">
      <div className="container">
        <h2 className="section-title">Ministerios</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="ministry-card">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Ministerio 1"
              />
              <h3 className="ministry-title">Ministerio 1</h3>
              <p className="ministry-description">
                Descripción del Ministerio 1.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="ministry-card">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Ministerio 2"
              />
              <h3 className="ministry-title">Ministerio 2</h3>
              <p className="ministry-description">
                Descripción del Ministerio 2.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="ministry-card">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Ministerio 3"
              />
              <h3 className="ministry-title">Ministerio 3</h3>
              <p className="ministry-description">
                Descripción del Ministerio 3.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default MinistriesSection
