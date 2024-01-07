import React from 'react'
import './Crousel.css'
import crousel1img from './crousleimg1.jpeg'
import crousel2img from './crousleimg2.jpg'
import crousel3img from './crouselimg3.jpeg'

const Crousel = () => {
    return ( 
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={crousel1img} className="d-block w-100" data-bs-interval="4000" alt="..." />
            <div className="carousel-caption d-none d-md-block" id='crousel1'>
              {/* <h5>First slide label</h5> */}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, accusamus.
            </div>
          </div>
          <div className="carousel-item">
            <img src={crousel2img} className="d-block w-100" data-bs-interval="4000" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              {/* <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p> */}
            </div>
          </div>
          <div className="carousel-item">
            <img src={crousel3img} className="d-block w-100" data-bs-interval="4000" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              {/* <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p> */}
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
  }
  
export default Crousel
