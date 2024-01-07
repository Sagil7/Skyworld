import React from 'react'
import Contact from '../Components/Contact/Contact'
import Headingimage from '../Components/Headingimage/Headingimage'
import Aboutpageimg from './Aboutuspageimg.jpg'

function Contactpage() {
  return (
    <div>
      <Headingimage cardimg={Aboutpageimg} Title="About Us" story="What we do and how we are so good at it.."/>
      <Contact/>
    </div>
  )
}

export default Contactpage
