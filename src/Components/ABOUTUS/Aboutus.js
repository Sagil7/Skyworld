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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus lectus viverra in semper nec pretium mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus lectus viverra in semper nec pretium mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus lectus viverra in semper nec pretium mus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, a.
      </p>
      <p class="text-blk1 subHeading1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus lectus viverra in semper nec pretium mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus lectus viverra in semper nec pretium mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus lectus viverra in semper nec pretium mus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, a.
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
