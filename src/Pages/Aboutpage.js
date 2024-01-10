import React from 'react'
import Aboutus from '../Components/ABOUTUS/Aboutus'
import Headingimage from '../Components/Headingimage/Headingimage'
import Aboutpageimg from './Aboutuspageimg.jpg'
import Aboutusin from '../Components/ABOUTUSIN/Aboutusin'
import Client from '../Components/Client/Client'

function Aboutpage() {
  return (
    <div>
      <Headingimage cardimg={Aboutpageimg} Title="About Us" story="Unveiling Our Vision and Values"/>
      <Aboutusin/>
      <Client/>
      {/* <Aboutus/> */}
    </div>
  )
}

export default Aboutpage
