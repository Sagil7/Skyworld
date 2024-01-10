import React from 'react'
import './Servicecard.css'
import hrimg from './civil.jpg'
import electrical from './electrician.jpg'
import healthcare from './Healthcare.jpg'
import mechanical from './mechanical.jpg'
import clean from './cleaning.jpg'
import plumber from './plumber.jpg'
import driver from './driver.jpg'
import itimg from './It.jpg'
import { Link, NavLink } from 'react-router-dom'
function Servicecard({vis,visbutton}) {
    return (
        <div className='services'>
            <h1>Our Services</h1>
            <div className='serviece1'>

                <div class="card" style={{width: '18rem'}}>
                    <img class="card-img-top" src={hrimg} alt="Card image cap" />
                    <div class="card-body">
                        <h2 class="card-title">CIVIL</h2>
                    </div>
                </div>
                <div class="card" style={{width: '18rem'}}>
                    <img class="card-img-top" src={electrical} alt="Card image cap" />
                    <div class="card-body">
                        <h2 class="card-title">ELECTRICAL</h2>
                    </div>
                </div>
                <div class="card" style={{width: '18rem'}}>
                    <img class="card-img-top" src={healthcare} alt="Card image cap" />
                    <div class="card-body">
                        <h2 class="card-title">HEALTHCARE</h2>
                    </div>
                </div>
                <div class="card" style={{width: '18rem'}}>
                    <img class="card-img-top" src={mechanical} alt="Card image cap" />
                    <div class="card-body">
                        <h2 class="card-title">MECHANICAL</h2>
                    </div>
                </div>

            </div>
            <div className='serviece2' style={vis} >
            <div class="card" style={{width: '18rem'}}>
                    <img class="card-img-top" src={clean} alt="Card image cap" />
                    <div class="card-body">
                        <h2 class="card-title">CLEANING</h2>
                    </div>
                </div>
                <div class="card" style={{width: '18rem'}}>
                    <img class="card-img-top" src={plumber} alt="Card image cap" />
                    <div class="card-body">
                        <h2 class="card-title">PLUBMBER</h2>
                    </div>
                </div>
                <div class="card" style={{width: '18rem'}}>
                    <img class="card-img-top" src={driver} alt="Card image cap" />
                    <div class="card-body">
                        <h2 class="card-title">DRIVER</h2>
                    </div>
                </div>
                <div class="card" style={{width: '18rem'}}>
                    <img class="card-img-top" src={itimg} alt="Card image cap" />
                    <div class="card-body">
                        <h2 class="card-title">IT</h2>
                    </div>
                </div>


            </div>
            <Link to="/services"><button id='knowmore' style={visbutton} >know more </button></Link>

        </div>
    )
}

export default Servicecard
