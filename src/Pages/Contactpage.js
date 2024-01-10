import React from 'react'
import Contact from '../Components/Contact/Contact'
import Headingimage from '../Components/Headingimage/Headingimage'
import Contactimg from './contactimg.jpg'

function Contactpage() {
  return (
    <div>
      <Headingimage cardimg={Contactimg} Title="Contact Us" story="Reach Out and Connect: We're Listening"/>
      <Contact/>
    </div>
  )
}

export default Contactpage
