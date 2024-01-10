import React from 'react'
import './Wwd.css'
import workericon from './worker_782899.png'
import { Link } from 'react-router-dom'

function Wwd() {
    return (
        <div className='firstcontainer'>
            <div className='leftcontainer'>
                <div className='boxitem1'>
                    <div className="boxitems">
                    <i class="fa-solid fa-user-plus fa-bounce fa-2xl"></i>
                        <h3>Trustworthy Staffing Solution</h3>
                        <p>Offering vetted personnel, dependable staffing solutions ensuring quality, reliability, and seamless workforce support.</p>

                    </div>
                    <div className="boxitems" id='boxitemsspecial'>
                        <i class="fa-solid fa-clock fa-bounce fa-2xl"></i>
                        <h3>Punctual Service Delivery.</h3>
                        <p>Consistently meeting deadlines, timely and reliable service delivery for utmost client satisfaction.</p>
                    </div>
                </div>
                <div className='boxitem2'>
                    <div className="boxitems">
                    <i class="fa-solid fa-screwdriver-wrench fa-flip fa-2xl"></i>
                        <h3>Domain Proficiency.</h3>
                        <p>Cultivating a proven track record spanning over 5 years, specializing in providing adept manpower supply solutions within Qatar's dynamic market</p>

                    </div>
                    <div className="boxitems">
                        <i class="fa-solid fa-file-signature fa-beat fa-2xl"></i>
                        <h3>Custom Contractual Terms.</h3>
                        <p>Tailored agreements meeting unique needs, offering flexible and personalized contractual terms for diverse requirements.</p>

                    </div>

                </div>


            </div>
            <div className="rightcontainer">
                <h1 style={{textAlign:'left',fontWeight:'600'}}>What We Do</h1>
                <h2 style={{fontWeight:'600'}}>Accessing Talent Pools Spanning Asia, Europe, and Africa for Manpower Supply</h2>
                <p>Sky World is a leading overseas manpower supplier dedicated to connecting skilled and reliable workers with businesses and organizations worldwide. With a commitment to excellence, we bridge the gap between talent and opportunities, empowering both our clients and candidates to achieve their goals.</p>
                <p>What sets us apart is our holistic approach towards the recruitment process. Beyond just matching skill sets, we focus on aligning values, aspirations, and cultural compatibility, fostering long-lasting partnerships that resonate with mutual growth and success.</p>
                
                <p id='thirdpara'>Moreover, Sky World acts as more than a mere facilitator; we are advocates for the ambitions of both our clients and candidates. We meticulously curate opportunities that propel careers and elevate businesses, ensuring a mutually beneficial synergy that extends far beyond the initial placement.</p>

                <Link to="/about"> <button>Learn more</button></Link>
                
            </div>
        </div>

    )
}

export default Wwd
