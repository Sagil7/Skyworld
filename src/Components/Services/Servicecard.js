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
function Servicecard({ vis, visbutton }) {
    return (
        <div className='services'>
            <h1 style={visbutton} >Our Services </h1>
            <h1 style={vis}>Our Core sectors</h1>
            <h2 style={visbutton}>A Leading Institution in India for Recruitment, Spanning Unskilled labour to Upper Management.</h2>
            <p style={visbutton}>
                Our core service sectors are Construction, Chemical & Petrochemical Complexes, Oil & Gas, Transportation Services, Hospitality, Infrastructure, Manufacturing, Health& Fitness, Mine & Refinery, Man Power Supply, Taxi & Limousine services, Trading, Restaurants & Cafe, MEP, Facility Management Etc</p>
            <div className='serviece1'>

                <div class="card" style={{ width: '18rem' }}>
                    <img class="card-img-top" src={hrimg} alt="Card image cap" />
                    <div class="card-body">
                        <h3 class="card-title">Civil</h3>
                    </div>
                </div>
                <div class="card" style={{ width: '18rem' }}>
                    <img class="card-img-top" src={electrical} alt="Card image cap" />
                    <div class="card-body">
                        <h3 class="card-title">Electrical</h3>
                    </div>
                </div>
                <div class="card" style={{ width: '18rem' }}>
                    <img class="card-img-top" src={healthcare} alt="Card image cap" />
                    <div class="card-body">
                        <h3 class="card-title">Healthcare</h3>
                    </div>
                </div>
                <div class="card" style={{ width: '18rem' }}>
                    <img class="card-img-top" src={mechanical} alt="Card image cap" />
                    <div class="card-body">
                        <h3 class="card-title">Mechanical</h3>
                    </div>
                </div>

            </div>
            <div className='serviece2' style={vis} >
                <div class="card" style={{ width: '18rem' }}>
                    <img class="card-img-top" src={clean} alt="Card image cap" />
                    <div class="card-body">
                        <h3 class="card-title">Cleaning</h3>
                    </div>
                </div>
                <div class="card" style={{ width: '18rem' }}>
                    <img class="card-img-top" src={plumber} alt="Card image cap" />
                    <div class="card-body">
                        <h3 class="card-title">Plumber</h3>
                    </div>
                </div>
                <div class="card" style={{ width: '18rem' }}>
                    <img class="card-img-top" src={driver} alt="Card image cap" />
                    <div class="card-body">
                        <h3 class="card-title">Transportation</h3>
                    </div>
                </div>
                <div class="card" style={{ width: '18rem' }}>
                    <img class="card-img-top" src={itimg} alt="Card image cap" />
                    <div class="card-body">
                        <h3 class="card-title">IT</h3>
                    </div>
                </div>


            </div>
            <Link to="/services"><button id='knowmore' style={visbutton} >know more → </button></Link>

        </div>
    )
}

export default Servicecard
