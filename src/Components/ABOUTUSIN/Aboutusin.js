import React from 'react'
import  worker2 from './worker2.jpg'
import integrityicon from './Integrity.png'
import Qualityicon from './Quality.png'
import Diversityicon from './Diversity.png'
import Customericon from './Customer.png'
function Aboutusin() {
  return (
    <div>
    <div class="responsive-container-block1 bigContainer1">
<div class="responsive-container-block1 Container1">
  <div class="imgContainer1">
    <img class="mainImg1" src={worker2}/>
  </div>
  <div class="responsive-container-block1 textSide1">
    <p class="text-blk1 heading1">
      About Us
    </p>
    <p class="text-blk1 subHeading1">
    Skyworld Recruitment, a registered and well-reputed recruitment agency in India.Registered under the Ministry of Ministry of External Affairs, India (License No.618). We strictly adhere to all laws and legislation governed by the Indian Government. With years of service, we at Skyworld Recruitment Supply in India have assisted hundreds of organizations across various industrial sectors in Qatar with skilled and unskilled labour. Our paramount goal is to deliver top-notch manpower supply services, ensuring quality and satisfaction for all our esteemed clients.
    </p>
    <h3>Our Mission</h3>
    <p className="text-blk1 subHeading1">Our mission is to facilitate global talent mobility while ensuring ethical recruitment practices, transparency, and a win-win partnership for all stakeholders</p>
    <h3>Our Vision</h3>
    <p className="text-blk1 subHeading1">To be the preferred global partner in supplying competent, committed, and diverse workforce solutions.</p>
    <div class="responsive-cell-block1 wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
      <div class="cardImgContainer1">
        <img className='cardImg' src={integrityicon} alt="" />
      </div>
      <div class="cardText">
        <p class="text-blk1 cardHeading">
          Integrity
        </p>
        <p class="text-blk1 cardSubHeading">
        We uphold the highest ethical standards in all our dealings, fostering trust and credibility.
        </p>
      </div>
    </div>
    <div class="responsive-cell-block1 wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
      <div class="cardImgContainer1">
        <img className='cardImg' src={Qualityicon} alt="" />
      </div>
      <div class="cardText">
        <p class="text-blk1 cardHeading">
          Quality
        </p>
        <p class="text-blk1 cardSubHeading">
        We strive for excellence in the services we provide, ensuring that our clients receive top-tier talent and support.
        </p>
      </div>
    </div>
    <div class="responsive-cell-block1 wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
      <div class="cardImgContainer1">
      <img className='cardImg' src={Diversityicon} alt="" />
      </div>
      <div class="cardText">
        <p class="text-blk1 cardHeading">
          Diversity & Inclusion
        </p>
        <p class="text-blk1 cardSubHeading">
        We celebrate diversity and believe in equal opportunities for all,respecting different backgrounds, cultures, and perspectives.
        </p>
      </div>
    </div>
    <div class="responsive-cell-block1 wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
      <div class="cardImgContainer1">
      <img className='cardImg' src={Customericon} alt="" />
      </div>
      <div class="cardText">
        <p class="text-blk1 cardHeading">
          Customer-Centric
        </p>
        <p class="text-blk1 cardSubHeading">
        Our clients' success is our success. We are dedicated to understanding
        </p>
      </div>
    </div>
 
  </div>
</div>
</div>
  </div>
  )
}

export default Aboutusin
