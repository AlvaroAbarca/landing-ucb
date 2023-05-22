import React from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'

const MembersSection = () => {
  return (
    <section className="members-section">
      <div className="container">
        <Row>
          <Col sm={12} md={12} lg={12}>
            <h2 className="section-title">Nuestra Congregación</h2>
            <p className="section-description">Conoce a algunos de nuestros miembros y sus historias.</p>
          </Col>
          <Col sm={12} md={12} lg={4}>
            <Card>
              <Card.Img variant="top" src="https://picsum.photos/id/1019/300/300" />
              <Card.Body>
                <Card.Title>Juan Leyton</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Pastor Asesor</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={12} lg={4}>
            <Card>
              <Card.Img variant="top" src="https://picsum.photos/id/1019/300/300" />
              <Card.Body>
                <Card.Title>Jonanthan Palma</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Anciano</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={12} lg={4}>
            <Card>
              <Card.Img variant="top" src="https://picsum.photos/id/1019/300/300" />
              <Card.Body>
                <Card.Title>Carlos Liempi</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Anciano</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          {/* <div className="col-md-4">
            <div className="member-card">
              <img src="https://picsum.photos/id/1019/300/300" alt="Member" />
              <h3 className="member-name">Juan Leyton</h3>
              <p className="member-description">Pastor Asesor</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="member-card">
              <img src="https://picsum.photos/id/1019/300/300" alt="Member" />
              <h3 className="member-name">Jonanthan Palma</h3>
              <p className="member-description">Anciano</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="member-card">
              <img src="https://picsum.photos/id/1019/300/300" alt="Member" />
              <h3 className="member-name">Carlos Liempi</h3>
              <p className="member-description">Anciano</p>
            </div>
          </div> */}
        </Row>
      </div>
    </section>
  )
}
export default MembersSection
