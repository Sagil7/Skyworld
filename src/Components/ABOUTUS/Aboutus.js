import React from 'react'
import './Aboutus.css'
import worker1 from './Worker1.jpg';
import { Link } from 'react-router-dom';
// import helmetimg from './helmet.jpg'
function Aboutus() {
  return (
    <div>
      <div class="responsive-container-block1 bigContainer1">
  <div class="responsive-container-block1 Container1">
    <div class="imgContainer1">
      <img class="mainImg1" src={worker1}/>
    </div>
    
    <div class="responsive-container-block1 textSide1">
      <p class="text-blk1 heading1">
        About Us
      </p>
      <p class="text-blk1 subHeading1">
      Skyworld Recruitment, a registered and well-reputed recruitment agency in India.Registered under the Ministry of Ministry of External Affairs, India (License No.618). We strictly adhere to all laws and legislation governed by the Indian Government. With years of service, we at Skyworld Recruitment Supply in India have assisted hundreds of organizations across various industrial sectors in Qatar with skilled and unskilled labour. Our paramount goal is to deliver top-notch manpower supply services, ensuring quality and satisfaction for all our esteemed clients..
      </p>
      <h3>Our Mission</h3>
      <p class="text-blk1 subHeading1">
      Our mission is to facilitate global talent mobility while ensuring ethical recruitment practices, transparency, and a win-win partnership for all stakeholders
      </p>

      <Link to="/about">
        <button class="explore1">
          Learn more
        </button>
      </Link>
    </div>
    <img class="blueDots" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw3.svg"/>

  </div>
</div>
    </div>
    
  )
}

export default Aboutus
