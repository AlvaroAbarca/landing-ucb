// eslint-disable-next-line no-unused-vars
import React from 'react'
// import '../styles/landing.css'
import NavBar from '../components/NavBar'
import MainSection from '../components/MainSection'
import MembersSection from '../components/MembersSection'
import AboutSection from '../components/AboutSection'
import FooterSection from '../components/FooterSection'
import MinistriesSection from '../components/ministriesSection'
import MeetingsSection from '../components/meetingSection'

// import { NavLink, Link } from 'react-router-dom'
// Se agrego el video para bienvenida
const Landing = () => {
  return (
    <>
      <NavBar />
      <MainSection />
      <AboutSection />
      <MeetingsSection />
      <MinistriesSection />
      <MembersSection />
      <FooterSection />
    </>
  )
}
export default Landing
