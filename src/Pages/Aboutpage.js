import React from 'react'
import Aboutus from '../Components/ABOUTUS/Aboutus'
import Headingimage from '../Components/Headingimage/Headingimage'
import Aboutpageimg from './Aboutuspageimg.jpg'
import Aboutusin from '../Components/ABOUTUSIN/Aboutusin'

function Aboutpage() {
  return (
    <div>
      <Headingimage cardimg={Aboutpageimg} Title="About Us" story="What we do and how we are so good at it.."/>
      <Aboutusin/>
      {/* <Aboutus/> */}
    </div>
  )
}

export default Aboutpage
