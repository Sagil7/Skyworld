import React from 'react'
import Servicecard from '../Components/Services/Servicecard'
import Servicedetail from '../Components/Servicesdetails/Servicedetail'
import serviceimg from './service.jpg'
import Aboutpageimg from './Aboutuspageimg.jpg'
import Headingimage from '../Components/Headingimage/Headingimage'


function Servicepage() {
  return (
    <div>
      <Headingimage cardimg={serviceimg} Title="Our Services" story="Empowering through Comprehensive Services"/>
      <Servicedetail/>
      <Servicecard visbutton={{display:'none'}}/>
    </div>
  )
}

export default Servicepage
