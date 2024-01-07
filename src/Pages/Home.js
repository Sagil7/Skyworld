import React from 'react'
import Crousel from '../Components/Crousel/Crousel'
import Aboutus from '../Components/ABOUTUS/Aboutus'
import Wwd from '../Components/WWD/Wwd'
import Servicecard from '../Components/Services/Servicecard'
import Client from '../Components/Client/Client'

function Home() {
  return (
    <div>
      <Crousel/>
      <Wwd/>
      <Aboutus/>
      <Servicecard vis={{display:'none'}}/>
      <Client/>

    </div>
  )
}

export default Home
