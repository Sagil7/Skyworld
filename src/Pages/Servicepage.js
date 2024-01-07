import React from 'react'
import Servicecard from '../Components/Services/Servicecard'
import Servicedetail from '../Components/Servicesdetails/Servicedetail'
import Aboutpageimg from './Aboutuspageimg.jpg'
import Headingimage from '../Components/Headingimage/Headingimage'


function Servicepage() {
  return (
    <div>
      <Headingimage cardimg={Aboutpageimg} Title="About Us" story="What we do and how we are so good at it.."/>
      <Servicedetail/>
      <Servicecard visbutton={{display:'none'}}/>
    </div>
  )
}

export default Servicepage
