import React from 'react'
import './Servicecard.css'
import hrimg from './hr.png'
import { NavLink } from 'react-router-dom'
function Servicecard({vis,visbutton}) {
    return (
        <div className='services'>
            <h1>Our Services</h1>
            <div className='serviece1'>

                <div class="card" style={{width: '18rem'}}>
                    <img class="card-img-top" src={hrimg} alt="Card image cap" />
                    <div class="card-body">
                        <h3 class="card-title">HR Outsourcing</h3>
                        <p class="card-text">An end-to-end recruitment process outsourcing (RPO) and employer of record (EOR) services.</p>
                    </div>
                </div>
                <div class="card" style={{width: '18rem'}}>
                    <img class="card-img-top" src={hrimg} alt="Card image cap" />
                    <div class="card-body">
                        <h3 class="card-title">HR Outsourcing</h3>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div class="card" style={{width: '18rem'}}>
                    <img class="card-img-top" src={hrimg} alt="Card image cap" />
                    <div class="card-body">
                        <h3 class="card-title">HR Outsourcing</h3>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div class="card" style={{width: '18rem'}}>
                    <img class="card-img-top" src={hrimg} alt="Card image cap" />
                    <div class="card-body">
                        <h3 class="card-title">HR Outsourcinge</h3>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

            </div>
            <div className='serviece2' style={vis} >
            <div class="card" style={{width: '18rem'}}>
                    <img class="card-img-top" src={hrimg} alt="Card image cap" />
                    <div class="card-body">
                        <h3 class="card-title">HR Outsourcing</h3>
                        <p class="card-text">An end-to-end recruitment process outsourcing (RPO) and employer of record (EOR) services.</p>
                    </div>
                </div>
                <div class="card" style={{width: '18rem'}}>
                    <img class="card-img-top" src={hrimg} alt="Card image cap" />
                    <div class="card-body">
                        <h3 class="card-title">HR Outsourcing</h3>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div class="card" style={{width: '18rem'}}>
                    <img class="card-img-top" src={hrimg} alt="Card image cap" />
                    <div class="card-body">
                        <h3 class="card-title">HR Outsourcing</h3>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div class="card" style={{width: '18rem'}}>
                    <img class="card-img-top" src={hrimg} alt="Card image cap" />
                    <div class="card-body">
                        <h3 class="card-title">HR Outsourcing</h3>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>


            </div>
            <button id='knowmore' style={visbutton} >
                know more
            {/* <NavLink class="nav-link" to="/services" >About</NavLink> */}
            </button>

        </div>
    )
}

export default Servicecard
