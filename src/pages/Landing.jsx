// eslint-disable-next-line no-unused-vars
import React from 'react'
// import '../styles/landing.css'
import NavBar from '../components/NavBar'
import MainSection from '../components/MainSection'
import MembersSection from '../components/MembersSection'
import AboutSection from '../components/AboutSection'

// import { NavLink, Link } from 'react-router-dom'
// Se agrego el video para bienvenida
const Landing = () => {
  return (
    <>
      <NavBar />
      <MainSection />
      <MembersSection />
      <AboutSection />
      {/* <main>
        <video id='background-video' className="video-bg" muted autoPlay loop>
          <source src="videoo.mp4" type="video/mp4"/>
        </video>
      </main>

      <div className="video-overlay">
        <h2 className='iglesia'>IGLESIA CRISTIANA</h2>
        <h1 className='titulo'>Cristo al mundo de Melipilla</h1>
        <br/>
        <h2 className='iglesia'>UNIÓN DE CENTROS BÍBLICOS</h2>
      </div> */}

      <section>
        <h2>Lorem Ipsum</h2>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolorum totam dicta quidem eaque quos neque, dolor numquam itaque placeat! Id quia at officia, accusamus placeat vero sed ea quo voluptates. Earum praesentium saepe maxime, esse veniam aperiam,
      officiis beatae error voluptatem odit provident optio vel eum nemo, facilis numquam fugit laboriosam. Libero veritatis repellendus quo. Facere perferendis blanditiis, voluptates cupiditate veniam repudiandae cumque sit provident nobis, beatae aut aliquam
      dolorem qui porro repellendus totam animi delectus laudantium.</p>

      </section>

      {/* <div className='main-section hero-wrap'>
        <Container>
          <Row className='g-0 align-items-center' style={{ height: '907px' }}>
            <Col sm='12' className='align-self-center text-center'>
              <h1 className='mb-0'>Helping Grow Your Faith</h1>
              <h3 className='subheading mb-4 pb-1'>Submit your presence to the creator of the universe</h3>
              <p><a href='#' className='btn btn-primary py-3 px-4'>New here!</a> <a href='#' className='btn btn-white py-3 px-4'><span className='icon-play-circle' /> Live Stream</a></p>
              <div className='mouse'>
                <a href='#' className='mouse-icon'>
                  <div className='mouse-wheel'><span className='ion-ios-arrow-down' /></div>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div> */}
    </>
  )
}
export default Landing
